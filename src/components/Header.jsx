import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import SearchModal from "./SearchModal";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Open on Cmd/Ctrl+K
  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="brand-block">
          <img className="brand-logo" src="/shazamic-logo.svg" alt="Shazamic logo" />
          <div>
            <p className="brand-name">Shazamic</p>
            <p className="brand-subtitle">Find the best products instantly</p>
          </div>
        </div>
        <nav className="main-nav" aria-label="Primary">
          <MegaMenu />
          <NavLink to="/methodology">Methodology</NavLink>
          <NavLink to="/disclosure">Disclosure</NavLink>
        </nav>
        <button
          type="button"
          className="header-search-btn"
          onClick={() => setSearchOpen(true)}
          aria-label="Search lists and products"
        >
          <span aria-hidden="true">⌕</span>
          <span className="header-search-hint">Search</span>
          <kbd>⌘K</kbd>
        </button>
      </header>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}

export default Header;