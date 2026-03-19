/**
 * Master registry for all electronics categories grouped by area.
 * Single source of truth consumed by navigation, routing, hubs, and Hero search.
 *
 * Structure: Group → Category → Subcategory (optional)
 *   - Groups appear as top-level nav items (MegaMenu triggers, GroupHub pages).
 *   - Categories appear inside each group (MegaMenu cards, GroupHub grid).
 *   - Subcategories hold per-product-page data (products, priceBands, rubric).
 *   - "Leaf" categories (no subcategories) carry data directly and route to SubcategoryPage.
 *
 * Visibility is controlled by src/config/featureFlags.js.
 */

import { featureFlags } from "../config/featureFlags";

// ── Headphones ──
import { overEar, PRICE_BANDS as overEarBands, rubric as overEarRubric } from "./overEar";
import { inEar, PRICE_BANDS as inEarBands, rubric as inEarRubric } from "./inEar";
import { onEar, PRICE_BANDS as onEarBands, rubric as onEarRubric } from "./onEar";
import { sports, PRICE_BANDS as sportsBands, rubric as sportsRubric } from "./sports";

// ── Smartphones ──
import { smartphonesAndroid, PRICE_BANDS as androidBands, rubric as androidRubric } from "./personal/smartphonesAndroid";
import { smartphonesIphone, PRICE_BANDS as iphoneBands, rubric as iphoneRubric } from "./personal/smartphonesIphone";

// ── Laptops ──
import { laptopsWindows, PRICE_BANDS as windowsBands, rubric as windowsRubric } from "./personal/laptopsWindows";
import { laptopsMacBook, PRICE_BANDS as macbookBands, rubric as macbookRubric } from "./personal/laptopsMacBook";

// ── Gaming Gear ──
import { gamingHeadsets, PRICE_BANDS as headsetBands, rubric as headsetRubric } from "./personal/gamingHeadsets";
import { gamingControllers, PRICE_BANDS as controllerBands, rubric as controllerRubric } from "./personal/gamingControllers";

// ── Kitchen ──
import { coffeeMakers, PRICE_BANDS as coffeeBands, rubric as coffeeRubric } from "./kitchen/coffeeMakers";
import { airFryers, PRICE_BANDS as fryerBands, rubric as fryerRubric } from "./kitchen/airFryers";
import { blenders, PRICE_BANDS as blenderBands, rubric as blenderRubric } from "./kitchen/blenders";

// ── Home Entertainment ──
import { tvs55, PRICE_BANDS as tvs55Bands, rubric as tvs55Rubric } from "./commonAreas/tvs55";
import { tvs65, PRICE_BANDS as tvs65Bands, rubric as tvs65Rubric } from "./commonAreas/tvs65";
import { tvs75, PRICE_BANDS as tvs75Bands, rubric as tvs75Rubric } from "./commonAreas/tvs75";
import { soundbars, PRICE_BANDS as soundbarBands, rubric as soundbarRubric } from "./commonAreas/soundbars";

// ── Smart Home & Security ──
import { doorbells, PRICE_BANDS as doorbellBands, rubric as doorbellRubric } from "./commonAreas/doorbells";
import { smartLocks, PRICE_BANDS as lockBands, rubric as lockRubric } from "./commonAreas/smartLocks";
import { homeCameras, PRICE_BANDS as cameraBands, rubric as cameraRubric } from "./commonAreas/homeCameras";
import { smartHome, PRICE_BANDS as smartHomeBands, rubric as smartHomeRubric } from "./commonAreas/smartHome";
import { robotVacuums, PRICE_BANDS as vacuumBands, rubric as vacuumRubric } from "./commonAreas/robotVacuums";

