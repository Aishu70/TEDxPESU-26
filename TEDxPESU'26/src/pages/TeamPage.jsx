import React, { useState } from 'react';
import { Users, Sparkles, Heart, Shield, ArrowUpRight } from 'lucide-react';
import { TEAM_DOMAINS } from '../data/tedxData';
import OptimizedImage from '../components/OptimizedImage';

export default function TeamPage() {
  const [selectedDomain, setSelectedDomain] = useState('All');

  const domainsList = ['All', ...TEAM_DOMAINS.map(d => d.domain)];

  const filteredDomains = selectedDomain === 'All'
    ? TEAM_DOMAINS
    : TEAM_DOMAINS.filter(d => d.domain === selectedDomain);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 overflow-hidden relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-tedx-red/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ========================================================
            HEADER (Matches Bottom Right Header in Template)
        ======================================================== */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-tedx-muted">
            TEDxPESU COMMUNITY
          </span>
          <h1 className="text-5xl sm:text-6xl font-black font-condensed tracking-tight uppercase leading-[0.95]">
            THE TEAM
          </h1>
          <p className="text-sm sm:text-base text-tedx-muted leading-relaxed">
            Meet the people who bring TEDxPESU to life. An all-volunteer collective of visionary students, designers, tech creators, and curators working together to spark ideas worth spreading.
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {domainsList.map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedDomain === domain
                  ? 'bg-tedx-red text-white shadow-glow-sm'
                  : 'bg-[#12121a] text-tedx-muted hover:text-white hover:bg-white/5'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* ========================================================
            DOMAINS BREAKDOWN
        ======================================================== */}
        <div className="space-y-16">
          {filteredDomains.map((section, sIdx) => (
            <div key={sIdx} className="space-y-8 bg-[#0c0c14] p-6 sm:p-10 rounded-3xl border border-white/5">
              
              {/* Domain Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1f1f2c] pb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-tedx-red shadow-glow-sm" />
                    <h2 className="text-2xl sm:text-3xl font-black font-condensed uppercase tracking-tight text-white">
                      {section.domain}
                    </h2>
                  </div>
                  {section.quote && (
                    <p className="text-xs sm:text-sm text-tedx-red italic mt-1 font-medium">
                      "{section.quote}"
                    </p>
                  )}
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-tedx-muted bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  {section.leadRole}
                </span>
              </div>

              {/* Main Core Members Grid */}
              {section.mainMembers && section.mainMembers.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {section.mainMembers.map((member, mIdx) => (
                    <div
                      key={mIdx}
                      className="group rounded-2xl bg-[#08080c] border border-white/10 p-3 text-center transition-all duration-300 hover:border-tedx-red/60 hover:shadow-[0_0_25px_rgba(235,0,40,0.3)] hover:-translate-y-1"
                    >
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black mb-3">
                        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-tedx-red/40 blur-xl pointer-events-none" />
                        <OptimizedImage
                          src={member.image}
                          alt={member.name}
                          sizes="(min-width: 1024px) 18vw, (min-width: 768px) 22vw, (min-width: 640px) 30vw, 45vw"
                          fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=08080c&color=eb0028`}
                          className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 relative z-10"
                        />
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-tedx-red transition-colors tracking-tight">
                        {member.name}
                      </h4>
                      <p className="text-[11px] text-zinc-400 mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Supporting Members Pills */}
              {section.supportingMembers && section.supportingMembers.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-tedx-muted">
                    Team Members & Associates
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {section.supportingMembers.map((sup, supIdx) => (
                      <div
                        key={supIdx}
                        className="px-3.5 py-1.5 rounded-xl bg-[#111118] border border-white/5 text-xs text-white/90 hover:border-tedx-red/40 transition-colors"
                      >
                        <span className="font-semibold text-white">{sup.name}</span>
                        {sup.role && (
                          <span className="text-[10px] text-tedx-muted ml-1.5 font-mono">
                            • {sup.role}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Join the Team Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#161624] to-[#0c0c14] border border-tedx-red/30 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-tedx-red">
            Join the Movement
          </span>
          <h3 className="text-3xl sm:text-4xl font-black font-condensed tracking-tight uppercase">
            PASSIONATE ABOUT IDEAS WORTH SPREADING?
          </h3>
          <p className="text-xs sm:text-sm text-tedx-muted max-w-xl mx-auto leading-relaxed">
            Recruitments for campus volunteers, stage hosts, and junior curators happen each semester at PES University. Reach out or follow our official social handles for announcement alerts.
          </p>
          <div className="pt-2">
            <a
              href="mailto:tedxpesu.rr@pes.edu"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-tedx-red hover:bg-tedx-red-hover text-white text-xs font-bold uppercase tracking-wider shadow-glow-sm transition-all"
            >
              <span>Get in Touch with Organizers</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
