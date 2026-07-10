import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0E0B07] text-[#F2EDE4]">
      <Nav transparent />

      <section className="relative w-full h-[92vh] overflow-hidden bg-[#0E0B07]">
        <img
          src="/bc-studio-hero-bg.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0E0B07] to-transparent" />
        <div className="absolute inset-0 flex items-center px-8 lg:px-16">
          <h1 className="font-display text-6xl md:text-8xl leading-[1.02] tracking-tight max-w-4xl">
            Brands that people <em className="text-[#E6C570]">root for</em>.
          </h1>
        </div>
        <p className="absolute bottom-12 left-8 lg:left-16 text-sm text-[#F2EDE4]/50 max-w-xs leading-relaxed">
          Brand identity and design for businesses that mean business.
        </p>
      </section>

      <section className="px-8 lg:px-16 py-24 border-t border-[#F2EDE4]/10">
        <p className="font-display text-2xl md:text-3xl leading-snug max-w-3xl">
          BC Studio is a <em className="text-[#E6C570]">principal-led</em> brand identity firm.
          Every project is led directly by the founder — no account managers, no junior
          hand-offs, just focused work on brands worth building.
        </p>
      </section>

      <section id="services" className="px-8 lg:px-16 py-28 border-t border-[#F2EDE4]/10">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-display text-5xl">Services</h2>
          <Link href="/services" className="text-sm text-[#F2EDE4]/50 hover:text-[#E6C570] transition-colors">
            Full pricing &amp; details →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F2EDE4]/10">
          {[
            {
              name: 'Brand Starter',
              body: 'A focused identity package for early-stage brands: logo, color, type, and the essentials to launch with confidence.',
              price: '$1,500 – $3,000',
            },
            {
              name: 'Brand Identity',
              body: 'A complete visual identity system — logo suite, brand guidelines, and applications across every key touchpoint.',
              price: '$3,000 – $6,000',
            },
            {
              name: 'Brand + Web',
              body: 'Full identity plus a custom website built to match — strategy, design, and development under one roof.',
              price: '$6,000 – $12,000',
            },
            {
              name: 'Retainer',
              body: 'Ongoing design support for brands that need a steady hand — campaigns, refreshes, and new collateral as you grow.',
              price: '$1,000 – $2,500/mo',
            },
          ].map((s) => (
            <div key={s.name} className="bg-[#0E0B07] p-10 flex flex-col gap-4 group hover:bg-[#161109] transition-colors">
              <h3 className="font-display text-2xl">{s.name}</h3>
              <p className="text-[#F2EDE4]/50 text-sm leading-relaxed flex-1">{s.body}</p>
              <span className="text-lg text-[#E6C570]">{s.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="studio" className="px-8 lg:px-16 py-28 border-t border-[#F2EDE4]/10">
        <div className="max-w-3xl">
          <h2 className="font-display text-5xl leading-tight mb-8">
            Small studio. <em className="text-[#E6C570]">Strong</em> point of view.
          </h2>
          <p className="text-[#F2EDE4]/60 text-lg leading-relaxed mb-6">
            BC Studio is a Timewalker Inc. vertical, built around principal-led work.
            There&apos;s no layer between you and the person doing the thinking and the
            designing — just direct collaboration, clear opinions, and brand work that holds up.
          </p>
          <Link href="/about" className="text-sm font-medium text-[#F2EDE4] border-b border-[#CDA850]/50 pb-1 hover:border-[#E6C570] hover:text-[#E6C570] transition-colors">
            More about the studio →
          </Link>
        </div>
      </section>

      <section className="px-8 lg:px-16 py-28 border-t border-[#F2EDE4]/10">
        <div className="max-w-3xl">
          <h2 className="font-display text-5xl leading-tight mb-8">Selected work</h2>
          <p className="text-[#F2EDE4]/60 text-lg leading-relaxed mb-6">
            From early-stage startups to established local businesses, every project gets
            the same close attention — strategy first, design second, execution that holds
            up everywhere it&apos;s seen.
          </p>
          <Link href="/work" className="text-sm font-medium text-[#F2EDE4] border-b border-[#CDA850]/50 pb-1 hover:border-[#E6C570] hover:text-[#E6C570] transition-colors">
            See the work →
          </Link>
        </div>
      </section>

      <section id="contact" className="px-8 lg:px-16 py-28 border-t border-[#F2EDE4]/10">
        <div className="max-w-2xl">
          <h2 className="font-display text-5xl leading-tight mb-10">
            Ready to build something <em className="text-[#E6C570]">serious</em>?
          </h2>
          <div className="flex flex-col gap-6">
            <a
              href="mailto:rene@branchecreative.co"
              className="inline-block bg-[#F2EDE4] text-[#0E0B07] px-8 py-4 font-medium text-sm hover:bg-[#E6C570] transition-colors self-start"
            >
              rene@branchecreative.co
            </a>
            <div className="border-t border-[#F2EDE4]/10 pt-6">
              <p className="text-[#F2EDE4]/40 text-sm mb-4">Ready to commit? Secure your project with a deposit.</p>
              <a
                href="https://buy.stripe.com/eVq28k7JA5Hy13cfDZbZe01"
                className="inline-block border border-[#CDA850] text-[#E6C570] px-8 py-4 font-medium text-sm hover:bg-[#CDA850] hover:text-[#0E0B07] transition-colors"
              >
                Start Your Project — $1,500 Deposit
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
