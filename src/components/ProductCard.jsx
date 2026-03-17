function ProductCard({ product }) {
  return (
    <article className="product-card">
      <header className="product-head">
        <div>
          <p className="rank">#{product.rank} in this price range</p>
          <h3>{product.name}</h3>
          <p className="best-for">{product.bestFor}</p>
        </div>
        <div className="price-rating">
          <p className="price">${product.priceUSD}</p>
          <p className="rating">{product.rating} / 5</p>
          <p className={`confidence confidence-${product.confidence.toLowerCase()}`}>
            Confidence: {product.confidence}
          </p>
        </div>
      </header>

      <p className="editor-note">{product.editorialNote}</p>

      <div className="score-grid" aria-label="Score breakdown">
        <p>Value: {product.score.value}</p>
        <p>Reliability: {product.score.reliability}</p>
        <p>Sound: {product.score.sound}</p>
        <p>Comfort: {product.score.comfort}</p>
      </div>

      <div className="pros-cons">
        <div>
          <h4>Pros</h4>
          <ul>
            {product.pros.map((pro) => (
              <li key={pro}>{pro}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Cons</h4>
          <ul>
            {product.cons.map((con) => (
              <li key={con}>{con}</li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="product-footer">
        <p>
          Last reviewed: {product.updatedOn} | {product.reviewCount.toLocaleString()}+ user
          reviews analyzed
        </p>
        <a className="btn btn-primary" href={product.affiliate.url} target="_blank" rel="noreferrer">
          View on Amazon
        </a>
      </footer>
      <p className="disclaimer-inline">
        Affiliate disclosure: We may earn a commission from Amazon purchases at no extra
        cost to you.
      </p>
    </article>
  );
}

export default ProductCard;