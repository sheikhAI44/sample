"use client";
import { ArrowRight, Users } from 'lucide-react';
import Section from './Section';
import Particles from './Particles';

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function Hero() {
  // Mouse-reactive gradient controlled via CSS vars
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    e.currentTarget.style.setProperty('--mx', `${x}px`);
    e.currentTarget.style.setProperty('--my', `${y}px`);
  };
  return (
    <Section className="relative isolate" >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            `linear-gradient(rgba(12,12,12,0.6), rgba(12,12,12,0.92)), url('${assetPrefix}/fireguard/hero.jpeg')`
        }}
      />
      {/* Reactive lighting */}
      <div onMouseMove={onMove} className="pointer-events-none absolute inset-0 -z-10" style={{
        background: `radial-gradient(400px 400px at var(--mx,50%) var(--my,50%), rgba(233,69,69,0.25), transparent 60%)`
      }} />
      <Particles className="absolute inset-0 -z-10 opacity-30" />
      <div className="container-page py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="section-title">Stop The Fire Before It Starts!</h1>
          <p className="mt-4 text-lg text-white/80">
            AI-powered monitoring for home and building electrical panels. Detect risk, alert instantly, and prevent fires before they begin.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#about" className="btn btn-primary">
              Explore FireGuard
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <span className="badge">#HomeSafety</span>
            <span className="badge">#PeaceOfMind</span>
            <span className="badge">#RealTimeMonitoring</span>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {Array.from({ length: 4 }).map((_, i) => (
                // Simple colored circles as group avatar placeholders
                <span key={i} className="inline-block h-9 w-9 rounded-full border border-white/20 bg-white/20" />
              ))}
            </div>
            <div className="text-white/85 flex items-center gap-2">
              <Users className="h-5 w-5 text-gold" />
              <span className="font-medium">250K+ homeowners protected</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
