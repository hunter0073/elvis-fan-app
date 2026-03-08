import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Splash from './components/Splash';
import MusicPlayer from './components/MusicPlayer';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Discography from './pages/Discography';
import Gallery from './pages/Gallery';
import Movies from './pages/Movies';
import Music from './pages/Music';
import Trivia from './pages/Trivia';

const LAST_VISITED_KEY = 'elvis-last-visited';
const ENTERED_KEY = 'elvis-entered';

function LastVisitedTracker() {
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem(LAST_VISITED_KEY, location.pathname);
  }, [location.pathname]);
  return null;
}

function RestoreLastVisited({ skip }) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (skip) return;
    if (location.pathname === '/') {
      const last = localStorage.getItem(LAST_VISITED_KEY);
      if (last && last !== '/') {
        navigate(last, { replace: true });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);
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
  // Show splash once per browser session
  const [entered, setEntered] = useState(() => sessionStorage.getItem(ENTERED_KEY) === '1');
  const [musicActive, setMusicActive] = useState(false);

  const handleEnter = () => {
    sessionStorage.setItem(ENTERED_KEY, '1');
    setEntered(true);
    setMusicActive(true);
  };

  return (
    <BrowserRouter>
      <AnimatePresence>
        {!entered && <Splash key="splash" onEnter={handleEnter} />}
      </AnimatePresence>

      {entered && (
        <>
          <LastVisitedTracker />
          <RestoreLastVisited skip={false} />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </>
      )}

      {/* Global persistent music player — loads only after user gesture */}
      <MusicPlayer active={musicActive} />
    </BrowserRouter>
  );
}

export default App;
