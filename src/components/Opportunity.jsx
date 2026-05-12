import React, { useEffect, useRef, useState } from 'react';
import { opportunityStats } from '../data/mock';

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => e.isIntersecting && setInView(true)); },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function Counter({ value, prefix = '', suffix = '', start }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const dur = 1600;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  const display = value % 1 !== 0 ? n.toFixed(1) : Math.round(n).toString();
  return <span>{prefix}{display}{suffix}</span>;
}

export default function Opportunity() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-[#0B0B0B] text-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.06]" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left the gap statement */}
          <div>
            <div className="eyebrow text-white/40 mb-4">The Opportunity</div>
            <h2 className="font-bold text-2xl lg:text-4xl leading-[1.15]" style={{ letterSpacing: '-0.03em' }}>
              India's workspace demand is growing faster than supply.
              <span className="text-[#C9A23B]"> We're here to bridge that gap.</span>
            </h2>
            <p className="mt-4 text-[14px] text-white/55 leading-relaxed max-w-md">
              Coworking spaces occupy just 2.1% of office inventory globally yet 59% of growing companies want flexible space. That's a 28x gap between supply and demand. The Desk Finder connects both sides of this equation.
            </p>
          </div>

          {/* Right animated stats */}
          <div className="grid grid-cols-2 gap-px bg-white/10">
            {opportunityStats.map((s, i) => (
              <div key={i} className="bg-[#0B0B0B] p-6 lg:p-8">
                <div className="font-bold text-4xl lg:text-5xl text-[#C9A23B]" style={{ letterSpacing: '-0.04em' }}>
                  <Counter value={s.value} prefix={s.prefix || ''} suffix={s.suffix || ''} start={inView} />
                </div>
                <p className="mt-3 text-[12px] text-white/50 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
