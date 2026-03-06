import { useEffect, useRef, useState } from 'react';
import './MusicPlayer.css';

// To use: place an MP3 of the song at /public/bg-music.mp3
// Recommended: "Suspicious Minds" live – download from a licensed source
// e.g. purchase on iTunes/Amazon Music, then place the file as /public/bg-music.mp3
export default function MusicPlayer({ src = '/bg-music.mp3' }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    audio.loop = true;
    // Attempt autoplay on first user gesture
    const tryPlay = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {});
      window.removeEventListener('click', tryPlay);
      window.removeEventListener('keydown', tryPlay);
    };
    window.addEventListener('click', tryPlay, { once: true });
    window.addEventListener('keydown', tryPlay, { once: true });
    return () => {
      window.removeEventListener('click', tryPlay);
      window.removeEventListener('keydown', tryPlay);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const toggle = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="none" />
      {visible && (
        <div className="music-player">
          <button className="music-btn" onClick={toggle} title={playing ? 'Pause music' : 'Play music'}>
            <span className="music-icon">{playing ? '❚❚' : '▶'}</span>
            <span className="music-bars" aria-hidden="true">
              {[1, 2, 3, 4].map((i) => (
                <span key={i} className={`bar bar-${i} ${playing ? 'animate' : ''}`} />
              ))}
            </span>
          </button>
          {playing && (
            <input
              className="music-volume"
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              title="Volume"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <button className="music-close" onClick={(e) => { e.stopPropagation(); setVisible(false); }} title="Hide player">✕</button>
        </div>
      )}
    </>
  );
}
