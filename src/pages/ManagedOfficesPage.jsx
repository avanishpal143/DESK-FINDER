import React, { useState } from 'react';
import Layout from '../components/Layout';
import { managedOffices } from '../data/mock';
import { ChevronDown, ArrowUpRight, MapPin } from 'lucide-react';

const FEATURES = [
  { icon: '🏢', title: 'Fully Furnished', desc: 'Move-in ready offices with ergonomic furniture, high-speed internet, and all utilities included.' },
  { icon: '📞', title: 'Dedicated Support', desc: 'On-site community managers and 24/7 support to handle everything so you can focus on work.' },
  { icon: '📈', title: 'Scale Flexibly', desc: 'Start with 5 seats, grow to 500. Adjust your space as your team grows—no long-term lock-in.' },
  { icon: '🔒', title: 'Enterprise Security', desc: 'Biometric access, CCTV, and private networks. Your data and team stay secure.' },
  { icon: '☕', title: 'Premium Amenities', desc: 'Cafeteria, meeting rooms, event spaces, and wellness areas—all included in your plan.' },
  { icon: '📍', title: 'Prime Locations', desc: 'Offices in CBD, tech parks, and business hubs across 10+ cities in India.' },
];

export default function ManagedOfficesPage() {
  const [open, setOpen] = useState(1);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-cross pt-32 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow mb-3">— Managed Offices</div>
              <h1 className="font-bold text-4xl lg:text-6xl leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
                Your office,<br />fully managed
              </h1>
              <p className="mt-4 text-[15px] text-[#0B0B0B]/60 leading-relaxed max-w-lg">
                Premium managed offices from India's top providers. Real-time inventory, transparent pricing, and zero setup hassle. From 5 to 500 seats.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 bg-[#0B0B0B] text-white rounded-full px-6 h-11 text-[14px] font-medium hover:bg-[#1f1f1f] transition-colors">
                  Get a Quote <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#inventory" className="inline-flex items-center gap-2 bg-white border border-[var(--line)] rounded-full px-6 h-11 text-[14px] font-medium hover:bg-[#EDEAE0] transition-colors">
                  View Inventory
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '4', label: 'Top Providers', sub: 'WeWork, 91SB, Innov8, Awfis' },
                { value: '45+', label: 'Locations', sub: 'Across 10 cities' },
                { value: '19,600', label: 'Total Seats', sub: 'Available now' },
                { value: '85%', label: 'Avg Occupancy', sub: 'High demand' },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-5 border border-[var(--line)]">
                  <div className="font-bold text-3xl tracking-tight" style={{ letterSpacing: '-0.04em' }}>{s.value}</div>
                  <div className="font-medium text-[14px] mt-1">{s.label}</div>
                  <div className="text-[11px] text-[#0B0B0B]/45 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Providers accordion */}
      <section id="inventory" className="py-14 bg-[#F7F5EF]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <div className="eyebrow mb-2">— Live Inventory</div>
            <h2 className="font-bold text-3xl lg:text-4xl" style={{ letterSpacing: '-0.04em' }}>Browse by provider</h2>
            <p className="mt-2 text-[13px] text-[#0B0B0B]/55">Real-time seat availability across all partner spaces.</p>
          </div>

          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {managedOffices.map((o) => {
              const isOpen = open === o.id;
              return (
                <div key={o.id}>
                  <button
                    onClick={() => setOpen(isOpen ? null : o.id)}
                    className="w-full py-5 grid grid-cols-12 items-center gap-4 text-left hover:bg-white/60 transition-colors px-3 -mx-3 rounded-xl"
                  >
                    <div className="col-span-12 lg:col-span-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0B0B0B] text-white grid place-items-center font-bold text-sm shrink-0">
                        {o.code}
                      </div>
                      <div>
                        <h3 className="font-bold text-[17px] tracking-tight">{o.name}</h3>
                        <p className="text-[12px] text-[#0B0B0B]/50 mt-0.5">
                          {o.locations} locations · {o.seats.toLocaleString()} total seats
                        </p>
                      </div>
                    </div>
                    <div className="col-span-8 lg:col-span-5">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 rounded-full bg-[#EDEAE0] overflow-hidden">
                          <div className="h-full rounded-full bg-[#0B0B0B] transition-all" style={{ width: `${o.occupancy}%` }} />
                        </div>
                        <span className="font-bold text-[14px] w-10 text-right">{o.occupancy}%</span>
                      </div>
                      <p className="eyebrow mt-1.5">Occupancy</p>
                    </div>
                    <div className="col-span-4 lg:col-span-2 flex justify-end">
                      <div className={`w-8 h-8 rounded-full border border-[var(--line)] grid place-items-center transition-all ${isOpen ? 'rotate-180 bg-[#0B0B0B] text-white border-[#0B0B0B]' : ''}`}>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pb-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {o.inventory.map((inv, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white border border-[var(--line)] hover:shadow-sm transition-shadow">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              <MapPin className="w-3.5 h-3.5 text-[#0B0B0B]/40 shrink-0" />
                              <h4 className="font-medium text-[14px] truncate">{inv.name}</h4>
                            </div>
                            <span className="shrink-0 px-2 py-0.5 rounded-full bg-[#EDEAE0] text-[10px] uppercase tracking-wider font-medium">{inv.tier}</span>
                          </div>
                          <div className="mt-4 flex items-end justify-between">
                            <div>
                              <div className="font-bold text-2xl tracking-tight">{inv.seats}</div>
                              <div className="text-[11px] text-[#0B0B0B]/45">total seats</div>
                            </div>
                            <div className="text-right">
                              <div className={`font-bold text-2xl tracking-tight ${inv.available < 60 ? 'text-[#C9A23B]' : 'text-[#16A34A]'}`}>{inv.available}</div>
                              <div className="text-[11px] text-[#0B0B0B]/45">available</div>
                            </div>
                          </div>
                          <button className="mt-3 w-full h-8 rounded-lg bg-[#0B0B0B] text-white text-[12px] font-medium hover:bg-[#1f1f1f] transition-colors">
                            Enquire Now
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-14 bg-[#EDEAE0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <div className="eyebrow mb-2">— Why Choose Us</div>
            <h2 className="font-bold text-3xl lg:text-4xl" style={{ letterSpacing: '-0.04em' }}>Everything included</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 border border-[var(--line)]">
                <div className="text-xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-[15px] tracking-tight">{f.title}</h3>
                <p className="mt-1.5 text-[13px] text-[#0B0B0B]/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-14 bg-[#0B0B0B] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="font-bold text-3xl lg:text-4xl" style={{ letterSpacing: '-0.04em' }}>
                Need a custom office solution?
              </h2>
              <p className="mt-2 text-[14px] text-white/55">
                Tell us your team size, city, and budget. We'll find the perfect match within 24 hours.
              </p>
            </div>
            <a href="/contact" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#0B0B0B] rounded-full px-7 h-12 text-[14px] font-medium hover:bg-[#EDEAE0] transition-colors">
              Talk to an Expert <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
