import CategoryHub from "./CategoryHub";
import { categoryGroups } from "../data/categoryRegistry";

const personal = categoryGroups.find((g) => g.id === "personal");
const gamingGear = personal ? personal.categories.find((c) => c.slug === "gaming-gear") : null;

function GamingGearHub() {
  return (
    <CategoryHub
      eyebrow="Personal Electronics"
      title="Find the right gaming gear, fast"
      description="From tournament-grade headsets to precision controllers, our rankings cut through the marketing and focus on what actually matters: audio quality, input feel, and build reliability."
      basePath="/personal/gaming-gear"
      subcategories={gamingGear ? gamingGear.subcategories : []}
    />
  );
}

export default GamingGearHub;
