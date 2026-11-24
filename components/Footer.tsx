import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F2F0EA]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="flex flex-col gap-2 text-[15px]">
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#BDBDB5] mb-2">Contact</span>
            <a href="mailto:rene@branchecreative.co" className="text-[#F2F0EA] hover:text-[#C9F03A] transition-colors">
              rene@branchecreative.co
            </a>
            <a href="tel:+18888988213" className="text-[#F2F0EA] hover:text-[#C9F03A] transition-colors">
              (888) 898-8213
            </a>
            <span className="text-[#BDBDB5]">South Florida</span>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-10 text-[15px]">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#BDBDB5] mb-2">Site</span>
              <Link href="/services" className="text-[#F2F0EA] hover:text-[#C9F03A] transition-colors">Services</Link>
              <Link href="/work" className="text-[#F2F0EA] hover:text-[#C9F03A] transition-colors">Work</Link>
              <Link href="/about" className="text-[#F2F0EA] hover:text-[#C9F03A] transition-colors">Studio</Link>
              <Link href="/contact" className="text-[#F2F0EA] hover:text-[#C9F03A] transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#BDBDB5] mb-2">Follow</span>
              <a
                href="https://www.facebook.com/profile.php?id=61596991886623"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F2F0EA] hover:text-[#C9F03A] transition-colors"
              >
                Facebook
              </a>
              {/* Instagram goes here once @bcstudiofl is live */}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#BDBDB5] mb-2">Legal</span>
              <Link href="/privacy" className="text-[#F2F0EA] hover:text-[#C9F03A] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[#F2F0EA] hover:text-[#C9F03A] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="font-display text-[clamp(72px,14vw,200px)] leading-[0.85] tracking-[-0.06em]">
          BC Studio
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-3 mt-9 pt-6 border-t border-[#3A3A38] text-sm text-[#BDBDB5]">
          <span>© {new Date().getFullYear()} Branche Creative Studio — a Timewalker Inc. company</span>
          <span>Built to be seen. Made to last.</span>
        </div>
      </div>
    </footer>
  );
}
