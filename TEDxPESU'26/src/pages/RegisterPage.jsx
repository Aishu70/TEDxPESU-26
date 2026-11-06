import React, { useState } from 'react';
import { Ticket, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, ArrowLeft, Mail, AlertCircle, Download, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TICKET_TIERS, EVENT_DETAILS } from '../data/tedxData';

export default function RegisterPage() {
  const [selectedTier, setSelectedTier] = useState('general');
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeOrOrg: 'PES University',
    srn: '',
    interestTrack: 'Synthetic & Soul (AI & Ethics)',
    dietary: 'Vegetarian',
    accessibility: 'No specific requirements',
    heardFrom: 'Campus Posters / Word of Mouth'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert('Please fill in your name, email, and phone number.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Fire celebratory confetti!
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#eb0028', '#ffffff', '#ff4d6d', '#111116']
      });
    } catch (err) {
      // safe fallback
    }
  };

  const currentTierData = TICKET_TIERS.find(t => t.id === selectedTier) || TICKET_TIERS[1];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 overflow-hidden relative">
      
      {/* Background ambient red glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-tedx-red/25 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-tedx-red/15 text-tedx-red border border-tedx-red/30">
            <Ticket className="w-3.5 h-3.5" />
            <span>TEDxPESU 2026 Passes</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-condensed tracking-tight uppercase leading-[0.95]">
            SECURE YOUR SEAT
          </h1>
          <p className="text-sm sm:text-base text-tedx-muted leading-relaxed">
            Embark on an electrifying journey filled with thought-provoking talks, inspiring performances, and engaging discussions at TEDxPESU 2026. Limited seating is available, so early booking is highly recommended.
          </p>
        </div>

        {/* ========================================================
            TICKET TIERS CARDS
        ======================================================== */}
        {!isSubmitted && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TICKET_TIERS.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`relative rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#181826] to-[#101018] border-2 border-tedx-red shadow-[0_0_40px_rgba(235,0,40,0.3)] -translate-y-2'
                      : 'bg-[#0e0e15] border border-white/10 hover:border-white/20 hover:bg-[#12121b]'
                  }`}
                >
                  {/* Badge */}
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-tedx-red text-white shadow-glow-sm">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black font-condensed tracking-tight uppercase text-white">
                        {tier.name}
                      </h3>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-tedx-red" />
                      )}
                    </div>

                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-black font-condensed text-white">
                        ₹{tier.price}
                      </span>
                      {tier.originalPrice && (
                        <span className="text-sm text-tedx-muted line-through font-mono">
                          ₹{tier.originalPrice}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-tedx-muted">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-tedx-red shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
                    <p className="text-[10px] text-tedx-muted/80 italic">
                      {tier.note}
                    </p>
                    <button
                      type="button"
                      className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                        isSelected
                          ? 'bg-tedx-red text-white shadow-glow-sm'
                          : 'bg-white/5 text-white/80 hover:bg-white/10'
                      }`}
                    >
                      {isSelected ? 'Tier Selected ✓' : tier.cta}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================
            REGISTRATION FORM (Multi-Step)
        ======================================================== */}
        {!isSubmitted ? (
          <div className="max-w-2xl mx-auto bg-[#0d0d15] rounded-3xl p-6 sm:p-10 border border-[#222230] shadow-glass space-y-8">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-3">
                <span className="w-7 h-7 rounded-full bg-tedx-red text-white text-xs font-bold flex items-center justify-center">
                  {step}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  {step === 1 && 'Step 1: Delegate Information'}
                  {step === 2 && 'Step 2: Tracks & Preferences'}
                  {step === 3 && 'Step 3: Verification & Confirmation'}
                </span>
              </div>
              <span className="text-xs text-tedx-muted font-mono">
                {step} of 3
              </span>
            </div>

            <form onSubmit={step === 3 ? handleSubmit : handleNextStep} className="space-y-6">
              
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-tedx-muted mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Akanksha Sharma"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-[#13131c] text-white text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-tedx-red"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-tedx-muted mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@pes.edu / personal"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#13131c] text-white text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-tedx-red"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-tedx-muted mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-[#13131c] text-white text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-tedx-red"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-tedx-muted mb-1.5">
                        College / University / Org
                      </label>
                      <input
                        type="text"
                        name="collegeOrOrg"
                        placeholder="e.g. PES University"
                        value={formData.collegeOrOrg}
                        onChange={handleInputChange}
                        className="w-full bg-[#13131c] text-white text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-tedx-red"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-tedx-muted mb-1.5">
                        PESU SRN / Roll Number (If Student)
                      </label>
                      <input
                        type="text"
                        name="srn"
                        placeholder="PES1UG22CS000"
                        value={formData.srn}
                        onChange={handleInputChange}
                        className="w-full bg-[#13131c] text-white text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-tedx-red"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-tedx-muted mb-1.5">
                      Which Theme Track Excites You Most?
                    </label>
                    <select
                      name="interestTrack"
                      value={formData.interestTrack}
                      onChange={handleInputChange}
                      className="w-full bg-[#13131c] text-white text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-tedx-red"
                    >
                      <option value="Synthetic & Soul (AI & Ethics)">Synthetic & Soul (AI, Robotics & Ethics)</option>
                      <option value="Tradition & Trajectory (Ecological Innovation)">Tradition & Trajectory (CleanTech & Indigenous Wisdom)</option>
                      <option value="Stillness & Speed (Mindfulness & Theatre)">Stillness & Speed (Neuroscience, Theatre & Silence)</option>
                      <option value="Harmony & Discord (Art & Performance)">Harmony & Discord (Cinema, Rhythms & Law)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-tedx-muted mb-1.5">
                        Dietary Preference
                      </label>
                      <select
                        name="dietary"
                        value={formData.dietary}
                        onChange={handleInputChange}
                        className="w-full bg-[#13131c] text-white text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-tedx-red"
                      >
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Jain">Jain Friendly</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-tedx-muted mb-1.5">
                        Accessibility Assistance
                      </label>
                      <select
                        name="accessibility"
                        value={formData.accessibility}
                        onChange={handleInputChange}
                        className="w-full bg-[#13131c] text-white text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-tedx-red"
                      >
                        <option value="No specific requirements">No specific requirements</option>
                        <option value="Wheelchair ramp / accessible seating">Wheelchair accessible seating</option>
                        <option value="Front row for visual/hearing support">Auditory/visual proximity support</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-6">
                  
                  {/* Order Summary Pill */}
                  <div className="p-4 rounded-2xl bg-[#14141f] border border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs text-tedx-muted">
                      <span>Selected Pass</span>
                      <strong className="text-white">{currentTierData.name}</strong>
                    </div>
                    <div className="flex items-center justify-between text-xs text-tedx-muted">
                      <span>Delegate Name</span>
                      <strong className="text-white">{formData.fullName}</strong>
                    </div>
                    <div className="flex items-center justify-between text-xs text-tedx-muted">
                      <span>Official Email</span>
                      <strong className="text-white">{formData.email}</strong>
                    </div>
                    <div className="flex items-center justify-between text-xs text-tedx-muted">
                      <span>Amount Payable</span>
                      <strong className="text-tedx-red text-lg font-black font-condensed">₹{currentTierData.price}</strong>
                    </div>
                  </div>

                  {/* Official Notice from extracted website */}
                  <div className="p-4 rounded-2xl bg-tedx-red/10 border border-tedx-red/30 flex items-start space-x-3 text-xs text-tedx-muted">
                    <AlertCircle className="w-4 h-4 text-tedx-red shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Payment Verification Process:</strong>
                      <p className="leading-relaxed">
                        "You'll be sent a verification link from TEDxPESU on your registered email within 48 hours after filling this form regarding the official payment gateway process."
                      </p>
                    </div>
                  </div>

                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center space-x-2 transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-tedx-red hover:bg-tedx-red-hover text-white text-xs font-bold uppercase tracking-wider shadow-glow-sm flex items-center space-x-2 transition-all ml-auto"
                >
                  <span>{step === 3 ? 'Confirm & Request Pass' : 'Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>

          </div>
        ) : (
          /* ========================================================
              SUCCESS CONFIRMATION SCREEN
          ======================================================== */
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#161622] to-[#0e0e15] rounded-3xl p-8 sm:p-12 border border-tedx-red/40 shadow-[0_20px_80px_rgba(235,0,40,0.3)] text-center space-y-6">
            
            <div className="w-16 h-16 rounded-full bg-tedx-red/20 border-2 border-tedx-red flex items-center justify-center mx-auto shadow-glow-md">
              <Check className="w-8 h-8 text-tedx-red" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Registration Request Received
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-condensed tracking-tight uppercase">
                YOU'RE ON THE LIST, {formData.fullName.toUpperCase()}!
              </h2>
              <p className="text-xs sm:text-sm text-tedx-muted max-w-md mx-auto leading-relaxed">
                Thank you for registering for TEDxPESU 2026: <strong>Contrast in Convergence</strong>.
              </p>
            </div>

            {/* Verification notice callout */}
            <div className="p-4 rounded-2xl bg-[#11111a] border border-white/10 text-left text-xs space-y-2 text-tedx-muted">
              <div className="flex items-center space-x-2 text-white font-bold">
                <Mail className="w-4 h-4 text-tedx-red" />
                <span>Check Your Inbox:</span>
              </div>
              <p className="leading-relaxed">
                We have recorded your request for the <strong>{currentTierData.name}</strong>. A verification link will be sent to <span className="text-white font-semibold">{formData.email}</span> within <strong>48 hours</strong> regarding payment completion and physical pass collection.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center space-x-2 transition-colors border border-white/10"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save / Print Summary</span>
              </button>

              <button
                onClick={() => { setIsSubmitted(false); setStep(1); }}
                className="px-6 py-2.5 rounded-full bg-tedx-red text-white text-xs font-bold uppercase tracking-wider shadow-glow-sm"
              >
                Register Another Attendee
              </button>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
