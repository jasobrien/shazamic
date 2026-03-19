export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$25 - $59" },
  { id: "mid", label: "Mid-Range", range: "$60 - $100" },
  { id: "premium", label: "Premium", range: "$101+" }
];

export const gamingControllers = [
  // ── BUDGET ──
  {
    id: "8bitdo-pro-2",
    category: "controllers",
    name: "8BitDo Pro 2",
    priceBand: "budget",
    rank: 1,
    priceUSD: 50,
    rating: 4.6,
    confidence: "High",
    reviewCount: 19400,
    editorPick: true,
    bestFor: "Best budget controller for PC and Android",
    pros: ["Excellent button feel and layout", "Bluetooth + USB-C + 2.4G receiver", "Back paddle buttons"],
    cons: ["No rumble vibration in standard model", "Not compatible natively with Xbox"],
    score: { value: 9.5, reliability: 9.0, sound: 8.8, comfort: 8.9 },
    updatedOn: "2026-03-12",
    editorialNote:
      "The 8BitDo Pro 2 is one of the best-value controllers available — back paddles, multiple connectivity options, and a satisfying button feel beat controllers twice its price.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=8BitDo+Pro+2&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "powera-enhanced-wired-xbox",
    category: "controllers",
    name: "PowerA Enhanced Wired Controller (Xbox)",
    priceBand: "budget",
    rank: 2,
    priceUSD: 25,
    rating: 4.3,
    confidence: "High",
    reviewCount: 28100,
    editorPick: false,
    bestFor: "Cheapest Xbox-layout controller that just works",
    pros: ["Official Xbox button layout", "Two back buttons", "Works on PC and Xbox"],
    cons: ["Wired only", "Build quality is noticeably budget"],
    score: { value: 9.6, reliability: 8.2, sound: 7.8, comfort: 8.4 },
    updatedOn: "2026-03-10",
    editorialNote:
      "Nothing competes with the PowerA at $25 — buy it when you need a spare, travel controller, or a first controller for young players.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=PowerA+Enhanced+Wired+Controller+(Xbox)&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "turtle-beach-recon-cloud",
    category: "controllers",
    name: "Turtle Beach Recon Cloud",
    priceBand: "budget",
    rank: 3,
    priceUSD: 59,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 7600,
    editorPick: false,
    bestFor: "Mobile gamers who want a clip-on Android controller",
    pros: ["Phone mount included", "Bluetooth for Android and PC", "4 back buttons"],
    cons: ["Button feel not premium", "Mobile grip adds bulk"],
    score: { value: 8.6, reliability: 8.4, sound: 8.0, comfort: 8.2 },
    updatedOn: "2026-03-08",
    editorialNote:
      "For Game Pass via Android phone, the Recon Cloud's built-in mount means no extra clip accessory — a convenient all-in-one solution for mobile grinders.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Turtle+Beach+Recon+Cloud&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "hori-fighting-commander-octa",
    category: "controllers",
    name: "HORI Fighting Commander OCTA",
    priceBand: "budget",
    rank: 4,
    priceUSD: 49,
    rating: 4.4,
    confidence: "Medium",
    reviewCount: 5300,
    editorPick: false,
    bestFor: "Fighting game players on a budget",
    pros: ["6-button layout for fighting games", "D-pad optimized for precision", "PC and PS compatible"],
    cons: ["No analog stick (fighting game design)", "Niche form factor"],
    score: { value: 8.8, reliability: 8.7, sound: 8.4, comfort: 8.3 },
    updatedOn: "2026-03-06",
    editorialNote:
      "If Street Fighter, Tekken, or Mortal Kombat is your genre, HORI's 6-button layout is the best tool for the money — the D-pad precision is notably better than standard controllers.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=HORI+Fighting+Commander+OCTA&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "razer-wolverine-v2-wired",
    category: "controllers",
    name: "Razer Wolverine V2 (Wired)",
    priceBand: "budget",
    rank: 5,
    priceUSD: 59,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 9800,
    editorPick: false,
    bestFor: "PC + Xbox layout with trigger stops at budget price",
    pros: ["Hair-trigger stops for competitive games", "Mecha-tactile face buttons", "USB-C connection"],
    cons: ["Wired only at this price tier", "Mecha buttons divisive in feel"],
    score: { value: 8.7, reliability: 8.6, sound: 8.7, comfort: 8.5 },
    updatedOn: "2026-03-05",
    editorialNote:
      "The Wolverine V2's trigger stops are a genuine competitive edge in shooters — rare to find at $59 and worth considering if FPS games are your focus.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Razer+Wolverine+V2+(Wired)&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── MID-RANGE ──
  {
    id: "xbox-wireless-controller",
    category: "controllers",
    name: "Xbox Wireless Controller",
    priceBand: "mid",
    rank: 1,
    priceUSD: 65,
    rating: 4.7,
    confidence: "High",
    reviewCount: 84200,
    editorPick: true,
    bestFor: "Best all-round controller for PC and Xbox",
    pros: ["Ergonomic reference-quality layout", "Bluetooth + Xbox wireless + USB-C", "Works on PC natively"],
    cons: ["Back buttons missing", "AA battery not rechargeable"],
    score: { value: 9.3, reliability: 9.5, sound: 8.9, comfort: 9.5 },
    updatedOn: "2026-03-13",
    editorialNote:
      "The Xbox controller's ergonomics remain the gold standard — extremely comfortable for any hand size, native PC support, and near-universal software compatibility.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Xbox+Wireless+Controller&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "dualsense-ps5",
    category: "controllers",
    name: "DualSense (PlayStation 5)",
    priceBand: "mid",
    rank: 2,
    priceUSD: 75,
    rating: 4.6,
    confidence: "High",
    reviewCount: 61400,
    editorPick: false,
    bestFor: "Most innovative controller feel with haptic triggers",
    pros: ["Adaptive trigger resistance for immersive feedback", "Precise haptic rumble", "Built-in microphone"],
    cons: ["Battery life shorter than Xbox controller", "PC integration depends on game support"],
    score: { value: 9.0, reliability: 9.1, sound: 9.5, comfort: 9.2 },
    updatedOn: "2026-03-12",
    editorialNote:
      "The DualSense's adaptive triggers and haptic feedback represent the biggest controller innovation in a decade — supported well on PC via Steam.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=DualSense+(PlayStation+5)&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "nintendo-switch-pro-controller",
    category: "controllers",
    name: "Nintendo Switch Pro Controller",
    priceBand: "mid",
    rank: 3,
    priceUSD: 70,
    rating: 4.6,
    confidence: "High",
    reviewCount: 52800,
    editorPick: false,
    bestFor: "Nintendo Switch players needing a proper controller",
    pros: ["Gyroscope for motion controls", "Long battery (40 hours)", "Comfortable full-size layout"],
    cons: ["Switch exclusive (PC support via Bluetooth only)", "D-pad historically divisive"],
    score: { value: 8.9, reliability: 9.3, sound: 8.6, comfort: 9.3 },
    updatedOn: "2026-03-11",
    editorialNote:
      "The Pro Controller transforms the Switch gaming experience — 40-hour battery and full ergonomics are worth every dollar versus the Joy-Cons for living room play.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Nintendo+Switch+Pro+Controller&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "8bitdo-ultimate-bluetooth",
    category: "controllers",
    name: "8BitDo Ultimate Bluetooth Controller",
    priceBand: "mid",
    rank: 4,
    priceUSD: 69,
    rating: 4.5,
    confidence: "High",
    reviewCount: 14700,
    editorPick: false,
    bestFor: "Customizable mid-range controller for PC and Android",
    pros: ["Ultimate Software for deep button remapping", "Back paddles", "Charging dock included"],
    cons: ["Slight analog stick drift risk over time", "Xbox layout (not PlayStation)"],
    score: { value: 9.2, reliability: 8.8, sound: 9.0, comfort: 9.0 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The Ultimate Bluetooth pairs the back paddles and customization depth of a pro controller with the charging dock usually reserved for $150+ models.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=8BitDo+Ultimate+Bluetooth+Controller&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "turtle-beach-stealth-ultra",
    category: "controllers",
    name: "Turtle Beach Stealth Ultra",
    priceBand: "mid",
    rank: 5,
    priceUSD: 99,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 6100,
    editorPick: false,
    bestFor: "Multi-platform wireless with large display",
    pros: ["Status display shows inputs live", "Xbox layout for PC/Xbox/Android", "Swappable thumbstick caps"],
    cons: ["Bulkier than standard Xbox controller", "Battery life shorter than Elite 2"],
    score: { value: 8.5, reliability: 8.6, sound: 8.7, comfort: 8.8 },
    updatedOn: "2026-03-08",
    editorialNote:
      "The unique status display is a genuine differentiator — checking battery and input mode at a glance feels more useful than it sounds.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Turtle+Beach+Stealth+Ultra&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── PREMIUM ──
  {
    id: "xbox-elite-series-2",
    category: "controllers",
    name: "Xbox Elite Series 2",
    priceBand: "premium",
    rank: 1,
    priceUSD: 179,
    rating: 4.4,
    confidence: "High",
    reviewCount: 38700,
    editorPick: true,
    bestFor: "Best all-round premium controller for PC and Xbox",
    pros: ["4 swappable back paddles", "Adjustable trigger stops", "Tension-adjustable thumbsticks"],
    cons: ["Bumper reliability complaints in older models", "Expensive"],
    score: { value: 8.7, reliability: 8.9, sound: 9.6, comfort: 9.6 },
    updatedOn: "2026-03-13",
    editorialNote:
      "The Elite 2 remains the benchmark for customizable premium gaming controllers — the paddle layout and trigger stops alone transform competitive play.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Xbox+Elite+Series+2&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "dualsense-edge",
    category: "controllers",
    name: "DualSense Edge (PlayStation 5)",
    priceBand: "premium",
    rank: 2,
    priceUSD: 199,
    rating: 4.3,
    confidence: "High",
    reviewCount: 14900,
    editorPick: false,
    bestFor: "PS5 performance players wanting full customization",
    pros: ["Swappable thumbsticks and back buttons", "Per-profile button remapping", "Adaptive triggers retained"],
    cons: ["Short battery (6 hours wireless)", "Very expensive for PS5 exclusivity"],
    score: { value: 8.0, reliability: 8.8, sound: 9.8, comfort: 9.3 },
    updatedOn: "2026-03-12",
    editorialNote:
      "The Edge is the only way to get adaptive triggers with a pro-level customizable layout on PS5 — incredible feel, but the 6-hour battery is a meaningful trade-off.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=DualSense+Edge+(PlayStation+5)&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "scuf-instinct-pro",
    category: "controllers",
    name: "Scuf Instinct Pro",
    priceBand: "premium",
    rank: 3,
    priceUSD: 179,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 8200,
    editorPick: false,
    bestFor: "Esports players needing instant hair-trigger response",
    pros: ["Instant trigger technology (hair triggers)", "4 back paddles", "No-tools customization"],
    cons: ["No built-in rechargeable battery", "Build quality not as reassuring as Elite 2"],
    score: { value: 8.3, reliability: 8.6, sound: 9.4, comfort: 9.1 },
    updatedOn: "2026-03-10",
    editorialNote:
      "Scuf's trigger response is among the fastest available — built for competitive FPS players where fractions of a second matter.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Scuf+Instinct+Pro&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "razer-wolverine-v2-pro",
    category: "controllers",
    name: "Razer Wolverine V2 Pro",
    priceBand: "premium",
    rank: 4,
    priceUSD: 199,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 6700,
    editorPick: false,
    bestFor: "PlayStation and PC players wanting mecha-tactile buttons",
    pros: ["Mecha-tactile face buttons unique at this tier", "6 back buttons", "Trigger stops"],
    cons: ["Take-or-leave mecha button feel", "Expensive for less haptic depth than DualSense Edge"],
    score: { value: 8.2, reliability: 8.7, sound: 9.3, comfort: 9.0 },
    updatedOn: "2026-03-09",
    editorialNote:
      "The V2 Pro's mecha-tactile buttons offer a click-satisfying alternative to rubber dome — if you've tried them and loved them, the Pro is worth it.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Razer+Wolverine+V2+Pro&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "nacon-revolution-5-pro",
    category: "controllers",
    name: "Nacon Revolution 5 Pro",
    priceBand: "premium",
    rank: 5,
    priceUSD: 149,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 4900,
    editorPick: false,
    bestFor: "PC and PS5 players who prefer Xbox analog stick layout",
    pros: ["Xbox stick layout on a PlayStation controller", "Hall effect sticks (drift-resistant)", "Wired + Bluetooth"],
    cons: ["Software setup required for full features", "Less known brand"],
    score: { value: 8.6, reliability: 9.0, sound: 8.9, comfort: 8.8 },
    updatedOn: "2026-03-07",
    editorialNote:
      "Hall effect sticks mean no drift — ever. If that's your primary concern and you want the Xbox analog layout on PS5 or PC, the Nacon Rev 5 Pro is a niche but compelling buy.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Nacon+Revolution+5+Pro&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Performance covers button responsiveness, analog stick accuracy, trigger feel, and input latency.",
  "Comfort scores ergonomic fit for various hand sizes, grip texture, weight, and long-session wearability.",
  "Reliability reflects analog stick drift track record, button longevity, battery life, and connection stability.",
  "Value weighs price against feature depth, build quality, platform compatibility, and customization options."
];
