import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Award, Calendar, MapPin, Sparkles, Quote, Share2, Ticket } from 'lucide-react';
import { SPEAKERS } from '../data/tedxData';

export default function SpeakerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const speaker = SPEAKERS.find((s) => s.id === id) || SPEAKERS[0];
  const relatedSpeakers = SPEAKERS.filter((s) => s.id !== speaker.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${speaker.name} | TEDxPESU`,
        text: `Check out ${speaker.name}'s keynote at TEDxPESU: ${speaker.topic}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 overflow-hidden relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-tedx-red/25 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Back Link */}
        <button
          onClick={() => navigate('/speakers')}
          className="inline-flex items-center space-x-2 text-xs font-semibold text-tedx-muted hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-tedx-red" />
          <span>Back to All Speakers</span>
        </button>

        {/* Hero Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#0e0e15] rounded-3xl p-6 sm:p-10 border border-[#232332] shadow-glass">
          
          {/* Portrait Column */}
          <div className="lg:col-span-4 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-inner bg-black">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=181822&color=eb0028&size=512`;
                }}
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-tedx-red text-white shadow-glow-sm">
                  {speaker.category === '2026' ? '2026 Keynote' : `${speaker.category} Edition`}
                </span>
              </div>
            </div>

            {/* Quick action bar */}
            <div className="mt-4 flex items-center justify-between gap-2">
              <button
                onClick={handleShare}
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center space-x-2 transition-colors border border-white/5"
              >
                <Share2 className="w-3.5 h-3.5 text-tedx-red" />
                <span>Share Profile</span>
              </button>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-8 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-tedx-red">
                Keynote Speaker
              </span>
              <h1 className="text-4xl sm:text-5xl font-black font-condensed tracking-tight uppercase mt-1">
                {speaker.name}
              </h1>
              <p className="text-tedx-red text-base font-semibold mt-1">
                {speaker.role}
              </p>
              {speaker.company && (
                <p className="text-xs text-tedx-muted font-mono uppercase tracking-wider mt-0.5">
                  {speaker.company}
                </p>
              )}
            </div>

            {/* Keynote Topic Highlight */}
            {speaker.topic && (
              <div className="p-5 rounded-2xl bg-tedx-red/10 border border-tedx-red/30 space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-tedx-red uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Keynote Presentation</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  "{speaker.topic}"
                </h3>
                {speaker.talkSummary && (
                  <p className="text-xs sm:text-sm text-tedx-muted leading-relaxed pt-1">
                    {speaker.talkSummary}
                  </p>
                )}
              </div>
            )}

            {/* Biography */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Detailed Biography
              </h3>
              <p className="text-sm text-tedx-muted leading-relaxed whitespace-pre-line">
                {speaker.bio || speaker.description}
              </p>
            </div>

            {/* Quote */}
            {speaker.quote && (
              <div className="p-5 rounded-2xl bg-[#14141d] border-l-4 border-tedx-red italic text-sm text-white/90">
                <Quote className="w-4 h-4 text-tedx-red mb-1 opacity-70" />
                "{speaker.quote}"
              </div>
            )}

            {/* Highlights */}
            {speaker.highlights && speaker.highlights.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Career Distinctions & Milestones
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {speaker.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-tedx-muted bg-[#12121a] p-3 rounded-xl border border-white/5">
                      <Award className="w-4 h-4 text-tedx-red shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Register CTA Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-tedx-red/20 via-[#181824] to-[#12121a] border border-tedx-red/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base font-bold text-white">Attend this talk in person</h4>
                <p className="text-xs text-tedx-muted">
                  Feb 14, 2026 • PES University Bengaluru MRD Auditorium
                </p>
              </div>

              <Link
                to="/register"
                className="px-6 py-2.5 rounded-full bg-tedx-red hover:bg-tedx-red-hover text-white font-bold text-xs shadow-glow-sm flex items-center space-x-1.5 transition-all shrink-0"
              >
                <Ticket className="w-3.5 h-3.5" />
                <span>Reserve Seat</span>
              </Link>
            </div>

          </div>

        </div>

        {/* Related Speakers */}
        <div className="space-y-6 pt-8 border-t border-[#1d1d28]">
          <h3 className="text-2xl font-black font-condensed uppercase tracking-tight">
            More Speakers from the Lineup
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedSpeakers.map((s) => (
              <Link
                key={s.id}
                to={`/speakers/${s.id}`}
                className="group rounded-2xl bg-[#0f0f15] border border-[#20202c] p-4 hover:border-tedx-red/50 transition-all flex items-center space-x-4"
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-14 h-14 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all shrink-0"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=181822&color=eb0028`;
                  }}
                />
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-white group-hover:text-tedx-red transition-colors truncate">
                    {s.name}
                  </h4>
                  <p className="text-xs text-tedx-muted truncate mt-0.5">
                    {s.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
