export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$50 - $120" },
  { id: "mid", label: "Mid-Range", range: "$121 - $250" },
  { id: "premium", label: "Premium", range: "$251+" }
];

export const onEar = [
  {
    id: "beats-solo-4",
    category: "on-ear",
    name: "Beats Solo 4",
    priceBand: "budget",
    rank: 1,
    priceUSD: 99,
    rating: 4.4,
    confidence: "High",
    reviewCount: 9500,
    editorPick: true,
    bestFor: "Best budget on-ear for portability",
    pros: ["Lightweight and foldable", "Lossless USB-C audio", "Long battery"],
    cons: ["No ANC", "On-ear clamp can fatigue"],
    score: { value: 9.1, reliability: 8.7, sound: 8.5, comfort: 8.0 },
    updatedOn: "2026-03-14",
    editorialNote:
      "A refreshed classic — Beats delivers excellent portable sound without noise cancellation overhead.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CZPL8SYQ?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "jbl-tune-520bt",
    category: "on-ear",
    name: "JBL Tune 520BT",
    priceBand: "budget",
    rank: 2,
    priceUSD: 49,
    rating: 4.3,
    confidence: "High",
    reviewCount: 27000,
    editorPick: false,
    bestFor: "Ultra-affordable wireless",
    pros: ["Very affordable", "57h battery", "Multipoint"],
    cons: ["No ANC", "Plastic build"],
    score: { value: 9.0, reliability: 8.2, sound: 7.9, comfort: 7.8 },
    updatedOn: "2026-03-11",
    editorialNote:
      "At this price the battery life and multipoint support are genuinely impressive.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0C1D5JG23?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "sony-wh-ch520",
    category: "on-ear",
    name: "Sony WH-CH520",
    priceBand: "budget",
    rank: 3,
    priceUSD: 38,
    rating: 4.4,
    confidence: "High",
    reviewCount: 35000,
    editorPick: false,
    bestFor: "Reliable everyday on-ear",
    pros: ["Sony app support", "Lightweight", "Great battery"],
    cons: ["No ANC", "No folding"],
    score: { value: 8.8, reliability: 8.6, sound: 7.8, comfort: 8.2 },
    updatedOn: "2026-03-10",
    editorialNote:
      "Sony's budget on-ear is hard to beat for casual listening with app-based EQ.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BS1QKFHF?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "marshall-major-iv",
    category: "on-ear",
    name: "Marshall Major IV",
    priceBand: "budget",
    rank: 4,
    priceUSD: 99,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 16000,
    editorPick: false,
    bestFor: "Style-conscious listeners",
    pros: ["Iconic design", "80h+ battery", "Wireless charging"],
    cons: ["No ANC", "Heavier than rivals"],
    score: { value: 8.6, reliability: 8.3, sound: 8.2, comfort: 7.7 },
    updatedOn: "2026-03-08",
    editorialNote:
      "The retro Marshall design delivers massive battery and a distinctive warm sound.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B08JCRRB85?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "edifier-wh500",
    category: "on-ear",
    name: "Edifier WH500",
    priceBand: "budget",
    rank: 5,
    priceUSD: 34,
    rating: 4.1,
    confidence: "Medium",
    reviewCount: 5200,
    editorPick: false,
    bestFor: "Entry-level wireless on-ear",
    pros: ["Extremely affordable", "Low latency mode", "Lightweight"],
    cons: ["Average sound quality", "Plastic construction"],
    score: { value: 8.4, reliability: 7.8, sound: 7.5, comfort: 7.9 },
    updatedOn: "2026-03-06",
    editorialNote:
      "A solid starter option for listeners who want wireless convenience at a minimum price.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BW15HJ9G?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "beats-solo-4-wireless",
    category: "on-ear",
    name: "Beats Solo 4 Wireless",
    priceBand: "mid",
    rank: 1,
    priceUSD: 199,
    rating: 4.5,
    confidence: "High",
    reviewCount: 4800,
    editorPick: true,
    bestFor: "Premium portable on-ear",
    pros: ["Spatial audio", "UltraPlush cushions", "Lossless audio"],
    cons: ["No ANC", "On-ear style not for everyone"],
    score: { value: 8.9, reliability: 8.8, sound: 8.8, comfort: 8.3 },
    updatedOn: "2026-03-13",
    editorialNote:
      "The upgraded cushions and spatial audio support make this the mid-range on-ear to beat.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CZPL8SYQ?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "marshall-major-v",
    category: "on-ear",
    name: "Marshall Major V",
    priceBand: "mid",
    rank: 2,
    priceUSD: 149,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 3200,
    editorPick: false,
    bestFor: "Design and endurance",
    pros: ["100h battery", "Qi wireless charging", "Classic design"],
    cons: ["No ANC", "Bass can be boomy"],
    score: { value: 8.7, reliability: 8.5, sound: 8.3, comfort: 7.9 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The Major V pushes battery life to absurd levels while keeping the iconic Marshall look.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CP3F6G53?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "akg-n9-hybrid",
    category: "on-ear",
    name: "AKG N9 Hybrid",
    priceBand: "mid",
    rank: 3,
    priceUSD: 199,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 1800,
    editorPick: false,
    bestFor: "ANC on-ear option",
    pros: ["Hybrid ANC", "Open/closed modes", "Balanced sound"],
    cons: ["Heavier than pure on-ears", "Pricey for on-ear"],
    score: { value: 8.4, reliability: 8.2, sound: 8.6, comfort: 8.0 },
    updatedOn: "2026-03-09",
    editorialNote:
      "A rare on-ear with ANC that also offers an open-back listening mode.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0CHJ8FYHN?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "jabra-move-style",
    category: "on-ear",
    name: "Jabra Move Style+",
    priceBand: "mid",
    rank: 4,
    priceUSD: 129,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 7400,
    editorPick: false,
    bestFor: "Minimalist commuter",
    pros: ["Clean design", "Reliable connection", "Dust resistant"],
    cons: ["No ANC", "Average battery"],
    score: { value: 8.2, reliability: 8.3, sound: 8.1, comfort: 8.0 },
    updatedOn: "2026-03-07",
    editorialNote:
      "A tastefully minimal on-ear that does the basics well without unnecessary features.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B07P5SWJHV?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "jbl-live-460nc",
    category: "on-ear",
    name: "JBL Live 460NC",
    priceBand: "mid",
    rank: 5,
    priceUSD: 129,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 8900,
    editorPick: false,
    bestFor: "ANC on a budget-mid",
    pros: ["Active noise cancellation", "Good bass", "Foldable"],
    cons: ["Clamp can be tight", "Plastic build"],
    score: { value: 8.3, reliability: 8.1, sound: 8.2, comfort: 7.6 },
    updatedOn: "2026-03-05",
    editorialNote:
      "One of the cheapest on-ears with genuine ANC — good for noise-heavy commutes.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B08TC2LQFY?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "bw-px5-s2e",
    category: "on-ear",
    name: "Bowers & Wilkins Px5 S2e",
    priceBand: "premium",
    rank: 1,
    priceUSD: 299,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 1300,
    editorPick: true,
    bestFor: "Premium on-ear sound and ANC",
    pros: ["Excellent sound quality", "Effective ANC", "Premium materials"],
    cons: ["Expensive for on-ear", "Battery is average"],
    score: { value: 8.3, reliability: 8.5, sound: 9.1, comfort: 8.2 },
    updatedOn: "2026-03-12",
    editorialNote:
      "B&W brings audiophile-grade sound to a compact on-ear with capable noise cancellation.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0D9WK53Q8?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "bang-olufsen-hx",
    category: "on-ear",
    name: "Bang & Olufsen Beoplay HX",
    priceBand: "premium",
    rank: 2,
    priceUSD: 449,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 1100,
    editorPick: false,
    bestFor: "Luxury portable audio",
    pros: ["Premium leather and aluminum", "Effective ANC", "35h battery"],
    cons: ["Very expensive", "On-ear pressure for some"],
    score: { value: 7.6, reliability: 8.3, sound: 8.8, comfort: 8.0 },
    updatedOn: "2026-03-08",
    editorialNote:
      "A luxury statement piece with genuinely capable audio and noise cancellation.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09ML8GN4J?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "master-dynamic-mw65",
    category: "on-ear",
    name: "Master & Dynamic MW65",
    priceBand: "premium",
    rank: 3,
    priceUSD: 399,
    rating: 4.2,
    confidence: "Low",
    reviewCount: 700,
    editorPick: false,
    bestFor: "Craftsmanship-focused audio",
    pros: ["Handcrafted materials", "Warm sound", "Compact on-ear"],
    cons: ["Very premium price", "ANC not class-leading"],
    score: { value: 7.3, reliability: 8.0, sound: 8.7, comfort: 7.9 },
    updatedOn: "2026-03-05",
    editorialNote:
      "For buyers who treat headphones as a design accessory with genuinely good sound.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B07V4MPKL1?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "aiaiai-tma-2-move-wireless",
    category: "on-ear",
    name: "AIAIAI TMA-2 Move Wireless",
    priceBand: "premium",
    rank: 4,
    priceUSD: 275,
    rating: 4.1,
    confidence: "Low",
    reviewCount: 500,
    editorPick: false,
    bestFor: "DJ-inspired modular design",
    pros: ["Modular components", "Durable build", "Clean sound"],
    cons: ["No ANC", "Niche appeal"],
    score: { value: 7.5, reliability: 8.1, sound: 8.5, comfort: 7.8 },
    updatedOn: "2026-03-03",
    editorialNote:
      "A unique modular headphone where every part can be replaced — built to last.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0B7Z5XHQ6?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "grado-gw100x",
    category: "on-ear",
    name: "Grado GW100x",
    priceBand: "premium",
    rank: 5,
    priceUSD: 275,
    rating: 4.2,
    confidence: "Low",
    reviewCount: 600,
    editorPick: false,
    bestFor: "Open-back wireless audiophile",
    pros: ["Open-back soundstage", "Natural tuning", "Handmade in Brooklyn"],
    cons: ["No ANC or isolation", "Not for commuting"],
    score: { value: 7.4, reliability: 7.8, sound: 9.0, comfort: 7.5 },
    updatedOn: "2026-03-02",
    editorialNote:
      "The only open-back wireless on-ear — ideal for home listening where isolation isn't needed.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BHJ1VFYX?tag=ardeevin-22",
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
