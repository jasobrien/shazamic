export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$200 - $499" },
  { id: "mid", label: "Mid-Range", range: "$500 - $849" },
  { id: "premium", label: "Premium", range: "$850+" }
];

export const smartphonesAndroid = [
  // ── BUDGET ──
  {
    id: "pixel-9a",
    category: "android",
    name: "Google Pixel 9a",
    priceBand: "budget",
    rank: 1,
    priceUSD: 499,
    rating: 4.6,
    confidence: "High",
    reviewCount: 8200,
    editorPick: true,
    bestFor: "Best camera phone under $500",
    pros: ["Exceptional camera AI", "7 years of OS updates", "Clean, fast UI"],
    cons: ["No wireless charging", "Plastic back"],
    score: { value: 9.4, reliability: 9.1, sound: 9.3, comfort: 8.5 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The 9a delivers flagship-class photography at a budget price — and the 7-year update commitment makes it the safest long-term buy under $500.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Google+Pixel+9a&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "samsung-a55-5g",
    category: "android",
    name: "Samsung Galaxy A55 5G",
    priceBand: "budget",
    rank: 2,
    priceUSD: 449,
    rating: 4.3,
    confidence: "High",
    reviewCount: 12400,
    editorPick: false,
    bestFor: "Best-built mid-size Android under $450",
    pros: ["Bright AMOLED display", "IP67 water resistant", "Solid construction"],
    cons: ["Camera lags Pixel 9a", "Slower update cadence"],
    score: { value: 8.7, reliability: 8.8, sound: 8.1, comfort: 8.6 },
    updatedOn: "2026-03-08",
    editorialNote:
      "Dependable and polished, the A55 5G suits buyers who want Samsung's ecosystem feel without flagship pricing.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Samsung+Galaxy+A55+5G&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "nothing-phone-2a",
    category: "android",
    name: "Nothing Phone (2a)",
    priceBand: "budget",
    rank: 3,
    priceUSD: 349,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 5100,
    editorPick: false,
    bestFor: "Design-conscious buyers on a budget",
    pros: ["Unique transparent design", "Snappy performance for price", "Great display"],
    cons: ["Average camera", "Limited US availability"],
    score: { value: 9.0, reliability: 7.9, sound: 7.8, comfort: 8.2 },
    updatedOn: "2026-03-05",
    editorialNote:
      "The 2a punches above its weight on design and screen quality. The camera is functional rather than exceptional.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Nothing+Phone+(2a)&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "motorola-edge-50",
    category: "android",
    name: "Motorola Edge 50",
    priceBand: "budget",
    rank: 4,
    priceUSD: 350,
    rating: 4.1,
    confidence: "Medium",
    reviewCount: 3800,
    editorPick: false,
    bestFor: "Long battery life under $400",
    pros: ["Strong battery life", "Near-stock Android", "144Hz display"],
    cons: ["Plasticky build", "Camera not class-leading"],
    score: { value: 8.6, reliability: 8.0, sound: 7.9, comfort: 9.0 },
    updatedOn: "2026-03-04",
    editorialNote:
      "Motorola's stripped-back approach and large battery make this a smart pick for power users on a strict budget.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Motorola+Edge+50&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "samsung-a35-5g",
    category: "android",
    name: "Samsung Galaxy A35 5G",
    priceBand: "budget",
    rank: 5,
    priceUSD: 299,
    rating: 4.0,
    confidence: "Medium",
    reviewCount: 9700,
    editorPick: false,
    bestFor: "Lowest-cost IP-rated Samsung",
    pros: ["IP67 water resistance", "Vivid AMOLED display", "Reliable 5G"],
    cons: ["Slow 25W charging", "Older chipset"],
    score: { value: 8.4, reliability: 8.5, sound: 7.5, comfort: 8.0 },
    updatedOn: "2026-03-01",
    editorialNote:
      "The A35 gets the Samsung fundamentals right — durable, bright, and dependable — without breaking the budget.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Samsung+Galaxy+A35+5G&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── MID-RANGE ──
  {
    id: "google-pixel-9",
    category: "android",
    name: "Google Pixel 9",
    priceBand: "mid",
    rank: 1,
    priceUSD: 799,
    rating: 4.7,
    confidence: "High",
    reviewCount: 14600,
    editorPick: true,
    bestFor: "Best all-round Android in the mid tier",
    pros: ["Best-in-class camera AI", "7 years of updates", "Instant call screen"],
    cons: ["No telephoto lens", "Average gaming GPU"],
    score: { value: 9.0, reliability: 9.2, sound: 9.6, comfort: 8.8 },
    updatedOn: "2026-03-12",
    editorialNote:
      "The Pixel 9 is arguably the smartest mid-range purchase in Android today — fast updates, incredible AI photo tools, and a reliable daily experience.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Google+Pixel+9&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "samsung-galaxy-s25",
    category: "android",
    name: "Samsung Galaxy S25",
    priceBand: "mid",
    rank: 2,
    priceUSD: 799,
    rating: 4.6,
    confidence: "High",
    reviewCount: 18200,
    editorPick: false,
    bestFor: "Samsung ecosystem buyers wanting Galaxy AI",
    pros: ["Galaxy AI productivity tools", "Bright display", "Compact premium feel"],
    cons: ["128GB base storage only", "Camera slightly behind Pixel"],
    score: { value: 8.7, reliability: 9.0, sound: 9.2, comfort: 8.9 },
    updatedOn: "2026-03-11",
    editorialNote:
      "Samsung's Galaxy AI tools make the S25 a compelling option for ecosystem regulars who want a refined, future-ready experience.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Samsung+Galaxy+S25&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "oneplus-13r",
    category: "android",
    name: "OnePlus 13R",
    priceBand: "mid",
    rank: 3,
    priceUSD: 600,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 6300,
    editorPick: false,
    bestFor: "Performance-first buyers under $650",
    pros: ["80W fast charging", "High-brightness display", "Top Snapdragon chip"],
    cons: ["Camera behind Pixel 9", "Shorter OS support window"],
    score: { value: 9.1, reliability: 8.5, sound: 8.5, comfort: 9.1 },
    updatedOn: "2026-03-07",
    editorialNote:
      "The 13R delivers near-flagship processing power and 80W charging at a price that undercuts the competition by $200.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=OnePlus+13R&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "motorola-edge-50-ultra",
    category: "android",
    name: "Motorola Edge 50 Ultra",
    priceBand: "mid",
    rank: 4,
    priceUSD: 649,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 4100,
    editorPick: false,
    bestFor: "Fastest charging mid-range Android",
    pros: ["125W wired + 50W wireless charging", "Premium build", "Near-stock Android"],
    cons: ["Less AI depth than Pixel or Samsung", "Limited US support"],
    score: { value: 8.5, reliability: 8.4, sound: 8.3, comfort: 9.2 },
    updatedOn: "2026-03-05",
    editorialNote:
      "If charging speed is a priority, the Edge 50 Ultra's 125W top-up is best-in-class at this price. The trade-off is camera depth.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Motorola+Edge+50+Ultra&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "google-pixel-8a",
    category: "android",
    name: "Google Pixel 8a",
    priceBand: "mid",
    rank: 5,
    priceUSD: 549,
    rating: 4.5,
    confidence: "High",
    reviewCount: 11400,
    editorPick: false,
    bestFor: "Pixel experience at a discount",
    pros: ["Excellent camera for price", "7-year update commitment", "IP67 rated"],
    cons: ["Slightly less bright than Pixel 9", "Older chip"],
    score: { value: 9.2, reliability: 9.0, sound: 9.3, comfort: 8.5 },
    updatedOn: "2026-03-06",
    editorialNote:
      "The 8a still holds up strongly — buyers willing to skip the very latest generation get superb camera value at a significant discount.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Google+Pixel+8a&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── PREMIUM ──
  {
    id: "samsung-s25-ultra",
    category: "android",
    name: "Samsung Galaxy S25 Ultra",
    priceBand: "premium",
    rank: 1,
    priceUSD: 1299,
    rating: 4.8,
    confidence: "High",
    reviewCount: 21500,
    editorPick: true,
    bestFor: "Power users wanting the definitive Android camera",
    pros: ["200MP camera system", "Built-in S Pen", "Galaxy AI suite", "Titanium build"],
    cons: ["Expensive", "Large and heavy"],
    score: { value: 8.4, reliability: 9.3, sound: 9.8, comfort: 8.6 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The S25 Ultra is the most complete Android device today — productivity, photography, and raw power converge at a price premium.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Samsung+Galaxy+S25+Ultra&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "pixel-9-pro-xl",
    category: "android",
    name: "Google Pixel 9 Pro XL",
    priceBand: "premium",
    rank: 2,
    priceUSD: 1099,
    rating: 4.7,
    confidence: "High",
    reviewCount: 9800,
    editorPick: false,
    bestFor: "Peak Pixel photography on a large screen",
    pros: ["Superb camera AI with telephoto", "Large bright display", "7-year update guarantee"],
    cons: ["No S Pen", "Less hardware customization than Samsung"],
    score: { value: 8.7, reliability: 9.4, sound: 9.7, comfort: 8.9 },
    updatedOn: "2026-03-13",
    editorialNote:
      "For buyers who want the best camera with a long-term software commitment, the Pixel 9 Pro XL is the clearest Android recommendation.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Google+Pixel+9+Pro+XL&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "pixel-9-pro-fold",
    category: "android",
    name: "Google Pixel 9 Pro Fold",
    priceBand: "premium",
    rank: 3,
    priceUSD: 1799,
    rating: 4.5,
    confidence: "Medium",
    reviewCount: 3200,
    editorPick: false,
    bestFor: "Best foldable with flagship camera quality",
    pros: ["Best camera of any foldable", "Compact folded size", "Durable IPX8 hinge"],
    cons: ["Most expensive pick", "Thick when folded"],
    score: { value: 7.9, reliability: 8.8, sound: 9.6, comfort: 8.7 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The Pro Fold makes the strongest case for foldables yet — especially for Pixel fans who want both tablet and phone in one device.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Google+Pixel+9+Pro+Fold&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "samsung-s25-plus",
    category: "android",
    name: "Samsung Galaxy S25+",
    priceBand: "premium",
    rank: 4,
    priceUSD: 999,
    rating: 4.6,
    confidence: "High",
    reviewCount: 14100,
    editorPick: false,
    bestFor: "Large Samsung screen without Ultra price",
    pros: ["Big 6.7\" display", "Strong 45W charging", "Excellent performance"],
    cons: ["No S Pen", "Camera behind Ultra's 200MP system"],
    score: { value: 8.6, reliability: 9.1, sound: 9.0, comfort: 8.8 },
    updatedOn: "2026-03-11",
    editorialNote:
      "The S25+ hits the sweet spot for Samsung fans who want a large screen premium experience without the top-tier sticker price.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Samsung+Galaxy+S25%2B&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "oneplus-13",
    category: "android",
    name: "OnePlus 13",
    priceBand: "premium",
    rank: 5,
    priceUSD: 899,
    rating: 4.6,
    confidence: "Medium",
    reviewCount: 7600,
    editorPick: false,
    bestFor: "Top performance at entry-premium cost",
    pros: ["100W fast charging", "Snapdragon 8 Elite chip", "Clean OxygenOS"],
    cons: ["Less AI depth than Pixel/Samsung", "Smaller 50MP main sensor"],
    score: { value: 9.1, reliability: 8.7, sound: 8.8, comfort: 9.1 },
    updatedOn: "2026-03-09",
    editorialNote:
      "At $899, the OnePlus 13 delivers elite processing power and 100W charging that flagship rivals charge 30–40% more for.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=OnePlus+13&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Camera is scored on main sensor, low-light performance, video quality, and AI processing depth.",
  "Battery covers real-world screen-on-time and wired/wireless charging speed.",
  "Reliability reflects OS update cadence, long-term owner satisfaction, and build durability signals.",
  "Value weighs price against camera, performance, software longevity, and build quality."
];
