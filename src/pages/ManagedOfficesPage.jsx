import React, { useState } from 'react';
import Layout from '../components/Layout';
import TypewriterHeading from '../components/TypewriterHeading';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function ManagedOfficesPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', teamSize: '', location: '', requirements: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.teamSize) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSubmitted(true);
    toast.success("Requirement received! We'll get back to you within 4 hours.");
  };

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-cross pt-32 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="eyebrow mb-3">Managed Offices</div>
            <TypewriterHeading 
              text1="Managed Office" 
              className="font-bold text-4xl lg:text-6xl leading-[0.95] mb-6 min-h-[1.1em]" 
            />
            <p className="text-[17px] sm:text-[19px] text-[#0B0B0B]/70 leading-relaxed font-medium max-w-2xl">
              A fully managed, branded office space for teams of 10 to 500+. Real-time inventory across Delhi NCR's top operators.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form content */}
      <section className="py-12 bg-[#F7F5EF] min-h-[500px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Info Cards Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#0B0B0B] text-white rounded-2xl p-6 lg:p-8">
                <h3 className="font-bold text-[19px] tracking-tight mb-3">Brokerage-Free Space Search</h3>
                <p className="text-[13px] text-white/70 leading-relaxed">
                  Share your requirement below and we'll come back within 4 hours — no brokerage charged to you.
                </p>
                <div className="mt-6 pt-5 border-t border-white/10 space-y-4">
                  {[
                    { title: 'Delhi NCR Specialized', text: 'Access exclusive, real-time inventory from premium workspaces across Noida, Gurgaon, and Delhi.' },
                    { title: 'Turnkey Solutions', desc: 'Fully serviced, plug-and-play offices built & managed by industry leaders.' }
                  ].map((x, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-white">{x.title}</h4>
                        <p className="text-[11px] text-white/60 mt-0.5">{x.text || x.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#EDEAE0] rounded-2xl p-6 border border-[var(--line)]">
                <h4 className="font-bold text-[15px] tracking-tight">Need immediate assistance?</h4>
                <p className="mt-1 text-[12px] text-[#0B0B0B]/60 leading-relaxed">
                  Connect directly with our enterprise partnerships team for quick calls.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a href="mailto:hello@thedeskfinder.in" className="text-[13px] font-semibold text-[#0B0B0B] hover:underline">
                    hello@thedeskfinder.in
                  </a>
                  <a href="tel:+919810000000" className="text-[13px] font-semibold text-[#0B0B0B] hover:underline">
                    +91 98100 00000
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 border border-[var(--line)] text-center shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-[#0B0B0B] grid place-items-center mx-auto">
                    <Check className="w-7 h-7 text-white" strokeWidth={3} />
                  </div>
                  <h2 className="font-bold text-2xl mt-5 tracking-tight">Requirement Received!</h2>
                  <p className="text-[#0B0B0B]/55 mt-2 text-[14px]">
                    Thank you <strong>{form.name}</strong>, we have received your request. Our team will contact you at <strong>{form.email}</strong> within 4 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', teamSize: '', location: '', requirements: '' }); }}
                    className="mt-6 text-[13px] underline underline-offset-4 text-[#0B0B0B]/60 hover:text-[#0B0B0B] transition-colors"
                  >
                    Submit another requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="bg-white rounded-2xl p-7 lg:p-8 border border-[var(--line)] shadow-sm">
                  <h2 className="font-bold text-[22px] tracking-tight">Share your requirement</h2>
                  <p className="mt-1 text-[13px] text-[#0B0B0B]/55 mb-6">Fields marked * are required.</p>

                  <div className="space-y-4">
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[13px] font-medium block mb-1.5">Full name *</label>
                        <input
                          type="text" required value={form.name} onChange={set('name')}
                          placeholder="Jane Doe"
                          className="w-full h-11 rounded-xl border border-[var(--line)] px-4 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30 bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="text-[13px] font-medium block mb-1.5">Email address *</label>
                        <input
                          type="email" required value={form.email} onChange={set('email')}
                          placeholder="jane@company.com"
                          className="w-full h-11 rounded-xl border border-[var(--line)] px-4 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30 bg-transparent"
                        />
                      </div>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[13px] font-medium block mb-1.5">Phone number</label>
                        <input
                          type="tel" value={form.phone} onChange={set('phone')}
                          placeholder="+91 98765 43210"
                          className="w-full h-11 rounded-xl border border-[var(--line)] px-4 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30 bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="text-[13px] font-medium block mb-1.5">Company name</label>
                        <input
                          type="text" value={form.company} onChange={set('company')}
                          placeholder="Your company"
                          className="w-full h-11 rounded-xl border border-[var(--line)] px-4 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30 bg-transparent"
                        />
                      </div>
                    </div>

                    {/* Team Size + Preferred Location */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[13px] font-medium block mb-1.5">Team size *</label>
                        <select
                          required value={form.teamSize} onChange={set('teamSize')}
                          className="w-full h-11 rounded-xl border border-[var(--line)] px-3 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors bg-white text-[#0B0B0B]/80"
                        >
                          <option value="">Select team size</option>
                          <option value="10-50">10 to 50 seats</option>
                          <option value="50-100">50 to 100 seats</option>
                          <option value="100-200">100 to 200 seats</option>
                          <option value="200-500">200 to 500 seats</option>
                          <option value="500+">500+ seats</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[13px] font-medium block mb-1.5">Preferred Location (Delhi NCR)</label>
                        <select
                          value={form.location} onChange={set('location')}
                          className="w-full h-11 rounded-xl border border-[var(--line)] px-3 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors bg-white text-[#0B0B0B]/80"
                        >
                          <option value="">Select location</option>
                          <option value="Gurgaon">Gurgaon (Gurugram)</option>
                          <option value="Noida">Noida / Greater Noida</option>
                          <option value="Delhi - Connaught Place">Delhi - Connaught Place</option>
                          <option value="Delhi - Okhla/Saket">Delhi - Okhla/Saket</option>
                          <option value="Other Delhi NCR">Other Delhi NCR</option>
                        </select>
                      </div>
                    </div>

                    {/* Message details */}
                    <div>
                      <label className="text-[13px] font-medium block mb-1.5">Specific Requirements</label>
                      <textarea
                        value={form.requirements} onChange={set('requirements')}
                        placeholder="E.g., Move-in date, IT requirements, cabins needed..."
                        rows={4}
                        className="w-full rounded-xl border border-[var(--line)] px-4 py-3 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30 resize-none bg-transparent"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full h-11 rounded-xl bg-[#0B0B0B] text-white hover:bg-[#1f1f1f] transition-colors group inline-flex items-center justify-center gap-2 text-[14px] font-medium"
                  >
                    Submit Requirement
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="mt-3 text-[11px] text-[#0B0B0B]/40 text-center">
                    We respond within 4 hours. No brokerage charged to you.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-[#EDEAE0] border-t border-[var(--line)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <div className="eyebrow mb-2">Why Choose Us</div>
            <h2 className="font-bold text-3xl lg:text-4xl" style={{ letterSpacing: '-0.04em' }}>Everything included</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🏢', title: 'Fully Furnished', desc: 'Move-in ready offices with ergonomic furniture, high-speed internet, and all utilities included.' },
              { icon: '📞', title: 'Dedicated Support', desc: '24/7 support to handle everything so you can focus on work.' },
              { icon: '📈', title: 'Scale Flexibly', desc: 'Start with 5 seats, grow to 500. Adjust your space as your team grows.' },
              { icon: '☕', title: 'Premium Amenities', desc: 'Cafeteria, meeting rooms, event spaces, and wellness areas—all included in your plan.' },
              { icon: '📍', title: 'Prime Locations', desc: 'Offices in CBD, tech parks, and business hubs across 10+ cities in India.' }
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 border border-[var(--line)] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-[15px] tracking-tight text-[#0B0B0B]">{f.title}</h3>
                <p className="mt-1.5 text-[13px] text-[#0B0B0B]/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
