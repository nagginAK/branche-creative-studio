import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2EDE4] text-[#0a0a0a]">
      <Nav transparent />

      <section className="relative w-full h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt="BC Studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-32">
          <h1 className="text-7xl md:text-9xl font-bold leading-none tracking-tight text-white max-w-5xl">Brands that people root for.</h1>
        </div>
      </section>

      <section className="px-12 py-20 border-t border-black/10">
        <div className="max-w-5xl">
          <p className="text-[#3a3a3a] text-xl max-w-2xl leading-relaxed">
            BC Studio is a principal-led brand identity firm. Every project is led directly by the founder — no account managers, no junior hand-offs, just focused work on brands worth building.
          </p>
        </div>
      </section>

      <section id="services" className="px-12 py-32 border-t border-black/10">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl font-bold">Services</h2>
          <Link href="/services" className="text-sm text-[#0a0a0a]/60 hover:text-[#0a0a0a] transition-colors">Full pricing & details →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10">
          <div className="bg-[#F2EDE4] p-10 flex flex-col gap-4">
            <h3 className="text-2xl font-medium">Brand Starter</h3>
            <p className="text-[#0a0a0a]/60 text-sm leading-relaxed flex-1">
              A focused identity package for early-stage brands: logo, color, type, and the essentials to launch with confidence.
            </p>
            <span className="text-xl font-bold text-[#0a0a0a]">$1,500 &ndash; $3,000</span>
          </div>
          <div className="bg-[#F2EDE4] p-10 flex flex-col gap-4">
            <h3 className="text-2xl font-medium">Brand Identity</h3>
            <p className="text-[#0a0a0a]/60 text-sm leading-relaxed flex-1">
              A complete visual identity system — logo suite, brand guidelines, and applications across every key touchpoint.
            </p>
            <span className="text-xl font-bold text-[#0a0a0a]">$3,000 &ndash; $6,000</span>
          </div>
          <div className="bg-[#F2EDE4] p-10 flex flex-col gap-4">
            <h3 className="text-2xl font-medium">Brand + Web</h3>
            <p className="text-[#0a0a0a]/60 text-sm leading-relaxed flex-1">
              Full identity plus a custom website built to match — strategy, design, and development under one roof.
            </p>
            <span className="text-xl font-bold text-[#0a0a0a]">$6,000 &ndash; $12,000</span>
          </div>
          <div className="bg-[#F2EDE4] p-10 flex flex-col gap-4">
            <h3 className="text-2xl font-medium">Retainer</h3>
            <p className="text-[#0a0a0a]/60 text-sm leading-relaxed flex-1">
              Ongoing design support for brands that need a steady hand — campaigns, refreshes, and new collateral as you grow.
            </p>
            <span className="text-xl font-bold text-[#0a0a0a]">$1,000 &ndash; $2,500/mo</span>
          </div>
        </div>
      </section>

      <section id="studio" className="px-8 py-32 border-t border-black/10">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Small studio. Strong point of view.</h2>
          <p className="text-[#0a0a0a]/60 text-lg leading-relaxed mb-6">
            BC Studio is a Timewalker Inc. vertical, built around principal-led work. There&apos;s no layer between you and the person doing the thinking and the designing — just direct collaboration, clear opinions, and brand work that holds up.
          </p>
          <Link href="/about" className="text-sm font-medium text-[#0a0a0a] border-b border-[#0a0a0a]/30 pb-1 hover:border-[#0a0a0a] transition-colors">More about the studio →</Link>
        </div>
      </section>

      <section className="px-8 py-32 border-t border-black/10">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Selected work</h2>
          <p className="text-[#0a0a0a]/60 text-lg leading-relaxed mb-6">
            From early-stage startups to established local businesses, every project gets the same close attention — strategy first, design second, execution that holds up everywhere it&apos;s seen.
          </p>
          <Link href="/work" className="text-sm font-medium text-[#0a0a0a] border-b border-[#0a0a0a]/30 pb-1 hover:border-[#0a0a0a] transition-colors">See the work →</Link>
        </div>
      </section>

      <section id="contact" className="px-8 py-32 border-t border-black/10">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-8">Ready to build something serious?</h2>
          <a href="mailto:rene@branchecreative.co" className="inline-block bg-[#0a0a0a] text-[#F2EDE4] px-8 py-4 font-medium text-sm hover:bg-[#0a0a0a]/90 transition-colors">rene@branchecreative.co</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
