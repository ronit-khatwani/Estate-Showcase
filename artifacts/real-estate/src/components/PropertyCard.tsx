import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize2, MapPin, Heart, Eye } from "lucide-react";
import { formatPrice, formatArea, statusLabel, typeLabel } from "@/lib/utils";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    type: string;
    subtype?: string | null;
    status: string;
    price: number;
    address: string;
    city: string;
    state: string;
    area: number;
    bedrooms?: number | null;
    bathrooms?: number | null;
    featured?: boolean | null;
    images: string[];
    views?: number | null;
    pricePerSqft?: number | null;
  };
  index?: number;
}

const typeColors: Record<string, string> = {
  residential: "bg-[hsl(43,74%,49%)] text-[hsl(220,10%,8%)]",
  commercial: "bg-[hsl(210,70%,55%)] text-white",
  plot: "bg-[hsl(140,60%,45%)] text-white",
  industrial: "bg-[hsl(0,70%,55%)] text-white",
};

const statusColors: Record<string, string> = {
  for_sale: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  for_rent: "bg-sky-500/20 text-sky-400 border border-sky-500/30",
  sold: "bg-rose-500/20 text-rose-400 border border-rose-500/30",
};

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const [liked, setLiked] = useState(false);
  const img = property.images?.[0] ?? "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="group bg-[hsl(220,10%,10%)] border border-[hsl(220,10%,15%)] hover:border-primary/40 transition-all duration-300 overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
      data-testid={`card-property-${property.id}`}
    >
      <Link href={`/property/${property.id}`}>
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={img}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            style={{ transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80";
            }}
            data-testid={`img-property-${property.id}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className={`px-2 py-0.5 text-xs font-semibold ${typeColors[property.type] ?? typeColors.residential}`}>
              {typeLabel(property.type)}
            </span>
            {!!property.featured && (
              <span className="px-2 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">
                Featured
              </span>
            )}
          </div>

          <span className={`absolute top-3 right-3 px-2 py-0.5 text-xs font-medium ${statusColors[property.status] ?? ""}`}>
            {statusLabel(property.status)}
          </span>

          {/* Like button */}
          <button
            onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
            className="absolute bottom-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-primary/80"
            data-testid={`button-like-${property.id}`}
          >
            <Heart className={`w-4 h-4 transition-colors ${liked ? "fill-primary text-primary" : "text-white"}`} />
          </button>

          {/* Views */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white/70 text-xs">
            <Eye className="w-3 h-3" />
            <span>{(property.views ?? 0).toLocaleString()}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3
              className="font-semibold text-foreground text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors flex-1 mr-2"
              data-testid={`text-title-${property.id}`}
            >
              {property.title}
            </h3>
          </div>

          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
            <MapPin className="w-3 h-3 text-primary shrink-0" />
            <span className="truncate">{property.city}, {property.state}</span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <span
              className="text-xl font-bold text-primary"
              data-testid={`text-price-${property.id}`}
            >
              {formatPrice(property.price, property.status)}
            </span>
            {property.pricePerSqft && (
              <span className="text-xs text-muted-foreground ml-2">
                ${property.pricePerSqft.toLocaleString()}/sqft
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-[hsl(220,10%,15%)] pt-3">
            {property.bedrooms != null && (
              <span className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-primary/70" />
                {property.bedrooms} bd
              </span>
            )}
            {property.bathrooms != null && (
              <span className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-primary/70" />
                {property.bathrooms} ba
              </span>
            )}
            <span className="flex items-center gap-1 ml-auto">
              <Maximize2 className="w-3.5 h-3.5 text-primary/70" />
              {formatArea(property.area)}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
