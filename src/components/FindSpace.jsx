import React, { useState } from 'react';
import { Building2, Users, BriefcaseBusiness, ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';

const CATS = [
  { value: 'space-owner', label: "I'm a Space Owner", icon: Building2 },
  { value: 'corp-hr', label: 'Corporate HR', icon: BriefcaseBusiness },
  { value: 'desk-seeker', label: 'Looking for a Desk', icon: Users },
];

export default function FindSpace() {
  const [cat, setCat] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!cat || !name || !email) {
      toast.error('Please fill in all fields');
      return;
    }
    setSubmitted(true);
    toast.success("Thanks! We'll reach out shortly.");
  };

  return (
    <section id="find" className="py-24 lg:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="eyebrow mb-5">— 01 / Match</div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95]">
              Find your <span className="italic text-[#FF5A2C]">space</span>
            </h2>
            <p className="mt-6 text-lg text-[#0B0B0B]/65 max-w-md leading-relaxed">
              Tell us what you're looking for and we'll match you perfectly. No spam. No cost for space listings. Just the right connections.
            </p>
            <div className="mt-8 space-y-3">
              {['Curated by humans, ranked by you', 'Real availability, real prices', 'Reply within 24 hours, guaranteed'].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm text-[#0B0B0B]/75">
                  <div className="w-5 h-5 rounded-full bg-[#FFE3D6] grid place-items-center">
                    <Check className="w-3 h-3 text-[#FF5A2C]" />
                  </div>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#FFE3D6]/40 rounded-[28px] -rotate-1" />
            <form onSubmit={submit} className="relative bg-white rounded-3xl p-8 lg:p-10 border border-[var(--line)] shadow-[0_30px_80px_-30px_rgba(11,11,11,0.18)]">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FFE3D6] grid place-items-center mx-auto">
                    <Check className="w-8 h-8 text-[#FF5A2C]" />
                  </div>
                  <h3 className="font-display text-3xl mt-6">You're on the list</h3>
                  <p className="text-[#0B0B0B]/60 mt-3">We'll be in touch within 24 hours with curated matches.</p>
                  <button type="button" onClick={() => { setSubmitted(false); setCat(''); setName(''); setEmail(''); }} className="mt-6 text-sm underline underline-offset-4">
                    Submit another
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Category */}
                  <div>
                    <label className="eyebrow block mb-2">I am a</label>
                    <div className="grid grid-cols-1 gap-2">
                      {CATS.map((c) => (
                        <button
                          key={c.value}
                          type="button"
                          onClick={() => setCat(c.value)}
                          className={`flex items-center gap-3 px-4 h-12 rounded-xl border text-sm text-left transition-colors ${cat === c.value ? 'border-[#FF5A2C] bg-[#FFE3D6]/40 text-[#0B0B0B]' : 'border-[var(--line)] bg-[#FAF8F4] text-[#0B0B0B]/70 hover:border-[#0B0B0B]/30'}`}
                        >
                          <c.icon className="w-4 h-4 shrink-0" />
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="eyebrow block mb-2">Full name</label>
                    <input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full h-12 rounded-xl border border-[var(--line)] bg-[#FAF8F4] px-4 text-sm outline-none focus:border-[#FF5A2C] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="eyebrow block mb-2">Email address</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full h-12 rounded-xl border border-[var(--line)] bg-[#FAF8F4] px-4 text-sm outline-none focus:border-[#FF5A2C] transition-colors"
                    />
                  </div>

                  <button type="submit" className="w-full h-12 rounded-xl bg-[#0B0B0B] text-white hover:bg-[#FF5A2C] transition-colors group inline-flex items-center justify-center gap-2 text-sm font-medium">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-xs text-[#0B0B0B]/50 text-center">No spam. No cost for space listings.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
