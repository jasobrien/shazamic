export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$30 - $80" },
  { id: "mid", label: "Mid-Range", range: "$81 - $180" },
  { id: "premium", label: "Premium", range: "$181+" }
];

export const smartHome = [
  {
    id: "echo-dot-5th-gen",
    category: "smart-home",
    name: "Amazon Echo Dot (5th Gen)",
    priceBand: "budget",
    rank: 1,
    priceUSD: 49,
    rating: 4.6,
    confidence: "High",
    reviewCount: 95000,
    editorPick: true,
    bestFor: "Affordable Alexa smart speaker",
    pros: ["Compact size", "Good sound for price", "Reliable Alexa"],
    cons: ["No Zigbee hub", "Limited bass"],
    score: { value: 9.0, reliability: 9.2, sound: 7.8, comfort: 8.5 },
    updatedOn: "2026-03-19",
    editorialNote: "The best entry-level smart speaker for Alexa routines and voice control.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09B8V8YBM?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "google-nest-hub-2nd-gen",
    category: "smart-home",
    name: "Google Nest Hub (2nd Gen)",
    priceBand: "mid",
    rank: 2,
    priceUSD: 99,
    rating: 4.5,
    confidence: "Medium",
    reviewCount: 21000,
    editorPick: false,
    bestFor: "Smart display for Google Home",
    pros: ["Sleep tracking", "Photo frame", "No camera for privacy"],
    cons: ["No Zigbee", "Audio is basic"],
    score: { value: 8.5, reliability: 8.7, sound: 7.5, comfort: 8.2 },
    updatedOn: "2026-03-19",
    editorialNote: "Best for Google ecosystem users who want a display for routines and info at a glance.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B08KJN3333?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Features covers ecosystem breadth, voice assistant quality, and automation capabilities.",
  "Reliability reflects connectivity stability and firmware update quality.",
  "Ease of use includes setup simplicity, app quality, and daily interaction.",
  "Value weighs price against features, build quality, and ecosystem lock-in."
];
