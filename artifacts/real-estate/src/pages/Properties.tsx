import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, ChevronDown, LayoutGrid, List } from "lucide-react";
import { useListProperties, useGetMarketStats } from "@workspace/api-client-react";
import PropertyCard from "@/components/PropertyCard";
import PropertySkeleton from "@/components/PropertySkeleton";
import { typeLabel, statusLabel, formatPrice } from "@/lib/utils";

const PROPERTY_TYPES = ["all", "residential", "commercial", "plot", "industrial"];
const STATUS_TYPES = ["all", "for_sale", "for_rent", "sold"];
const SORT_OPTIONS = [
  { value: "newest", label: "Newest First" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "area", label: "Largest Area" },
];

function parseQuery(search: string) {
  const p = new URLSearchParams(search);
  return {
    type: p.get("type") ?? "all",
    status: p.get("status") ?? "all",
    city: p.get("city") ?? "",
    sortBy: p.get("sortBy") ?? "newest",
  };
}

export default function Properties({ forcedType }: { forcedType?: string }) {
  const [location] = useLocation();
  const urlParams = parseQuery(window.location.search);
  const initialType = forcedType ?? urlParams.type;

  const [type, setType] = useState(initialType);
  const [status, setStatus] = useState(urlParams.status);
  const [city, setCity] = useState(urlParams.city);
  const [sortBy, setSortBy] = useState(urlParams.sortBy);
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [minBeds, setMinBeds] = useState<number | undefined>();
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [type, status, city, sortBy, minPrice, maxPrice, minBeds]);

  const { data, isLoading } = useListProperties(
    { type: type as "all", status: status as "all", city: city || undefined, sortBy: sortBy as "newest", minPrice, maxPrice, bedrooms: minBeds, page, limit: 12 },
    { query: { queryKey: ["properties", type, status, city, sortBy, minPrice, maxPrice, minBeds, page] as string[] } }
  );

  const { data: stats } = useGetMarketStats();

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Page Header */}
      <div className="bg-[hsl(220,10%,7%)] border-b border-[hsl(220,10%,13%)] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {forcedType ? typeLabel(forcedType) : "All Properties"}
            </span>
            <h1 className="font-serif text-4xl font-bold mt-2 mb-3">
              {forcedType ? `${typeLabel(forcedType)} Properties` : "Property Listings"}
            </h1>
            {stats && (
              <p className="text-sm text-muted-foreground">
                {data?.total ?? "..."} properties found · Avg. price {formatPrice(stats.avgPrice)}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters Bar */}
        <div className="flex flex-wrap gap-3 mb-8 items-center">
          {/* Type filter (hide if forcedType) */}
          {!forcedType && (
            <div className="flex gap-1 flex-wrap">
              {PROPERTY_TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    type === t
                      ? "bg-primary text-primary-foreground"
                      : "border border-[hsl(220,10%,20%)] text-muted-foreground hover:border-primary/50 hover:text-primary"
                  }`}
                  data-testid={`filter-type-${t}`}
                >
                  {t === "all" ? "All" : typeLabel(t)}
                </button>
              ))}
            </div>
          )}

          {/* Status filter */}
          <div className="flex gap-1">
            {STATUS_TYPES.map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  status === s
                    ? "bg-primary text-primary-foreground"
                    : "border border-[hsl(220,10%,20%)] text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
                data-testid={`filter-status-${s}`}
              >
                {s === "all" ? "All" : statusLabel(s)}
              </button>
            ))}
          </div>

          <div className="ml-auto flex gap-3 items-center">
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[hsl(220,10%,12%)] border border-[hsl(220,10%,20%)] text-sm text-foreground px-4 py-2 pr-8 focus:outline-none focus:border-primary cursor-pointer"
                data-testid="select-sort"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
            </div>

            {/* Advanced filters toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`flex items-center gap-2 px-4 py-2 text-sm border transition-all duration-200 ${
                filtersOpen ? "border-primary text-primary bg-primary/10" : "border-[hsl(220,10%,20%)] text-muted-foreground hover:border-primary/50"
              }`}
              data-testid="button-filters"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="bg-[hsl(220,10%,9%)] border border-[hsl(220,10%,16%)] p-5 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Ahmedabad"
                    className="w-full bg-[hsl(220,10%,14%)] border border-[hsl(220,10%,20%)] px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    data-testid="input-city-filter"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Min Price</label>
                  <input
                    type="number"
                    value={minPrice ?? ""}
                    onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : undefined)}
                    placeholder="Min ₹"
                    className="w-full bg-[hsl(220,10%,14%)] border border-[hsl(220,10%,20%)] px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    data-testid="input-min-price"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Max Price</label>
                  <input
                    type="number"
                    value={maxPrice ?? ""}
                    onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : undefined)}
                    placeholder="Max ₹"
                    className="w-full bg-[hsl(220,10%,14%)] border border-[hsl(220,10%,20%)] px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    data-testid="input-max-price"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Min Bedrooms</label>
                  <select
                    value={minBeds ?? ""}
                    onChange={(e) => setMinBeds(e.target.value ? Number(e.target.value) : undefined)}
                    className="w-full bg-[hsl(220,10%,14%)] border border-[hsl(220,10%,20%)] px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    data-testid="select-bedrooms"
                  >
                    <option value="">Any</option>
                    {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}+</option>)}
                  </select>
                </div>
                <button
                  onClick={() => { setCity(""); setMinPrice(undefined); setMaxPrice(undefined); setMinBeds(undefined); }}
                  className="col-span-full md:col-span-1 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors w-fit"
                  data-testid="button-clear-filters"
                >
                  <X className="w-3.5 h-3.5" /> Clear All Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 12 }).map((_, i) => <PropertySkeleton key={i} />)}
          </div>
        ) : data?.data.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No properties match your filters.</p>
            <button
              onClick={() => { setType("all"); setStatus("all"); setCity(""); }}
              className="mt-4 px-6 py-2 border border-primary text-primary text-sm hover:bg-primary/10 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <AnimatePresence mode="wait">
                {data?.data.map((p, i) => (
                  <PropertyCard key={`${p.id}-${page}`} property={p} index={i} />
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            {data && (data.totalPages ?? 1) > 1 && (
              <div className="flex justify-center gap-2 mt-12">
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 border border-[hsl(220,10%,20%)] text-sm disabled:opacity-30 hover:border-primary hover:text-primary transition-colors"
                  data-testid="button-prev-page"
                >
                  Previous
                </button>
                {Array.from({ length: data.totalPages ?? 1 }, (_, i) => i + 1).map((p: number) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-10 h-10 text-sm transition-colors ${
                      p === page ? "bg-primary text-primary-foreground" : "border border-[hsl(220,10%,20%)] hover:border-primary hover:text-primary"
                    }`}
                    data-testid={`button-page-${p}`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage(Math.min(data.totalPages ?? 1, page + 1))}
                  disabled={page === (data.totalPages ?? 1)}
                  className="px-4 py-2 border border-[hsl(220,10%,20%)] text-sm disabled:opacity-30 hover:border-primary hover:text-primary transition-colors"
                  data-testid="button-next-page"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
