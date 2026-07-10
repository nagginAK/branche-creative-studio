import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const PROJECTS = [
  {
    name: 'VENTUS',
    subtitle: 'Landscape & Grounds Services',
    scope: 'Brand identity · Web design & development · Payment integration · Regional market expansion',
    summary:
      'Full digital infrastructure built from the ground up: brand identity, site architecture, and payment systems for a landscape maintenance company operating across South Florida and expanding into Guyana. Stripe-powered deposit collection lets clients book and pay in one flow.',
  },
  {
    name: 'RENEUTRA',
    subtitle: 'Architecture & Construction Management',
    scope: 'Brand identity · Web design & development · Service architecture',
    summary:
      'A design-build practice site built around clarity — service breakdowns, fee structure, and project process. Built to support both US and international project scopes.',
  },
  {
    name: 'MINOTIA',
    subtitle: 'Retail Brand',
    scope: 'Brand identity · Shopify storefront build · Product photography integration',
    summary:
      'Full e-commerce build on Shopify, from brand board through storefront. Product catalog, checkout, and payments live end-to-end.',
  },
  {
    name: 'CAFÉ SOLTAU',
    subtitle: 'Wellness Café',
    scope: 'Brand identity · Menu development · POS & payment integration · Order automation',
    summary:
      'Menu development, brand voice, and a complete Square POS build. Tested end-to-end — order to checkout to confirmation, notifications routed automatically.',
  },
  {
    name: 'SHEREL & SHAWNEL',
    subtitle: 'Apparel',
    scope: 'Shopify storefront build · Payment integration',
    summary:
      'Shopify storefront built on Dawn theme, full product catalog, live payments from day one.',
  },
];

export default function Work() {
  return (
    <main className="min-h-screen bg-[#0E0B07] text-[#F2EDE4]">
      <Nav />

      <section className="px-8 lg:px-16 pt-44 pb-16 border-b border-[#F2EDE4]/10">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-[#CDA850] mb-6">Work</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[1.02] tracking-tight max-w-3xl">
          Selected <em className="text-[#E6C570]">projects</em>.
        </h1>
        <p className="text-[#F2EDE4]/60 text-lg max-w-xl mt-6 leading-relaxed">
          A look at brands built under the BC Studio process — from
          early-stage ventures to growing local businesses.
        </p>
      </section>

      {PROJECTS.map((p, i) => (
        <section
          key={p.name}
          className={`px-8 lg:px-16 py-20 ${i < PROJECTS.length - 1 ? 'border-b border-[#F2EDE4]/10' : ''}`}
        >
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#F2EDE4]/40 mb-4">
              {p.scope}
            </p>
            <h2 className="font-display text-4xl mb-1">{p.name}</h2>
            <p className="text-base text-[#E6C570] mb-5">{p.subtitle}</p>
            <p className="text-[#F2EDE4]/60 text-lg leading-relaxed">{p.summary}</p>
          </div>
        </section>
      ))}

      <section className="px-8 lg:px-16 py-20 border-t border-[#F2EDE4]/10 bg-[#161109]">
        <div className="max-w-2xl">
          <p className="font-display text-2xl leading-snug text-[#F2EDE4]/90">
            What typically takes an agency months, this studio delivers in
            <em className="text-[#E6C570]"> days</em> — full production infrastructure, from
            brand identity through live payment systems.
          </p>
        </div>
      </section>

      <section className="px-8 lg:px-16 py-24 border-t border-[#F2EDE4]/10">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl mb-6">Want to be the next one here?</h2>
          <Link
            href="/contact"
            className="inline-block bg-[#F2EDE4] text-[#0E0B07] px-8 py-4 font-medium text-sm hover:bg-[#E6C570] transition-colors"
          >
            Start a project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
