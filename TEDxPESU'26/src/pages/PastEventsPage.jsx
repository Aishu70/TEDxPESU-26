import React, { useState, useEffect } from 'react';
import { Play, Sparkles, X, ChevronLeft, ChevronRight, Calendar, Users, Eye, ArrowUpRight, Award, History } from 'lucide-react';
import { PAST_EDITIONS, CDN_BASE } from '../data/tedxData';

export default function PastEventsPage() {
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const allPastPhotos = [
    { id: 1, url: '/assets/2025/gallery/performer_IMG_3641.webp' },
    { id: 2, url: '/assets/2025/gallery/performer_IMG_3654.webp' },
    //{ id: 3, url: '/assets/2025/gallery/performer_IMG_3662.webp' },
    { id: 4, url: '/assets/2025/gallery/performer_IMG_3664.webp' },
    { id: 5, url: '/assets/2025/gallery/performer_sanskriti.webp' },

    { id: 6, url: '/assets/2025/gallery/speaker_deep%201.webp' },
    { id: 7, url: '/assets/2025/gallery/speaker_deep%202.webp' },
    //{ id: 8, url: '/assets/2025/gallery/speaker_DSC_6873.webp' },
    //{ id: 9, url: '/assets/2025/gallery/speaker_DSC_6875.webp' },
    { id: 10, url: '/assets/2025/gallery/speaker_DSC_6909.webp' },
    //{ id: 11, url: '/assets/2025/gallery/speaker_DSC_6931.webp' },
    { id: 12, url: '/assets/2025/gallery/speaker_DSC_6932.webp' },
    //{ id: 13, url: '/assets/2025/gallery/speaker_DSC_6934.webp' },
    { id: 14, url: '/assets/2025/gallery/speaker_DSC_6961.webp' },
    { id: 15, url: '/assets/2025/gallery/speaker_DSC_7077.webp' },
    { id: 16, url: '/assets/2025/gallery/speaker_DSC_9527.webp' },

    { id: 17, url: '/assets/2025/gallery/speaker_nidhi%201.webp' },
    //{ id: 18, url: '/assets/2025/gallery/speaker_nidhi%202.webp' },
    //{ id: 19, url: '/assets/2025/gallery/speaker_nidhi%203.webp' },
    { id: 20, url: '/assets/2025/gallery/speaker_nidhi%204.webp' },
    { id: 21, url: '/assets/2025/gallery/speaker_nidhi%205.webp' },

    { id: 22, url: '/assets/2025/gallery/speaker_poo%201.webp' },
    { id: 23, url: '/assets/2025/gallery/speaker_poo%202.webp' },
    { id: 24, url: '/assets/2025/gallery/speaker_poo%203.webp' },
    { id: 25, url: '/assets/2025/gallery/speaker_poo%204.webp' },
    { id: 26, url: '/assets/2025/gallery/speaker_poo%205.webp' },

    { id: 27, url: '/assets/2025/gallery/speaker_vivek%201.webp' },
    { id: 28, url: '/assets/2025/gallery/speaker_vivek%202.webp' },
    //{ id: 29, url: '/assets/2025/gallery/speaker_vivek%203.webp' },
    { id: 30, url: '/assets/2025/gallery/speaker_vivek%204.webp' },
    { id: 31, url: '/assets/2025/gallery/speaker_vivek%205.webp' },
    { id: 32, url: '/assets/2025/gallery/speaker_vivek%206.webp' },

    { id: 33, url: '/assets/2025/gallery/speaker_vk%201.webp' },
    { id: 34, url: '/assets/2025/gallery/speaker_vk%202.webp' },
    { id: 35, url: '/assets/2025/gallery/speaker_vk%203.webp' },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % allPastPhotos.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [allPastPhotos.length]);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[600px] h-[500px] bg-tedx-red/25 rounded-full blur-[170px] pointer-events-none" />

      {/* Dramatic Red-lit Eye Motif in Top-Right Background */}
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

        {/* Hero Video & Highlight Grid (Exact Match to Screenshot) */}

        {/* Photo Slideshow & Event Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Photo Slideshow */}
          <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-[#252535] bg-[#0c0c14] aspect-[16/10] shadow-glass">

            <img
              key={allPastPhotos[activeSlide].id}
              src={allPastPhotos[activeSlide].url}
              alt="TEDxPESU 2025 event"
              className="w-full h-full object-cover animate-slideshow-fade"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

            {/* Previous */}
            <button
              onClick={() =>
                setActiveSlide((prev) =>
                  (prev - 1 + allPastPhotos.length) % allPastPhotos.length
                )
              }
              aria-label="Previous photograph"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-tedx-red transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next */}
            <button
              onClick={() =>
                setActiveSlide((prev) => (prev + 1) % allPastPhotos.length)
              }
              aria-label="Next photograph"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-tedx-red transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Event Details */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e0e15] border border-white/10 space-y-6">

              <h3 className="text-2xl font-black font-condensed uppercase tracking-tight text-white">
                THE EVENT
              </h3>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">

                <div>
                  <span className="text-2xl font-black font-condensed text-tedx-red block">
                    1,200+
                  </span>
                  <span className="text-[11px] text-tedx-muted uppercase font-medium">
                    Delegates Welcomed
                  </span>
                </div>

                <div>
                  <span className="text-2xl font-black font-condensed text-tedx-red block">
                    8
                  </span>
                  <span className="text-[11px] text-tedx-muted uppercase font-medium">
                    Curated Sessions
                  </span>
                </div>

              </div>

              <div className="pt-4 border-t border-white/5">
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
    SPEAKERS INTRODUCTION
======================================================== */}
        <div className="space-y-6 pt-6">
          <div className="border-b border-[#20202d] pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-tedx-red">
              Meet the voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-condensed tracking-tight uppercase">
              OUR SPEAKERS
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Screenshot%202026-11-10%20205948.png',
              'Screenshot%202026-11-10%20205957.png',
              'Screenshot%202026-11-10%20210007.png',
              'Screenshot%202026-11-10%20210018.png',
              'Screenshot%202026-11-10%20210028.png',
              'Screenshot%202026-11-10%20210043.png',
            ].map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={`/assets/2025/intro/${image}`}
                  alt="TEDxPESU 2025 speaker"
                  className="w-full h-64 object-contain transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

{/* ========================================================
    PERFORMERS INTRODUCTION
======================================================== */}
        <div className="space-y-6 pt-6">
          <div className="border-b border-[#20202d] pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-tedx-red">
              The performances
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-condensed tracking-tight uppercase">
              OUR PERFORMERS
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              'Screenshot%202026-11-10%20205807.png',
              'Screenshot%202026-11-10%20205918.png',
            ].map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={`/assets/2025/intro/${image}`}
                  alt="TEDxPESU 2025 performer"
                  className="w-full h-64 object-contain transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            ))}
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
            {allPastPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActiveLightboxImage(photo)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#101018] border border-white/10 cursor-pointer hover:border-tedx-red/60 transition-all hover:shadow-glow-sm"
              >
                <img
                  src={photo.url}
                  alt="TEDxPESU 2025 event photograph"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
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
              Showing 27 photographs from the TEDxPESU 2025 archive.
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
            <img
              src={activeLightboxImage.url}
              alt="TEDxPESU 2025 event photograph"
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
