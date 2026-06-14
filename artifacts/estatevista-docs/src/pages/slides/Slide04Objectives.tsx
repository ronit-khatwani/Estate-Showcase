export default function Slide04Objectives() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="absolute rounded-full" style={{
        width: "28vw", height: "28vw", right: "0", top: "10vh",
        background: "radial-gradient(circle, rgba(124,107,240,0.18) 0%, transparent 70%)"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          02 / Objectives
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          Project Goals
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      <div className="absolute" style={{ top: "26vh", left: "8vw", right: "8vw", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5vh 4vw" }}>
        {[
          { num: "01", title: "Full-Stack Architecture", desc: "Build a contract-first API with OpenAPI, Express 5, and React 18 frontend." },
          { num: "02", title: "Real Geolocation Data", desc: "Map all 40+ Ahmedabad properties with accurate coordinates using Leaflet." },
          { num: "03", title: "Indian Market Context", desc: "Price properties in ₹ using Lakhs/Crores notation; include local neighborhoods." },
          { num: "04", title: "Interactive Discovery", desc: "Advanced filters by type, status, city, price range, and bedrooms." },
          { num: "05", title: "PostgreSQL Persistence", desc: "Drizzle ORM schema with seeded agents and property tables." },
          { num: "06", title: "Premium UX", desc: "Framer Motion animations, dark theme, Playfair Display typography, Awwwards-level design." },
        ].map(({ num, title, desc }) => (
          <div key={num} style={{
            background: "rgba(15,20,40,0.6)", border: "1px solid rgba(79,127,255,0.18)",
            borderRadius: "8px", padding: "2vh 1.8vw", display: "flex", gap: "1.2vw"
          }}>
            <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "2.8vw", color: "rgba(79,127,255,0.35)", lineHeight: 1, minWidth: "3vw" }}>{num}</div>
            <div>
              <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.8vw", color: "#F0F4FF", fontWeight: 600, marginBottom: "0.6vh" }}>{title}</div>
              <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", color: "#8892AA", lineHeight: 1.5 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
