export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$40 - $100" },
  { id: "mid", label: "Mid-Range", range: "$101 - $199" },
  { id: "premium", label: "Premium", range: "$200+" }
];

export const doorbells = [
  // ── BUDGET ──
  {
    id: "ring-video-doorbell-wired",
    category: "doorbells",
    name: "Ring Video Doorbell Wired",
    priceBand: "budget",
    rank: 1,
    priceUSD: 65,
    rating: 4.4,
    confidence: "High",
    reviewCount: 64200,
    editorPick: true,
    bestFor: "Best budget wired doorbell with Alexa",
    pros: ["1080p HD video with night vision", "Two-way audio and quick-release battery", "Hardwired for continuous power"],
    cons: ["Requires existing doorbell wiring", "No local storage — Ring subscription for full history"],
    score: { value: 9.4, reliability: 8.9, sound: 8.5, comfort: 8.6 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The Ring Wired is the best entry point into smart doorbells — reliable motion alerts, solid night vision, and easy Alexa integration at a price that makes sense for most front doors.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Ring+Video+Doorbell+Wired&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "blink-video-doorbell",
    category: "doorbells",
    name: "Blink Video Doorbell",
    priceBand: "budget",
    rank: 2,
    priceUSD: 50,
    rating: 4.3,
    confidence: "High",
    reviewCount: 41800,
    editorPick: false,
    bestFor: "Cheapest Alexa-integrated doorbell — wired or battery",
    pros: ["Works wired or on 2 AA batteries", "Free cloud clip storage for 60 days", "Clear 1080p daytime video"],
    cons: ["Night vision quality lags behind Ring", "No continuous live view without Sync Module 2"],
    score: { value: 9.6, reliability: 8.4, sound: 8.0, comfort: 8.2 },
    updatedOn: "2026-03-12",
    editorialNote:
      "Blink's doorbell undercuts everyone on price and still delivers reliable motion alerts. If you're in the Alexa ecosystem and want a set-and-forget option, this is the pick.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Blink+Video+Doorbell&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "wyze-video-doorbell-pro",
    category: "doorbells",
    name: "Wyze Video Doorbell Pro",
    priceBand: "budget",
    rank: 3,
    priceUSD: 50,
    rating: 4.1,
    confidence: "High",
    reviewCount: 19300,
    editorPick: false,
    bestFor: "Best no-subscription budget doorbell with local storage",
    pros: ["Free 14-day cloud storage with no subscription", "1080p with color night vision", "Works with Alexa and Google"],
    cons: ["Requires hardwiring (no battery version)", "App can lag on older phones"],
    score: { value: 9.5, reliability: 8.2, sound: 8.2, comfort: 8.4 },
    updatedOn: "2026-03-10",
    editorialNote:
      "Wyze gives you 14 days of free cloud clips and no mandatory subscription — that alone separates it from the Ring/Blink ecosystem at this price.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Wyze+Video+Doorbell+Pro&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "reolink-video-doorbell-wifi",
    category: "doorbells",
    name: "Reolink Video Doorbell WiFi",
    priceBand: "budget",
    rank: 4,
    priceUSD: 70,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 12700,
    editorPick: false,
    bestFor: "Best doorbell for local-only storage with no cloud fees",
    pros: ["5MP wide-angle lens", "Supports local NVR/NAS storage with no subscription", "Person detection built in"],
    cons: ["No HomeKit or Alexa voice control", "App UI is less polished than Ring"],
    score: { value: 9.2, reliability: 8.3, sound: 8.6, comfort: 7.8 },
    updatedOn: "2026-03-08",
    editorialNote:
      "Reolink is the go-to for privacy-conscious buyers who want to keep footage on their own hardware. The 5MP lens punches well above the budget price.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Reolink+Video+Doorbell+WiFi&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "eufy-video-doorbell-slim-1080p",
    category: "doorbells",
    name: "Eufy Video Doorbell Slim 1080p",
    priceBand: "budget",
    rank: 5,
    priceUSD: 80,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 9800,
    editorPick: false,
    bestFor: "No-subscription wired doorbell with local HomeBase storage",
    pros: ["No subscription — local storage via HomeBase 2", "AI human detection reduces false alerts", "Works with Alexa and Google"],
    cons: ["Requires eufy HomeBase 2 (sold separately or as bundle)", "Narrower field of view than competitors"],
    score: { value: 8.9, reliability: 8.4, sound: 8.3, comfort: 8.0 },
    updatedOn: "2026-03-06",
    editorialNote:
      "A solid subscription-free pick in the eufy ecosystem. The human detection AI is noticeably better than budget alternatives, cutting down on false trigger annoyances.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Eufy+Video+Doorbell+Slim+1080p&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── MID-RANGE ──
  {
    id: "ring-video-doorbell-4",
    category: "doorbells",
    name: "Ring Video Doorbell 4",
    priceBand: "mid",
    rank: 1,
    priceUSD: 120,
    rating: 4.5,
    confidence: "High",
    reviewCount: 52400,
    editorPick: true,
    bestFor: "Best all-round battery doorbell for most homes",
    pros: ["Pre-roll captures 4 seconds before motion trigger", "Quick-release rechargeable battery", "Color night vision + head-to-toe view"],
    cons: ["Ring subscription needed for video history beyond 60 days", "Pre-roll only in black and white"],
    score: { value: 8.8, reliability: 9.1, sound: 8.9, comfort: 9.0 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The pre-roll feature is a genuine upgrade — seeing what happened before motion was detected is invaluable for porch package monitoring. The Ring 4 is the mid-range sweet spot.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Ring+Video+Doorbell+4&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "eufy-s220-video-doorbell-battery",
    category: "doorbells",
    name: "Eufy S220 Video Doorbell Battery",
    priceBand: "mid",
    rank: 2,
    priceUSD: 130,
    rating: 4.4,
    confidence: "High",
    reviewCount: 28600,
    editorPick: false,
    bestFor: "Best mid-range doorbell with no subscription fees",
    pros: ["No subscription — local storage included", "2K resolution with AI human detection", "Wire-free install with long battery life"],
    cons: ["Requires eufy HomeBase 2 for full feature set", "App notifications can be slower than Ring"],
    score: { value: 9.1, reliability: 8.8, sound: 8.8, comfort: 8.7 },
    updatedOn: "2026-03-12",
    editorialNote:
      "eufy's subscription-free model is the standout value proposition here. 2K video, a real AI detection engine, and no monthly fees make this the rational mid-range choice.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Eufy+S220+Video+Doorbell+Battery&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "arlo-essential-video-doorbell",
    category: "doorbells",
    name: "Arlo Essential Video Doorbell Wire-Free",
    priceBand: "mid",
    rank: 3,
    priceUSD: 150,
    rating: 4.2,
    confidence: "High",
    reviewCount: 17900,
    editorPick: false,
    bestFor: "Best wire-free 1080p doorbell for renters",
    pros: ["Wire-free — no wiring needed at all", "Wide 180° field of view", "Direct-to-mobile call on ring"],
    cons: ["Arlo Secure subscription required for full AI features", "Battery life shorter than eufy"],
    score: { value: 8.5, reliability: 8.6, sound: 8.7, comfort: 8.8 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The Arlo Essential is the easiest doorbell to install because there's truly nothing to wire. For renters or anyone without doorbell wiring, this is the most flexible option.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Arlo+Essential+Video+Doorbell+Wire-Free&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "google-nest-doorbell-battery-2nd-gen",
    category: "doorbells",
    name: "Google Nest Doorbell (Battery, 2nd Gen)",
    priceBand: "mid",
    rank: 4,
    priceUSD: 180,
    rating: 4.4,
    confidence: "High",
    reviewCount: 21200,
    editorPick: false,
    bestFor: "Best Google Home and Nest ecosystem doorbell",
    pros: ["Best-in-class AI detection — faces, packages, animals", "Works natively with Google Home displays", "24/7 streaming with no extra hub"],
    cons: ["Google Nest Aware subscription for event history", "Google Home ecosystem only for advanced features"],
    score: { value: 8.4, reliability: 9.0, sound: 9.1, comfort: 9.2 },
    updatedOn: "2026-03-08",
    editorialNote:
      "If you own Google Home devices, the Nest Doorbell's AI detection is in a different league at this price — it correctly identifies people, pets, packages, and vehicles without you training it.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Google+Nest+Doorbell+Battery+2nd+Gen&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "amcrest-smart-home-1080p-doorbell",
    category: "doorbells",
    name: "Amcrest Smart Home 1080p Doorbell AD110",
    priceBand: "mid",
    rank: 5,
    priceUSD: 110,
    rating: 4.1,
    confidence: "Medium",
    reviewCount: 9100,
    editorPick: false,
    bestFor: "Best doorbell for local network/NVR storage without cloud",
    pros: ["Full RTSP stream — works with Blue Iris, Home Assistant, Synology", "No mandatory cloud subscription", "Built-in chime included"],
    cons: ["App interface is dated", "AI detection is basic compared to Nest or eufy"],
    score: { value: 8.7, reliability: 8.0, sound: 8.1, comfort: 7.6 },
    updatedOn: "2026-03-06",
    editorialNote:
      "The Amcrest AD110 is the power user's choice — if you run your own NVR or Home Assistant setup, its open RTSP stream makes it a plug-and-play addition with no subscription ever.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Amcrest+Smart+Home+Doorbell+AD110&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── PREMIUM ──
  {
    id: "google-nest-doorbell-wired-2nd-gen",
    category: "doorbells",
    name: "Google Nest Doorbell (Wired, 2nd Gen)",
    priceBand: "premium",
    rank: 1,
    priceUSD: 230,
    rating: 4.5,
    confidence: "High",
    reviewCount: 18400,
    editorPick: true,
    bestFor: "Best premium wired doorbell with on-device AI",
    pros: ["On-device ML runs even when internet is down", "Continuous 24/7 video recording (wired only)", "Recognises familiar faces over time"],
    cons: ["Nest Aware subscription needed for history beyond 3 hours", "Must have existing doorbell wiring"],
    score: { value: 8.3, reliability: 9.3, sound: 9.4, comfort: 9.3 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The wired Nest Doorbell's killer feature is 24/7 recording with on-device intelligence — events are still tagged even during outages. Google's facial recognition at this tier is genuinely impressive.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Google+Nest+Doorbell+Wired+2nd+Gen&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "eufy-e340-dual-camera-video-doorbell",
    category: "doorbells",
    name: "Eufy Video Doorbell E340 Dual-Camera",
    priceBand: "premium",
    rank: 2,
    priceUSD: 250,
    rating: 4.3,
    confidence: "High",
    reviewCount: 8700,
    editorPick: false,
    bestFor: "Best dual-camera doorbell — see face and packages simultaneously",
    pros: ["Two simultaneous views: face-level + ground package zone", "4K main sensor with colour night vision", "No subscription — local HomeBase storage"],
    cons: ["Requires eufy HomeBase 3 (usually bundled)", "Physically larger than single-lens models"],
    score: { value: 8.6, reliability: 8.9, sound: 9.5, comfort: 8.8 },
    updatedOn: "2026-03-12",
    editorialNote:
      "Watching a split-screen of who is at the door and what they've put on the ground is genuinely useful for delivery monitoring. The E340's two-lens approach solves the fish-eye angle compromise.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Eufy+Video+Doorbell+E340+Dual+Camera&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "ring-video-doorbell-pro-2",
    category: "doorbells",
    name: "Ring Video Doorbell Pro 2",
    priceBand: "premium",
    rank: 3,
    priceUSD: 220,
    rating: 4.4,
    confidence: "High",
    reviewCount: 31500,
    editorPick: false,
    bestFor: "Best premium Ring doorbell with radar-enhanced detection",
    pros: ["3D motion detection via radar — you set exact zones", "Head-to-toe 1536p HDR video", "Pre-roll capture before motion triggers"],
    cons: ["Ring Protect subscription required for video history", "Requires hardwiring"],
    score: { value: 8.5, reliability: 9.0, sound: 9.2, comfort: 9.1 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The Pro 2's radar lets you define detection zones with pinpoint accuracy — ideal for front doors facing a busy street where you only want alerts when someone walks up the path.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Ring+Video+Doorbell+Pro+2&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "ring-video-doorbell-elite",
    category: "doorbells",
    name: "Ring Video Doorbell Elite",
    priceBand: "premium",
    rank: 4,
    priceUSD: 350,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 6200,
    editorPick: false,
    bestFor: "Professional-grade PoE doorbell for permanent installation",
    pros: ["Power over Ethernet — zero battery concerns, no transformer needed", "1080p HD with 4:3 head-to-toe view", "Flush-mount design looks architectural"],
    cons: ["Requires PoE network cable run — professional install recommended", "Most expensive Ring doorbell by far"],
    score: { value: 7.8, reliability: 9.5, sound: 9.0, comfort: 8.5 },
    updatedOn: "2026-03-08",
    editorialNote:
      "The Elite is built for permanence. If you're wiring a new build or doing a full home security installation, PoE eliminates every battery and transformer headache for the long run.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Ring+Video+Doorbell+Elite&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "arlo-essential-xl-doorbell",
    category: "doorbells",
    name: "Arlo Essential XL Video Doorbell",
    priceBand: "premium",
    rank: 5,
    priceUSD: 200,
    rating: 4.1,
    confidence: "Medium",
    reviewCount: 7400,
    editorPick: false,
    bestFor: "Wire-free premium with the longest battery life",
    pros: ["6-month battery life on a single charge (XL battery)", "1080p with 180° field of view", "No hub required — connects direct to WiFi"],
    cons: ["Arlo Secure subscription for AI detection and history", "Video response latency slightly higher than wired"],
    score: { value: 8.2, reliability: 8.7, sound: 8.8, comfort: 8.9 },
    updatedOn: "2026-03-06",
    editorialNote:
      "The XL version's extended battery is its defining feature — six months between charges means it's practically set-and-forget wire-free, which no other premium doorbell matches.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Arlo+Essential+XL+Video+Doorbell&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Video quality covers resolution, night vision performance, wide-angle field of view, and HDR handling.",
  "Reliability reflects firmware stability, cloud uptime, battery life consistency, and long-term owner ratings.",
  "Value weighs upfront cost against any mandatory subscription fees and included storage.",
  "Features covers smart detection (AI/radar), ecosystem integrations, two-way audio quality, and app responsiveness."
];
