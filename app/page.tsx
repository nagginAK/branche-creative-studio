import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HomeContactForm from '@/components/HomeContactForm';

const STRIP = ['Identity', 'Screen Print', 'Packaging', 'Retail Media', 'Motion', 'Digital Ordering'];

const SERVICES = [
  { n: '01', name: 'Brand Identity', body: 'Marks, logotypes, type and color systems, and the brand guide that holds it all together.' },
  { n: '02', name: 'Print & Screen Print', body: 'Art built for the press — separations, spot color, apparel and merch that prints right the first time.' },
  { n: '03', name: 'Retail & In-Store Media', body: 'Signage, shelf talkers, menu boards and promo displays designed by someone who has worked the sales floor.', lime: true },
  { n: '04', name: 'Packaging & Labels', body: "Bags, boxes, labels and hang tags that stand out at arm's length and hold up in handling." },
  { n: '05', name: 'Motion & Video', body: 'Logo animation, social cuts and in-store screen loops that keep the brand moving.' },
  { n: '06', name: 'Kiosk & Digital Ordering', body: 'Self-order screens and digital menus, designed and built with smart tools in the process from day one.' },
];

const WORK = [
  { name: 'Ventus', tag: 'Identity · Web · Payments', big: true },
  { name: 'Café Soltau', tag: 'Identity · Menu · POS' },
  { name: 'Sherel & Shawnel', tag: 'Apparel · Storefront' },
  { name: 'Reneutra', tag: 'Identity · Web' },
  { name: 'Minotia', tag: 'Identity · Storefront' },
];

