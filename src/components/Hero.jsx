import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, MapPin, Star, Wifi, Coffee, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const STATS = [
  { label: 'Free for spaces' },
  { label: 'Zero lead cost' },
  { label: '100+ spaces' },
];

const SPACE_TYPES = [
  { label: 'Desk', href: '/desks' },
  { label: 'Cabin', href: '/desks' },
  { label: 'Meeting Room', href: '/meeting-rooms' },
  { label: 'Virtual Office', href: '/meeting-rooms' },
  { label: 'Managed Office', href: '/managed-offices' },
];

export default function Hero() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const text1 = "Where work";
    const text2 = "finds space.";
    let index1 = 0;
    let index2 = 0;
    
    const timer1 = setInterval(() => {
      if (index1 < text1.length) {
        setLine1(text1.substring(0, index1 + 1));
        index1++;
      } else {
        clearInterval(timer1);
        
        const timer2 = setInterval(() => {
          if (index2 < text2.length) {
            setLine2(text2.substring(0, index2 + 1));
            index2++;
          } else {
            clearInterval(timer2);
            setIsFinished(true);
          }
        }, 120);
      }
    }, 120);

    return () => {
      clearInterval(timer1);
    };
  }, []);

  return (
    <section className="relative bg-cross pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[#C9A23B]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] rounded-full bg-white/30 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="fade-up pt-4">
            <h1 className="font-bold text-[52px] sm:text-[68px] lg:text-[80px] leading-[0.92] tracking-[-0.045em] min-h-[2.1em] lg:min-h-[1.92em]">
              {line1}
              {line1 && <br />}
              <span className="inline-block">
                {line2}
              </span>
              <span className={`inline-block w-[4px] h-[0.75em] bg-[#0B0B0B] ml-2 align-middle ${isFinished ? 'animate-none opacity-0' : 'animate-pulse'}`} />
            </h1>

            <p className="max-w-[460px] mt-6 text-[15px] text-[#0B0B0B]/60 leading-[1.65]">
              Access hundreds of premium workspaces across cities. Find hot desks, private cabins, meeting rooms, and managed offices with zero complexity.
            </p>

            {/* Stats */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-2 text-[13px] text-[#0B0B0B]/70">
                  <Check className="w-3.5 h-3.5 text-[#16A34A]" strokeWidth={3} />
                  {s.label}
                </div>
              ))}
            </div>

            {/* Space type quick links */}
            <div className="mt-8">
              <p className="text-[11px] text-[#0B0B0B]/40 uppercase tracking-wider mb-2.5">Browse by type</p>
              <div className="flex flex-wrap gap-2">
                {SPACE_TYPES.map((t) => (
                  <Link
                    key={t.label}
                    to={t.href}
                    className="inline-flex items-center px-4 h-8 rounded-full bg-white border border-[var(--line)] text-[12px] font-medium text-[#0B0B0B]/70 hover:bg-[#0B0B0B] hover:text-white hover:border-[#0B0B0B] transition-all duration-200"
                  >
                    {t.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact?type=find"
                className="group inline-flex items-center gap-2 px-6 h-11 rounded-full bg-[#0B0B0B] text-white text-[14px] font-medium hover:bg-[#1f1f1f] transition-colors"
              >
                Find your space
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact?type=list"
                className="inline-flex items-center gap-2 px-6 h-11 rounded-full bg-white border border-[var(--line)] text-[14px] font-medium hover:bg-[#EDEAE0] transition-colors"
              >
                List your space
              </Link>
            </div>
          </div>

          {/* ── RIGHT — Visual ── */}
          <div className="relative hidden lg:block h-[520px]">

            {/* Main image card */}
            <div className="hero-float absolute inset-x-8 top-0 bottom-16 rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(11,11,11,0.25)]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=srgb&fm=jpg&w=900&q=85"
                alt="Modern coworking space"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/50 via-transparent to-transparent" />

              {/* Bottom label on image */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-white/95 backdrop-blur rounded-xl px-3 py-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0B0B0B]/60" />
                  <span className="text-[12px] font-medium">Indiranagar, Bangalore</span>
                </div>
                <div className="flex items-center gap-1 bg-white/95 backdrop-blur rounded-xl px-3 py-2">
                  <Star className="w-3.5 h-3.5 fill-[#C9A23B] text-[#C9A23B]" />
                  <span className="text-[12px] font-medium">4.9</span>
                </div>
              </div>
            </div>

            {/* Floating card 1 — top right */}
            <div className="hero-float-delay-1 absolute -right-4 top-10 bg-white rounded-2xl p-4 shadow-[0_20px_50px_-10px_rgba(11,11,11,0.18)] border border-[var(--line)] w-44">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-[#0B0B0B] grid place-items-center">
                  <Users className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-[11px] font-medium text-[#0B0B0B]/60">Available now</span>
              </div>
              <div className="font-bold text-[22px] tracking-tight">240+</div>
              <div className="text-[11px] text-[#0B0B0B]/50 mt-0.5">Hot desks today</div>
            </div>

            {/* Floating card 2 — bottom right */}
            <div className="hero-float-delay-2 absolute -right-4 bottom-24 bg-[#0B0B0B] text-white rounded-2xl p-4 shadow-[0_20px_50px_-10px_rgba(11,11,11,0.3)] w-44">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-white/15 grid place-items-center">
                  <Wifi className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-[11px] text-white/50">Amenities</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {['WiFi', 'AC', 'Coffee', 'Print'].map(a => (
                  <span key={a} className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-white/80">{a}</span>
                ))}
              </div>
            </div>

            {/* Floating card 3 — left middle */}
            <div className="hero-float-delay-3 absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-[0_20px_50px_-10px_rgba(11,11,11,0.18)] border border-[var(--line)] w-40">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-[#EDEAE0] grid place-items-center">
                  <Coffee className="w-3.5 h-3.5 text-[#0B0B0B]/70" />
                </div>
                <span className="text-[11px] font-medium text-[#0B0B0B]/60">From</span>
              </div>
              <div className="font-bold text-[20px] tracking-tight">₹199<span className="text-[12px] font-normal text-[#0B0B0B]/45">/day</span></div>
              <div className="text-[11px] text-[#0B0B0B]/50 mt-0.5">No commitment</div>
            </div>

            {/* Ping dot — live indicator */}
            <div className="absolute top-8 right-8 flex items-center gap-1.5 bg-white/90 backdrop-blur rounded-full px-2.5 py-1.5 shadow-sm border border-[var(--line)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A34A]" />
              </span>
              <span className="text-[11px] font-medium text-[#0B0B0B]/70">Live availability</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
