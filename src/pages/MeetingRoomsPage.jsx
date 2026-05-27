import React, { useState } from 'react';
import Layout from '../components/Layout';
import TypewriterHeading from '../components/TypewriterHeading';
import { meetingRooms, virtualSpaces } from '../data/mock';
import { Star, MapPin, Users, Check, ArrowUpRight, Clock, Wifi } from 'lucide-react';

const TABS = ['Meeting Rooms', 'Virtual Offices'];

export default function MeetingRoomsPage() {
  const [tab, setTab] = useState(0);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-cross pt-32 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="eyebrow mb-3">Meeting Rooms &amp; Virtual Offices</div>
            <TypewriterHeading 
              text1="Professional spaces" 
              text2="on demand" 
              className="font-bold text-4xl lg:text-6xl leading-[0.95] min-h-[2.1em]" 
            />
            <p className="mt-4 text-[15px] text-[#0B0B0B]/60 leading-relaxed max-w-lg">
              Book fully-equipped meeting rooms by the hour, or get a prestigious business address with our virtual office plans.
            </p>
          </div>

          {/* Quick stats */}
          <div className="mt-8 flex flex-wrap gap-5">
            {[
              { icon: Clock, label: 'Book by the hour' },
              { icon: Users, label: '4–20 seat rooms' },
              { icon: Wifi, label: 'AV & conferencing included' },
              { icon: MapPin, label: '10+ cities' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-[13px] text-[#0B0B0B]/70">
                <div className="w-7 h-7 rounded-lg bg-white border border-[var(--line)] grid place-items-center">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab switcher */}
      <section className="sticky top-20 z-30 bg-[#F7F5EF]/95 backdrop-blur border-b border-[var(--line)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-3 flex items-center gap-2">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={`px-5 h-9 rounded-full text-[13px] font-medium transition-colors ${
                tab === i ? 'bg-[#0B0B0B] text-white' : 'bg-white border border-[var(--line)] text-[#0B0B0B]/65 hover:border-[#0B0B0B]/30'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Meeting Rooms */}
      {tab === 0 && (
        <section className="py-10 bg-[#EDEAE0]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {meetingRooms.map((r) => (
                <article key={r.id} className="group bg-white rounded-xl overflow-hidden border border-[var(--line)] lift flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur text-[11px] font-medium">
                        <Star className="w-2.5 h-2.5 fill-[#C9A23B] text-[#C9A23B]" />{r.rating}
                      </div>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur text-[11px]">
                        <Users className="w-2.5 h-2.5" />{r.seats} seats
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-bold text-[15px] tracking-tight">{r.name}</h3>
                    <div className="flex items-center gap-1 mt-0.5 text-[11px] text-[#0B0B0B]/50">
                      <MapPin className="w-2.5 h-2.5 shrink-0" />{r.location}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {r.amenities.map(a => (
                        <span key={a} className="px-2 py-0.5 rounded-full bg-[#EDEAE0] text-[10px] text-[#0B0B0B]/65">{a}</span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-3">
                      <div>
                        <div className="font-bold text-[17px] tracking-tight">₹{r.price}<span className="text-[12px] font-normal text-[#0B0B0B]/45">/hr</span></div>
                        <div className="text-[11px] text-[#0B0B0B]/40">Min. 1 hour booking</div>
                      </div>
                      <button className="h-8 px-4 rounded-full bg-[#0B0B0B] text-white text-[12px] font-medium hover:bg-[#1f1f1f] transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* How it works */}
            <div className="mt-12 bg-white rounded-2xl p-8 border border-[var(--line)]">
              <h3 className="font-bold text-[20px] tracking-tight mb-6">How booking works</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { step: '01', title: 'Choose a room', desc: 'Browse rooms by city, capacity, and amenities.' },
                  { step: '02', title: 'Pick your slot', desc: 'Select date and time. Instant confirmation.' },
                  { step: '03', title: 'Walk in & work', desc: 'Show your booking QR at reception. Done.' },
                ].map(s => (
                  <div key={s.step} className="flex gap-4">
                    <div className="font-bold text-[28px] text-[#0B0B0B]/10 leading-none shrink-0" style={{ letterSpacing: '-0.04em' }}>{s.step}</div>
                    <div>
                      <div className="font-bold text-[14px]">{s.title}</div>
                      <div className="text-[13px] text-[#0B0B0B]/55 mt-1">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Virtual Offices */}
      {tab === 1 && (
        <section className="py-10 bg-[#EDEAE0]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {virtualSpaces.map((v) => (
                <article key={v.id} className="bg-white rounded-xl p-6 border border-[var(--line)] lift flex flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-[16px] tracking-tight">{v.name}</h3>
                      <div className="flex items-center gap-1 mt-1 text-[11px] text-[#0B0B0B]/50">
                        <MapPin className="w-2.5 h-2.5 shrink-0" />{v.location}
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="font-bold text-[18px] tracking-tight">₹{v.price}</div>
                      <div className="text-[11px] text-[#0B0B0B]/45">{v.period}</div>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {v.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-[#0B0B0B]/70">
                        <Check className="w-3.5 h-3.5 mt-0.5 text-[#16A34A] shrink-0" strokeWidth={3} />{f}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-5 w-full h-10 rounded-xl bg-[#0B0B0B] text-white text-[13px] font-medium hover:bg-[#1f1f1f] transition-colors">
                    Get Started
                  </button>
                </article>
              ))}
            </div>

            {/* Virtual office benefits */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                { title: 'GST Registration Ready', desc: 'Use our address for GST registration and official business correspondence.' },
                { title: 'Professional Image', desc: 'A prestigious business address in prime locations builds instant credibility.' },
                { title: 'Mail & Call Handling', desc: 'We receive your mail and calls, then forward them to you anywhere in the world.' },
                { title: 'Meeting Room Access', desc: 'Book physical meeting rooms at discounted rates whenever you need them.' },
              ].map(b => (
                <div key={b.title} className="bg-white rounded-xl p-5 border border-[var(--line)] flex gap-3">
                  <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" strokeWidth={3} />
                  <div>
                    <div className="font-bold text-[14px]">{b.title}</div>
                    <div className="text-[13px] text-[#0B0B0B]/55 mt-1">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-[#0B0B0B] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="font-bold text-2xl lg:text-3xl" style={{ letterSpacing: '-0.04em' }}>Need a recurring booking?</h2>
            <p className="mt-1.5 text-[13px] text-white/50">Get discounted rates for weekly or monthly meeting room packages.</p>
          </div>
          <a href="/contact" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#0B0B0B] rounded-full px-6 h-11 text-[13px] font-medium hover:bg-[#EDEAE0] transition-colors">
            Contact Sales <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
