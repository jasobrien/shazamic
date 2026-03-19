import CategoryHub from "./CategoryHub";
import { categoryGroups } from "../data/categoryRegistry";

const personal = categoryGroups.find((g) => g.id === "personal");
const smartphones = personal ? personal.categories.find((c) => c.slug === "smartphones") : null;

function SmartphonesHub() {
  return (
    <CategoryHub
      eyebrow="Personal Electronics"
      title="Find the right smartphone, fast"
      description="We test real-world camera quality, battery performance, and long-term reliability so you can cut through the spec sheets and pick the right phone with confidence."
      basePath="/personal/smartphones"
      subcategories={smartphones ? smartphones.subcategories : []}
    />
  );
}

export default SmartphonesHub;
