export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#0a0a0a]/80 backdrop-blur-sm">
        <span className="text-sm font-medium tracking-[0.2em] uppercase">BC Studio</span>
        <div className="flex items-center gap-8 text-sm text-white/60">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#studio" className="hover:text-white transition-colors">Studio</a>
          <a href="#contact" className="bg-white text-black px-5 py-2 text-sm font-medium hover:bg-white/90 transition-colors">Start a Project</a>
        </div>
      </nav>

      <section className="flex flex-col justify-end min-h-screen px-8 pb-20 pt-32">
        <div className="max-w-5xl">
          <h1 className="text-6xl font-bold leading-none tracking-tight mb-8">Brands that people root for.</h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            BC Studio is a principal-led brand identity firm. Every project is led directly by the founder — no account managers, no junior hand-offs, just focused work on brands worth building.
          </p>
        </div>
      </section>

      <section id="services" className="px-8 py-32 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-16">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          <div className="bg-[#0a0a0a] p-8 flex flex-col gap-4">
            <h3 className="text-lg font-medium">Brand Starter</h3>
            <p className="text-white/50 text-sm leading-relaxed flex-1">
              A focused identity package for early-stage brands: logo, color, type, and the essentials to launch with confidence.
            </p>
            <span className="text-white/40 text-sm">$1,500 &ndash; $3,000</span>
          </div>
          <div className="bg-[#0a0a0a] p-8 flex flex-col gap-4">
            <h3 className="text-lg font-medium">Brand Identity</h3>
            <p className="text-white/50 text-sm leading-relaxed flex-1">
              A complete visual identity system — logo suite, brand guidelines, and applications across every key touchpoint.
            </p>
            <span className="text-white/40 text-sm">$3,000 &ndash; $6,000</span>
          </div>
          <div className="bg-[#0a0a0a] p-8 flex flex-col gap-4">
            <h3 className="text-lg font-medium">Brand + Web</h3>
            <p className="text-white/50 text-sm leading-relaxed flex-1">
              Full identity plus a custom website built to match — strategy, design, and development under one roof.
            </p>
            <span className="text-white/40 text-sm">$6,000 &ndash; $12,000</span>
          </div>
          <div className="bg-[#0a0a0a] p-8 flex flex-col gap-4">
            <h3 className="text-lg font-medium">Retainer</h3>
            <p className="text-white/50 text-sm leading-relaxed flex-1">
              Ongoing design support for brands that need a steady hand — campaigns, refreshes, and new collateral as you grow.
            </p>
            <span className="text-white/40 text-sm">$1,000 &ndash; $2,500/mo</span>
          </div>
        </div>
      </section>

      <section id="studio" className="px-8 py-32 border-t border-white/10">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Small studio. Strong point of view.</h2>
          <p className="text-white/50 text-lg leading-relaxed">
            BC Studio is a Timewalker Inc. vertical, built around principal-led work. There&apos;s no layer between you and the person doing the thinking and the designing — just direct collaboration, clear opinions, and brand work that holds up.
          </p>
        </div>
      </section>

      <section id="contact" className="px-8 py-32 border-t border-white/10">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-8">Ready to build something serious?</h2>
          <a href="mailto:rene@branchecreative.co" className="inline-block bg-white text-black px-8 py-4 font-medium text-sm hover:bg-white/90 transition-colors">rene@branchecreative.co</a>
        </div>
      </section>

      <footer className="px-8 py-12 border-t border-white/10 flex items-center justify-between text-white/30 text-sm">
        <span>2026 BC Studio</span>
        <span>A Timewalker Inc. vertical</span>
      </footer>
    </main>
  );
}
