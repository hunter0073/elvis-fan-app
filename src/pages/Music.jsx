import { useState } from 'react';
import './Music.css';

/* ── TRACK LIST ──────────────────────────────────────────────────────
   All YouTube IDs sourced from the official Elvis Presley / VEVO channel.
   ─────────────────────────────────────────────────────────────────── */
const tracks = [
  {
    ytId: 'gj0Rz-uP4Mk',
    title: 'Jailhouse Rock',
    year: 1957,
    album: 'Jailhouse Rock EP',
    era: 'Early Rock',
    desc: 'Recorded for the film of the same name, this is Elvis at his most electrifying. The iconic choreography and feral energy made it the template for rock \'n\' roll performance for a generation.',
  },
  {
    ytId: 'zIY1gxUpTop',
    title: 'Heartbreak Hotel',
    year: 1956,
    album: 'Elvis Presley',
    era: 'Sun Era',
    desc: 'His first RCA #1, spending 8 weeks at the top of the charts. The sparse, echo-drenched production was unlike anything on the radio — it sounded like music from another planet.',
  },
  {
    ytId: 'Oz5wSPE69nw',
    title: 'Blue Suede Shoes',
    year: 1956,
    album: 'Elvis Presley',
    era: 'Sun Era',
    desc: 'Written by Carl Perkins and covered by Elvis just weeks later, this version became definitive. Raw, fast, and irresistible — the song that helped crystallise the rockabilly sound.',
  },
  {
    ytId: '-eHJ12Vhpyc',
    title: 'Hound Dog',
    year: 1956,
    album: 'Single',
    era: 'Sun Era',
    desc: 'Eleven weeks at #1. With over 10 million copies sold it remains his most commercially successful single. The performance on The Ed Sullivan Show is one of the most-watched moments in television history.',
  },
  {
    ytId: 'vGJTaP6anOU',
    title: "Can't Help Falling in Love",
    year: 1961,
    album: 'Blue Hawaii',
    era: 'Hollywood',
    desc: 'Based on a French melody from 1784, this became Elvis\'s signature closing number for the rest of his career. With over 355 million YouTube views, it is his most-streamed song of all time.',
  },
  {
    ytId: 'WrMGGouem3c',
    title: 'Suspicious Minds',
    year: 1969,
    album: 'From Elvis in Memphis',
    era: 'Vegas Era',
    desc: "His last #1 hit — a dramatic, swelling masterpiece recorded during his Memphis comeback sessions. The live Las Vegas version became the definitive reading: raw, desperate, unstoppable.",
  },
  {
    ytId: 'ZotVMxuXBo0',
    title: 'Always on My Mind',
    year: 1972,
    album: 'Separate Ways',
    era: 'Vegas Era',
    desc: 'A deeply personal ballad recorded in the final, turbulent chapter of his marriage. His most emotionally exposed vocal performance — filled with genuine regret that no amount of studio polish could hide.',
  },
];

const ERA_COLORS = {
  'Sun Era':    '#c9844c',
  'Early Rock': '#BF953F',
  'Hollywood':  '#6b7fa8',
  'Vegas Era':  '#9a5c9e',
};

export default function Music() {
  const [active, setActive] = useState(tracks[0].ytId);

  const activeTrack = tracks.find(t => t.ytId === active);

  return (
    <div className="page">
      <h1 className="page-title">Music</h1>
      <p className="page-subtitle">Official videos from the Elvis Presley YouTube channel</p>
      <div className="divider"></div>

      <div className="music-layout">
        {/* Track list */}
        <div className="track-list">
          {tracks.map((track, i) => (
            <button
              key={track.ytId}
              className={`track-item ${active === track.ytId ? 'active' : ''}`}
              onClick={() => setActive(track.ytId)}
            >
              <div className="track-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="track-item-info">
                <span className="track-item-title">{track.title}</span>
                <span className="track-item-sub">
                  {track.year}
                  <span
                    className="track-era-badge"
                    style={{ '--era-color': ERA_COLORS[track.era] }}
                  >{track.era}</span>
                </span>
              </div>
              {active === track.ytId && (
                <div className="track-playing-indicator" aria-hidden="true">
                  {[...Array(3)].map((_, j) => (
                    <span key={j} className="tpi-bar" style={{ animationDelay: `${j * 0.15}s` }} />
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Player */}
        <div className="player-panel">
          <div className="player-yt-wrap">
            <iframe
              key={active}
              className="yt-embed"
              src={`https://www.youtube.com/embed/${activeTrack.ytId}?rel=0&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              title={`${activeTrack.title} — Elvis Presley`}
            />
          </div>

          <div className="player-info">
            <div className="player-info-top">
              <div>
                <h2 className="player-title">{activeTrack.title}</h2>
                <p className="player-meta">
                  {activeTrack.year} &middot; {activeTrack.album}
                </p>
              </div>
              <span
                className="player-era-badge"
                style={{ '--era-color': ERA_COLORS[activeTrack.era] }}
              >{activeTrack.era}</span>
            </div>
            <p className="player-desc">{activeTrack.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
