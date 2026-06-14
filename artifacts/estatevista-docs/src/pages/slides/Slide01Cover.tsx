export default function Slide01Cover() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      {/* Grid overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.06) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      {/* Blue blur orb left */}
      <div className="absolute rounded-full" style={{
        width: "38vw", height: "38vw",
        left: "-8vw", top: "10vh",
        background: "radial-gradient(circle, rgba(79,127,255,0.28) 0%, transparent 70%)",
        filter: "blur(2px)"
      }} />
      {/* Purple blur orb right */}
      <div className="absolute rounded-full" style={{
        width: "32vw", height: "32vw",
        right: "-4vw", bottom: "5vh",
        background: "radial-gradient(circle, rgba(124,107,240,0.26) 0%, transparent 70%)",
        filter: "blur(2px)"
      }} />

      {/* Badge pill */}
      <div className="absolute" style={{ top: "7vh", left: "50%", transform: "translateX(-50%)" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.6vw",
          background: "rgba(79,127,255,0.12)",
          border: "1px solid rgba(79,127,255,0.35)",
          borderRadius: "100px",
          padding: "0.5vh 1.8vw",
          backdropFilter: "blur(8px)"
        }}>
          <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#4F7FFF" }} />
          <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", color: "#A8C0FF", letterSpacing: "0.08em", fontWeight: 500 }}>
            MSc IT Project Documentation
          </span>
        </div>
      </div>

      {/* Main title */}
      <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", width: "80vw" }}>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "7.5vw", color: "#F0F4FF", lineHeight: 1.05, marginBottom: "2.5vh", textWrap: "balance" }}>
          EstateVista
        </div>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2.2vw", color: "#4F7FFF", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4vh" }}>
          Real Estate Platform
        </div>
        {/* Divider line */}
        <div style={{ width: "12vw", height: "2px", background: "linear-gradient(90deg, transparent, #4F7FFF, #7C6BF0, transparent)", margin: "0 auto 4vh" }} />
        {/* Student info */}
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.8vw", color: "#8892AA", lineHeight: 1.7 }}>
          <span style={{ color: "#F0F4FF", fontWeight: 500 }}>Ronit Khatwani</span>
          <span style={{ margin: "0 1vw", color: "#4F7FFF" }}>|</span>
          <span>Enrollment: 823000128663MSCIT</span>
        </div>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6vw", color: "#8892AA", marginTop: "0.8vh" }}>
          Baba Saheb Ambedkar Open University (BAOU), Ahmedabad
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute" style={{ bottom: "6vh", left: "10vw", right: "10vw", height: "1px", background: "linear-gradient(90deg, transparent, rgba(79,127,255,0.4), rgba(124,107,240,0.4), transparent)" }} />
      <div className="absolute" style={{ bottom: "4.5vh", left: "50%", transform: "translateX(-50%)", fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "rgba(136,146,170,0.6)", letterSpacing: "0.1em" }}>
        Academic Year 2025–26
      </div>
    </div>
  );
}
