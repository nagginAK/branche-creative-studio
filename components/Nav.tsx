'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'Studio' },
];

export default function Nav({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-6 border-b border-[#F2EDE4]/10 ${
        transparent ? 'bg-transparent' : 'bg-[#0E0B07]/90 backdrop-blur-sm'
      }`}
    >
      <Link
        href="/"
        className="font-display text-lg text-[#F2EDE4] tracking-tight"
        onClick={() => setOpen(false)}
      >
        BC <em className="text-[#E6C570]">Studio</em>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm text-[#F2EDE4]/60">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors hover:text-[#F2EDE4] ${
              pathname === link.href ? 'text-[#F2EDE4]' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="px-6 py-2.5 text-sm font-medium whitespace-nowrap shrink-0 bg-[#F2EDE4] text-[#0E0B07] hover:bg-[#E6C570] transition-colors"
        >
          Start a Project
        </Link>
      </div>

      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
      >
        <span className={`h-px bg-[#F2EDE4] transition-transform ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
        <span className={`h-px bg-[#F2EDE4] transition-transform ${open ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
      </button>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0E0B07] border-b border-[#F2EDE4]/10 px-8 py-8 flex flex-col gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-[#F2EDE4]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-block self-start px-6 py-3 text-sm font-medium bg-[#F2EDE4] text-[#0E0B07]"
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
}
