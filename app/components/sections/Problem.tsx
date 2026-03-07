'use client';

import React from 'react';
import { motion } from 'framer-motion';

const failures = [
  {
    title: 'Generic Advice',
    description:
      'Surface-level tips that provide no structural framework. No implementation system.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Temporary Results',
    description:
      'Short-term motivation without permanent identity transformation. Results fade.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: 'No System',
    description:
      'Random tactics with no step-by-step structure. No layered progression.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: 'clamp(4rem, 8vw, 7rem) 1.25rem', background: '#0E1015' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Social proof authority strip */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 md:mb-16 py-5 rounded-xl"
          style={{
            background: 'rgba(14,16,21,0.6)',
            border: '1px solid rgba(77,184,212,0.1)',
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full" style={{ background: '#4DB8D4' }} />
            <span className="font-mono text-sm font-semibold" style={{ color: '#F0F0F0' }}>473,000+ men follow GlowCush</span>
          </div>
          <div className="hidden sm:block w-px h-5" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full" style={{ background: '#4DB8D4' }} />
            <span className="font-mono text-sm font-semibold" style={{ color: '#F0F0F0' }}>3,000+ inside The Glow Code</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-semibold text-h2 mb-4" style={{ color: '#F0F0F0', maxWidth: 560, margin: '0 auto 1rem' }}>
            Why Surface Tactics Fail
          </h2>
          <p className="text-body-lg max-w-prose mx-auto" style={{ color: '#C8D0D8' }}>
            Most advice gives you motivation with no step-by-step structure.
            It works for a week, then fades.
          </p>
        </motion.div>

        {/* Cards grid — responsive, no fixed widths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {failures.map((failure, index) => (
            <motion.div
              key={index}
              className="rounded-lg p-6 md:p-8 flex flex-col gap-4"
              style={{
                background: 'rgba(14,16,21,0.7)',
                WebkitBackdropFilter: 'blur(10px)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderTop: '2px solid rgba(77,184,212,0.15)',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{
                y: -4,
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                borderTopColor: 'rgba(77,184,212,0.4)',
                transition: { duration: 0.2 },
              }}
            >
              <div style={{ color: '#4DB8D4', opacity: 0.7 }}>{failure.icon}</div>
              <h3 className="font-heading font-semibold text-h3" style={{ color: '#F0F0F0' }}>
                {failure.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#C8D0D8' }}>
                {failure.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition callout */}
        <motion.div
          className="text-center mt-10 md:mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div
            className="inline-block rounded-full px-6 py-3"
            style={{
              background: 'rgba(77,184,212,0.05)',
              border: '1px solid rgba(77,184,212,0.18)',
            }}
          >
            <p className="font-mono text-xs md:text-sm uppercase tracking-wider font-semibold" style={{ color: '#4DB8D4' }}>
              → Identity-first engineering is different
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
