import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MusicPlayer from '../components/MusicPlayer';
import './Home.css';

const highlights = [
  { icon: '🎵', label: 'Discography', desc: '18 #1 albums & 18 #1 singles', to: '/discography' },
  { icon: '🎬', label: 'Movies', desc: '33 feature films between 1956–1972', to: '/movies' },
  { icon: '📖', label: 'Biography', desc: 'Born in Tupelo, MS — January 8, 1935', to: '/biography' },
  { icon: '📷', label: 'Gallery', desc: 'Iconic photos across five decades', to: '/gallery' },
  { icon: '🎧', label: 'Music Player', desc: 'Stream classic Elvis tracks on Spotify', to: '/music' },
  { icon: '🏆', label: 'Trivia Quiz', desc: 'How well do you know The King?', to: '/trivia' },
];

const marqueePhrases = [
  'King of Rock and Roll', '★', 'Elvis Presley', '★',
  '1935 – 1977', '★', 'Viva Las Vegas', '★',
  'Hound Dog', '★', 'Jailhouse Rock', '★',
  'King of Rock and Roll', '★', 'Elvis Presley', '★',
  '1935 – 1977', '★', 'Viva Las Vegas', '★',
  'Hound Dog', '★', 'Jailhouse Rock', '★',
];

const stagger = {
  animate: { transition: { staggerChildren: 0.13 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <div className="home">
      <MusicPlayer />

      {/* Hero */}
      <section className="hero">
        <motion.div
          className="hero-image-wrap"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          <img src="/elvis-hero.jpg" alt="Elvis Presley performing live" className="hero-photo" />
          <div className="hero-image-overlay" />
        </motion.div>

        {/* Sweeping spotlights (EPiC Vegas stage) */}
        <div className="hero-spotlight" aria-hidden="true" />

        {/* Film grain */}
        <div className="hero-grain" aria-hidden="true" />

        {/* Floating gold particles */}
        <div className="hero-particles" aria-hidden="true">
          {[...Array(14)].map((_, i) => (
            <motion.span
              key={i}
              className="particle"
              style={{ left: `${5 + i * 6.8}%`, top: `${15 + (i % 5) * 16}%` }}
              animate={{ y: [0, -22, 0], opacity: [0.1, 0.55, 0.1] }}
              transition={{ duration: 2.8 + i * 0.25, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <motion.div className="hero-content" variants={stagger} initial="initial" animate="animate">
          <motion.p className="hero-eyebrow" variants={fadeUp}>The King of Rock and Roll</motion.p>

          {/* Glitch title */}
          <motion.h1 className="hero-title" variants={fadeUp}>
            <motion.span
              className="hero-title-glitch"
              data-text="Elvis"
              animate={{
                textShadow: [
                  '0 0 20px rgba(201,168,76,0.3)',
                  '0 0 60px rgba(201,168,76,0.8), 0 0 120px rgba(201,168,76,0.3)',
                  '0 0 20px rgba(201,168,76,0.3)',
                ],
              }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              Elvis
            </motion.span>
            <br />Presley
          </motion.h1>

          <motion.p className="hero-dates" variants={fadeUp}>January 8, 1935 — August 16, 1977</motion.p>

          <motion.p className="hero-quote" variants={fadeUp}>
            "Truth is like the sun. You can shut it out for a time,<br />
            but it ain't going away."
          </motion.p>

          <motion.div className="hero-cta" variants={fadeUp}>
            <Link to="/biography" className="btn-primary">Explore His Life</Link>
            <Link to="/discography" className="btn-secondary">His Music</Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-hint"
          animate={{ y: [0, 9, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </section>

      {/* Baz-style kinetic marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueePhrases, ...marqueePhrases].map((phrase, i) => (
            <span key={i} className="marquee-item">{phrase}</span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <section className="highlights">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Explore
        </motion.h2>
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

      {/* Facts */}
      <section className="facts">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          By the Numbers
        </motion.h2>
        <div className="divider" />
        <div className="facts-grid">
          {[
            { num: '500M+', label: 'Records sold worldwide' },
            { num: '33', label: 'Feature films' },
            { num: '3', label: 'Grammy Awards' },
            { num: '18', label: 'Number one singles' },
          ].map(({ num, label }, i) => (
            <motion.div
              key={label}
              className="fact-card"
              initial={{ opacity: 0, scale: 0.82 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.span
                className="fact-num"
                animate={{
                  textShadow: [
                    '0 0 0px rgba(201,168,76,0)',
                    '0 0 24px rgba(201,168,76,0.6)',
                    '0 0 0px rgba(201,168,76,0)',
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.8 }}
              >
                {num}
              </motion.span>
              <span className="fact-label">{label}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
