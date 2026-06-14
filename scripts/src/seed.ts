import { db } from "@workspace/db";
import { agentsTable, propertiesTable } from "@workspace/db";

const agents = [
  {
    name: "Alexandra Chen",
    email: "alex.chen@estatevista.com",
    phone: "+1 (415) 555-0101",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    title: "Senior Property Consultant",
    bio: "Over 12 years helping clients find their dream homes across New York and California. Specializes in luxury residential and high-value commercial deals.",
    rating: 4.9,
    totalSales: 247,
    activeListings: 18,
    specializations: ["Luxury Residential", "Commercial", "Investment Properties"],
    languages: ["English", "Mandarin"],
    yearsExperience: 12,
  },
  {
    name: "Marcus Rivera",
    email: "marcus.r@estatevista.com",
    phone: "+1 (212) 555-0202",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    title: "Commercial Real Estate Specialist",
    bio: "Focused on commercial real estate transactions for over 8 years. Expert in retail, office spaces, and industrial properties.",
    rating: 4.7,
    totalSales: 183,
    activeListings: 22,
    specializations: ["Commercial", "Industrial", "Retail"],
    languages: ["English", "Spanish"],
    yearsExperience: 8,
  },
  {
    name: "Priya Sharma",
    email: "priya.s@estatevista.com",
    phone: "+1 (650) 555-0303",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    title: "Residential & Plots Expert",
    bio: "Specializes in residential properties and land investments across Silicon Valley. Known for finding hidden gems and off-market deals.",
    rating: 4.8,
    totalSales: 312,
    activeListings: 14,
    specializations: ["Residential", "Land & Plots", "New Developments"],
    languages: ["English", "Hindi", "Punjabi"],
    yearsExperience: 10,
  },
  {
    name: "James Whitmore",
    email: "james.w@estatevista.com",
    phone: "+1 (305) 555-0404",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    title: "Luxury Properties Director",
    bio: "Handles the most exclusive properties on the market. 15 years of experience with ultra-high-net-worth clients.",
    rating: 4.95,
    totalSales: 156,
    activeListings: 9,
    specializations: ["Luxury", "Waterfront", "Penthouses"],
    languages: ["English", "French"],
    yearsExperience: 15,
  },
  {
    name: "Sofia Petrov",
    email: "sofia.p@estatevista.com",
    phone: "+1 (213) 555-0505",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    title: "Investment Property Advisor",
    bio: "Data-driven approach to real estate investment. Helps clients build portfolios of commercial and residential rental properties.",
    rating: 4.6,
    totalSales: 198,
    activeListings: 26,
    specializations: ["Investment", "Multi-family", "Commercial Rental"],
    languages: ["English", "Russian"],
    yearsExperience: 9,
  },
  {
    name: "David Kim",
    email: "david.k@estatevista.com",
    phone: "+1 (312) 555-0606",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    title: "Industrial & Warehouse Specialist",
    bio: "Leading specialist in industrial real estate in the Midwest. Extensive network of warehouse, logistics, and manufacturing clients.",
    rating: 4.7,
    totalSales: 89,
    activeListings: 31,
    specializations: ["Industrial", "Warehouse", "Logistics"],
    languages: ["English", "Korean"],
    yearsExperience: 7,
  },
];

