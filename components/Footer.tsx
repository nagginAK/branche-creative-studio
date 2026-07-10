import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#F2EDE4]/10">
      <div className="px-8 lg:px-16 py-20 flex flex-col md:flex-row items-start justify-between gap-10 relative overflow-hidden">
        <span
          aria-hidden="true"
          className="font-display absolute -right-6 -bottom-24 text-[16rem] leading-none text-[#F2EDE4]/[0.04] select-none pointer-events-none"
        >
          B
        </span>

        <div className="max-w-sm">
          <p className="font-display text-3xl leading-snug mb-6">
            Brand identity for businesses that <em className="text-[#E6C570]">mean business</em>.
          </p>
          <a
            href="mailto:rene@branchecreative.co"
            className="text-sm text-[#F2EDE4]/60 hover:text-[#E6C570] transition-colors"
          >
            rene@branchecreative.co
          </a>
          <br />
          <a
            href="tel:+18888988213"
            className="text-sm text-[#F2EDE4]/60 hover:text-[#E6C570] transition-colors"
          >
            (888) 898-8213
          </a>
        </div>

        <div className="flex flex-col gap-3 text-sm text-[#F2EDE4]/50">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#F2EDE4]/30 mb-1">Site</span>
          <Link href="/work" className="hover:text-[#F2EDE4] transition-colors">Work</Link>
          <Link href="/services" className="hover:text-[#F2EDE4] transition-colors">Services</Link>
          <Link href="/about" className="hover:text-[#F2EDE4] transition-colors">Studio</Link>
          <Link href="/contact" className="hover:text-[#F2EDE4] transition-colors">Contact</Link>
        </div>

        <div className="flex flex-col gap-3 text-sm text-[#F2EDE4]/50">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#F2EDE4]/30 mb-1">Legal</span>
          <Link href="/privacy" className="hover:text-[#F2EDE4] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#F2EDE4] transition-colors">Terms of Service</Link>
        </div>
      </div>

      <div className="px-8 lg:px-16 py-6 border-t border-[#F2EDE4]/10 flex flex-col md:flex-row justify-between gap-2 text-[13px] text-[#F2EDE4]/30">
        <span>© {new Date().getFullYear()} BC Studio — a Timewalker Inc. vertical</span>
        <span>South Florida</span>
      </div>
    </footer>
  );
}
