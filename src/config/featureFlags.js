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
    common: true,
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
    common: {
      tvs: true,
      "smart-home": true,
      "robot-vacuums": true,
      soundbars: true,
      doorbells: true,
      "smart-locks": true,
      "home-cameras": true,
    },
  },
};
