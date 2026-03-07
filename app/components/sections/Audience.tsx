'use client';

import React from 'react';
import { motion } from 'framer-motion';

const included = [
  'You value systems over motivation',
  'You think structurally, not emotionally',
  'You want permanent transformation, not temporary results',
  'You understand that identity precedes behavior',
  'You prefer frameworks over generic advice',
  'You recognize status is engineered, not hoped for',
];

const excluded = [
  'You\'re looking for instant results with no real effort',
  'You rely entirely on external motivation to get started',
  'You prefer hype and inspiration over structured systems',
  'You believe transformation happens through mindset alone',
  'You want surface-level validation, not honest frameworks',
  'You\'re not ready to follow a process consistently',
];

export default function Audience() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: 'clamp(4rem, 8vw, 7rem) 1.25rem', background: '#0E1015' }}
    >
      <div className="max-w-6xl mx-auto">
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
            Who This System Is Built For
          </h2>
          <p className="text-body-lg max-w-prose mx-auto" style={{ color: '#C8D0D8' }}>
            The system works for men who are ready to follow a process. Check where you land.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {/* Included */}
          <motion.div
            className="rounded-xl p-6 md:p-8 flex flex-col gap-5"
            style={{
              background: 'rgba(14,16,21,0.7)',
              WebkitBackdropFilter: 'blur(10px)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(77,184,212,0.1)',
            }}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-semibold text-base" style={{ color: '#F0F0F0' }}>
              This is for you if
            </h3>
            <ul className="flex flex-col gap-3.5">
              {included.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <span
                    className="flex-shrink-0 font-bold mt-0.5 text-base leading-none"
                    style={{ color: '#4DB8D4' }}
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#C8D0D8' }}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Excluded */}
          <motion.div
            className="rounded-xl p-6 md:p-8 flex flex-col gap-5"
            style={{
              background: 'rgba(14,16,21,0.5)',
              WebkitBackdropFilter: 'blur(10px)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-semibold text-base" style={{ color: '#F0F0F0' }}>
              Not for you if
            </h3>
            <ul className="flex flex-col gap-3.5">
              {excluded.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <span
                    className="flex-shrink-0 font-bold mt-0.5 text-base leading-none"
                    style={{ color: '#8A939E' }}
                  >
                    ×
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#8A939E' }}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="text-center mt-10"
        >
          <p className="font-mono text-sm uppercase tracking-widest" style={{ color: '#4DB8D4' }}>
            If you&apos;re still here, you already know
          </p>
        </motion.div>
      </div>
    </section>
  );
}
