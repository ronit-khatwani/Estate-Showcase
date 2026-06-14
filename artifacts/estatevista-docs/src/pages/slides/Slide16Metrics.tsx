export default function Slide16Metrics() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="absolute rounded-full" style={{
        width: "35vw", height: "35vw", right: "-8vw", bottom: "-5vh",
        background: "radial-gradient(circle, rgba(79,127,255,0.14) 0%, transparent 70%)"
      }} />
      <div className="absolute rounded-full" style={{
        width: "25vw", height: "25vw", left: "-4vw", top: "5vh",
        background: "radial-gradient(circle, rgba(124,107,240,0.12) 0%, transparent 70%)"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          14 / Key Metrics
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          Platform Highlights
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      <div className="absolute" style={{ top: "28vh", left: "8vw", right: "8vw" }}>
        {/* Big stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2vw", marginBottom: "3vh" }}>
          {[
            { value: "40+", label: "Properties", color: "#4F7FFF" },
            { value: "6", label: "Agents", color: "#7C6BF0" },
            { value: "12", label: "Neighborhoods", color: "#3DB8A4" },
            { value: "4", label: "Property Types", color: "#F07840" },
          ].map(({ value, label, color }) => (
            <div key={label} style={{
              background: `${color}0F`, border: `1px solid ${color}30`,
              borderRadius: "8px", padding: "2.5vh 0", textAlign: "center"
            }}>
              <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "6vw", color, lineHeight: 1 }}>{value}</div>
              <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", color: "#C8D4F0", fontWeight: 500, marginTop: "0.8vh" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Secondary stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2vw" }}>
          {[
            { value: "Express 5", label: "API Framework", color: "#A8C0FF" },
            { value: "React 18", label: "UI Framework", color: "#A8C0FF" },
            { value: "TypeScript", label: "Language", color: "#A8C0FF" },
            { value: "PostgreSQL", label: "Database", color: "#A8C0FF" },
            { value: "Leaflet", label: "Map Library", color: "#A8C0FF" },
            { value: "Orval", label: "API Codegen", color: "#A8C0FF" },
          ].map(({ value, label }) => (
            <div key={label} style={{
              background: "rgba(79,127,255,0.05)", border: "1px solid rgba(79,127,255,0.12)",
              borderRadius: "6px", padding: "1.5vh 1.5vw", display: "flex", alignItems: "center", gap: "1.2vw"
            }}>
              <div style={{ width: "3px", height: "3vh", background: "linear-gradient(#4F7FFF,#7C6BF0)" }} />
              <div>
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", color: "#F0F4FF", fontWeight: 700 }}>{value}</div>
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.3vw", color: "#8892AA" }}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
