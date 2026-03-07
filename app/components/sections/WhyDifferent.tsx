'use client';

import React from 'react';
import { motion } from 'framer-motion';

const comparisons = [
  {
    generic: 'Motivational content and hype',
    system: 'Step-by-step frameworks you can actually implement',
  },
  {
    generic: 'Random tactics with no structure',
    system: '5 layers that build on each other in a set sequence',
  },
  {
    generic: 'Results that fade after motivation runs out',
    system: 'Permanent transformation locked in by The Discipline Framework',
  },
  {
    generic: 'Needs community support to keep going',
    system: 'Self-contained system — works on your own, at your own pace',
  },
  {
    generic: 'Generic advice for everyone',
    system: 'Targeted protocols for men who think in systems',
  },
];

export default function WhyDifferent({ id }: { id?: string }) {
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
          <h2
            className="font-display font-semibold text-h2 mb-4"
            style={{ color: '#F0F0F0', maxWidth: 560, margin: '0 auto 1rem' }}
          >
            Why This System Is Different
          </h2>
          <p className="text-body-lg max-w-prose mx-auto" style={{ color: '#C8D0D8' }}>
            Most approaches focus on motivation. This focuses on engineering.
          </p>
        </motion.div>

        {/* Comparison table */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Header row */}
          <div className="grid grid-cols-2">
            <div
              className="p-5 md:p-6"
              style={{ background: 'rgba(14,16,21,0.8)', borderRight: '1px solid rgba(255,255,255,0.05)' }}
            >
              <span
                className="font-mono text-xs uppercase tracking-widest font-semibold"
                style={{ color: '#8A939E' }}
              >
                Generic Advice
              </span>
            </div>
            <div className="p-5 md:p-6" style={{ background: 'rgba(14,16,21,0.8)' }}>
              <span
                className="font-mono text-xs uppercase tracking-widest font-semibold"
                style={{ color: '#4DB8D4' }}
              >
                System Advantage
              </span>
            </div>
          </div>

          {/* Data rows */}
          {comparisons.map((row, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-2"
              style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div
                className="p-5 md:p-6"
                style={{
                  background: 'rgba(14,16,21,0.4)',
                  borderRight: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <p className="text-sm leading-relaxed" style={{ color: '#8A939E' }}>
                  {row.generic}
                </p>
              </div>
              <div className="p-5 md:p-6" style={{ background: 'rgba(14,16,21,0.6)' }}>
                <p className="text-sm leading-relaxed font-medium" style={{ color: '#F0F0F0' }}>
                  {row.system}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-sm font-mono" style={{ color: '#8A939E' }}>
            Systems over motivation. Structure over inspiration. Results that stick.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
