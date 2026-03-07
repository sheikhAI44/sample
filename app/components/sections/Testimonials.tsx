'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "I've been applying your frameworks for 6 months. Life-changing.",
    handle: '@marcus.elevates',
  },
  {
    quote: "This is the first time masculine advice actually feels structured.",
    handle: '@jaden_builds',
  },
  {
    quote: "Need all of this in ebook form.",
    handle: '@ryanm.official',
  },
  {
    quote: "The presence stuff alone changed how people treat me at work. Didn't expect it to be this practical.",
    handle: '@keano.gw',
  },
];

export default function Testimonials() {
  return (
    <section
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
          className="text-center mb-12 md:mb-14"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest mb-6"
            style={{
              color: '#4DB8D4',
              background: 'rgba(77,184,212,0.06)',
              border: '1px solid rgba(77,184,212,0.16)',
            }}
          >
            473K Followers
          </div>
          <h2
            className="font-display font-semibold text-h2"
            style={{ color: '#F0F0F0', maxWidth: 560, margin: '0 auto 1rem' }}
          >
            What the audience says
          </h2>
          <p className="text-body-lg max-w-prose mx-auto" style={{ color: '#C8D0D8' }}>
            From the GlowCush Instagram comments. Real men, real results.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="rounded-xl p-6 flex flex-col gap-4"
              style={{
                background: 'rgba(14,16,21,0.7)',
                WebkitBackdropFilter: 'blur(12px)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              {/* Quote mark */}
              <span
                className="font-display font-semibold select-none"
                style={{ fontSize: '2rem', color: '#4DB8D4', opacity: 0.4, lineHeight: 1 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-sm md:text-base leading-relaxed flex-1" style={{ color: '#F0F0F0' }}>
                {t.quote}
              </p>
              <p className="font-mono text-xs" style={{ color: '#8A939E' }}>
                {t.handle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
