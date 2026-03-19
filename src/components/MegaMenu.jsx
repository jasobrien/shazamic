import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { categoryGroups } from "../data/categoryRegistry";

function MegaMenu() {
  const [openGroup, setOpenGroup] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenGroup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleKeyDown(e, groupId) {
    if (e.key === "Escape") {
      setOpenGroup(null);
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenGroup(openGroup === groupId ? null : groupId);
    }
  }

  return (
    <div className="mega-menu" ref={menuRef}>
      {categoryGroups.map((group) => {
        const isOpen = openGroup === group.id;
        return (
          <div
            key={group.id}
            className="mega-menu-group"
            onMouseEnter={() => setOpenGroup(group.id)}
            onMouseLeave={() => setOpenGroup(null)}
          >
            <button
              type="button"
              className={`mega-menu-trigger${isOpen ? " is-open" : ""}`}
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={() => setOpenGroup(isOpen ? null : group.id)}
              onKeyDown={(e) => handleKeyDown(e, group.id)}
            >
              {group.label}
              <span className="mega-caret" aria-hidden="true">▾</span>
            </button>

            {isOpen && (
              <div className="mega-dropdown" role="menu">
                <div className="mega-dropdown-header">
                  <Link
                    to={group.path}
                    className="mega-group-link"
                    onClick={() => setOpenGroup(null)}
                  >
                    View all {group.label} →
                  </Link>
                </div>
                <div className="mega-dropdown-grid">
                  {group.categories.map((cat) => {
                    const isLive = cat.status === "Live";
                    return (
                      <div key={cat.slug} className="mega-cat-card" role="menuitem">
                        {isLive ? (
                          <Link
                            to={`${group.path}/${cat.slug}`}
                            className="mega-cat-link"
                            onClick={() => setOpenGroup(null)}
                          >
                            <span className="mega-cat-status">{cat.status}</span>
                            <strong>{cat.name}</strong>
                            <span className="mega-cat-desc">{cat.description}</span>
                          </Link>
                        ) : (
                          <div className="mega-cat-link is-disabled">
                            <span className="mega-cat-status">{cat.status}</span>
                            <strong>{cat.name}</strong>
                            <span className="mega-cat-desc">{cat.description}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MegaMenu;
