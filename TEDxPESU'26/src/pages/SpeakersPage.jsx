import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, Music, ArrowUpRight, Award, Mic2 } from 'lucide-react';
import { SPEAKERS, PERFORMERS } from '../data/tedxData';
import SpeakerCard from '../components/SpeakerCard';
import SpeakerModal from '../components/SpeakerModal';

export default function SpeakersPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // Combine speakers and performers for unified browsing if needed
  const filteredSpeakers = useMemo(() => {
    return SPEAKERS.filter((speaker) => {
      // Category Filter
      const matchesCategory =
        activeFilter === 'all' ||
        (activeFilter === '2026' && speaker.category === '2026') ||
        (activeFilter === '2025' && speaker.category === '2025') ||
        (activeFilter === 'past' && speaker.category === 'Past');

      // Search Query
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        speaker.name.toLowerCase().includes(q) ||
        speaker.role.toLowerCase().includes(q) ||
        (speaker.company && speaker.company.toLowerCase().includes(q)) ||
        (speaker.topic && speaker.topic.toLowerCase().includes(q)) ||
        (speaker.bio && speaker.bio.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const showPerformers = activeFilter === 'all' || activeFilter === 'performers';

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-tedx-red/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-tedx-red/15 rounded-full blur-[180px] pointer-events-none" />
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-tedx-red/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-tedx-red flex items-center space-x-1.5">
            <Mic2 className="w-4 h-4" />
            <span>Voice & Visionaries</span>
          </span>
          <h1 className="text-5xl sm:text-6xl font-black font-condensed tracking-tight uppercase leading-[0.95]">
            MEET THE SPEAKERS
          </h1>
          <p className="text-sm sm:text-base text-tedx-muted leading-relaxed">
            From neuroscientists exploring brain rhythms to theatre innovators, robotics veterans, and circular economy pioneers. Explore the full spectrum of thinkers and performers across TEDxPESU editions.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#0e0e15] p-3 rounded-2xl border border-white/5">
          
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-tedx-muted absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search speaker name, talk topic, field..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#13131c] text-white text-xs sm:text-sm pl-11 pr-4 py-2.5 rounded-xl border border-white/5 focus:outline-none focus:border-tedx-red placeholder:text-tedx-muted"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-tedx-muted hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'All Speakers' },
              { id: '2026', label: '2026 Keynotes' },
              { id: '2025', label: '2025 Edition' },
              { id: 'past', label: 'Past Luminaries' },
              { id: 'performers', label: 'Performers' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-tedx-red text-white shadow-glow-sm'
                    : 'bg-[#14141c] text-tedx-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-tedx-muted px-1">
          <span>
            Showing <strong className="text-white">{filteredSpeakers.length}</strong> speaker{filteredSpeakers.length !== 1 ? 's' : ''}
            {activeFilter !== 'all' ? ` in ${activeFilter.toUpperCase()}` : ''}
          </span>
          <span className="hidden sm:inline">Click any speaker card for full biography and talk abstract</span>
        </div>

        {/* Speakers Grid */}
        {filteredSpeakers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSpeakers.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                onClick={() => setSelectedSpeaker(speaker)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#0e0e15] rounded-3xl border border-white/5 space-y-3">
            <p className="text-base text-tedx-muted">No speakers found matching your search.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="text-xs font-bold text-tedx-red hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ========================================================
            FEATURED PERFORMERS & ARTISTS SECTION
        ======================================================== */}
        {showPerformers && (
          <div className="pt-12 space-y-8 border-t border-[#1a1a25]">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-tedx-red flex items-center space-x-1.5">
                <Music className="w-4 h-4" />
                <span>Rhythm & Choreography</span>
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
        )}

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
