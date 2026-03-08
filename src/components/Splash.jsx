import { motion } from 'framer-motion';
import './Splash.css';

export default function Splash({ onEnter }) {
  return (
    <motion.div
      className="splash"
      exit={{ opacity: 0, transition: { duration: 0.9, ease: 'easeInOut' } }}
    >
      {/* Spinning vinyl in background */}
      <div className="splash-vinyl" aria-hidden="true">
        <div className="splash-vinyl-inner">
          <span className="splash-vinyl-ep">EP</span>
        </div>
      </div>

      {/* Spotlight beams */}
      <div className="splash-spotlight" aria-hidden="true" />

      {/* Floating particles */}
      {[...Array(16)].map((_, i) => (
        <motion.span
          key={i}
          className="splash-particle"
          style={{ left: `${4 + i * 6}%`, top: `${20 + (i % 6) * 13}%` }}
          animate={{ y: [0, -28, 0], opacity: [0.08, 0.5, 0.08] }}
          transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.22, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="splash-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
      >
        <motion.p
          className="splash-eyebrow"
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.28em' }}
          transition={{ duration: 1.4, delay: 0.5 }}
        >
          The Official Fan Tribute
        </motion.p>

        <h1 className="splash-title">
          <motion.span
            className="splash-title-glitch"
            data-text="Elvis"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Elvis
          </motion.span>
          <motion.span
            className="splash-title-sub"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Presley
          </motion.span>
        </h1>

        <motion.p
          className="splash-dates"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          January 8, 1935 &mdash; August 16, 1977
        </motion.p>

        <motion.div
          className="splash-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1.3, ease: 'easeOut' }}
        />

        <motion.button
          className="splash-enter"
          onClick={onEnter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(201,168,76,0.45), 0 0 80px rgba(201,168,76,0.15)' }}
          whileTap={{ scale: 0.97 }}
        >
          Enter the Experience
          <span className="splash-enter-arrow">→</span>
        </motion.button>

        <motion.p
          className="splash-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          ♪ Music starts automatically
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
