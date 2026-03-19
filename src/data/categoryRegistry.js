/**
 * Master registry for all electronics categories grouped by area.
 * Single source of truth consumed by navigation, routing, hubs, and Hero search.
 * Visibility is controlled by src/config/featureFlags.js.
 */

import { featureFlags } from "../config/featureFlags";

const _allGroups = [
  {
    id: "personal",
    label: "Personal Electronics",
    path: "/personal",
    description: "Portable tech you carry every day — audio, phones, laptops, and wearables.",
    categories: [
      {
        slug: "headphones",
        name: "Headphones & Earbuds",
        description: "ANC, workout, travel, and office audio picks ranked by value and reliability.",
        audience: "Commuters, students, remote workers",
        status: "Live",
        cadence: "Updated every 30 days",
        scoreLabels: ["Value", "Reliability", "Sound", "Comfort"],
        subcategories: [
          { slug: "over-ear", title: "Over-Ear", description: "Full-size headphones with the best noise cancellation, comfort, and sound stage.", status: "Live" },
          { slug: "in-ear", title: "In-Ear", description: "True wireless earbuds for commuting, calls, and everyday listening.", status: "Live" },
          { slug: "on-ear", title: "On-Ear", description: "Compact, portable headphones that sit on the ear — lighter than over-ear.", status: "Live" },
          { slug: "sports", title: "Sports & Active", description: "Sweat-proof, waterproof picks for running, swimming, and gym workouts.", status: "Live" }
        ]
      },
      {
        slug: "smartphones",
        name: "Smartphones",
        description: "Best camera phones, battery champs, and flagship alternatives by budget.",
        audience: "Everyday buyers, power users",
        status: "Live",
        cadence: "Updated every 30 days",
        scoreLabels: ["Value", "Reliability", "Camera", "Battery"],
        subcategories: [
          { slug: "android", title: "Android Phones", description: "The best Android phones from Google, Samsung, OnePlus, and more — ranked by camera, battery, and value.", status: "Live" },
          { slug: "iphone", title: "iPhones", description: "Every current iPhone model across Standard, Pro, and Pro Max tiers — ranked by real-world performance and value.", status: "Live" }
        ]
      },
      {
        slug: "laptops",
        name: "Laptops",
        description: "Portable workhorses, creator laptops, and student picks with clear trade-offs.",
        audience: "Students, creators, professionals",
        status: "Live",
        cadence: "Updated every 30 days",
        scoreLabels: ["Value", "Reliability", "Performance", "Portability"],
        subcategories: [
          { slug: "windows", title: "Windows Laptops", description: "Budget workhorses to premium ultrabooks — the best Windows laptops ranked on real-world speed and build quality.", status: "Live" },
          { slug: "macbook", title: "MacBooks", description: "Every MacBook Air and Pro configuration ranked on performance, portability, and value for money.", status: "Live" }
        ]
      },
      {
        slug: "gaming-gear",
        name: "Gaming Gear",
        description: "Controllers, gaming headsets, and performance accessories for console and PC.",
        audience: "Console and PC gamers",
        status: "Live",
        cadence: "Updated every 30 days",
        scoreLabels: ["Value", "Reliability", "Performance", "Comfort"],
        subcategories: [
          { slug: "headsets", title: "Gaming Headsets", description: "Wired and wireless gaming headsets ranked on audio accuracy, mic clarity, and comfort for long sessions.", status: "Live" },
          { slug: "controllers", title: "Controllers", description: "Budget, mid-range, and premium controllers for PC, PlayStation, Xbox, and Nintendo Switch.", status: "Live" }
        ]
      }
    ]
  },
  {
    id: "kitchen",
    label: "Kitchen Electronics",
    path: "/kitchen",
    description: "Appliances and gadgets that make cooking, brewing, and meal prep easier.",
    categories: [
      {
        slug: "coffee-makers",
        name: "Coffee Makers",
        description: "Drip, espresso, and pod machines ranked by brew quality and daily convenience.",
        audience: "Home baristas, busy households",
        status: "Coming soon",
        cadence: "Roadmap Q3",
        scoreLabels: ["Value", "Reliability", "Brew Quality", "Ease of Use"],
        subcategories: [
          { slug: "drip", title: "Drip", description: "Classic batch-brew machines for everyday coffee.", status: "Coming soon" },
          { slug: "espresso", title: "Espresso", description: "Semi-auto and automatic machines for café-quality shots at home.", status: "Coming soon" },
          { slug: "pod", title: "Pod & Capsule", description: "Single-serve convenience with minimal cleanup.", status: "Coming soon" }
        ]
      },
      {
        slug: "air-fryers",
        name: "Air Fryers",
        description: "Basket, oven-style, and dual-zone air fryers compared on capacity and results.",
        audience: "Health-conscious cooks, families",
        status: "Coming soon",
        cadence: "Roadmap Q3",
        scoreLabels: ["Value", "Reliability", "Performance", "Ease of Use"],
        subcategories: [
          { slug: "basket", title: "Basket", description: "Compact countertop fryers for quick meals and snacks.", status: "Coming soon" },
          { slug: "oven-style", title: "Oven-Style", description: "Larger capacity toaster-oven hybrids that air fry, bake, and broil.", status: "Coming soon" }
        ]
      },
      {
        slug: "blenders",
        name: "Blenders",
        description: "Personal, countertop, and immersion blenders for smoothies, soups, and sauces.",
        audience: "Smoothie lovers, home cooks",
        status: "Coming soon",
        cadence: "Roadmap Q3",
        scoreLabels: ["Value", "Reliability", "Performance", "Ease of Use"],
        subcategories: []
      }
    ]
  },
  {
    id: "common",
    label: "Common Areas",
    path: "/common",
    description: "Living room, office, and whole-home electronics that everyone benefits from.",
    categories: [
      {
        slug: "tvs",
        name: "TVs & Streaming",
        description: "OLED, mini-LED, and value 4K options with viewing-use recommendations.",
        audience: "Home theater buyers, families",
        status: "Coming soon",
        cadence: "Roadmap Q2",
        scoreLabels: ["Value", "Reliability", "Picture Quality", "Smart Features"],
        subcategories: [
          { slug: "oled", title: "OLED", description: "Best contrast and color for movie lovers and dark-room viewing.", status: "Coming soon" },
          { slug: "mini-led", title: "Mini-LED", description: "Bright, high-contrast panels for varied lighting conditions.", status: "Coming soon" },
          { slug: "budget-4k", title: "Budget 4K", description: "Solid picture quality without breaking the bank.", status: "Coming soon" }
        ]
      },
      {
        slug: "smart-home",
        name: "Smart Home Devices",
        description: "Security cams, smart speakers, and home automation picks that actually work.",
        audience: "Apartment and family homes",
        status: "Coming soon",
        cadence: "Roadmap Q3",
        scoreLabels: ["Value", "Reliability", "Features", "Ease of Use"],
        subcategories: [
          { slug: "speakers", title: "Smart Speakers", description: "Voice assistants and music playback for any room.", status: "Coming soon" },
          { slug: "security-cams", title: "Security Cameras", description: "Indoor and outdoor cameras with reliable cloud and local storage.", status: "Coming soon" }
        ]
      },
      {
        slug: "robot-vacuums",
        name: "Robot Vacuums",
        description: "Self-navigating vacuums and mops ranked by cleaning power and smart mapping.",
        audience: "Busy households, pet owners",
        status: "Coming soon",
        cadence: "Roadmap Q3",
        scoreLabels: ["Value", "Reliability", "Cleaning Power", "Navigation"],
        subcategories: []
      },
      {
        slug: "soundbars",
        name: "Soundbars",
        description: "All-in-one and system soundbars for TV audio upgrades in any room size.",
        audience: "Home theater starters, renters",
        status: "Coming soon",
        cadence: "Roadmap Q3",
        scoreLabels: ["Value", "Reliability", "Sound Quality", "Features"],
        subcategories: []
      }
    ]
  }
];

/**
 * Filtered exports — only include groups and categories enabled in featureFlags.
 * All site components consume these, so toggling a flag takes effect everywhere.
 */
export const categoryGroups = _allGroups
  .filter((group) => featureFlags.groups[group.id] !== false)
  .map((group) => ({
    ...group,
    categories: group.categories.filter(
      (cat) => featureFlags.categories[group.id]?.[cat.slug] !== false
    ),
  }))
  .filter((group) => group.categories.length > 0);

/** Flat list of every visible category across all enabled groups. */
export const allCategories = categoryGroups.flatMap((group) =>
  group.categories.map((cat) => ({ ...cat, groupId: group.id, groupPath: group.path }))
);
