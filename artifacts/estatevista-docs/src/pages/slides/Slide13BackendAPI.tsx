export default function Slide13BackendAPI() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          11 / Backend API
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          Express API Endpoints
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      <div className="absolute" style={{ top: "26vh", left: "8vw", right: "8vw", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5vh 4vw" }}>
        {[
          {
            method: "GET", path: "/api/properties", color: "#4F7FFF",
            desc: "List all properties with optional filters: type, status, city, minPrice, maxPrice, bedrooms, page, limit."
          },
          {
            method: "GET", path: "/api/properties/:id", color: "#4F7FFF",
            desc: "Fetch single property by ID including full details, images array, amenities, and associated agent data."
          },
          {
            method: "GET", path: "/api/agents", color: "#7C6BF0",
            desc: "List all agents with name, photo, rating, specialization, totalSales and linked property count."
          },
          {
            method: "GET", path: "/api/agents/:id", color: "#7C6BF0",
            desc: "Get single agent profile with full bio and all properties listed by that agent."
          },
          {
            method: "GET", path: "/api/stats", color: "#3DB8A4",
            desc: "Platform summary: total properties, agents, cities covered, and property type distribution counts."
          },
          {
            method: "GET", path: "/api/search", color: "#F07840",
            desc: "Autocomplete search: returns matching property titles and neighborhoods for live search suggestions."
          },
        ].map(({ method, path, color, desc }) => (
          <div key={path} style={{
            background: "rgba(15,20,40,0.7)", border: `1px solid ${color}25`,
            borderRadius: "8px", padding: "1.8vh 1.8vw"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "0.8vh" }}>
              <span style={{
                fontFamily: "Space Grotesk, sans-serif", fontSize: "1.3vw", fontWeight: 700,
                color: "#0C0F1A", background: color, padding: "0.2vh 0.6vw", borderRadius: "4px"
              }}>{method}</span>
              <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", color, fontWeight: 600 }}>{path}</span>
            </div>
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.45vw", color: "#8892AA", lineHeight: 1.5 }}>{desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
