import { Link } from "react-router-dom";
import { categoryGroups } from "../data/categoryRegistry";

function GroupHub({ groupId }) {
  const group = categoryGroups.find((g) => g.id === groupId);

  if (!group) return null;

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">{group.label}</p>
        <h1>{group.label}</h1>
        <p>{group.description}</p>
      </section>

      <div className="subcategory-grid">
        {group.categories.map((cat) => {
          const isLive = cat.status === "Live";
          const Tag = isLive ? Link : "div";
          const linkProps = isLive ? { to: `${group.path}/${cat.slug}` } : {};

          return (
            <Tag
              key={cat.slug}
              className={`subcategory-card${isLive ? "" : " is-disabled"}`}
              {...linkProps}
            >
              <p className="subcategory-status">{cat.status}</p>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
              <p className="electronics-cadence">{cat.cadence}</p>
              <span className="subcategory-cta">
                {isLive ? "Browse categories →" : "Launching soon"}
              </span>
            </Tag>
          );
        })}
      </div>
    </main>
  );
}

export default GroupHub;
