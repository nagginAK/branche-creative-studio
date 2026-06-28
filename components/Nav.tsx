'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 border-b ${
        transparent ? 'bg-transparent border-[#d4cfc8]' : 'bg-[#F2EDE4] border-black/10'
      }`}
    >
      <Link
        href="/"
        className={`text-sm font-medium tracking-[0.2em] uppercase ${
          transparent ? 'text-white' : 'text-[#0a0a0a]'
        }`}
      >
        BC Studio
      </Link>
      <div className={`flex items-center gap-8 text-sm ${transparent ? 'text-white/70' : 'text-[#0a0a0a]/70'}`}>
        {LINKS.slice(0, 3).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors ${
              pathname === link.href
                ? transparent ? 'text-white' : 'text-[#0a0a0a]'
                : transparent ? 'hover:text-white' : 'hover:text-[#0a0a0a]'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className={`px-6 py-2.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors ${
            transparent
              ? 'bg-white text-black hover:bg-white/90'
              : 'bg-[#0a0a0a] text-[#F2EDE4] hover:bg-[#0a0a0a]/90'
          }`}
        >
          Start a Project
        </Link>
      </div>
    </nav>
  );
}
