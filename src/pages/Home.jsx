import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const BASE = import.meta.env.BASE_URL;

const highlights = [
  { icon: '🎵', label: 'Discography',  desc: '18 #1 singles. 500 million records sold.', to: '/discography' },
  { icon: '🎬', label: 'Movies',       desc: '33 feature films between 1956–1972.',       to: '/movies' },
  { icon: '📖', label: 'Biography',    desc: 'From Tupelo to the world stage.',            to: '/biography' },
  { icon: '📷', label: 'Gallery',      desc: 'Iconic photos across five decades.',         to: '/gallery' },
  { icon: '🎧', label: 'Music',        desc: 'Stream classic Elvis tracks.',                to: '/music' },
  { icon: '🃏', label: 'Rare Facts',   desc: 'The untold stories behind the legend.',      to: '/rare-facts' },
];

const marqueeItems = [
  'King of Rock and Roll','★','Viva Las Vegas','★','Aloha from Hawaii','★',
  'January 8, 1935','★','500 Million Records','★','TCB','★',
  'King of Rock and Roll','★','Viva Las Vegas','★','Aloha from Hawaii','★',
  'January 8, 1935','★','500 Million Records','★','TCB','★',
];

// Vegas era photos — loaded by the browser (not our server)
const vegasPhotos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Elvis_Presley_promoting_Jailhouse_Rock.jpg/400px-Elvis_Presley_promoting_Jailhouse_Rock.jpg',
    caption: 'Jailhouse Rock era, 1957',
  },
  {
    src: `${BASE}elvis-hero.jpg`,
    caption: 'Vegas Stage — The King, 1970s',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elvis_Presley_promoting_Jailhouse_Rock.jpg/400px-Elvis_Presley_promoting_Jailhouse_Rock.jpg',
    caption: 'The original rock rebel',
  },
  {
    src: `${BASE}elvis-hero.jpg`,
    caption: 'International Hotel, Las Vegas, 1970',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { animate: { transition: { staggerChildren: 0.12 } } };

export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${BASE}elvis-hero.jpg)` }}
      >
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-spotlight" aria-hidden="true" />
        <div className="hero-grain"    aria-hidden="true" />

        {/* Floating gold particles */}
        <div className="hero-particles" aria-hidden="true">
          {[...Array(16)].map((_, i) => (
            <motion.span
              key={i}
              className="particle"
              style={{ left: `${4 + i * 6}%`, top: `${12 + (i % 5) * 16}%` }}
              animate={{ y: [0, -24, 0], opacity: [0.1, 0.6, 0.1] }}
              transition={{ duration: 2.8 + i * 0.2, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
            />
          ))}
        </div>

        {/* Decorative year watermark */}
        <div className="hero-year-bg" aria-hidden="true">1935</div>

        <motion.div className="hero-content" variants={stagger} initial="initial" animate="animate">
          <motion.p className="hero-eyebrow" variants={fadeUp}>
            The King of Rock and Roll
          </motion.p>

          {/* Title — both words glitch */}
          <motion.h1 className="hero-title" variants={fadeUp}>
            <motion.span
              className="hero-glitch"
              data-text="Elvis"
              animate={{ textShadow: ['0 0 20px rgba(201,168,76,0.2)', '0 0 60px rgba(201,168,76,0.9), 0 0 120px rgba(201,168,76,0.3)', '0 0 20px rgba(201,168,76,0.2)'] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >Elvis</motion.span>
            <motion.span
              className="hero-glitch hero-glitch--presley"
              data-text="Presley"
              animate={{ textShadow: ['0 0 20px rgba(201,168,76,0.15)', '0 0 50px rgba(201,168,76,0.7)', '0 0 20px rgba(201,168,76,0.15)'] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >Presley</motion.span>
          </motion.h1>

          <motion.p className="hero-dates" variants={fadeUp}>
            January 8, 1935 — August 16, 1977
          </motion.p>

          <motion.p className="hero-quote" variants={fadeUp}>
            "Truth is like the sun. You can shut it out for a time,<br />
            but it ain't going away."
          </motion.p>

          <motion.div className="hero-cta" variants={fadeUp}>
            <Link to="/biography"  className="btn-primary">Explore His Life</Link>
            <Link to="/discography" className="btn-secondary">His Music</Link>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          {[
            { num: '500M+', label: 'Records Sold' },
            { num: '18',    label: 'No.1 Singles' },
            { num: '33',    label: 'Films' },
            { num: '3',     label: 'Grammys' },
          ].map(({ num, label }) => (
            <div key={label} className="hero-stat">
              <span className="hero-stat-num">{num}</span>
              <span className="hero-stat-label">{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="scroll-hint"
          animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >↓</motion.div>
      </section>

      {/* ── GOLD MARQUEE ── */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.map((t, i) => <span key={i} className="marquee-item">{t}</span>)}
        </div>
      </div>

      {/* ── VEGAS ERA PHOTO STRIP ── */}
      <section className="photo-strip">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >The Vegas Years</motion.h2>
        <p className="section-sub">1969 – 1977 · International Hotel · Aloha from Hawaii</p>
        <div className="photo-grid">
          {vegasPhotos.map(({ src, caption }, i) => (
            <motion.figure
              key={i}
              className="photo-card"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={src} alt={caption} loading="lazy" />
              <figcaption>{caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="highlights">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >Explore</motion.h2>
        <div className="divider" />
        <div className="highlights-grid">
          {highlights.map(({ icon, label, desc, to }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Link to={to} className="highlight-card">
                <span className="highlight-icon">{icon}</span>
                <h3>{label}</h3>
                <p>{desc}</p>
                <span className="highlight-arrow">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── BY THE NUMBERS ── */}
      <section className="facts">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >By the Numbers</motion.h2>
        <div className="divider" />
        <div className="facts-grid">
          {[
            { num: '500M+', label: 'Records sold worldwide' },
            { num: '33',    label: 'Feature films' },
            { num: '3',     label: 'Grammy Awards' },
            { num: '18',    label: 'Number one singles' },
          ].map(({ num, label }, i) => (
            <motion.div
              key={label}
              className="fact-card"
              initial={{ opacity: 0, scale: 0.82 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="fact-num"
                animate={{ textShadow: ['0 0 0px rgba(201,168,76,0)', '0 0 24px rgba(201,168,76,0.6)', '0 0 0px rgba(201,168,76,0)'] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.8 }}
              >{num}</motion.span>
              <span className="fact-label">{label}</span>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
