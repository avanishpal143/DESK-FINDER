import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Building2, Users, BriefcaseBusiness } from 'lucide-react';
import { toast } from 'sonner';

const CATS = [
  { value: 'space-owner', label: "I'm a Space Owner", icon: Building2 },
  { value: 'corp-hr', label: 'Corporate HR', icon: BriefcaseBusiness },
  { value: 'desk-seeker', label: 'Looking for a Desk', icon: Users },
];

const STATS = [
  { label: 'Free for spaces' },
  { label: 'Zero lead cost' },
  { label: '100+ spaces' },
];

export default function Hero() {
  const [cat, setCat] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!cat || !name || !email) { toast.error('Please fill in all fields'); return; }
    setSubmitted(true);
    toast.success("Thanks! We'll reach out shortly.");
  };

  return (
    <section className="relative bg-cross pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Soft glow blobs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-white/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] rounded-full bg-white/30 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left */}
          <div className="lg:col-span-7 fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0B0B] text-white text-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A23B]" />
              <span>Where work finds space</span>
            </div>

            <h1 className="font-bold text-[60px] sm:text-[80px] lg:text-[100px] leading-[0.95] tracking-[-0.045em] mt-6">
              One pass.<br />
              <span className="squiggle">Every desk.</span><br />
              Done.
            </h1>

            <p className="max-w-[460px] mt-6 text-[16px] text-[#0B0B0B]/65 leading-[1.6]">
              India's first coworking pass network. Access hundreds of spaces across cities with a single membership. No commitments, no complexity.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-2 text-[14px] text-[#0B0B0B]/80">
                  <Check className="w-4 h-4 text-[#16A34A]" strokeWidth={3} />
                  {s.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-5 fade-up" style={{ animationDelay: '0.15s' }}>
            <form onSubmit={submit} className="bg-white rounded-3xl p-7 lg:p-8 border border-[var(--line)] shadow-[0_30px_80px_-30px_rgba(11,11,11,0.15)]">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#0B0B0B] grid place-items-center mx-auto">
                    <Check className="w-7 h-7 text-white" strokeWidth={3} />
                  </div>
                  <h3 className="font-bold text-2xl mt-5 tracking-tight">You're on the list</h3>
                  <p className="text-[#0B0B0B]/60 mt-2 text-sm">We'll be in touch within 24 hours with curated matches.</p>
                  <button type="button" onClick={() => { setSubmitted(false); setCat(''); setName(''); setEmail(''); }} className="mt-5 text-sm underline underline-offset-4">
                    Submit another
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-bold text-[28px] tracking-tight leading-none">Find your space</h2>
                  <p className="mt-1.5 text-[13px] text-[#0B0B0B]/60">Tell us what you're looking for and we'll match you perfectly.</p>

                  <div className="mt-6 space-y-4">
                    {/* Category */}
                    <div>
                      <label className="text-[13px] font-medium text-[#0B0B0B] block mb-2">I am a</label>
                      <div className="grid grid-cols-1 gap-2">
                        {CATS.map((c) => (
                          <button
                            key={c.value}
                            type="button"
                            onClick={() => setCat(c.value)}
                            className={`flex items-center gap-3 px-4 h-11 rounded-xl border text-[13px] text-left transition-colors ${
                              cat === c.value
                                ? 'border-[#0B0B0B] bg-[#0B0B0B]/5 text-[#0B0B0B] font-medium'
                                : 'border-[var(--line)] bg-white text-[#0B0B0B]/70 hover:border-[#0B0B0B]/30'
                            }`}
                          >
                            <c.icon className="w-4 h-4 shrink-0" />
                            {c.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="text-[13px] font-medium text-[#0B0B0B] block mb-2">Full name</label>
                      <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full h-11 rounded-xl border border-[var(--line)] bg-white px-4 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/35"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="text-[13px] font-medium text-[#0B0B0B] block mb-2">Email address</label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full h-11 rounded-xl border border-[var(--line)] bg-white px-4 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/35"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-11 rounded-xl bg-[#0B0B0B] text-white hover:bg-[#1f1f1f] transition-colors group inline-flex items-center justify-center gap-2 text-[14px] font-medium"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-[11px] text-[#0B0B0B]/45 text-center">
                      No spam. No cost for space listings. Just the right connections.
                    </p>
                  </div>
                </>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
