import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { CDN_BASE, REGISTRATION_FORM_URL } from '../data/tedxData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: '2026 Event', path: '/event-2026' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Past Events', path: '/past-events' },
    { name: 'Team', path: '/team' },
  ];

  // Warm the lazy route chunk the moment a visitor shows intent.
  const routeLoaders = {
    '/event-2026': () => import('../pages/Event2026Page'),
    '/speakers': () => import('../pages/SpeakersPage'),
    '/past-events': () => import('../pages/PastEventsPage'),
    '/team': () => import('../pages/TeamPage'),
  };

  const prefetchRoute = (path) => {
    const loader = routeLoaders[path];
    if (loader) loader().catch(() => {});
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-baseline font-bold tracking-tight">
              <span className="text-white text-2xl font-black font-sans tracking-tighter">TED</span>
              <span className="text-tedx-red text-2xl font-black">x</span>
              <span className="text-white text-2xl font-black font-sans tracking-wider ml-0.5">PESU</span>
            </div>
            <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-widest text-tedx-red bg-tedx-red/10 border border-tedx-red/30 px-2 py-0.5 rounded-full ml-2">
              2026
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#121218]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5 shadow-inner">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onMouseEnter={() => prefetchRoute(link.path)}
                  onFocus={() => prefetchRoute(link.path)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    active 
                      ? 'text-white' 
                      : 'text-tedx-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-tedx-red rounded-full shadow-[0_0_8px_#eb0028]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase bg-transparent text-white border border-white/25 hover:border-tedx-red hover:bg-tedx-red hover:text-white transition-all duration-300 shadow-sm hover:shadow-glow-sm group"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-tedx-red text-white"
            >
              Register ↗
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[#14141c] text-white border border-white/10 hover:text-tedx-red focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#23232e] px-4 pt-3 pb-6 space-y-2 mt-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                onMouseEnter={() => prefetchRoute(link.path)}
                onFocus={() => prefetchRoute(link.path)}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                  active 
                    ? 'bg-tedx-red/15 text-white border-l-4 border-tedx-red' 
                    : 'text-tedx-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-white/10">
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-tedx-red text-white font-bold text-sm shadow-glow-sm"
            >
              <span>Register for 2026 Event</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
