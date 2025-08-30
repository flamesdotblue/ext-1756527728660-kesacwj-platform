import React from 'react';
import Hero from './components/Hero';
import DataVisuals from './components/DataVisuals';
import Partners from './components/Partners';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <main>
        <DataVisuals />
        <Partners />
        <CTASection />
      </main>
      <footer className="py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Sage Carbon. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
