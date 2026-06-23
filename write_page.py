content = """export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
        <span className="text-sm font-medium tracking-[0.2em] uppercase">BC Studio</span>
        <div className="flex items-center gap-8 text-sm text-white/60">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#studio" className="hover:text-white transition-colors">Studio</a>
          <a href="#contact" className="bg-white text-black px-5 py-2 text-sm font-medium">Start a Project</a>
        </div>
      </nav>
      <section className="flex flex-col justify-end min-h-screen px-8 pb-20 pt-32">
        <div className="max-w-5xl">
          <h1 className="text-6xl font-bold leading-none tracking-tight mb-8">Brands built to last.</h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">BC Studio is a principal-led brand identity firm based in South Florida.</p>
        </div>
      </section>
      <section id="contact" className="px-8 py-32 border-t border-white/10">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-8">Ready to build something serious?</h2>
          <a href="mailto:rene@branchecreative.co" className="inline-block bg-white text-black px-8 py-4 font-medium text-sm">rene@branchecreative.co</a>
        </div>
      </section>
      <footer className="px-8 py-12 border-t border-white/10 flex items-center justify-between text-white/30 text-sm">
        <span>2026 BC Studio</span>
        <span>A Timewalker Inc. vertical</span>
      </footer>
    </main>
  );
}"""
with open("app/page.tsx", "w") as f:
    f.write(content)
print("done")

