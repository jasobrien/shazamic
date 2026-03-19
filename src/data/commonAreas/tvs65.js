export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$400 – $800" },
  { id: "mid", label: "Mid-Range", range: "$801 – $1,400" },
  { id: "premium", label: "Premium", range: "$1,401+" }
];

export const tvs65 = [
  // ── Budget ──
  {
    id: "tcl-q6-65",
    category: "65-inch",
    name: "TCL Q6 QLED 65\"",
    priceBand: "budget",
    rank: 1,
    priceUSD: 498,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 2600,
    editorPick: true,
    bestFor: "Big 65-inch QLED on a budget",
    pros: ["QLED color volume", "Google TV built-in", "Under $500 for 65\""],
    cons: ["Average black levels", "Basic remote"],
    score: { value: 9.1, reliability: 8.2, sound: 7.8, comfort: 8.0 },
    updatedOn: "2026-03-19",
    editorialNote: "Hard to beat for a 65-inch QLED under $500 — solid smart TV with good color.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C6J6K2WG?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "hisense-u6k-65",
    category: "65-inch",
    name: "Hisense U6K 65\" Mini-LED",
    priceBand: "budget",
    rank: 2,
    priceUSD: 548,
    rating: 4.4,
    confidence: "High",
    reviewCount: 3400,
    editorPick: false,
    bestFor: "Cheapest 65-inch with Mini-LED backlight",
    pros: ["Mini-LED at budget price", "Dolby Vision", "Quantum Dot color"],
    cons: ["Limited dimming zones", "Average motion handling"],
    score: { value: 9.0, reliability: 8.1, sound: 7.5, comfort: 7.9 },
    updatedOn: "2026-03-19",
    editorialNote: "Mini-LED tech at a budget 65-inch price — impressive brightness for the money.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C73HRL1R?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "vizio-v-series-65",
    category: "65-inch",
    name: "Vizio V-Series 65\" 4K",
    priceBand: "budget",
    rank: 3,
    priceUSD: 398,
    rating: 4.1,
    confidence: "High",
    reviewCount: 5100,
    editorPick: false,
    bestFor: "Absolute cheapest 65-inch 4K option",
    pros: ["Very low price", "SmartCast built-in", "AirPlay 2 support"],
    cons: ["Dim panel", "Slower processor"],
    score: { value: 8.6, reliability: 7.7, sound: 7.0, comfort: 7.5 },
    updatedOn: "2026-03-19",
    editorialNote: "The cheapest way into a 65-inch 4K panel — good for casual streaming.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C7DG3QNT?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  // ── Mid-Range ──
  {
    id: "sony-x90l-65",
    category: "65-inch",
    name: "Sony X90L 65\" Full Array LED",
    priceBand: "mid",
    rank: 1,
    priceUSD: 1098,
    rating: 4.6,
    confidence: "High",
    reviewCount: 3100,
    editorPick: true,
    bestFor: "Best 65-inch for movies and gaming",
    pros: ["Full Array Local Dimming", "Dolby Vision & Atmos", "120 Hz VRR"],
    cons: ["Narrow viewing angles", "Not all ports HDMI 2.1"],
    score: { value: 9.0, reliability: 9.0, sound: 8.4, comfort: 8.5 },
    updatedOn: "2026-03-19",
    editorialNote: "Sony's best mid-range 65-inch — great for a dedicated movie and gaming room.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BZF25RXP?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "samsung-q80c-65",
    category: "65-inch",
    name: "Samsung Q80C 65\" QLED",
    priceBand: "mid",
    rank: 2,
    priceUSD: 998,
    rating: 4.5,
    confidence: "High",
    reviewCount: 4200,
    editorPick: false,
    bestFor: "Samsung 65-inch with wide viewing angle",
    pros: ["Wide viewing angle", "Object Tracking Sound", "4 HDMI 2.1 ports"],
    cons: ["No Dolby Vision", "Blooming in dark scenes"],
    score: { value: 8.7, reliability: 8.7, sound: 8.2, comfort: 8.4 },
    updatedOn: "2026-03-19",
    editorialNote: "Samsung's mid-tier QLED delivers wide angles and rich gaming features at 65 inches.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BTMFHP2N?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "lg-b3-oled-65",
    category: "65-inch",
    name: "LG B3 65\" OLED 4K",
    priceBand: "mid",
    rank: 3,
    priceUSD: 1297,
    rating: 4.6,
    confidence: "Medium",
    reviewCount: 2200,
    editorPick: false,
    bestFor: "Most affordable 65-inch OLED",
    pros: ["Perfect blacks", "Dolby Vision & Atmos", "Thin design"],
    cons: ["60 Hz panel", "Lower peak brightness"],
    score: { value: 8.8, reliability: 8.5, sound: 8.0, comfort: 8.6 },
    updatedOn: "2026-03-19",
    editorialNote: "The most affordable 65-inch OLED on the market — stunning contrast for movie nights.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BVWYV8LW?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  // ── Premium ──
  {
    id: "samsung-qn90c-65",
    category: "65-inch",
    name: "Samsung QN90C 65\" Neo QLED",
    priceBand: "premium",
    rank: 1,
    priceUSD: 1798,
    rating: 4.7,
    confidence: "High",
    reviewCount: 3800,
    editorPick: true,
    bestFor: "Bright-room 65-inch powerhouse",
    pros: ["Mini-LED backlight", "Anti-Reflection coating", "Low input lag"],
    cons: ["No Dolby Vision", "Expensive"],
    score: { value: 9.2, reliability: 9.0, sound: 8.5, comfort: 8.8 },
    updatedOn: "2026-03-19",
    editorialNote: "The best 65-inch for bright living rooms — Mini-LED delivers superb HDR and contrast.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BLJBZ5HQ?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "lg-c3-oled-65",
    category: "65-inch",
    name: "LG C3 65\" OLED evo",
    priceBand: "premium",
    rank: 2,
    priceUSD: 1597,
    rating: 4.8,
    confidence: "High",
    reviewCount: 5200,
    editorPick: false,
    bestFor: "Best all-round 65-inch OLED",
    pros: ["Perfect blacks", "120 Hz + VRR", "Dolby Vision & Atmos"],
    cons: ["Risk of burn-in", "No Anti-Reflection"],
    score: { value: 9.1, reliability: 8.8, sound: 8.4, comfort: 9.0 },
    updatedOn: "2026-03-19",
    editorialNote: "The gold standard 65-inch OLED — top pick for home theater and console gaming.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BVXF2FZY?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "sony-a80l-65",
    category: "65-inch",
    name: "Sony A80L 65\" OLED",
    priceBand: "premium",
    rank: 3,
    priceUSD: 1998,
    rating: 4.7,
    confidence: "Medium",
    reviewCount: 1600,
    editorPick: false,
    bestFor: "Cinephile-grade 65-inch picture",
    pros: ["Best-in-class upscaling", "Acoustic Surface Audio", "Cognitive Processor XR"],
    cons: ["Most expensive 65\"", "No ATSC 3.0"],
    score: { value: 8.9, reliability: 8.9, sound: 9.0, comfort: 8.7 },
    updatedOn: "2026-03-19",
    editorialNote: "Sony's flagship 65-inch OLED — unmatched color accuracy and upscaling for cinephiles.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BVXHJ2FP?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Picture quality is scored by contrast ratio, color accuracy, HDR performance, and panel uniformity.",
  "Reliability reflects panel longevity signals and owner-reported issues.",
  "Smart features cover OS responsiveness, app selection, and update cadence.",
  "Value weighs price against panel technology, size, and feature set."
];
