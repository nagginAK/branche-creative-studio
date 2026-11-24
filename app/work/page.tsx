import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const PROJECTS = [
  {
    name: 'VENTUS',
    subtitle: 'Landscape & Grounds Services',
    scope: 'Brand identity · Web design & development · Payment integration · Regional market expansion',
    summary:
      'Full digital infrastructure built from the ground up: brand identity, site structure, and payment systems for a landscape maintenance company operating across South Florida and expanding into Guyana. Stripe-powered deposit collection lets clients book and pay in one flow.',
  },
  {
    name: 'RENEUTRA',
    subtitle: 'Design-Build & Construction Management',
    scope: 'Brand identity · Web design & development · Service structure',
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
    <main className="min-h-screen bg-[#F2F0EA] text-[#111111]">
      <Nav />

      <section className="px-6 md:px-10 lg:px-16 pt-44 pb-16 border-b-2 border-[#111111]">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-[#111111] mb-6">Work</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[1.02] tracking-tight max-w-3xl">
          Selected <em className="text-[#111111]">projects</em>.
        </h1>
        <p className="text-[#111111]/75 text-lg max-w-xl mt-6 leading-relaxed">
          A look at brands built under the BC Studio process — from
          early-stage ventures to growing local businesses.
        </p>
      </section>

      {PROJECTS.map((p, i) => (
        <section
          key={p.name}
          className={`px-6 md:px-10 lg:px-16 py-20 ${i < PROJECTS.length - 1 ? 'border-b-2 border-[#111111]' : ''}`}
        >
          <div className="max-w-3xl">
            <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#111111]/70 mb-4">
              {p.scope}
            </p>
            <h2 className="font-display text-4xl mb-1">{p.name}</h2>
            <p className="text-base text-[#111111] mb-5">{p.subtitle}</p>
            <p className="text-[#111111]/75 text-lg leading-relaxed">{p.summary}</p>
          </div>
        </section>
      ))}

      <section className="px-6 md:px-10 lg:px-16 py-20 border-t-2 border-[#111111] bg-[#C9F03A]">
        <div className="max-w-2xl">
          <p className="font-display text-2xl leading-snug text-[#111111]">
            One studio, <em className="text-[#111111]">start to finish</em> — brand identity,
            print, storefronts and live payment systems, built by the same hands that
            designed them.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-24 border-t-2 border-[#111111]">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl mb-6">Want to be the next one here?</h2>
          <Link
            href="/contact"
            className="inline-block bg-[#111111] text-[#C9F03A] px-8 py-4 font-medium text-sm hover:bg-[#333333] transition-colors"
          >
            Start a project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
