'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-transparent border border-[#F2EDE4]/15 focus:border-[#CDA850] px-4 py-3 text-[#F2EDE4] placeholder:text-[#F2EDE4]/25 outline-none transition-colors';

  return (
    <main className="min-h-screen bg-[#0E0B07] text-[#F2EDE4]">
      <Nav />

      <section className="px-8 lg:px-16 pt-44 pb-16 border-b border-[#F2EDE4]/10">
        <h1 className="font-display text-6xl md:text-8xl leading-[1.02] tracking-tight max-w-3xl">
          Ready to build something <em className="text-[#E6C570]">serious</em>?
        </h1>
        <p className="text-[#F2EDE4]/60 text-lg max-w-xl mt-6 leading-relaxed">
          Tell us a bit about your project and we&apos;ll get back to you within one business day.
        </p>
        <a href="tel:+18888988213" className="inline-block text-sm font-medium text-[#F2EDE4]/50 hover:text-[#E6C570] transition-colors mt-4">
          (888) 898-8213
        </a>
      </section>

      <section className="px-8 lg:px-16 py-20">
        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="(555) 555-5555"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
              placeholder="Tell us about your project"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-block bg-[#F2EDE4] text-[#0E0B07] px-8 py-4 font-medium text-sm hover:bg-[#E6C570] transition-colors disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-[#E6C570] pt-2">Thanks — we&apos;ll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400 pt-2">Something went wrong. Please try again.</p>
          )}
        </form>
      </section>

      <Footer />
    </main>
  );
}
