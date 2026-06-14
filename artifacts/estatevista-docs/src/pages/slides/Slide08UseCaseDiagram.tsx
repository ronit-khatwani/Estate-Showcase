export default function Slide08UseCaseDiagram() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          06 / Use Case Diagram
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          System Use Cases
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      <div className="absolute" style={{ top: "24vh", left: "5vw", right: "5vw", height: "64vh" }}>
        <svg viewBox="0 0 920 480" width="100%" height="100%">
          {/* System boundary */}
          <rect x="180" y="10" width="560" height="460" rx="10" fill="rgba(79,127,255,0.04)" stroke="rgba(79,127,255,0.3)" strokeWidth="1.5" strokeDasharray="6,4" />
          <text x="460" y="32" textAnchor="middle" fill="#4F7FFF" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="600">EstateVista System</text>

          {/* Guest Actor */}
          <ellipse cx="70" cy="120" rx="18" ry="18" fill="none" stroke="#4F7FFF" strokeWidth="1.5" />
          <line x1="70" y1="138" x2="70" y2="175" stroke="#4F7FFF" strokeWidth="1.5" />
          <line x1="48" y1="155" x2="92" y2="155" stroke="#4F7FFF" strokeWidth="1.5" />
          <line x1="70" y1="175" x2="52" y2="200" stroke="#4F7FFF" strokeWidth="1.5" />
          <line x1="70" y1="175" x2="88" y2="200" stroke="#4F7FFF" strokeWidth="1.5" />
          <text x="70" y="218" textAnchor="middle" fill="#A8C0FF" fontFamily="Space Grotesk, sans-serif" fontSize="11">Guest User</text>

          {/* Admin Actor */}
          <ellipse cx="850" cy="120" rx="18" ry="18" fill="none" stroke="#7C6BF0" strokeWidth="1.5" />
          <line x1="850" y1="138" x2="850" y2="175" stroke="#7C6BF0" strokeWidth="1.5" />
          <line x1="828" y1="155" x2="872" y2="155" stroke="#7C6BF0" strokeWidth="1.5" />
          <line x1="850" y1="175" x2="832" y2="200" stroke="#7C6BF0" strokeWidth="1.5" />
          <line x1="850" y1="175" x2="868" y2="200" stroke="#7C6BF0" strokeWidth="1.5" />
          <text x="850" y="218" textAnchor="middle" fill="#C8A8FF" fontFamily="Space Grotesk, sans-serif" fontSize="11">Admin</text>

          {/* Use cases */}
          {[
            [460, 70, "Browse Properties", "#4F7FFF"],
            [320, 140, "Search & Filter", "#4F7FFF"],
            [600, 140, "View on Map", "#4F7FFF"],
            [320, 230, "View Property Detail", "#4F7FFF"],
            [600, 230, "Contact Agent", "#4F7FFF"],
            [460, 310, "View Agent Profile", "#4F7FFF"],
            [320, 390, "Seed Properties", "#7C6BF0"],
            [600, 390, "Manage Listings", "#7C6BF0"],
          ].map(([cx, cy, label, color]) => (
            <g key={String(label)}>
              <ellipse cx={Number(cx)} cy={Number(cy)} rx="90" ry="26" fill={`${String(color)}15`} stroke={String(color)} strokeWidth="1.5" />
              <text x={Number(cx)} y={Number(cy) + 5} textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="500">{String(label)}</text>
            </g>
          ))}

          {/* Association lines - Guest to use cases */}
          <line x1="88" y1="120" x2="370" y2="140" stroke="rgba(79,127,255,0.4)" strokeWidth="1.2" />
          <line x1="88" y1="120" x2="370" y2="70" stroke="rgba(79,127,255,0.4)" strokeWidth="1.2" />
          <line x1="88" y1="120" x2="510" y2="140" stroke="rgba(79,127,255,0.4)" strokeWidth="1.2" />
          <line x1="88" y1="120" x2="370" y2="230" stroke="rgba(79,127,255,0.4)" strokeWidth="1.2" />
          <line x1="88" y1="120" x2="510" y2="230" stroke="rgba(79,127,255,0.4)" strokeWidth="1.2" />
          <line x1="88" y1="120" x2="370" y2="310" stroke="rgba(79,127,255,0.4)" strokeWidth="1.2" />

          {/* Association lines - Admin to use cases */}
          <line x1="832" y1="120" x2="690" y2="390" stroke="rgba(124,107,240,0.4)" strokeWidth="1.2" />
          <line x1="832" y1="120" x2="510" y2="390" stroke="rgba(124,107,240,0.4)" strokeWidth="1.2" />
        </svg>
      </div>
    </div>
  );
}
