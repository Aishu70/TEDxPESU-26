import React, { useState } from 'react';
import { Play, Sparkles, X, ChevronRight, Calendar, Users, Eye, ArrowUpRight, Award, History } from 'lucide-react';
import { PAST_EDITIONS, CDN_BASE } from '../data/tedxData';
import OptimizedImage from '../components/OptimizedImage';

export default function PastEventsPage() {
  const [selectedEdition, setSelectedEdition] = useState('2025');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // All 32 photos from 2025 site
  const allPastPhotos = Array.from({ length: 32 }, (_, i) => {
    const num = i + 1;
    let ext = 'JPG';
    if ([4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].includes(num)) ext = 'png';
    else if ([7, 8, 22, 23, 24].includes(num)) ext = 'jpg';
    
    return {
      id: num,
      title: `Moment #${num} – TEDxPESU`,
      url: `${CDN_BASE}static/media/tedx${num}.b350f35d9c5aca2e2754.${ext}`, // CDN fallback
      fallback: `https://images.unsplash.com/photo-${[
        '1492684223066-81342ee5ff30',
        '1511578314322-379afb476865',
        '1475721027785-f74eccf877e2',
        '1528605248644-14dd04022da1',
        '1505373877841-8d25f7d46678',
        '1515187029135-18ee286d815b',
        '1523580494863-6f3031224c94',
        '1540575467063-178a50c2df87'
      ][i % 8]}?auto=format&fit=crop&w=800&q=80`
    };
  });

  const currentEdition = PAST_EDITIONS.find(e => e.year === selectedEdition) || PAST_EDITIONS[0];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[600px] h-[500px] bg-tedx-red/25 rounded-full blur-[170px] pointer-events-none" />

      {/* Dramatic Red-lit Eye Motif in Top-Right Background */}
      <div className="absolute top-4 right-0 w-[380px] sm:w-[500px] h-[180px] sm:h-[220px] pointer-events-none z-0 overflow-hidden opacity-90">
        <OptimizedImage
          src="/assets/eye-full.jpg"
          alt=""
          sizes="(min-width: 640px) 500px, 380px"
          className="w-full h-full object-cover object-center contrast-130 brightness-95"
          style={{
            maskImage: 'radial-gradient(ellipse 85% 80% at 50% 50%, black 40%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at 50% 50%, black 40%, transparent 95%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ========================================================
            HEADER & VIDEO SHOWCASE (Matches Middle Right in Template)
        ======================================================== */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-tedx-muted">
            PAST EVENTS
          </span>
          <h1 className="text-5xl sm:text-6xl font-black font-condensed tracking-tight uppercase leading-[0.95]">
            TEDxPESU 2025
          </h1>
          <p className="text-sm sm:text-base text-tedx-muted leading-relaxed">
            A look back at last year's ideas, speakers, and the incredible TEDxPESU community. Relive the transformative talks delivered under the theme <strong className="text-white">"Tessellations of Time"</strong>.
          </p>
        </div>

        {/* Edition Selector Tabs */}
        <div className="flex items-center space-x-2 border-b border-white/10 pb-4">
          {PAST_EDITIONS.map((edition) => (
            <button
              key={edition.year}
              onClick={() => setSelectedEdition(edition.year)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                selectedEdition === edition.year
                  ? 'bg-tedx-red text-white shadow-glow-sm'
                  : 'bg-[#12121a] text-tedx-muted hover:text-white'
              }`}
            >
              TEDxPESU {edition.year} • {edition.theme}
            </button>
          ))}
        </div>

        {/* Hero Video & Highlight Grid (Exact Match to Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Video Banner Card */}
          <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-[#252535] bg-[#0c0c14] aspect-[16/10] shadow-glass flex items-center justify-center">
            <OptimizedImage
              src="/assets/stage-video-ref.jpg"
              alt="TEDxPESU 2025 Stage"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="w-full h-full object-cover contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Play Button & Details */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-20 h-20 rounded-full bg-tedx-red text-white flex items-center justify-center shadow-glow-md hover:scale-110 transition-transform mb-4 group/btn"
                aria-label="Play Aftermovie"
              >
                <Play className="w-8 h-8 fill-white translate-x-0.5" />
              </button>

              <div className="flex items-center space-x-2">
                <span className="text-white font-black text-2xl tracking-tight">TEDx</span>
                <span className="text-white font-bold text-2xl tracking-wider">PESU</span>
              </div>
              <span className="text-xs text-tedx-muted uppercase tracking-widest mt-1">
                Official Aftermovie • {currentEdition.videoDuration || '04:25'}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 z-20">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/10">
                {currentEdition.year}: {currentEdition.theme}
              </span>
            </div>
          </div>

          {/* Stats & Edition Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e0e15] border border-white/10 space-y-4">
              <h3 className="text-2xl font-black font-condensed uppercase tracking-tight text-white">
                Theme: {currentEdition.theme}
              </h3>
              <p className="text-xs sm:text-sm text-tedx-muted leading-relaxed">
                {currentEdition.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div>
                  <span className="text-2xl font-black font-condensed text-tedx-red block">
                    {currentEdition.attendees}
                  </span>
                  <span className="text-[11px] text-tedx-muted uppercase font-medium">Delegates Welcomed</span>
                </div>
                <div>
                  <span className="text-2xl font-black font-condensed text-tedx-red block">
                    {currentEdition.talksCount}
                  </span>
                  <span className="text-[11px] text-tedx-muted uppercase font-medium">Curated Sessions</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.youtube.com/results?search_query=TEDxPESU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center space-x-2 transition-all hover:border-tedx-red"
                >
                  <span>Watch Talks on YouTube</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-tedx-red" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            INTERACTIVE GALLERY (All 32+ Photos from Archive)
        ======================================================== */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#20202d] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-tedx-red">
                Moments & Memories
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-condensed tracking-tight uppercase">
                PHOTO ARCHIVE GALLERY
              </h2>
            </div>
            <span className="text-xs text-tedx-muted">
              Click on any image to expand in full lightbox
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {allPastPhotos.slice(0, 16).map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActiveLightboxImage(photo)}
                className="gallery-item group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#101018] border border-white/10 cursor-pointer hover:border-tedx-red/60 transition-all hover:shadow-glow-sm"
              >
                <OptimizedImage
                  src={photo.fallback}
                  alt={photo.title}
                  sizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-[11px] text-white font-medium flex items-center space-x-1">
                    <Eye className="w-3.5 h-3.5 text-tedx-red" />
                    <span>View Photo</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <span className="text-xs text-tedx-muted">
              Showing 16 of 32 official high-resolution photographs from the TEDxPESU 2025 archive.
            </span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <button
            onClick={() => setActiveLightboxImage(null)}
            className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-tedx-red text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/20">
            <OptimizedImage
              src={activeLightboxImage.fallback}
              alt={activeLightboxImage.title}
              priority
              sizes="(min-width: 1024px) 56rem, 92vw"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden border border-white/20 aspect-video shadow-[0_0_80px_rgba(235,0,40,0.3)]">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/80 text-white hover:bg-tedx-red flex items-center justify-center text-xs font-bold transition-colors"
            >
              ✕
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-[#0b0b12]">
              <div className="w-20 h-20 rounded-full bg-tedx-red/20 border border-tedx-red flex items-center justify-center mb-4">
                <Play className="w-10 h-10 text-tedx-red fill-tedx-red translate-x-0.5" />
              </div>
              <h3 className="text-2xl font-bold text-white">TEDxPESU 2025: Tessellations of Time</h3>
              <p className="text-sm text-tedx-muted max-w-md mt-2">
                Relive the electric energy, captivating talks on "Tessellations of Time", and stunning stage choreography at PES University.
              </p>
              <a
                href="https://www.youtube.com/results?search_query=TEDxPESU"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-2.5 rounded-full bg-tedx-red text-white font-bold text-xs shadow-glow-sm hover:scale-105 transition-transform"
              >
                Watch Talks on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
