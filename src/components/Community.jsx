import React from 'react';
import { community } from '../data/mock';
import { Users, GraduationCap, Sparkles, MessagesSquare, Gift, Map } from 'lucide-react';

const ICONS = { Users, GraduationCap, Sparkles, MessagesSquare, Gift, Map };

export default function Community() {
  return (
    <section id="community" className="py-16 lg:py-20 bg-[#F7F5EF]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow mb-3">— Stronger Together</div>
            <h2 className="font-bold text-4xl lg:text-5xl leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
              Build your tribe
            </h2>
            <p className="mt-3 text-[#0B0B0B]/60 max-w-lg text-[14px] leading-relaxed">
              Join a growing community of coworking enthusiasts, freelancers, and forward-thinking companies.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)] rounded-2xl overflow-hidden border border-[var(--line)]">
          {community.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <div key={i} className="bg-[#F7F5EF] p-6 lg:p-8 hover:bg-white transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-[#0B0B0B]/8 grid place-items-center group-hover:bg-[#0B0B0B] transition-colors">
                  <Icon className="w-4.5 h-4.5 text-[#0B0B0B]/70 group-hover:text-white transition-colors" style={{ width: '18px', height: '18px' }} />
                </div>
                <h3 className="font-bold text-[16px] tracking-tight mt-5">{c.title}</h3>
                <p className="mt-2 text-[13px] text-[#0B0B0B]/60 leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
