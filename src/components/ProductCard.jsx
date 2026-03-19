const DEFAULT_LABELS = ["Value", "Reliability", "Sound", "Comfort"];
const SCORE_KEYS = ["value", "reliability", "sound", "comfort"];

function ProductCard({ product, scoreLabels }) {
  const labels = scoreLabels || DEFAULT_LABELS;

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
        {SCORE_KEYS.map((key, i) => (
          <p key={key}>{labels[i]}: {product.score[key]}</p>
        ))}
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
    </article>
  );
}

export default ProductCard;