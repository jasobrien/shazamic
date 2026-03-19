import CategoryHub from "./CategoryHub";
import { categoryGroups } from "../data/categoryRegistry";

const personal = categoryGroups.find((g) => g.id === "personal");
const headphones = personal.categories.find((c) => c.slug === "headphones");

function HeadphonesHub() {
  return (
    <CategoryHub
      eyebrow="Personal Electronics"
      title="Find the right headphones, fast"
      description="Browse by style — each subcategory has top-5 picks across budget, mid-range, and premium price bands with transparent scoring and Amazon purchase links."
      basePath="/personal/headphones"
      subcategories={headphones.subcategories}
    />
  );
}

export default HeadphonesHub;
