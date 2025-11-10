import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — we\'ll be in touch within 24 hours.');
  };

  return (
    <section id="contact" className="w-full bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Book a Strategy Call</h2>
          <p className="mt-4 text-gray-700">Share a few details and our team will follow up with availability.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800">Name</label>
              <input required type="text" className="mt-2 rounded-md border border-black/10 px-3 py-2 outline-none ring-black/10 focus:ring" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800">Work Email</label>
              <input required type="email" className="mt-2 rounded-md border border-black/10 px-3 py-2 outline-none ring-black/10 focus:ring" />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm font-medium text-gray-800">Project</label>
              <input required type="text" placeholder="Layer2, DeFi, AI x Crypto, Infra, Gaming, ..." className="mt-2 rounded-md border border-black/10 px-3 py-2 outline-none ring-black/10 focus:ring" />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm font-medium text-gray-800">What do you need help with?</label>
              <textarea required rows={4} className="mt-2 rounded-md border border-black/10 px-3 py-2 outline-none ring-black/10 focus:ring" />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-600">We respond within one business day.</p>
            <button type="submit" className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900">Request Call</button>
          </div>
          {status && (
            <div className="mt-4 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
              {status}
            </div>
          )}
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Black White FR — All rights reserved.</p>
      </div>
    </section>
  );
}
