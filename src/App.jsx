import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Discography from './pages/Discography';
import Gallery from './pages/Gallery';
import Movies from './pages/Movies';
import Music from './pages/Music';
import Trivia from './pages/Trivia';

const LAST_VISITED_KEY = 'elvis-last-visited';

function LastVisitedTracker() {
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem(LAST_VISITED_KEY, location.pathname);
  }, [location.pathname]);
  return null;
}

function RestoreLastVisited() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      const last = localStorage.getItem(LAST_VISITED_KEY);
      if (last && last !== '/') {
        navigate(last, { replace: true });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/biography" element={<PageTransition><Biography /></PageTransition>} />
        <Route path="/discography" element={<PageTransition><Discography /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/movies" element={<PageTransition><Movies /></PageTransition>} />
        <Route path="/music" element={<PageTransition><Music /></PageTransition>} />
        <Route path="/trivia" element={<PageTransition><Trivia /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LastVisitedTracker />
      <RestoreLastVisited />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
