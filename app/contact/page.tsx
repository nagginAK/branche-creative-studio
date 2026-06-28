'use client';

import { useState } from 'react';
import Link from 'next/link';
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

  return (
    <main className="min-h-screen bg-[#F2EDE4] text-[#0a0a0a]">
      <Nav />

      <section className="px-8 pt-44 pb-16 border-b border-black/10">
        <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight max-w-3xl">Ready to build something serious?</h1>
        <p className="text-[#0a0a0a]/60 text-lg max-w-xl mt-6 leading-relaxed">
          Tell us a bit about your project and we&apos;ll get back to you within one business day.
        </p>
      </section>

      <section className="px-8 py-20">
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
              className="w-full bg-transparent border border-black/10 focus:border-black/40 px-4 py-3 text-[#0a0a0a] placeholder:text-[#0a0a0a]/30 outline-none transition-colors"
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
              className="w-full bg-transparent border border-black/10 focus:border-black/40 px-4 py-3 text-[#0a0a0a] placeholder:text-[#0a0a0a]/30 outline-none transition-colors"
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
              className="w-full bg-transparent border border-black/10 focus:border-black/40 px-4 py-3 text-[#0a0a0a] placeholder:text-[#0a0a0a]/30 outline-none transition-colors"
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
              className="w-full bg-transparent border border-black/10 focus:border-black/40 px-4 py-3 text-[#0a0a0a] placeholder:text-[#0a0a0a]/30 outline-none transition-colors resize-none"
              placeholder="Tell us about your project"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-block bg-[#0a0a0a] text-[#F2EDE4] px-8 py-4 font-medium text-sm hover:bg-[#0a0a0a]/90 transition-colors disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-[#0a0a0a]/60 pt-2">Thanks — we&apos;ll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600 pt-2">Something went wrong. Please try again.</p>
          )}
        </form>
      </section>

      <Footer />
    </main>
  );
}
