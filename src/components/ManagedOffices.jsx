import React, { useState } from 'react';
import { managedOffices } from '../data/mock';
import { Building2, ChevronDown, ArrowUpRight } from 'lucide-react';

export default function ManagedOffices() {
  const [open, setOpen] = useState(1);

  return (
    <section id="offices" className="py-16 lg:py-20 bg-[#F7F5EF]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow mb-3">Enterprise Ready</div>
            <h2 className="font-bold text-4xl lg:text-5xl leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
              Managed offices
            </h2>
            <p className="mt-3 text-[#0B0B0B]/60 max-w-lg text-[14px] leading-relaxed">
              Full-service managed offices from India's top providers. Real-time inventory, transparent pricing.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 text-[13px] font-medium border-b border-[#0B0B0B] pb-1 hover:text-[#0B0B0B]/60 hover:border-[#0B0B0B]/60 transition-colors w-fit">
            Explore All <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
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
                  <div className="col-span-12 lg:col-span-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B0B0B] text-white grid place-items-center font-bold text-sm">
                      {o.code}
                    </div>
                    <div>
                      <h3 className="font-bold text-[18px] tracking-tight">{o.name}</h3>
                      <p className="text-[12px] text-[#0B0B0B]/50 mt-0.5">{o.locations} locations · {o.seats.toLocaleString()} seats</p>
                    </div>
                  </div>
                  <div className="col-span-8 lg:col-span-6">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 rounded-full bg-[#EDEAE0] overflow-hidden">
                        <div className="h-full rounded-full bg-[#0B0B0B] transition-all" style={{ width: `${o.occupancy}%` }} />
                      </div>
                      <div className="font-bold text-[15px] w-12 text-right">{o.occupancy}%</div>
                    </div>
                    <p className="eyebrow mt-1.5">Occupancy</p>
                  </div>
                  <div className="col-span-4 lg:col-span-2 flex justify-end">
                    <div className={`w-8 h-8 rounded-full border border-[var(--line)] grid place-items-center transition-transform ${isOpen ? 'rotate-180 bg-[#0B0B0B] text-white border-[#0B0B0B]' : ''}`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {o.inventory.map((inv, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white border border-[var(--line)] lift">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-3.5 h-3.5 text-[#0B0B0B]/50" />
                            <h4 className="font-medium text-[14px]">{inv.name}</h4>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-[#EDEAE0] text-[10px] uppercase tracking-wider">{inv.tier}</span>
                        </div>
                        <div className="mt-4 flex items-end justify-between">
                          <div>
                            <div className="font-bold text-xl tracking-tight">{inv.seats}</div>
                            <div className="text-[11px] text-[#0B0B0B]/50">seats</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-xl tracking-tight text-[#16A34A]">{inv.available}</div>
                            <div className="text-[11px] text-[#0B0B0B]/50">available</div>
                          </div>
                        </div>
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
  );
}
