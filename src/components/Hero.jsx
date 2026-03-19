import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { allCategories } from "../data/categoryRegistry";

const productAreas = allCategories.map((cat) => ({
  name: cat.name,
  description: cat.description,
  audience: cat.audience,
  path: cat.status === "Live" ? `${cat.groupPath}/${cat.slug}` : "",
  status: cat.status === "Live" ? "Live now" : cat.status === "Coming soon" ? "Next up" : "Roadmap"
}));

const spotlightProducts = [
  {
    name: "Sony WH-1000XM5",
    range: "Premium audio",
    detail: "$328 | reliability-first flagship",
    path: "/personal/headphones"
  },
  {
    name: "Sony WH-1000XM4",
    range: "Mid-range audio",
    detail: "$248 | strongest value-to-performance ratio",
    path: "/personal/headphones"
  },
  {
    name: "Soundcore Space One",
    range: "Budget audio",
    detail: "$99 | best sub-$100 ANC pick",
    path: "/personal/headphones"
  },
  {
    name: "Bose QuietComfort",
    range: "Comfort pick",
    detail: "$229 | top long-session comfort",
    path: "/personal/headphones"
  },
  {
    name: "Best Coffee Makers 2026",
    range: "Kitchen",
    detail: "Drip, espresso, and pod picks",
    path: ""
  },
  {
    name: "Best 4K TVs Under $1,000",
    range: "Common Areas",
    detail: "Panel quality and brightness ranking",
    path: ""
  }
];

function Hero() {
  const [query, setQuery] = useState("");

  const filteredAreas = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return productAreas;
    }

    return productAreas.filter((area) =>
      `${area.name} ${area.description} ${area.audience}`.toLowerCase().includes(search)
    );
  }, [query]);

  const featuredProducts = useMemo(() => spotlightProducts, []);

  return (
    <section className="hero hero-search">
      <div className="hero-search-layout">
        <div className="search-panel">
          <p className="eyebrow">Search product areas instantly</p>
          <h1>Find your category, then jump straight to the best picks</h1>
          <p className="hero-copy">
            Search across product areas and move directly into evidence-based top-5
            recommendations in customer electronics, with transparent Amazon links.
          </p>

          <div className="search-shell">
            <label htmlFor="area-search">Search:</label>
            <input
              id="area-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try headphones, laptops, office, coffee"
              aria-label="Search product areas"
            />
          </div>

          <div className="area-grid">
            {filteredAreas.map((area) => (
              <article key={area.name} className="area-card">
                <p className="area-status">{area.status}</p>
                <h3>{area.name}</h3>
                <p>{area.description}</p>
                <p className="area-audience">Best for: {area.audience}</p>
                {area.path ? (
                  <Link className="area-link" to={area.path}>
                    View picks
                  </Link>
                ) : (
                  <span className="area-link is-disabled">Launching soon</span>
                )}
              </article>
            ))}
          </div>

          {filteredAreas.length === 0 ? (
            <p className="no-results">No product area matched your search yet.</p>
          ) : null}
        </div>

        <aside className="entice-panel" aria-label="Popular products">
          <p className="eyebrow">Highly desirable products</p>
          <h2>Most searched electronics this week</h2>
          <div className="entice-grid">
            {featuredProducts.map((product) => (
              <article className="entice-card" key={product.name}>
                <p className="entice-band">{product.range}</p>
                <h3>{product.name}</h3>
                <p>{product.detail}</p>
                {product.path ? (
                  <Link className="area-link" to={product.path}>
                    Explore now
                  </Link>
                ) : (
                  <span className="area-link is-disabled">Coming soon</span>
                )}
              </article>
            ))}
          </div>
          <Link className="btn btn-primary entice-cta" to="/personal/headphones">
            Explore all headphone comparisons
          </Link>
        </aside>
      </div>
    </section>
  );
}

export default Hero;