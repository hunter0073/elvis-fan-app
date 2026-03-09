import './Footer.css';

const BASE = import.meta.env.BASE_URL;

const links = [
  { label: 'Official Website', href: 'https://www.elvis.com',                                          desc: 'elvis.com' },
  { label: 'Graceland',        href: 'https://www.graceland.com',                                      desc: 'graceland.com' },
  { label: 'Elvis on Spotify', href: 'https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE',        desc: 'Spotify' },
  { label: 'Elvis on YouTube', href: 'https://www.youtube.com/@Elvis',                                 desc: 'YouTube' },
  { label: 'Wikipedia',        href: 'https://en.wikipedia.org/wiki/Elvis_Presley',                    desc: 'Wikipedia' },
];

export default function Footer() {
  return (
    <footer className="footer" style={{ '--footer-logo-url': `url(${BASE}logo.png)` }}>

      <div className="footer-inner">
        <div className="footer-brand">
          <div>
            <p className="footer-name">Elvis Presley Fan Site</p>
            <p className="footer-dates">January 8, 1935 — August 16, 1977</p>
          </div>
        </div>

        <div className="footer-links">
          {links.map(({ label, href, desc }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer-link">
              <span>{label}</span>
              <span className="footer-link-desc">{desc}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>Fan site — not affiliated with Elvis Presley Enterprises, Inc.</p>
        <p>
          Photos sourced from{' '}
          <a href="https://commons.wikimedia.org/wiki/Category:Elvis_Presley" target="_blank" rel="noopener noreferrer">
            Wikimedia Commons
          </a>. Music via YouTube.
        </p>
        <p className="footer-credit">Made with passion by Liron Bachar</p>
      </div>
    </footer>
  );
}
