import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SPACES_DROPDOWN = [
  { label: 'Desks', href: '/desks' },
  { label: 'Cabins', href: '/desks' },
  { label: 'Meeting Rooms', href: '/meeting-rooms' },
  { label: 'Virtual Office', href: '/meeting-rooms' },
  { label: 'Managed Offices', href: '/managed-offices' },
];

const NAV = [
  { label: 'Spaces', href: null, dropdown: SPACES_DROPDOWN },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setDropdownOpen(false); }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (href) => href && location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#F7F5EF]/90 backdrop-blur-xl border-b border-[var(--line)]' : 'bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src="/logo.png" alt="The Desk Finder" className="h-7 w-auto object-contain" />
        </Link>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) =>
            n.dropdown ? (
              <div key={n.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-[14px] text-[#0B0B0B]/65 hover:text-[#0B0B0B] transition-colors"
                >
                  {n.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-[var(--line)] rounded-xl shadow-lg overflow-hidden z-50">
                    {n.dropdown.map((d) => (
                      <Link
                        key={d.label}
                        to={d.href}
                        className="block px-4 py-2.5 text-[13px] text-[#0B0B0B]/70 hover:bg-[#F7F5EF] hover:text-[#0B0B0B] transition-colors"
                      >
                        {d.label}
                      </Link>
                    ))}
                    <div className="border-t border-[var(--line)]">
                      <Link
                        to="/contact"
                        className="block px-4 py-2.5 text-[13px] font-medium text-[#0B0B0B] hover:bg-[#F7F5EF] transition-colors"
                      >
                        List Your Space →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={n.label}
                to={n.href}
                className={`text-[14px] transition-colors relative group ${
                  isActive(n.href) ? 'text-[#0B0B0B] font-medium' : 'text-[#0B0B0B]/65 hover:text-[#0B0B0B]'
                }`}
              >
                {n.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-[#0B0B0B] transition-all duration-300 ${
                  isActive(n.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            )
          )}
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
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#0B0B0B] text-white hover:bg-[#1f1f1f] rounded-full px-5 h-10 text-[13px] font-medium transition-colors"
          >
            Find a Space
          </Link>
        </div>

        <button className="lg:hidden p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[var(--line)] bg-[#F7F5EF]">
          <div className="px-6 py-5 flex flex-col gap-1">
            <div className="py-2 text-[13px] font-medium text-[#0B0B0B]/40 uppercase tracking-wider">Spaces</div>
            {SPACES_DROPDOWN.map((d) => (
              <Link key={d.label} to={d.href} className="py-2 text-[15px] text-[#0B0B0B]/70 pl-3">
                {d.label}
              </Link>
            ))}
            <Link to="/contact" className="py-2 text-[15px] text-[#0B0B0B] font-medium pl-3 border-b border-[var(--line)]">
              List Your Space
            </Link>
            <Link to="/about" className={`py-2.5 text-[15px] border-b border-[var(--line)] ${isActive('/about') ? 'font-medium' : 'text-[#0B0B0B]/70'}`}>
              About
            </Link>
            <Link to="/contact" className={`py-2.5 text-[15px] ${isActive('/contact') ? 'font-medium' : 'text-[#0B0B0B]/70'}`}>
              Contact
            </Link>
            <Link to="/contact" className="mt-3 bg-[#0B0B0B] text-white rounded-full h-11 text-[14px] font-medium flex items-center justify-center">
              Find a Space
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
