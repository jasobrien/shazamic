import { Link } from "react-router-dom";
import { categoryGroups } from "../data/categoryRegistry";

function CategoryHub({ groupId, categorySlug }) {
  const group = categoryGroups.find((g) => g.id === groupId);
  const category = group?.categories.find((c) => c.slug === categorySlug);

  if (!group || !category) return null;

  const basePath = `${group.path}/${category.slug}`;

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">{group.label}</p>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </section>

      <div className="subcategory-grid">
        {(category.subcategories || []).map((sub) => {
          const isLive = sub.status === "Live";
          const Tag = isLive ? Link : "div";
          const linkProps = isLive ? { to: `${basePath}/${sub.slug}` } : {};

          return (
            <Tag
              key={sub.slug}
              className={`subcategory-card${isLive ? "" : " is-disabled"}`}
              {...linkProps}
            >
              <h2>{sub.name}</h2>
              <p>{sub.description}</p>
              <span className="subcategory-cta">
                {isLive ? "Browse picks →" : "Launching soon"}
              </span>
            </Tag>
          );
        })}
      </div>
    </main>
  );
}

export default CategoryHub;
