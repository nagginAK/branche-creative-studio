import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const PROJECTS = [
  {
    name: 'Sherel & Shawnel',
    category: 'Brand Identity · Apparel',
    summary:
      'Full identity system for a South Florida apparel and print studio — logo suite, color system, and packaging built to work across screen-printed garments and digital storefronts alike.',
  },
  {
    name: 'The Hustle Blueprint',
    category: 'Brand Identity · Media',
    summary:
      'Brand direction for an entrepreneurship and media platform — a flexible identity system designed to hold up across video, podcast cover art, and social content.',
  },
  {
    name: 'Architecture & CM',
    category: 'Brand Identity · Construction',
    summary:
      'Identity and collateral system for a Florida design-build practice — built to read as established and trustworthy from the first client meeting through the final permit.',
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
              {p.category}
            </p>
            <h2 className="text-3xl font-bold mb-4">{p.name}</h2>
            <p className="text-[#0a0a0a]/60 text-lg leading-relaxed">{p.summary}</p>
          </div>
        </section>
      ))}

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
