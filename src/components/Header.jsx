import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="brand-block">
        <img className="brand-logo" src="/shazamic-logo.svg" alt="Shazamic logo" />
        <div>
          <p className="brand-name">Shazamic</p>
          <p className="brand-subtitle">Find the best products instantly</p>
        </div>
      </div>
      <nav className="main-nav" aria-label="Primary">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/headphones">Headphones</NavLink>
        <NavLink to="/methodology">Methodology</NavLink>
        <NavLink to="/disclosure">Disclosure</NavLink>
      </nav>
    </header>
  );
}

export default Header;