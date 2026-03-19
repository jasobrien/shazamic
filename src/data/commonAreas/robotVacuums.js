export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$150 - $350" },
  { id: "mid", label: "Mid-Range", range: "$351 - $700" },
  { id: "premium", label: "Premium", range: "$701+" }
];

export const robotVacuums = [
  {
    id: "roborock-q5-pro",
    category: "robot-vacuums",
    name: "Roborock Q5 Pro Robot Vacuum",
    priceBand: "mid",
    rank: 1,
    priceUSD: 299,
    rating: 4.5,
    confidence: "High",
    reviewCount: 12000,
    editorPick: true,
    bestFor: "Best value mapping robot vacuum",
    pros: ["Accurate LiDAR mapping", "Strong suction", "Large dustbin"],
    cons: ["No mopping", "No auto-empty base"],
    score: { value: 9.1, reliability: 8.8, sound: 8.0, comfort: 8.7 },
    updatedOn: "2026-03-19",
    editorialNote: "Roborock's Q5 Pro is the best value for hands-off cleaning with reliable mapping and strong suction.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B0BX4NVM3F?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "irobot-roomba-j7",
    category: "robot-vacuums",
    name: "iRobot Roomba j7+",
    priceBand: "premium",
    rank: 2,
    priceUSD: 599,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 18000,
    editorPick: false,
    bestFor: "Pet owners and obstacle avoidance",
    pros: ["Smart obstacle detection", "Auto-empty base", "Great for pet hair"],
    cons: ["Expensive", "No mopping"],
    score: { value: 8.8, reliability: 8.5, sound: 7.9, comfort: 8.3 },
    updatedOn: "2026-03-19",
    editorialNote: "Roomba j7+ is the best for pet owners and those who want a truly hands-off experience.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/dp/B09N6X2X6L?tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Cleaning power is scored by suction, multi-surface handling, and edge performance.",
  "Navigation covers mapping accuracy, obstacle avoidance, and zone management.",
  "Reliability reflects battery longevity and long-term owner satisfaction.",
  "Value weighs price against cleaning results, smart features, and accessory costs."
];
