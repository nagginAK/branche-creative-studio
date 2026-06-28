import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const SERVICES = [
  {
    name: 'Brand Starter',
    price: '$1,500 – $3,000',
    body: 'A focused identity package for early-stage brands: logo, color, type, and the essentials to launch with confidence.',
    includes: ['Primary logo + alternate marks', 'Color palette & typography system', 'Brand guideline one-pager', 'Source files'],
  },
  {
    name: 'Brand Identity',
    price: '$3,000 – $6,000',
    body: 'A complete visual identity system — logo suite, brand guidelines, and applications across every key touchpoint.',
    includes: ['Full logo suite', 'Comprehensive brand guidelines', 'Business card & stationery system', 'Social & digital templates'],
  },
  {
    name: 'Brand + Web',
    price: '$6,000 – $12,000',
    body: 'Full identity plus a custom website built to match — strategy, design, and development under one roof.',
    includes: ['Everything in Brand Identity', 'Custom-built website', 'Mobile-responsive design', 'Launch support'],
  },
  {
    name: 'Retainer',
    price: '$1,000 – $2,500/mo',
    body: 'Ongoing design support for brands that need a steady hand — campaigns, refreshes, and new collateral as you grow.',
    includes: ['Monthly design hours', 'Priority turnaround', 'Campaign & collateral support', 'Cancel anytime'],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-[#F2EDE4] text-[#0a0a0a]">
      <Nav />

      <section className="px-8 pt-44 pb-16 border-b border-black/10">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0a0a0a]/40 mb-6">Services</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight max-w-3xl">
          Pricing & packages.
        </h1>
        <p className="text-[#0a0a0a]/60 text-lg max-w-xl mt-6 leading-relaxed">
          Every package starts with a conversation — these ranges reflect
          typical project scope, and final pricing is confirmed before any
          work begins.
        </p>
      </section>

      {SERVICES.map((s, i) => (
        <section
          key={s.name}
          className={`px-8 py-16 ${i < SERVICES.length - 1 ? 'border-b border-black/10' : ''}`}
        >
          <div className="max-w-3xl grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-3">{s.name}</h2>
              <p className="text-[#0a0a0a]/60 text-lg leading-relaxed mb-6 max-w-xl">{s.body}</p>
              <ul className="space-y-2">
                {s.includes.map((item) => (
                  <li key={item} className="text-sm text-[#0a0a0a]/60 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#0a0a0a]/40 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-2xl font-bold whitespace-nowrap">{s.price}</span>
          </div>
        </section>
      ))}

      <section className="px-8 py-24 border-t border-black/10">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-6">Not sure which fits?</h2>
          <Link
            href="/contact"
            className="inline-block bg-[#0a0a0a] text-[#F2EDE4] px-8 py-4 font-medium text-sm hover:bg-[#0a0a0a]/90 transition-colors"
          >
            Let&apos;s talk
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
