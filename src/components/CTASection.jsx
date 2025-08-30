import React, { useMemo, useState } from 'react';
import { Check } from 'lucide-react';

export default function CTASection() {
  const [tons, setTons] = useState(100);
  const pricePerTon = 650; // USD
  const subtotal = useMemo(() => tons * pricePerTon, [tons]);

  return (
    <section id="buy" className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Buy carbon removal credits</h2>
            <p className="mt-3 max-w-xl text-neutral-600">High-durability removals from direct air capture with geological storage. Certificates include traceable vintage, monitoring data, and third‑party verification.</p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> 1 credit = 1 metric ton CO₂ permanently removed</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> ISO 14064 and ICROA-aligned documentation</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Delivery windows available 2025–2027</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-sm text-neutral-500">Price per ton</div>
                <div className="text-3xl font-semibold tracking-tight">${pricePerTon.toLocaleString()} <span className="text-base font-normal text-neutral-500">USD</span></div>
              </div>
              <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">High-durability</div>
            </div>

            <div className="mt-6">
              <label htmlFor="tons" className="block text-sm font-medium text-neutral-700">Quantity (metric tons)</label>
              <div className="mt-2 flex items-center gap-3">
                <input
                  id="tons"
                  type="number"
                  min={10}
                  step={10}
                  value={tons}
                  onChange={(e) => setTons(Math.max(10, Number(e.target.value) || 10))}
                  className="w-36 rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="range"
                  min={10}
                  max={1000}
                  step={10}
                  value={tons}
                  onChange={(e) => setTons(Number(e.target.value))}
                  className="flex-1"
                />
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-neutral-50 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-medium text-neutral-900">${subtotal.toLocaleString()}</span>
              </div>
              <div className="mt-1 text-xs text-neutral-500">Volume-based discounts available above 5,000 tons. Invoicing supported.</div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:sales@sagecarbon.com?subject=Purchase%20Inquiry%20-%20${encodeURIComponent(tons)}%20tCO2&body=Hello%20Sage%20Carbon%2C%0A%0AI'd%20like%20to%20purchase%20${encodeURIComponent(tons)}%20tCO2%20of%20direct%20air%20capture%20removal%20credits.%20Please%20send%20details%20for%20next%20steps.%0A%0AThank%20you!`}
                className="inline-flex flex-1 items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Buy Carbon Credits
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.alert('A secure checkout flow can be integrated here. For now, contact sales@sagecarbon.com.'); }}
                className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-6 py-3 text-neutral-800 shadow-sm transition hover:bg-neutral-50"
              >
                Talk to sales
              </a>
            </div>

            <p className="mt-4 text-center text-xs text-neutral-500">Payments via wire, ACH, or card. Delivery and retirement certificates provided upon verification.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
