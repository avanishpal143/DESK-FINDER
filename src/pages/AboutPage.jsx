import React from 'react';
import Layout from '../components/Layout';
import TypewriterHeading from '../components/TypewriterHeading';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const VALUES = [
  { title: 'Transparency', desc: 'No hidden fees, no surprise charges. What you see is what you pay always.' },
  { title: 'Flexibility', desc: 'Work on your terms. No long-term lock-ins, no rigid contracts. Scale up or down as you need.' },
  { title: 'Community', desc: 'We believe great work happens when people connect. Every space in our network is a community.' },
  { title: 'Accessibility', desc: 'Premium workspaces shouldn\'t be a luxury. We\'re making professional spaces accessible to everyone.' },
];


export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-cross pt-32 pb-14">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="eyebrow mb-3">About Us</div>
            <TypewriterHeading 
              text1="The Desk" 
              text2="Finder" 
              className="font-bold text-4xl lg:text-6xl leading-[0.95] min-h-[2.1em]" 
            />
            <p className="mt-5 text-[15px] text-[#0B0B0B]/60 leading-relaxed max-w-lg">
              The Desk Finder was built on a simple belief that finding a great place to work shouldn't be complicated, expensive, or time-consuming.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-14 bg-[#F7F5EF]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="eyebrow mb-3">Our Story</div>
              <h2 className="font-bold text-3xl lg:text-4xl leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
                Born from a real problem
              </h2>
              <div className="mt-5 space-y-4 text-[14px] text-[#0B0B0B]/65 leading-relaxed">
                <p>
                  It started with a simple frustration. Our founders were freelancers and early-stage startup founders who spent hours every week searching for a decent place to work calling spaces, checking availability, comparing prices across different apps, and still ending up in a noisy café.
                </p>
                <p>
                  India's coworking market was growing fast, but the experience of finding and booking a workspace was still broken. Hundreds of great spaces existed across every city, but there was no single, reliable way to discover and access them.
                </p>
                <p>
                  So we built The Desk Finder — a simple, transparent way to find and book workspaces. Whether you need a hot desk for a day, a dedicated seat for a month, a cabin for your team, or a meeting room for an hour, we've got you covered.
                </p>
                <p>
                  Today, we work with space owners across 10+ cities to bring their inventory online, and help thousands of professionals find their perfect workspace every day.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100+', label: 'Partner Spaces', sub: 'Across India' },
                { value: '10+', label: 'Cities', sub: 'And growing' },
                { value: '₹0', label: 'Listing Cost', sub: 'Free for space owners' },
                { value: '24h', label: 'Response Time', sub: 'Average reply time' },
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

      {/* Mission */}
      <section className="py-14 bg-[#0B0B0B] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="eyebrow text-white/40 mb-4">Our Mission</div>
            <h2 className="font-bold text-3xl lg:text-5xl leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
              To make professional workspaces accessible to every professional in India —
              <span className="text-[#C9A23B]"> regardless of company size, budget, or city.</span>
            </h2>
            <p className="mt-5 text-[14px] text-white/55 leading-relaxed max-w-2xl">
              We believe the future of work is flexible. Not everyone needs a full-time office, and not every office needs to be empty half the time. The Desk Finder bridges both sides connecting professionals who need space with spaces that need professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-[#F7F5EF]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <div className="eyebrow mb-3">What We Stand For</div>
            <h2 className="font-bold text-3xl lg:text-4xl" style={{ letterSpacing: '-0.04em' }}>Our values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-5 border border-[var(--line)]">
                <div className="w-8 h-8 rounded-lg bg-[#0B0B0B] grid place-items-center mb-4">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <h3 className="font-bold text-[15px] tracking-tight">{v.title}</h3>
                <p className="mt-2 text-[13px] text-[#0B0B0B]/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For space owners */}
      <section className="py-14 bg-[#EDEAE0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="eyebrow mb-3">For Space Owners</div>
              <h2 className="font-bold text-3xl lg:text-4xl leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
                Have empty desks?<br />Let's fill them.
              </h2>
              <p className="mt-4 text-[14px] text-[#0B0B0B]/60 leading-relaxed max-w-md">
                Listing your space on The Desk Finder is completely free. No upfront cost, no monthly fees — just more visibility and direct inquiries for your space.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  'Zero listing cost',
                  'Real-time booking management',
                  'Instant payouts',
                  'Dedicated partner support',
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-[13px] text-[#0B0B0B]/75">
                    <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0" strokeWidth={3} />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact?type=list"
                className="mt-6 inline-flex items-center gap-2 bg-[#0B0B0B] text-white rounded-full px-6 h-11 text-[14px] font-medium hover:bg-[#1f1f1f] transition-colors group"
              >
                List your space
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-[var(--line)]">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '₹0', label: 'To list your space' },
                  { value: '24h', label: 'Onboarding time' },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 bg-[#F7F5EF] rounded-xl">
                    <div className="font-bold text-2xl tracking-tight">{s.value}</div>
                    <div className="text-[11px] text-[#0B0B0B]/50 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#0B0B0B] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="font-bold text-2xl lg:text-3xl" style={{ letterSpacing: '-0.04em' }}>Ready to find your space?</h2>
            <p className="mt-1.5 text-[13px] text-white/55">Tell us what you need and we'll match you within 24 hours.</p>
          </div>
          <Link
            to="/contact?type=find"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#0B0B0B] rounded-full px-6 h-11 text-[13px] font-medium hover:bg-[#EDEAE0] transition-colors"
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
