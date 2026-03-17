import { useMemo, useState } from "react";
import PriceBandTabs from "../components/PriceBandTabs";
import ProductCard from "../components/ProductCard";
import { headphones, rubric } from "../data/headphones";

function HeadphonesPage() {
  const [activeBand, setActiveBand] = useState("budget");

  const visibleProducts = useMemo(
    () =>
      headphones
        .filter((item) => item.priceBand === activeBand)
        .sort((a, b) => a.rank - b.rank)
        .slice(0, 5),
    [activeBand]
  );

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Headphones</p>
        <h1>Smart comparisons, fast decisions</h1>
        <p>
          Browse dependable top-5 recommendations by price range. Every card shows scoring,
          trade-offs, and a direct Amazon purchase link.
        </p>
      </section>

      <PriceBandTabs activeBand={activeBand} onBandChange={setActiveBand} />

      <section className="list-meta">
        <p>Showing the top 5 picks in this price band, sorted by overall recommendation rank.</p>
      </section>

      <section className="product-list" aria-live="polite">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <section className="rubric">
        <h2>How this ranking works</h2>
        <ul>
          {rubric.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default HeadphonesPage;