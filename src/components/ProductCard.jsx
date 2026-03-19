import { useState } from "react";

const DEFAULT_LABELS = ["Value", "Reliability", "Sound", "Comfort"];
const SCORE_KEYS = ["value", "reliability", "sound", "comfort"];

function ProductCard({ product, scoreLabels }) {
  const labels = scoreLabels || DEFAULT_LABELS;
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`product-card card-row${expanded ? " is-expanded" : ""}`}>
      {/* ── Compact row (always visible) ── */}
      <div className="card-row-summary" onClick={() => setExpanded((v) => !v)}>
        <div className="card-row-rank">#{product.rank}</div>
        <div className="card-row-identity">
          <h3>{product.name}</h3>
          <p className="best-for">{product.bestFor}</p>
        </div>
        <div className="card-row-scores" aria-label="Score breakdown">
          {SCORE_KEYS.map((key, i) => (
            <span className="card-row-score" key={key}>
              <span className="score-label">{labels[i]}</span>
              <span className="score-value">{product.score[key]}</span>
            </span>
          ))}
        </div>
        <div className="card-row-price-col">
          <p className="price">${product.priceUSD}</p>
          <p className="rating">{product.rating} / 5</p>
          <p className={`confidence confidence-${product.confidence.toLowerCase()}`}>
            {product.confidence}
          </p>
        </div>
        <a
          className="btn btn-primary card-row-cta"
          href={product.affiliate.url}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          View on Amazon
        </a>
        <button
          type="button"
          className="card-row-toggle"
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse details" : "Expand details"}
          onClick={(e) => { e.stopPropagation(); setExpanded((v) => !v); }}
        >
          <span className="caret">{expanded ? "▲" : "▼"}</span>
        </button>
      </div>

      {/* ── Expanded details ── */}
      {expanded && (
        <div className="card-row-details">
          <p className="editor-note">{product.editorialNote}</p>
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
          <p className="card-row-meta">
            Last reviewed: {product.updatedOn} | {product.reviewCount.toLocaleString()}+ user
            reviews analyzed
          </p>
        </div>
      )}
    </article>
  );
}

export default ProductCard;