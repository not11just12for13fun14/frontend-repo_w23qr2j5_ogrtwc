import React from 'react';
import { Rocket, BarChart2, Share2, Handshake, Megaphone, Gauge } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Fundraising & Deal Engineering',
    desc: 'VC introductions, token/eq rounds, SAFT structuring, launchpad orchestration, market maker alignment, and CEX listings readiness.'
  },
  {
    icon: BarChart2,
    title: 'Go‑to‑Market & Growth',
    desc: 'Narrative, positioning, and distribution. KPI frameworks, launch playbooks, and data‑driven growth loops across Web2 + Web3.'
  },
  {
    icon: Share2,
    title: 'Influencer & KOL Network',
    desc: 'Performance‑driven creator campaigns with verified Web3 KOLs for high‑intent reach across Telegram, X, YouTube, and podcasts.'
  },
  {
    icon: Handshake,
    title: 'Advisory & Partnerships',
    desc: 'Hands‑on advisory from operators and ex‑exchanges. Strategic partners across infra, liquidity, security, and compliance.'
  },
  {
    icon: Megaphone,
    title: 'PR & Narrative Engineering',
    desc: 'Story craft, thought leadership, tier‑one placements, and community resonance to own your category narrative.'
  },
  {
    icon: Gauge,
    title: 'Listing & Liquidity Strategy',
    desc: 'CEX outreach, MM coordination, tokenomics feedback, and liquidity plans aligned with long‑term sustainability.'
  }
];

export default function Capabilities() {
  return (
    <section id="services" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Capabilities</h2>
          <p className="mt-4 text-gray-700">
            Full‑stack support from scouting to scale: we engineer momentum for ambitious founders.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-black/5 p-3 text-black">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-black/5 opacity-0 blur-xl transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
