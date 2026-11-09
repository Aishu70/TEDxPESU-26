import React from 'react';
import { X, ArrowUpRight, Award, Quote, Calendar, MapPin, Sparkles, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { REGISTRATION_FORM_URL } from '../data/tedxData';

export default function SpeakerModal({ speaker, onClose }) {
  if (!speaker) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${speaker.name} at TEDxPESU`,
        text: `Check out ${speaker.name}'s talk "${speaker.topic || speaker.role}" at TEDxPESU 2026!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-3xl bg-[#0e0e14] border border-[#262635] rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(235,0,40,0.25)] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white/80 hover:text-white hover:bg-tedx-red transition-all flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5">
          
          {/* Left Column: Image & Quick Stats */}
          <div className="md:col-span-2 relative bg-[#07070b] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#20202d]">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=181822&color=eb0028&size=512`;
                }}
              />
              <div className="absolute bottom-3 left-3 right-3 z-20">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-tedx-red text-white shadow-glow-sm">
                  {speaker.category === '2026' ? '2026 Keynote' : `${speaker.category} Edition`}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-xs text-tedx-muted">
              <div className="flex items-center space-x-2">
                <Calendar className="w-3.5 h-3.5 text-tedx-red" />
                <span>Feb 14, 2026 • Live Session</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-tedx-red" />
                <span>PES University Auditorium</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <button
                onClick={handleShare}
                className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center space-x-2 transition-colors border border-white/5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Speaker Profile</span>
              </button>
            </div>
          </div>

          {/* Right Column: Bio & Details */}
          <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            <div className="space-y-6">
              
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {speaker.name}
                </h2>
                <p className="text-tedx-red font-medium text-sm mt-1">
                  {speaker.role}
                </p>
                {speaker.company && (
                  <p className="text-xs text-tedx-muted uppercase font-mono tracking-wider mt-0.5">
                    {speaker.company}
                  </p>
                )}
              </div>

              {/* Talk Topic Banner */}
              {speaker.topic && (
                <div className="p-4 rounded-2xl bg-tedx-red/10 border border-tedx-red/25 relative overflow-hidden">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-tedx-red uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Keynote Talk Topic</span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    "{speaker.topic}"
                  </h3>
                </div>
              )}

              {/* Bio */}
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Biography</h4>
                <p className="text-sm text-tedx-muted leading-relaxed whitespace-pre-line">
                  {speaker.bio || speaker.description}
                </p>
              </div>

              {/* Talk Summary if available */}
              {speaker.talkSummary && (
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Talk Overview</h4>
                  <p className="text-sm text-tedx-muted leading-relaxed">
                    {speaker.talkSummary}
                  </p>
                </div>
              )}

              {/* Quote */}
              {speaker.quote && (
                <div className="p-4 rounded-xl bg-[#13131c] border-l-4 border-tedx-red italic text-sm text-white/90">
                  <Quote className="w-4 h-4 text-tedx-red mb-1 opacity-70" />
                  "{speaker.quote}"
                </div>
              )}

              {/* Key Highlights */}
              {speaker.highlights && speaker.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Key Highlights</h4>
                  <ul className="space-y-1.5">
                    {speaker.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-tedx-muted">
                        <Award className="w-3.5 h-3.5 text-tedx-red shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <Link
                to={`/speakers/${speaker.id}`}
                className="text-xs font-semibold text-white/70 hover:text-white hover:underline flex items-center space-x-1"
              >
                <span>Full Profile Page</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>

              <a
                href={REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-tedx-red hover:bg-tedx-red-hover text-white font-bold text-xs shadow-glow-sm flex items-center space-x-1.5 transition-all"
              >
                <span>Register to Attend Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
