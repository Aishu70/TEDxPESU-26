import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import HomePage from './pages/HomePage';
import Event2026Page from './pages/Event2026Page';
import SpeakersPage from './pages/SpeakersPage';
import SpeakerDetailPage from './pages/SpeakerDetailPage';
import PastEventsPage from './pages/PastEventsPage';
import TeamPage from './pages/TeamPage';
import { REGISTRATION_FORM_URL } from './data/tedxData';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function RegisterRedirect() {
  useEffect(() => {
    window.location.replace(REGISTRATION_FORM_URL);
  }, []);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black text-white selection:bg-tedx-red selection:text-white relative">
        <InteractiveBackground />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event-2026" element={<Event2026Page />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/speakers/:id" element={<SpeakerDetailPage />} />
            <Route path="/past-events" element={<PastEventsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/register" element={<RegisterRedirect />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
