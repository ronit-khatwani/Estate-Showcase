import { useState } from "react";
import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Bed, Bath, Maximize2, Calendar, Car, Layers, ArrowLeft, Phone, Mail, ChevronLeft, ChevronRight, Star, Eye } from "lucide-react";
import { useGetProperty, useGetAgent, useListProperties } from "@workspace/api-client-react";
import { formatPrice, formatArea, statusLabel, typeLabel } from "@/lib/utils";
import PropertyCard from "@/components/PropertyCard";
import PropertySkeleton from "@/components/PropertySkeleton";

declare global {
  interface Window { L: unknown }
}

function LeafletMap({ lat, lng, title }: { lat: number; lng: number; title: string }) {
  // Lazy map via iframe embed
  const url = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.02},${lat - 0.02},${lng + 0.02},${lat + 0.02}&layer=mapnik&marker=${lat},${lng}`;
  return (
    <iframe
      src={url}
      className="w-full h-64 border border-[hsl(220,10%,18%)]"
      loading="lazy"
      title={`Map: ${title}`}
      data-testid="map-iframe"
    />
  );
}

export default function PropertyDetail() {
  const { id } = useParams();
  const propertyId = Number(id);
  const [imgIdx, setImgIdx] = useState(0);

  const { data: property, isLoading } = useGetProperty(propertyId, {
    query: { enabled: !!propertyId, queryKey: ["property", propertyId] as unknown[] },
  });

  const { data: agent } = useGetAgent(property?.agentId ?? 0, {
    query: { enabled: !!property?.agentId, queryKey: ["agent", property?.agentId] as unknown[] },
  });

  const { data: similar } = useListProperties(
    { type: property?.type as "residential", limit: 4, page: 1 },
    { query: { enabled: !!property, queryKey: ["similar", property?.type] as string[] } }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pt-20 max-w-7xl mx-auto px-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-[hsl(220,10%,14%)] w-64" />
          <div className="aspect-[16/7] bg-[hsl(220,10%,12%)]" />
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-3">Property not found</h2>
          <Link href="/properties">
            <button className="px-6 py-2 border border-primary text-primary text-sm">Back to Listings</button>
          </Link>
        </div>
      </div>
    );
  }

  const images = property.images?.length > 0 ? property.images : ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80"];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 py-5">
        <Link href="/properties">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" /> Back to Listings
          </button>
        </Link>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="relative overflow-hidden aspect-[16/7] bg-[hsl(220,10%,10%)]">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIdx}
              src={images[imgIdx]}
              alt={property.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              data-testid="img-detail-hero"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {images.length > 1 && (
            <>
              <button
                onClick={() => setImgIdx((i) => (i - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-primary/80 flex items-center justify-center transition-all"
                data-testid="button-prev-image"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => setImgIdx((i) => (i + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-primary/80 flex items-center justify-center transition-all"
                data-testid="button-next-image"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === imgIdx ? "bg-primary w-5" : "bg-white/40"}`}
                    data-testid={`button-img-dot-${i}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="absolute bottom-0 right-4 flex gap-1.5 pb-4">
              {images.slice(0, 4).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`w-16 h-12 overflow-hidden border-2 transition-all ${i === imgIdx ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"}`}
                  data-testid={`button-thumb-${i}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">
                  {typeLabel(property.type)}
                </span>
                {property.subtype && (
                  <span className="px-2 py-0.5 text-xs border border-[hsl(220,10%,22%)] text-muted-foreground">
                    {property.subtype}
                  </span>
                )}
                <span className={`px-2 py-0.5 text-xs font-medium ${
                  property.status === "for_sale" ? "bg-emerald-500/20 text-emerald-400" :
                  property.status === "for_rent" ? "bg-sky-500/20 text-sky-400" :
                  "bg-rose-500/20 text-rose-400"
                }`}>
                  {statusLabel(property.status)}
                </span>
                <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                  <Eye className="w-3.5 h-3.5" /> {(property.views ?? 0).toLocaleString()} views
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3" data-testid="text-property-title">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{property.address}, {property.city}, {property.state} {property.zipCode}</span>
              </div>
            </div>

            {/* Price */}
            <div className="border-y border-[hsl(220,10%,15%)] py-5 flex flex-wrap gap-8 items-center">
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Price</span>
                <span className="text-4xl font-bold text-primary" data-testid="text-detail-price">
                  {formatPrice(property.price, property.status)}
                </span>
              </div>
              {property.pricePerSqft && (
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Per Sq Ft</span>
                  <span className="text-xl font-semibold text-foreground">₹{property.pricePerSqft.toLocaleString()}</span>
                </div>
              )}
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { Icon: Maximize2, label: "Area", value: formatArea(property.area) },
                property.bedrooms != null && { Icon: Bed, label: "Bedrooms", value: `${property.bedrooms}` },
                property.bathrooms != null && { Icon: Bath, label: "Bathrooms", value: `${property.bathrooms}` },
                property.yearBuilt && { Icon: Calendar, label: "Year Built", value: `${property.yearBuilt}` },
                property.parking != null && { Icon: Car, label: "Parking", value: `${property.parking} spots` },
                property.floors != null && { Icon: Layers, label: "Floors", value: `${property.floors}` },
              ].filter(Boolean).map((stat: unknown) => {
                const s = stat as { Icon: typeof Maximize2; label: string; value: string };
                return (
                  <div key={s.label} className="p-4 bg-[hsl(220,10%,10%)] border border-[hsl(220,10%,15%)]" data-testid={`stat-${s.label.toLowerCase()}`}>
                    <s.Icon className="w-4 h-4 text-primary mb-2" />
                    <div className="text-lg font-semibold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Description */}
            {property.description && (
              <div>
                <h3 className="font-serif text-xl font-semibold mb-4">About This Property</h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-description">
                  {property.description}
                </p>
              </div>
            )}

            {/* Amenities */}
            {property.amenities && property.amenities.length > 0 && (
              <div>
                <h3 className="font-serif text-xl font-semibold mb-4">Amenities & Features</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {property.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Map */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">Location</h3>
              <LeafletMap lat={property.lat} lng={property.lng} title={property.title} />
              <p className="text-xs text-muted-foreground mt-2">
                {property.address}, {property.city}, {property.state}
              </p>
            </div>
          </div>

          {/* Sidebar — Agent */}
          <div className="space-y-6">
            {agent && (
              <div className="bg-[hsl(220,10%,10%)] border border-[hsl(220,10%,16%)] p-6 sticky top-20" data-testid="card-agent">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Listing Agent</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-16 h-16 object-cover"
                    data-testid="img-agent"
                  />
                  <div>
                    <div className="font-semibold text-foreground" data-testid="text-agent-name">{agent.name}</div>
                    <div className="text-xs text-muted-foreground">{agent.title}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                      <span className="text-sm font-semibold text-primary">{agent.rating}</span>
                      <span className="text-xs text-muted-foreground">· {agent.totalSales} sales</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 mb-5">
                  <a
                    href={`tel:${agent.phone}`}
                    className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"
                    data-testid="link-agent-phone"
                  >
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    {agent.phone}
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"
                    data-testid="link-agent-email"
                  >
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    {agent.email}
                  </a>
                </div>

                <div className="space-y-2">
                  <a href={`tel:${agent.phone}`}>
                    <button className="w-full py-3 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors" data-testid="button-call-agent">
                      Call Agent
                    </button>
                  </a>
                  <a href={`mailto:${agent.email}?subject=Inquiry about ${property.title}`}>
                    <button className="w-full py-3 border border-[hsl(220,10%,22%)] text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-all" data-testid="button-email-agent">
                      Send Email
                    </button>
                  </a>
                </div>

                {agent.specializations && agent.specializations.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-[hsl(220,10%,15%)]">
                    <div className="text-xs text-muted-foreground mb-2">Specializations</div>
                    <div className="flex flex-wrap gap-1.5">
                      {agent.specializations.map((s) => (
                        <span key={s} className="px-2 py-0.5 text-xs bg-[hsl(220,10%,15%)] text-foreground/70">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Quick Stats */}
            <div className="bg-[hsl(220,10%,10%)] border border-[hsl(220,10%,16%)] p-5">
              <h4 className="font-semibold text-sm mb-3">Property Summary</h4>
              <div className="space-y-2.5 text-sm">
                {[
                  ["Type", typeLabel(property.type)],
                  ["Status", statusLabel(property.status)],
                  ["Area", formatArea(property.area)],
                  ["Location", `${property.city}, ${property.state}`],
                  property.yearBuilt && ["Year Built", `${property.yearBuilt}`],
                ].filter(Boolean).map((row) => {
                  const [label, value] = row as string[];
                  return (
                    <div key={label} className="flex justify-between">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium text-foreground">{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similar && similar.data && similar.data.filter((p) => p.id !== propertyId).length > 0 && (
          <section className="mt-20 mb-16">
            <h3 className="font-serif text-2xl font-bold mb-8">Similar Properties</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {similar.data.filter((p) => p.id !== propertyId).slice(0, 4).map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
