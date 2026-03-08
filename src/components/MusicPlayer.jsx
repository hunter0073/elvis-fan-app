import { useState } from 'react';
import './MusicPlayer.css';

const TRACKS = [
  { id: '1H5IfYyIIAlgDX8zguUzns', title: 'Suspicious Minds',           year: 1969 },
  { id: '44AyOl4qVkzS48vBsbNXaC', title: "Can't Help Falling in Love", year: 1961 },
  { id: '0JOw67rq2X6NDz5AJP9uIG', title: 'Hound Dog',                  year: 1956 },
  { id: '6xNwKNYZcvgV3XTIwsgNio', title: 'Heartbreak Hotel',            year: 1956 },
];

// active = true means the user has already clicked (user gesture done)
// so Spotify's autoplay=1 will be honoured by the browser
export default function MusicPlayer({ active = false }) {
  const [open, setOpen] = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const track = TRACKS[trackIdx];

  // Build embed URL — autoplay=1 only works after a user gesture
  const embedSrc = active
    ? `https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0&autoplay=1`
    : null;

  return (
    <div className={`music-player ${open ? 'music-player--open' : ''}`}>
      {/* Header row */}
      <div className="music-header">
        <button
          className="music-toggle"
          onClick={() => setOpen(o => !o)}
          title={open ? 'Collapse player' : 'Open music player'}
        >
          <span className="music-note">♪</span>
          <span className="music-toggle-label">
            {open ? track.title : 'Now Playing'}
          </span>
          <span className="music-chevron">{open ? '▾' : '▸'}</span>
        </button>
        <button
          className="music-close"
          onClick={() => setVisible(false)}
          title="Hide player"
          aria-label="Hide music player"
        >
          ✕
        </button>
      </div>

      {/* Expandable body */}
      {open && active && (
        <div className="music-body">
          {/* Track selector */}
          <div className="music-tracks">
            {TRACKS.map((t, i) => (
              <button
                key={t.id}
                className={`music-track-btn ${i === trackIdx ? 'active' : ''}`}
                onClick={() => setTrackIdx(i)}
              >
                <span className="mtrack-dot" />
                <span className="mtrack-title">{t.title}</span>
                <span className="mtrack-year">{t.year}</span>
              </button>
            ))}
          </div>

          {/* Spotify embed — key forces re-mount (and autoplay) on track change */}
          {embedSrc && (
            <iframe
              key={track.id}
              src={embedSrc}
              width="100%"
              height="80"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="eager"
              title={track.title}
              className="music-embed"
            />
          )}
          <p className="music-note-text">Powered by Spotify · No account required for preview</p>
        </div>
      )}
    </div>
  );
}