const propertyImages = {
  residential: [
    [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=800&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    ],
  ],
  commercial: [
    [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80",
      "https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
      "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    ],
  ],
  plot: [
    [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    ],
  ],
  industrial: [
    [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80",
    ],
    [
      "https://images.unsplash.com/photo-1565782966786-1db4c0b46c37?w=800&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    ],
  ],
};

const residentialAmenities = ["Swimming Pool", "Gym", "Parking", "Security", "Garden", "Balcony", "Smart Home", "Solar Panels", "Home Theater", "Gourmet Kitchen"];
const commercialAmenities = ["High-Speed Internet", "Conference Rooms", "Parking", "Reception", "HVAC", "Security System", "Elevator", "Loading Dock", "Cafeteria", "Rooftop Access"];
const plotAmenities = ["Corner Plot", "Road Frontage", "Utilities Available", "Fencing", "Near Schools", "Public Transport", "Park Nearby"];
const industrialAmenities = ["Loading Docks", "High Ceilings", "Three-Phase Power", "Sprinkler System", "Office Area", "Security", "Ample Parking", "Rail Access"];

const cities = [
  { city: "New York", state: "NY", lat: 40.7128, lng: -74.006 },
  { city: "Los Angeles", state: "CA", lat: 34.0522, lng: -118.2437 },
  { city: "Chicago", state: "IL", lat: 41.8781, lng: -87.6298 },
  { city: "Houston", state: "TX", lat: 29.7604, lng: -95.3698 },
  { city: "Miami", state: "FL", lat: 25.7617, lng: -80.1918 },
  { city: "San Francisco", state: "CA", lat: 37.7749, lng: -122.4194 },
  { city: "Seattle", state: "WA", lat: 47.6062, lng: -122.3321 },
  { city: "Boston", state: "MA", lat: 42.3601, lng: -71.0589 },
  { city: "Austin", state: "TX", lat: 30.2672, lng: -97.7431 },
  { city: "Denver", state: "CO", lat: 39.7392, lng: -104.9903 },
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function offset(base: number, range: number): number {
  return base + (Math.random() - 0.5) * range;
}

async function seed() {
  console.log("Seeding agents...");
  await db.delete(propertiesTable);
  await db.delete(agentsTable);

  const insertedAgents = await db.insert(agentsTable).values(agents).returning();
  console.log(`Inserted ${insertedAgents.length} agents`);

  const properties = [];

  // Residential properties (25)
  const residentialSubtypes = ["Apartment", "Villa", "Condo", "Townhouse", "Penthouse", "Studio", "Duplex"];
  const residentialTitles = [
    "Skyline Penthouse with Panoramic Views",
    "Modern Luxury Villa with Pool",
    "Downtown Corner Apartment",
    "Cozy 3-Bedroom Townhouse",
    "Waterfront Condo with Marina Views",
    "Sun-Drenched Studio in Arts District",
    "Contemporary Family Home",
    "Heritage Brownstone Duplex",
    "Glass Tower Apartment",
    "Secluded Garden Retreat",
    "Minimalist Loft Conversion",
    "Beachfront Villa Paradise",
    "Executive Penthouse Suite",
    "Mid-Century Modern Home",
    "Elegant Georgian Townhouse",
    "Smart Home of the Future",
    "Designer Apartment in Prime Location",
    "Architect-Designed Family Residence",
    "Luxury High-Rise with City Views",
    "Riverside Cottage with Dock",
    "Urban Oasis Apartment",
    "Spacious Colonial Estate",
    "Contemporary Hillside Home",
    "Lakefront Retreat",
    "Premium 4-Bedroom Suburban Home",
  ];

  for (let i = 0; i < 25; i++) {
    const cityData = pick(cities);
    const imgSet = propertyImages.residential[i % propertyImages.residential.length];
    const price = rand(250000, 4500000);
    const area = rand(800, 6500);
    properties.push({
      title: residentialTitles[i],
      description: `A stunning ${pick(residentialSubtypes).toLowerCase()} offering modern living in the heart of ${cityData.city}. Featuring premium finishes, open-plan living spaces, and breathtaking views. Perfect for families or investors seeking premium returns.`,
      type: "residential",
      subtype: pick(residentialSubtypes),
      status: pick(["for_sale", "for_sale", "for_sale", "for_rent", "for_rent", "sold"]) as "for_sale" | "for_rent" | "sold",
      price,
      pricePerSqft: Math.round(price / area),
      address: `${rand(100, 9999)} ${pick(["Park Ave", "Fifth Ave", "Sunset Blvd", "Ocean Dr", "Main St", "Harbor View", "Skyline Dr"])}`,
      city: cityData.city,
      state: cityData.state,
      zipCode: `${rand(10000, 99999)}`,
      lat: offset(cityData.lat, 0.1),
      lng: offset(cityData.lng, 0.1),
      area,
      bedrooms: rand(1, 6),
      bathrooms: rand(1, 5),
      yearBuilt: rand(1990, 2024),
      parking: rand(1, 3),
      floors: rand(1, 3),
      featured: i < 8,
      images: imgSet,
      amenities: residentialAmenities.slice(0, rand(4, 8)),
      agentId: insertedAgents[i % insertedAgents.length].id,
      views: rand(50, 5000),
    });
  }

  // Commercial properties (15)
  const commercialSubtypes = ["Office Space", "Retail Store", "Restaurant", "Shopping Center", "Hotel", "Medical Center", "Co-working Space"];
  const commercialTitles = [
    "Class A Office Tower in Financial District",
    "Prime Retail Corner Store Downtown",
    "Restaurant Space with Kitchen Equipment",
    "Mixed-Use Commercial Complex",
    "Boutique Hotel in Tourist Quarter",
    "Medical & Dental Office Suite",
    "Flexible Co-Working Hub",
    "High-Street Flagship Retail Space",
    "Corporate Headquarters Campus",
    "Trendy Food Hall Unit",
    "Historic Converted Warehouse Office",
    "Beachfront Restaurant Venue",
    "Tech Campus Office Suite",
    "Upscale Salon & Spa Space",
    "Modern Bank Branch Unit",
  ];

  for (let i = 0; i < 15; i++) {
    const cityData = pick(cities);
    const imgSet = propertyImages.commercial[i % propertyImages.commercial.length];
    const price = rand(500000, 15000000);
    const area = rand(1000, 25000);
    properties.push({
      title: commercialTitles[i],
      description: `Premium commercial space in ${cityData.city}'s most sought-after business district. Ideal for enterprises seeking high visibility and premium footfall.`,
      type: "commercial",
      subtype: pick(commercialSubtypes),
      status: pick(["for_sale", "for_sale", "for_rent", "for_rent", "for_rent"]) as "for_sale" | "for_rent" | "sold",
      price,
      pricePerSqft: Math.round(price / area),
      address: `${rand(1, 999)} ${pick(["Business Park Dr", "Commerce St", "Trade Center Blvd", "Market St", "Enterprise Ave"])}`,
      city: cityData.city,
      state: cityData.state,
      zipCode: `${rand(10000, 99999)}`,
      lat: offset(cityData.lat, 0.12),
      lng: offset(cityData.lng, 0.12),
      area,
      bedrooms: null,
      bathrooms: rand(2, 10),
      yearBuilt: rand(1980, 2024),
      parking: rand(10, 100),
      floors: rand(1, 20),
      featured: i < 4,
      images: imgSet,
      amenities: commercialAmenities.slice(0, rand(4, 8)),
      agentId: insertedAgents[i % insertedAgents.length].id,
      views: rand(100, 8000),
    });
  }

  // Plot properties (10)
  const plotTitles = [
    "Prime Corner Plot in Developing Area",
    "Beachfront Land Parcel — Rare Find",
    "Hillside Estate Lot with Views",
    "Industrial Zone Land for Development",
    "Commercial Development Site",
    "Scenic Mountain Plot",
    "Agricultural Land with Water Rights",
    "Suburban Residential Plot",
    "Lakefront Land with Building Permit",
    "Urban Infill Lot — Immediate ROI",
  ];

  for (let i = 0; i < 10; i++) {
    const cityData = pick(cities);
    const imgSet = propertyImages.plot[i % propertyImages.plot.length];
    const area = rand(5000, 100000);
    const price = rand(50000, 5000000);
    properties.push({
      title: plotTitles[i],
      description: `Exceptional land opportunity in ${cityData.city}. Clear title, all approvals in place. Perfect for residential development, commercial complex, or long-term land banking.`,
      type: "plot",
      subtype: pick(["Residential Plot", "Commercial Plot", "Agricultural Land", "Industrial Plot", "Waterfront Land"]),
      status: pick(["for_sale", "for_sale", "for_sale"]) as "for_sale" | "for_rent" | "sold",
      price,
      pricePerSqft: Math.round(price / area),
      address: `Survey No. ${rand(100, 9999)}, ${pick(["North Zone", "East Sector", "Riverside Area", "Hilltop Estate", "Valley View"])}`,
      city: cityData.city,
      state: cityData.state,
      zipCode: `${rand(10000, 99999)}`,
      lat: offset(cityData.lat, 0.15),
      lng: offset(cityData.lng, 0.15),
      area,
      bedrooms: null,
      bathrooms: null,
      yearBuilt: null,
      parking: null,
      floors: null,
      featured: i < 3,
      images: imgSet,
      amenities: plotAmenities.slice(0, rand(2, 5)),
      agentId: insertedAgents[i % insertedAgents.length].id,
      views: rand(30, 3000),
    });
  }

  // Industrial properties (8)
  const industrialTitles = [
    "Large Distribution Warehouse",
    "Manufacturing Facility with Rail Access",
    "Cold Storage Logistics Center",
    "Modern Industrial Park Unit",
    "Heavy-Duty Workshop & Yard",
    "Pharmaceutical-Grade Clean Room",
    "Tech Assembly Facility",
    "Bulk Storage Depot",
  ];

  for (let i = 0; i < 8; i++) {
    const cityData = pick(cities);
    const imgSet = propertyImages.industrial[i % propertyImages.industrial.length];
    const area = rand(10000, 200000);
    const price = rand(800000, 20000000);
    properties.push({
      title: industrialTitles[i],
      description: `State-of-the-art industrial facility in ${cityData.city}'s premier logistics corridor. Ideal for manufacturing, warehousing, or distribution operations.`,
      type: "industrial",
      subtype: pick(["Warehouse", "Manufacturing", "Cold Storage", "Distribution Center", "Workshop"]),
      status: pick(["for_sale", "for_rent", "for_rent"]) as "for_sale" | "for_rent" | "sold",
      price,
      pricePerSqft: Math.round(price / area),
      address: `${rand(1, 999)} ${pick(["Industrial Blvd", "Logistics Way", "Factory Rd", "Freight Ct", "Harbor Industrial Pkwy"])}`,
      city: cityData.city,
      state: cityData.state,
      zipCode: `${rand(10000, 99999)}`,
      lat: offset(cityData.lat, 0.2),
      lng: offset(cityData.lng, 0.2),
      area,
      bedrooms: null,
      bathrooms: rand(2, 8),
      yearBuilt: rand(1985, 2022),
      parking: rand(20, 200),
      floors: rand(1, 4),
      featured: i < 2,
      images: imgSet,
      amenities: industrialAmenities.slice(0, rand(4, 7)),
      agentId: insertedAgents[i % insertedAgents.length].id,
      views: rand(80, 6000),
    });
  }

  console.log(`Inserting ${properties.length} properties...`);
  const insertedProperties = await db.insert(propertiesTable).values(properties).returning();
  console.log(`Inserted ${insertedProperties.length} properties`);
  console.log("Seed complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
