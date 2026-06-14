export default function Slide18Conclusion() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      {/* Grid overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.06) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      {/* Blue orb */}
      <div className="absolute rounded-full" style={{
        width: "40vw", height: "40vw", left: "-8vw", bottom: "-5vh",
        background: "radial-gradient(circle, rgba(79,127,255,0.22) 0%, transparent 70%)"
      }} />
      {/* Purple orb */}
      <div className="absolute rounded-full" style={{
        width: "30vw", height: "30vw", right: "-4vw", top: "5vh",
        background: "radial-gradient(circle, rgba(124,107,240,0.2) 0%, transparent 70%)"
      }} />

      {/* Top label */}
      <div className="absolute" style={{ top: "7vh", left: "50%", transform: "translateX(-50%)" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.6vw",
          background: "rgba(79,127,255,0.12)", border: "1px solid rgba(79,127,255,0.35)",
          borderRadius: "100px", padding: "0.5vh 1.8vw"
        }}>
          <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#4F7FFF" }} />
          <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", color: "#A8C0FF", letterSpacing: "0.08em", fontWeight: 500 }}>
            16 / Conclusion
          </span>
        </div>
      </div>

      {/* Center content */}
      <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", width: "80vw" }}>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "6vw", color: "#F0F4FF", lineHeight: 1.1, marginBottom: "3vh", textWrap: "balance" }}>
          A complete real estate platform for modern Ahmedabad
        </div>
        <div style={{ width: "10vw", height: "2px", background: "linear-gradient(90deg, transparent, #4F7FFF, #7C6BF0, transparent)", margin: "0 auto 3vh" }} />
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.9vw", color: "#8892AA", lineHeight: 1.7, maxWidth: "60vw", margin: "0 auto 4vh" }}>
          EstateVista demonstrates a full production-grade stack — contract-first API, typed codegen, interactive maps, and premium UX — applied to a real local market.
        </div>

        {/* Summary chips */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5vw", flexWrap: "wrap", marginBottom: "4vh" }}>
          {["Full-Stack TypeScript", "OpenAPI Contract-First", "React + Express + PostgreSQL", "Leaflet Maps", "40+ Ahmedabad Properties"].map((tag) => (
            <div key={tag} style={{
              background: "rgba(79,127,255,0.1)", border: "1px solid rgba(79,127,255,0.28)",
              borderRadius: "100px", padding: "0.5vh 1.2vw",
              fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#A8C0FF"
            }}>{tag}</div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute" style={{ bottom: "6vh", left: "10vw", right: "10vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", color: "#F0F4FF", fontWeight: 600 }}>Ronit Khatwani</div>
          <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#8892AA" }}>Enrollment: 823000128663MSCIT</div>
        </div>
        <div style={{ width: "1px", height: "5vh", background: "rgba(79,127,255,0.3)" }} />
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "1.8vw", color: "#4F7FFF" }}>EstateVista</div>
          <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#8892AA" }}>BAOU — MSc IT Project</div>
        </div>
      </div>
    </div>
  );
}
