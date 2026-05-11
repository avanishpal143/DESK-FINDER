import React, { useState } from 'react';
import { meetingRooms, virtualSpaces } from '../data/mock';
import { Star, MapPin, Users, Check } from 'lucide-react';

export default function MeetingRooms() {
  const [tab, setTab] = useState('meeting');

  return (
    <section id="meetings" className="py-16 lg:py-20 bg-[#EDEAE0]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow mb-3">— Book On Demand</div>
            <h2 className="font-bold text-4xl lg:text-5xl leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
              Meeting rooms &amp; virtual spaces
            </h2>
            <p className="mt-3 text-[#0B0B0B]/60 max-w-lg text-[14px] leading-relaxed">
              Professional meeting rooms by the hour and virtual office solutions for the modern team.
            </p>
          </div>
          <div className="inline-flex rounded-full bg-white border border-[var(--line)] p-1 self-start lg:self-auto">
            <button
              onClick={() => setTab('meeting')}
              className={`px-4 h-9 rounded-full text-[13px] font-medium transition-colors ${tab === 'meeting' ? 'bg-[#0B0B0B] text-white' : 'text-[#0B0B0B]/65'}`}
            >
              Meeting Rooms
            </button>
            <button
              onClick={() => setTab('virtual')}
              className={`px-4 h-9 rounded-full text-[13px] font-medium transition-colors ${tab === 'virtual' ? 'bg-[#0B0B0B] text-white' : 'text-[#0B0B0B]/65'}`}
            >
              Virtual Spaces
            </button>
          </div>
        </div>

        {tab === 'meeting' ? (
          <div className="grid md:grid-cols-3 gap-5">
            {meetingRooms.map((r) => (
              <article key={r.id} className="bg-white rounded-2xl overflow-hidden border border-[var(--line)] lift group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[11px]">
                      <Star className="w-3 h-3 fill-[#C9A23B] text-[#C9A23B]" /> {r.rating}
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[11px]">
                      <Users className="w-3 h-3" /> {r.seats} seats
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[17px] tracking-tight">{r.name}</h3>
                  <div className="flex items-center gap-1.5 mt-1 text-[13px] text-[#0B0B0B]/55">
                    <MapPin className="w-3 h-3" /> {r.location}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {r.amenities.map((a) => (
                      <span key={a} className="px-2.5 py-1 rounded-full bg-[#EDEAE0] text-[11px] text-[#0B0B0B]/65">{a}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="font-bold text-xl tracking-tight">₹{r.price}<span className="text-[13px] font-normal text-[#0B0B0B]/50">/hr</span></div>
                    <button className="h-9 px-4 rounded-full bg-[#0B0B0B] text-white text-[13px] hover:bg-[#1f1f1f] transition-colors">Book Now</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-5">
            {virtualSpaces.map((v) => (
              <article key={v.id} className="bg-white rounded-2xl p-6 border border-[var(--line)] lift">
                <h3 className="font-bold text-[17px] tracking-tight">{v.name}</h3>
                <div className="flex items-center gap-1.5 mt-1 text-[13px] text-[#0B0B0B]/55">
                  <MapPin className="w-3 h-3" /> {v.location}
                </div>
                <ul className="mt-4 space-y-2">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-[#0B0B0B]/75">
                      <Check className="w-3.5 h-3.5 mt-0.5 text-[#16A34A] shrink-0" strokeWidth={3} /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4">
                  <div>
                    <div className="font-bold text-xl tracking-tight">₹{v.price}</div>
                    <div className="text-[11px] text-[#0B0B0B]/50">{v.period}</div>
                  </div>
                  <button className="h-9 px-4 rounded-full bg-[#0B0B0B] text-white text-[13px] hover:bg-[#1f1f1f] transition-colors">Get Started</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
