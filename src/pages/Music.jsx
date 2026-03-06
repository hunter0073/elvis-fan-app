import { useState } from 'react';
import './Music.css';

const tracks = [
  {
    id: '6xNwKNYZcvgV3XTIwsgNio',
    title: 'Heartbreak Hotel',
    year: 1956,
    album: 'Elvis Presley',
    desc: 'His first RCA #1. Stayed at the top for 8 weeks and launched Elvis to national fame.',
  },
  {
    id: '47gmoUrZV3w20JAnQOZMcO',
    title: 'Blue Suede Shoes',
    year: 1956,
    album: 'Elvis Presley',
    desc: 'The song that helped define rockabilly — raw, fast, and irresistible.',
  },
  {
    id: '0JOw67rq2X6NDz5AJP9uIG',
    title: 'Hound Dog',
    year: 1956,
    album: 'Single',
    desc: 'Eleven weeks at #1. His most commercially successful single of all time.',
  },
  {
    id: '44AyOl4qVkzS48vBsbNXaC',
    title: "Can't Help Falling in Love",
    year: 1961,
    album: 'Blue Hawaii',
    desc: 'One of the most romantic songs ever recorded. Used as his closing number for decades.',
  },
  {
    id: '1H5IfYyIIAlgDX8zguUzns',
    title: 'Suspicious Minds',
    year: 1969,
    album: 'From Elvis in Memphis',
    desc: "His last #1 hit — an emotional, dramatic masterpiece of his Las Vegas era.",
  },
  {
    id: '5ioMnAsVY77XoxCal1EqOq',
    title: "In the Ghetto",
    year: 1969,
    album: 'From Elvis in Memphis',
    desc: 'A socially conscious song about poverty. A striking departure that earned massive critical acclaim.',
  },
];

export default function Music() {
  const [active, setActive] = useState(tracks[0].id);

  const activeTrack = tracks.find(t => t.id === active);

  return (
    <div className="page">
      <h1 className="page-title">Music Player</h1>
      <p className="page-subtitle">Stream classic Elvis tracks via Spotify</p>
      <div className="divider"></div>

      <div className="music-layout">
        {/* Track list */}
        <div className="track-list">
          {tracks.map(track => (
            <button
              key={track.id}
              className={`track-item ${active === track.id ? 'active' : ''}`}
              onClick={() => setActive(track.id)}
            >
              <div className="track-item-icon">♪</div>
              <div className="track-item-info">
                <span className="track-item-title">{track.title}</span>
                <span className="track-item-year">{track.year} · {track.album}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Player */}
        <div className="player-panel">
          <div className="player-track-info">
            <h2>{activeTrack.title}</h2>
            <p className="player-meta">{activeTrack.year} · {activeTrack.album}</p>
            <p className="player-desc">{activeTrack.desc}</p>
          </div>
          <iframe
            key={active}
            className="spotify-embed"
            src={`https://open.spotify.com/embed/track/${active}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={`${activeTrack.title} on Spotify`}
          />
          <p className="spotify-note">
            Powered by Spotify · A free account is not required to preview tracks
          </p>
        </div>
      </div>
    </div>
  );
}
