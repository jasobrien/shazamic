import { Link } from "react-router-dom";

const subcategories = [
  {
    slug: "over-ear",
    title: "Over-Ear",
    description: "Full-size headphones with the best noise cancellation, comfort, and sound stage.",
    status: "Live"
  },
  {
    slug: "in-ear",
    title: "In-Ear",
    description: "True wireless earbuds for commuting, calls, and everyday listening.",
    status: "Live"
  },
  {
    slug: "on-ear",
    title: "On-Ear",
    description: "Compact, portable headphones that sit on the ear — lighter than over-ear.",
    status: "Live"
  },
  {
    slug: "sports",
    title: "Sports & Active",
    description: "Sweat-proof, waterproof picks for running, swimming, and gym workouts.",
    status: "Live"
  }
];

function HeadphonesHub() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Headphones</p>
        <h1>Find the right headphones, fast</h1>
        <p>
          Browse by style — each subcategory has top-5 picks across budget, mid-range, and premium
          price bands with transparent scoring and Amazon purchase links.
        </p>
      </section>

      <div className="subcategory-grid">
        {subcategories.map((sub) => (
          <Link
            to={`/headphones/${sub.slug}`}
            key={sub.slug}
            className="subcategory-card"
          >
            <p className="subcategory-status">{sub.status}</p>
            <h2>{sub.title}</h2>
            <p>{sub.description}</p>
            <span className="subcategory-cta">Browse picks →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default HeadphonesHub;
