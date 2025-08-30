import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, children }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
    <h3 className="text-sm font-medium text-neutral-600">{title}</h3>
    <div className="mt-4">{children}</div>
  </div>
);

export default function DataVisuals() {
  return (
    <section id="data" className="bg-neutral-50 py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Transparent performance data</h2>
            <p className="mt-2 max-w-2xl text-neutral-600">Real-time capture rates, lifecycle impacts, and cost trajectories powered by on-site instrumentation.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Capture rate (tCO₂/month)">
            <motion.svg initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} viewBox="0 0 340 140" className="h-40 w-full">
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline fill="url(#grad1)" stroke="none" points="0,120 0,90 40,95 80,88 120,80 160,70 200,66 240,58 280,52 320,45 340,45 340,120" />
              <polyline fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" points="0,90 40,95 80,88 120,80 160,70 200,66 240,58 280,52 320,45" />
              <g fill="#10b981">
                <circle cx="80" cy="88" r="3" />
                <circle cx="160" cy="70" r="3" />
                <circle cx="240" cy="58" r="3" />
                <circle cx="320" cy="45" r="3" />
              </g>
              <text x="0" y="135" fontSize="10" fill="#6b7280">Jan</text>
              <text x="70" y="135" fontSize="10" fill="#6b7280">Apr</text>
              <text x="150" y="135" fontSize="10" fill="#6b7280">Jul</text>
              <text x="230" y="135" fontSize="10" fill="#6b7280">Oct</text>
            </motion.svg>
            <p className="mt-2 text-sm text-neutral-600">Up 32% YoY through process intensification and heat integration.</p>
          </Card>

          <Card title="Lifecycle footprint (kg CO₂e/ton removed)">
            <motion.svg initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} viewBox="0 0 340 140" className="h-40 w-full">
              <g fill="#e5e7eb">
                <rect x="30" y="30" width="40" height="90" rx="6" />
                <rect x="100" y="50" width="40" height="70" rx="6" />
                <rect x="170" y="45" width="40" height="75" rx="6" />
                <rect x="240" y="20" width="40" height="100" rx="6" />
              </g>
              <g fill="#10b981">
                <rect x="30" y="70" width="40" height="50" rx="6" />
                <rect x="100" y="85" width="40" height="35" rx="6" />
                <rect x="170" y="90" width="40" height="30" rx="6" />
                <rect x="240" y="100" width="40" height="20" rx="6" />
              </g>
              <text x="25" y="135" fontSize="10" fill="#6b7280">2019</text>
              <text x="95" y="135" fontSize="10" fill="#6b7280">2021</text>
              <text x="165" y="135" fontSize="10" fill="#6b7280">2023</text>
              <text x="235" y="135" fontSize="10" fill="#6b7280">2025</text>
            </motion.svg>
            <p className="mt-2 text-sm text-neutral-600">Net footprint reduced below 0.1 tCO₂e/ton removed with renewable power.</p>
          </Card>

          <Card title="Portfolio mix">
            <motion.svg initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} viewBox="0 0 340 140" className="h-40 w-full">
              <circle cx="70" cy="70" r="52" fill="#ecfdf5" />
              <path d="M70 18 A52 52 0 1 1 36 117 L70 70 Z" fill="#10b981" />
              <path d="M36 117 A52 52 0 0 1 70 18 L70 70 Z" fill="#34d399" />
              <g>
                <rect x="150" y="40" width="12" height="12" fill="#10b981" rx="2" />
                <text x="170" y="50" fontSize="12" fill="#374151">Direct air capture – 62%</text>
                <rect x="150" y="70" width="12" height="12" fill="#34d399" rx="2" />
                <text x="170" y="80" fontSize="12" fill="#374151">Enhanced mineralization – 38%</text>
              </g>
            </motion.svg>
            <p className="mt-2 text-sm text-neutral-600">Delivery balanced across modalities for durability and scale.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
