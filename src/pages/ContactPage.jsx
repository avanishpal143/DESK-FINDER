import React, { useState } from 'react';
import Layout from '../components/Layout';
import { toast } from 'sonner';
import { MapPin, Mail, Phone, ArrowRight, Check, Monitor, Users, Building2, Globe } from 'lucide-react';

const ENQUIRY_TYPES = [
  { value: 'desk', label: 'Desk', icon: Users },
  { value: 'cabin', label: 'Cabin', icon: Monitor },
  { value: 'meeting', label: 'Meeting Room', icon: Monitor },
  { value: 'virtual', label: 'Virtual Office', icon: Globe },
  { value: 'managed', label: 'Managed Office', icon: Building2 },
];

const OFFICES = [
  { city: 'Delhi', address: 'Connaught Place, New Delhi – 110001', phone: '+91 98100 00001' },
  { city: 'Mumbai', address: 'BKC, Bandra East, Mumbai – 400051', phone: '+91 98200 00002' },
  { city: 'Bangalore', address: 'Indiranagar, Bangalore – 560038', phone: '+91 98300 00003' },
];

const SOCIALS = [
  { label: 'X (Twitter)', handle: '@thedeskfinder', href: 'https://twitter.com' },
  { label: 'LinkedIn', handle: 'The Desk Finder', href: 'https://linkedin.com' },
  { label: 'Instagram', handle: '@thedeskfinder', href: 'https://instagram.com' },
];

