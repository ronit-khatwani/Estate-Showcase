export default function Slide02TOC() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="absolute rounded-full" style={{
        width: "30vw", height: "30vw", right: "-5vw", top: "0",
        background: "radial-gradient(circle, rgba(124,107,240,0.18) 0%, transparent 70%)"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1.2vh" }}>
          Contents
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.5vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          Table of Contents
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      <div className="absolute" style={{ top: "26vh", left: "8vw", right: "8vw", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vh 4vw" }}>
        {[
          ["01", "Project Overview"],
          ["02", "Objectives"],
          ["03", "System Architecture"],
          ["04", "Technology Stack"],
          ["05", "Database ER Diagram"],
          ["06", "Use Case Diagram"],
          ["07", "Activity Diagram — Property Search"],
          ["08", "Activity Diagram — Registration"],
          ["09", "Module Breakdown"],
          ["10", "Frontend Features"],
          ["11", "Backend API"],
          ["12", "Property Listings"],
          ["13", "Map View"],
          ["14", "Key Metrics"],
          ["15", "Future Scope"],
          ["16", "Conclusion"],
        ].map(([num, title]) => (
          <div key={num} style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", color: "#4F7FFF", fontWeight: 700, minWidth: "2.5vw" }}>{num}</span>
            <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.7vw", color: "#C8D4F0", fontWeight: 400 }}>{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
