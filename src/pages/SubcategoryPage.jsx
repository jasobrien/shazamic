import { useMemo, useState } from "react";
import PriceBandTabs from "../components/PriceBandTabs";
import ProductCard from "../components/ProductCard";

function SubcategoryPage({ title, description, products = [], priceBands = [], rubric = [], eyebrow, scoreLabels }) {
  const [activeBand, setActiveBand] = useState(priceBands[0]?.id || "budget");

  const visibleProducts = useMemo(
    () =>
      products
        .filter((item) => item.priceBand === activeBand)
        .sort((a, b) => a.rank - b.rank)
        .slice(0, 5),
    [activeBand, products]
  );

  if (!products.length) {
    return (
      <main>
        <section className="page-hero">
          <p className="eyebrow">{eyebrow || "Products"}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </section>
        <section className="coming-soon">
          <p>Product rankings are coming soon. Check back shortly.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">{eyebrow || "Products"}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      <div className="band-row">
        <PriceBandTabs
          bands={priceBands}
          activeBand={activeBand}
          onBandChange={setActiveBand}
        />
        <span className="band-meta">Showing the top 5 picks in this price band, sorted by overall recommendation rank.</span>
      </div>

      <section className="product-list" aria-live="polite">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} scoreLabels={scoreLabels} />
        ))}
      </section>

      {rubric.length > 0 && (
        <section className="rubric">
          <h2>How this ranking works</h2>
          <ul>
            {rubric.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

export default SubcategoryPage;
