import React, { useState } from 'react';
import { spaces } from '../data/mock';
import { Star, MapPin, ArrowUpRight, Heart, Info } from 'lucide-react';

const SEAT_TYPES = [
  {
    name: 'Hot Desk',
    desc: 'A shared, non-reserved seat. Sit anywhere available each day. Perfect for freelancers and remote workers who need flexibility.',
    color: 'bg-[#EDEAE0]',
  },
  {
    name: 'Dedicated Desk',
    desc: 'Your own fixed seat, reserved just for you. Leave your things overnight. Ideal for those who need a consistent workspace.',
    color: 'bg-[#EDEAE0]',
  },
  {
    name: 'Cabin',
    desc: 'A private enclosed office for 1–4 people. Full privacy, lockable, with all amenities. Best for focused work or small teams.',
    color: 'bg-[#EDEAE0]',
  },
];

export default function Spaces() {
  const [favs, setFavs] = useState(new Set());

  const toggle = (id) => {
    const n = new Set(favs);
    if (n.has(id)) n.delete(id);
    else n.add(id);
    setFavs(n);
  };

  return (
    <section id="spaces" className="py-14 lg:py-16 bg-[#EDEAE0] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-7">
          <div>
            <div className="eyebrow mb-2">— Available Now</div>
            <h2 className="font-bold text-3xl lg:text-4xl leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
              Desks &amp; spaces
            </h2>
            <p className="mt-2 text-[#0B0B0B]/55 text-[13px] leading-relaxed">
              Hot desks, dedicated seats, and private cabins across top coworking spaces.
            </p>
          </div>
          <a href="/desks" className="inline-flex items-center gap-1.5 text-[12px] font-medium border-b border-[#0B0B0B]/50 pb-0.5 hover:text-[#0B0B0B]/60 hover:border-[#0B0B0B]/30 transition-colors w-fit shrink-0">
            View All <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Seat type explainers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
          {SEAT_TYPES.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-4 border border-[var(--line)] flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0B0B0B] grid place-items-center shrink-0">
                <Info className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="font-bold text-[13px] tracking-tight">{t.name}</div>
                <p className="mt-0.5 text-[11px] text-[#0B0B0B]/55 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 columns × 2 rows = 6 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {spaces.map((s) => (
            <article key={s.id} className="group bg-white rounded-xl overflow-hidden border border-[var(--line)] lift flex flex-col">

              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur text-[11px] font-medium">
                    <Star className="w-2.5 h-2.5 fill-[#C9A23B] text-[#C9A23B]" />
                    {s.rating}
                  </div>
                  {s.featured && (
                    <span className="px-2 py-0.5 rounded-full bg-[#0B0B0B] text-white text-[10px] font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <button
                  onClick={() => toggle(s.id)}
                  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 backdrop-blur grid place-items-center hover:bg-white transition-colors"
                >
                  <Heart className={`w-3 h-3 ${favs.has(s.id) ? 'fill-[#0B0B0B] text-[#0B0B0B]' : 'text-[#0B0B0B]/60'}`} />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-bold text-[14px] leading-tight tracking-tight truncate">{s.name}</h3>
                    <div className="flex items-center gap-1 mt-0.5 text-[11px] text-[#0B0B0B]/50">
                      <MapPin className="w-2.5 h-2.5 shrink-0" />
                      <span className="truncate">{s.location}</span>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-[10px] text-[#0B0B0B]/40 uppercase tracking-wider leading-none">from</div>
                    <div className="font-bold text-[15px] tracking-tight leading-tight">
                      ₹{s.price}<span className="text-[11px] font-normal text-[#0B0B0B]/45">/day</span>
                    </div>
                  </div>
                </div>

                {/* Desk stats row */}
                <div className="mt-3 flex items-center gap-2 text-[11px] text-[#0B0B0B]/55 border-y border-[var(--line)] py-2">
                  <span><b className="font-bold text-[12px] text-[#0B0B0B]">{s.stats.hot}</b> Hot</span>
                  <span className="w-px h-2.5 bg-[var(--line)]" />
                  <span><b className="font-bold text-[12px] text-[#0B0B0B]">{s.stats.dedicated}</b> Dedicated</span>
                  <span className="w-px h-2.5 bg-[var(--line)]" />
                  <span><b className="font-bold text-[12px] text-[#0B0B0B]">{s.stats.cabins}</b> Cabins</span>
                </div>

                {/* Amenity tags + CTA */}
                <div className="mt-3 flex items-center justify-between gap-2 mt-auto">
                  <div className="flex flex-wrap gap-1">
                    {s.amenities.slice(0, 3).map((a) => (
                      <span key={a} className="px-2 py-0.5 rounded-full bg-[#EDEAE0] text-[10px] text-[#0B0B0B]/60">
                        {a}
                      </span>
                    ))}
                    {s.amenities.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full bg-[#EDEAE0] text-[10px] text-[#0B0B0B]/40">
                        +{s.amenities.length - 3}
                      </span>
                    )}
                  </div>
                  <a href="/desks" className="shrink-0 h-7 px-3 rounded-full bg-[#0B0B0B] text-white text-[11px] font-medium hover:bg-[#1f1f1f] transition-colors inline-flex items-center gap-0.5">
                    View <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
