import { useState, useMemo } from 'react';
import './Discography.css';

const albums = [
  {
    year: 1956,
    title: 'Elvis Presley',
    label: 'RCA Victor',
    highlights: ['Blue Suede Shoes', 'Tutti Frutti', "I'm Counting on You"],
    notes: 'The debut album — reached #1 on the Billboard pop chart and stayed there for 10 weeks.',
  },
  {
    year: 1956,
    title: 'Elvis',
    label: 'RCA Victor',
    highlights: ['Rip It Up', 'Love Me', 'Paralyzed'],
    notes: 'Second studio album, reaching #1 on the charts. Featured his raw, energetic style.',
  },
  {
    year: 1957,
    title: "Loving You",
    label: 'RCA Victor',
    highlights: ['(Let Me Be Your) Teddy Bear', 'Loving You', "Got a Lot o' Livin' to Do!"],
    notes: 'Soundtrack to his second film. "(Let Me Be Your) Teddy Bear" became a signature song.',
  },
  {
    year: 1957,
    title: "Elvis' Christmas Album",
    label: 'RCA Victor',
    highlights: ['Blue Christmas', "Santa Claus Is Back in Town", "Here Comes Santa Claus"],
    notes: 'One of the best-selling Christmas albums of all time.',
  },
  {
    year: 1958,
    title: "King Creole",
    label: 'RCA Victor',
    highlights: ['King Creole', 'Hard Headed Woman', "Don't Ask Me Why"],
    notes: 'Considered by many critics, and Elvis himself, to be his best film soundtrack.',
  },
  {
    year: 1960,
    title: 'Elvis Is Back!',
    label: 'RCA Victor',
    highlights: ['Make Me Know It', "Fever", 'The Girl of My Best Friend'],
    notes: 'Recorded after his Army discharge. A mature, polished return that surprised critics.',
  },
  {
    year: 1960,
    title: 'G.I. Blues',
    label: 'RCA Victor',
    highlights: ['Wooden Heart', 'Pocketful of Rainbows', 'Tonight Is So Right for Love'],
    notes: 'Soundtrack to the film set in Germany. "Wooden Heart" became a massive international hit.',
  },
  {
    year: 1961,
    title: 'Blue Hawaii',
    label: 'RCA Victor',
    highlights: ['Can\'t Help Falling in Love', 'Rock-A-Hula Baby', 'Hawaiian Sunset'],
    notes: '"Can\'t Help Falling in Love" became one of the most beloved songs of all time.',
  },
  {
    year: 1968,
    title: 'Elvis (NBC TV Special)',
    label: 'RCA Victor',
    highlights: ['Guitar Man', 'Trouble/Guitar Man', "If I Can Dream"],
    notes: 'The comeback special soundtrack. "If I Can Dream" rose to #12 on the Billboard Hot 100.',
  },
  {
    year: 1969,
    title: 'From Elvis in Memphis',
    label: 'RCA Victor',
    highlights: ['In the Ghetto', 'Suspicious Minds', 'True Love Travels on a Gravel Road'],
    notes: 'Widely regarded as his best album. "Suspicious Minds" became his last #1 single.',
  },
  {
    year: 1973,
    title: 'Aloha from Hawaii Via Satellite',
    label: 'RCA Victor',
    highlights: ['Steamroller Blues', 'My Way', 'An American Trilogy'],
    notes: 'Historic live album from the globally-broadcast satellite concert. Reached #1 in 14 countries.',
  },
  {
    year: 1977,
    title: 'Moody Blue',
    label: 'RCA Victor',
    highlights: ['Moody Blue', 'Way Down', 'If You Love Me (Let Me Know)'],
    notes: 'His final studio album, released just weeks before his death. "Way Down" hit #1.',
  },
];

const singles = [
  { year: 1954, title: "That's All Right", chart: 'Debut single' },
  { year: 1956, title: 'Heartbreak Hotel', chart: '#1 Pop' },
  { year: 1956, title: 'Hound Dog / Don\'t Be Cruel', chart: '#1 Pop (11 weeks)' },
  { year: 1957, title: '(Let Me Be Your) Teddy Bear', chart: '#1 Pop (7 weeks)' },
  { year: 1957, title: 'Jailhouse Rock', chart: '#1 Pop (7 weeks)' },
  { year: 1958, title: 'Hard Headed Woman', chart: '#1 Pop' },
  { year: 1960, title: 'It\'s Now or Never', chart: '#1 Pop (5 weeks)' },
  { year: 1960, title: 'Are You Lonesome Tonight?', chart: '#1 Pop (6 weeks)' },
  { year: 1961, title: 'Surrender', chart: '#1 Pop' },
  { year: 1962, title: 'Return to Sender', chart: '#2 Pop' },
  { year: 1965, title: 'Crying in the Chapel', chart: '#3 Pop' },
  { year: 1969, title: 'Suspicious Minds', chart: '#1 Pop — last #1' },
  { year: 1977, title: 'Way Down', chart: '#18 Pop, #1 Country' },
];

export default function Discography() {
  const [tab, setTab] = useState('albums');
  const [search, setSearch] = useState('');

  const filteredAlbums = useMemo(() => {
    const q = search.toLowerCase();
    return albums.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.notes.toLowerCase().includes(q) ||
      a.highlights.some(h => h.toLowerCase().includes(q)) ||
      String(a.year).includes(q)
    );
  }, [search]);

  const filteredSingles = useMemo(() => {
    const q = search.toLowerCase();
    return singles.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.chart.toLowerCase().includes(q) ||
      String(s.year).includes(q)
    );
  }, [search]);

  return (
    <div className="page">
      <h1 className="page-title">Discography</h1>
      <p className="page-subtitle">A lifetime of iconic music</p>
      <div className="divider"></div>

      <div className="disco-search-row">
        <div className="disco-tabs">
          <button
            className={`disco-tab ${tab === 'albums' ? 'active' : ''}`}
            onClick={() => setTab('albums')}
          >
            Albums
          </button>
          <button
            className={`disco-tab ${tab === 'singles' ? 'active' : ''}`}
            onClick={() => setTab('singles')}
          >
            Hit Singles
          </button>
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="Search songs, albums, years…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {tab === 'albums' && (
        <div className="albums-grid">
          {filteredAlbums.length === 0 && (
            <p className="no-results">No results for "{search}"</p>
          )}
          {filteredAlbums.map((album) => (
            <div key={album.title} className="album-card">
              <div className="album-vinyl">
                <div className="vinyl-label">
                  <span>{album.year}</span>
                </div>
              </div>
              <div className="album-info">
                <span className="album-year">{album.year}</span>
                <h3 className="album-title">{album.title}</h3>
                <p className="album-label">{album.label}</p>
                <p className="album-notes">{album.notes}</p>
                <ul className="album-tracks">
                  {album.highlights.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'singles' && (
        <div className="singles-list">
          {filteredSingles.length === 0 && (
            <p className="no-results">No results for "{search}"</p>
          )}
          {filteredSingles.map((s) => (
            <div key={s.title} className="single-row">
              <span className="single-year">{s.year}</span>
              <span className="single-title">{s.title}</span>
              <span className="single-chart">{s.chart}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
