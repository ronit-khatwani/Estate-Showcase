export default function Slide03Overview() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="absolute rounded-full" style={{
        width: "35vw", height: "35vw", left: "-8vw", bottom: "-5vh",
        background: "radial-gradient(circle, rgba(79,127,255,0.15) 0%, transparent 70%)"
      }} />

      {/* Header */}
      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          01 / Project Overview
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          What is EstateVista?
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      {/* Two column layout */}
      <div className="absolute" style={{ top: "28vh", left: "8vw", right: "8vw", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "4vw" }}>
        <div>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2vw", color: "#C8D4F0", lineHeight: 1.65, marginBottom: "3vh" }}>
            EstateVista is a full-stack real estate discovery platform built for the Ahmedabad, Gujarat market. It enables users to search, filter, and explore residential, commercial, plot, and industrial properties.
          </p>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2vw", color: "#C8D4F0", lineHeight: 1.65 }}>
            The platform features an interactive Leaflet map, dynamic property listings with Indian Rupee (₹) pricing, agent directory, and a responsive dark-themed UI crafted for premium user experience.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          {[
            { label: "Properties", value: "40+", sub: "Ahmedabad listings" },
            { label: "Agents", value: "6", sub: "Verified professionals" },
            { label: "Property Types", value: "4", sub: "Residential, Commercial, Plot, Industrial" },
          ].map(({ label, value, sub }) => (
            <div key={label} style={{
              background: "rgba(79,127,255,0.08)", border: "1px solid rgba(79,127,255,0.2)",
              borderRadius: "8px", padding: "2vh 2vw"
            }}>
              <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4vw", color: "#4F7FFF", lineHeight: 1 }}>{value}</div>
              <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", color: "#F0F4FF", fontWeight: 600, marginTop: "0.5vh" }}>{label}</div>
              <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#8892AA", marginTop: "0.3vh" }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
