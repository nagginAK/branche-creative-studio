import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-8 py-12 border-t border-black/10 text-[#0a0a0a]/40 text-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span>© {new Date().getFullYear()} BC Studio</span>
          <span>A Timewalker Inc. vertical</span>
        </div>

        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-[#0a0a0a]/70 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#0a0a0a]/70 transition-colors">
            Terms of Service
          </Link>
        </div>

        <div className="flex gap-5">
          <a href="#" aria-label="Instagram" className="hover:text-[#0a0a0a]/70 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#0a0a0a]/70 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6.5 9h0M6.5 9v9M6.5 6.5v0M11 18v-5.5a2.5 2.5 0 0 1 5 0V18M11 12.5V18" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
