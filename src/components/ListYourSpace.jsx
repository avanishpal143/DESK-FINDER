import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { toast } from 'sonner';

const BENEFITS = [
  'Zero listing cost free to join',
  'Get leads directly, no middlemen',
  'Real-time booking dashboard',
  'Instant payouts on confirmed bookings',
  'Dedicated partner support',
];

export default function ListYourSpace() {
  const [email, setEmail] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!email) return toast.error('Enter your email to join the waitlist');
    toast.success("You're on the list! We'll reach out soon.");
    setEmail('');
  };

  return (
    <section className="py-14 lg:py-16 bg-[#0B0B0B] text-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.06]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 text-white/70 text-[11px] mb-5">
              <Sparkles className="w-3 h-3 text-[#C9A23B]" />
              Coming Soon
            </div>
            <h2 className="font-bold text-3xl lg:text-5xl leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
              Convert your empty<br />
              space into a<br />
              <span className="text-[#C9A23B]">coworking space</span>
            </h2>
            <p className="mt-4 text-[14px] text-white/55 leading-relaxed max-w-md">
              Have an underutilised office, café, or commercial space? List it on The Desk Finder and start earning from every booking with zero upfront cost and full control over your availability.
            </p>

            <ul className="mt-6 space-y-2.5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-[13px] text-white/75">
                  <Check className="w-3.5 h-3.5 text-[#C9A23B] shrink-0" strokeWidth={3} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right waitlist form */}
          <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-7 lg:p-8">
            <h3 className="font-bold text-[20px] tracking-tight">Join the partner waitlist</h3>
            <p className="mt-1.5 text-[13px] text-white/50">
              Be among the first space owners to list on The Desk Finder. Early partners get priority onboarding and zero commission for the first 3 months.
            </p>

            <form onSubmit={submit} className="mt-6 space-y-3">
              <div>
                <label className="text-[12px] text-white/50 block mb-1.5">Your email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourspace.com"
                  className="w-full h-11 rounded-xl bg-white/10 border border-white/15 px-4 text-[13px] text-white outline-none focus:border-white/30 transition-colors placeholder:text-white/30"
                />
              </div>
              <button
                type="submit"
                className="w-full h-11 rounded-xl bg-white text-[#0B0B0B] hover:bg-[#EDEAE0] transition-colors group inline-flex items-center justify-center gap-2 text-[14px] font-medium"
              >
                Notify Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
              {[
                { value: '₹0', label: 'Listing cost' },
                { value: '2–4h', label: 'Onboarding' },
                { value: '100%', label: 'Your control' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-bold text-[18px]" style={{ letterSpacing: '-0.03em' }}>{s.value}</div>
                  <div className="text-[11px] text-white/40 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
