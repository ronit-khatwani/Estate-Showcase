export default function Slide15MapView() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          13 / Map View
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          Interactive Property Map
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      <div className="absolute" style={{ top: "26vh", left: "8vw", right: "8vw", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "4vw" }}>
        {/* Map mockup */}
        <div style={{ background: "#0D1525", border: "1px solid rgba(79,127,255,0.25)", borderRadius: "8px", overflow: "hidden", height: "56vh", position: "relative" }}>
          {/* Fake map grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(79,127,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
          {/* "Roads" */}
          <div style={{ position: "absolute", top: "40%", left: 0, right: 0, height: "2px", background: "rgba(79,127,255,0.2)" }} />
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "35%", width: "2px", background: "rgba(79,127,255,0.2)" }} />
          <div style={{ position: "absolute", top: "65%", left: 0, right: 0, height: "2px", background: "rgba(79,127,255,0.12)" }} />
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "65%", width: "2px", background: "rgba(79,127,255,0.12)" }} />

          {/* Property pins */}
          {[
            { x: "20%", y: "30%", color: "#4F7FFF", label: "₹1.2Cr" },
            { x: "45%", y: "55%", color: "#7C6BF0", label: "₹4.8Cr" },
            { x: "60%", y: "25%", color: "#4F7FFF", label: "₹65L" },
            { x: "75%", y: "60%", color: "#F07840", label: "₹85L" },
            { x: "30%", y: "70%", color: "#3DB8A4", label: "₹1.9Cr" },
            { x: "55%", y: "40%", color: "#4F7FFF", label: "₹3.5Cr" },
            { x: "15%", y: "55%", color: "#7C6BF0", label: "₹2.1Cr" },
            { x: "80%", y: "35%", color: "#4F7FFF", label: "₹90L" },
          ].map(({ x, y, color, label }) => (
            <div key={label} style={{ position: "absolute", left: x, top: y, transform: "translate(-50%, -100%)" }}>
              <div style={{
                background: color, padding: "0.3vh 0.5vw", borderRadius: "3px",
                fontFamily: "Space Grotesk, sans-serif", fontSize: "0.9vw", color: "#0C0F1A", fontWeight: 700,
                whiteSpace: "nowrap"
              }}>{label}</div>
              <div style={{ width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: `8px solid ${color}`, margin: "0 auto" }} />
            </div>
          ))}

          {/* CartoDB attribution style */}
          <div style={{ position: "absolute", bottom: "1vh", right: "1vw", fontFamily: "Space Grotesk, sans-serif", fontSize: "0.9vw", color: "rgba(136,146,170,0.5)" }}>
            CartoDB Dark Matter tiles
          </div>
        </div>

        {/* Features list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.9vw", color: "#F0F4FF", fontWeight: 600 }}>Map Features</div>
          {[
            { label: "Color-coded pins", desc: "Each property type gets a distinct color marker" },
            { label: "Price labels", desc: "Floating ₹ price visible directly on the map" },
            { label: "Dark CartoDB tiles", desc: "Matches the platform's dark theme aesthetic" },
            { label: "Type + Status filters", desc: "Filter visible pins by property type and status" },
            { label: "Interactive popups", desc: "Click any pin to see property name and CTA" },
          ].map(({ label, desc }) => (
            <div key={label} style={{ display: "flex", gap: "1.2vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#4F7FFF", flexShrink: 0, marginTop: "0.7vh" }} />
              <div>
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", color: "#F0F4FF", fontWeight: 600 }}>{label}</div>
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#8892AA" }}>{desc}</div>
              </div>
            </div>
          ))}
          {/* Pin legend */}
          <div style={{ borderTop: "1px solid rgba(79,127,255,0.2)", paddingTop: "1.5vh", display: "flex", gap: "1.5vw", flexWrap: "wrap" }}>
            {[
              ["Residential", "#4F7FFF"],
              ["Commercial", "#7C6BF0"],
              ["Plot", "#3DB8A4"],
              ["Industrial", "#F07840"],
            ].map(([type, color]) => (
              <div key={type} style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
                <div style={{ width: "1vw", height: "1vw", borderRadius: "2px", background: String(color) }} />
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.3vw", color: "#8892AA" }}>{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
