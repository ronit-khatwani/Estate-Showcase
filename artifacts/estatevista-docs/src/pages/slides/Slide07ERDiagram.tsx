export default function Slide07ERDiagram() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          05 / Database ER Diagram
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          Entity-Relationship Diagram
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      <div className="absolute" style={{ top: "24vh", left: "8vw", right: "8vw", height: "64vh" }}>
        <svg viewBox="0 0 900 480" width="100%" height="100%">
          {/* Agents table */}
          <rect x="30" y="20" width="250" height="300" rx="8" fill="rgba(79,127,255,0.08)" stroke="#4F7FFF" strokeWidth="1.5" />
          <rect x="30" y="20" width="250" height="42" rx="8" fill="rgba(79,127,255,0.25)" />
          <rect x="30" y="50" width="250" height="12" fill="rgba(79,127,255,0.25)" />
          <text x="155" y="47" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="700">agents</text>

          {[
            ["id", "serial PRIMARY KEY"],
            ["name", "varchar(255)"],
            ["email", "varchar(255)"],
            ["phone", "varchar(50)"],
            ["photo", "text"],
            ["specialization", "varchar(100)"],
            ["rating", "numeric(3,2)"],
            ["totalSales", "integer"],
            ["bio", "text"],
          ].map(([col, type], i) => (
            <g key={col}>
              <text x="50" y={82 + i * 24} fill={col === "id" ? "#4F7FFF" : "#C8D4F0"} fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight={col === "id" ? "700" : "400"}>{col === "id" ? "PK  " : "      "}{col}</text>
              <text x="280" y={82 + i * 24} textAnchor="end" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="10">{type}</text>
              {i < 8 && <line x1="30" y1={90 + i * 24} x2="280" y2={90 + i * 24} stroke="rgba(79,127,255,0.12)" strokeWidth="1" />}
            </g>
          ))}

          {/* Properties table */}
          <rect x="620" y="20" width="260" height="430" rx="8" fill="rgba(124,107,240,0.08)" stroke="#7C6BF0" strokeWidth="1.5" />
          <rect x="620" y="20" width="260" height="42" rx="8" fill="rgba(124,107,240,0.25)" />
          <rect x="620" y="50" width="260" height="12" fill="rgba(124,107,240,0.25)" />
          <text x="750" y="47" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="700">properties</text>

          {[
            ["id", "serial PRIMARY KEY"],
            ["title", "varchar(255)"],
            ["type", "enum"],
            ["status", "enum"],
            ["price", "numeric(15,2)"],
            ["city", "varchar(100)"],
            ["neighborhood", "varchar(100)"],
            ["bedrooms", "integer"],
            ["bathrooms", "integer"],
            ["area", "numeric(10,2)"],
            ["description", "text"],
            ["images", "text[]"],
            ["amenities", "text[]"],
            ["lat", "numeric(10,7)"],
            ["lng", "numeric(10,7)"],
            ["agentId", "integer FK"],
          ].map(([col, type], i) => (
            <g key={col}>
              <text x="638" y={82 + i * 23} fill={col === "id" ? "#7C6BF0" : col === "agentId" ? "#F07840" : "#C8D4F0"} fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight={col === "id" || col === "agentId" ? "700" : "400"}>
                {col === "id" ? "PK  " : col === "agentId" ? "FK  " : "      "}{col}
              </text>
              <text x="878" y={82 + i * 23} textAnchor="end" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="10">{type}</text>
              {i < 15 && <line x1="620" y1={90 + i * 23} x2="880" y2={90 + i * 23} stroke="rgba(124,107,240,0.12)" strokeWidth="1" />}
            </g>
          ))}

          {/* Relationship line */}
          <line x1="280" y1="75" x2="390" y2="75" stroke="#F07840" strokeWidth="1.8" strokeDasharray="5,3" />
          <line x1="390" y1="75" x2="390" y2="450" stroke="#F07840" strokeWidth="1.8" strokeDasharray="5,3" />
          <line x1="390" y1="450" x2="620" y2="450" stroke="#F07840" strokeWidth="1.8" strokeDasharray="5,3" />
          <polygon points="618,444 630,450 618,456" fill="#F07840" />

          {/* Cardinality labels */}
          <text x="310" y="65" fill="#F07840" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="600">1</text>
          <text x="575" y="445" fill="#F07840" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="600">N</text>

          {/* Relationship label */}
          <rect x="355" y="238" width="80" height="24" rx="4" fill="rgba(240,120,64,0.15)" stroke="#F07840" strokeWidth="1" />
          <text x="395" y="254" textAnchor="middle" fill="#F07840" fontFamily="Space Grotesk, sans-serif" fontSize="11">has many</text>
        </svg>
      </div>
    </div>
  );
}
