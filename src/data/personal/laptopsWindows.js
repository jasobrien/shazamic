export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$400 - $699" },
  { id: "mid", label: "Mid-Range", range: "$700 - $1,199" },
  { id: "premium", label: "Premium", range: "$1,200+" }
];

export const laptopsWindows = [
  // ── BUDGET ──
  {
    id: "asus-vivobook-15",
    category: "windows",
    name: "ASUS VivoBook 15",
    priceBand: "budget",
    rank: 1,
    priceUSD: 449,
    rating: 4.3,
    confidence: "High",
    reviewCount: 18600,
    editorPick: true,
    bestFor: "Best all-rounder Windows laptop under $500",
    pros: ["Lightweight at 1.7kg", "Quiet fan under everyday loads", "Full-size keyboard"],
    cons: ["Display not the brightest", "No Thunderbolt"],
    score: { value: 9.2, reliability: 8.6, sound: 7.8, comfort: 8.8 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The VivoBook 15 covers the essentials — decent display, solid keyboard, all-day battery — better than almost anything else under $500.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=ASUS+VivoBook+15&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "acer-aspire-5",
    category: "windows",
    name: "Acer Aspire 5",
    priceBand: "budget",
    rank: 2,
    priceUSD: 499,
    rating: 4.2,
    confidence: "High",
    reviewCount: 22400,
    editorPick: false,
    bestFor: "Students needing a reliable workhorse",
    pros: ["AMD Ryzen 7 option", "USB-C + HDMI ports", "Good display for price"],
    cons: ["Fan can be audible", "Average build quality"],
    score: { value: 9.0, reliability: 8.4, sound: 7.9, comfort: 8.4 },
    updatedOn: "2026-03-08",
    editorialNote:
      "The Aspire 5 is the definition of a dependable workhorse — not exciting, never lets you down, and covers every base for school or home use.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Acer+Aspire+5&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "hp-pavilion-15",
    category: "windows",
    name: "HP Pavilion 15",
    priceBand: "budget",
    rank: 3,
    priceUSD: 549,
    rating: 4.1,
    confidence: "Medium",
    reviewCount: 14100,
    editorPick: false,
    bestFor: "HP reliability seekers on a budget",
    pros: ["Solid construction", "Good thermal management", "Backlit keyboard"],
    cons: ["Weight is on the higher side", "Middling battery life"],
    score: { value: 8.7, reliability: 8.8, sound: 7.7, comfort: 7.9 },
    updatedOn: "2026-03-05",
    editorialNote:
      "HP's Pavilion line continues to earn its reputation for reliability — a safe choice that won't surprise you in bad ways.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=HP+Pavilion+15&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "lenovo-ideapad-slim-5",
    category: "windows",
    name: "Lenovo IdeaPad Slim 5",
    priceBand: "budget",
    rank: 4,
    priceUSD: 599,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 9800,
    editorPick: false,
    bestFor: "Slim, productive everyday laptop",
    pros: ["14\" slim form factor", "Good keyboard travel", "USB-C charging"],
    cons: ["Display brightness could be higher", "RAM not upgradeable"],
    score: { value: 8.6, reliability: 8.5, sound: 7.9, comfort: 8.7 },
    updatedOn: "2026-03-04",
    editorialNote:
      "Lenovo's slim ergonomics and keyboard quality give the IdeaPad 5 an edge for those who type all day and travel regularly.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Lenovo+IdeaPad+Slim+5&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "surface-laptop-go-3",
    category: "windows",
    name: "Microsoft Surface Laptop Go 3",
    priceBand: "budget",
    rank: 5,
    priceUSD: 699,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 6700,
    editorPick: false,
    bestFor: "Premium-feel budget Windows laptop",
    pros: ["Excellent build quality for price", "Compact 12.4\" design", "Touch display"],
    cons: ["Limited port selection", "Only 8GB RAM baseline"],
    score: { value: 8.3, reliability: 9.0, sound: 7.8, comfort: 9.0 },
    updatedOn: "2026-03-03",
    editorialNote:
      "The Surface Laptop Go 3 offers an unusually premium feel and reliable Windows experience at the top of the budget tier.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Microsoft+Surface+Laptop+Go+3&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── MID-RANGE ──
  {
    id: "dell-xps-13",
    category: "windows",
    name: "Dell XPS 13",
    priceBand: "mid",
    rank: 1,
    priceUSD: 999,
    rating: 4.5,
    confidence: "High",
    reviewCount: 17200,
    editorPick: true,
    bestFor: "Best compact premium Windows laptop",
    pros: ["Stunning 13\" OLED option", "Thin and light", "Excellent build quality"],
    cons: ["Only 2 USB-C ports", "Gets warm under sustained load"],
    score: { value: 8.8, reliability: 9.0, sound: 8.9, comfort: 9.3 },
    updatedOn: "2026-03-13",
    editorialNote:
      "The XPS 13 remains a gold standard for compact Windows laptops — beautiful display, great keyboard, and a build that feels premium every day.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Dell+XPS+13&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "asus-zenbook-14-oled",
    category: "windows",
    name: "ASUS ZenBook 14 OLED",
    priceBand: "mid",
    rank: 2,
    priceUSD: 849,
    rating: 4.4,
    confidence: "High",
    reviewCount: 9400,
    editorPick: false,
    bestFor: "Best OLED display at mid-range price",
    pros: ["Vivid 2.8K OLED display", "All-day battery", "Lightweight 1.39kg"],
    cons: ["Webcam only 1080p", "No dedicated GPU"],
    score: { value: 9.1, reliability: 8.7, sound: 9.1, comfort: 9.2 },
    updatedOn: "2026-03-11",
    editorialNote:
      "The ZenBook 14 punches above its mid-range price with a genuinely stunning OLED screen at a weight most competitors can't match.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=ASUS+ZenBook+14+OLED&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "hp-spectre-x360-14",
    category: "windows",
    name: "HP Spectre x360 14",
    priceBand: "mid",
    rank: 3,
    priceUSD: 1099,
    rating: 4.5,
    confidence: "High",
    reviewCount: 8100,
    editorPick: false,
    bestFor: "2-in-1 tablet-laptop hybrid with pen support",
    pros: ["360° hinge for tablet use", "OLED display", "Thunderbolt 4 ports"],
    cons: ["Heavier than clamshells", "Battery less impressive in tablet mode"],
    score: { value: 8.5, reliability: 9.1, sound: 9.0, comfort: 8.8 },
    updatedOn: "2026-03-09",
    editorialNote:
      "The Spectre x360 14 excels as a versatile workhorse — especially for creative professionals who sketch, annotate, and present regularly.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=HP+Spectre+x360+14&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "lenovo-thinkpad-x1-carbon",
    category: "windows",
    name: "Lenovo ThinkPad X1 Carbon Gen 12",
    priceBand: "mid",
    rank: 4,
    priceUSD: 1199,
    rating: 4.6,
    confidence: "High",
    reviewCount: 6300,
    editorPick: false,
    bestFor: "Business professionals needing rock-solid reliability",
    pros: ["MIL-SPEC durability rated", "Outstanding keyboard", "Enterprise build quality"],
    cons: ["Display not as bright as OLED rivals", "Business aesthetic isn't for everyone"],
    score: { value: 8.2, reliability: 9.5, sound: 8.8, comfort: 9.4 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The ThinkPad X1 Carbon's build quality and keyboard set the standard for business laptops — if durability and typing feel matter most, this is your laptop.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Lenovo+ThinkPad+X1+Carbon+Gen+12&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "surface-pro-11",
    category: "windows",
    name: "Microsoft Surface Pro 11",
    priceBand: "mid",
    rank: 5,
    priceUSD: 1099,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 5200,
    editorPick: false,
    bestFor: "Detachable tablet-laptop for Microsoft ecosystem users",
    pros: ["Excellent OLED display", "Snapdragon X Elite ARM performance", "True detachable tablet"],
    cons: ["Keyboard cover sold separately", "Fan-less throttles under heavy load"],
    score: { value: 8.0, reliability: 8.8, sound: 8.9, comfort: 8.6 },
    updatedOn: "2026-03-07",
    editorialNote:
      "The Surface Pro 11 is uniquely flexible for tablet-first users — just budget for the keyboard cover and manage expectations around sustained performance.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Microsoft+Surface+Pro+11&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── PREMIUM ──
  {
    id: "dell-xps-15",
    category: "windows",
    name: "Dell XPS 15",
    priceBand: "premium",
    rank: 1,
    priceUSD: 1449,
    rating: 4.6,
    confidence: "High",
    reviewCount: 11300,
    editorPick: true,
    bestFor: "Best large-screen creator Windows laptop",
    pros: ["3.5K OLED display", "NVIDIA RTX GPU option", "Thunderbolt 4 ports"],
    cons: ["Fan noise under load", "Gets warm at full throttle"],
    score: { value: 8.7, reliability: 9.0, sound: 9.4, comfort: 8.8 },
    updatedOn: "2026-03-14",
    editorialNote:
      "For creators who need a big, beautiful Windows canvas with GPU power for video and photo editing, the XPS 15 remains the benchmark.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Dell+XPS+15&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "hp-spectre-x360-16",
    category: "windows",
    name: "HP Spectre x360 16",
    priceBand: "premium",
    rank: 2,
    priceUSD: 1549,
    rating: 4.5,
    confidence: "High",
    reviewCount: 5100,
    editorPick: false,
    bestFor: "Large 2-in-1 powerhouse with GPU and pen",
    pros: ["16\" OLED 2-in-1", "Arc GPU for light creative work", "Excellent audio"],
    cons: ["Heavy at 2.2kg", "Battery shorter in performance mode"],
    score: { value: 8.4, reliability: 9.0, sound: 9.2, comfort: 8.5 },
    updatedOn: "2026-03-12",
    editorialNote:
      "The Spectre x360 16 is ideal for creative professionals who want a large canvas in both laptop and tablet modes without sacrificing build quality.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=HP+Spectre+x360+16&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "lenovo-thinkpad-x1-extreme",
    category: "windows",
    name: "Lenovo ThinkPad X1 Extreme Gen 5",
    priceBand: "premium",
    rank: 3,
    priceUSD: 1799,
    rating: 4.5,
    confidence: "Medium",
    reviewCount: 3800,
    editorPick: false,
    bestFor: "Enterprise power with discrete GPU",
    pros: ["16\" display with RTX 3060 Ti option", "ThinkPad durability", "Excellent keyboard"],
    cons: ["Fan can be loud under GPU load", "Heavy for travel"],
    score: { value: 8.1, reliability: 9.4, sound: 9.1, comfort: 8.3 },
    updatedOn: "2026-03-10",
    editorialNote:
      "Where other premium laptops prioritize thinness, the X1 Extreme prioritizes power and longevity — built for professionals who can't afford downtime.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Lenovo+ThinkPad+X1+Extreme+Gen+5&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "razer-blade-15",
    category: "windows",
    name: "Razer Blade 15",
    priceBand: "premium",
    rank: 4,
    priceUSD: 2299,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 7400,
    editorPick: false,
    bestFor: "High-performance gaming and creative work",
    pros: ["RTX 4070 GPU", "240Hz QHD display", "Slim gaming chassis"],
    cons: ["Most expensive pick", "Battery drains fast under gaming load"],
    score: { value: 7.8, reliability: 8.7, sound: 9.6, comfort: 8.2 },
    updatedOn: "2026-03-09",
    editorialNote:
      "The Razer Blade 15 is premium-priced but delivers genuine RTX performance in a surprisingly slim chassis — better for gaming and video than most rivals.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Razer+Blade+15&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "surface-laptop-studio-2",
    category: "windows",
    name: "Microsoft Surface Laptop Studio 2",
    priceBand: "premium",
    rank: 5,
    priceUSD: 1999,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 4100,
    editorPick: false,
    bestFor: "Unique pull-forward hinge for creative pros",
    pros: ["Innovative hinge for stylus work", "RTX 4060 GPU option", "Excellent display"],
    cons: ["Very expensive for the specs", "Thick and heavy for a laptop"],
    score: { value: 7.6, reliability: 8.9, sound: 9.0, comfort: 8.7 },
    updatedOn: "2026-03-06",
    editorialNote:
      "The Studio 2's pull-forward hinge is a genuinely useful creative tool. Worth the premium if your work revolves around pen and touch input.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Microsoft+Surface+Laptop+Studio+2&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Performance scores multi-core CPU speed, GPU capability, thermal management, and real-world app responsiveness.",
  "Portability covers weight, thickness, battery life on a charge, and charging convenience.",
  "Reliability reflects build quality signals, long-term owner satisfaction, and repair-accessibility.",
  "Value weighs price against display quality, processing power, port selection, and expected lifespan."
];
