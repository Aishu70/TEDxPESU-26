import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Calendar, Heart, ShieldCheck } from 'lucide-react';
import { EVENT_DETAILS, REGISTRATION_FORM_URL } from '../data/tedxData';

// Custom inline Instagram SVG
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient red glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-tedx-red/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-white text-3xl font-black font-sans tracking-tight">TED</span>
              <span className="text-tedx-red text-3xl font-black">x</span>
              <span className="text-white text-3xl font-black font-sans tracking-wider ml-0.5">PESU</span>
            </Link>
            <p className="text-sm text-tedx-muted leading-relaxed max-w-sm">
              TEDxPESU is an independently organized TED event run under official license from TED, hosted at PES University, Bengaluru. We bring together visionary thinkers, curious youth, and changemakers to explore ideas worth spreading.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs text-tedx-muted">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-tedx-red" />
                <span>Bengaluru, India</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-tedx-red" />
                <span>Feb 14, 2026</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-tedx-muted">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/event-2026" className="hover:text-white transition-colors">The 2026 Event</Link>
              </li>
              <li>
                <Link to="/speakers" className="hover:text-white transition-colors">Meet the Speakers</Link>
              </li>
              <li>
                <Link to="/past-events" className="hover:text-white transition-colors">Past Editions (2025)</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">Organizing Team</Link>
              </li>
              <li>
                <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-tedx-red transition-colors font-medium">Ticket Registration</a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm text-tedx-muted">
              <li>
                <a 
                  href="https://www.instagram.com/tedxpesu/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-2 hover:text-white transition-colors group"
                >
                  <InstagramIcon className="w-4 h-4 text-tedx-red" />
                  <span>@tedxpesu</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:tedxpesu.rr@pes.edu" 
                  className="inline-flex items-center space-x-2 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-tedx-red" />
                  <span>tedxpesu.rr@pes.edu</span>
                </a>
              </li>
              <li>
                <span className="block text-xs text-tedx-muted pt-2">
                  PES University Campus<br />
                  100 Feet Ring Road, BSK III Stage,<br />
                  Bengaluru 560085
                </span>
              </li>
            </ul>
          </div>

          {/* TEDx License Box */}
          <div className="space-y-3 bg-[#0d0d14] p-4 rounded-2xl border border-white/5">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-tedx-red">
              <ShieldCheck className="w-4 h-4" />
              <span>Independent License</span>
            </div>
            <p className="text-xs text-tedx-muted leading-relaxed">
              In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection.
            </p>
          </div>

        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-tedx-muted/80 space-y-4 md:space-y-0">
          <p>
            © {new Date().getFullYear()} TEDxPESU. This independent TEDx event is operated under license from TED.
          </p>
          <div className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-tedx-red fill-tedx-red inline" />
            <span>by TEDxPESU Web & Tech Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
