import React from 'react';

const logos = [
  { name: 'Microsoft', path: (
    <svg viewBox="0 0 120 24" className="h-6 w-auto" aria-hidden>
      <rect x="0" y="0" width="10" height="10" fill="#737373"/>
      <rect x="11" y="0" width="10" height="10" fill="#a3a3a3"/>
      <rect x="0" y="11" width="10" height="10" fill="#a3a3a3"/>
      <rect x="11" y="11" width="10" height="10" fill="#737373"/>
      <text x="28" y="16" fontSize="12" fill="#737373">Microsoft</text>
    </svg>
  ) },
  { name: 'Stripe', path: (
    <svg viewBox="0 0 120 24" className="h-6 w-auto" aria-hidden>
      <text x="0" y="16" fontSize="14" fill="#737373" fontWeight="600">stripe</text>
    </svg>
  ) },
  { name: 'Shopify', path: (
    <svg viewBox="0 0 120 24" className="h-6 w-auto" aria-hidden>
      <text x="0" y="16" fontSize="14" fill="#737373" fontWeight="600">shopify</text>
    </svg>
  ) },
  { name: 'Patagonia', path: (
    <svg viewBox="0 0 140 24" className="h-6 w-auto" aria-hidden>
      <text x="0" y="16" fontSize="14" fill="#737373" fontWeight="600">Patagonia</text>
    </svg>
  ) },
  { name: 'Salesforce', path: (
    <svg viewBox="0 0 140 24" className="h-6 w-auto" aria-hidden>
      <text x="0" y="16" fontSize="14" fill="#737373" fontWeight="600">Salesforce</text>
    </svg>
  ) },
];

export default function Partners() {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-8 shadow-sm">
          <p className="text-center text-sm text-neutral-500">Trusted by climate-leading teams</p>
          <div className="mt-6 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
            {logos.map((l) => (
              <div key={l.name} className="opacity-70 saturate-0 transition hover:opacity-100">
                <span className="sr-only">{l.name}</span>
                {l.path}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
