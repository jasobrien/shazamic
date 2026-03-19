import { Link } from "react-router-dom";

function CategoryHub({ eyebrow, title, description, basePath, subcategories }) {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      <div className="subcategory-grid">
        {subcategories.map((sub) => {
          const isLive = sub.status === "Live";
          const Tag = isLive ? Link : "div";
          const linkProps = isLive ? { to: `${basePath}/${sub.slug}` } : {};

          return (
            <Tag
              key={sub.slug}
              className={`subcategory-card${isLive ? "" : " is-disabled"}`}
              {...linkProps}
            >
              <p className="subcategory-status">{sub.status}</p>
              <h2>{sub.title}</h2>
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
