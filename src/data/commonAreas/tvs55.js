export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$250 – $500" },
  { id: "mid", label: "Mid-Range", range: "$501 – $900" },
  { id: "premium", label: "Premium", range: "$901+" }
];

export const tvs55 = [
  // ── Budget ──
  {
    id: "tcl-q6-55",
    category: "55-inch",
    name: "TCL Q6 QLED 55\"",
    priceBand: "budget",
    rank: 1,
    priceUSD: 398,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 2100,
    editorPick: true,
    bestFor: "Affordable QLED color in a 55-inch",
    pros: ["QLED color volume", "Google TV built-in", "Great value for 55\""],
    cons: ["Average black levels", "Basic remote"],
    score: { value: 9.0, reliability: 8.2, sound: 7.9, comfort: 8.0 },
    updatedOn: "2026-03-19",
    editorialNote: "Best value 55-inch 4K TV with QLED color and smart features at a low price.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C6J6JQ6F?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "hisense-a6h-55",
    category: "55-inch",
    name: "Hisense A6H 55\" 4K UHD",
    priceBand: "budget",
    rank: 2,
    priceUSD: 278,
    rating: 4.3,
    confidence: "High",
    reviewCount: 4800,
    editorPick: false,
    bestFor: "Cheapest 55-inch 4K with HDR",
    pros: ["Very affordable", "Dolby Vision HDR", "Game Mode"],
    cons: ["Narrow viewing angles", "Weak built-in audio"],
    score: { value: 8.8, reliability: 8.0, sound: 7.2, comfort: 7.8 },
    updatedOn: "2026-03-19",
    editorialNote: "The cheapest 55-inch 4K with decent HDR — ideal for bedrooms and dorms.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BT6L45YR?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "insignia-f50-55",
    category: "55-inch",
    name: "Insignia F50 55\" Fire TV",
    priceBand: "budget",
    rank: 3,
    priceUSD: 280,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 3200,
    editorPick: false,
    bestFor: "Alexa-first 55-inch on a budget",
    pros: ["Fire TV built-in", "Alexa hands-free", "Low price"],
    cons: ["Mediocre HDR", "Plasticky build"],
    score: { value: 8.5, reliability: 7.8, sound: 7.0, comfort: 7.5 },
    updatedOn: "2026-03-19",
    editorialNote: "Solid pick for an Alexa-integrated 55-inch smart TV without spending much.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BTMQG99J?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  // ── Mid-Range ──
  {
    id: "sony-x90l-55",
    category: "55-inch",
    name: "Sony X90L 55\" Full Array LED",
    priceBand: "mid",
    rank: 1,
    priceUSD: 898,
    rating: 4.6,
    confidence: "High",
    reviewCount: 2800,
    editorPick: true,
    bestFor: "Balanced 55-inch for movies and gaming",
    pros: ["Excellent motion handling", "Dolby Vision & Atmos", "Google TV"],
    cons: ["Narrow viewing angles", "Not all ports HDMI 2.1"],
    score: { value: 9.0, reliability: 9.0, sound: 8.3, comfort: 8.5 },
    updatedOn: "2026-03-19",
    editorialNote: "Sony's best mid-range 55-inch — outstanding motion processing and reliable build.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BZF1Y9VG?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "samsung-cu8000-55",
    category: "55-inch",
    name: "Samsung CU8000 55\" Crystal UHD",
    priceBand: "mid",
    rank: 2,
    priceUSD: 448,
    rating: 4.4,
    confidence: "High",
    reviewCount: 5600,
    editorPick: false,
    bestFor: "Samsung ecosystem in 55 inches",
    pros: ["Tizen OS", "Clean design", "Gaming Hub"],
    cons: ["Edge-lit only", "No Dolby Vision"],
    score: { value: 8.5, reliability: 8.6, sound: 7.8, comfort: 8.2 },
    updatedOn: "2026-03-19",
    editorialNote: "Good all-around 55-inch for Samsung fans wanting a step up from budget panels.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BTMJ897J?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "lg-b3-oled-55",
    category: "55-inch",
    name: "LG B3 55\" OLED 4K",
    priceBand: "mid",
    rank: 3,
    priceUSD: 897,
    rating: 4.6,
    confidence: "Medium",
    reviewCount: 1900,
    editorPick: false,
    bestFor: "Entry-level 55-inch OLED",
    pros: ["Perfect blacks", "Dolby Vision & Atmos", "Thin design"],
    cons: ["Lower peak brightness than C3", "Only 60 Hz panel"],
    score: { value: 8.8, reliability: 8.5, sound: 8.0, comfort: 8.6 },
    updatedOn: "2026-03-19",
    editorialNote: "The most affordable 55-inch OLED — stunning contrast at this price point.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BVWYRWXJ?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  // ── Premium ──
  {
    id: "samsung-qn90c-55",
    category: "55-inch",
    name: "Samsung QN90C 55\" Neo QLED",
    priceBand: "premium",
    rank: 1,
    priceUSD: 1298,
    rating: 4.7,
    confidence: "High",
    reviewCount: 3200,
    editorPick: true,
    bestFor: "Bright rooms and 55-inch gaming",
    pros: ["Mini-LED backlight", "Excellent HDR", "Low input lag"],
    cons: ["Expensive for 55\"", "No Dolby Vision"],
    score: { value: 9.3, reliability: 9.0, sound: 8.5, comfort: 8.8 },
    updatedOn: "2026-03-19",
    editorialNote: "Outstanding 55-inch for sports, gaming, and bright living rooms with Mini-LED tech.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BLJ8QK6J?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "lg-c3-oled-55",
    category: "55-inch",
    name: "LG C3 55\" OLED evo",
    priceBand: "premium",
    rank: 2,
    priceUSD: 1297,
    rating: 4.8,
    confidence: "High",
    reviewCount: 4100,
    editorPick: false,
    bestFor: "Best all-round 55-inch OLED",
    pros: ["Perfect blacks", "120 Hz + VRR", "Dolby Vision & Atmos"],
    cons: ["Risk of burn-in with static content", "Pricey for 55\""],
    score: { value: 9.1, reliability: 8.8, sound: 8.4, comfort: 9.0 },
    updatedOn: "2026-03-19",
    editorialNote: "The gold standard 55-inch OLED — exceptional picture, gaming features, and wide viewing angles.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BVXDPZP3?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "sony-a80l-55",
    category: "55-inch",
    name: "Sony A80L 55\" OLED",
    priceBand: "premium",
    rank: 3,
    priceUSD: 1498,
    rating: 4.7,
    confidence: "Medium",
    reviewCount: 1400,
    editorPick: false,
    bestFor: "Cinephile-grade 55-inch OLED",
    pros: ["Best-in-class upscaling", "Acoustic Surface Audio", "Cognitive Processor XR"],
    cons: ["Expensive", "No ATSC 3.0 tuner"],
    score: { value: 8.9, reliability: 8.9, sound: 9.0, comfort: 8.7 },
    updatedOn: "2026-03-19",
    editorialNote: "Sony's cognitive processor delivers the most accurate 55-inch picture — the cinephile's choice.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BVXF7Q14?tag=ardeevin-22",
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
