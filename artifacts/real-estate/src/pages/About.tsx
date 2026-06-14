import { motion } from "framer-motion";
import { useGetMarketStats } from "@workspace/api-client-react";
import StatCounter from "@/components/StatCounter";

export default function About() {
  const { data: stats } = useGetMarketStats();

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=90"
          alt="About"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[hsl(220,10%,8%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary block mb-3">Our Story</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white">About EstateVista</h1>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-serif text-4xl font-bold">Redefining Real Estate Discovery</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            EstateVista was founded with one belief: finding a property should be as inspiring as the property itself.
            We combine market intelligence, cinematic presentation, and expert guidance to connect buyers, renters, and
            investors with their ideal spaces — from studio apartments to sprawling industrial estates.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We cover every segment of the market: residential homes and luxury condos, commercial offices and retail spaces,
            development plots and agricultural land, warehouses and manufacturing facilities. If there's a property, we list it.
            If there's a deal to be made, our agents close it.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      {stats && (
        <section className="py-20 bg-[hsl(220,10%,7%)] border-y border-[hsl(220,10%,12%)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <StatCounter value={stats.totalListings} suffix="+" label="Properties Listed" />
              <StatCounter value={stats.totalAgents} suffix="+" label="Certified Agents" />
              <StatCounter value={stats.sold} suffix="+" label="Successful Deals" />
              <StatCounter value={10} suffix="+" label="Years in Market" />
            </div>
          </div>
        </section>
      )}

      {/* Values */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">What We Stand For</span>
          <h2 className="font-serif text-4xl font-bold mt-2">Our Core Values</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Transparency", desc: "Every listing is verified. Every price is real. No hidden fees, no bait-and-switch. We believe trust is the foundation of every transaction." },
            { title: "Excellence", desc: "From photography to agent quality, we hold every touchpoint to a premium standard. Our users expect the best — and we deliver." },
            { title: "Innovation", desc: "Market data, interactive maps, AI-powered search — we continuously invest in tools that give our users a genuine edge in the market." },
          ].map(({ title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-[hsl(220,10%,15%)] hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-1 h-10 bg-primary mb-5" />
              <h3 className="font-serif text-xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
