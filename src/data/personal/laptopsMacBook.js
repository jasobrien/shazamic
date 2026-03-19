export const PRICE_BANDS = [
  { id: "air", label: "MacBook Air", range: "$999 - $1,299" },
  { id: "pro14", label: "MacBook Pro 14\"", range: "$1,300 - $2,499" },
  { id: "pro16", label: "MacBook Pro 16\"", range: "$2,500+" }
];

export const laptopsMacBook = [
  // ── MACBOOK AIR ──
  {
    id: "macbook-air-13-m3",
    category: "macbook",
    name: "MacBook Air 13\" (M3)",
    priceBand: "air",
    rank: 1,
    priceUSD: 1099,
    rating: 4.8,
    confidence: "High",
    reviewCount: 29400,
    editorPick: true,
    bestFor: "Best everyday laptop for most people, full stop",
    pros: ["Fanless — completely silent", "All-day battery", "Feathery 1.24kg weight"],
    cons: ["No fan means throttle under sustained load", "No ProMotion display"],
    score: { value: 9.3, reliability: 9.5, sound: 8.8, comfort: 9.7 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The M3 Air is the most balanced laptop available — silent, fast enough for everything but sustained video renders, and astonishingly light.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Air+13+inch+M3&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "macbook-air-13-m3-16gb",
    category: "macbook",
    name: "MacBook Air 13\" (M3, 16GB)",
    priceBand: "air",
    rank: 2,
    priceUSD: 1299,
    rating: 4.8,
    confidence: "High",
    reviewCount: 18200,
    editorPick: false,
    bestFor: "Everyday Air users who future-proof with 16GB RAM",
    pros: ["16GB RAM handles heavier multitasking", "All M3 Air strengths", "Better longevity"],
    cons: ["Same fanless thermal limits as base Air", "No ProMotion"],
    score: { value: 9.0, reliability: 9.5, sound: 8.8, comfort: 9.7 },
    updatedOn: "2026-03-13",
    editorialNote:
      "The 16GB Air is worth the upgrade for anyone running virtual machines, large Xcode projects, or heavy browser tabs — don't skip RAM if you keep laptops 4+ years.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Air+13+inch+M3+16GB&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "macbook-air-15-m3",
    category: "macbook",
    name: "MacBook Air 15\" (M3)",
    priceBand: "air",
    rank: 3,
    priceUSD: 1299,
    rating: 4.7,
    confidence: "High",
    reviewCount: 14800,
    editorPick: false,
    bestFor: "Large-screen Air without Pro bulk",
    pros: ["15.3\" Liquid Retina display", "Still fanless and silent", "Six-speaker sound system"],
    cons: ["Only 8GB RAM base config", "Heavier than 13\" at 1.51kg"],
    score: { value: 8.9, reliability: 9.4, sound: 9.2, comfort: 9.3 },
    updatedOn: "2026-03-11",
    editorialNote:
      "If you want a large canvas without the Pro's size and weight, the 15\" Air hits a sweet spot — especially for media consumption and spreadsheet work.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Air+15+inch+M3&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "macbook-air-13-m2",
    category: "macbook",
    name: "MacBook Air 13\" (M2)",
    priceBand: "air",
    rank: 4,
    priceUSD: 999,
    rating: 4.7,
    confidence: "High",
    reviewCount: 41600,
    editorPick: false,
    bestFor: "Best-value MacBook at deepest discount",
    pros: ["$100 less than M3", "Proven M2 performance still very strong", "Same great form factor"],
    cons: ["Wi-Fi 6 not 6E", "One generation behind on chip"],
    score: { value: 9.4, reliability: 9.4, sound: 8.6, comfort: 9.6 },
    updatedOn: "2026-03-09",
    editorialNote:
      "If you find the M2 Air for $999 or under, buy it without hesitation — the performance gap vs M3 is minimal for everyday tasks.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Air+13+inch+M2&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "macbook-air-15-m3-16gb",
    category: "macbook",
    name: "MacBook Air 15\" (M3, 16GB)",
    priceBand: "air",
    rank: 5,
    priceUSD: 1499,
    rating: 4.7,
    confidence: "Medium",
    reviewCount: 7300,
    editorPick: false,
    bestFor: "Large-screen Air with future-proofed memory",
    pros: ["15\" screen with 16GB RAM", "Whisper-quiet operation", "Apple ecosystem integration"],
    cons: ["Approaching Pro 14\" value territory", "Fanless ceiling still applies"],
    score: { value: 8.5, reliability: 9.4, sound: 9.2, comfort: 9.3 },
    updatedOn: "2026-03-08",
    editorialNote:
      "At $1,499, the 15\" M3 Air with 16GB starts bumping against Pro 14\" territory — consider the Pro 14\" base if sustained performance matters.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Air+15+inch+M3+16GB&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── MACBOOK PRO 14\" ──
  {
    id: "macbook-pro-14-m4",
    category: "macbook",
    name: "MacBook Pro 14\" (M4)",
    priceBand: "pro14",
    rank: 1,
    priceUSD: 1599,
    rating: 4.9,
    confidence: "High",
    reviewCount: 16800,
    editorPick: true,
    bestFor: "Best compact pro laptop available — any platform",
    pros: ["M4 chip with active cooling", "Stunning Liquid Retina XDR display", "ProMotion 120Hz"],
    cons: ["16GB base RAM can feel limiting for Pro tasks", "Higher cost than Air"],
    score: { value: 9.0, reliability: 9.6, sound: 9.5, comfort: 9.4 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The M4 Pro 14\" is where the Air's thermal compromise ends — active cooling means sustained performance, making it the right call for video, code, and heavy creative work.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Pro+14+inch+M4&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "macbook-pro-14-m4-pro",
    category: "macbook",
    name: "MacBook Pro 14\" (M4 Pro)",
    priceBand: "pro14",
    rank: 2,
    priceUSD: 1999,
    rating: 4.9,
    confidence: "High",
    reviewCount: 11200,
    editorPick: false,
    bestFor: "Serious creators who demand peak sustained performance",
    pros: ["M4 Pro chip handles sustained 4K+ workflows", "24GB unified memory", "Best battery in a 14\" laptop"],
    cons: ["Expensive", "Diminishing returns vs base M4 for office work"],
    score: { value: 8.7, reliability: 9.7, sound: 9.8, comfort: 9.4 },
    updatedOn: "2026-03-13",
    editorialNote:
      "If Premiere, DaVinci, Logic, or Xcode are your main tools for hours daily, the M4 Pro's chip ceiling pays for itself in export speed and thermal headroom.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Pro+14+inch+M4+Pro&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "macbook-pro-14-m4-pro-24gb",
    category: "macbook",
    name: "MacBook Pro 14\" (M4 Pro, 24GB/512GB)",
    priceBand: "pro14",
    rank: 3,
    priceUSD: 2199,
    rating: 4.9,
    confidence: "Medium",
    reviewCount: 5600,
    editorPick: false,
    bestFor: "Pro workflows needing 24GB unified memory",
    pros: ["24GB RAM removes bottlenecks at large canvases", "Best single-core speed in class", "MagSafe + Thunderbolt 5"],
    cons: ["Price premium over 512GB M4 Pro", "Diminishing returns for office tasks"],
    score: { value: 8.4, reliability: 9.7, sound: 9.8, comfort: 9.4 },
    updatedOn: "2026-03-11",
    editorialNote:
      "The 24GB M4 Pro configuration resolves memory pressure for machine learning workflows and huge Photoshop documents — buy it if you hit RAM limits regularly.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Pro+14+inch+M4+Pro+24GB&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "macbook-pro-14-m3-pro",
    category: "macbook",
    name: "MacBook Pro 14\" (M3 Pro)",
    priceBand: "pro14",
    rank: 4,
    priceUSD: 1699,
    rating: 4.8,
    confidence: "High",
    reviewCount: 22100,
    editorPick: false,
    bestFor: "Previous-gen Pro at a meaningful discount",
    pros: ["M3 Pro still very fast for most pro tasks", "Discounted heavily vs M4 Pro", "Proven reliability record"],
    cons: ["One generation behind", "No Thunderbolt 5"],
    score: { value: 9.1, reliability: 9.5, sound: 9.6, comfort: 9.3 },
    updatedOn: "2026-03-09",
    editorialNote:
      "If M4 Pro pricing stretches the budget, the M3 Pro 14\" at a discount is a smart buy — day-to-day performance difference is minimal for most workflows.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Pro+14+inch+M3+Pro&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "macbook-pro-14-m4-max",
    category: "macbook",
    name: "MacBook Pro 14\" (M4 Max)",
    priceBand: "pro14",
    rank: 5,
    priceUSD: 2499,
    rating: 4.9,
    confidence: "Medium",
    reviewCount: 3800,
    editorPick: false,
    bestFor: "Max chip power in a compact 14\" chassis",
    pros: ["M4 Max GPU for 3D/ML at unmatched speed", "Up to 128GB unified memory", "Thunderbolt 5"],
    cons: ["Eye-watering cost", "Overkill for most users"],
    score: { value: 7.8, reliability: 9.8, sound: 9.9, comfort: 9.4 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The M4 Max in a 14\" body is for professionals who need workstation-class GPU performance on the go — most buyers should step down to M4 Pro.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Pro+14+inch+M4+Max&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── MACBOOK PRO 16\" ──
  {
    id: "macbook-pro-16-m4-pro",
    category: "macbook",
    name: "MacBook Pro 16\" (M4 Pro)",
    priceBand: "pro16",
    rank: 1,
    priceUSD: 2499,
    rating: 4.9,
    confidence: "High",
    reviewCount: 9200,
    editorPick: true,
    bestFor: "Best-in-class large screen pro laptop",
    pros: ["16.2\" Liquid Retina XDR display", "Exceptional battery for a 16\" laptop", "M4 Pro sustained performance"],
    cons: ["Expensive", "Heavy at 2.14kg for travel"],
    score: { value: 8.6, reliability: 9.7, sound: 9.7, comfort: 9.0 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The 16\" Pro is the desk-replacement MacBook — its display and speakers rival standalone monitors and speakers at a scale that rewards the extra weight.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Pro+16+inch+M4+Pro&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "macbook-pro-16-m4-max",
    category: "macbook",
    name: "MacBook Pro 16\" (M4 Max)",
    priceBand: "pro16",
    rank: 2,
    priceUSD: 3499,
    rating: 4.9,
    confidence: "High",
    reviewCount: 4700,
    editorPick: false,
    bestFor: "Professional workstation replacement on the move",
    pros: ["M4 Max GPU tops any laptop benchmark", "Up to 128GB unified memory", "Thunderbolt 5 × 3"],
    cons: ["Staggeringly expensive", "Very few people need this tier"],
    score: { value: 7.5, reliability: 9.9, sound: 9.9, comfort: 9.0 },
    updatedOn: "2026-03-13",
    editorialNote:
      "The M4 Max 16\" sets the absolute ceiling for laptop performance in 2026 — justified for 3D artists, ML engineers, and video professionals who live in render queues.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Pro+16+inch+M4+Max&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "macbook-pro-16-m3-pro",
    category: "macbook",
    name: "MacBook Pro 16\" (M3 Pro)",
    priceBand: "pro16",
    rank: 3,
    priceUSD: 2599,
    rating: 4.8,
    confidence: "High",
    reviewCount: 14100,
    editorPick: false,
    bestFor: "Discounted 16\" Pro for everyday creative professionals",
    pros: ["M3 Pro still fast for most creative tasks", "Discounted vs M4 models", "18GB RAM baseline"],
    cons: ["No Thunderbolt 5", "One generation behind"],
    score: { value: 8.8, reliability: 9.5, sound: 9.6, comfort: 9.0 },
    updatedOn: "2026-03-11",
    editorialNote:
      "If discounted meaningfully below the M4 Pro 16\", the M3 Pro 16\" remains an excellent machine — real-world differences are small for most workflows.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Pro+16+inch+M3+Pro&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "macbook-pro-16-m4-max-128gb",
    category: "macbook",
    name: "MacBook Pro 16\" (M4 Max, 128GB)",
    priceBand: "pro16",
    rank: 4,
    priceUSD: 4499,
    rating: 4.9,
    confidence: "Low",
    reviewCount: 1800,
    editorPick: false,
    bestFor: "Extreme ML and large language model on-device work",
    pros: ["128GB unified memory for large AI models", "Peak GPU compute", "Extraordinary throughput"],
    cons: ["Most expensive MacBook configuration", "Very niche use case"],
    score: { value: 6.9, reliability: 9.9, sound: 9.9, comfort: 9.0 },
    updatedOn: "2026-03-09",
    editorialNote:
      "This configuration is for AI researchers and ML engineers who need to run large models locally without quantization. A remarkable machine with a remarkably narrow audience.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Pro+16+inch+M4+Max+128GB&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "macbook-pro-16-m3-max",
    category: "macbook",
    name: "MacBook Pro 16\" (M3 Max)",
    priceBand: "pro16",
    rank: 5,
    priceUSD: 3299,
    rating: 4.8,
    confidence: "Medium",
    reviewCount: 5600,
    editorPick: false,
    bestFor: "Max-class performance at a generation discount",
    pros: ["M3 Max GPU still class-leading for most tasks", "Proven reliability", "Better discounting than M4 Max"],
    cons: ["No Thunderbolt 5", "M4 Max is genuinely faster for GPU workloads"],
    score: { value: 8.0, reliability: 9.6, sound: 9.8, comfort: 9.0 },
    updatedOn: "2026-03-07",
    editorialNote:
      "For buyers who can't justify M4 Max pricing, the M3 Max 16\" discounted is a viable path to Max-class performance — just ensure the savings are meaningful.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=MacBook+Pro+16+inch+M3+Max&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Performance scores single-core speed, sustained multi-core throughput, GPU capability, and memory bandwidth.",
  "Portability covers weight, battery life on a charge, and MagSafe / USB-C charging convenience.",
  "Reliability reflects Apple silicon longevity data, build quality, and long-term owner satisfaction.",
  "Value weighs price against chip tier, memory, display quality, and anticipated usable lifespan."
];
