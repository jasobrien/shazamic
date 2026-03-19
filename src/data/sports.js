export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$25 - $80" },
  { id: "mid", label: "Mid-Range", range: "$81 - $180" },
  { id: "premium", label: "Premium", range: "$181+" }
];

export const sports = [
  {
    id: "shokz-openrun",
    category: "sports",
    name: "Shokz OpenRun",
    priceBand: "budget",
    rank: 1,
    priceUSD: 79,
    rating: 4.5,
    confidence: "High",
    reviewCount: 42000,
    editorPick: true,
    bestFor: "Best bone conduction for runners",
    pros: ["Open-ear safety", "IP67 waterproof", "Lightweight 26g"],
    cons: ["Bass is limited", "No noise isolation"],
    score: { value: 9.3, reliability: 9.0, sound: 7.8, comfort: 9.2 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The gold standard for runners who need situational awareness and a secure, waterproof fit.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09BV15NJM?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "jlab-go-air-sport",
    category: "sports",
    name: "JLab Go Air Sport",
    priceBand: "budget",
    rank: 2,
    priceUSD: 29,
    rating: 4.3,
    confidence: "High",
    reviewCount: 55000,
    editorPick: false,
    bestFor: "Ultra-budget gym earbuds",
    pros: ["Incredibly affordable", "Secure ear hooks", "IP55 sweat-proof"],
    cons: ["No ANC", "Basic sound quality"],
    score: { value: 9.1, reliability: 8.0, sound: 7.5, comfort: 8.3 },
    updatedOn: "2026-03-12",
    editorialNote:
      "At this price, the secure fit and sweat resistance make these a gym essential.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09392Q2NQ?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "soundcore-sport-x10",
    category: "sports",
    name: "Soundcore Sport X10",
    priceBand: "budget",
    rank: 3,
    priceUSD: 55,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 8400,
    editorPick: false,
    bestFor: "Rotating ear hooks for HIIT",
    pros: ["Rotating ear hooks", "IPX7", "Strong bass"],
    cons: ["Case is bulky", "ANC is basic"],
    score: { value: 8.8, reliability: 8.3, sound: 8.1, comfort: 8.5 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The innovative rotating hooks lock in place no matter how intense the workout.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0B87X9ZVX?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "tozo-t5",
    category: "sports",
    name: "TOZO T5",
    priceBand: "budget",
    rank: 4,
    priceUSD: 25,
    rating: 4.1,
    confidence: "Medium",
    reviewCount: 120000,
    editorPick: false,
    bestFor: "Cheapest waterproof option",
    pros: ["IPX8 submersible", "Extremely cheap", "Decent bass"],
    cons: ["Sound is average", "No app support"],
    score: { value: 8.7, reliability: 7.6, sound: 7.3, comfort: 7.9 },
    updatedOn: "2026-03-08",
    editorialNote:
      "Remarkable waterproofing at a price you won't worry about losing at the pool.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B07RGZ5NKS?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "jbl-endurance-race",
    category: "sports",
    name: "JBL Endurance Race",
    priceBand: "budget",
    rank: 5,
    priceUSD: 49,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 11000,
    editorPick: false,
    bestFor: "Secure fit for intense workouts",
    pros: ["TwistLock fit", "IP67", "Good battery"],
    cons: ["No ANC", "Bass-heavy tuning"],
    score: { value: 8.5, reliability: 8.2, sound: 7.8, comfort: 8.4 },
    updatedOn: "2026-03-06",
    editorialNote:
      "JBL's TwistLock design stays put during burpees and box jumps.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09MQZ1LQD?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "jabra-elite-8-active-gen2",
    category: "sports",
    name: "Jabra Elite 8 Active Gen 2",
    priceBand: "mid",
    rank: 1,
    priceUSD: 149,
    rating: 4.5,
    confidence: "High",
    reviewCount: 6800,
    editorPick: true,
    bestFor: "Best mid-range sport ANC earbuds",
    pros: ["IP68 military-grade", "Superb ANC", "ShakeGrip coating"],
    cons: ["Bass can overwhelm", "App is complex"],
    score: { value: 9.0, reliability: 9.1, sound: 8.5, comfort: 8.8 },
    updatedOn: "2026-03-15",
    editorialNote:
      "Military-grade durability with excellent ANC — the best mid-range sport earbud available.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Jabra+Elite+8+Active+Gen+2&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "beats-fit-pro",
    category: "sports",
    name: "Beats Fit Pro",
    priceBand: "mid",
    rank: 2,
    priceUSD: 159,
    rating: 4.5,
    confidence: "High",
    reviewCount: 32000,
    editorPick: false,
    bestFor: "Apple users who exercise",
    pros: ["Secure wingtips", "ANC + transparency", "Apple H1 chip"],
    cons: ["Best with Apple only", "No multipoint"],
    score: { value: 8.8, reliability: 8.9, sound: 8.6, comfort: 8.7 },
    updatedOn: "2026-03-13",
    editorialNote:
      "The best sport earbuds for iPhone users thanks to seamless pairing and spatial audio.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09JL41N9C?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "shokz-openrun-pro",
    category: "sports",
    name: "Shokz OpenRun Pro",
    priceBand: "mid",
    rank: 3,
    priceUSD: 125,
    rating: 4.5,
    confidence: "High",
    reviewCount: 18000,
    editorPick: false,
    bestFor: "Upgraded bone conduction bass",
    pros: ["Improved bass over OpenRun", "IP55", "10h battery"],
    cons: ["Still no isolation", "Not for noisy gyms"],
    score: { value: 8.7, reliability: 8.8, sound: 8.2, comfort: 9.0 },
    updatedOn: "2026-03-11",
    editorialNote:
      "The Pro model addresses the bass weakness while keeping the open-ear safety advantage.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09BVWLKNM?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "sony-wf-sp800n",
    category: "sports",
    name: "Sony WF-SP800N",
    priceBand: "mid",
    rank: 4,
    priceUSD: 99,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 14000,
    editorPick: false,
    bestFor: "Sport earbuds with ANC",
    pros: ["IP55", "ANC included", "Sony app EQ"],
    cons: ["Bulky fit", "Dated design"],
    score: { value: 8.4, reliability: 8.3, sound: 8.2, comfort: 7.8 },
    updatedOn: "2026-03-09",
    editorialNote:
      "Sony's sport ANC buds deliver a solid feature set at a competitive mid-range price.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0896SJDL4?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "jaybird-vista-2",
    category: "sports",
    name: "Jaybird Vista 2",
    priceBand: "mid",
    rank: 5,
    priceUSD: 99,
    rating: 4.1,
    confidence: "Medium",
    reviewCount: 7800,
    editorPick: false,
    bestFor: "Rugged outdoor sports",
    pros: ["IP68 + MIL-STD", "Compact and light", "Custom EQ"],
    cons: ["Battery is short", "ANC is weak"],
    score: { value: 8.2, reliability: 8.5, sound: 7.9, comfort: 8.3 },
    updatedOn: "2026-03-07",
    editorialNote:
      "Built for extreme conditions — one of the most ruggedized sport earbuds on the market.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09LY9LVQB?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "shokz-openswim-pro",
    category: "sports",
    name: "Shokz OpenSwim Pro",
    priceBand: "premium",
    rank: 1,
    priceUSD: 179,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 3200,
    editorPick: true,
    bestFor: "Best for swimming laps",
    pros: ["IP68 swim-rated", "Bone conduction", "32GB storage"],
    cons: ["Bluetooth off in water", "Bass limited"],
    score: { value: 8.9, reliability: 8.8, sound: 7.9, comfort: 9.0 },
    updatedOn: "2026-03-15",
    editorialNote:
      "The only headphone that truly works in the pool — with onboard storage for Bluetooth-free playback.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CVNF4R65?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "bose-ultra-open",
    category: "sports",
    name: "Bose Ultra Open Earbuds",
    priceBand: "premium",
    rank: 2,
    priceUSD: 249,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 2100,
    editorPick: false,
    bestFor: "Open-ear with premium sound",
    pros: ["Cuff design stays put", "Spatial audio", "All-day comfort"],
    cons: ["No isolation at all", "Expensive"],
    score: { value: 8.0, reliability: 8.4, sound: 8.5, comfort: 9.3 },
    updatedOn: "2026-03-12",
    editorialNote:
      "Bose's innovative cuff design means all-day comfort with zero ear canal fatigue.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CPBGYXD5?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "sony-float-run",
    category: "sports",
    name: "Sony Float Run",
    priceBand: "premium",
    rank: 3,
    priceUSD: 149,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 2700,
    editorPick: false,
    bestFor: "Open-ear running comfort",
    pros: ["Off-ear drivers", "Ultra-light", "IPX4"],
    cons: ["No isolation", "No app support"],
    score: { value: 8.3, reliability: 8.2, sound: 8.1, comfort: 9.1 },
    updatedOn: "2026-03-10",
    editorialNote:
      "Sony's floating driver design avoids ear canal contact entirely — ideal for long runs.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BXDC94XP?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "jabra-elite-10",
    category: "sports",
    name: "Jabra Elite 10",
    priceBand: "premium",
    rank: 4,
    priceUSD: 199,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 4500,
    editorPick: false,
    bestFor: "Premium semi-open sport ANC",
    pros: ["Dolby Atmos", "IP57", "Great multipoint"],
    cons: ["Semi-open reduces isolation", "Pricey"],
    score: { value: 8.1, reliability: 8.5, sound: 8.8, comfort: 8.6 },
    updatedOn: "2026-03-08",
    editorialNote:
      "Jabra's flagship combines Atmos spatial audio with a sport-friendly IP57 build.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CCZ3RXWD?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "sennheiser-momentum-sport",
    category: "sports",
    name: "Sennheiser Momentum Sport",
    priceBand: "premium",
    rank: 5,
    priceUSD: 299,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 1100,
    editorPick: false,
    bestFor: "Heart rate + body temp tracking",
    pros: ["Built-in biometric sensors", "Premium sound", "IP55"],
    cons: ["Very expensive", "Sensors need clean contact"],
    score: { value: 7.5, reliability: 8.0, sound: 8.7, comfort: 8.2 },
    updatedOn: "2026-03-06",
    editorialNote:
      "The only premium sport earbud with built-in heart rate and body temperature sensors.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CX59GLSL?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Value score emphasizes performance per dollar.",
  "Reliability and durability scores are weighted higher for sport headphones.",
  "Water/sweat resistance rating is a key factor in sport rankings.",
  "Every pick includes at least one downside so recommendations stay balanced.",
  "Lists are reviewed monthly and when major model updates or price shifts occur."
];
