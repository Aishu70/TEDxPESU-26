import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

export default function SpeakerCard({ speaker, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer rounded-2xl bg-[#08080c] border border-white/10 overflow-hidden transition-all duration-300 hover:border-tedx-red/70 hover:shadow-[0_0_35px_rgba(235,0,40,0.35)] hover:-translate-y-1.5 flex flex-col"
    >
      {/* Photo Container with Graphic Red Arc Backdrop */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
        
        {/* Graphic Glowing Red Arc in backdrop matching template */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 200 250" preserveAspectRatio="none" fill="none">
            <path
              d="M -20,260 C 40,200 110,120 220,90 L 220,260 Z"
              fill="url(#cardRedArc)"
              opacity="0.85"
            />
            <path
              d="M -20,260 C 40,200 110,120 220,90"
              stroke="#ff1a3d"
              strokeWidth="2.5"
            />
            <defs>
              <linearGradient id="cardRedArc" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4a000a" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#eb0028" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#ff1a3d" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Radial red spotlight */}
        <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-tedx-red/40 blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

        {/* Speaker Image — grayscale by default, full color on hover */}
        <OptimizedImage
          src={speaker.image}
          alt={speaker.name}
          sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, (min-width: 640px) 48vw, 45vw"
          fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=0a0a10&color=eb0028&size=512`}
          className="relative z-10 h-full w-full object-cover object-top grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
        />

        {/* Edition badge */}
        {speaker.category && (
          <div className="absolute top-3 left-3 z-20">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/80 backdrop-blur-md text-tedx-red border border-tedx-red/30">
              {speaker.category === '2026' ? '2026 Keynote' : `${speaker.category}`}
            </span>
          </div>
        )}
      </div>

      {/* Info Content with Bottom Right Arrow Button */}
      <div className="p-4 flex-1 flex items-end justify-between bg-[#08080c] relative z-10 border-t border-white/5">
        <div className="pr-2">
          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-tedx-red transition-colors tracking-tight">
            {speaker.name}
          </h3>
          <p className="text-xs text-[#9ca3af] line-clamp-1 mt-0.5">
            {speaker.role}
          </p>
          {speaker.company && (
            <p className="text-[10px] text-[#6b7280] font-mono uppercase tracking-wider mt-1 truncate">
              {speaker.company}
            </p>
          )}
        </div>

        {/* Arrow Button */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-tedx-red group-hover:border-tedx-red transition-all duration-300 shrink-0">
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}
