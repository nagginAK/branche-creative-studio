import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main className="min-h-screen bg-[#F2F0EA] text-[#111111]">
      <Nav />

      <section className="px-6 md:px-10 lg:px-16 pt-44 pb-16 border-b-2 border-[#111111]">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-[#111111] mb-6">Studio</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[1.02] tracking-tight max-w-3xl">
          Small studio. <em className="text-[#111111]">Strong</em> point of view.
        </h1>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-24 max-w-3xl">
        <p className="text-[#111111]/75 text-lg leading-relaxed mb-6">
          BC Studio is a principal-led brand identity firm and a Timewalker
          Inc. vertical. Every project is led directly by the founder — no
          account managers, no junior hand-offs, no telephone game between
          you and the work.
        </p>
        <p className="text-[#111111]/75 text-lg leading-relaxed mb-6">
          That structure is deliberate. Brand work suffers when it passes
          through too many hands — the point of view gets diluted, decisions
          get slow, and the client ends up talking to someone who isn&apos;t
          actually doing the design. BC Studio keeps that loop tight: one
          person thinking, designing, and communicating with you, start to
          finish.
        </p>
        <p className="text-[#111111]/75 text-lg leading-relaxed">
          The studio takes on a deliberately small number of projects at a
          time, so each one gets full attention rather than being split
          across a roster of clients.
        </p>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-24 border-t-2 border-[#111111]">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-[#111111] mb-12">How We Work</p>
          <div className="space-y-10">
            {[
              { n: '01', title: 'Discovery', body: 'A real conversation about the business — not a questionnaire. We figure out what the brand actually needs before opening any design software.' },
              { n: '02', title: 'Direction', body: 'A small number of strong concepts, not a dozen mediocre options. Each one defensible, each one considered.' },
              { n: '03', title: 'Refinement', body: 'Focused revisions on the direction that resonates, built out into a full, usable system.' },
              { n: '04', title: 'Delivery', body: 'Final files, guidelines, and a system you can hand to anyone — a printer, a developer, a future hire — and have it implemented correctly.' },
            ].map((step) => (
              <div key={step.n} className="flex gap-8">
                <span className="font-display text-sm text-[#111111] shrink-0 pt-1.5 italic">{step.n}</span>
                <div>
                  <h3 className="font-display text-2xl mb-2">{step.title}</h3>
                  <p className="text-[#111111]/75 leading-relaxed max-w-xl">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-24 border-t-2 border-[#111111]">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl mb-6">Ready to start?</h2>
          <Link
            href="/contact"
            className="inline-block bg-[#111111] text-[#C9F03A] px-8 py-4 font-medium text-sm hover:bg-[#333333] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
