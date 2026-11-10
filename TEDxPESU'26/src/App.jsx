import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import HomePage from './pages/HomePage';
import { REGISTRATION_FORM_URL } from './data/tedxData';

// Keep the landing page eager for the fastest possible first paint, but split
// every secondary route so a visitor does not download the whole site upfront.
const Event2026Page = lazy(() => import('./pages/Event2026Page'));
const SpeakersPage = lazy(() => import('./pages/SpeakersPage'));
const SpeakerDetailPage = lazy(() => import('./pages/SpeakerDetailPage'));
const PastEventsPage = lazy(() => import('./pages/PastEventsPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));

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

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-live="polite">
      <span className="h-8 w-8 rounded-full border-2 border-white/15 border-t-tedx-red animate-spin" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

/**
 * The particle canvas is decorative. Mount it after the first paint (and never
 * for reduced-motion or data-saver visitors) so it cannot compete with the
 * hero image for main-thread/GPU time during LCP.
 */
function DeferredBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const connection = navigator.connection;
    const saveData = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '');

    if (reduceMotion || saveData) return undefined;

    let idleId;
    let timeoutId;
    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(() => setEnabled(true), { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(() => setEnabled(true), 1200);
    }

    return () => {
      if (idleId && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return enabled ? <InteractiveBackground /> : null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black text-white selection:bg-tedx-red selection:text-white relative">
        <DeferredBackground />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageFallback />}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
