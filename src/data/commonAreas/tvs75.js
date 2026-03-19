export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$700 – $1,200" },
  { id: "mid", label: "Mid-Range", range: "$1,201 – $2,200" },
  { id: "premium", label: "Premium", range: "$2,201+" }
];

export const tvs75 = [
  // ── Budget ──
  {
    id: "tcl-q6-75",
    category: "75-inch-plus",
    name: "TCL Q6 QLED 75\"",
    priceBand: "budget",
    rank: 1,
    priceUSD: 698,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 1800,
    editorPick: true,
    bestFor: "Cheapest 75-inch QLED available",
    pros: ["QLED color at 75\"", "Google TV", "Under $700"],
    cons: ["Average black levels", "Limited local dimming"],
    score: { value: 9.1, reliability: 8.0, sound: 7.6, comfort: 7.8 },
    updatedOn: "2026-03-19",
    editorialNote: "The most affordable 75-inch QLED — massive screen without a massive price tag.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C6J6KGHM?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "hisense-u6k-75",
    category: "75-inch-plus",
    name: "Hisense U6K 75\" Mini-LED",
    priceBand: "budget",
    rank: 2,
    priceUSD: 798,
    rating: 4.3,
    confidence: "High",
    reviewCount: 2200,
    editorPick: false,
    bestFor: "Budget 75-inch with Mini-LED brightness",
    pros: ["Mini-LED at 75\"", "Dolby Vision", "Game Mode Pro"],
    cons: ["Limited dimming zones", "Basic sound"],
    score: { value: 8.9, reliability: 8.0, sound: 7.4, comfort: 7.8 },
    updatedOn: "2026-03-19",
    editorialNote: "Mini-LED brightness in a 75-inch panel for under $800 — great for bright rooms.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C73HTXB2?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "samsung-cu8000-75",
    category: "75-inch-plus",
    name: "Samsung CU8000 75\" Crystal UHD",
    priceBand: "budget",
    rank: 3,
    priceUSD: 748,
    rating: 4.2,
    confidence: "High",
    reviewCount: 3800,
    editorPick: false,
    bestFor: "Samsung 75-inch on a budget",
    pros: ["Tizen OS", "Clean design", "AirPlay support"],
    cons: ["Edge-lit only", "No Dolby Vision"],
    score: { value: 8.5, reliability: 8.3, sound: 7.2, comfort: 7.9 },
    updatedOn: "2026-03-19",
    editorialNote: "Samsung's most affordable 75-inch — decent picture with a familiar smart OS.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BTMK1VML?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  // ── Mid-Range ──
  {
    id: "sony-x90l-75",
    category: "75-inch-plus",
    name: "Sony X90L 75\" Full Array LED",
    priceBand: "mid",
    rank: 1,
    priceUSD: 1498,
    rating: 4.6,
    confidence: "High",
    reviewCount: 2100,
    editorPick: true,
    bestFor: "Best 75-inch for movies and sports",
    pros: ["Full Array Local Dimming", "Dolby Vision & Atmos", "Great motion handling"],
    cons: ["Heavy at 75\"", "Limited viewing angles"],
    score: { value: 9.0, reliability: 9.0, sound: 8.3, comfort: 8.4 },
    updatedOn: "2026-03-19",
    editorialNote: "Sony's 75-inch delivers outstanding motion clarity — a top pick for sports and film.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BZF2YMRY?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "samsung-qn85b-75",
    category: "75-inch-plus",
    name: "Samsung QN85B 75\" Neo QLED",
    priceBand: "mid",
    rank: 2,
    priceUSD: 1598,
    rating: 4.5,
    confidence: "High",
    reviewCount: 2800,
    editorPick: false,
    bestFor: "Samsung Mini-LED at a reasonable 75-inch price",
    pros: ["Mini-LED backlighting", "Wide viewing angles", "4 HDMI 2.1 ports"],
    cons: ["Previous-gen processor", "No Dolby Vision"],
    score: { value: 8.7, reliability: 8.6, sound: 8.0, comfort: 8.3 },
    updatedOn: "2026-03-19",
    editorialNote: "Samsung's previous-gen Neo QLED offers Mini-LED at a more accessible 75-inch price.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09TRSFJ5F?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "tcl-qm8-75",
    category: "75-inch-plus",
    name: "TCL QM8 75\" Mini-LED QLED",
    priceBand: "mid",
    rank: 3,
    priceUSD: 1198,
    rating: 4.5,
    confidence: "Medium",
    reviewCount: 1500,
    editorPick: false,
    bestFor: "Brightest 75-inch for the price",
    pros: ["Extremely bright panel", "2000+ dimming zones", "Google TV"],
    cons: ["Blooming in dark scenes", "Thick bezel"],
    score: { value: 9.0, reliability: 8.2, sound: 7.8, comfort: 8.0 },
    updatedOn: "2026-03-19",
    editorialNote: "TCL's brightest 75-inch Mini-LED panel — outstanding HDR punch for the money.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C1J5FKJK?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  // ── Premium ──
  {
    id: "samsung-qn90c-75",
    category: "75-inch-plus",
    name: "Samsung QN90C 75\" Neo QLED",
    priceBand: "premium",
    rank: 1,
    priceUSD: 2498,
    rating: 4.7,
    confidence: "High",
    reviewCount: 2400,
    editorPick: true,
    bestFor: "Best 75-inch for bright rooms",
    pros: ["Anti-Reflection coating", "Mini-LED", "Neural Quantum Processor"],
    cons: ["No Dolby Vision", "Very expensive"],
    score: { value: 9.0, reliability: 9.0, sound: 8.5, comfort: 8.8 },
    updatedOn: "2026-03-19",
    editorialNote: "Samsung's flagship 75-inch — Mini-LED and anti-glare make it perfect for sunny rooms.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BLJCJGPY?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "lg-c3-oled-77",
    category: "75-inch-plus",
    name: "LG C3 77\" OLED evo",
    priceBand: "premium",
    rank: 2,
    priceUSD: 2497,
    rating: 4.8,
    confidence: "High",
    reviewCount: 3000,
    editorPick: false,
    bestFor: "Largest OLED for dedicated home theater",
    pros: ["Perfect blacks at 77\"", "120 Hz + VRR", "Dolby Vision IQ"],
    cons: ["Very expensive", "Risk of burn-in"],
    score: { value: 8.8, reliability: 8.7, sound: 8.4, comfort: 9.0 },
    updatedOn: "2026-03-19",
    editorialNote: "The biggest OLED in LG's C-series — breathtaking contrast for a true home theater experience.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BVXK9N6X?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "sony-x95l-85",
    category: "75-inch-plus",
    name: "Sony X95L 85\" Mini-LED",
    priceBand: "premium",
    rank: 3,
    priceUSD: 3498,
    rating: 4.7,
    confidence: "Medium",
    reviewCount: 900,
    editorPick: false,
    bestFor: "Go-big home theater without OLED",
    pros: ["Massive 85\" screen", "XR Backlight Master Drive", "Cognitive Processor XR"],
    cons: ["Very heavy", "Very expensive"],
    score: { value: 8.5, reliability: 8.8, sound: 8.8, comfort: 8.5 },
    updatedOn: "2026-03-19",
    editorialNote: "Sony's 85-inch flagship Mini-LED — if you want the biggest screen with the best processing.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BVXG35RN?tag=ardeevin-22",
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
