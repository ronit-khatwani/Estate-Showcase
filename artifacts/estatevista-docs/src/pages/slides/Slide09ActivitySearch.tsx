export default function Slide09ActivitySearch() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          07 / Activity Diagram
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          Property Search Flow
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      <div className="absolute" style={{ top: "24vh", left: "8vw", right: "8vw", height: "64vh" }}>
        <svg viewBox="0 0 900 440" width="100%" height="100%">
          {/* Start */}
          <circle cx="450" cy="28" r="18" fill="#4F7FFF" />
          <line x1="450" y1="46" x2="450" y2="74" stroke="#4F7FFF" strokeWidth="1.5" />
          <polygon points="444,72 456,72 450,82" fill="#4F7FFF" />

          {/* Action: Open Home Page */}
          <rect x="330" y="82" width="240" height="38" rx="19" fill="rgba(79,127,255,0.12)" stroke="#4F7FFF" strokeWidth="1.5" />
          <text x="450" y="105" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="12">Open Home Page</text>
          <line x1="450" y1="120" x2="450" y2="148" stroke="#4F7FFF" strokeWidth="1.5" />
          <polygon points="444,146 456,146 450,156" fill="#4F7FFF" />

          {/* Action: Enter Search Query */}
          <rect x="330" y="156" width="240" height="38" rx="19" fill="rgba(79,127,255,0.12)" stroke="#4F7FFF" strokeWidth="1.5" />
          <text x="450" y="179" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="12">Enter Search / Apply Filters</text>
          <line x1="450" y1="194" x2="450" y2="222" stroke="#4F7FFF" strokeWidth="1.5" />
          <polygon points="444,220 456,220 450,230" fill="#4F7FFF" />

          {/* Decision: Results found? */}
          <polygon points="450,230 530,270 450,310 370,270" fill="rgba(124,107,240,0.12)" stroke="#7C6BF0" strokeWidth="1.5" />
          <text x="450" y="268" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="11">Results found?</text>
          <text x="450" y="282" textAnchor="middle" fill="#8892AA" fontFamily="Space Grotesk, sans-serif" fontSize="10">(API query)</text>

          {/* Yes branch */}
          <line x1="530" y1="270" x2="640" y2="270" stroke="#4F7FFF" strokeWidth="1.5" />
          <polygon points="638,264 650,270 638,276" fill="#4F7FFF" />
          <text x="583" y="260" textAnchor="middle" fill="#4FC3A4" fontFamily="Space Grotesk, sans-serif" fontSize="11">Yes</text>
          <rect x="650" y="248" width="200" height="38" rx="19" fill="rgba(79,127,255,0.12)" stroke="#4F7FFF" strokeWidth="1.5" />
          <text x="750" y="271" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="12">Display Property Grid</text>

          <line x1="750" y1="286" x2="750" y2="344" stroke="#4F7FFF" strokeWidth="1.5" />
          <polygon points="744,342 756,342 750,352" fill="#4F7FFF" />
          <rect x="650" y="352" width="200" height="38" rx="19" fill="rgba(79,127,255,0.12)" stroke="#4F7FFF" strokeWidth="1.5" />
          <text x="750" y="375" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="12">View Property Detail</text>

          {/* No branch */}
          <line x1="370" y1="270" x2="240" y2="270" stroke="#7C6BF0" strokeWidth="1.5" />
          <polygon points="242,264 230,270 242,276" fill="#7C6BF0" />
          <text x="308" y="260" textAnchor="middle" fill="#F07840" fontFamily="Space Grotesk, sans-serif" fontSize="11">No</text>
          <rect x="50" y="248" width="180" height="38" rx="19" fill="rgba(240,120,64,0.08)" stroke="#F07840" strokeWidth="1.5" />
          <text x="140" y="271" textAnchor="middle" fill="#F0F4FF" fontFamily="Space Grotesk, sans-serif" fontSize="12">Show Empty State</text>

          <line x1="140" y1="286" x2="140" y2="360" stroke="#F07840" strokeWidth="1.5" />
          <line x1="140" y1="360" x2="450" y2="360" stroke="#F07840" strokeWidth="1.5" strokeDasharray="4,3" />
          <polygon points="444,354 456,354 450,364" fill="#F07840" />

          {/* End */}
          <line x1="750" y1="390" x2="750" y2="415" stroke="#4F7FFF" strokeWidth="1.5" />
          <line x1="750" y1="415" x2="460" y2="415" stroke="#4F7FFF" strokeWidth="1.5" />
          <polygon points="462,409 450,415 462,421" fill="#4F7FFF" />
          <circle cx="450" cy="415" r="18" fill="none" stroke="#4F7FFF" strokeWidth="2" />
          <circle cx="450" cy="415" r="10" fill="#4F7FFF" />
        </svg>
      </div>
    </div>
  );
}
