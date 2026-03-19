export const PRICE_BANDS = [
  { id: "standard", label: "Standard", range: "$599 - $849" },
  { id: "pro", label: "Pro", range: "$850 - $1,199" },
  { id: "pro-max", label: "Pro Max", range: "$1,200+" }
];

export const smartphonesIphone = [
  // ── STANDARD ──
  {
    id: "iphone-16",
    category: "iphone",
    name: "iPhone 16",
    priceBand: "standard",
    rank: 1,
    priceUSD: 799,
    rating: 4.7,
    confidence: "High",
    reviewCount: 32100,
    editorPick: true,
    bestFor: "Best all-round iPhone for most people",
    pros: ["A18 chip with Apple Intelligence", "Camera Control button", "USB-C"],
    cons: ["No ProMotion display", "Base 128GB storage only"],
    score: { value: 9.0, reliability: 9.4, sound: 8.9, comfort: 8.7 },
    updatedOn: "2026-03-12",
    editorialNote:
      "The iPhone 16 is the clearest recommendation for most buyers — fast chip, Apple Intelligence support, and strong camera in a comfortable size.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+16&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "iphone-16-plus",
    category: "iphone",
    name: "iPhone 16 Plus",
    priceBand: "standard",
    rank: 2,
    priceUSD: 899,
    rating: 4.6,
    confidence: "High",
    reviewCount: 14800,
    editorPick: false,
    bestFor: "Large-screen iPhone without Pro price",
    pros: ["6.7\" screen without Pro Max cost", "Outstanding battery life", "Apple Intelligence"],
    cons: ["No ProMotion", "Same cameras as standard iPhone 16"],
    score: { value: 8.7, reliability: 9.3, sound: 8.9, comfort: 9.1 },
    updatedOn: "2026-03-11",
    editorialNote:
      "If battery life and screen size matter more than Pro camera features, the iPhone 16 Plus is the most efficient path to both.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+16+Plus&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "iphone-se-4",
    category: "iphone",
    name: "iPhone SE (4th gen)",
    priceBand: "standard",
    rank: 3,
    priceUSD: 599,
    rating: 4.5,
    confidence: "High",
    reviewCount: 11200,
    editorPick: false,
    bestFor: "Best-value Apple Intelligence entry point",
    pros: ["Lowest Apple Intelligence price", "A18 chip", "6.1\" OLED display"],
    cons: ["Single rear camera", "No Face ID port sensor"],
    score: { value: 9.3, reliability: 9.2, sound: 8.2, comfort: 8.5 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The SE 4 is technically remarkable for $599 — A18 chip, OLED screen, and Apple Intelligence at the lowest iPhone entry point ever.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+SE+(4th+gen)&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "iphone-15",
    category: "iphone",
    name: "iPhone 15",
    priceBand: "standard",
    rank: 4,
    priceUSD: 699,
    rating: 4.5,
    confidence: "High",
    reviewCount: 28400,
    editorPick: false,
    bestFor: "Reliable everyday iPhone at a discount",
    pros: ["Dynamic Island", "USB-C port", "Good main camera"],
    cons: ["No Apple Intelligence (A16 chip)", "Starting to age"],
    score: { value: 8.8, reliability: 9.1, sound: 8.5, comfort: 8.8 },
    updatedOn: "2026-03-08",
    editorialNote:
      "A sensible discount buy if Apple Intelligence isn't a priority — the iPhone 15 still delivers a polished everyday experience.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+15&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "iphone-14",
    category: "iphone",
    name: "iPhone 14",
    priceBand: "standard",
    rank: 5,
    priceUSD: 599,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 41200,
    editorPick: false,
    bestFor: "Budget-conscious iOS buyers wanting proven reliability",
    pros: ["Still-fast A15 chip", "Proven durability record", "Strong resale"],
    cons: ["No Dynamic Island", "Lightning port", "No Apple Intelligence"],
    score: { value: 8.2, reliability: 9.0, sound: 8.0, comfort: 8.6 },
    updatedOn: "2026-03-05",
    editorialNote:
      "The iPhone 14 is a reliable workhorse that handles everyday tasks without complaint — best bought when discounted below $500.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+14&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── PRO ──
  {
    id: "iphone-16-pro",
    category: "iphone",
    name: "iPhone 16 Pro",
    priceBand: "pro",
    rank: 1,
    priceUSD: 999,
    rating: 4.8,
    confidence: "High",
    reviewCount: 24600,
    editorPick: true,
    bestFor: "Best all-round Pro iPhone",
    pros: ["48MP triple camera with 5x telephoto", "ProMotion 120Hz display", "Titanium frame"],
    cons: ["Expensive", "Lighter battery gains than Pro Max"],
    score: { value: 8.8, reliability: 9.5, sound: 9.5, comfort: 9.0 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The Pro builds on everything great about the iPhone 16 with a superior camera system and silky 120Hz screen — justify it if camera matters.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+16+Pro&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "iphone-15-pro",
    category: "iphone",
    name: "iPhone 15 Pro",
    priceBand: "pro",
    rank: 2,
    priceUSD: 899,
    rating: 4.7,
    confidence: "High",
    reviewCount: 31500,
    editorPick: false,
    bestFor: "Discounted Pro iPhone still worthy in 2026",
    pros: ["Titanium build", "5x telephoto", "Action Button"],
    cons: ["No Apple Intelligence support (A17 limit)", "Older chip"],
    score: { value: 9.1, reliability: 9.3, sound: 9.3, comfort: 8.9 },
    updatedOn: "2026-03-10",
    editorialNote:
      "At a discounted street price, the iPhone 15 Pro remains an excellent camera phone — the key trade-off is missing Apple Intelligence.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+15+Pro&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "iphone-16-pro-512",
    category: "iphone",
    name: "iPhone 16 Pro (512GB)",
    priceBand: "pro",
    rank: 3,
    priceUSD: 1199,
    rating: 4.8,
    confidence: "High",
    reviewCount: 9100,
    editorPick: false,
    bestFor: "Power Pro users needing serious local storage",
    pros: ["Ample storage for ProRes video", "All iPhone 16 Pro features", "Future-proofed capacity"],
    cons: ["Near Pro Max price", "Same cameras as 128GB Pro"],
    score: { value: 8.3, reliability: 9.5, sound: 9.5, comfort: 9.0 },
    updatedOn: "2026-03-12",
    editorialNote:
      "If you shoot ProRes video or need serious local storage, the 512GB Pro is the practical ceiling before jumping to Pro Max pricing.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+16+Pro+(512GB)&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "iphone-15-pro-max",
    category: "iphone",
    name: "iPhone 15 Pro Max",
    priceBand: "pro",
    rank: 4,
    priceUSD: 999,
    rating: 4.7,
    confidence: "Medium",
    reviewCount: 18700,
    editorPick: false,
    bestFor: "Large Pro screen at a legacy price",
    pros: ["6.7\" ProMotion display", "5x telephoto", "Strong battery"],
    cons: ["No Apple Intelligence", "Heavier than newer Pro options"],
    score: { value: 8.9, reliability: 9.2, sound: 9.4, comfort: 8.7 },
    updatedOn: "2026-03-08",
    editorialNote:
      "If you want Pro Max scale on a budget, the discounted 15 Pro Max is a legitimate choice — just accept the Apple Intelligence trade-off.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+15+Pro+Max&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "iphone-14-pro-max",
    category: "iphone",
    name: "iPhone 14 Pro Max",
    priceBand: "pro",
    rank: 5,
    priceUSD: 879,
    rating: 4.5,
    confidence: "Medium",
    reviewCount: 26300,
    editorPick: false,
    bestFor: "Budget-conscious Pro Max size buyers",
    pros: ["Still-fast A16 chip", "Large 6.7\" screen", "Dynamic Island"],
    cons: ["No Apple Intelligence", "Aging camera vs current Pro"],
    score: { value: 8.4, reliability: 9.0, sound: 8.8, comfort: 8.9 },
    updatedOn: "2026-03-04",
    editorialNote:
      "The 14 Pro Max earns its place as a discounted gateway to the Pro Max experience — just know you're two generations behind.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+14+Pro+Max&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── PRO MAX ──
  {
    id: "iphone-16-pro-max",
    category: "iphone",
    name: "iPhone 16 Pro Max",
    priceBand: "pro-max",
    rank: 1,
    priceUSD: 1199,
    rating: 4.9,
    confidence: "High",
    reviewCount: 19800,
    editorPick: true,
    bestFor: "Absolute best iPhone available",
    pros: ["Largest battery of any iPhone", "5x telephoto", "4K 120fps video", "Titanium"],
    cons: ["Most expensive iPhone", "Large and heavy"],
    score: { value: 8.5, reliability: 9.6, sound: 9.8, comfort: 9.2 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The 16 Pro Max is simply the best iPhone Apple makes — for users who demand peak camera, peak battery, and peak screen, it justifies every penny.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+16+Pro+Max&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "iphone-16-pro-max-512",
    category: "iphone",
    name: "iPhone 16 Pro Max (512GB)",
    priceBand: "pro-max",
    rank: 2,
    priceUSD: 1399,
    rating: 4.9,
    confidence: "High",
    reviewCount: 7200,
    editorPick: false,
    bestFor: "Professionals shooting ProRes video on-device",
    pros: ["512GB local ProRes capacity", "All 16 Pro Max features", "Future storage headroom"],
    cons: ["Very expensive", "Overkill for most buyers"],
    score: { value: 7.9, reliability: 9.6, sound: 9.8, comfort: 9.2 },
    updatedOn: "2026-03-13",
    editorialNote:
      "Recommended only for video professionals who need local storage at shoot time — otherwise the 256GB base is better value.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+16+Pro+Max+(512GB)&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "iphone-16-pro-max-1tb",
    category: "iphone",
    name: "iPhone 16 Pro Max (1TB)",
    priceBand: "pro-max",
    rank: 3,
    priceUSD: 1599,
    rating: 4.9,
    confidence: "Medium",
    reviewCount: 2900,
    editorPick: false,
    bestFor: "Maximum capacity iPhone without cloud dependency",
    pros: ["1TB avoids cloud uploads on location", "All 16 Pro Max features"],
    cons: ["Extremely expensive", "Niche use case"],
    score: { value: 7.2, reliability: 9.6, sound: 9.8, comfort: 9.2 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The 1TB tier is a very niche purchase — suited to field journalists and filmmakers who can't rely on cloud uploads. Buy it only if you genuinely need it.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+16+Pro+Max+(1TB)&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "iphone-15-pro-max-512",
    category: "iphone",
    name: "iPhone 15 Pro Max (512GB)",
    priceBand: "pro-max",
    rank: 4,
    priceUSD: 1299,
    rating: 4.7,
    confidence: "Medium",
    reviewCount: 8600,
    editorPick: false,
    bestFor: "Large-storage Pro Max at a steep discount",
    pros: ["512GB at $300 less than current 16 Pro Max", "Strong 5x telephoto", "Proven reliability"],
    cons: ["No Apple Intelligence", "Previous generation titanium design"],
    score: { value: 8.6, reliability: 9.2, sound: 9.4, comfort: 9.0 },
    updatedOn: "2026-03-08",
    editorialNote:
      "If you need 512GB storage and can live without Apple Intelligence, the 15 Pro Max 512GB is a compelling high-value alternative.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+15+Pro+Max+(512GB)&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "iphone-15-pro-max-1tb",
    category: "iphone",
    name: "iPhone 15 Pro Max (1TB)",
    priceBand: "pro-max",
    rank: 5,
    priceUSD: 1499,
    rating: 4.7,
    confidence: "Low",
    reviewCount: 3100,
    editorPick: false,
    bestFor: "Legacy 1TB capacity at a heavy discount",
    pros: ["1TB storage at discount vs current gen", "Proven reliability"],
    cons: ["No Apple Intelligence", "Older chip", "Diminishing price advantage"],
    score: { value: 7.5, reliability: 9.0, sound: 9.4, comfort: 9.0 },
    updatedOn: "2026-03-05",
    editorialNote:
      "A very niche option — only worth considering if the discount vs current-gen 1TB models is significant and Apple Intelligence isn't required.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=iPhone+15+Pro+Max+(1TB)&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Camera scores main sensor quality, low-light, telephoto reach, and video capabilities.",
  "Battery reflects real-world screen-on-time, wired charging speed, and MagSafe wireless performance.",
  "Reliability covers iOS version support longevity, build durability, and owner satisfaction track record.",
  "Value weighs price against camera tier, Apple Intelligence support, and expected years of usability."
];
