export default function Slide12Frontend() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="absolute rounded-full" style={{
        width: "30vw", height: "30vw", right: "-5vw", top: "5vh",
        background: "radial-gradient(circle, rgba(124,107,240,0.16) 0%, transparent 70%)"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          10 / Frontend Features
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          React Frontend
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      <div className="absolute" style={{ top: "26vh", left: "8vw", right: "8vw", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4vw" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          {[
            { title: "Page Routing", desc: "React Router v6 with 8 pages: Home, Properties, Category pages (×4), Map View, Property Detail, Agents, About, Contact." },
            { title: "Framer Motion", desc: "Page transitions, scroll-triggered reveals, parallax hero, animated StatCounter with spring interpolation." },
            { title: "API Integration", desc: "Orval-generated React Query hooks with TanStack Query. All API calls typed from OpenAPI spec." },
            { title: "Theme System", desc: "Dark charcoal (hsl 220,10%,8%) + gold/amber accent. Playfair Display + Inter. Zero-radius 'sharp' editorial look." },
          ].map(({ title, desc }) => (
            <div key={title} style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ width: "3px", height: "4.5vh", background: "linear-gradient(#4F7FFF,#7C6BF0)", flexShrink: 0, marginTop: "0.3vh" }} />
              <div>
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.8vw", color: "#F0F4FF", fontWeight: 600, marginBottom: "0.4vh" }}>{title}</div>
                <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", color: "#8892AA", lineHeight: 1.55 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ background: "rgba(79,127,255,0.08)", border: "1px solid rgba(79,127,255,0.2)", borderRadius: "8px", padding: "2vh 1.8vw" }}>
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", color: "#8892AA", marginBottom: "0.8vh" }}>Pages</div>
            <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.5vw", color: "#4F7FFF" }}>8</div>
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#C8D4F0" }}>Fully routed views</div>
          </div>
          <div style={{ background: "rgba(124,107,240,0.08)", border: "1px solid rgba(124,107,240,0.2)", borderRadius: "8px", padding: "2vh 1.8vw" }}>
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", color: "#8892AA", marginBottom: "0.8vh" }}>Components</div>
            <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.5vw", color: "#7C6BF0" }}>12+</div>
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#C8D4F0" }}>Reusable UI components</div>
          </div>
          <div style={{ background: "rgba(63,184,164,0.08)", border: "1px solid rgba(63,184,164,0.2)", borderRadius: "8px", padding: "2vh 1.8vw" }}>
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", color: "#8892AA", marginBottom: "0.8vh" }}>Currency</div>
            <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.5vw", color: "#3DB8A4" }}>₹ INR</div>
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#C8D4F0" }}>Lakhs / Crores notation</div>
          </div>
        </div>
      </div>
    </div>
  );
}
