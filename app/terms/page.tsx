import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#F2EDE4] text-[#0a0a0a]">
      <Nav />

      <section className="px-8 pt-44 pb-16 max-w-3xl">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0a0a0a]/40 mb-6">Legal</p>
        <h1 className="text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-sm text-[#0a0a0a]/40 mb-16">Last updated: June 2026</p>

        <div className="space-y-10 text-[#0a0a0a]/60 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">1. Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of
              branchecreative.co and any services offered by BC Studio, a Timewalker
              Inc. vertical (&quot;BC Studio,&quot; &quot;we,&quot; &quot;us&quot;). By
              using this site or engaging our services, you agree to these Terms.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">2. Services</h2>
            <p>
              BC Studio provides brand identity and related creative services as
              described on this site. Specific scope, pricing, and timelines for any
              project will be confirmed directly with you before work begins.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">3. Quotes and Estimates</h2>
            <p>
              Pricing shown on this site reflects typical project ranges and is
              non-binding until confirmed in writing. Final scope and pricing will be
              set out in a separate proposal or invoice.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">4. Deposits and Payment</h2>
            <p>
              Projects typically require a deposit before work begins, with the
              balance due upon delivery or per an agreed schedule. Deposits are
              generally non-refundable once work has started, except as otherwise
              agreed in writing or required by law.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">5. Intellectual Property</h2>
            <p>
              Final deliverables are licensed for the client&apos;s use upon full
              payment, as described in the relevant project agreement. BC Studio
              retains the right to display completed work in its own portfolio unless
              otherwise agreed.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, BC Studio is not liable for
              indirect, incidental, or consequential damages arising from your use of
              this site or our services.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">7. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Florida, without
              regard to conflict-of-law principles.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">8. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the site
              after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">9. Contact Us</h2>
            <p>
              Questions about these Terms can be sent to{' '}
              <a href="mailto:rene@branchecreative.co" className="text-[#0a0a0a] underline">
                rene@branchecreative.co
              </a>{' '}
              or via our{' '}
              <Link href="/contact" className="text-[#0a0a0a] underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
