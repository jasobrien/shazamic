import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { categoryGroups } from "../data/categoryRegistry";

function CatCard({ cat, groupPath, onClose }) {
  const isLive = cat.status === "Live";
  return (
    <div className="mega-cat-card" role="menuitem">
      {isLive ? (
        <Link
          to={`${groupPath}/${cat.slug}`}
          className="mega-cat-link"
          onClick={onClose}
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
}

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
    if (e.key === "Escape") setOpenGroup(null);
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenGroup(openGroup === groupId ? null : groupId);
    }
  }

  return (
    <div className="mega-menu" ref={menuRef}>
      {categoryGroups.map((group) => {
        const isOpen = openGroup === group.id;
        const close = () => setOpenGroup(null);

        // Detect if any category carries a subgroup label
        const hasSubgroups = group.categories.some((c) => c.subgroup);

        // Build ordered subgroup sections preserving registry order
        const subgroupSections = hasSubgroups
          ? group.categories.reduce((acc, cat) => {
              const key = cat.subgroup || "Other";
              if (!acc.find((s) => s.label === key)) acc.push({ label: key, cats: [] });
              acc.find((s) => s.label === key).cats.push(cat);
              return acc;
            }, [])
          : null;

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
              <div className={`mega-dropdown${hasSubgroups ? " has-subgroups" : ""}`} role="menu">
                <div className="mega-dropdown-header">
                  <Link to={group.path} className="mega-group-link" onClick={close}>
                    View all {group.label} →
                  </Link>
                </div>

                {hasSubgroups ? (
                  <div className="mega-subgroup-columns">
                    {subgroupSections.map(({ label, cats }) => (
                      <div key={label} className="mega-subgroup">
                        <p className="mega-subgroup-label">{label}</p>
                        <div className="mega-dropdown-grid">
                          {cats.map((cat) => (
                            <CatCard key={cat.slug} cat={cat} groupPath={group.path} onClose={close} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mega-dropdown-grid">
                    {group.categories.map((cat) => (
                      <CatCard key={cat.slug} cat={cat} groupPath={group.path} onClose={close} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MegaMenu;
