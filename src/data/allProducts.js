/**
 * Aggregates all live product arrays into a single flat list.
 * Built automatically from the category registry so paths stay in sync.
 */

import { allSubcategories } from "./categoryRegistry";

export const allProducts = allSubcategories
  .filter((sub) => sub.products && sub.products.length > 0)
  .flatMap((sub) =>
    sub.products.map((p) => ({ ...p, path: sub.path, listName: sub.name }))
  );
