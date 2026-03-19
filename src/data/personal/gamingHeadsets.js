export const PRICE_BANDS = [
  { id: "budget", label: "Budget", range: "$30 - $79" },
  { id: "mid", label: "Mid-Range", range: "$80 - $164" },
  { id: "premium", label: "Premium", range: "$165+" }
];

export const gamingHeadsets = [
  // ── BUDGET ──
  {
    id: "hyperx-cloud-stinger-2",
    category: "headsets",
    name: "HyperX Cloud Stinger 2",
    priceBand: "budget",
    rank: 1,
    priceUSD: 49,
    rating: 4.4,
    confidence: "High",
    reviewCount: 24800,
    editorPick: true,
    bestFor: "Best overall budget gaming headset",
    pros: ["Excellent passive noise isolation", "Comfortable memory foam", "Clear directional audio"],
    cons: ["Wired only", "Mic not detachable"],
    score: { value: 9.4, reliability: 9.0, sound: 8.4, comfort: 8.8 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The Cloud Stinger 2 is the go-to recommendation under $50 — comfortable for long sessions, clear audio, and HyperX's proven build quality.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=HyperX+Cloud+Stinger+2&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "razer-kraken-x",
    category: "headsets",
    name: "Razer Kraken X",
    priceBand: "budget",
    rank: 2,
    priceUSD: 40,
    rating: 4.3,
    confidence: "High",
    reviewCount: 31200,
    editorPick: false,
    bestFor: "Lightest wired headset under $50",
    pros: ["Ultra-light 250g frame", "Oval ear cushions fit comfortably", "Flexible cardioid mic"],
    cons: ["Thin-sounding bass", "Build feels budget"],
    score: { value: 9.2, reliability: 8.5, sound: 7.9, comfort: 9.1 },
    updatedOn: "2026-03-08",
    editorialNote:
      "At 250g, the Kraken X is the lightest budget headset on the list — great for those who hate heavy headwear during long sessions.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Razer+Kraken+X&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "corsair-hs55-stereo",
    category: "headsets",
    name: "Corsair HS55 Stereo",
    priceBand: "budget",
    rank: 3,
    priceUSD: 50,
    rating: 4.3,
    confidence: "High",
    reviewCount: 14600,
    editorPick: false,
    bestFor: "Comfortable over-ear for PC and console",
    pros: ["Multi-platform compatibility", "Plush memory foam ear pads", "Discord-certified mic"],
    cons: ["No 7.1 surround", "Somewhat boring soundscape"],
    score: { value: 9.0, reliability: 8.8, sound: 8.1, comfort: 9.0 },
    updatedOn: "2026-03-06",
    editorialNote:
      "The HS55 covers every platform without adapter hassle — Corsair's Discord certification means the mic just works without configuration fuss.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Corsair+HS55+Stereo&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "logitech-g335",
    category: "headsets",
    name: "Logitech G335",
    priceBand: "budget",
    rank: 4,
    priceUSD: 69,
    rating: 4.2,
    confidence: "Medium",
    reviewCount: 8900,
    editorPick: false,
    bestFor: "Best-looking budget headset",
    pros: ["Lightweight 240g", "Flip to mute mic", "Eye-catching color options"],
    cons: ["Sound lacks low-end punch", "Ear cups smaller than average"],
    score: { value: 8.7, reliability: 8.6, sound: 8.0, comfort: 8.5 },
    updatedOn: "2026-03-04",
    editorialNote:
      "The G335 trades some audio depth for a light, stylish design that's easier to wear all day than most budget competitors.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Logitech+G335&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "steelseries-arctis-nova-1",
    category: "headsets",
    name: "SteelSeries Arctis Nova 1",
    priceBand: "budget",
    rank: 5,
    priceUSD: 70,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 11400,
    editorPick: false,
    bestFor: "Console-to-PC switchers on a budget",
    pros: ["Works on PC, PS5, Xbox, Switch and mobile", "Comfortable ski-goggle headband", "Clear mic"],
    cons: ["No software support", "Plastic build"],
    score: { value: 8.8, reliability: 8.7, sound: 8.2, comfort: 8.9 },
    updatedOn: "2026-03-03",
    editorialNote:
      "The Nova 1's universal plug-and-play compatibility makes it ideal for multi-platform households that don't want a different headset per device.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=SteelSeries+Arctis+Nova+1&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── MID-RANGE ──
  {
    id: "steelseries-arctis-nova-3",
    category: "headsets",
    name: "SteelSeries Arctis Nova 3",
    priceBand: "mid",
    rank: 1,
    priceUSD: 100,
    rating: 4.5,
    confidence: "High",
    reviewCount: 9800,
    editorPick: true,
    bestFor: "Best wired mid-range gaming headset",
    pros: ["Excellent clarity and soundstage", "ClearCast bidirectional mic", "All-platform compatible"],
    cons: ["Wired only", "Less bass impact than some rivals"],
    score: { value: 9.2, reliability: 9.1, sound: 9.0, comfort: 9.1 },
    updatedOn: "2026-03-13",
    editorialNote:
      "The Nova 3 brings SteelSeries' excellent mic technology and broad soundstage into the mid-range — the best wired choice under $120.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=SteelSeries+Arctis+Nova+3&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "corsair-hs80-rgb-wireless",
    category: "headsets",
    name: "Corsair HS80 RGB Wireless",
    priceBand: "mid",
    rank: 2,
    priceUSD: 130,
    rating: 4.5,
    confidence: "High",
    reviewCount: 12100,
    editorPick: false,
    bestFor: "Wireless gaming under $130",
    pros: ["Low-latency 2.4GHz wireless", "24-hour battery life", "Dolby Atmos support"],
    cons: ["RGB adds weight", "Software required for full features"],
    score: { value: 8.9, reliability: 9.0, sound: 9.1, comfort: 8.9 },
    updatedOn: "2026-03-11",
    editorialNote:
      "The HS80 delivers reliable wireless performance at a mid-range price — Dolby Atmos integration is one of the better spatial audio implementations at this tier.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Corsair+HS80+RGB+Wireless&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "logitech-g535",
    category: "headsets",
    name: "Logitech G535 Lightspeed",
    priceBand: "mid",
    rank: 3,
    priceUSD: 100,
    rating: 4.4,
    confidence: "High",
    reviewCount: 8300,
    editorPick: false,
    bestFor: "Lightweight wireless headset under $110",
    pros: ["Featherweight 236g", "33-hour battery", "Flip-to-mute mic"],
    cons: ["No RGB", "Only compatible with PC and PS"],
    score: { value: 9.0, reliability: 8.8, sound: 8.7, comfort: 9.3 },
    updatedOn: "2026-03-09",
    editorialNote:
      "At 236g, the G535 is one of the lightest wireless headsets you can buy — ideal for users who suffer fatigue with heavier alternatives.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Logitech+G535+Lightspeed&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "razer-blackshark-v2-pro-2023",
    category: "headsets",
    name: "Razer BlackShark V2 Pro (2023)",
    priceBand: "mid",
    rank: 4,
    priceUSD: 149,
    rating: 4.5,
    confidence: "High",
    reviewCount: 7600,
    editorPick: false,
    bestFor: "Wireless headset with best-in-class mic",
    pros: ["TriForce Titanium 50mm drivers", "HyperClear Supercardioid mic", "70-hour battery"],
    cons: ["Plastic build at this price", "Large form factor"],
    score: { value: 8.7, reliability: 8.9, sound: 9.4, comfort: 8.8 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The BlackShark V2 Pro's mic quality rivals dedicated podcast microphones — if clear voice communication is your top priority in wireless, this wins.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Razer+BlackShark+V2+Pro+(2023)&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "astro-a30-wireless",
    category: "headsets",
    name: "Astro A30 Wireless",
    priceBand: "mid",
    rank: 5,
    priceUSD: 149,
    rating: 4.3,
    confidence: "Medium",
    reviewCount: 5100,
    editorPick: false,
    bestFor: "Multi-platform wireless with detachable mic",
    pros: ["Detachable boom mic", "Works on PC, PS, Xbox, and mobile", "Comfortable ear cups"],
    cons: ["Battery 24 hours only (shorter than rivals)", "Audio sometimes thin at high volume"],
    score: { value: 8.5, reliability: 8.6, sound: 8.8, comfort: 8.9 },
    updatedOn: "2026-03-07",
    editorialNote:
      "The A30's detachable mic makes it a versatile travel-to-couch option — one headset for every platform without adapters or dongles.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Astro+A30+Wireless&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },

  // ── PREMIUM ──
  {
    id: "steelseries-arctis-nova-pro-wireless",
    category: "headsets",
    name: "SteelSeries Arctis Nova Pro Wireless",
    priceBand: "premium",
    rank: 1,
    priceUSD: 249,
    rating: 4.7,
    confidence: "High",
    reviewCount: 14200,
    editorPick: true,
    bestFor: "Best overall premium gaming headset",
    pros: ["Dual wireless (2.4GHz + Bluetooth)", "Hot-swap battery dock", "Impressive active noise cancellation"],
    cons: ["Expensive", "Dock required for full features"],
    score: { value: 8.8, reliability: 9.3, sound: 9.4, comfort: 9.2 },
    updatedOn: "2026-03-14",
    editorialNote:
      "The Nova Pro Wireless sets the standard — hot-swap batteries eliminate downtime, dual wireless handles every platform, and the audio quality is genuinely excellent.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=SteelSeries+Arctis+Nova+Pro+Wireless&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "logitech-gpro-x2-lightspeed",
    category: "headsets",
    name: "Logitech G PRO X 2 Lightspeed",
    priceBand: "premium",
    rank: 2,
    priceUSD: 199,
    rating: 4.6,
    confidence: "High",
    reviewCount: 9600,
    editorPick: false,
    bestFor: "Tournament-grade wireless headset",
    pros: ["Blue VO!CE mic tech", "Excellent competitive audio staging", "50-hour battery"],
    cons: ["No ANC", "No Bluetooth"],
    score: { value: 8.9, reliability: 9.4, sound: 9.3, comfort: 9.0 },
    updatedOn: "2026-03-12",
    editorialNote:
      "Designed with pro players in mind, the G PRO X 2 prioritizes competitive audio accuracy and mic clarity over lifestyle features like ANC.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Logitech+G+PRO+X+2+Lightspeed&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "astro-a50-x",
    category: "headsets",
    name: "Astro A50 X",
    priceBand: "premium",
    rank: 3,
    priceUSD: 349,
    rating: 4.5,
    confidence: "Medium",
    reviewCount: 4800,
    editorPick: false,
    bestFor: "All-platform premium wireless with charging dock",
    pros: ["Charges via dock on PS, Xbox, or PC", "Excellent audio tuning", "Dolby Audio support"],
    cons: ["Most expensive on list", "Heavy at 380g"],
    score: { value: 7.8, reliability: 9.0, sound: 9.5, comfort: 8.7 },
    updatedOn: "2026-03-10",
    editorialNote:
      "The A50 X is the only truly all-platform premium dock headset — if you switch between PS5 and Xbox regularly, it's uniquely worth the premium.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Astro+A50+X&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "corsair-virtuoso-rgb-wireless-xt",
    category: "headsets",
    name: "Corsair Virtuoso RGB Wireless XT",
    priceBand: "premium",
    rank: 4,
    priceUSD: 199,
    rating: 4.5,
    confidence: "High",
    reviewCount: 11300,
    editorPick: false,
    bestFor: "Hi-fi quality audio in a gaming headset",
    pros: ["50mm high-density drivers", "USB-C + 3.5mm + 2.4GHz wireless", "Broadcast-grade detachable mic"],
    cons: ["Heavy for long sessions", "Slightly clinical sound signature"],
    score: { value: 8.7, reliability: 9.1, sound: 9.4, comfort: 8.6 },
    updatedOn: "2026-03-09",
    editorialNote:
      "The Virtuoso XT blurs the line between gaming headset and audiophile headphone — a strong choice if you use the same headset for music and gaming.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Corsair+Virtuoso+RGB+Wireless+XT&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  },
  {
    id: "razer-blackshark-v2-hyperspeed",
    category: "headsets",
    name: "Razer BlackShark V2 HyperSpeed",
    priceBand: "premium",
    rank: 5,
    priceUSD: 179,
    rating: 4.5,
    confidence: "Medium",
    reviewCount: 6200,
    editorPick: false,
    bestFor: "Lightweight premium wireless for PC and PS5",
    pros: ["HyperSpeed low-latency wireless", "Lightweight 261g", "Excellent mic directional rejection"],
    cons: ["PC and PlayStation only", "No ANC"],
    score: { value: 8.8, reliability: 9.0, sound: 9.2, comfort: 9.1 },
    updatedOn: "2026-03-08",
    editorialNote:
      "If you're PlayStation or PC-only and want a lightweight premium headset, the BlackShark V2 HyperSpeed is Razer's tightest value proposition at this tier.",
    affiliate: {
      retailer: "Amazon",
      url: "https://www.amazon.com/s?k=Razer+BlackShark+V2+HyperSpeed&tag=ardeevin-22",
      associateTag: "ardeevin-22"
    }
  }
];

export const rubric = [
  "Performance scores audio staging accuracy, frequency balance, surround sound quality, and competitive audio positioning.",
  "Comfort covers weight, ear pad material, clamping force, and long-session wearability.",
  "Reliability reflects connection stability, battery longevity, build durability, and mic consistency.",
  "Value weighs price against wireless capability, audio quality, mic performance, and compatibility."
];
