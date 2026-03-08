import { useState } from 'react';
import './MusicPlayer.css';

// YouTube video ID for "Suspicious Minds" live Las Vegas 1970
// If this video becomes unavailable, replace the ID below
const VIDEO_ID = 'T1g5tVGZhfk';

const EMBED = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}`
  + `?autoplay=1&loop=1&playlist=${VIDEO_ID}`
  + `&rel=0&modestbranding=1&controls=1`;

export default function MusicPlayer() {
  const [minimized, setMinimized] = useState(false);
  const [hidden, setHidden]       = useState(false);

  if (hidden) return null;

  return (
    <div className={`yt-player ${minimized ? 'yt-player--min' : ''}`}>
      {/* Title bar */}
      <div className="yt-bar">
        <span className="yt-now">♪ Suspicious Minds — Live, Las Vegas 1970</span>
        <div className="yt-controls">
          <button onClick={() => setMinimized(m => !m)} title={minimized ? 'Expand' : 'Minimise'}>
            {minimized ? '▲' : '▼'}
          </button>
          <button onClick={() => setHidden(true)} title="Close">✕</button>
        </div>
      </div>

      {/* YouTube iframe — must remain visible per YouTube ToS; allow="autoplay" makes it play on load */}
      {!minimized && (
        <iframe
          src={EMBED}
          title="Suspicious Minds — Elvis Presley Live Las Vegas 1970"
          width="280"
          height="157"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          className="yt-iframe"
        />
      )}
    </div>
  );
}
