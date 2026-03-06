import { Link } from 'react-router-dom';
import './Home.css';

const highlights = [
  { icon: '🎵', label: 'Discography', desc: '18 #1 albums & 18 #1 singles', to: '/discography' },
  { icon: '🎬', label: 'Movies', desc: '33 feature films between 1956–1972', to: '/movies' },
  { icon: '📖', label: 'Biography', desc: 'Born in Tupelo, MS — January 8, 1935', to: '/biography' },
  { icon: '📷', label: 'Gallery', desc: 'Iconic photos across five decades', to: '/gallery' },
  { icon: '🎧', label: 'Music Player', desc: 'Stream classic Elvis tracks on Spotify', to: '/music' },
  { icon: '🏆', label: 'Trivia Quiz', desc: 'How well do you know The King?', to: '/trivia' },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">The King of Rock and Roll</p>
          <h1 className="hero-title">Elvis<br />Presley</h1>
          <p className="hero-dates">January 8, 1935 — August 16, 1977</p>
          <p className="hero-quote">
            "Truth is like the sun. You can shut it out for a time,<br />
            but it ain't going away."
          </p>
          <div className="hero-cta">
            <Link to="/biography" className="btn-primary">Explore His Life</Link>
            <Link to="/discography" className="btn-secondary">His Music</Link>
          </div>
        </div>
        <div className="hero-badge">
          <div className="badge-ring">
            <div className="badge-inner">
              <span className="badge-rn">RnR</span>
              <span className="badge-king">King</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <h2 className="section-title">Explore</h2>
        <div className="divider"></div>
        <div className="highlights-grid">
          {highlights.map(({ icon, label, desc, to }) => (
            <Link key={label} to={to} className="highlight-card">
              <span className="highlight-icon">{icon}</span>
              <h3>{label}</h3>
              <p>{desc}</p>
              <span className="highlight-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick facts */}
      <section className="facts">
        <h2 className="section-title">By the Numbers</h2>
        <div className="divider"></div>
        <div className="facts-grid">
          {[
            { num: '500M+', label: 'Records sold worldwide' },
            { num: '33', label: 'Feature films' },
            { num: '3', label: 'Grammy Awards' },
            { num: '18', label: 'Number one singles' },
          ].map(({ num, label }) => (
            <div key={label} className="fact-card">
              <span className="fact-num">{num}</span>
              <span className="fact-label">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
