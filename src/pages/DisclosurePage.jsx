function DisclosurePage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Affiliate disclosure</p>
        <h1>How Shazamic makes money</h1>
        <p>
          We primarily use Amazon Associates links. If you buy through these links, we may earn
          a commission at no extra cost to you.
        </p>
      </section>

      <section className="policy-grid">
        <article>
          <h2>Editorial independence</h2>
          <p>
            Affiliate commissions do not decide rankings. Products are scored first; monetization
            follows that ranking.
          </p>
        </article>
        <article>
          <h2>Link labeling</h2>
          <p>
            Outbound purchase buttons are clearly labeled and include adjacent disclosure text to
            keep monetization transparent.
          </p>
        </article>
        <article>
          <h2>Price accuracy note</h2>
          <p>
            Prices can change quickly on Amazon. Treat listed prices as guidance and verify final
            price before purchasing.
          </p>
        </article>
      </section>
    </main>
  );
}

export default DisclosurePage;