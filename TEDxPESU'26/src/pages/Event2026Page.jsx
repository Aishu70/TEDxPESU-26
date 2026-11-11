import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowUpRight, Navigation, Info } from 'lucide-react';
import { REGISTRATION_FORM_URL } from '../data/tedxData';

export default function Event2026Page() {

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 overflow-hidden relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-tedx-red/25 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-tedx-red/15 rounded-full blur-[180px] pointer-events-none" />

      {/* Sweeping Red Wave in Background */}
      <div className="absolute top-0 right-0 w-full lg:w-[65%] h-[600px] pointer-events-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
          className="w-full h-full drop-shadow-[0_0_40px_rgba(235,0,40,0.4)] opacity-85"
        >
          <defs>
            <linearGradient id="eventPageWaveGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff284b" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#eb0028" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#600010" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="eventPageWaveStroke" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff3a5a" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#eb0028" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#eb0028" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 900,100 C 700,160 550,260 400,380 C 250,500 120,540 -100,560 L -100,600 L 900,600 Z"
            fill="url(#eventPageWaveGrad)"
          />
          <path
            d="M 900,100 C 700,160 550,260 400,380 C 250,500 120,540 -100,560"
            fill="none"
            stroke="url(#eventPageWaveStroke)"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        

        {/* ========================================================
            HERO CARD & HEADER (Directly Matches Middle Left Panel)
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Intro Text */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-tedx-muted">
              THE 2026 EVENT
            </span>
            <h1 className="text-5xl sm:text-9xl font-black font-condensed tracking-tight uppercase leading-[0.92]">
              CONTRAST IN <br />
              <span className="text-tedx-red">CONVERGENCE</span>
            </h1>
            <p className="text-tedx-muted text-base sm:text-lg max-w-xl leading-relaxed pt-2">
              A day of ideas, stories, and perspectives where opposing worlds meet to create a larger, shared picture.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-tedx-red hover:bg-tedx-red-hover text-white text-xs font-bold uppercase tracking-wider shadow-glow-sm transition-all flex items-center space-x-1.5"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              
            </div>
          </div>

          {/* Right Info Card (Matches Screenshot Box) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 sm:p-8 card-red-gradient border border-tedx-red/35 shadow-[0_15px_50px_rgba(0,0,0,0)] space-y-6">
              
              <div className="space-y-4">
                {/* Date */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-tedx-red/20 border border-tedx-red/40 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-tedx-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Nov 14, 2026</h3>
                    <p className="text-xs text-tedx-muted">Saturday • 09:30 AM to 06:00 PM IST</p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-tedx-red/20 border border-tedx-red/40 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-tedx-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">PES University</h3>
                    <p className="text-xs text-tedx-muted">100 Feet Ring Road, BSK III Stage, Bengaluru</p>
                  </div>
                </div>

                {/* Event Format */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-tedx-red/20 border border-tedx-red/40 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-tedx-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">In-Person Event</h3>
                    <p className="text-xs text-tedx-muted">Talks · Performances · Networking</p>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1.5 text-red-400">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  <span>Registration Open</span>
                </span>
                <span className="text-tedx-muted">Main Auditorium (MRD Block)</span>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================
            ABOUT TEDx — TEXT FROM SCREENSHOT
        ======================================================== */}
        <div className="space-y-6 bg-[#0d0d14] p-8 sm:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
          <div className="max-w-4xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-tedx-red">
              About TEDx
            </span>
            <p className="text-sm sm:text-base text-tedx-muted leading-relaxed">
              TEDx, a grassroots initiative, embodies the core principles of TED — technology, entertainment, and design, which are the driving forces shaping our world today. These highly curated talks feature expert speakers who passionately share their innovative ideas with the audience.
            </p>
            <p className="text-sm sm:text-base text-tedx-muted leading-relaxed">
              TEDx brings the spirit of TED to communities worldwide, fostering the discovery and dissemination of "ideas worth spreading." Organized by dedicated individuals, these local TEDx events showcase the latest research and insights from their respective areas, sparking meaningful conversations within their communities. These events feature live speakers as well as recorded TED Talks, all organized independently under a free license granted by TED.
            </p>
          </div>
        </div>

        {/* ========================================================
            THEME PHILOSOPHY: CONTRAST IN CONVERGENCE
        ======================================================== */}
        <div className="space-y-6 bg-[#0d0d14] p-8 sm:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-tedx-red">
              Curatorial Statement
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-condensed tracking uppercase">
              WHY "CONTRAST IN CONVERGENCE"?
            </h2>
            <p className="text-sm sm:text-base text-tedx-muted leading-relaxed">
              We live in a world obsessed with categorizing everything into binary choices: art vs. technology, speed vs. mindfulness, economic growth vs. ecological survival. Yet the most profound breakthroughs never happen when these forces remain in their isolated silos.
            </p>
            <p className="text-sm sm:text-base text-tedx-muted leading-relaxed">
              At TEDxPESU 2026, we explore the friction at the boundary. When contrasting forces collide, they do not annihilate each other—they ignite unexpected synthesis.
            </p>
          </div>
        </div>

        {/* ========================================================
            VENUE & CAMPUS DIRECTIONS
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0d0d14] p-8 sm:p-12 rounded-3xl border border-white/5">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-tedx-red flex items-center space-x-1.5">
                <Navigation className="w-3.5 h-3.5" />
                <span>Venue &amp; Accessibility</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-condensed tracking-tight uppercase">
                PES UNIVERSITY, BENGALURU
              </h2>
            </div>

            <p className="text-sm text-tedx-muted leading-relaxed">
              The 2026 conference will be hosted inside the state-of-the-art MRD Auditorium at PES University Ring Road Campus. With acoustic engineering, multi-tiered seating, and immersive crimson lighting, the hall offers every delegate an intimate view of the iconic red dot.
            </p>

            <div className="space-y-3 text-xs text-tedx-muted">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-tedx-red shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Full Address:</span>
                  <span>100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar, Bengaluru, Karnataka 560085</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Info className="w-4 h-4 text-tedx-red shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Transit Guide:</span>
                  <span>Conveniently connected via Namma Metro (Green Line - Banashankari Station) and BMTC feeder routes. On-campus dedicated delegate parking is available via Gate 2.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=PES+University+Ring+Road+Campus+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold transition-all hover:border-tedx-red"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-tedx-red" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-glass">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
              alt="PES University Campus"
              className="w-full h-full object-cover contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs text-white/90 font-medium">
                PES University Main Campus • Banashankari, Bengaluru
              </span>
            </div>
          </div>

        </div>

        {/* Bottom CTA Banner */}
        <div className="text-center py-10 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black font-condensed uppercase">
            Ready to experience the convergence?
          </h3>
          <p className="text-xs sm:text-sm text-tedx-muted max-w-md mx-auto">
            Book your delegate pass now and be part of the most anticipated ideas festival of 2026.
          </p>
          <div className="pt-2">
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-tedx-red hover:bg-tedx-red-hover text-white text-xs font-bold uppercase tracking-wider shadow-glow-sm inline-flex items-center space-x-2"
            >
              <span>Register for Passes</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