/* ───────────────────────── Group → Category → Subcategory tree ───────────────────────── */

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
        status: "Live",
        scoreLabels: ["Value", "Reliability", "Sound", "Comfort"],
        subcategories: [
          { slug: "over-ear", name: "Over-Ear Headphones", description: "Full-size headphones with the best noise cancellation, comfort, and sound stage.", status: "Live", products: overEar, priceBands: overEarBands, rubric: overEarRubric },
          { slug: "in-ear", name: "In-Ear Earbuds", description: "True wireless earbuds for commuting, calls, and everyday listening.", status: "Live", products: inEar, priceBands: inEarBands, rubric: inEarRubric },
          { slug: "on-ear", name: "On-Ear Headphones", description: "Compact, portable headphones that sit on the ear — lighter than over-ear.", status: "Live", products: onEar, priceBands: onEarBands, rubric: onEarRubric },
          { slug: "sports", name: "Sports & Active", description: "Sweat-proof, waterproof picks for running, swimming, and gym workouts.", status: "Live", products: sports, priceBands: sportsBands, rubric: sportsRubric },
        ],
      },
      {
        slug: "smartphones",
        name: "Smartphones",
        description: "Best camera phones, battery champs, and flagship alternatives by budget.",
        status: "Live",
        scoreLabels: ["Value", "Reliability", "Camera", "Battery"],
        subcategories: [
          { slug: "android", name: "Android Phones", description: "The best Android phones from Google, Samsung, OnePlus, and more — ranked by camera, battery, and value.", status: "Live", products: smartphonesAndroid, priceBands: androidBands, rubric: androidRubric },
          { slug: "iphone", name: "iPhones", description: "Every current iPhone model across Standard, Pro, and Pro Max tiers — ranked by real-world performance and value.", status: "Live", products: smartphonesIphone, priceBands: iphoneBands, rubric: iphoneRubric },
        ],
      },
      {
        slug: "laptops",
        name: "Laptops",
        description: "Portable workhorses, creator laptops, and student picks with clear trade-offs.",
        status: "Live",
        scoreLabels: ["Value", "Reliability", "Performance", "Portability"],
        subcategories: [
          { slug: "windows", name: "Windows Laptops", description: "Budget workhorses to premium ultrabooks — the best Windows laptops ranked on real-world speed and build quality.", status: "Live", products: laptopsWindows, priceBands: windowsBands, rubric: windowsRubric },
          { slug: "macbook", name: "MacBooks", description: "Every MacBook Air and Pro configuration ranked on performance, portability, and value for money.", status: "Live", products: laptopsMacBook, priceBands: macbookBands, rubric: macbookRubric },
        ],
      },
      {
        slug: "gaming-gear",
        name: "Gaming Gear",
        description: "Controllers, gaming headsets, and performance accessories for console and PC.",
        status: "Live",
        scoreLabels: ["Value", "Reliability", "Performance", "Comfort"],
        subcategories: [
          { slug: "headsets", name: "Gaming Headsets", description: "Wired and wireless gaming headsets ranked on audio accuracy, mic clarity, and comfort for long sessions.", status: "Live", products: gamingHeadsets, priceBands: headsetBands, rubric: headsetRubric },
          { slug: "controllers", name: "Controllers", description: "Budget, mid-range, and premium controllers for PC, PlayStation, Xbox, and Nintendo Switch.", status: "Live", products: gamingControllers, priceBands: controllerBands, rubric: controllerRubric },
        ],
      },
    ],
  },
  {
    id: "kitchen",
    label: "Kitchen Appliances",
    path: "/kitchen",
    description: "Appliances and gadgets that make cooking, brewing, and meal prep easier.",
    categories: [
      { slug: "coffee-makers", name: "Coffee Makers", description: "Drip, espresso, and pod machines ranked by brew quality and daily convenience.", status: "Live", products: coffeeMakers, priceBands: coffeeBands, rubric: coffeeRubric, scoreLabels: ["Value", "Reliability", "Brew Quality", "Ease of Use"] },
      { slug: "air-fryers", name: "Air Fryers", description: "Basket, oven-style, and dual-zone air fryers compared on capacity and results.", status: "Live", products: airFryers, priceBands: fryerBands, rubric: fryerRubric, scoreLabels: ["Value", "Reliability", "Performance", "Ease of Use"] },
      { slug: "blenders", name: "Blenders", description: "Personal, countertop, and immersion blenders for smoothies, soups, and sauces.", status: "Live", products: blenders, priceBands: blenderBands, rubric: blenderRubric, scoreLabels: ["Value", "Reliability", "Performance", "Ease of Use"] },
    ],
  },
  {
    id: "entertainment",
    label: "Home Entertainment",
    path: "/entertainment",
    description: "TVs, soundbars, and home theater upgrades for every room.",
    categories: [
      {
        slug: "tvs",
        name: "TVs & Streaming",
        description: "OLED, mini-LED, and value 4K options with viewing-use recommendations.",
        status: "Live",
        scoreLabels: ["Value", "Reliability", "Picture Quality", "Smart Features"],
        subcategories: [
          { slug: "55-inch", name: "55\" TVs", description: "The most popular TV size — 55-inch models ranked by picture quality, smart features, and value.", status: "Live", products: tvs55, priceBands: tvs55Bands, rubric: tvs55Rubric },
          { slug: "65-inch", name: "65\" TVs", description: "Large-screen 65-inch TVs for living rooms — ranked on picture quality, HDR, and viewing angles.", status: "Live", products: tvs65, priceBands: tvs65Bands, rubric: tvs65Rubric },
          { slug: "75-inch-plus", name: "75\"+ TVs", description: "Extra-large screens 75 inches and up for dedicated home theaters and big rooms.", status: "Live", products: tvs75, priceBands: tvs75Bands, rubric: tvs75Rubric },
        ],
      },
      { slug: "soundbars", name: "Soundbars", description: "All-in-one and system soundbars for TV audio upgrades in any room size.", status: "Live", products: soundbars, priceBands: soundbarBands, rubric: soundbarRubric, scoreLabels: ["Value", "Reliability", "Sound Quality", "Features"] },
    ],
  },
  {
    id: "smart-home",
    label: "Smart Home & Security",
    path: "/smart-home",
    description: "Smart home devices and security products for modern living.",
    categories: [
      { slug: "doorbells", name: "Video Doorbells", description: "Wired and battery video doorbells ranked by detection accuracy, video quality, and subscription value.", status: "Live", products: doorbells, priceBands: doorbellBands, rubric: doorbellRubric, scoreLabels: ["Value", "Reliability", "Video Quality", "Features"] },
      { slug: "smart-locks", name: "Smart Locks", description: "Keypad, fingerprint, and app-controlled deadbolts ranked by security grade and ease of use.", status: "Live", products: smartLocks, priceBands: lockBands, rubric: lockRubric, scoreLabels: ["Value", "Reliability", "Security", "Ease of Use"] },
      { slug: "home-cameras", name: "Home Security Cameras", description: "Indoor and outdoor security cameras ranked by video clarity, AI detection, and total cost of ownership.", status: "Live", products: homeCameras, priceBands: cameraBands, rubric: cameraRubric, scoreLabels: ["Value", "Reliability", "Video Quality", "Features"] },
      { slug: "smart-home-devices", name: "Smart Home Devices", description: "Smart speakers, displays, and home automation picks that actually work.", status: "Live", products: smartHome, priceBands: smartHomeBands, rubric: smartHomeRubric, scoreLabels: ["Value", "Reliability", "Features", "Ease of Use"] },
      { slug: "robot-vacuums", name: "Robot Vacuums", description: "Self-navigating vacuums and mops ranked by cleaning power and smart mapping.", status: "Live", products: robotVacuums, priceBands: vacuumBands, rubric: vacuumRubric, scoreLabels: ["Value", "Reliability", "Cleaning Power", "Navigation"] },
    ],
  },
];

