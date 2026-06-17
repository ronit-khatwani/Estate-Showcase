import { useState, useEffect } from "react";
import { Link } from "wouter";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { motion } from "framer-motion";
import { X, SlidersHorizontal } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useGetPropertiesForMap } from "@workspace/api-client-react";
import { formatPrice, typeColor } from "@/lib/utils";

// Fix Leaflet default icon
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

function createPriceIcon(price: number, type: string, status: string) {
  const color = typeColor(type);
  const label = formatPrice(price).replace(/\s+/g, "");
  const opacity = status === "sold" ? "0.5" : "1";
  return L.divIcon({
    className: "",
    html: `<div style="background:${color};color:#111;padding:3px 8px;font-size:11px;font-weight:700;white-space:nowrap;border-radius:0;box-shadow:0 2px 8px rgba(0,0,0,0.5);opacity:${opacity}">${label}</div>`,
    iconAnchor: [30, 10],
  });
}

function RecenterMap({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 10, { animate: true });
  }, [center, map]);
  return null;
}

export default function MapView() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const { data: pins, isLoading } = useGetPropertiesForMap(
    { type: typeFilter, status: statusFilter },
    { query: { queryKey: ["map-pins", typeFilter, statusFilter] as string[] } }
  );

  const selectedPin = pins?.find((p) => p.id === selected);

  return (
    <div className="h-screen pt-16 flex flex-col bg-background" data-testid="page-map">
      {/* Header */}
      <div className="px-6 py-3 border-b border-[hsl(220,10%,14%)] bg-[hsl(220,10%,8%)] flex items-center gap-4 flex-wrap z-10">
        <h1 className="font-serif text-lg font-semibold">Map View</h1>
        <span className="text-xs text-muted-foreground">{pins?.length ?? "..."} properties</span>

        {/* Type filter */}
        <div className="flex gap-1 flex-wrap ml-auto">
          {["all", "residential", "commercial", "plot", "industrial"].map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-all ${
                typeFilter === t ? "bg-primary text-primary-foreground" : "border border-[hsl(220,10%,22%)] text-muted-foreground hover:border-primary/50"
              }`}
              data-testid={`map-filter-type-${t}`}
            >
              {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex gap-1">
          {["all", "for_sale", "for_rent"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1 text-xs uppercase tracking-wider transition-all ${
                statusFilter === s ? "bg-primary text-primary-foreground" : "border border-[hsl(220,10%,22%)] text-muted-foreground hover:border-primary/50"
              }`}
              data-testid={`map-filter-status-${s}`}
            >
              {s === "all" ? "All" : s === "for_sale" ? "For Sale" : "For Rent"}
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-muted-foreground animate-pulse">Loading map...</div>
          </div>
        ) : (
          <MapContainer
            center={[23.03, 72.58]}
            zoom={12}
            className="w-full h-full"
            style={{ background: "#0d0d0d" }}
            data-testid="leaflet-map"
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {pins?.map((pin) => (
              <Marker
                key={pin.id}
                position={[pin.lat, pin.lng]}
                icon={createPriceIcon(pin.price, pin.type, pin.status ?? "for_sale")}
                eventHandlers={{ click: () => setSelected(pin.id) }}
              >
                <Popup className="leaflet-popup-dark">
                  <div
                    style={{
                      background: "hsl(220,10%,10%)",
                      border: "1px solid hsl(220,10%,22%)",
                      borderRadius: 0,
                      padding: "10px",
                      minWidth: "200px",
                      color: "hsl(0,0%,98%)",
                    }}
                  >
                    {pin.image && (
                      <img
                        src={pin.image.replace(/"/g, "")}
                        alt={pin.title}
                        style={{ width: "100%", height: "100px", objectFit: "cover", marginBottom: "8px" }}
                        onError={(e) => (e.currentTarget.style.display = "none")}
                      />
                    )}
                    <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>{pin.title}</div>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: "hsl(43,74%,49%)" }}>
                      {formatPrice(pin.price, pin.status ?? "")}
                    </div>
                    <div style={{ marginTop: "8px" }}>
                      <a
                        href={`/property/${pin.id}`}
                        style={{ color: "hsl(43,74%,49%)", fontSize: "12px", textDecoration: "underline" }}
                      >
                        View Details →
                      </a>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}

        {/* Legend */}
        <div className="absolute bottom-6 left-4 z-[1000] bg-[hsl(220,10%,10%)]/95 backdrop-blur-sm border border-[hsl(220,10%,18%)] p-3 space-y-1.5">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Property Type</div>
          {[["residential", "#c9a94b"], ["commercial", "#4b8ec9"], ["plot", "#4bc97a"], ["industrial", "#c94b4b"]].map(
            ([type, color]) => (
              <div key={type} className="flex items-center gap-2">
                <div className="w-3 h-3" style={{ background: color }} />
                <span className="text-xs text-foreground/70 capitalize">{type}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
