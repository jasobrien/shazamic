import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import {
  dealWatch,
  electronicsCategories,
  guideCards,
  newsroomCards
} from "../data/electronicsHome";

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />

      <section className="electronics-section">
        <div className="section-headline">
          <p className="eyebrow">Customer Electronics Hub</p>
          <h2>Browse high-intent electronics categories</h2>
          <p>
            Every category follows the same top-5 framework: clear scoring, practical trade-offs,
            and transparent affiliate links.
          </p>
        </div>

        <div className="electronics-grid">
          {electronicsCategories.map((item) => (
            <article key={item.name} className="electronics-card">
              <p className="electronics-status">{item.status}</p>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="electronics-cadence">{item.cadence}</p>
              {item.path ? (
                <Link className="area-link" to={item.path}>
                  View category
                </Link>
              ) : (
                <span className="area-link is-disabled">Launching soon</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="content-columns">
        <article className="content-column">
          <div className="column-head">
            <p className="eyebrow">Buying Guides</p>
            <h2>Fresh editorial guidance</h2>
          </div>
          <div className="stacked-list">
            {guideCards.map((guide) => (
              <Link className="stacked-card" key={guide.title} to={guide.path}>
                <h3>{guide.title}</h3>
                <p>{guide.summary}</p>
                <p className="stacked-meta">Updated: {guide.updatedOn}</p>
              </Link>
            ))}
          </div>
        </article>

        <article className="content-column">
          <div className="column-head">
            <p className="eyebrow">Deal Watch</p>
            <h2>High-demand electronics to monitor</h2>
          </div>
          <div className="stacked-list">
            {dealWatch.map((item) => (
              <article className="stacked-card" key={item.name}>
                <p className="deal-urgency">{item.urgency}</p>
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="newsroom-section">
        <div className="section-headline">
          <p className="eyebrow">Live Updates</p>
          <h2>Recent changes across recommendations</h2>
        </div>
        <div className="newsroom-grid">
          {newsroomCards.map((item) => (
            <article key={item.title} className="newsroom-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;