import React from 'react';

const brands = [
  'Binance', 'OKX', 'Bybit', 'KuCoin', 'Coinbase', 'Gate.io', 'Huobi',
  'Delphi', 'a16z', 'Sequoia', 'Dragonfly', 'Animoca', 'Pantera', 'Hashed'
];

export default function Network() {
  return (
    <section id="network" className="w-full bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">A Trusted Global Network</h2>
          <p className="mt-4 text-gray-700">
            Direct access to venture funds, launchpads, KOLs, advisors, market makers, and tier‑one exchanges.
          </p>
        </div>

        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-4">
          {brands.map((name) => (
            <div key={name} className="flex items-center justify-center rounded-lg border border-black/10 bg-white px-4 py-6 text-sm font-medium text-gray-800 shadow-sm">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
