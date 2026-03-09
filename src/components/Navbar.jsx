import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/biography', label: 'Biography' },
  { to: '/discography', label: 'Discography' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/movies', label: 'Movies' },
  { to: '/music', label: 'Music' },
  { to: '/rare-facts', label: 'Rare Facts' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand" end>
        <span className="brand-text">Elvis Presley</span>
      </NavLink>

      {/* Desktop links */}
      <ul className="navbar-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end={to === '/'}
            >{label}</NavLink>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className={`hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="mobile-overlay" onClick={() => setOpen(false)}>
          <ul className="mobile-menu" onClick={e => e.stopPropagation()}>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                >{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
