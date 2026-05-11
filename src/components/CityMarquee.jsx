import React from 'react';
import { cities } from '../data/mock';
import { MapPin } from 'lucide-react';

export default function CityMarquee() {
  const list = [...cities, ...cities];
  return (
    <section className="py-10 border-y border-[var(--line)] bg-white/40 marquee-mask overflow-hidden">
      <div className="flex gap-12 ticker-track whitespace-nowrap">
        {list.map((c, i) => (
          <div key={i} className="flex items-center gap-2 text-[#0B0B0B]/55">
            <MapPin className="w-4 h-4" />
            <span className="font-display text-2xl">{c}</span>
            <span className="text-[#FF5A2C] ml-8">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
