'use client';

import { useState } from 'react';

const SERVICES = [
  'Brand Identity',
  'Print & Screen Print',
  'Retail & In-Store Media',
  'Packaging & Labels',
  'Motion & Video',
  'Kiosk & Digital Ordering',
  'Not sure yet',
];

export default function HomeContactForm() {
  const [form, setForm] = useState({ name: '', email: '', service: SERVICES[0], details: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `Service: ${form.service}\n\n${form.details}`,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', service: SERVICES[0], details: '' });
    } catch {
      setStatus('error');
    }
  };

  const field =
    'h-[52px] border-2 border-[#111111] bg-[#F2F0EA] px-4 text-base outline-none focus:bg-white transition-colors';
  const label = 'flex flex-col gap-2 font-semibold text-sm';

  return (
    <form onSubmit={handleSubmit} className="flex-1 basis-[440px] flex flex-col gap-[18px]">
      <label className={label}>
        Name
        <input name="name" type="text" required value={form.name} onChange={handleChange} className={field} />
      </label>
      <label className={label}>
        Email
        <input name="email" type="email" required value={form.email} onChange={handleChange} className={field} />
      </label>
      <label className={label}>
        What do you need?
        <select name="service" value={form.service} onChange={handleChange} className={field}>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className={label}>
        Project details
        <textarea
          name="details"
          required
          rows={4}
          value={form.details}
          onChange={handleChange}
          className="border-2 border-[#111111] bg-[#F2F0EA] px-4 py-3.5 text-base outline-none focus:bg-white resize-y"
        />
      </label>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="h-[58px] bg-[#111111] text-[#C9F03A] font-bold text-[17px] hover:bg-[#333] transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send inquiry →'}
      </button>
      {status === 'success' && (
        <p className="font-semibold">Thanks — we&apos;ll be in touch within one business day.</p>
      )}
      {status === 'error' && (
        <p className="font-semibold text-[#9B1C1C]">
          Something went wrong. Email rene@branchecreative.co instead.
        </p>
      )}
    </form>
  );
}
