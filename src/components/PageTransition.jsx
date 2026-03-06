import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageOrder = ['/', '/biography', '/discography', '/gallery', '/movies', '/music', '/trivia'];

const variants = {
  initial: (dir) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
    scale: 0.97,
    filter: 'blur(4px)',
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
    scale: 0.97,
    filter: 'blur(4px)',
  }),
};

export default function PageTransition({ children }) {
  const location = useLocation();
  const idx = pageOrder.indexOf(location.pathname);
  const dir = idx >= 0 ? idx : 0;

  return (
    <motion.div
      custom={dir}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
