import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What is The Desk Finder?',
    a: 'The Desk Finder is India\'s first coworking pass network. With a single membership, you get access to hot desks, dedicated seats, cabins, and meeting rooms across 100+ partner spaces in 10+ cities no separate bookings, no multiple apps.',
  },
  {
    q: 'How does the pass work?',
    a: 'Choose a pass (Day, Flex, or Unlimited), pay once, and use it at any partner space. Show your digital pass at the front desk or scan the QR code. It\'s that simple.',
  },
  {
    q: 'Can I use the pass at any space?',
    a: 'Yes. Your pass works at all partner spaces in our network. The Flex Pass gives you 10 days/month at any space, and the Unlimited Pass gives you unrestricted access everywhere.',
  },
  {
    q: 'What\'s the difference between a Hot Desk, Dedicated Desk, and Cabin?',
    a: 'A Hot Desk is a shared, non-reserved seat sit anywhere available each day. A Dedicated Desk is your own fixed seat reserved just for you. A Cabin is a private enclosed office for 1–4 people with full privacy and a lock.',
  },
  {
    q: 'Is there a minimum commitment?',
    a: 'No. Day passes have zero commitment. Monthly plans (Flex and Unlimited) can be cancelled anytime with 30 days notice. No lock-in, no penalties.',
  },
  {
    q: 'How do I list my space on The Desk Finder?',
    a: 'Listing is completely free. Fill out the form on our Contact page or click "List your space" in the navbar. We\'ll review your space and get back to you within 2–4 hours. You only pay a small commission on confirmed bookings.',
  },
  {
    q: 'Are meeting rooms included in the pass?',
    a: 'Meeting room credits are included in the Flex Pass (2 hrs/month) and Unlimited Pass (5 hrs/month). Additional hours can be booked separately at discounted rates.',
  },
  {
    q: 'What cities are you available in?',
    a: 'We currently operate in Delhi, Mumbai, Bangalore, Pune, Hyderabad, Chennai, Noida, Gurgaon, Kolkata, and Ahmedabad with more cities coming soon.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-14 lg:py-16 bg-[#F7F5EF]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">

          {/* Left label */}
          <div className="lg:col-span-4">
            <div className="eyebrow mb-3">FAQ</div>
            <h2 className="font-bold text-3xl lg:text-4xl leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
              Frequently asked questions
            </h2>
            <p className="mt-3 text-[13px] text-[#0B0B0B]/55 leading-relaxed max-w-xs">
              Can't find what you're looking for? Reach out to us directly.
            </p>
            <a
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 bg-[#0B0B0B] text-white rounded-full px-5 h-10 text-[13px] font-medium hover:bg-[#1f1f1f] transition-colors"
            >
              Contact us
            </a>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {FAQS.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-4 text-left hover:text-[#0B0B0B]/80 transition-colors"
                  >
                    <span className="font-medium text-[14px] leading-snug">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-[#0B0B0B]/40 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {open === i && (
                    <div className="pb-4 text-[13px] text-[#0B0B0B]/65 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
