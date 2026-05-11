import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const LINKS = [
  {
    title: 'Product',
    items: [
      { label: 'Day Pass', to: '/#passes' },
      { label: 'Flex Pass', to: '/#passes' },
      { label: 'Unlimited', to: '/#passes' },
      { label: 'Meeting Rooms', to: '/meeting-rooms' },
      { label: 'Virtual Office', to: '/meeting-rooms' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', to: '/contact' },
      { label: 'Careers', to: '/contact' },
      { label: 'Press', to: '/contact' },
      { label: 'Partners', to: '/contact' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Blog', to: '/contact' },
      { label: 'Help Center', to: '/contact' },
      { label: 'City Guides', to: '/desks' },
      { label: 'Community', to: '/#community' },
      { label: 'API', to: '/contact' },
    ],
  },
];

const SOCIALS = [
  { label: 'X', href: 'https://twitter.com' },
  { label: 'in', href: 'https://linkedin.com' },
  { label: 'IG', href: 'https://instagram.com' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Main footer row */}
        <div className="grid lg:grid-cols-12 gap-8 py-10 border-b border-white/[0.08]">

          {/* Brand col */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white grid place-items-center">
                <div className="w-3.5 h-3.5 bg-[#0B0B0B] rounded-sm" />
              </div>
              <span className="font-bold text-[17px]" style={{ letterSpacing: '-0.04em' }}>The Desk Finder</span>
            </Link>

            <p className="mt-4 text-[13px] text-white/50 leading-relaxed max-w-[240px]">
              India's first coworking pass network. One pass, every desk, done.
            </p>

            <a href="mailto:hello@thedeskfinder.in" className="mt-4 inline-flex items-center gap-1.5 group">
              <span className="text-[13px] text-white/50 group-hover:text-white transition-colors">
                hello@thedeskfinder.in
              </span>
              <ArrowUpRight className="w-3 h-3 text-white/30 group-hover:text-white transition-colors" />
            </a>

            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-white/15 grid place-items-center hover:bg-white hover:text-[#0B0B0B] hover:border-white transition-colors text-[11px] font-bold text-white/60"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links cols */}
          <div className="lg:col-span-8 grid grid-cols-3 gap-6">
            {LINKS.map((l) => (
              <div key={l.title}>
                <div className="eyebrow text-white/35 mb-3">{l.title}</div>
                <ul className="space-y-2">
                  {l.items.map((item) => (
                    <li key={item.label}>
                      <Link to={item.to} className="text-[13px] text-white/55 hover:text-white transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/35">
            © {new Date().getFullYear()} The Desk Finder. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-white/35">
            <Link to="/contact" className="hover:text-white/70 transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-white/70 transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-white/70 transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
