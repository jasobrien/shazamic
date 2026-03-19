export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$60 - $130" },
  { id: "mid", label: "Mid-Range", range: "$131 - $250" },
  { id: "premium", label: "Premium", range: "$251+" }
];

export const smartLocks = [
  // ── BUDGET ──
  {
    id: "wyze-lock",
    category: "smart-locks",
    name: "Wyze Lock",
    priceBand: "budget",
    rank: 1,
    priceUSD: 90,
    rating: 4.2,
    confidence: "High",
    reviewCount: 24300,
    editorPick: true,
    bestFor: "Best budget smart deadbolt with app and auto-lock",
    pros: ["Installs on existing deadbolt in minutes", "Auto-lock and door sensor built in", "Works with Alexa and Google"],
    cons: ["Requires Wyze gateway for remote access (sold separately, ~$20)", "No keypad on base model"],
    score: { value: 9.5, reliability: 8.4, sound: 8.2, comfort: 8.8 },
    updatedOn: "2026-03-14",
    editorialNote:
      "Wyze Lock retrofits over your existing deadbolt cylinder — you keep your key, add phone and auto-lock. At $90 it's the most affordable path to smart access without replacing your door hardware.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Wyze+Lock+Smart+Deadbolt&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "ultraloq-ul3-bt",
    category: "smart-locks",
    name: "Ultraloq UL3 Bluetooth",
    priceBand: "budget",
    rank: 2,
    priceUSD: 80,
    rating: 4.1,
    confidence: "High",
    reviewCount: 18700,
    editorPick: false,
    bestFor: "Best budget fingerprint smart lock for frequent keyless entry",
    pros: ["Fingerprint + keypad + app — 3 keyless methods", "No hub required for Bluetooth entry", "Quick fingerprint unlock under a second"],
    cons: ["Bluetooth only (no remote access without bridge)", "Finish quality is functional rather than premium"],
    score: { value: 9.3, reliability: 8.3, sound: 8.5, comfort: 9.0 },
    updatedOn: "2026-03-12",
    editorialNote:
      "Ultraloq's fingerprint reader is fast and dependable — pressing your thumb is genuinely faster than fumbling for keys. The UL3 BT is the benchmark for budget biometric locks.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Ultraloq+UL3+Bluetooth+Smart+Lock&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "igloohome-smart-deadbolt",
    category: "smart-locks",
    name: "igloohome Smart Deadbolt 2S",
    priceBand: "budget",
    rank: 3,
    priceUSD: 120,
    rating: 4.0,
    confidence: "Medium",
    reviewCount: 9200,
    editorPick: false,
    bestFor: "Best for Airbnb hosts — offline auto-expiring PIN codes",
    pros: ["Generates time-limited PINs even without internet", "Keypad + Bluetooth + physical key backup", "Ideal for short-term rentals"],
    cons: ["No fingerprint reader", "App setup requires some patience"],
    score: { value: 8.8, reliability: 8.5, sound: 8.4, comfort: 8.3 },
    updatedOn: "2026-03-10",
    editorialNote:
      "igloohome's offline PIN generation is a practical feature for hosts: give each guest a unique code that expires automatically, no internet required at the lock itself.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=igloohome+Smart+Deadbolt+2S&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "august-smart-lock-4th-gen",
    category: "smart-locks",
    name: "August Smart Lock (4th Gen)",
    priceBand: "budget",
    rank: 4,
    priceUSD: 80,
    rating: 4.0,
    confidence: "High",
    reviewCount: 21400,
    editorPick: false,
    bestFor: "Slimmest retrofit lock — invisible from outside",
    pros: ["Fits over existing deadbolt — outside looks unchanged", "Auto-lock and auto-unlock via geofencing", "Works with Apple Home, Alexa, Google"],
    cons: ["No keypad — phone or key only", "August Connect WiFi bridge needed for remote access (~$30)"],
    score: { value: 9.0, reliability: 8.2, sound: 7.9, comfort: 8.7 },
    updatedOn: "2026-03-08",
    editorialNote:
      "August's biggest selling point is invisibility — no one looking at your door from outside can tell it's a smart lock. The auto-unlock as you approach the door is seamless when it works.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=August+Smart+Lock+4th+Gen&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "schlage-connect-zwave",
    category: "smart-locks",
    name: "Schlage Connect Smart Deadbolt (Z-Wave)",
    priceBand: "budget",
    rank: 5,
    priceUSD: 130,
    rating: 4.3,
    confidence: "High",
    reviewCount: 32100,
    editorPick: false,
    bestFor: "Best Z-Wave lock for SmartThings and Home Assistant users",
    pros: ["Industry-leading Schlage deadbolt reliability", "Built-in alarm sensor detects forced entry", "Works with any Z-Wave hub"],
    cons: ["No WiFi — requires a Z-Wave hub", "Touchscreen keypad takes adjustment to get used to"],
    score: { value: 8.7, reliability: 9.2, sound: 8.8, comfort: 8.1 },
    updatedOn: "2026-03-06",
    editorialNote:
      "Schlage's hardware quality is the highest in this price range — the deadbolt mechanism itself outlasts most competitors. If you have a Z-Wave hub, this is the reliability standard.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Schlage+Connect+Smart+Deadbolt+Z-Wave&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── MID-RANGE ──
  {
    id: "august-wifi-smart-lock",
    category: "smart-locks",
    name: "August WiFi Smart Lock (4th Gen + WiFi)",
    priceBand: "mid",
    rank: 1,
    priceUSD: 150,
    rating: 4.3,
    confidence: "High",
    reviewCount: 27800,
    editorPick: true,
    bestFor: "Best mid-range retrofit lock with built-in WiFi",
    pros: ["Built-in WiFi — no separate bridge needed", "Apple Home, Alexa, Google, and SmartThings support", "Activity log with remote lock/unlock"],
    cons: ["No keypad — phone or key only", "Visible thumb-turn interior replacement"],
    score: { value: 8.9, reliability: 8.7, sound: 8.5, comfort: 9.1 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The built-in WiFi removes the $30 bridge accessory requirement of the base model. For most households this is the right August to buy — full remote access with the broadest smart home compatibility.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=August+WiFi+Smart+Lock+4th+Generation&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "ultraloq-u-bolt-pro-wifi",
    category: "smart-locks",
    name: "Ultraloq U-Bolt Pro WiFi",
    priceBand: "mid",
    rank: 2,
    priceUSD: 140,
    rating: 4.3,
    confidence: "High",
    reviewCount: 19600,
    editorPick: false,
    bestFor: "Best value 6-in-1 entry lock — fingerprint, PIN, app, key, and more",
    pros: ["Six access methods: fingerprint, keypad, app, key, auto-unlock, knock-to-open", "Built-in WiFi for remote access", "Anti-peep keypad obscures PIN input"],
    cons: ["Bulkier than retrofit-style locks", "App needs improvement for guest user management"],
    score: { value: 9.2, reliability: 8.5, sound: 8.7, comfort: 9.0 },
    updatedOn: "2026-03-12",
    editorialNote:
      "No other lock at $140 matches the Ultraloq's six entry methods. Families benefit most — kids can use the keypad, guests get a time-limited PIN, and you use your phone.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Ultraloq+U-Bolt+Pro+WiFi+Smart+Lock&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "kwikset-halo-touch",
    category: "smart-locks",
    name: "Kwikset Halo Touch Fingerprint Smart Lock",
    priceBand: "mid",
    rank: 3,
    priceUSD: 180,
    rating: 4.2,
    confidence: "High",
    reviewCount: 14300,
    editorPick: false,
    bestFor: "Best mid-range fingerprint lock from a trusted hardware brand",
    pros: ["Kwikset brand reliability with SmartKey re-key technology", "Built-in WiFi with Alexa and Google support", "Stores up to 100 fingerprints"],
    cons: ["No Apple HomeKit support", "Fingerprint reader slightly slower than Ultraloq in cold weather"],
    score: { value: 8.5, reliability: 8.9, sound: 8.8, comfort: 8.9 },
    updatedOn: "2026-03-10",
    editorialNote:
      "Kwikset's SmartKey technology lets you re-key the lock yourself in seconds if you ever need to change who has a physical key — a practical security feature no competitor offers at this price.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Kwikset+Halo+Touch+Fingerprint+Smart+Lock&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "eufy-smart-lock-touch-wifi",
    category: "smart-locks",
    name: "Eufy Security Smart Lock Touch & WiFi",
    priceBand: "mid",
    rank: 4,
    priceUSD: 180,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 11900,
    editorPick: false,
    bestFor: "Best eufy ecosystem smart lock with fingerprint and WiFi",
    pros: ["Fingerprint unlock in 0.3 seconds", "Built-in WiFi — no hub required", "Works with Alexa and Google; battery lasts ~6 months"],
    cons: ["No Apple HomeKit", "eufy app not as mature as August or Schlage platforms"],
    score: { value: 8.6, reliability: 8.4, sound: 8.6, comfort: 8.8 },
    updatedOn: "2026-03-08",
    editorialNote:
      "eufy's 0.3-second fingerprint unlock is one of the fastest on the market. For eufy camera users already in the ecosystem it integrates smoothly with the same app.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Eufy+Security+Smart+Lock+Touch+WiFi&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "yale-assure-lock-2",
    category: "smart-locks",
    name: "Yale Assure Lock 2",
    priceBand: "mid",
    rank: 5,
    priceUSD: 200,
    rating: 4.3,
    confidence: "High",
    reviewCount: 16100,
    editorPick: false,
    bestFor: "Best touchscreen smart lock for multi-platform smart home users",
    pros: ["Works with Alexa, Google, Apple Home, and SmartThings natively", "Backlit touchscreen keypad with tamper alarm", "Matter compatible for future-proofing"],
    cons: ["No fingerprint reader", "Premium price for features that rivals offer cheaper"],
    score: { value: 8.3, reliability: 9.0, sound: 8.9, comfort: 9.2 },
    updatedOn: "2026-03-06",
    editorialNote:
      "The Yale Assure Lock 2's broad platform support — including Matter — means it works with whatever smart home hub you already have. It's the most future-proof mid-range lock.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Yale+Assure+Lock+2+Smart+Deadbolt&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── PREMIUM ──
  {
    id: "schlage-encode-plus",
    category: "smart-locks",
    name: "Schlage Encode Plus Smart WiFi Deadbolt",
    priceBand: "premium",
    rank: 1,
    priceUSD: 280,
    rating: 4.5,
    confidence: "High",
    reviewCount: 22700,
    editorPick: true,
    bestFor: "Best premium smart lock with Apple Home Key (tap-to-unlock with iPhone)",
    pros: ["Apple Home Key — tap iPhone or Apple Watch on door to unlock instantly", "Built-in WiFi with Alexa, Apple Home, and Google", "Schlage Grade 1 security — highest residential certification"],
    cons: ["No fingerprint reader", "Premium price for the Apple ecosystem feature"],
    score: { value: 8.5, reliability: 9.5, sound: 9.2, comfort: 9.4 },
    updatedOn: "2026-03-14",
    editorialNote:
      "Apple Home Key is genuinely magic — a tap of your iPhone or Watch unlocks the door with no app load time. Combined with Schlage's Grade 1 security rating, this is the premium lock for iPhone households.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Schlage+Encode+Plus+Smart+WiFi+Deadbolt&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "level-lock-plus",
    category: "smart-locks",
    name: "Level Lock+ (Apple Home Key Edition)",
    priceBand: "premium",
    rank: 2,
    priceUSD: 260,
    rating: 4.4,
    confidence: "High",
    reviewCount: 8900,
    editorPick: false,
    bestFor: "Most discreet smart lock — invisible from outside, inside, and front door",
    pros: ["Completely invisible from both sides of the door — existing hardware stays", "Apple Home Key tap-to-unlock", "Thread/Matter support for fast local control"],
    cons: ["Apple ecosystem only for full features", "Installation requires removing existing deadbolt mechanism (inside only)"],
    score: { value: 8.3, reliability: 9.2, sound: 9.0, comfort: 9.5 },
    updatedOn: "2026-03-12",
    editorialNote:
      "Level Lock is the smartest-looking smart lock because you can't see it at all — all the tech is hidden inside the door. If aesthetics and Apple Home Key matter to you, nothing else comes close to this design.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Level+Lock+Plus+Apple+Home+Key&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "lockly-vision-elite",
    category: "smart-locks",
    name: "Lockly Vision Elite",
    priceBand: "premium",
    rank: 3,
    priceUSD: 350,
    rating: 4.1,
    confidence: "Medium",
    reviewCount: 5600,
    editorPick: false,
    bestFor: "All-in-one smart lock with built-in doorbell camera",
    pros: ["Combines smart lock and 1080p doorbell camera in one unit", "Fingerprint + PIN + app + physical key", "Anti-peep random-digit keypad layout"],
    cons: ["Expensive and bulky — camera lens sits below the lock", "Lockly subscription needed for full cloud history"],
    score: { value: 7.9, reliability: 8.5, sound: 8.7, comfort: 8.8 },
    updatedOn: "2026-03-10",
    editorialNote:
      "Lockly Vision is the only mainstream lock with a built-in doorbell camera — one device replaces two. It's not for everyone, but for a single-product front door upgrade it's uniquely convenient.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Lockly+Vision+Elite+Smart+Lock&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "nest-x-yale-lock",
    category: "smart-locks",
    name: "Nest x Yale Lock",
    priceBand: "premium",
    rank: 4,
    priceUSD: 280,
    rating: 4.3,
    confidence: "High",
    reviewCount: 13200,
    editorPick: false,
    bestFor: "Best Google Nest ecosystem smart lock with clean design",
    pros: ["Tight Google Home integration — works with Nest Doorbells and cameras", "Minimalist keypad with no visible branding clutter", "Works with Nest Connect for remote access"],
    cons: ["Requires Nest Connect (sold separately, ~$50) for remote access", "No fingerprint reader"],
    score: { value: 8.1, reliability: 9.1, sound: 8.8, comfort: 9.3 },
    updatedOn: "2026-03-08",
    editorialNote:
      "The Nest x Yale lock is designed to work within the Google ecosystem — paired with a Nest Doorbell and Nest cameras it creates an integrated front-door security setup controlled from one app.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Nest+x+Yale+Smart+Lock&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "yale-assure-lock-2-plus",
    category: "smart-locks",
    name: "Yale Assure Lock 2 Plus (With Home Key)",
    priceBand: "premium",
    rank: 5,
    priceUSD: 270,
    rating: 4.3,
    confidence: "High",
    reviewCount: 10800,
    editorPick: false,
    bestFor: "Best multi-platform premium lock — Apple, Google, Alexa, and Matter",
    pros: ["Apple Home Key + Alexa + Google + SmartThings + Matter support", "Backlit keypad + remote access + tamper alarm", "Most broadly compatible premium lock available"],
    cons: ["No fingerprint reader", "Touchscreen less instant than Home Key tap"],
    score: { value: 8.2, reliability: 9.0, sound: 8.9, comfort: 9.4 },
    updatedOn: "2026-03-06",
    editorialNote:
      "The Yale Assure 2 Plus is the best choice if your household uses mixed platforms — it's the only lock that fully supports Apple Home Key, Google Home, Alexa, and Matter simultaneously.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Yale+Assure+Lock+2+Plus+Home+Key&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Security is graded on physical deadbolt strength (ANSI/BHMA rating), anti-tamper protection, and vulnerability to bypass methods.",
  "Reliability covers connectivity stability, battery longevity, firmware consistency, and long-term owner satisfaction ratings.",
  "Ease of use rates app quality, installation complexity, guest access management, and auto-lock responsiveness.",
  "Value weighs total cost (lock + any required bridge/hub) against features, security grade, and platform compatibility."
];
