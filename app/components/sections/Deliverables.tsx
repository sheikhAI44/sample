'use client';

import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { label: 'The Attraction Code', detail: 'Mental & psychological foundation — how attraction, respect, and status are actually formed' },
  { label: 'Face Card Mastery', detail: 'First impression optimisation — facial presence, grooming, and expression control' },
  { label: 'Presence Engineering', detail: 'Physical dominance and perceived power — posture, movement, and silhouette strategy' },
  { label: 'Modern Masculine Aesthetic', detail: 'Visual status and consistency — outfit formulas, color psychology, and grooming alignment' },
  { label: 'The Discipline Framework', detail: 'Execution and sustainability — habit stacking, daily non-negotiables, and 30-day plan' },
  { label: 'Permanent access', detail: 'Download once, own forever — no platform dependency' },
  { label: 'Lifetime updates', detail: 'All future revisions included at no extra cost' },
];

export default function Deliverables() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: 'clamp(4rem, 8vw, 7rem) 1.25rem', background: '#06070A' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2
            className="font-display font-semibold text-h2 mb-3"
            style={{ color: '#F0F0F0' }}
          >
            What&apos;s Included
          </h2>
          <p className="text-body-lg" style={{ color: '#C8D0D8' }}>
            No fluff. Just deliverables.
          </p>
        </motion.div>

        {/* Checklist card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl p-6 md:p-10"
          style={{
            background: 'rgba(14,16,21,0.75)',
            WebkitBackdropFilter: 'blur(12px)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <ul className="flex flex-col gap-5">
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.09 }}
              >
                {/* Check icon */}
                <div
                  className="flex-shrink-0 w-7 h-7 rounded flex items-center justify-center mt-0.5"
                  style={{
                    background: 'rgba(77,184,212,0.1)',
                    border: '1px solid rgba(77,184,212,0.3)',
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4DB8D4" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="font-medium text-base" style={{ color: '#F0F0F0' }}>
                    {item.label}
                  </span>
                  <span className="text-sm" style={{ color: '#8A939E' }}>
                    {item.detail}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
