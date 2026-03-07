'use client';

import React from 'react';
import { motion } from 'framer-motion';
import EbookCard from '../ui/EbookCard';

const ebooks = [
  {
    number: '01',
    title: 'The Attraction Code',
    subtitle: 'Mental & Psychological Foundation',
    promise: 'Understand how attraction, respect, and status are formed so the rest of the system makes sense.',
    outcome: 'Stop guessing why some men get instant respect and others don\'t — understand the exact mental models that drive attraction and status.',
    description:
      'This is the foundation of the entire system. It explains how attraction, respect, and status are actually formed at a psychological level — so everything else finally works.',
    features: [
      'Identity vs image — understanding the core distinction',
      'Status psychology and subconscious ranking',
      'Behavioural authority and composure',
      'Confidence without motivation',
      'Social proof and lifestyle mechanics',
    ],
  },
  {
    number: '02',
    title: 'Face Card Mastery',
    subtitle: 'First Impression Optimisation',
    promise: 'Maximise facial attractiveness and presence without genetics or extreme routines.',
    outcome: 'Walk into any room knowing your grooming, facial structure, and eye contact are working for you — not against you.',
    description:
      'This book focuses on facial presence and first impressions — the fastest feedback loop in attraction.',
    features: [
      'Facial harmony and proportions',
      'Haircut and beard geometry',
      'Realistic skin clarity',
      'Eye contact and expression control',
      'Masculine facial presence',
    ],
  },
  {
    number: '03',
    title: 'Presence Engineering',
    subtitle: 'Physical Dominance & Perceived Power',
    promise: 'Look taller, stronger, and more commanding regardless of height.',
    outcome: 'Look taller, stronger, and harder to ignore in real life and in photos — even if you are not naturally tall or big.',
    description:
      'This book focuses on how men are physically perceived regardless of height or frame — covering the psychology of dominance and spatial authority.',
    features: [
      'Height perception psychology',
      'Posture and shoulder mechanics',
      'Clothing proportions for dominance',
      'Footwear and silhouette strategy',
      'Movement, walk, and stance',
    ],
  },
  {
    number: '04',
    title: 'Modern Masculine Aesthetic',
    subtitle: 'Visual Status & Consistency',
    promise: 'Build a masculine aesthetic that signals discipline, status, and self-respect.',
    outcome: 'Never ask "what do I wear?" again — plug into repeatable outfit formulas that match your body and lifestyle.',
    description:
      'This book helps men build a cohesive, masculine aesthetic without trends or fashion noise — clarity over complexity.',
    features: [
      'Outfit formulas that work every time',
      'Color psychology for masculine dressing',
      'Fit rules and silhouettes',
      'Grooming alignment',
      'Gym body and clothing synergy',
    ],
  },
  {
    number: '05',
    title: 'The Discipline Framework',
    subtitle: 'Execution & Sustainability',
    promise: 'Turn the glow-up into a permanent identity.',
    outcome: 'Lock in a 30-day execution plan so your glow-up doesn\'t fade after two weeks of motivation.',
    description:
      'This book ensures the transformation becomes permanent — not a short-term phase. The system only works if this layer is in place.',
    features: [
      'Discipline vs motivation — the real difference',
      'Daily non-negotiables',
      'Habit stacking for consistency',
      'Mental toughness training',
      '30-day execution plan',
    ],
  },
];

export default function EbookSystem({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative overflow-hidden"
      style={{ padding: 'clamp(4rem, 8vw, 7rem) 1.25rem', background: '#06070A' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest mb-6"
            style={{
              color: '#4DB8D4',
              background: 'rgba(77,184,212,0.06)',
              border: '1px solid rgba(77,184,212,0.16)',
            }}
          >
            The System
          </div>
          <h2
            className="font-display font-semibold text-h2"
            style={{ color: '#F0F0F0', maxWidth: 640, margin: '0 auto 1rem' }}
          >
            The 5 Structural Layers of Masculine Authority
          </h2>
          <p className="text-body-lg max-w-prose mx-auto mb-4" style={{ color: '#C8D0D8' }}>
            Identity → Face → Presence → Aesthetic → Discipline
          </p>
          <p className="text-sm max-w-prose mx-auto" style={{ color: '#8A939E' }}>
            Without The Attraction Code, everything feels random. Without The Discipline Framework, results don&apos;t stick.
          </p>
        </motion.div>

        {/* Ebook cards */}
        <div className="flex flex-col gap-4 md:gap-5">
          {ebooks.map((ebook, index) => (
            <EbookCard key={ebook.number} {...ebook} index={index} />
          ))}
        </div>

        {/* Mid-page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="https://whop.com/checkout/plan_EjHj4OUPVTK3W/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-primary-lg"
          >
            Start the 5-Pillar Upgrade
          </a>
        </motion.div>
      </div>
    </section>
  );
}
