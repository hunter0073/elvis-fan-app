import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MusicPlayer.css';

const BASE = import.meta.env.BASE_URL;
const TRACK = `${BASE}performance.mp3`;
const LABEL = '♪ Suspicious Minds — Live, Las Vegas 1970';

export default function MusicPlayer() {
  const audioRef  = useRef(null);
  const location  = useLocation();
  const isHome    = location.pathname === '/';

  const [playing,   setPlaying]   = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [hidden,    setHidden]    = useState(false);
  const [blocked,   setBlocked]   = useState(false); // autoplay was blocked

  // Try to autoplay when user first lands on home page
  useEffect(() => {
    if (!isHome || hidden) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().then(() => {
      setPlaying(true);
      setBlocked(false);
    }).catch(() => {
      // Browser blocked autoplay — wait for first user gesture
      setBlocked(true);
    });
  }, [isHome]);

  // If autoplay was blocked, start on first user interaction anywhere on page
  useEffect(() => {
    if (!blocked) return;
    const resume = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.play().then(() => {
        setPlaying(true);
        setBlocked(false);
      }).catch(() => {});
    };
    document.addEventListener('click', resume, { once: true });
    document.addEventListener('keydown', resume, { once: true });
    return () => {
      document.removeEventListener('click', resume);
      document.removeEventListener('keydown', resume);
    };
  }, [blocked]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else         { audio.play(); setPlaying(true); }
  };

  if (hidden) return null;

  return (
    <>
      {/* The audio element — always mounted so it keeps playing across nav */}
      <audio ref={audioRef} src={TRACK} loop preload="auto" />

      <div className={`yt-player ${minimized ? 'yt-player--min' : ''}`}>
        <div className="yt-bar">
          <span className="yt-now">{LABEL}</span>
          <div className="yt-controls">
            <button onClick={togglePlay} title={playing ? 'Pause' : 'Play'}>
              {playing ? '⏸' : '▶'}
            </button>
            <button onClick={() => setMinimized(m => !m)} title={minimized ? 'Expand' : 'Minimise'}>
              {minimized ? '▲' : '▼'}
            </button>
            <button onClick={() => { audioRef.current?.pause(); setHidden(true); }} title="Close">✕</button>
          </div>
        </div>

        {!minimized && (
          <div className="mp-body">
            {blocked ? (
              <p className="mp-hint">Click anywhere to start music</p>
            ) : (
              <div className="mp-visualizer" aria-hidden="true">
                {[...Array(12)].map((_, i) => (
                  <span
                    key={i}
                    className={`mp-bar ${playing ? 'mp-bar--active' : ''}`}
                    style={{ animationDelay: `${i * 0.09}s` }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
