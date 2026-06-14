export default function Slide14Listings() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#0C0F1A" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(79,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,127,255,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="absolute" style={{ top: "7vh", left: "8vw" }}>
        <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.4vw", color: "#4F7FFF", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1vh" }}>
          12 / Property Listings
        </div>
        <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "4.2vw", color: "#F0F4FF", lineHeight: 1.1 }}>
          Ahmedabad Properties
        </div>
        <div style={{ width: "6vw", height: "3px", background: "linear-gradient(90deg, #4F7FFF, #7C6BF0)", marginTop: "1.5vh" }} />
      </div>

      {/* Mock property cards */}
      <div className="absolute" style={{ top: "26vh", left: "8vw", right: "8vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5vh 2.5vw" }}>
        {[
          { title: "3 BHK Apartment", location: "Vastrapur, Ahmedabad", price: "₹1.2 Cr", type: "Residential", badge: "For Sale", color: "#4F7FFF" },
          { title: "Commercial Office", location: "GIFT City, Gandhinagar", price: "₹4.8 Cr", type: "Commercial", badge: "For Rent", color: "#7C6BF0" },
          { title: "Industrial Plot", location: "Vatva GIDC, Ahmedabad", price: "₹85 L", type: "Industrial", badge: "For Sale", color: "#F07840" },
          { title: "Luxury Villa", location: "Bodakdev, Ahmedabad", price: "₹3.5 Cr", type: "Residential", badge: "For Sale", color: "#4F7FFF" },
          { title: "Commercial Plot", location: "Thaltej, Ahmedabad", price: "₹1.9 Cr", type: "Plot", badge: "For Sale", color: "#3DB8A4" },
          { title: "2 BHK Flat", location: "Bopal, Ahmedabad", price: "₹65 L", type: "Residential", badge: "For Rent", color: "#4F7FFF" },
        ].map(({ title, location, price, type, badge, color }) => (
          <div key={title} style={{
            background: "rgba(20,25,48,0.9)", border: "1px solid rgba(79,127,255,0.15)",
            borderRadius: "8px", overflow: "hidden"
          }}>
            <div style={{ height: "10vh", background: `linear-gradient(135deg, ${color}22, ${color}08)`, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "1.8vw", color: `${color}80` }}>{type}</div>
              <div style={{
                position: "absolute", top: "1vh", right: "0.8vw",
                background: color, padding: "0.2vh 0.6vw", borderRadius: "3px",
                fontFamily: "Space Grotesk, sans-serif", fontSize: "1.1vw", color: "#0C0F1A", fontWeight: 700
              }}>{badge}</div>
            </div>
            <div style={{ padding: "1.2vh 1.2vw" }}>
              <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5vw", color: "#F0F4FF", fontWeight: 600, marginBottom: "0.3vh" }}>{title}</div>
              <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.3vw", color: "#8892AA", marginBottom: "0.8vh" }}>{location}</div>
              <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "2vw", color }}>{price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