export default function ContactPage() {
  const [type, setType] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!type || !form.name || !form.email) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! We'll get back to you within 2–4 hours.");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-cross pt-32 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-xl">
            <div className="eyebrow mb-3">Contact Us</div>
            <h1 className="font-bold text-4xl lg:text-6xl leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
              Let's find your<br />
              <span className="squiggle">perfect space</span>
            </h1>
            <p className="mt-4 text-[15px] text-[#0B0B0B]/60 leading-relaxed">
              Whether you're looking for a desk, a managed office, or want to list your space we'll get back to you within 2–4 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 bg-[#F7F5EF]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">

            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 border border-[var(--line)] text-center">
                  <div className="w-14 h-14 rounded-full bg-[#0B0B0B] grid place-items-center mx-auto">
                    <Check className="w-7 h-7 text-white" strokeWidth={3} />
                  </div>
                  <h2 className="font-bold text-2xl mt-5 tracking-tight">Message received!</h2>
                  <p className="text-[#0B0B0B]/55 mt-2 text-[14px]">
                    Our team will reach out to <strong>{form.email}</strong> within 2–4 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', message: '' }); setType(''); }}
                    className="mt-6 text-[13px] underline underline-offset-4 text-[#0B0B0B]/60 hover:text-[#0B0B0B] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="bg-white rounded-2xl p-7 lg:p-8 border border-[var(--line)]">
                  <h2 className="font-bold text-[22px] tracking-tight">Send us a message</h2>
                  <p className="mt-1 text-[13px] text-[#0B0B0B]/55">Fields marked * are required.</p>

                  {/* Enquiry type */}
                  <div className="mt-6">
                    <label className="text-[13px] font-medium block mb-2">I'm looking for a *</label>
                    <div className="flex flex-wrap gap-2">
                      {ENQUIRY_TYPES.map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setType(t.value)}
                          className={`flex items-center gap-1.5 px-4 h-9 rounded-full border text-[12px] font-medium transition-colors ${
                            type === t.value
                              ? 'border-[#0B0B0B] bg-[#0B0B0B] text-white'
                              : 'border-[var(--line)] text-[#0B0B0B]/65 hover:border-[#0B0B0B]/30'
                          }`}
                        >
                          <t.icon className="w-3.5 h-3.5" />
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="mt-5 grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[13px] font-medium block mb-1.5">Full name *</label>
                      <input
                        value={form.name} onChange={set('name')}
                        placeholder="Jane Doe"
                        className="w-full h-11 rounded-xl border border-[var(--line)] px-4 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30"
                      />
                    </div>
                    <div>
                      <label className="text-[13px] font-medium block mb-1.5">Email address *</label>
                      <input
                        type="email" value={form.email} onChange={set('email')}
                        placeholder="jane@company.com"
                        className="w-full h-11 rounded-xl border border-[var(--line)] px-4 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30"
                      />
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="mt-4 grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[13px] font-medium block mb-1.5">Phone number</label>
                      <input
                        type="tel" value={form.phone} onChange={set('phone')}
                        placeholder="+91 98765 43210"
                        className="w-full h-11 rounded-xl border border-[var(--line)] px-4 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30"
                      />
                    </div>
                    <div>
                      <label className="text-[13px] font-medium block mb-1.5">Company name</label>
                      <input
                        value={form.company} onChange={set('company')}
                        placeholder="Your company"
                        className="w-full h-11 rounded-xl border border-[var(--line)] px-4 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-4">
                    <label className="text-[13px] font-medium block mb-1.5">Message</label>
                    <textarea
                      value={form.message} onChange={set('message')}
                      placeholder="Tell us about your requirements city, team size, budget, timeline..."
                      rows={4}
                      className="w-full rounded-xl border border-[var(--line)] px-4 py-3 text-[13px] outline-none focus:border-[#0B0B0B]/40 transition-colors placeholder:text-[#0B0B0B]/30 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-5 w-full h-11 rounded-xl bg-[#0B0B0B] text-white hover:bg-[#1f1f1f] transition-colors group inline-flex items-center justify-center gap-2 text-[14px] font-medium"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="mt-3 text-[11px] text-[#0B0B0B]/40 text-center">
                    We respond within 2–4 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-4">

              {/* Quick contact */}
              <div className="bg-[#0B0B0B] text-white rounded-2xl p-6">
                <h3 className="font-bold text-[17px] tracking-tight">Get in touch</h3>
                <div className="mt-4 space-y-3">
                  <a href="mailto:hello@thedeskfinder.in" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/10 grid place-items-center shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[13px] text-white/70 group-hover:text-white transition-colors">hello@thedeskfinder.in</span>
                  </a>
                  <a href="tel:+919810000000" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/10 grid place-items-center shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[13px] text-white/70 group-hover:text-white transition-colors">+91 98100 00000</span>
                  </a>
                </div>

                {/* Response time */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="text-[11px] text-white/40 mb-2 uppercase tracking-wider">Response time</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#16A34A]" />
                    <span className="text-[13px] text-white/70">Usually within 2–4 hours</span>
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="text-[11px] text-white/40 mb-3 uppercase tracking-wider">Follow us</div>
                  <div className="space-y-2.5">
                    {SOCIALS.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="flex items-center justify-between group">
                        <span className="text-[13px] text-white/60 group-hover:text-white transition-colors">{s.label}</span>
                        <span className="text-[12px] text-white/40 group-hover:text-white/70 transition-colors">{s.handle}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office locations */}
              <div className="bg-white rounded-2xl p-6 border border-[var(--line)]">
                <h3 className="font-bold text-[17px] tracking-tight mb-4">Our offices</h3>
                <div className="space-y-4">
                  {OFFICES.map((o) => (
                    <div key={o.city} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#EDEAE0] grid place-items-center shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-[#0B0B0B]/60" />
                      </div>
                      <div>
                        <div className="font-bold text-[13px]">{o.city}</div>
                        <div className="text-[12px] text-[#0B0B0B]/50 mt-0.5">{o.address}</div>
                        <div className="text-[12px] text-[#0B0B0B]/50">{o.phone}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* List your space CTA */}
              <div className="bg-[#EDEAE0] rounded-2xl p-6 border border-[var(--line)]">
                <h3 className="font-bold text-[16px] tracking-tight">Want to list your space?</h3>
                <p className="mt-1.5 text-[13px] text-[#0B0B0B]/60 leading-relaxed">
                  Listing is free. We only charge a small commission on confirmed bookings.
                </p>
                <a
                  href="mailto:partner@thedeskfinder.in"
                  className="mt-4 inline-flex items-center gap-2 bg-[#0B0B0B] text-white rounded-full px-5 h-9 text-[12px] font-medium hover:bg-[#1f1f1f] transition-colors"
                >
                  partner@thedeskfinder.in
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
