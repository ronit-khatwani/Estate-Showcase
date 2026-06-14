export default function Slide06TechStack() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="absolute rounded-full" style={{
        width: "28vw", height: "28vw", right: "-4vw", bottom: "5vh",
        background: "radial-gradient(circle, rgba(79,127,255,0.16) 0%, transparent 70%)"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          04 / Technology Stack
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          Technologies Used
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      <div className="absolute" style={{ top: "26vh", left: "8vw", right: "8vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5vh 2.5vw" }}>
        {[
          { category: "Frontend", color: "#4F7FFF", items: ["React 18", "Vite 5", "Tailwind CSS v4", "Framer Motion", "React Leaflet"] },
          { category: "Backend", color: "#7C6BF0", items: ["Node.js 24", "Express 5", "TypeScript 5.9", "Zod v4", "Drizzle ORM"] },
          { category: "Database", color: "#3DB8A4", items: ["PostgreSQL", "Drizzle Schema", "drizzle-zod", "Migration tools", "Seed scripts"] },
          { category: "API Layer", color: "#F07840", items: ["OpenAPI 3.0", "Orval codegen", "React Query", "REST endpoints", "Zod validation"] },
          { category: "Dev Tools", color: "#A8C0FF", items: ["pnpm workspaces", "esbuild", "TypeScript refs", "ESLint", "Prettier"] },
          { category: "Maps & UX", color: "#4FC3A4", items: ["Leaflet.js", "CartoDB dark tiles", "OpenStreetMap", "Playfair Display", "Inter font"] },
        ].map(({ category, color, items }) => (
          <div key={category} style={{
            background: "rgba(15,20,40,0.7)", border: `1px solid ${color}33`,
            borderRadius: "8px", padding: "1.8vh 1.5vw"
          }}>
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", color, fontWeight: 700, marginBottom: "1.2vh", borderBottom: `1px solid ${color}22`, paddingBottom: "0.8vh" }}>
              {category}
            </div>
            {items.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.7vw", marginBottom: "0.6vh" }}>
                <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", background: color, flexShrink: 0 }} />
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", color: "#C8D4F0" }}>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
