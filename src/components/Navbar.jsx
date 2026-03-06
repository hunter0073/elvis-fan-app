import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/biography', label: 'Biography' },
  { to: '/discography', label: 'Discography' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/movies', label: 'Movies' },
  { to: '/music', label: 'Music' },
  { to: '/trivia', label: 'Trivia' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-ep">EP</span>
        <span className="brand-text">Elvis Presley</span>
      </div>
      <ul className="navbar-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end={to === '/'}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
