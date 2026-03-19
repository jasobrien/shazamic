export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$25 - $80" },
  { id: "mid", label: "Mid-Range", range: "$81 - $200" },
  { id: "premium", label: "Premium", range: "$201+" }
];

export const homeCameras = [
  // ── BUDGET ──
  {
    id: "wyze-cam-v3",
    category: "home-cameras",
    name: "Wyze Cam v3",
    priceBand: "budget",
    rank: 1,
    priceUSD: 36,
    rating: 4.4,
    confidence: "High",
    reviewCount: 98400,
    editorPick: true,
    bestFor: "Best budget indoor/outdoor security camera — unbeatable value",
    pros: ["Color night vision (Starlight sensor) indoor and outdoor", "IP67 weatherproof — usable outside at this price", "Free 14-day cloud storage included, no subscription"],
    cons: ["Wyze Cam Plus subscription needed for AI detection", "Fixed lens — no pan or zoom"],
    score: { value: 9.8, reliability: 8.8, sound: 8.5, comfort: 8.4 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The Wyze Cam v3 at $36 with colour night vision and IP67 weatherproofing is the most recommended budget camera on the market — nothing else comes close to this feature density at this price.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Wyze+Cam+v3&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "tp-link-tapo-c210",
    category: "home-cameras",
    name: "TP-Link Tapo C210",
    priceBand: "budget",
    rank: 2,
    priceUSD: 30,
    rating: 4.3,
    confidence: "High",
    reviewCount: 67200,
    editorPick: false,
    bestFor: "Cheapest indoor pan-tilt camera with local microSD storage",
    pros: ["360° pan and 114° tilt — covers an entire room", "Local microSD storage — no cloud fees required", "Works with Alexa and Google"],
    cons: ["Indoor only — not weatherproof", "Night vision is black-and-white only"],
    score: { value: 9.7, reliability: 8.5, sound: 8.1, comfort: 8.6 },
    updatedOn: "2026-03-12",
    editorialNote:
      "Pan-tilt at $30 is the headline. The Tapo C210 covers an entire room rather than a fixed 90° slice, and you can swipe to look around live — practical for monitoring pets or checking rooms remotely.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=TP-Link+Tapo+C210+Pan+Tilt+Camera&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "blink-mini-2",
    category: "home-cameras",
    name: "Blink Mini 2",
    priceBand: "budget",
    rank: 3,
    priceUSD: 40,
    rating: 4.2,
    confidence: "High",
    reviewCount: 43100,
    editorPick: false,
    bestFor: "Best Alexa ecosystem budget camera — works with Echo Show displays",
    pros: ["Built-in motion-activated LED spotlight (colour night)", "Works natively with Echo Show and Fire TV", "Free 30-day trial cloud storage"],
    cons: ["Blink subscription needed for motion history beyond free trial", "Wired only — no battery option"],
    score: { value: 9.4, reliability: 8.4, sound: 8.3, comfort: 8.7 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The Blink Mini 2's built-in spotlight is a step up from the original — colour night vision without a separate IR night mode. For Alexa households it feeds directly to Echo Show displays.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Blink+Mini+2+Indoor+Camera&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "blink-outdoor-4",
    category: "home-cameras",
    name: "Blink Outdoor 4",
    priceBand: "budget",
    rank: 4,
    priceUSD: 70,
    rating: 4.3,
    confidence: "High",
    reviewCount: 38900,
    editorPick: false,
    bestFor: "Best battery outdoor camera for Alexa users who want simple setup",
    pros: ["2-year battery life on 2 AA batteries", "Weather-resistant outdoor design", "Free 30-day clips storage; Alexa-compatible"],
    cons: ["1080p only — no 2K or colour night vision", "Blink subscription required for ongoing motion history"],
    score: { value: 9.2, reliability: 8.7, sound: 8.0, comfort: 8.5 },
    updatedOn: "2026-03-08",
    editorialNote:
      "A two-year battery life is Blink's ace card. For low-traffic areas like shed doors or side gates where you just need motion alerts, the Blink Outdoor 4 requires almost no maintenance.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Blink+Outdoor+4+Security+Camera&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "wyze-cam-outdoor-v2",
    category: "home-cameras",
    name: "Wyze Cam Outdoor v2",
    priceBand: "budget",
    rank: 5,
    priceUSD: 80,
    rating: 4.1,
    confidence: "Medium",
    reviewCount: 24600,
    editorPick: false,
    bestFor: "Best wire-free outdoor camera with no subscription and free cloud clips",
    pros: ["Wire-free battery — mounts anywhere without wiring", "Free 14-day cloud rolling window, no subscription", "Magnetic recharge base for easy charging"],
    cons: ["Requires Wyze Base Station (bundled but adds bulk)", "Battery life varies — cold weather reduces it significantly"],
    score: { value: 9.0, reliability: 8.2, sound: 8.2, comfort: 8.3 },
    updatedOn: "2026-03-06",
    editorialNote:
      "Wyze's magnetic charging base makes recharging painless — the whole camera snaps off and onto the base in seconds. Paired with free cloud storage, it's the outdoor value champion.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Wyze+Cam+Outdoor+v2&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── MID-RANGE ──
  {
    id: "google-nest-cam-indoor-wired",
    category: "home-cameras",
    name: "Google Nest Cam (Indoor, Wired)",
    priceBand: "mid",
    rank: 1,
    priceUSD: 100,
    rating: 4.5,
    confidence: "High",
    reviewCount: 38700,
    editorPick: true,
    bestFor: "Best mid-range indoor camera — AI detection and Google ecosystem",
    pros: ["On-device ML identifies people, animals, and vehicles", "Google Home integration — live feed on Nest Hub displays", "3-hour continuous event history free; no sub needed for basics"],
    cons: ["Nest Aware subscription unlocks full 30-day history and familiar face detection", "Indoor only — no weatherproofing"],
    score: { value: 8.8, reliability: 9.2, sound: 9.3, comfort: 9.2 },
    updatedOn: "2026-03-14",
    editorialNote:
      "Google's on-device processing means the Nest Cam keeps working and detecting events even during internet outages. The AI detection accuracy — particularly animal vs. person — is the best in the mid-range.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Google+Nest+Cam+Indoor+Wired&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "eufy-solocam-e40",
    category: "home-cameras",
    name: "Eufy SoloCam E40",
    priceBand: "mid",
    rank: 2,
    priceUSD: 110,
    rating: 4.3,
    confidence: "High",
    reviewCount: 21300,
    editorPick: false,
    bestFor: "Best outdoor camera with zero subscription fees and built-in storage",
    pros: ["4GB encrypted on-device storage — no cloud subscription ever", "2K resolution with colour night vision", "Wire-free with solar charging option (solar panel sold separately)"],
    cons: ["No pan or tilt — fixed angle", "eufy ecosystem only — no HomeKit without HomeBase"],
    score: { value: 9.0, reliability: 8.8, sound: 8.8, comfort: 8.5 },
    updatedOn: "2026-03-12",
    editorialNote:
      "The SoloCam E40's 4GB on-device encrypted storage means you own your footage — no monthly fees, no cloud data sharing. Add the solar panel and you have a genuinely maintenance-free outdoor camera.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Eufy+SoloCam+E40+Outdoor+Security+Camera&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "ring-stick-up-cam-battery",
    category: "home-cameras",
    name: "Ring Stick Up Cam Battery (3rd Gen)",
    priceBand: "mid",
    rank: 3,
    priceUSD: 100,
    rating: 4.3,
    confidence: "High",
    reviewCount: 46800,
    editorPick: false,
    bestFor: "Most versatile Ring camera — indoor, outdoor, or on a mount",
    pros: ["Works indoors or outdoors with any orientation", "Battery, wired, or solar power options", "Links into Ring Alarm and Ring Video Doorbell devices"],
    cons: ["Ring Protect subscription for event history beyond 60 days", "1080p only — no 2K at this price"],
    score: { value: 8.7, reliability: 8.9, sound: 8.6, comfort: 9.0 },
    updatedOn: "2026-03-10",
    editorialNote:
      "Ring's Stick Up Cam is the Swiss Army knife of security cameras — it goes anywhere, powers three different ways, and integrates with every other Ring product. Best for Ring ecosystem users.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Ring+Stick+Up+Cam+Battery+3rd+Gen&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "arlo-essential-2k",
    category: "home-cameras",
    name: "Arlo Essential Indoor/Outdoor 2K",
    priceBand: "mid",
    rank: 4,
    priceUSD: 130,
    rating: 4.2,
    confidence: "High",
    reviewCount: 18200,
    editorPick: false,
    bestFor: "Best 2K wire-free outdoor camera with colour night vision at mid-range",
    pros: ["2K HDR video with colour at night", "No Arlo hub required — connects direct to WiFi", "180° field of view captures more of the scene"],
    cons: ["Arlo Secure subscription for AI detection and ongoing history", "Battery life varies with activity — 3-6 months typically"],
    score: { value: 8.5, reliability: 8.6, sound: 9.0, comfort: 8.8 },
    updatedOn: "2026-03-08",
    editorialNote:
      "2K with colour night at $130 wire-free is genuinely strong value. Arlo's 180° lens captures a wider scene than typical 120-140° competitors, which helps with driveway and gate monitoring.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Arlo+Essential+Indoor+Outdoor+2K+Security+Camera&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "ezviz-h3c-2k",
    category: "home-cameras",
    name: "EZVIZ H3C 2K+ Outdoor Smart Camera",
    priceBand: "mid",
    rank: 5,
    priceUSD: 90,
    rating: 4.1,
    confidence: "Medium",
    reviewCount: 12400,
    editorPick: false,
    bestFor: "Best value 2K+ outdoor camera for local NAS or microSD storage",
    pros: ["2K+ (3MP) with full-colour night vision spotlight", "RTSP support for local NVR/Home Assistant use", "MicroSD slot up to 256GB — no cloud required"],
    cons: ["AI detection requires EZVIZ cloud subscription", "App is functional but basic compared to Google/Ring"],
    score: { value: 9.1, reliability: 8.3, sound: 8.7, comfort: 7.9 },
    updatedOn: "2026-03-06",
    editorialNote:
      "EZVIZ's RTSP support is rare at this price and means Home Assistant and Blue Iris users can pull a direct stream. 2K+ resolution with colour night at $90 is the best deal for NVR setups.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=EZVIZ+H3C+2K+Outdoor+Security+Camera&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── PREMIUM ──
  {
    id: "arlo-pro-5s",
    category: "home-cameras",
    name: "Arlo Pro 5S 2K Wire-Free",
    priceBand: "premium",
    rank: 1,
    priceUSD: 250,
    rating: 4.5,
    confidence: "High",
    reviewCount: 14700,
    editorPick: true,
    bestFor: "Best premium wire-free outdoor camera — IFR colour night and integrated spotlight",
    pros: ["Colour night vision and integrated spotlight without requiring constant power", "Dual-band WiFi for more reliable connections outdoors", "Works with Apple HomeKit, Alexa, Google, and SmartThings"],
    cons: ["Arlo Secure subscription unlocks the best AI and cloud features", "Premium price without a subscription plan limits value"],
    score: { value: 8.4, reliability: 9.2, sound: 9.5, comfort: 9.3 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The Arlo Pro 5S's dual-band WiFi solves the biggest frustration with outdoor cameras — connectivity drops. Add full HomeKit support and the best colour night vision in the wire-free tier, and this is the premium outdoor benchmark.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Arlo+Pro+5S+2K+Wire-Free+Security+Camera&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "ring-floodlight-cam-wired-pro",
    category: "home-cameras",
    name: "Ring Floodlight Cam Wired Pro",
    priceBand: "premium",
    rank: 2,
    priceUSD: 250,
    rating: 4.4,
    confidence: "High",
    reviewCount: 18300,
    editorPick: false,
    bestFor: "Best premium wired outdoor camera with integrated 2500-lumen floodlight",
    pros: ["3D motion detection via radar — precise zone alerts, not whole-lawn triggers", "2500-lumen dual LED floodlights deter intruders on motion", "1080p HDR with head-to-toe view and colour night vision"],
    cons: ["Requires hardwired outdoor electrical connection", "Ring Protect Plan needed for full video history and advanced alerts"],
    score: { value: 8.6, reliability: 9.1, sound: 9.2, comfort: 9.0 },
    updatedOn: "2026-03-12",
    editorialNote:
      "The radar-based motion detection is the headline feature — instead of triggering on a car passing your driveway, it only alerts when something enters your property boundary. The 2500-lumen floodlights are legitimately bright.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Ring+Floodlight+Cam+Wired+Pro&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "google-nest-cam-floodlight",
    category: "home-cameras",
    name: "Google Nest Cam with Floodlight",
    priceBand: "premium",
    rank: 3,
    priceUSD: 280,
    rating: 4.4,
    confidence: "High",
    reviewCount: 12600,
    editorPick: false,
    bestFor: "Best premium floodlight camera for Google Nest and Home ecosystems",
    pros: ["On-device AI detects people, vehicles, and animals without internet", "2400-lumen floodlight with intelligent auto-activation", "Works with Google Home displays for live view"],
    cons: ["Requires wired outdoor electrical connection", "Nest Aware subscription for event history and facial recognition"],
    score: { value: 8.3, reliability: 9.3, sound: 9.4, comfort: 9.1 },
    updatedOn: "2026-03-10",
    editorialNote:
      "What sets the Nest Floodlight apart from Ring's radar model is on-device processing — it classifies a dog versus a person locally, even if your WiFi goes down. For Google households it's the definitive outdoor upgrade.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Google+Nest+Cam+Floodlight&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "arlo-ultra-2",
    category: "home-cameras",
    name: "Arlo Ultra 2 4K Wire-Free",
    priceBand: "premium",
    rank: 4,
    priceUSD: 330,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 9800,
    editorPick: false,
    bestFor: "Best 4K wire-free outdoor camera with integrated siren",
    pros: ["True 4K HDR video — clearest detail identification on any wire-free model", "Built-in 90dB siren for active deterrence", "Integrated spotlight and colour night vision"],
    cons: ["Arlo Secure plan required to use the 4K storage and AI features", "High price with diminishing returns vs. Pro 5S for most use cases"],
    score: { value: 7.9, reliability: 9.0, sound: 9.8, comfort: 8.9 },
    updatedOn: "2026-03-08",
    editorialNote:
      "4K is overkill for most driveways but the footage quality for zooming into faces or licence plates is genuinely better. The integrated siren adds active deterrence most cameras lack.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Arlo+Ultra+2+4K+Wire-Free+Security+Camera&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "eufy-s340-solocam",
    category: "home-cameras",
    name: "Eufy SoloCam S340 (Dual Lens)",
    priceBand: "premium",
    rank: 5,
    priceUSD: 230,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 7200,
    editorPick: false,
    bestFor: "Best subscription-free premium camera with 360° tracking and 8K storage",
    pros: ["Dual-lens: 3K wide-angle + 8K zoom — auto-tracks moving subjects", "8GB local encrypted storage, no subscription needed", "Solar charging — genuinely maintenance-free outdoors"],
    cons: ["8K zoom requires Eufy ecosystem for full use", "Larger form factor than single-lens cameras"],
    score: { value: 8.7, reliability: 8.8, sound: 9.1, comfort: 8.6 },
    updatedOn: "2026-03-06",
    editorialNote:
      "The S340's dual-lens auto-tracking follows intruders across the scene while the wide lens keeps the full picture. No subscription, solar power, and 8GB on-device storage make it the best premium option for privacy-first buyers.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Eufy+SoloCam+S340+Dual+Lens+Outdoor+Camera&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Video quality scores resolution, night vision performance (colour vs. IR), HDR handling, and lens field of view.",
  "Reliability reflects connectivity stability, weather resistance (IP rating), battery longevity, and long-term owner satisfaction.",
  "Features covers AI detection accuracy (person/animal/vehicle), smart home integrations, two-way audio, and siren/spotlight capabilities.",
  "Value weighs camera price against required subscriptions, hub/base station costs, and total cost of ownership over 2 years."
];
