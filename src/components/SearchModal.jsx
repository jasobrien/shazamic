import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allCategories } from "../data/categoryRegistry";
import { allProducts } from "../data/allProducts";

const MAX_RESULTS = 5;

function SearchModal({ onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const term = query.trim().toLowerCase();

  const matchedLists = useMemo(() => {
    if (!term) return [];
    return allCategories
      .filter((cat) =>
        `${cat.name} ${cat.description} ${cat.audience ?? ""}`.toLowerCase().includes(term)
      )
      .slice(0, MAX_RESULTS);
  }, [term]);

  const matchedProducts = useMemo(() => {
    if (!term) return [];
    return allProducts
      .filter((p) =>
        `${p.name} ${p.bestFor ?? ""} ${p.editorialNote ?? ""} ${p.listName}`.toLowerCase().includes(term)
      )
      .slice(0, MAX_RESULTS);
  }, [term]);

  const hasResults = matchedLists.length > 0 || matchedProducts.length > 0;
  const showEmpty = term.length > 0 && !hasResults;

  function go(path) {
    navigate(path);
    onClose();
  }

  return (
    <div
      className="search-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="search-modal">
        <div className="search-modal-input-row">
          <span className="search-modal-icon" aria-hidden="true">⌕</span>
          <input
            ref={inputRef}
            className="search-modal-input"
            type="search"
            placeholder="Search lists and products…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search"
          />
          <button
            type="button"
            className="search-modal-close"
            onClick={onClose}
            aria-label="Close search"
          >
            ✕
          </button>
        </div>

        {!term && (
          <p className="search-modal-hint">
            Search across all product lists and {allProducts.length} products.
          </p>
        )}

        {showEmpty && (
          <p className="search-modal-hint">No results for "<strong>{query.trim()}</strong>".</p>
        )}

        {hasResults && (
          <div className="search-modal-results">
            {matchedLists.length > 0 && (
              <section>
                <p className="search-results-label">Lists</p>
                {matchedLists.map((cat) => {
                  const path =
                    cat.status === "Live" ? `${cat.groupPath}/${cat.slug}` : null;
                  return (
                    <button
                      key={cat.slug}
                      type="button"
                      className={`search-result-item${!path ? " is-disabled" : ""}`}
                      onClick={() => path && go(path)}
                      disabled={!path}
                    >
                      <span className="search-result-title">{cat.name}</span>
                      <span className="search-result-meta">{cat.description}</span>
                      {!path && (
                        <span className="search-result-badge">Coming soon</span>
                      )}
                    </button>
                  );
                })}
              </section>
            )}

            {matchedProducts.length > 0 && (
              <section>
                <p className="search-results-label">Products</p>
                {matchedProducts.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    className="search-result-item"
                    onClick={() => go(product.path)}
                  >
                    <span className="search-result-title">{product.name}</span>
                    <span className="search-result-meta">
                      {product.listName} · ${product.priceUSD} · {product.bestFor}
                    </span>
                  </button>
                ))}
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchModal;
