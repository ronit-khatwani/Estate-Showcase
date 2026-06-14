export default function Slide17FutureScope() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="absolute rounded-full" style={{
        width: "32vw", height: "32vw", right: "-6vw", top: "5vh",
        background: "radial-gradient(circle, rgba(124,107,240,0.18) 0%, transparent 70%)"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          15 / Future Scope
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          Planned Enhancements
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      <div className="absolute" style={{ top: "26vh", left: "8vw", right: "8vw", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5vh 4vw" }}>
        {[
          {
            phase: "Phase 2", title: "User Authentication",
            desc: "Replit Auth / JWT-based login. Saved properties wishlist, inquiry tracking per user.",
            color: "#4F7FFF"
          },
          {
            phase: "Phase 2", title: "Property Submission",
            desc: "Agent dashboard to add/edit listings. Image uploads via S3-compatible object storage.",
            color: "#4F7FFF"
          },
          {
            phase: "Phase 3", title: "AI Price Prediction",
            desc: "ML model trained on Ahmedabad market data to suggest fair price range for any property.",
            color: "#7C6BF0"
          },
          {
            phase: "Phase 3", title: "Virtual Tours",
            desc: "360-degree walkthrough integration using WebGL for premium residential listings.",
            color: "#7C6BF0"
          },
          {
            phase: "Phase 4", title: "Mobile App",
            desc: "React Native / Expo app with push notifications for new listings in saved searches.",
            color: "#3DB8A4"
          },
          {
            phase: "Phase 4", title: "Analytics Dashboard",
            desc: "Agent performance metrics, market trend charts, and city-level price heatmaps.",
            color: "#3DB8A4"
          },
        ].map(({ phase, title, desc, color }) => (
          <div key={title} style={{
            background: "rgba(15,20,40,0.7)", border: `1px solid ${color}25`,
            borderRadius: "8px", padding: "1.8vh 1.8vw", display: "flex", gap: "1.5vw"
          }}>
            <div style={{ width: "3px", background: `linear-gradient(${color}, ${color}44)`, borderRadius: "2px", flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.2vw", color, fontWeight: 600, letterSpacing: "0.06em", marginBottom: "0.4vh" }}>{phase}</div>
              <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.7vw", color: "#F0F4FF", fontWeight: 600, marginBottom: "0.5vh" }}>{title}</div>
              <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.45vw", color: "#8892AA", lineHeight: 1.5 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
