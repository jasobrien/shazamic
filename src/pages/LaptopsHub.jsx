import CategoryHub from "./CategoryHub";
import { categoryGroups } from "../data/categoryRegistry";

const personal = categoryGroups.find((g) => g.id === "personal");
const laptops = personal ? personal.categories.find((c) => c.slug === "laptops") : null;

function LaptopsHub() {
  return (
    <CategoryHub
      eyebrow="Personal Electronics"
      title="Find the right laptop, fast"
      description="Whether you need a light travel machine, a silent productivity workhorse, or a high-performance creative rig, our picks are ranked on real-world performance, portability, and long-term reliability."
      basePath="/personal/laptops"
      subcategories={laptops ? laptops.subcategories : []}
    />
  );
}

export default LaptopsHub;