/* ───────────────────────── Filtered exports ───────────────────────── */

/**
 * Filtered groups — only include groups and categories enabled in featureFlags.
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

/** Flat list of every visible category with group metadata attached. */
export const allCategories = categoryGroups.flatMap((group) =>
  group.categories.map((cat) => ({ ...cat, groupId: group.id, groupPath: group.path, groupLabel: group.label }))
);

/**
 * Flat list of every routable product page.
 * - For categories WITH subcategories: one entry per subcategory.
 * - For leaf categories (no subcategories): one entry for the category itself.
 * Each entry carries the full path and all data needed by SubcategoryPage.
 */
export const allSubcategories = categoryGroups.flatMap((group) =>
  group.categories.flatMap((cat) => {
    if (cat.subcategories && cat.subcategories.length > 0) {
      return cat.subcategories.map((sub) => ({
        ...sub,
        scoreLabels: sub.scoreLabels || cat.scoreLabels,
        groupId: group.id,
        groupPath: group.path,
        groupLabel: group.label,
        categorySlug: cat.slug,
        categoryName: cat.name,
        path: `${group.path}/${cat.slug}/${sub.slug}`,
      }));
    }
    // Leaf category — routable directly
    return [{
      slug: cat.slug,
      name: cat.name,
      description: cat.description,
      status: cat.status,
      products: cat.products,
      priceBands: cat.priceBands,
      rubric: cat.rubric,
      scoreLabels: cat.scoreLabels,
      groupId: group.id,
      groupPath: group.path,
      groupLabel: group.label,
      categorySlug: null,
      categoryName: null,
      path: `${group.path}/${cat.slug}`,
    }];
  })
);
