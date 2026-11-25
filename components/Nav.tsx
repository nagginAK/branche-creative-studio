'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
];

// `transparent` is kept so existing pages still compile; the bar is always solid now.
export default function Nav({ transparent = false }: { transparent?: boolean }) {
  void transparent;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F2F0EA] border-b-2 border-[#111111]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="inline-flex items-center justify-center w-11 h-11 bg-[#111111] text-[#C9F03A] font-black text-[17px] tracking-tight">
            BC
          </span>
          <span className="font-extrabold text-lg tracking-tight">BC Studio<sup className="text-[0.5em] font-semibold ml-0.5 align-super">™</sup></span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#555] transition-colors ${
                pathname === link.href ? 'underline decoration-2 decoration-[#C9F03A] underline-offset-[6px]' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-3 font-semibold whitespace-nowrap bg-[#111111] text-[#F2F0EA] hover:bg-[#333] transition-colors"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-11 h-11 items-center"
        >
          <span className={`block w-7 h-0.5 bg-[#111111] transition-transform ${open ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`block w-7 h-0.5 bg-[#111111] transition-transform ${open ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-[#111111] bg-[#F2F0EA] px-6 py-8 flex flex-col gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="self-start px-6 py-4 font-semibold bg-[#111111] text-[#C9F03A]"
          >
            Start a project →
          </Link>
        </div>
      )}
    </nav>
  );
}
