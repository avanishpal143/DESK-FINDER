import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const LINKS = [
  {
    title: 'Spaces',
    items: [
      { label: 'Desks', to: '/desks' },
      { label: 'Cabins', to: '/desks' },
      { label: 'Meeting Rooms', to: '/meeting-rooms' },
      { label: 'Virtual Office', to: '/meeting-rooms' },
      { label: 'Managed Offices', to: '/managed-offices' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Story', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'List Your Space', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Blog', to: '/contact' },
      { label: 'City Guides', to: '/desks' },
      { label: 'FAQ', to: '/#faq' },
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
    <footer className="bg-[#F7F5EF] text-[#0B0B0B]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Main footer row */}
        <div className="grid lg:grid-cols-12 gap-8 py-10 border-b border-[var(--line)]">

          {/* Brand col */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="The Desk Finder" className="h-7 w-auto object-contain" />
            </Link>

            <p className="mt-4 text-[13px] text-[#0B0B0B]/55 leading-relaxed max-w-[220px]">
              Where work finds space. India's first coworking pass network.
            </p>

            <a href="mailto:hello@thedeskfinder.in" className="mt-4 inline-flex items-center gap-1.5 group">
              <span className="text-[13px] text-[#0B0B0B]/55 group-hover:text-[#0B0B0B] transition-colors">
                hello@thedeskfinder.in
              </span>
              <ArrowUpRight className="w-3 h-3 text-[#0B0B0B]/30 group-hover:text-[#0B0B0B] transition-colors" />
            </a>

            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-[var(--line)] grid place-items-center hover:bg-[#0B0B0B] hover:text-white hover:border-[#0B0B0B] transition-colors text-[11px] font-bold text-[#0B0B0B]/60"
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
                <div className="eyebrow text-[#0B0B0B]/40 mb-3">{l.title}</div>
                <ul className="space-y-2">
                  {l.items.map((item) => (
                    <li key={item.label}>
                      <Link to={item.to} className="text-[13px] text-[#0B0B0B]/60 hover:text-[#0B0B0B] transition-colors">
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
          <p className="text-[11px] text-[#0B0B0B]/40">
            © {new Date().getFullYear()} The Desk Finder. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-[#0B0B0B]/40">
            <Link to="/contact" className="hover:text-[#0B0B0B] transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-[#0B0B0B] transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
