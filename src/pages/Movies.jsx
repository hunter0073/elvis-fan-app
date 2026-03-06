import { useState, useMemo } from 'react';
import './Movies.css';

const movies = [
  {
    year: 1956,
    title: "Love Me Tender",
    director: 'Robert D. Webb',
    songs: ['Love Me Tender', "Let Me", "Poor Boy"],
    desc: "Elvis's film debut as Clint Reno, a Confederate soldier. The title song went to #1 before the film was even released.",
    genre: 'Drama/Western',
  },
  {
    year: 1957,
    title: 'Loving You',
    director: 'Hal Kanter',
    songs: ['(Let Me Be Your) Teddy Bear', "Loving You", "Got a Lot o' Livin' to Do!"],
    desc: "Loosely based on Elvis's own rise to fame. Features his parents Vernon and Gladys in a crowd scene.",
    genre: 'Musical/Drama',
  },
  {
    year: 1957,
    title: 'Jailhouse Rock',
    director: 'Richard Thorpe',
    songs: ['Jailhouse Rock', "Treat Me Nice", "Young and Beautiful"],
    desc: "Widely considered his best film. The choreographed 'Jailhouse Rock' sequence was groundbreaking.",
    genre: 'Musical/Drama',
  },
  {
    year: 1958,
    title: 'King Creole',
    director: 'Michael Curtiz',
    songs: ['King Creole', "Hard Headed Woman", "Trouble"],
    desc: "Often cited as Elvis's finest acting performance. Director Curtiz called him a natural actor.",
    genre: 'Drama/Musical',
  },
  {
    year: 1960,
    title: 'G.I. Blues',
    director: 'Norman Taurog',
    songs: ['Wooden Heart', "Pocketful of Rainbows", "Tonight Is So Right for Love"],
    desc: "Shot while Elvis was still in the Army. The film and soundtrack were both massive commercial successes.",
    genre: 'Musical/Comedy',
  },
  {
    year: 1960,
    title: 'Flaming Star',
    director: 'Don Siegel',
    songs: ['Flaming Star', "A Cane and a High Starched Collar"],
    desc: "A serious western drama with minimal songs. Elvis delivers one of his most acclaimed dramatic performances.",
    genre: 'Western/Drama',
  },
  {
    year: 1961,
    title: 'Wild in the Country',
    director: 'Philip Dunne',
    songs: ['Wild in the Country', "I Slipped, I Stumbled, I Fell"],
    desc: "A dramatic film with a screenplay by Clifford Odets. Co-starred Hope Lange and Tuesday Weld.",
    genre: 'Drama',
  },
  {
    year: 1961,
    title: 'Blue Hawaii',
    director: 'Norman Taurog',
    songs: ["Can't Help Falling in Love", "Rock-A-Hula Baby", "Hawaiian Sunset"],
    desc: "The highest-grossing Elvis film. Set the template for his subsequent Hollywood output.",
    genre: 'Musical/Comedy',
  },
  {
    year: 1962,
    title: 'Girls! Girls! Girls!',
    director: 'Norman Taurog',
    songs: ['Return to Sender', "Girls! Girls! Girls!", "Song of the Shrimp"],
    desc: "'Return to Sender' became one of Elvis's biggest hits. The film was a major box office success.",
    genre: 'Musical/Comedy',
  },
  {
    year: 1964,
    title: 'Viva Las Vegas',
    director: 'George Sidney',
    songs: ['Viva Las Vegas', "What'd I Say", "The Lady Loves Me"],
    desc: "Co-starring Ann-Margret, this is one of his most energetic films. The chemistry between the leads was electric.",
    genre: 'Musical/Comedy',
  },
  {
    year: 1967,
    title: 'Easy Come, Easy Go',
    director: 'John Rich',
    songs: ['Easy Come, Easy Go', "Sing You Children", "You Gotta Stop"],
    desc: "One of his final formulaic musical films before his dramatic comeback in 1968.",
    genre: 'Musical/Comedy',
  },
  {
    year: 1969,
    title: 'Change of Habit',
    director: 'William A. Graham',
    songs: ['Change of Habit', "Have a Happy", "Let Us Pray"],
    desc: "His final feature film, co-starring Mary Tyler Moore. Elvis plays a doctor in a ghetto clinic.",
    genre: 'Drama',
  },
];

const genres = ['All', 'Drama/Western', 'Musical/Drama', 'Drama/Musical', 'Musical/Comedy', 'Western/Drama', 'Drama'];

export default function Movies() {
  const [filter, setFilter] = useState('All');
  const [expanded, setExpanded] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const byGenre = filter === 'All' ? movies : movies.filter(m => m.genre === filter);
    const q = search.toLowerCase();
    if (!q) return byGenre;
    return byGenre.filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.director.toLowerCase().includes(q) ||
      m.desc.toLowerCase().includes(q) ||
      m.songs.some(s => s.toLowerCase().includes(q)) ||
      String(m.year).includes(q)
    );
  }, [filter, search]);

  const filteredDecades = [
    { label: '1950s', movies: filtered.filter(m => m.year < 1960) },
    { label: '1960s', movies: filtered.filter(m => m.year >= 1960 && m.year < 1970) },
    { label: '1970s', movies: filtered.filter(m => m.year >= 1970) },
  ].filter(d => d.movies.length > 0);

  return (
    <div className="page">
      <h1 className="page-title">Filmography</h1>
      <p className="page-subtitle">33 feature films from 1956 to 1972</p>
      <div className="divider"></div>

      <div className="movies-search-wrap">
        <input
          className="movie-search-input"
          type="text"
          placeholder="Search films, directors, songs…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="movie-filters">
        <button
          className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
          onClick={() => setFilter('All')}
        >
          All ({movies.length})
        </button>
        {['Musical/Comedy', 'Drama/Musical', 'Musical/Drama', 'Western/Drama', 'Drama'].map(g => {
          const count = movies.filter(m => m.genre === g).length;
          if (!count) return null;
          return (
            <button
              key={g}
              className={`filter-btn ${filter === g ? 'active' : ''}`}
              onClick={() => setFilter(g)}
            >
              {g} ({count})
            </button>
          );
        })}
      </div>

      {filteredDecades.map(({ label, movies: decadeMovies }) => (
        <div key={label} className="decade-section">
          <h2 className="decade-label">{label}</h2>
          <div className="movies-grid">
            {decadeMovies.map(movie => (
              <div
                key={movie.title}
                className={`movie-card ${expanded === movie.title ? 'expanded' : ''}`}
                onClick={() => setExpanded(expanded === movie.title ? null : movie.title)}
              >
                <div className="movie-card-header">
                  <div className="movie-poster">
                    <span className="movie-poster-icon">🎬</span>
                    <span className="movie-year-badge">{movie.year}</span>
                  </div>
                  <div className="movie-meta">
                    <span className="movie-genre">{movie.genre}</span>
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-director">Dir. {movie.director}</p>
                  </div>
                  <span className="movie-expand">{expanded === movie.title ? '▲' : '▼'}</span>
                </div>
                {expanded === movie.title && (
                  <div className="movie-details">
                    <p className="movie-desc">{movie.desc}</p>
                    <div className="movie-songs">
                      <span className="songs-label">Featured Songs</span>
                      <div className="songs-list">
                        {movie.songs.map(s => (
                          <span key={s} className="song-pill">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
