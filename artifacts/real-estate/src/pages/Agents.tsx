import { motion } from "framer-motion";
import { Star, Phone, Mail, Award } from "lucide-react";
import { useListAgents } from "@workspace/api-client-react";

export default function Agents() {
  const { data: agents, isLoading } = useListAgents();

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="bg-[hsl(220,10%,7%)] border-b border-[hsl(220,10%,13%)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Team</span>
            <h1 className="font-serif text-4xl font-bold mt-2">Expert Real Estate Agents</h1>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Work with our hand-picked specialists across residential, commercial, and investment properties. Every agent is verified and rated by past clients.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-[hsl(220,10%,10%)] border border-[hsl(220,10%,15%)] p-6">
                <div className="flex gap-4 mb-5">
                  <div className="w-20 h-20 bg-[hsl(220,10%,15%)]" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-[hsl(220,10%,15%)] w-3/4" />
                    <div className="h-3 bg-[hsl(220,10%,14%)] w-1/2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents?.map((agent, i) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[hsl(220,10%,10%)] border border-[hsl(220,10%,15%)] hover:border-primary/40 transition-all duration-300 p-6 group"
                data-testid={`card-agent-${agent.id}`}
              >
                <div className="flex gap-4 mb-5">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-20 h-20 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80";
                    }}
                    data-testid={`img-agent-${agent.id}`}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`text-agent-name-${agent.id}`}>
                      {agent.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1.5">{agent.title}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                      <span className="text-sm font-semibold text-primary" data-testid={`text-rating-${agent.id}`}>{agent.rating}</span>
                      <span className="text-xs text-muted-foreground">· {agent.yearsExperience}y exp</span>
                    </div>
                  </div>
                </div>

                {agent.bio && (
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {agent.bio}
                  </p>
                )}

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[hsl(220,10%,14%)] p-3">
                    <div className="text-lg font-bold text-foreground">{agent.totalSales}</div>
                    <div className="text-xs text-muted-foreground">Total Sales</div>
                  </div>
                  <div className="bg-[hsl(220,10%,14%)] p-3">
                    <div className="text-lg font-bold text-foreground">{agent.activeListings}</div>
                    <div className="text-xs text-muted-foreground">Active Listings</div>
                  </div>
                </div>

                {/* Specializations */}
                {agent.specializations && agent.specializations.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {agent.specializations.map((s) => (
                      <span key={s} className="px-2 py-0.5 text-xs bg-[hsl(220,10%,14%)] text-foreground/60 border border-[hsl(220,10%,18%)]">
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {/* Languages */}
                {agent.languages && agent.languages.length > 0 && (
                  <p className="text-xs text-muted-foreground mb-4">
                    Languages: {agent.languages.join(", ")}
                  </p>
                )}

                {/* Contact */}
                <div className="flex gap-2 pt-4 border-t border-[hsl(220,10%,15%)]">
                  <a href={`tel:${agent.phone}`} className="flex-1">
                    <button className="w-full py-2 border border-[hsl(220,10%,22%)] text-xs font-semibold flex items-center justify-center gap-1.5 hover:border-primary hover:text-primary transition-all" data-testid={`button-call-${agent.id}`}>
                      <Phone className="w-3.5 h-3.5" /> Call
                    </button>
                  </a>
                  <a href={`mailto:${agent.email}`} className="flex-1">
                    <button className="w-full py-2 bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-primary/90 transition-all" data-testid={`button-email-${agent.id}`}>
                      <Mail className="w-3.5 h-3.5" /> Email
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
