import React from 'react';
import { Calendar, MapPin, Users, ArrowUpRight, Ticket, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// ⚠️ Replace this with your actual Google Form link once available
const GOOGLE_FORM_LINK = '#';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 overflow-hidden relative">

      {/* Background ambient red glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-tedx-red/25 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-tedx-red/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">

        {/* Header */}
        <div className="text-center space-y-5 max-w-2xl mx-auto">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-tedx-red/15 text-tedx-red border border-tedx-red/30">
            <Ticket className="w-3.5 h-3.5" />
            <span>TEDxPESU 2026 — Registration</span>
          </span>
          <h1 className="text-5xl sm:text-7xl font-black font-condensed tracking-tight uppercase leading-[0.92]">
            SECURE YOUR <br />
            <span className="text-tedx-red">SEAT</span>
          </h1>
          <p className="text-sm sm:text-base text-tedx-muted leading-relaxed">
            Join us for an unforgettable day of ideas, performances, and conversations at TEDxPESU 2026: <strong className="text-white">Contrast in Convergence</strong>. Limited seats available — register early to secure your spot.
          </p>
        </div>

        {/* Event Info Card */}
        <div className="rounded-3xl bg-[#0d0d14] border border-white/8 p-8 sm:p-12 space-y-8">

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-tedx-red">
              Event Details
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-condensed uppercase">
              TEDxPESU 2026
            </h2>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 rounded-2xl bg-tedx-red/15 border border-tedx-red/30 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-tedx-red" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-tedx-muted mb-1">Date &amp; Time</p>
                <p className="text-sm font-bold text-white">November 14, 2026</p>
                <p className="text-xs text-tedx-muted mt-0.5">Saturday • 09:30 AM – 06:00 PM IST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 rounded-2xl bg-tedx-red/15 border border-tedx-red/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-tedx-red" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-tedx-muted mb-1">Venue</p>
                <p className="text-sm font-bold text-white">PES University</p>
                <p className="text-xs text-tedx-muted mt-0.5">100 Feet Ring Road, BSK III Stage, Bengaluru</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 rounded-2xl bg-tedx-red/15 border border-tedx-red/30 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-tedx-red" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-tedx-muted mb-1">Format</p>
                <p className="text-sm font-bold text-white">In-Person Event</p>
                <p className="text-xs text-tedx-muted mt-0.5">Talks · Performances · Networking</p>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-white/8" />

          {/* What to expect */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-tedx-muted">What to Expect</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-tedx-muted">
              {[
                '12+ curated keynote talks',
                'Live cultural performances',
                'Interactive networking sessions',
                'Ideas across tech, arts & society',
                'Dedicated delegate experience',
                'Community of changemakers',
              ].map((item) => (
                <li key={item} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tedx-red shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="border-t border-white/8" />

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-10 py-4 rounded-full bg-tedx-red hover:bg-tedx-red-hover text-white text-sm font-bold uppercase tracking-wider shadow-glow-sm transition-all"
            >
              <span>Register Now</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-xs text-tedx-muted text-center sm:text-left">
              You'll be redirected to our official registration form.
            </p>
          </div>

        </div>

        {/* Back link */}
        <div className="text-center">
          <Link
            to="/2026"
            className="inline-flex items-center space-x-1.5 text-xs text-tedx-muted hover:text-white transition-colors"
          >
            <ArrowUpRight className="w-3.5 h-3.5 rotate-180" />
            <span>Back to Event Page</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
