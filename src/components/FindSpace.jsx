import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';

const SPACE_TYPES = [
  { value: 'desk', label: 'Desk' },
  { value: 'cabin', label: 'Cabin' },
  { value: 'meeting', label: 'Meeting Room' },
  { value: 'virtual', label: 'Virtual Office' },
  { value: 'managed', label: 'Managed Office' },
];

export default function FindSpace() {
  const [spaceType, setSpaceType] = useState('');
  const [form, setForm] = useState({ name: '', email: '', city: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!spaceType || !form.name || !form.email) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSubmitted(true);
    toast.success("We'll get back to you within 2–4 hours!");
  };

  return (
    <section className="py-14 lg:py-16 bg-[#EDEAE0]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <div className="eyebrow mb-3">Find Your Space</div>
            <h2 className="font-bold text-3xl lg:text-5xl leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
              Tell us what<br />you're looking for
            </h2>
            <p className="mt-4 text-[14px] text-[#0B0B0B]/60 leading-relaxed max-w-md">
              Share your requirements and we'll match you with the perfect workspace. No spam, no cost for space listings just the right connections.
            </p>

            <div className="mt-8 space-y-3">
              {[
                'Curated matches within 2–4 hours',
                'Real availability, real prices',
                'No commitment required',
                'Free for space seekers',
              ].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-[13px] text-[#0B0B0B]/75">
                  <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0" strokeWidth={3} />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div>
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 border border-[var(--line)] text-center">
                <div className="w-14 h-14 rounded-full bg-[#0B0B0B] grid place-items-center mx-auto">
                  <Check className="w-7 h-7 text-white" strokeWidth={3} />
                </div>
                <h3 className="font-bold text-2xl mt-5 tracking-tight">You're on the list!</h3>
                <p className="text-[#0B0B0B]/55 mt-2 text-[14px]">
                  We'll reach out to <strong>{form.email}</strong> within 2–4 hours with curated matches.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setSpaceType(''); setForm({ name: '', email: '', city: '', message: '' }); }}
                  className="mt-5 text-[13px] underline underline-offset-4 text-[#0B0B0B]/55 hover:text-[#0B0B0B] transition-colors"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-white rounded-2xl p-7 border border-[var(--line)]">
                <h3 className="font-bold text-[20px] tracking-tight">Find your space</h3>
                <p className="mt-1 text-[12px] text-[#0B0B0B]/50">Fields marked * are required.</p>

                {/* Space type */}
                <div className="mt-5">
                  <label className="text-[13px] font-medium block mb-2">I'm looking for a *</label>
                  <div className="flex flex-wrap gap-2">
                    {SPACE_TYPES.map((t) => (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => setSpaceType(t.value)}
                        className={`px-3.5 h-9 rounded-full text-[12px] font-medium border transition-colors ${
                          spaceType === t.value
                            ? 'bg-[#0B0B0B] text-white border-[#0B0B0B]'
                            : 'bg-white text-[#0B0B0B]/65 border-[var(--line)] hover:border-[#0B0B0B]/30'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name + Email */}
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[12px] font-medium block mb-1.5">Full name *</label>
                    <input
                      value={form.name} onChange={set('name')}
                      placeholder="Jane Doe"
                      className="w-full h-10 rounded-xl border border-[var(--line)] px-3.5 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-medium block mb-1.5">Email *</label>
                    <input
                      type="email" value={form.email} onChange={set('email')}
                      placeholder="jane@company.com"
                      className="w-full h-10 rounded-xl border border-[var(--line)] px-3.5 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30"
                    />
                  </div>
                </div>

                {/* City */}
                <div className="mt-3">
                  <label className="text-[12px] font-medium block mb-1.5">Preferred city</label>
                  <input
                    value={form.city} onChange={set('city')}
                    placeholder="Delhi, Mumbai, Bangalore..."
                    className="w-full h-10 rounded-xl border border-[var(--line)] px-3.5 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30"
                  />
                </div>

                {/* Message */}
                <div className="mt-3">
                  <label className="text-[12px] font-medium block mb-1.5">Any specific requirements?</label>
                  <textarea
                    value={form.message} onChange={set('message')}
                    placeholder="Team size, budget, timeline..."
                    rows={3}
                    className="w-full rounded-xl border border-[var(--line)] px-3.5 py-2.5 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full h-11 rounded-xl bg-[#0B0B0B] text-white hover:bg-[#1f1f1f] transition-colors group inline-flex items-center justify-center gap-2 text-[14px] font-medium"
                >
                  Get Matched
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="mt-2.5 text-[11px] text-[#0B0B0B]/40 text-center">
                  We respond within 2–4 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
