"use client";
import Section from './Section';
import { motion } from 'framer-motion';
import { Wrench, Activity, LifeBuoy, Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const steps = [
  { title: 'Professional Installation', icon: Wrench, desc: 'Certified technicians install and calibrate FireGuard for your panel.' },
  { title: 'Real-Time Monitoring 24/7', icon: Activity, desc: 'AI watches electrical signatures continuously to flag anomalies.' },
  { title: 'Expert Assistance (If Needed)', icon: LifeBuoy, desc: 'Escalate to live experts who guide next steps during alerts.' },
  { title: 'Peace of Mind', icon: Shield, desc: 'Sleep easy knowing risks are caught before they become fires.' }
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => ref.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  return (
    <Section id="how" className="container-page py-20">
      <h2 className="section-title mb-8">How It Works</h2>
      <div className="relative">
        {/* glowing connector line */}
        <div className="pointer-events-none absolute left-0 right-0 top-16 hidden lg:block" aria-hidden>
          <div className="mx-10 h-[3px] rounded-full bg-gradient-to-r from-gold/0 via-gold/70 to-gold/0 blur-[2px]" />
        </div>
        <div ref={ref} className="flex gap-6 overflow-x-auto pb-2 snap-x">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05 }}
              className="min-w-[280px] md:min-w-[300px] snap-start group glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              <s.icon className="h-8 w-8 text-gold mb-4" />
              <h3 className="text-white font-semibold text-lg">{idx + 1}. {s.title}</h3>
              <p className="muted mt-2 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <button aria-label="Previous" onClick={() => scrollBy(-1)} className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 btn btn-outline h-10 w-10 items-center justify-center"> 
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button aria-label="Next" onClick={() => scrollBy(1)} className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 btn btn-outline h-10 w-10 items-center justify-center">
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </Section>
  );
}