const STEPS = [
  { n: '1', name: 'Discover', body: 'A working session on your business, your customer and where the brand shows up.' },
  { n: '2', name: 'Brief', body: 'A written creative brief, scope and quote you sign off before design starts.' },
  { n: '3', name: 'Design', body: 'Concepts, one direction chosen, then refined with set rounds of revision.' },
  { n: '4', name: 'Deliver', body: 'Print-ready files, brand guide and production handled through to the finished piece.', lime: true },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2F0EA] text-[#111111]">
      <Nav />

      {/* HERO */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-10 pt-40 pb-[72px]">
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 text-[13px] font-semibold tracking-[0.12em] uppercase mb-10">
          <span>Branche Creative Studio</span>
          <span>Brand · Print · Retail · Motion</span>
          <span>South Florida — Caribbean</span>
        </div>
        <h1 className="font-display text-[clamp(64px,11vw,168px)] leading-[0.88] tracking-[-0.045em]">
          Built to<br />be seen.<br /><em>Made to last.</em>
        </h1>
        <div className="flex flex-wrap gap-10 items-end justify-between mt-14">
          <p className="max-w-[560px] text-xl md:text-[22px] leading-[1.45]">
            BC Studio is a principal-led design studio. We build brand identities, print,
            packaging and in-store media for businesses that need to look as serious as they
            are — from the first sketch to the finished piece on the shelf.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#contact" className="bg-[#111111] text-[#C9F03A] px-7 py-[18px] font-bold hover:bg-[#333] transition-colors">
              Book a discovery call →
            </a>
            <Link href="/work" className="border-2 border-[#111111] px-[26px] py-4 font-semibold hover:bg-[#111111] hover:text-[#F2F0EA] transition-colors">
              See the work
            </Link>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="bg-[#111111] text-[#F2F0EA]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-[22px] grid grid-cols-2 gap-x-6 gap-y-3 md:flex md:flex-wrap md:gap-x-10 font-extrabold text-base md:text-[22px] tracking-tight uppercase">
          {STRIP.map((s, i) => (
            <span key={s} className="flex items-center gap-10">
              {i > 0 && <span aria-hidden="true" className="hidden md:inline text-[#C9F03A]">✕</span>}
              <span className="flex items-center gap-2.5">
                <span aria-hidden="true" className="md:hidden inline-block w-2 h-2 bg-[#C9F03A]" />
                {s}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="max-w-[1320px] mx-auto px-6 md:px-10 py-[104px]">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <h2 className="font-display text-5xl md:text-[64px] leading-[0.95]">What we make</h2>
          <div className="max-w-[420px]">
            <p className="text-[17px] leading-relaxed text-[#3A3A3A]">
              Six disciplines under one roof, so your brand reads the same on a business card,
              a storefront and a screen.
            </p>
            <Link href="/services" className="inline-block mt-3 font-semibold border-b-2 border-[#111111] pb-0.5">
              Packages &amp; pricing →
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] border-t-2 border-l-2 border-[#111111]">
          {SERVICES.map((s) => (
            <div key={s.n} className={`px-8 pt-9 pb-10 border-r-2 border-b-2 border-[#111111] ${s.lime ? 'bg-[#C9F03A]' : ''}`}>
              <div className="text-[13px] font-bold tracking-[0.12em]">{s.n}</div>
              <h3 className="mt-7 mb-3 text-[28px] font-extrabold tracking-tight">{s.name}</h3>
              <p className={`text-base leading-relaxed ${s.lime ? 'text-[#111111]' : 'text-[#3A3A3A]'}`}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="bg-[#111111] text-[#F2F0EA]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-[104px]">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
            <h2 className="font-display text-5xl md:text-[64px] leading-[0.95]">
              Selected <em className="text-[#C9F03A]">work</em>
            </h2>
            <Link href="/work" className="font-semibold border-b-2 border-[#C9F03A] pb-1 hover:text-[#C9F03A] transition-colors">
              All case studies →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {WORK.map((w) => (
              <Link key={w.name} href="/work" className={`group min-w-0 ${w.big ? 'md:col-span-2' : ''}`}>
                <div
                  className={`${w.big ? 'h-[240px] md:h-[460px]' : 'h-[200px] md:h-[360px]'} border-2 border-[#3A3A38] group-hover:border-[#C9F03A] transition-colors flex items-end p-8 bg-[#1C1C1A]`}
                >
                  <span className="font-display text-[clamp(40px,5vw,72px)] leading-[0.9] group-hover:text-[#C9F03A] transition-colors">
                    {w.name}
                  </span>
                </div>
                <div className="flex justify-between gap-4 mt-[18px]">
                  <span className="font-bold text-xl">{w.name}</span>
                  <span className="text-[#A3A39C] text-[15px] text-right">{w.tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="max-w-[1320px] mx-auto px-6 md:px-10 py-[104px]">
        <h2 className="font-display text-5xl md:text-[64px] leading-[0.95] mb-12">How a project runs</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t-2 border-[#111111]">
          {STEPS.map((s) => (
            <div key={s.n} className="pt-7 pr-7 pb-4">
              <div className={`font-display text-[56px] inline-block ${s.lime ? 'bg-[#C9F03A] px-2.5' : ''}`}>{s.n}</div>
              <h3 className="mt-3 mb-2.5 text-[22px] font-extrabold">{s.name}</h3>
              <p className="text-base leading-relaxed text-[#3A3A3A]">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="border-y-2 border-[#111111]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-24 flex flex-wrap gap-14 items-center">
          <div className="flex-1 basis-[380px] h-[240px] md:h-[440px] bg-[#111111] flex items-center justify-center">
            <span className="font-display text-[96px] md:text-[160px] text-[#C9F03A] leading-none">BC</span>
          </div>
          <div className="flex-[1.3] basis-[480px]">
            <div className="text-[13px] font-bold tracking-[0.12em] uppercase mb-5">The Studio</div>
            <p className="font-serif-accent !not-italic text-3xl md:text-[34px] leading-[1.3]">
              &ldquo;I came up through the screen-print shop and the sales floor. I design for the
              press, the shelf and the customer walking past it.&rdquo;
            </p>
            <div className="mt-7 font-bold text-[17px]">Rene Branche</div>
            <div className="text-[#3A3A3A] text-[15px] mt-1">Principal, BC Studio</div>
            <Link href="/about" className="inline-block mt-6 font-semibold border-b-2 border-[#111111] pb-0.5">
              More about the studio →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#C9F03A]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-[104px] flex flex-wrap gap-14 justify-between">
          <div className="flex-1 basis-[420px]">
            <h2 className="font-display text-[clamp(56px,7vw,96px)] leading-[0.9] tracking-[-0.045em]">
              Let&apos;s make<br />it real.
            </h2>
            <p className="mt-7 max-w-[440px] text-lg leading-normal">
              Tell us what you&apos;re building. We reply within one business day with next steps
              and a time to talk.
            </p>
            <div className="mt-8 text-base leading-[1.9] font-semibold flex flex-col">
              <a href="mailto:rene@branchecreative.co" className="hover:underline">rene@branchecreative.co</a>
              <a href="tel:+18888988213" className="hover:underline">(888) 898-8213</a>
              <a
                href="https://www.facebook.com/profile.php?id=61596991886623"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook →
              </a>
              <span>South Florida</span>
            </div>
            <div className="mt-10 pt-6 border-t-2 border-[#111111] max-w-[440px]">
              <p className="text-[15px] mb-4">Ready to commit? Secure your spot with a deposit.</p>
              <a
                href="https://buy.stripe.com/eVq28k7JA5Hy13cfDZbZe01"
                className="inline-block border-2 border-[#111111] px-6 py-4 font-bold hover:bg-[#111111] hover:text-[#C9F03A] transition-colors"
              >
                Start your project — $1,500 deposit
              </a>
            </div>
          </div>
          <HomeContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
