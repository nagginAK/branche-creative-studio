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
    <main className="min-h-screen bg-[#F2EDE4] text-[#0a0a0a]">
      <Nav />

      <section className="px-8 pt-44 pb-16 border-b border-black/10">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0a0a0a]/40 mb-6">Work</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight max-w-3xl">
          Selected projects.
        </h1>
        <p className="text-[#0a0a0a]/60 text-lg max-w-xl mt-6 leading-relaxed">
          A look at brands built under the BC Studio process — from
          early-stage ventures to growing local businesses.
        </p>
      </section>

      {PROJECTS.map((p, i) => (
        <section
          key={p.name}
          className={`px-8 py-20 ${i < PROJECTS.length - 1 ? 'border-b border-black/10' : ''}`}
        >
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0a0a0a]/40 mb-4">
              {p.scope}
            </p>
            <h2 className="text-3xl font-bold mb-1">{p.name}</h2>
            <p className="text-base font-medium text-[#0a0a0a]/50 mb-5">{p.subtitle}</p>
            <p className="text-[#0a0a0a]/60 text-lg leading-relaxed">{p.summary}</p>
          </div>
        </section>
      ))}

      <section className="px-8 py-20 border-t border-black/10 bg-[#0a0a0a] text-[#F2EDE4]">
        <div className="max-w-2xl">
          <p className="text-lg leading-relaxed text-[#F2EDE4]/80">
            What typically takes an agency months, this studio delivers in days — full production
            infrastructure, from brand identity through live payment systems, using a modern
            AI-orchestrated development stack.
          </p>
        </div>
      </section>

      <section className="px-8 py-24 border-t border-black/10">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-6">Want to be the next one here?</h2>
          <Link
            href="/contact"
            className="inline-block bg-[#0a0a0a] text-[#F2EDE4] px-8 py-4 font-medium text-sm hover:bg-[#0a0a0a]/90 transition-colors"
          >
            Start a project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
