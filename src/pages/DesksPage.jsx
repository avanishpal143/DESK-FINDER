import React, { useState } from 'react';
import Layout from '../components/Layout';
import TypewriterHeading from '../components/TypewriterHeading';
import { spaces } from '../data/mock';
import { Star, MapPin, ArrowUpRight, Heart, Search, SlidersHorizontal } from 'lucide-react';

const CITIES = ['All Cities', 'Delhi', 'Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 'Noida'];

export default function DesksPage() {
  const [favs, setFavs] = useState(new Set());
  const [city, setCity] = useState('All Cities');
  const [search, setSearch] = useState('');

  const toggle = (id) => {
    const n = new Set(favs);
    if (n.has(id)) n.delete(id); else n.add(id);
    setFavs(n);
  };

  const filtered = spaces.filter(s => {
    const matchCity = city === 'All Cities' || s.location.includes(city.split(' ')[0]);
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.location.toLowerCase().includes(search.toLowerCase());
    return matchCity && matchSearch;
  });

  return (
    <Layout>
      {/* Hero banner */}
      <section className="bg-cross pt-32 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="eyebrow mb-3">Desks &amp; Coworking Spaces</div>
            <TypewriterHeading 
              text1="Find your perfect" 
              text2="workspace" 
              className="font-bold text-4xl lg:text-6xl leading-[0.95] min-h-[2.1em]" 
            />
            <p className="mt-4 text-[15px] text-[#0B0B0B]/60 leading-relaxed max-w-lg">
              Hot desks, dedicated seats, and private cabins across 100+ coworking spaces in India's top cities. Book your perfect workspace.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              { value: '100+', label: 'Partner Spaces' },
              { value: '10', label: 'Cities' },
              { value: '₹199', label: 'Starting from /day' },
              { value: '4.7★', label: 'Avg. Rating' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="font-bold text-[18px]" style={{ letterSpacing: '-0.03em' }}>{s.value}</span>
                <span className="text-[12px] text-[#0B0B0B]/50">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-[#F7F5EF]/95 backdrop-blur border-b border-[var(--line)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 bg-white border border-[var(--line)] rounded-xl px-3 h-10 flex-1 max-w-xs">
            <Search className="w-3.5 h-3.5 text-[#0B0B0B]/40 shrink-0" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search spaces or cities..."
              className="flex-1 text-[13px] outline-none bg-transparent placeholder:text-[#0B0B0B]/35"
            />
          </div>

          {/* City filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
            {CITIES.map(c => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`shrink-0 px-3.5 h-9 rounded-full text-[12px] font-medium transition-colors border ${
                  city === c
                    ? 'bg-[#0B0B0B] text-white border-[#0B0B0B]'
                    : 'bg-white text-[#0B0B0B]/65 border-[var(--line)] hover:border-[#0B0B0B]/30'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-auto shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#0B0B0B]/50" />
            <span className="text-[12px] text-[#0B0B0B]/50">{filtered.length} spaces</span>
          </div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="py-10 bg-[#EDEAE0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[#0B0B0B]/40 text-[15px]">No spaces found. Try a different search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((s) => (
                <article key={s.id} className="group bg-white rounded-xl overflow-hidden border border-[var(--line)] lift flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur text-[11px] font-medium">
                        <Star className="w-2.5 h-2.5 fill-[#C9A23B] text-[#C9A23B]" />{s.rating}
                      </div>
                      {s.featured && <span className="px-2 py-0.5 rounded-full bg-[#0B0B0B] text-white text-[10px] font-medium">Featured</span>}
                    </div>
                    <button onClick={() => toggle(s.id)} className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 backdrop-blur grid place-items-center hover:bg-white transition-colors">
                      <Heart className={`w-3 h-3 ${favs.has(s.id) ? 'fill-[#0B0B0B] text-[#0B0B0B]' : 'text-[#0B0B0B]/60'}`} />
                    </button>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="font-bold text-[15px] leading-tight tracking-tight">{s.name}</h3>
                        <div className="flex items-center gap-1 mt-0.5 text-[11px] text-[#0B0B0B]/50">
                          <MapPin className="w-2.5 h-2.5 shrink-0" />
                          <span className="truncate">{s.location}</span>
                        </div>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="text-[10px] text-[#0B0B0B]/40 uppercase tracking-wider">from</div>
                        <div className="font-bold text-[15px] tracking-tight">₹{s.price}<span className="text-[11px] font-normal text-[#0B0B0B]/45">/day</span></div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-[#0B0B0B]/55 border-y border-[var(--line)] py-2">
                      <span><b className="font-bold text-[12px] text-[#0B0B0B]">{s.stats.hot}</b> Hot</span>
                      <span className="w-px h-2.5 bg-[var(--line)]" />
                      <span><b className="font-bold text-[12px] text-[#0B0B0B]">{s.stats.dedicated}</b> Dedicated</span>
                      <span className="w-px h-2.5 bg-[var(--line)]" />
                      <span><b className="font-bold text-[12px] text-[#0B0B0B]">{s.stats.cabins}</b> Cabins</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1">
                        {s.amenities.slice(0, 3).map(a => (
                          <span key={a} className="px-2 py-0.5 rounded-full bg-[#EDEAE0] text-[10px] text-[#0B0B0B]/60">{a}</span>
                        ))}
                        {s.amenities.length > 3 && <span className="px-2 py-0.5 rounded-full bg-[#EDEAE0] text-[10px] text-[#0B0B0B]/40">+{s.amenities.length - 3}</span>}
                      </div>
                      <button className="shrink-0 h-7 px-3 rounded-full bg-[#0B0B0B] text-white text-[11px] font-medium hover:bg-[#1f1f1f] transition-colors inline-flex items-center gap-0.5">
                        Book <ArrowUpRight className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why section */}
      <section className="py-14 bg-[#F7F5EF]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Multiple Spaces', desc: 'Discover and access a wide network of workspaces. No multiple accounts or complex setups.' },
              { icon: '⚡', title: 'Instant Booking', desc: 'Check real-time availability and book in under 60 seconds. Walk in ready to work.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden fees. What you see is what you pay. Cancel anytime with no penalties.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-[var(--line)]">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[16px] tracking-tight">{item.title}</h3>
                <p className="mt-2 text-[13px] text-[#0B0B0B]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
