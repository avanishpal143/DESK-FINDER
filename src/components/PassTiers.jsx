import React from 'react';
import { passTiers } from '../data/mock';
import { Check, ArrowRight } from 'lucide-react';

export default function PassTiers() {
  return (
    <section id="passes" className="py-16 lg:py-20 relative bg-[#F7F5EF]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow mb-3">— Pass System</div>
            <h2 className="font-bold text-4xl lg:text-5xl leading-[0.95] max-w-2xl" style={{ letterSpacing: '-0.04em' }}>
              Choose your tier
            </h2>
          </div>
          <p className="text-[#0B0B0B]/60 max-w-sm text-[14px] leading-relaxed">
            From casual explorers to power users—there's a pass for every work style.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {passTiers.map((t, i) => {
            const featured = !!t.badge;
            return (
              <div key={i} className={`relative rounded-2xl p-6 lift flex flex-col ${featured ? 'bg-[#0B0B0B] text-white border border-[#0B0B0B]' : 'bg-white border border-[var(--line)]'}`}>
                {t.badge && (
                  <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[#C9A23B] text-white text-[11px] font-medium tracking-wide">
                    {t.badge}
                  </div>
                )}
                <h3 className="font-bold text-xl tracking-tight">{t.name}</h3>
                <p className={`mt-1.5 text-[13px] leading-relaxed min-h-[40px] ${featured ? 'text-white/60' : 'text-[#0B0B0B]/55'}`}>{t.desc}</p>
                <div className="mt-5 mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-bold text-3xl tracking-tight">{t.price}</span>
                    {t.period && <span className={`text-[13px] ${featured ? 'text-white/50' : 'text-[#0B0B0B]/50'}`}>{t.period}</span>}
                  </div>
                </div>
                <ul className="space-y-2.5 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px]">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${featured ? 'text-[#C9A23B]' : 'text-[#16A34A]'}`} strokeWidth={3} />
                      <span className={featured ? 'text-white/80' : 'text-[#0B0B0B]/75'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 group inline-flex items-center justify-between rounded-full h-10 px-5 text-[13px] font-medium transition-colors ${featured ? 'bg-[#C9A23B] text-white hover:bg-white hover:text-[#0B0B0B]' : 'bg-[#0B0B0B] text-white hover:bg-[#1f1f1f]'}`}>
                  {t.cta}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
