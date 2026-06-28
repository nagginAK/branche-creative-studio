import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#F2EDE4] text-[#0a0a0a]">
      <Nav />

      <section className="px-8 pt-44 pb-16 max-w-3xl">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0a0a0a]/40 mb-6">Legal</p>
        <h1 className="text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-sm text-[#0a0a0a]/40 mb-16">Last updated: June 2026</p>

        <div className="space-y-10 text-[#0a0a0a]/60 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">1. Overview</h2>
            <p>
              BC Studio (&quot;BC Studio,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) is a Timewalker Inc. vertical operating branchecreative.co.
              This Privacy Policy explains what information we collect when you visit
              our site or contact us, how we use it, and the choices you have.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">2. Information We Collect</h2>
            <p className="mb-3">
              Information you provide directly: when you submit a contact form or
              request a quote, we collect details such as your name, email address,
              phone number, and the contents of your message.
            </p>
            <p>
              Information collected automatically: like most websites, we may collect
              basic technical information such as browser type, device type, and pages
              visited through standard hosting and analytics infrastructure.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">3. How We Use Information</h2>
            <p>
              We use the information we collect to respond to inquiries, scope and
              deliver projects, and improve our site. We do not sell your personal
              information to third parties.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">4. Information Sharing</h2>
            <p>
              We do not share your personal information with third parties except as
              needed to operate our business (for example, our email provider), to
              comply with the law, or to protect our rights.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">5. Data Retention</h2>
            <p>
              We retain contact and project information for as long as reasonably
              necessary to respond to your inquiry, deliver a project, or meet legal
              and accounting obligations.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">6. Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of the personal
              information we hold about you at any time by contacting us using the
              details below.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated revision date.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">8. Contact Us</h2>
            <p>
              Questions about this policy can be sent to{' '}
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
