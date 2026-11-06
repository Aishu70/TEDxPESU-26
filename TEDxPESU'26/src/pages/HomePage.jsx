import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowUpRight, Play, Sparkles, ChevronRight, CheckCircle2, Ticket } from 'lucide-react';
import { EVENT_DETAILS, SPEAKERS, PAST_EDITIONS } from '../data/tedxData';
import SpeakerCard from '../components/SpeakerCard';
import SpeakerModal from '../components/SpeakerModal';
import CountdownTimer from '../components/CountdownTimer';

export default function HomePage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  // Top 4 featured 2026 speakers matching the template
  const featuredSpeakers = SPEAKERS.slice(0, 4);

  // Core team members for home showcase with exact matching avatars from reference
  const homeTeamMembers = [
    { name: "Aarav Sharma", role: "Organizer", image: "/assets/team-aarav-avatar.jpg" },
    { name: "Meera Iyer", role: "Co-Organizer", image: "/assets/team-meera-avatar.jpg" },
    { name: "Devansh Gupta", role: "Curation Head", image: "/assets/team-devansh-avatar.jpg" },
    { name: "Nikita Rao", role: "Design Head", image: "/assets/team-nikita-avatar.jpg" },
    { name: "Rohan Kulkarni", role: "Web & Tech Head", image: "/assets/team-rohan-avatar.jpg" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pt-16">
      
      {/* ========================================================
          HERO SECTION (Matches Top Banner in Reference Image)
      ======================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 bg-black">
        
        {/* Background Atmospheric Red Glow & Gradient Curves */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-tedx-red/25 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute top-10 right-0 w-[700px] h-[700px] bg-tedx-red/35 rounded-full blur-[180px] pointer-events-none" />

        {/* Sweeping Red Ribbon Curve (Hero Left from reference) */}
        <div className="absolute -bottom-8 left-0 w-full sm:w-[70%] lg:w-[58%] h-[65%] sm:h-[88%] pointer-events-none z-0 overflow-hidden">
          <svg
            viewBox="0 0 750 520"
            preserveAspectRatio="none"
            className="w-full h-full drop-shadow-[0_-5px_35px_rgba(235,0,40,0.55)]"
          >
            <defs>
              <linearGradient id="heroRibbonGrad" x1="0%" y1="100%" x2="45%" y2="0%">
                <stop offset="0%" stopColor="#080002" stopOpacity="0" />
                <stop offset="25%" stopColor="#55000c" stopOpacity="0.8" />
                <stop offset="65%" stopColor="#c70020" stopOpacity="0.92" />
                <stop offset="90%" stopColor="#eb0028" stopOpacity="0.97" />
                <stop offset="100%" stopColor="#ff284b" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="heroRibbonEdge" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#ff4060" stopOpacity="1" />
                <stop offset="50%" stopColor="#eb0028" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#eb0028" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M -60,520 C -20,320 20,190 170,210 C 320,230 460,430 760,490 L 760,520 L -60,520 Z"
              fill="url(#heroRibbonGrad)"
            />
            <path
              d="M -60,520 C -20,320 20,190 170,210 C 320,230 460,430 760,490"
              fill="none"
              stroke="url(#heroRibbonEdge)"
              strokeWidth="3.5"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2">
              <span className="text-zinc-400 tracking-[0.25em] text-xs sm:text-sm font-semibold uppercase">
                TEDxPESU 2026
              </span>
            </div>

            {/* Giant Title: CONTRAST IN CONVERGENCE */}
            <h1 className="text-5xl sm:text-9xl lg:text-9xl font-black font-condensed tracking-tight leading-[0.92] text-white uppercase drop-shadow-lg">
              CONTRAST IN <br />
              <span className="text-tedx-red tracking-tight inline-block hover:scale-[1.01] transition-transform">
                CONVERGENCE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-xl font-normal leading-relaxed">
              Where opposing perspectives meet, collide, and create new possibilities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/register"
                className="px-8 py-3.5 rounded-full bg-tedx-red hover:bg-tedx-red-hover text-white font-bold text-sm tracking-wide shadow-glow-sm hover:shadow-glow-md transition-all flex items-center space-x-2 group"
              >
                <span>Register for 2026</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/event-2026"
                className="px-7 py-3.5 rounded-full bg-[#121218]/90 hover:bg-[#1c1c26] text-white border border-white/20 hover:border-tedx-red/50 text-sm font-medium transition-all"
              >
                Explore Event
              </Link>
            </div>

            {/* Event Info Bar Pill (Direct from Reference) */}
            <div className="pt-6">
              <div className="inline-flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 bg-black/85 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 text-xs text-zinc-400 shadow-xl">
                <div className="flex items-center space-x-2 text-white font-medium">
                  <Calendar className="w-4 h-4 text-tedx-red" />
                  <span>Nov 14, 2026</span>
                </div>
                <span className="text-white/20 hidden sm:inline">|</span>
                <div className="flex items-center space-x-2 text-white font-medium">
                  <MapPin className="w-4 h-4 text-tedx-red" />
                  <span>PES University, Bengaluru</span>
                </div>
                <span className="text-white/20 hidden sm:inline">|</span>
                <div className="flex items-center space-x-2 text-zinc-400">
                  <Users className="w-4 h-4 text-tedx-red" />
                  <span>Live Talks · Ideas · Community</span>
                </div>
              </div>
            </div>

            {/* Countdown Badge */}
            <div className="pt-2">
              <CountdownTimer />
            </div>

          </div>

          {/* Right Visual (Reaching Hand through Vertical Slats & Crimson Backlight) */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-[16/11] lg:aspect-[4/3] group">
              
              {/* Red Aura Glow behind Hand */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-tedx-red/45 rounded-full blur-[110px] pointer-events-none" />
              <div className="absolute -bottom-10 right-20 w-80 h-80 bg-tedx-red/25 rounded-full blur-[90px] pointer-events-none" />

              {/* The Hero Hand Visual from Reference Image */}
              <img
                src="/assets/hero-hand-enhanced.jpg"
                alt="Contrast in Convergence Hand Visual"
                className="w-full h-full object-cover object-center contrast-125 brightness-105 group-hover:scale-105 transition-transform duration-700"
                style={{
                  maskImage: 'radial-gradient(ellipse 95% 90% at 65% 50%, black 55%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 95% 90% at 65% 50%, black 55%, transparent 100%)'
                }}
              />

              {/* Vignette gradients to ensure 100% seamless bleed into pure black */}
              <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================
          THE 2026 EVENT PREVIEW SECTION (Matches Middle Left Panel)
      ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative bg-black overflow-hidden">
        
        {/* Sweeping Red Wave in Background (Directly from reference) */}
        <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full pointer-events-none z-0 overflow-hidden">
          <svg
            viewBox="0 0 800 600"
            preserveAspectRatio="none"
            className="w-full h-full drop-shadow-[0_0_40px_rgba(235,0,40,0.4)] opacity-90"
          >
            <defs>
              <linearGradient id="eventWaveGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff284b" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#eb0028" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#600010" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="eventWaveStroke" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff3a5a" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#eb0028" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#eb0028" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 900,100 C 700,160 550,260 400,380 C 250,500 120,540 -100,560 L -100,600 L 900,600 Z"
              fill="url(#eventWaveGrad)"
            />
            <path
              d="M 900,100 C 700,160 550,260 400,380 C 250,500 120,540 -100,560"
              fill="none"
              stroke="url(#eventWaveStroke)"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Event Intro */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                THE 2026 EVENT
              </span>
              <h2 className="text-4xl sm:text-6xl font-black font-condensed tracking-tight uppercase leading-[0.95]">
                CONTRAST IN <br />
                <span className="text-tedx-red">CONVERGENCE</span>
              </h2>
              <p className="text-zinc-300 text-base max-w-lg leading-relaxed pt-2">
                A day of ideas, stories, and perspectives where opposing worlds meet to create a larger, shared picture.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Link
                  to="/register"
                  className="px-6 py-2.5 rounded-full bg-tedx-red hover:bg-tedx-red-hover text-white text-xs font-bold uppercase tracking-wider shadow-glow-sm transition-all flex items-center space-x-1.5"
                >
                  <span>Register Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/event-2026"
                  className="px-5 py-2.5 rounded-full bg-[#14141c]/90 hover:bg-[#1f1f2a] text-white border border-white/20 text-xs font-medium transition-all flex items-center space-x-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-tedx-red" />
                  <span>Add to Calendar</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Event Info Card (Glowing Crimson Card from Reference) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-6 sm:p-8 card-red-gradient space-y-6 relative overflow-hidden">
                <div className="space-y-4">
                  
                  {/* Date item */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-tedx-red/25 border border-tedx-red/40 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-tedx-red" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Nov 14, 2026</h4>
                      <p className="text-xs text-zinc-300">Saturday</p>
                    </div>
                  </div>

                  {/* Venue item */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-tedx-red/25 border border-tedx-red/40 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-tedx-red" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">PES University</h4>
                      <p className="text-xs text-zinc-300">Bengaluru</p>
                    </div>
                  </div>

                  {/* Type item */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-tedx-red/25 border border-tedx-red/40 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-tedx-red" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">In-Person Event</h4>
                      <p className="text-xs text-zinc-300">Talks · Performances · Networking</p>
                    </div>
                  </div>

                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-zinc-300">
                  <span>Seats Filling Quickly</span>
                  <Link to="/register" className="text-white hover:text-tedx-red font-bold flex items-center space-x-1 transition-colors">
                    <span>Reserve Seat</span>
                    <ArrowUpRight className="w-3 h-3 text-tedx-red" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* MEET THE SPEAKERS ROW (Matches Middle Left Bottom) */}
          <div className="space-y-6 pt-4">
            <div className="flex items-end justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-3xl sm:text-4xl font-black font-condensed tracking-tight uppercase">
                  MEET THE SPEAKERS
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Pioneering voices across deep science, theatre, circular economics, and generative AI.
                </p>
              </div>

              <Link
                to="/speakers"
                className="text-xs sm:text-sm font-semibold text-white/80 hover:text-tedx-red flex items-center space-x-1 transition-colors"
              >
                <span>View All Speakers</span>
                <ChevronRight className="w-4 h-4 text-tedx-red" />
              </Link>
            </div>

            {/* Speakers Grid (4 cards matching the template) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {featuredSpeakers.map((speaker) => (
                <SpeakerCard
                  key={speaker.id}
                  speaker={speaker}
                  onClick={() => setSelectedSpeaker(speaker)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          PAST EVENTS & TEAM SECTION (Matches Middle Right Panel)
      ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-black relative overflow-hidden">
        
        {/* Dramatic Red-lit Eye Motif in Top-Right Background from Reference */}
        <div className="absolute top-4 right-0 w-[380px] sm:w-[500px] h-[180px] sm:h-[220px] pointer-events-none z-0 overflow-hidden opacity-90">
          <img
            src="/assets/eye-full.jpg"
            alt=""
            className="w-full h-full object-cover object-center contrast-130 brightness-95"
            style={{
              maskImage: 'radial-gradient(ellipse 85% 80% at 50% 50%, black 40%, transparent 95%)',
              WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at 50% 50%, black 40%, transparent 95%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto space-y-20 relative z-10">
          
          {/* PAST EVENTS: TEDxPESU 2025 */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                PAST EVENTS
              </span>
              <h2 className="text-4xl sm:text-5xl font-black font-condensed tracking-tight uppercase">
                TEDxPESU 2025
              </h2>
              <p className="text-sm text-zinc-400 max-w-xl">
                A look back at last year's ideas, speakers, and the incredible TEDxPESU community.
              </p>
            </div>

            {/* Video Player & Photo Grid (Exact layout from Reference Image) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Main Featured Video / Showcase (Col 7) */}
              <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-white/10 bg-[#08080c] aspect-[16/10] shadow-2xl flex items-center justify-center">
                <img
                  src="/assets/stage-video-ref.jpg"
                  alt="TEDxPESU 2025 Stage"
                  className="w-full h-full object-cover contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Play Button & Title */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-tedx-red text-white flex items-center justify-center shadow-glow-md hover:scale-110 transition-transform mb-4 group/btn"
                    aria-label="Play Aftermovie"
                  >
                    <Play className="w-8 h-8 fill-white translate-x-0.5" />
                  </button>

                  <div className="flex items-center space-x-2">
                    <span className="text-white font-black text-2xl tracking-tight">TEDx</span>
                    <span className="text-white font-bold text-2xl tracking-wider">PESU</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 uppercase tracking-widest mt-1">
                    Official Aftermovie • 04:25
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/10">
                    2025: Tessellations of Time
                  </span>
                </div>
              </div>

              {/* Grid of Past Photos + More link (Col 5) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                
                {/* Photo 1: Audience */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 group bg-black">
                  <img
                    src="/assets/past-photo-1.jpg"
                    alt="Audience"
                    className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Photo 2: Speaker with red X */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 group bg-black">
                  <img
                    src="/assets/past-photo-2.jpg"
                    alt="Speaker"
                    className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Photo 3: Networking / Team */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 group bg-black">
                  <img
                    src="/assets/past-photo-3.jpg"
                    alt="Networking"
                    className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Photo 4: +12 More Link */}
                <Link
                  to="/past-events"
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-tedx-red/40 bg-[#0d0d14] flex flex-col items-center justify-center text-center p-4 group hover:bg-tedx-red/20 transition-all hover:border-tedx-red"
                >
                  <span className="text-3xl font-black text-white font-condensed group-hover:text-tedx-red transition-colors">
                    +12
                  </span>
                  <span className="text-[11px] text-zinc-400 group-hover:text-white mt-1 flex items-center space-x-1 font-medium">
                    <span>More from 2025</span>
                    <ArrowUpRight className="w-3 h-3 text-tedx-red" />
                  </span>
                </Link>

              </div>

            </div>
          </div>

          {/* THE TEAM ROW (Matches Bottom Right Team Panel in Reference Image) */}
          <div className="space-y-6 pt-6">
            <div className="flex items-end justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-3xl sm:text-4xl font-black font-condensed tracking-tight uppercase">
                  THE TEAM
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Meet the people who bring TEDxPESU to life.
                </p>
              </div>

              <Link
                to="/team"
                className="text-xs sm:text-sm font-semibold text-white/80 hover:text-tedx-red flex items-center space-x-1 transition-colors"
              >
                <span>View Full Team</span>
                <ChevronRight className="w-4 h-4 text-tedx-red" />
              </Link>
            </div>

            {/* Team Members 5-Card Row (Matches bottom right in screenshot) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {homeTeamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl bg-[#08080c] border border-white/10 p-3 text-center transition-all duration-300 hover:border-tedx-red/60 hover:shadow-[0_0_25px_rgba(235,0,40,0.3)] hover:-translate-y-1"
                >
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black mb-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-tedx-red transition-colors tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-[11px] text-[#9ca3af] mt-0.5">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          REGISTRATION TEASER / TICKET CALLOUT
      ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black border-t border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-tedx-red/20 rounded-full blur-[170px] pointer-events-none" />

        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#12121a] to-[#08080e] border border-tedx-red/35 relative z-10 text-center space-y-6 shadow-[0_20px_80px_rgba(235,0,40,0.25)]">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-tedx-red text-white shadow-glow-sm">
            Tickets Now Live
          </span>
          <h2 className="text-4xl sm:text-5xl font-black font-condensed tracking-tight uppercase">
            SECURE YOUR SEAT AT TEDxPESU 2026
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Limited seating available in the Main PESU Auditorium. Join 1,500+ students, thinkers, and innovators for an unforgettable day of transformation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/register"
              className="px-8 py-3.5 rounded-full bg-tedx-red hover:bg-tedx-red-hover text-white font-bold text-sm tracking-wide shadow-glow-md flex items-center space-x-2 transition-all"
            >
              <Ticket className="w-4 h-4" />
              <span>Register for Passes</span>
            </Link>

            <Link
              to="/speakers"
              className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 text-sm font-medium transition-all"
            >
              Explore All Speakers
            </Link>
          </div>
        </div>
      </section>

      {/* Speaker Modal */}
      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-white/20 aspect-video">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/70 text-white hover:bg-tedx-red text-xs font-bold transition-colors"
            >
              Close ✕
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-[#08080d]">
              <div className="w-20 h-20 rounded-full bg-tedx-red/20 border border-tedx-red flex items-center justify-center mb-4">
                <Play className="w-10 h-10 text-tedx-red fill-tedx-red translate-x-0.5" />
              </div>
              <h3 className="text-2xl font-bold text-white">TEDxPESU 2025 Official Aftermovie</h3>
              <p className="text-sm text-zinc-300 max-w-md mt-2">
                Relive the electric energy, captivating talks on "Tessellations of Time", and stunning stage choreography at PES University.
              </p>
              <a
                href="https://www.youtube.com/results?search_query=TEDxPESU"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-2.5 rounded-full bg-tedx-red text-white font-bold text-xs shadow-glow-sm hover:scale-105 transition-transform"
              >
                Watch Full Playlist on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
