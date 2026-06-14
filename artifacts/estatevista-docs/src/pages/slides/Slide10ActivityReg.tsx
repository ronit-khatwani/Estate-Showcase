export default function Slide10ActivityReg() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="absolute rounded-full" style={{
        width: "28vw", height: "28vw", right: "0", top: "10vh",
        background: "radial-gradient(circle, rgba(124,107,240,0.14) 0%, transparent 70%)"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          08 / Activity Diagram
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          Contact Agent Flow
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      <div className="absolute" style={{ top: "24vh", left: "8vw", right: "8vw", height: "64vh" }}>
        <svg viewBox="0 0 900 420" width="100%" height="100%">
          {/* Swimlane headers */}
          <rect x="20" y="10" width="280" height="36" rx="4" fill="rgba(79,127,255,0.15)" />
          <text x="160" y="33" textAnchor="middle" fill="#A8C0FF" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="600">User</text>
          <rect x="320" y="10" width="280" height="36" rx="4" fill="rgba(124,107,240,0.15)" />
          <text x="460" y="33" textAnchor="middle" fill="#C8A8FF" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="600">System (Frontend)</text>
          <rect x="620" y="10" width="260" height="36" rx="4" fill="rgba(240,120,64,0.15)" />
          <text x="750" y="33" textAnchor="middle" fill="#F0C8A8" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="600">Backend API</text>

          {/* Swimlane dividers */}
          <line x1="310" y1="46" x2="310" y2="420" stroke="rgba(79,127,255,0.2)" strokeWidth="1" strokeDasharray="4,3" />
          <line x1="610" y1="46" x2="610" y2="420" stroke="rgba(79,127,255,0.2)" strokeWidth="1" strokeDasharray="4,3" />

          {/* Start */}
          <circle cx="160" cy="80" r="14" fill="#4F7FFF" />

          <line x1="160" y1="94" x2="160" y2="118" stroke="#4F7FFF" strokeWidth="1.5" />
          <polygon points="154,116 166,116 160,126" fill="#4F7FFF" />

          <rect x="60" y="126" width="200" height="36" rx="18" fill="rgba(79,127,255,0.12)" stroke="#4F7FFF" strokeWidth="1.5" />
          <text x="160" y="148" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="11">Open Property Detail Page</text>

          <line x1="260" y1="144" x2="360" y2="144" stroke="#4F7FFF" strokeWidth="1.5" />
          <polygon points="358,138 370,144 358,150" fill="#4F7FFF" />

          <rect x="370" y="126" width="200" height="36" rx="18" fill="rgba(124,107,240,0.12)" stroke="#7C6BF0" strokeWidth="1.5" />
          <text x="470" y="148" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="11">Render Agent Sidebar</text>

          <line x1="470" y1="162" x2="470" y2="194" stroke="#7C6BF0" strokeWidth="1.5" />
          <polygon points="464,192 476,192 470,202" fill="#7C6BF0" />

          <rect x="370" y="202" width="200" height="36" rx="18" fill="rgba(124,107,240,0.12)" stroke="#7C6BF0" strokeWidth="1.5" />
          <text x="470" y="224" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="11">Show Contact Form</text>

          <line x1="370" y1="220" x2="260" y2="280" stroke="#7C6BF0" strokeWidth="1.5" strokeDasharray="4,3" />
          <polygon points="264,278 252,286 258,272" fill="#7C6BF0" />

          <rect x="60" y="268" width="200" height="36" rx="18" fill="rgba(79,127,255,0.12)" stroke="#4F7FFF" strokeWidth="1.5" />
          <text x="160" y="290" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="11">Fill &amp; Submit Form</text>

          <line x1="260" y1="286" x2="360" y2="286" stroke="#4F7FFF" strokeWidth="1.5" />
          <polygon points="358,280 370,286 358,292" fill="#4F7FFF" />

          <rect x="370" y="268" width="200" height="36" rx="18" fill="rgba(124,107,240,0.12)" stroke="#7C6BF0" strokeWidth="1.5" />
          <text x="470" y="284" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="11">Validate Inputs (Zod)</text>
          <text x="470" y="298" textAnchor="middle" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="10">POST /api/inquiries</text>

          <line x1="570" y1="286" x2="640" y2="286" stroke="#7C6BF0" strokeWidth="1.5" />
          <polygon points="638,280 650,286 638,292" fill="#7C6BF0" />

          <rect x="650" y="268" width="200" height="36" rx="18" fill="rgba(240,120,64,0.1)" stroke="#F07840" strokeWidth="1.5" />
          <text x="750" y="290" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="11">Store Inquiry</text>

          <line x1="650" y1="286" x2="570" y2="340" stroke="#F07840" strokeWidth="1.5" strokeDasharray="4,3" />
          <polygon points="572,336 564,348 576,344" fill="#F07840" />

          <rect x="370" y="340" width="200" height="36" rx="18" fill="rgba(124,107,240,0.12)" stroke="#7C6BF0" strokeWidth="1.5" />
          <text x="470" y="362" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="11">Show Success State</text>

          {/* End */}
          <circle cx="470" cy="410" r="14" fill="none" stroke="#4F7FFF" strokeWidth="2" />
          <circle cx="470" cy="410" r="8" fill="#4F7FFF" />
          <line x1="470" y1="376" x2="470" y2="396" stroke="#7C6BF0" strokeWidth="1.5" />
          <polygon points="464,394 476,394 470,404" fill="#7C6BF0" />
        </svg>
      </div>
    </div>
  );
}
