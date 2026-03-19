/**
 * Feature flags — control which menu groups and categories are visible
 * across the entire site (navigation, homepage, hero search, hub pages).
 *
 * Setting a group to false hides it entirely.
 * Setting a category to false hides it within its group.
 * Individual subcategories inherit their category's visibility.
 */

export const featureFlags = {
  groups: {
    personal: true,
    kitchen: true,
    entertainment: true,
    "smart-home": true,
  },

  categories: {
    personal: {
      headphones: true,
      smartphones: true,
      laptops: true,
      "gaming-gear": true,
    },
    kitchen: {
      "coffee-makers": true,
      "air-fryers": true,
      blenders: true,
    },
    entertainment: {
      tvs: true,
      soundbars: true,
    },
    "smart-home": {
      doorbells: true,
      "smart-locks": true,
      "home-cameras": true,
      "smart-home-devices": true,
      "robot-vacuums": true,
    },
  },
};
