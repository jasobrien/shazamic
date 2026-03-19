import { categoryGroups, allCategories } from "./categoryRegistry";

export { categoryGroups, allCategories };

export const electronicsCategories = allCategories.map((cat) => ({
  name: cat.name,
  description: cat.description,
  status: cat.status,
  path: cat.status === "Live" ? `${cat.groupPath}/${cat.slug}` : "",
  groupId: cat.groupId
}));

export const guideCards = [
  {
    title: "How to pick ANC headphones in 2026",
    summary: "A practical framework for balancing comfort, isolation, and call quality.",
    updatedOn: "Mar 16, 2026",
    path: "/headphones"
  },
  {
    title: "The 10-minute electronics buying checklist",
    summary: "Use this checklist before every purchase to avoid overpaying for specs.",
    updatedOn: "Mar 14, 2026",
    path: "/headphones"
  },
  {
    title: "Are premium audio codecs worth it?",
    summary: "When advanced codec support matters and when it does not.",
    updatedOn: "Mar 12, 2026",
    path: "/headphones"
  },
  {
    title: "How we verify electronics reliability",
    summary: "Our approach to long-term reliability signals and owner feedback patterns.",
    updatedOn: "Mar 11, 2026",
    path: "/headphones"
  }
];

export const dealWatch = [
  {
    name: "Sony WH-1000XM4",
    note: "Frequently drops below $250 during major Amazon events.",
    urgency: "Watch closely"
  },
  {
    name: "Soundcore Space One",
    note: "Best value tier when priced near $99.",
    urgency: "Top value"
  },
  {
    name: "Bose QuietComfort",
    note: "Excellent comfort buy if sale reaches the low-$200 range.",
    urgency: "Good buy"
  },
  {
    name: "Sony WH-1000XM5",
    note: "Premium benchmark when discounts land near $329.",
    urgency: "Premium deal"
  }
];

export const newsroomCards = [
  {
    title: "Monthly refresh complete",
    detail: "All headphone top-5 lists were re-scored for price changes and stock stability."
  },
  {
    title: "Methodology update",
    detail: "Reliability weighting now factors recurring battery degradation complaints."
  },
  {
    title: "Affiliate transparency",
    detail: "Every purchase CTA now includes adjacent commission disclosure text."
  },
  {
    title: "Next category in progress",
    detail: "Smartphone comparisons are being prepared with battery and camera-first scoring."
  },
  {
    title: "Data quality pass",
    detail: "Confidence labels were reviewed to reduce overconfident recommendations."
  },
  {
    title: "Price volatility watch",
    detail: "Premium-tier cards now include stronger guidance around sale timing."
  }
];