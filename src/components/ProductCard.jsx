import { useState } from "react";

const DEFAULT_LABELS = ["Value", "Reliability", "Sound", "Comfort"];
const SCORE_KEYS = ["value", "reliability", "sound", "comfort"];

function ProductCard({ product, scoreLabels }) {
  const labels = scoreLabels || DEFAULT_LABELS;
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`product-card card-col${expanded ? " is-expanded" : ""}`}>
      <div className="card-col-rank">#{product.rank}</div>

      <div className="card-col-identity">
        <h3>{product.name}</h3>
        <p className="best-for">{product.bestFor}</p>
      </div>

      <div className="card-col-scores" aria-label="Score breakdown">
        {SCORE_KEYS.map((key, i) => (
          <span className="card-col-score" key={key}>
            <span className="score-label">{labels[i]}</span>
            <span className="score-value">{product.score[key]}</span>
          </span>
        ))}
      </div>

      <div className="card-col-price">
        <p className="price">${product.priceUSD}</p>
        <p className="rating">{product.rating} / 5</p>
        <p className={`confidence confidence-${product.confidence.toLowerCase()}`}>
          {product.confidence}
        </p>
      </div>

      <a
        className="btn btn-primary card-col-cta"
        href={product.affiliate.url}
        target="_blank"
        rel="noreferrer"
      >
        View on Amazon
      </a>

      <button
        type="button"
        className="card-col-toggle"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? "Hide details ▲" : "Show details ▼"}
      </button>

      {expanded && (
        <div className="card-col-details">
          <p className="editor-note">{product.editorialNote}</p>
          <div className="card-col-pros">
            <h4>Pros</h4>
            <ul>
              {product.pros.map((pro) => (
                <li key={pro}>{pro}</li>
              ))}
            </ul>
          </div>
          <div className="card-col-cons">
            <h4>Cons</h4>
            <ul>
              {product.cons.map((con) => (
                <li key={con}>{con}</li>
              ))}
            </ul>
          </div>
          <p className="card-col-meta">
            Last reviewed: {product.updatedOn} · {product.reviewCount.toLocaleString()}+ reviews
          </p>
        </div>
      )}
    </article>
  );
}

export default ProductCard;