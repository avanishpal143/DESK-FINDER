import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const PROMPTS = [
  'Quiet desk near metro in Bangalore under ₹400/day',
  '6-person meeting room with whiteboard in Mumbai BKC',
  'Virtual office with GST address in Delhi',
  'Rooftop coworking with parking in Pune',
];

export default function AISearch() {
  const [q, setQ] = useState('');
  const [email, setEmail] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!email) return toast.error('Drop your email to join');
    toast.success("You're on the waitlist we'll be in touch.");
    setEmail('');
    setQ('');
  };

  return (
    <section className="py-16 lg:py-20 bg-[#F7F5EF] relative overflow-hidden">
      <div className="absolute inset-0 bg-cross opacity-60 pointer-events-none" />
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10 relative">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0B0B] text-white text-xs mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A23B]" />
            <span>Coming Soon</span>
          </div>
          <h2 className="font-bold text-4xl lg:text-5xl leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
            AI-powered search
          </h2>
          <p className="mt-3 text-[#0B0B0B]/60 max-w-md mx-auto text-[14px] leading-relaxed">
            Tell us what you need in plain language. Our AI finds the perfect desk, room, or office—matched to your budget, location, and vibe.
          </p>
        </div>

        {/* Search box */}
        <div className="bg-white border border-[var(--line)] rounded-2xl p-2.5 shadow-[0_20px_60px_-20px_rgba(11,11,11,0.15)]">
          <form onSubmit={submit} className="flex flex-col lg:flex-row items-stretch gap-2">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Sparkles className="w-4 h-4 text-[#C9A23B] shrink-0" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Try: 'A quiet hot desk near a coffee shop in Indiranagar'"
                className="w-full h-12 outline-none text-[14px] placeholder:text-[#0B0B0B]/35 bg-transparent"
              />
            </div>
            <div className="flex items-center gap-2 px-1">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="your@email.com"
                className="h-12 px-4 rounded-xl bg-[#F7F5EF] outline-none text-[13px] w-40 placeholder:text-[#0B0B0B]/35 border border-[var(--line)]"
              />
              <button
                type="submit"
                className="h-12 px-5 rounded-xl bg-[#0B0B0B] text-white hover:bg-[#1f1f1f] transition-colors inline-flex items-center gap-2 text-[13px] font-medium whitespace-nowrap"
              >
                Join Waitlist <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* Prompt chips */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {PROMPTS.map((p) => (
            <button
              key={p}
              onClick={() => setQ(p)}
              className="px-3 py-1.5 rounded-full text-[12px] bg-white border border-[var(--line)] text-[#0B0B0B]/60 hover:border-[#0B0B0B]/40 hover:text-[#0B0B0B] transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        <p className="text-center text-[11px] text-[#0B0B0B]/40 mt-5">
          Be the first to experience intelligent workspace discovery.
        </p>
      </div>
    </section>
  );
}
