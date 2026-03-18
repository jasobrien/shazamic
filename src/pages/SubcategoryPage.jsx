import { useMemo, useState } from "react";
import PriceBandTabs from "../components/PriceBandTabs";
import ProductCard from "../components/ProductCard";

function SubcategoryPage({ title, description, products, priceBands, rubric }) {
  const [activeBand, setActiveBand] = useState(priceBands[0].id);

  const visibleProducts = useMemo(
    () =>
      products
        .filter((item) => item.priceBand === activeBand)
        .sort((a, b) => a.rank - b.rank)
        .slice(0, 5),
    [activeBand, products]
  );

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Headphones</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      <PriceBandTabs
        bands={priceBands}
        activeBand={activeBand}
        onBandChange={setActiveBand}
      />

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

export default SubcategoryPage;
