import React from 'react';
import { testimonials } from '../data/mock';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-20 bg-[#0B0B0B] text-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.06]" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="mb-10">
          <div className="eyebrow text-white/40 mb-3">— What People Say</div>
          <h2 className="font-bold text-4xl lg:text-5xl leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
            Loved by professionals
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
              <p className="text-[15px] leading-relaxed text-white/85">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-white/15 text-white grid place-items-center font-medium text-[13px]">
                  {t.initials}
                </div>
                <div>
                  <div className="font-medium text-[14px]">{t.name}</div>
                  <div className="text-[12px] text-white/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
