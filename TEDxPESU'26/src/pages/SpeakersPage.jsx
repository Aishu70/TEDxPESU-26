import React, { useState } from 'react';
import { Music, ArrowUpRight, Award, Mic2, Users } from 'lucide-react';
import { SPEAKERS, PERFORMERS } from '../data/tedxData';
import SpeakerCard from '../components/SpeakerCard';
import SpeakerModal from '../components/SpeakerModal';

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // Split speakers by category
  const keynote2026 = SPEAKERS.filter((s) => s.category === '2026');
  const pastLuminaries = SPEAKERS.filter(
    (s) => s.category === '2025' || s.category === 'Past'
  );

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-tedx-red/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-tedx-red/15 rounded-full blur-[180px] pointer-events-none" />
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-tedx-red/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-tedx-red flex items-center space-x-1.5">
            <Mic2 className="w-4 h-4" />
            <span>Voice &amp; Visionaries</span>
          </span>
          <h1 className="text-5xl sm:text-6xl font-black font-condensed tracking-tight uppercase leading-[0.95]">
            MEET THE SPEAKERS
          </h1>
          <p className="text-sm sm:text-base text-tedx-muted leading-relaxed">
            From neuroscientists exploring brain rhythms to theatre innovators, robotics veterans, and circular economy pioneers. Explore the full spectrum of thinkers and performers across TEDxPESU editions.
          </p>
        </div>

        {/* ========================================================
            2026 KEYNOTE SPEAKERS
        ======================================================== */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-tedx-red flex items-center space-x-1.5">
              <Award className="w-4 h-4" />
              <span>TEDxPESU 2026</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-condensed tracking-tight uppercase">
              2026 KEYNOTE SPEAKERS
            </h2>
            <p className="text-sm text-tedx-muted max-w-2xl">
              The visionaries taking the red dot at TEDxPESU 2026: Contrast in Convergence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {keynote2026.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                onClick={() => setSelectedSpeaker(speaker)}
              />
            ))}
          </div>
        </div>

        {/* ========================================================
            PAST LUMINARIES (2025 Edition + Past merged)
        ======================================================== */}
        <div className="pt-4 space-y-8 border-t border-[#1a1a25]">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-tedx-red flex items-center space-x-1.5">
              <Users className="w-4 h-4" />
              <span>Legacy &amp; Heritage</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-condensed tracking-tight uppercase">
              PAST LUMINARIES
            </h2>
            <p className="text-sm text-tedx-muted max-w-2xl">
              The brilliant minds who've graced the TEDxPESU stage across previous editions — from the 2025 lineup to our founding speakers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pastLuminaries.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                onClick={() => setSelectedSpeaker(speaker)}
              />
            ))}
          </div>
        </div>

        {/* ========================================================
            FEATURED PERFORMERS & ARTISTS SECTION
        ======================================================== */}
        <div className="pt-4 space-y-8 border-t border-[#1a1a25]">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-tedx-red flex items-center space-x-1.5">
              <Music className="w-4 h-4" />
              <span>Rhythm &amp; Choreography</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-condensed tracking-tight uppercase">
              FEATURED PERFORMERS
            </h2>
            <p className="text-sm text-tedx-muted max-w-2xl">
              Experience artistic collision live on stage: classical Indian contemporary dance, high-octane beatboxing, and experimental acoustic fusions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERFORMERS.map((performer) => (
              <div
                key={performer.id}
                className="rounded-3xl bg-[#0f0f16] border border-[#232332] overflow-hidden hover:border-tedx-red/50 hover:shadow-glow-sm transition-all flex flex-col group"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={performer.image}
                    alt={performer.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-tedx-red text-white">
                      Live Performance
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-tedx-red transition-colors">
                      {performer.name}
                    </h3>
                    <p className="text-xs text-tedx-red font-medium mt-0.5">
                      {performer.role} • {performer.organization}
                    </p>
                    <p className="text-xs text-tedx-muted mt-3 leading-relaxed">
                      {performer.description}
                    </p>
                  </div>

                  {performer.performanceTitle && (
                    <div className="p-3 rounded-xl bg-tedx-red/10 border border-tedx-red/20 text-xs">
                      <span className="text-[10px] uppercase font-bold text-tedx-red block">Stage Set</span>
                      <span className="text-white font-medium">"{performer.performanceTitle}"</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Speaker Modal */}
      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}

    </div>
  );
}
