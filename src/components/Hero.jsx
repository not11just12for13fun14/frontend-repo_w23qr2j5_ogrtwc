import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlays to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Top bar */}
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-black" />
            <span className="font-semibold tracking-tight">Black White FR</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
            <a href="#services" className="hover:text-black">Capabilities</a>
            <a href="#network" className="hover:text-black">Network</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </div>
        </div>

        {/* Hero copy */}
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 md:pb-32 md:pt-20">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Global Web3 Growth & Fundraising Partner
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-6xl">
              We connect elite Web3 founders with VCs, Launchpads, Influencers, Advisors, Market Makers, and CEXs.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
              Black White FR scouts under‑the‑radar blockchain projects and provides full‑stack fundraising, marketing, and advisory support to accelerate your path to market leadership.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-900"
              >
                Book a Strategy Call
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-gray-900 backdrop-blur transition hover:bg-white"
              >
                Explore Capabilities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
