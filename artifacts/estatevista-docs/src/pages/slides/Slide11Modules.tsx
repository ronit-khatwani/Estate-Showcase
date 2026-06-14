export default function Slide11Modules() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="absolute rounded-full" style={{
        width: "25vw", height: "25vw", left: "-4vw", bottom: "0",
        background: "radial-gradient(circle, rgba(79,127,255,0.14) 0%, transparent 70%)"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          09 / Module Breakdown
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          System Modules
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      <div className="absolute" style={{ top: "26vh", left: "8vw", right: "8vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2vh 2.5vw" }}>
        {[
          {
            title: "Home Module", color: "#4F7FFF",
            items: ["Hero with live search", "Stats counters", "Category grid", "Featured listings", "Top cities section"]
          },
          {
            title: "Properties Module", color: "#7C6BF0",
            items: ["Type / status filters", "Price range slider", "City selector", "Pagination (12/page)", "Sort options"]
          },
          {
            title: "Property Detail", color: "#3DB8A4",
            items: ["Multi-image gallery", "Thumbnails strip", "Key stats (beds/baths/area)", "Amenities grid", "Agent sidebar + contact"]
          },
          {
            title: "Map View Module", color: "#F07840",
            items: ["Leaflet + CartoDB tiles", "Color-coded pins by type", "Price label markers", "Type/status filters", "Popup detail cards"]
          },
          {
            title: "Agents Module", color: "#A8C0FF",
            items: ["Agent directory cards", "Photo, rating, bio", "Sales & listing stats", "Specialization tags", "Contact links"]
          },
          {
            title: "API Module", color: "#4FC3A4",
            items: ["GET /api/properties", "GET /api/agents", "GET /api/stats", "GET /api/search", "Zod-validated I/O"]
          },
        ].map(({ title, color, items }) => (
          <div key={title} style={{
            background: "rgba(15,20,40,0.7)", border: `1px solid ${color}30`,
            borderTop: `3px solid ${color}`,
            borderRadius: "8px", padding: "1.8vh 1.5vw"
          }}>
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.7vw", color, fontWeight: 700, marginBottom: "1.2vh" }}>
              {title}
            </div>
            {items.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6vw", marginBottom: "0.5vh" }}>
                <div style={{ width: "0.35vw", height: "0.35vw", borderRadius: "50%", background: color, flexShrink: 0 }} />
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.45vw", color: "#C8D4F0" }}>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
