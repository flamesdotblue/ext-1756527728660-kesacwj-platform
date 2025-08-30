import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8C7I8c8E7a4EYqkK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
        <div className="container mx-auto max-w-7xl px-6 pt-24 pb-28 sm:pt-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
              <Rocket className="h-4 w-4" />
              Direct Air Capture Credits
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
              Sage Carbon
            </h1>
            <p className="mt-4 text-lg text-neutral-700 sm:text-xl">
              Purchase high-quality, measurable carbon removal from direct air capture. Transparent, science-backed, and ready to scale.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#buy"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Buy Carbon Credits
              </a>
              <a
                href="#data"
                className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-6 py-3 text-neutral-800 shadow-sm transition hover:bg-neutral-50"
              >
                Explore our data
              </a>
            </div>
            <div className="mt-6 text-sm text-neutral-500">
              ISO 14064 aligned • Third-party verified • Permanent removal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
