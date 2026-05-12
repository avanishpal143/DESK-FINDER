import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NAV = [
  { label: 'Passes', href: '/#passes' },
  { label: 'Desks', href: '/desks' },
  { label: 'Managed Offices', href: '/managed-offices' },
  { label: 'Meeting Rooms', href: '/meeting-rooms' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#F7F5EF]/90 backdrop-blur-xl border-b border-[var(--line)]' : 'bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="The Desk Finder"
            className="h-7 w-auto object-contain"
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.href}
              className={`text-[14px] transition-colors relative group ${
                isActive(n.href)
                  ? 'text-[#0B0B0B] font-medium'
                  : 'text-[#0B0B0B]/65 hover:text-[#0B0B0B]'
              }`}
            >
              {n.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-[#0B0B0B] transition-all duration-300 ${
                isActive(n.href) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="text-[13px] text-[#0B0B0B]/60 hover:text-[#0B0B0B] transition-colors"
          >
            List your space
          </Link>
          <Link
            to="/#passes"
            className="group inline-flex items-center gap-2 bg-[#0B0B0B] text-white hover:bg-[#1f1f1f] rounded-full px-5 h-10 text-[13px] font-medium transition-colors"
          >
            Get Your Pass
            <span className="w-5 h-5 rounded-full bg-white text-[#0B0B0B] grid place-items-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[var(--line)] bg-[#F7F5EF]">
          <div className="px-6 py-5 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.href}
                className={`py-2.5 text-[15px] border-b border-[var(--line)] last:border-0 ${
                  isActive(n.href) ? 'font-medium text-[#0B0B0B]' : 'text-[#0B0B0B]/70'
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/#passes"
              className="mt-3 bg-[#0B0B0B] text-white rounded-full h-11 text-[14px] font-medium flex items-center justify-center"
            >
              Get Your Pass
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
