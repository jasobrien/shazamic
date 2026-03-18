export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$50 - $120" },
  { id: "mid", label: "Mid-Range", range: "$121 - $260" },
  { id: "premium", label: "Premium", range: "$261+" }
];

export const overEar = [
  {
    id: "sndcore-space-one",
    category: "over-ear",
    name: "Soundcore Space One",
    priceBand: "budget",
    rank: 1,
    priceUSD: 99,
    rating: 4.4,
    confidence: "High",
    reviewCount: 9000,
    editorPick: true,
    bestFor: "Best value ANC under $100",
    pros: ["Strong ANC for price", "Comfy fit", "Long battery life"],
    cons: ["Mids can sound soft", "Plastic-heavy build"],
    score: {
      value: 9.2,
      reliability: 8.7,
      sound: 8.4,
      comfort: 8.8
    },
    updatedOn: "2026-03-12",
    editorialNote:
      "Our favorite budget pick for commuters who need quiet and all-day wear.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C6FQG5Z3?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "jbl-live-660nc",
    category: "over-ear",
    name: "JBL Live 660NC",
    priceBand: "budget",
    rank: 2,
    priceUSD: 109,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 6500,
    editorPick: false,
    bestFor: "Bass lovers on a budget",
    pros: ["Punchy low-end", "Reliable wireless", "Good call quality"],
    cons: ["ANC is moderate", "Bulkier than rivals"],
    score: {
      value: 8.9,
      reliability: 8.4,
      sound: 8.5,
      comfort: 8.1
    },
    updatedOn: "2026-03-10",
    editorialNote:
      "A dependable pick when energetic sound is more important than total noise isolation.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B08WM3LMJF?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "1more-sonoflow",
    category: "over-ear",
    name: "1More SonoFlow",
    priceBand: "budget",
    rank: 3,
    priceUSD: 79,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 4100,
    editorPick: false,
    bestFor: "Travel on a strict budget",
    pros: ["Excellent battery", "Balanced sound", "Compact folding"],
    cons: ["Controls feel basic", "Average mic quality"],
    score: {
      value: 8.8,
      reliability: 8.1,
      sound: 8.3,
      comfort: 8.0
    },
    updatedOn: "2026-03-08",
    editorialNote:
      "A practical and surprisingly balanced option for flights and daily commuting.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0B87MQG2N?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "sony-ch720n",
    category: "over-ear",
    name: "Sony CH720N",
    priceBand: "budget",
    rank: 4,
    priceUSD: 118,
    rating: 4.4,
    confidence: "High",
    reviewCount: 12000,
    editorPick: false,
    bestFor: "Lightweight everyday use",
    pros: ["Very light frame", "Dependable ANC", "Sony app EQ"],
    cons: ["No carrying case", "Build feels minimal"],
    score: {
      value: 8.7,
      reliability: 8.8,
      sound: 8.2,
      comfort: 8.9
    },
    updatedOn: "2026-03-13",
    editorialNote:
      "High comfort and stable wireless performance make this a safe all-rounder.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BS1QCFHX?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "edifier-wh950nb",
    category: "over-ear",
    name: "Edifier WH950NB",
    priceBand: "budget",
    rank: 5,
    priceUSD: 119,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 2500,
    editorPick: false,
    bestFor: "Rich feature set for less",
    pros: ["Hi-Res codec support", "Solid ANC", "Case included"],
    cons: ["Touch controls can misfire", "Heavier than top pick"],
    score: {
      value: 8.6,
      reliability: 8.0,
      sound: 8.4,
      comfort: 7.9
    },
    updatedOn: "2026-03-11",
    editorialNote:
      "Feature-rich choice for listeners who care about codecs and included accessories.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BBM6P6N1?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "sony-wh1000xm4",
    category: "over-ear",
    name: "Sony WH-1000XM4",
    priceBand: "mid",
    rank: 1,
    priceUSD: 248,
    rating: 4.6,
    confidence: "High",
    reviewCount: 72000,
    editorPick: true,
    bestFor: "Most dependable travel companion",
    pros: ["Class-leading ANC", "Warm, refined sound", "Great app controls"],
    cons: ["Not latest model", "Warm signature may need EQ"],
    score: {
      value: 9.4,
      reliability: 9.2,
      sound: 9.1,
      comfort: 8.9
    },
    updatedOn: "2026-03-14",
    editorialNote:
      "Still one of the safest premium-adjacent buys thanks to mature firmware and consistency.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0863TXGM3?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "beats-studio-pro",
    category: "over-ear",
    name: "Beats Studio Pro",
    priceBand: "mid",
    rank: 2,
    priceUSD: 249,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 6200,
    editorPick: false,
    bestFor: "Apple + Android flexibility",
    pros: ["USB-C lossless audio", "Strong battery", "Multipoint support"],
    cons: ["ANC below Sony/Bose", "Fit can be tight"],
    score: {
      value: 8.9,
      reliability: 8.5,
      sound: 8.6,
      comfort: 7.8
    },
    updatedOn: "2026-03-09",
    editorialNote:
      "A strong cross-platform choice for users who swap between iPhone and Windows.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C8Z4SV1S?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "bose-qc",
    category: "over-ear",
    name: "Bose QuietComfort",
    priceBand: "mid",
    rank: 3,
    priceUSD: 229,
    rating: 4.5,
    confidence: "High",
    reviewCount: 14000,
    editorPick: false,
    bestFor: "Long listening sessions",
    pros: ["Top-tier comfort", "Excellent ANC", "Simple controls"],
    cons: ["Minimal codec support", "Less detailed highs"],
    score: {
      value: 8.8,
      reliability: 9.0,
      sound: 8.3,
      comfort: 9.4
    },
    updatedOn: "2026-03-07",
    editorialNote:
      "If comfort is non-negotiable, this model remains one of the safest recommendations.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CCZ26B5V?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "sennheiser-momentum-4",
    category: "over-ear",
    name: "Sennheiser Momentum 4",
    priceBand: "mid",
    rank: 4,
    priceUSD: 259,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 10500,
    editorPick: false,
    bestFor: "Audio detail and battery life",
    pros: ["Detailed sound", "Massive battery", "Multipoint"],
    cons: ["Case is bulky", "Touch controls take practice"],
    score: {
      value: 8.7,
      reliability: 8.4,
      sound: 9.0,
      comfort: 8.2
    },
    updatedOn: "2026-03-13",
    editorialNote:
      "Excellent for listeners who prioritize fidelity but still want practical wireless features.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BJS17PCG?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "technics-a800",
    category: "over-ear",
    name: "Technics EAH-A800",
    priceBand: "mid",
    rank: 5,
    priceUSD: 229,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 1900,
    editorPick: false,
    bestFor: "Balanced tuning out of box",
    pros: ["Natural sound profile", "Good call quality", "Long battery"],
    cons: ["ANC is solid not best", "Limited mainstream support"],
    score: {
      value: 8.5,
      reliability: 8.3,
      sound: 8.7,
      comfort: 8.1
    },
    updatedOn: "2026-03-06",
    editorialNote:
      "A stable recommendation for buyers who dislike heavily boosted consumer tuning.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09R1M7Q3L?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "sony-wh1000xm5",
    category: "over-ear",
    name: "Sony WH-1000XM5",
    priceBand: "premium",
    rank: 1,
    priceUSD: 328,
    rating: 4.7,
    confidence: "High",
    reviewCount: 36000,
    editorPick: true,
    bestFor: "Best overall premium pick",
    pros: ["Outstanding ANC", "Clear calls", "Low listening fatigue"],
    cons: ["Does not fold flat", "Premium price"],
    score: {
      value: 9.1,
      reliability: 9.4,
      sound: 9.0,
      comfort: 9.0
    },
    updatedOn: "2026-03-15",
    editorialNote:
      "The most consistent premium recommendation across office, commute, and travel scenarios.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09XSDMT4F?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "airpods-max",
    category: "over-ear",
    name: "Apple AirPods Max",
    priceBand: "premium",
    rank: 2,
    priceUSD: 499,
    rating: 4.5,
    confidence: "Medium",
    reviewCount: 21000,
    editorPick: false,
    bestFor: "Apple ecosystem users",
    pros: ["Best-in-class transparency", "Premium build", "Spatial audio"],
    cons: ["Very expensive", "Heavy for long sessions"],
    score: {
      value: 7.9,
      reliability: 8.8,
      sound: 8.9,
      comfort: 7.5
    },
    updatedOn: "2026-03-10",
    editorialNote:
      "Exceptional integration and transparency mode, but only worth it for deep Apple users.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B08PZHYWJS?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "bowers-px8",
    category: "over-ear",
    name: "Bowers & Wilkins Px8",
    priceBand: "premium",
    rank: 3,
    priceUSD: 649,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 1300,
    editorPick: false,
    bestFor: "Luxury build and sound",
    pros: ["Premium materials", "Rich soundstage", "Comfortable pads"],
    cons: ["High price", "ANC lags Sony/Bose"],
    score: {
      value: 7.5,
      reliability: 8.2,
      sound: 9.1,
      comfort: 8.5
    },
    updatedOn: "2026-03-05",
    editorialNote:
      "A boutique premium pick focused on craft and musicality over pure ANC value.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BGQ5K1FG?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "focal-bathys",
    category: "over-ear",
    name: "Focal Bathys",
    priceBand: "premium",
    rank: 4,
    priceUSD: 699,
    rating: 4.5,
    confidence: "Medium",
    reviewCount: 900,
    editorPick: false,
    bestFor: "Audiophile wireless",
    pros: ["Detailed audio", "DAC mode", "Premium comfort"],
    cons: ["Very expensive", "Bulky travel case"],
    score: {
      value: 7.3,
      reliability: 8.1,
      sound: 9.3,
      comfort: 8.7
    },
    updatedOn: "2026-03-04",
    editorialNote:
      "A niche premium option for buyers prioritizing top-end sound quality.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BFXPM2Y5?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "bang-olufsen-h95",
    category: "over-ear",
    name: "Bang & Olufsen Beoplay H95",
    priceBand: "premium",
    rank: 5,
    priceUSD: 799,
    rating: 4.4,
    confidence: "Low",
    reviewCount: 700,
    editorPick: false,
    bestFor: "Design-first buyers",
    pros: ["Flagship materials", "Very refined tuning", "Great carrying case"],
    cons: ["Ultra-premium pricing", "Value score is lower"],
    score: {
      value: 6.8,
      reliability: 8.0,
      sound: 9.0,
      comfort: 8.6
    },
    updatedOn: "2026-03-03",
    editorialNote:
      "A prestige pick where craftsmanship is part of the product value proposition.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B08HTYL5Q6?tag=ardeevin-22",
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