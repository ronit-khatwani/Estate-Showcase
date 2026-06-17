import { useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, ChevronDown, ArrowRight, TrendingUp, Shield, Award, Users } from "lucide-react";
import {
  useGetFeaturedProperties,
  useGetMarketStats,
  useGetCityStats,
  useGetRecentProperties,
  useGetSearchSuggestions,
} from "@workspace/api-client-react";
import { formatPrice } from "@/lib/utils";
import PropertyCard from "@/components/PropertyCard";
import PropertySkeleton from "@/components/PropertySkeleton";
import StatCounter from "@/components/StatCounter";

const categoryCards = [
  { type: "residential", label: "Residential", desc: "Apartments, villas, condos & townhouses", href: "/residential", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { type: "commercial", label: "Commercial", desc: "Offices, retail & restaurants", href: "/commercial", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" },
  { type: "plot", label: "Plots & Land", desc: "Investment land & development sites", href: "/plots", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80" },
  { type: "industrial", label: "Industrial", desc: "Warehouses, factories & logistics", href: "/industrial", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [searchQuery, setSearchQuery] = useState("");
  const [, setLocation] = useLocation();

  const { data: featured, isLoading: featuredLoading } = useGetFeaturedProperties();
  const { data: stats } = useGetMarketStats();
  const { data: cityStats } = useGetCityStats();
  const { data: recent, isLoading: recentLoading } = useGetRecentProperties();
  const { data: suggestions } = useGetSearchSuggestions(
    { q: searchQuery },
    { query: { enabled: searchQuery.length > 2, queryKey: ["search-suggestions", searchQuery] as string[] } }
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) setLocation(`/properties?city=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden" ref={heroRef}>
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 scale-110"
        >
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[hsl(220,10%,8%)]" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-3"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary border border-primary/40 px-3 py-1">
              Premium Real Estate Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 max-w-5xl"
          >
            Find Your
            <br />
            <span className="text-primary italic">Perfect</span> Space
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="text-lg text-white/70 mb-10 max-w-xl"
          >
            Residential, commercial, plots & industrial properties across the nation's most desirable markets.
          </motion.p>

          {/* Search */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            onSubmit={handleSearch}
            className="relative w-full max-w-2xl"
          >
            <div className="flex gap-0 bg-white/10 backdrop-blur-md border border-white/20 p-1">
              <input
                type="text"
                placeholder="Search by city, neighborhood or property..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent px-4 py-3.5 text-white placeholder:text-white/50 outline-none text-sm"
                data-testid="input-search"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors"
                data-testid="button-search"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>

            {/* Autocomplete */}
            {suggestions && suggestions.length > 0 && searchQuery.length > 2 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[hsl(220,10%,10%)] border border-[hsl(220,10%,20%)] shadow-2xl z-50">
                {suggestions.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setSearchQuery(s.label);
                      if (s.type === "city") setLocation(`/properties?city=${encodeURIComponent(s.label.split(",")[0])}`);
                      else if (s.type === "property") setLocation(`/properties`);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-[hsl(220,10%,14%)] flex items-center justify-between transition-colors"
                    data-testid={`suggestion-${s.id}`}
                  >
                    <span>{s.label}</span>
                    {s.count && <span className="text-xs text-muted-foreground">{s.count} listings</span>}
                  </button>
                ))}
              </div>
            )}
          </motion.form>

          {/* Quick type links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-4 mt-6 flex-wrap justify-center"
          >
            {[
              ["For Sale", "/properties?status=for_sale"],
              ["For Rent", "/properties?status=for_rent"],
              ["Plots", "/plots"],
              ["Commercial", "/commercial"],
            ].map(([label, href]) => (
              <Link key={href} href={href}>
                <span className="text-xs text-white/60 hover:text-primary transition-colors cursor-pointer underline underline-offset-4 decoration-white/20 hover:decoration-primary">
                  {label}
                </span>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      {stats && (
        <section className="py-20 bg-[hsl(220,10%,7%)] border-y border-[hsl(220,10%,12%)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <StatCounter value={stats.totalListings} suffix="+" label="Total Listings" />
              <StatCounter value={stats.totalAgents} suffix="+" label="Expert Agents" />
              <StatCounter value={stats.avgPrice} prefix="₹" suffix="" label="Avg. Property Price" />
              <StatCounter value={stats.sold} suffix="+" label="Properties Sold" />
            </div>
          </div>
        </section>
      )}

      {/* CATEGORIES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">All Categories</span>
          <h2 className="font-serif text-4xl font-bold mt-2">Browse by Property Type</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryCards.map((cat, i) => (
            <motion.div
              key={cat.type}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={cat.href}>
                <div
                  className="relative overflow-hidden aspect-[3/4] group cursor-pointer"
                  data-testid={`card-category-${cat.type}`}
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-xl font-bold text-white mb-1">{cat.label}</h3>
                    <p className="text-xs text-white/60 mb-3">{cat.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-24 bg-[hsl(220,10%,7%)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Hand-picked</span>
              <h2 className="font-serif text-4xl font-bold mt-2">Featured Properties</h2>
            </div>
            <Link href="/properties">
              <span className="hidden md:flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer">
                View All <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredLoading
              ? Array.from({ length: 8 }).map((_, i) => <PropertySkeleton key={i} />)
              : featured?.slice(0, 8).map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Advantage</span>
          <h2 className="font-serif text-4xl font-bold mt-2">Why Choose EstateVista</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { Icon: TrendingUp, title: "Market Intelligence", desc: "Real-time price trends and neighborhood analytics to guide your investment decisions." },
            { Icon: Shield, title: "Verified Listings", desc: "Every property is verified by our team. No duplicates, no ghost listings — just real opportunities." },
            { Icon: Award, title: "Premium Experience", desc: "Curated listings with cinematic photography, detailed specs, and virtual tours." },
            { Icon: Users, title: "Expert Agents", desc: "Work with top-rated specialists across residential, commercial, and investment properties." },
          ].map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 border border-[hsl(220,10%,15%)] hover:border-primary/30 transition-all duration-300 group"
              data-testid={`card-feature-${i}`}
            >
              <div className="w-12 h-12 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOP CITIES */}
      {cityStats && cityStats.length > 0 && (
        <section className="py-24 bg-[hsl(220,10%,7%)]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Top Markets</span>
              <h2 className="font-serif text-4xl font-bold mt-2">Browse by City</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {cityStats.slice(0, 10).map((city, i) => (
                <motion.div
                  key={city.city}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link href={`/properties?city=${encodeURIComponent(city.city)}`}>
                    <div
                      className="p-4 bg-[hsl(220,10%,10%)] border border-[hsl(220,10%,15%)] hover:border-primary/40 transition-all duration-300 cursor-pointer group"
                      data-testid={`card-city-${city.city.toLowerCase()}`}
                    >
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{city.city}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{city.state}</div>
                      <div className="text-xs text-primary mt-2">{city.count} listings</div>
                      <div className="text-xs text-muted-foreground">avg {formatPrice(city.avgPrice)}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RECENT PROPERTIES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Just Listed</span>
            <h2 className="font-serif text-4xl font-bold mt-2">Newest Properties</h2>
          </div>
          <Link href="/properties?sortBy=newest">
            <span className="hidden md:flex items-center gap-2 text-sm text-primary cursor-pointer">
              View All <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recentLoading
            ? Array.from({ length: 4 }).map((_, i) => <PropertySkeleton key={i} />)
            : recent?.slice(0, 4).map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
          alt="CTA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Ready to Find Your <span className="text-primary">Dream Property?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
            Connect with our expert agents today and get personalized guidance on your real estate journey.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/properties">
              <button
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_30px_hsl(43,74%,49%,0.5)]"
                data-testid="button-explore-cta"
              >
                Explore Properties
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border border-white/40 text-white font-semibold hover:border-primary hover:text-primary transition-all duration-200">
                Talk to an Agent
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
