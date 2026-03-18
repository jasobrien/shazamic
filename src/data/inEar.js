export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$25 - $80" },
  { id: "mid", label: "Mid-Range", range: "$81 - $180" },
  { id: "premium", label: "Premium", range: "$181+" }
];

export const inEar = [
  {
    id: "samsung-buds-fe",
    category: "in-ear",
    name: "Samsung Galaxy Buds FE",
    priceBand: "budget",
    rank: 1,
    priceUSD: 59,
    rating: 4.3,
    confidence: "High",
    reviewCount: 18000,
    editorPick: true,
    bestFor: "Best budget ANC earbuds",
    pros: ["Solid ANC for price", "Comfortable fit", "Good app support"],
    cons: ["Average battery life", "No wireless charging"],
    score: { value: 9.1, reliability: 8.6, sound: 8.3, comfort: 8.7 },
    updatedOn: "2026-03-14",
    editorialNote:
      "Samsung delivers strong ANC and a comfortable fit at a price that undercuts most rivals.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CD93LVT6?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "soundcore-a40",
    category: "in-ear",
    name: "Soundcore Space A40",
    priceBand: "budget",
    rank: 2,
    priceUSD: 54,
    rating: 4.4,
    confidence: "High",
    reviewCount: 22000,
    editorPick: false,
    bestFor: "All-day battery champion",
    pros: ["10h+ battery per charge", "Compact case", "Custom EQ app"],
    cons: ["Mids can recede", "No multipoint"],
    score: { value: 9.0, reliability: 8.5, sound: 8.1, comfort: 8.5 },
    updatedOn: "2026-03-12",
    editorialNote:
      "Incredible battery life and a tiny case make these ideal for travelers on a tight budget.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0B1LVC5VZ?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "jbl-vibe-200tws",
    category: "in-ear",
    name: "JBL Vibe 200TWS",
    priceBand: "budget",
    rank: 3,
    priceUSD: 29,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 31000,
    editorPick: false,
    bestFor: "Ultra-budget daily driver",
    pros: ["Very affordable", "JBL bass signature", "IPX2 splash resistance"],
    cons: ["No ANC", "Basic microphone"],
    score: { value: 8.8, reliability: 7.9, sound: 7.8, comfort: 8.0 },
    updatedOn: "2026-03-10",
    editorialNote:
      "At under $30 these deliver surprisingly fun sound for casual listening.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09CGFY3GN?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "earfun-air-pro-3",
    category: "in-ear",
    name: "EarFun Air Pro 3",
    priceBand: "budget",
    rank: 4,
    priceUSD: 55,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 9000,
    editorPick: false,
    bestFor: "ANC on a strict budget",
    pros: ["Effective ANC", "aptX Adaptive", "Lightweight"],
    cons: ["Touch controls finicky", "Case feels cheap"],
    score: { value: 8.7, reliability: 8.1, sound: 8.2, comfort: 8.3 },
    updatedOn: "2026-03-09",
    editorialNote:
      "Punches above its weight with capable ANC and high-quality Bluetooth codecs.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0B2SDZHYQ?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "moondrop-space-travel",
    category: "in-ear",
    name: "Moondrop Space Travel",
    priceBand: "budget",
    rank: 5,
    priceUSD: 39,
    rating: 4.1,
    confidence: "Medium",
    reviewCount: 3200,
    editorPick: false,
    bestFor: "Audiophile-tuned budget pick",
    pros: ["Neutral sound signature", "Comfortable tips", "Low latency mode"],
    cons: ["No ANC", "Short battery life"],
    score: { value: 8.5, reliability: 7.8, sound: 8.5, comfort: 8.1 },
    updatedOn: "2026-03-07",
    editorialNote:
      "A niche budget gem for listeners who prefer accurate tuning over bass boost.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C5Z3X8F3?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "sony-wf1000xm5",
    category: "in-ear",
    name: "Sony WF-1000XM5",
    priceBand: "mid",
    rank: 1,
    priceUSD: 178,
    rating: 4.5,
    confidence: "High",
    reviewCount: 14000,
    editorPick: true,
    bestFor: "Best all-round ANC earbuds",
    pros: ["Class-leading ANC", "Detailed sound", "Compact size"],
    cons: ["Pricey", "Tips may need swapping"],
    score: { value: 9.2, reliability: 9.1, sound: 9.2, comfort: 8.8 },
    updatedOn: "2026-03-15",
    editorialNote:
      "Sony's flagship earbuds remain the gold standard for noise cancellation in a compact form.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C33XXS56?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "airpods-pro-2",
    category: "in-ear",
    name: "Apple AirPods Pro 2",
    priceBand: "mid",
    rank: 2,
    priceUSD: 169,
    rating: 4.7,
    confidence: "High",
    reviewCount: 82000,
    editorPick: false,
    bestFor: "iPhone users wanting seamless ANC",
    pros: ["Deep Apple integration", "Adaptive transparency", "USB-C case"],
    cons: ["Best with Apple only", "No lossless Bluetooth"],
    score: { value: 9.0, reliability: 9.3, sound: 8.8, comfort: 9.0 },
    updatedOn: "2026-03-14",
    editorialNote:
      "Unmatched ecosystem integration for iPhone users with excellent transparency mode.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0D1XD1ZV3?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "sennheiser-momentum-tw4",
    category: "in-ear",
    name: "Sennheiser Momentum TW4",
    priceBand: "mid",
    rank: 3,
    priceUSD: 180,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 4500,
    editorPick: false,
    bestFor: "Audiophile wireless earbuds",
    pros: ["Rich, detailed sound", "Strong ANC", "Premium build"],
    cons: ["Case is large", "Fit may not suit all ears"],
    score: { value: 8.7, reliability: 8.5, sound: 9.1, comfort: 8.2 },
    updatedOn: "2026-03-11",
    editorialNote:
      "For listeners who prioritize sound quality, these deliver an audiophile-grade experience.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CYG3G6VD?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "jabra-elite-8-active",
    category: "in-ear",
    name: "Jabra Elite 8 Active",
    priceBand: "mid",
    rank: 4,
    priceUSD: 149,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 6800,
    editorPick: false,
    bestFor: "Secure fit with great calls",
    pros: ["IP68 rating", "Superb call quality", "Comfortable wings"],
    cons: ["Bass can be heavy", "App is complex"],
    score: { value: 8.6, reliability: 8.6, sound: 8.4, comfort: 8.5 },
    updatedOn: "2026-03-09",
    editorialNote:
      "A hybrid pick that bridges everyday use and active lifestyles with a secure, durable design.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CCZGR4GY?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "nothing-ear-2",
    category: "in-ear",
    name: "Nothing Ear (2)",
    priceBand: "mid",
    rank: 5,
    priceUSD: 99,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 5100,
    editorPick: false,
    bestFor: "Style-forward listeners",
    pros: ["Transparent design", "Balanced sound", "Good ANC"],
    cons: ["Stem controls awkward", "Case scratches easily"],
    score: { value: 8.5, reliability: 8.0, sound: 8.4, comfort: 8.1 },
    updatedOn: "2026-03-08",
    editorialNote:
      "Unique design paired with genuinely competitive audio performance.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C6NFHQ66?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "bose-qc-ultra-earbuds",
    category: "in-ear",
    name: "Bose QC Ultra Earbuds",
    priceBand: "premium",
    rank: 1,
    priceUSD: 249,
    rating: 4.5,
    confidence: "High",
    reviewCount: 8200,
    editorPick: true,
    bestFor: "Best premium ANC earbuds",
    pros: ["Immersive ANC", "Spatial audio", "Plush comfort"],
    cons: ["Expensive", "Case is bulky"],
    score: { value: 8.8, reliability: 9.0, sound: 9.1, comfort: 9.2 },
    updatedOn: "2026-03-15",
    editorialNote:
      "Bose brings its legendary noise cancellation to a premium earbud with outstanding comfort.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CD2FSRDD?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "bw-pi8",
    category: "in-ear",
    name: "Bowers & Wilkins Pi8",
    priceBand: "premium",
    rank: 2,
    priceUSD: 349,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 1100,
    editorPick: false,
    bestFor: "Luxury wireless earbuds",
    pros: ["Exceptional sound", "Premium case doubles as DAC", "Build quality"],
    cons: ["Very expensive", "Limited app features"],
    score: { value: 7.8, reliability: 8.3, sound: 9.3, comfort: 8.4 },
    updatedOn: "2026-03-10",
    editorialNote:
      "A prestige pick for listeners who value craftsmanship and sound purity above all.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0DCSQFBT4?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "devialet-gemini-ii",
    category: "in-ear",
    name: "Devialet Gemini II",
    priceBand: "premium",
    rank: 3,
    priceUSD: 299,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 800,
    editorPick: false,
    bestFor: "Bass-forward audiophile earbuds",
    pros: ["Deep, controlled bass", "Strong ANC", "Unique design"],
    cons: ["Pricey", "Fit can be tricky"],
    score: { value: 7.6, reliability: 8.0, sound: 9.0, comfort: 7.8 },
    updatedOn: "2026-03-06",
    editorialNote:
      "Devialet brings its speaker expertise to earbuds with remarkably powerful low-end.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CNQ1G97M?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "technics-az80",
    category: "in-ear",
    name: "Technics EAH-AZ80",
    priceBand: "premium",
    rank: 4,
    priceUSD: 249,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 2800,
    editorPick: false,
    bestFor: "Balanced premium all-rounder",
    pros: ["Natural sound", "3-device multipoint", "Comfortable fit"],
    cons: ["ANC behind Bose/Sony", "Case is large"],
    score: { value: 8.2, reliability: 8.4, sound: 9.0, comfort: 8.5 },
    updatedOn: "2026-03-08",
    editorialNote:
      "An understated premium option with excellent multipoint and natural tuning.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C4T8XWMY?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "bang-olufsen-ex",
    category: "in-ear",
    name: "Bang & Olufsen Beoplay EX",
    priceBand: "premium",
    rank: 5,
    priceUSD: 299,
    rating: 4.1,
    confidence: "Low",
    reviewCount: 950,
    editorPick: false,
    bestFor: "Design-led premium earbuds",
    pros: ["Stunning design", "IP57 rating", "Balanced sound"],
    cons: ["Ultra-premium price", "ANC is adequate not best"],
    score: { value: 7.2, reliability: 7.9, sound: 8.6, comfort: 8.0 },
    updatedOn: "2026-03-04",
    editorialNote:
      "Premium materials and design make these a statement piece with solid audio performance.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09YVMWKXW?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Value score emphasizes performance per dollar.",
  "Reliability score reflects long-term consistency and owner feedback.",
  "Every pick includes at least one downside so recommendations stay balanced.",
  "Lists are reviewed monthly and when major model updates or price shifts occur."
];
