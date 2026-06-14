export default function Slide05Architecture() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          03 / System Architecture
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          Architecture Overview
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      {/* Architecture diagram as SVG */}
      <div className="absolute" style={{ top: "24vh", left: "8vw", right: "8vw", height: "65vh" }}>
        <svg viewBox="0 0 900 540" width="100%" height="100%" style={{ overflow: "visible" }}>
          {/* Client Layer */}
          <rect x="20" y="20" width="200" height="70" rx="6" fill="rgba(79,127,255,0.12)" stroke="#4F7FFF" strokeWidth="1.5" />
          <text x="120" y="52" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="600">Browser Client</text>
          <text x="120" y="72" textAnchor="middle" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="11">React 18 + Vite</text>

          {/* Arrow down */}
          <line x1="120" y1="92" x2="120" y2="150" stroke="#4F7FFF" strokeWidth="1.5" strokeDasharray="4,3" />
          <polygon points="114,148 126,148 120,158" fill="#4F7FFF" />

          {/* Reverse Proxy */}
          <rect x="20" y="160" width="200" height="60" rx="6" fill="rgba(124,107,240,0.12)" stroke="#7C6BF0" strokeWidth="1.5" />
          <text x="120" y="188" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="600">Reverse Proxy</text>
          <text x="120" y="206" textAnchor="middle" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="11">Port 80 (path routing)</text>

          {/* Arrows from proxy */}
          <line x1="220" y1="190" x2="330" y2="190" stroke="#7C6BF0" strokeWidth="1.5" strokeDasharray="4,3" />
          <polygon points="328,184 340,190 328,196" fill="#7C6BF0" />
          <line x1="220" y1="190" x2="330" y2="350" stroke="#4F7FFF" strokeWidth="1.5" strokeDasharray="4,3" />
          <polygon points="328,346 336,358 322,354" fill="#4F7FFF" />

          {/* Frontend artifact box */}
          <rect x="340" y="155" width="200" height="70" rx="6" fill="rgba(79,127,255,0.1)" stroke="#4F7FFF" strokeWidth="1.5" />
          <text x="440" y="183" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="600">React Frontend</text>
          <text x="440" y="200" textAnchor="middle" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="11">Port 20263  /</text>
          <text x="440" y="216" textAnchor="middle" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="11">Tailwind CSS, Leaflet</text>

          {/* API artifact box */}
          <rect x="340" y="320" width="200" height="70" rx="6" fill="rgba(124,107,240,0.1)" stroke="#7C6BF0" strokeWidth="1.5" />
          <text x="440" y="348" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="600">Express API Server</text>
          <text x="440" y="365" textAnchor="middle" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="11">Port 8080  /api</text>
          <text x="440" y="381" textAnchor="middle" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="11">Drizzle ORM + Zod</text>

          {/* Arrow API to DB */}
          <line x1="540" y1="355" x2="640" y2="355" stroke="#4F7FFF" strokeWidth="1.5" strokeDasharray="4,3" />
          <polygon points="638,349 650,355 638,361" fill="#4F7FFF" />

          {/* Arrow frontend calls API */}
          <line x1="540" y1="200" x2="600" y2="200" stroke="#4F7FFF" strokeWidth="1.2" strokeDasharray="3,3" />
          <line x1="600" y1="200" x2="600" y2="355" stroke="#4F7FFF" strokeWidth="1.2" strokeDasharray="3,3" />
          <polygon points="594,349 606,349 600,359" fill="#4F7FFF" />

          {/* DB box */}
          <rect x="650" y="315" width="200" height="80" rx="6" fill="rgba(79,127,255,0.08)" stroke="#4F7FFF" strokeWidth="1.5" />
          <text x="750" y="345" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="600">PostgreSQL</text>
          <text x="750" y="363" textAnchor="middle" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="11">agents + properties</text>
          <text x="750" y="381" textAnchor="middle" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="11">tables (Drizzle schema)</text>

          {/* OpenAPI box */}
          <rect x="650" y="155" width="200" height="70" rx="6" fill="rgba(124,107,240,0.08)" stroke="#7C6BF0" strokeWidth="1.5" />
          <text x="750" y="183" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="600">OpenAPI Spec</text>
          <text x="750" y="200" textAnchor="middle" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="11">lib/api-spec  (Orval codegen)</text>
          <text x="750" y="216" textAnchor="middle" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="11">React Query hooks + Zod</text>

          <line x1="750" y1="225" x2="750" y2="315" stroke="#7C6BF0" strokeWidth="1.2" strokeDasharray="3,3" />
          <polygon points="744,313 756,313 750,323" fill="#7C6BF0" />

          {/* Labels */}
          <text x="120" y="520" textAnchor="middle" fill="#4F7FFF" fontFamily="Space Grotesk, sans-serif" fontSize="11">Client Layer</text>
          <text x="440" y="520" textAnchor="middle" fill="#4F7FFF" fontFamily="Space Grotesk, sans-serif" fontSize="11">Application Layer</text>
          <text x="750" y="520" textAnchor="middle" fill="#4F7FFF" fontFamily="Space Grotesk, sans-serif" fontSize="11">Data / Contract Layer</text>

          <line x1="245" y1="500" x2="245" y2="510" stroke="rgba(79,127,255,0.3)" strokeWidth="1" />
          <line x1="590" y1="500" x2="590" y2="510" stroke="rgba(79,127,255,0.3)" strokeWidth="1" />
          <line x1="20" y1="505" x2="880" y2="505" stroke="rgba(79,127,255,0.2)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
