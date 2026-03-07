'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Identity',
    description:
      'Download the system and start with The Attraction Code. Understanding why attraction works is the foundation — without it, everything else feels random.',
  },
  {
    number: '02',
    title: 'Face',
    description:
      'Apply Face Card Mastery. Fix grooming, skin, haircut, and eye contact. This is the fastest visible feedback loop — results show up immediately.',
  },
  {
    number: '03',
    title: 'Presence',
    description:
      'Work through Presence Engineering. Fix posture, movement, and how you physically take up space. Look more dominant in person and in photos.',
  },
  {
    number: '04',
    title: 'Aesthetic',
    description:
      'Build your look with Modern Masculine Aesthetic. Follow the outfit formulas, colour rules, and grooming alignment. No more guessing what to wear.',
  },
  {
    number: '05',
    title: 'Discipline',
    description:
      'Lock it in with The Discipline Framework. Follow the 30-day execution plan and daily non-negotiables so results become permanent — not a short-term phase.',
  },
];

export default function SystemTimeline({ id }: { id?: string }) {
  return (
    <section
      id={id}
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
            How The System Works
          </h2>
          <p className="text-body-lg max-w-prose mx-auto" style={{ color: '#C8D0D8' }}>
            Follow the sequence: Identity → Face → Presence → Aesthetic → Discipline. Order matters — each step builds on the last.
          </p>
        </motion.div>

        {/* Timeline — vertical on mobile, 2-col grid on lg */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-14 items-start">
          {/* Left: visual connector */}
          <div className="hidden lg:block sticky top-32">
            <svg
              viewBox="0 0 200 460"
              className="w-full h-auto"
              style={{ maxWidth: 180 }}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {steps.map((step, i) => {
                const y = 30 + i * 88;
                return (
                  <g key={step.number}>
                    {/* Vertical connector */}
                    {i < steps.length - 1 && (
                      <motion.line
                        x1="40" y1={y + 20} x2="40" y2={y + 68}
                        stroke="rgba(77,184,212,0.2)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      />
                    )}
                    {/* Circle */}
                    <motion.circle
                      cx="40" cy={y}
                      r="14"
                      fill="rgba(14,16,21,0.9)"
                      stroke="rgba(77,184,212,0.4)"
                      strokeWidth="1"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    />
                    <motion.text
                      x="40" y={y + 4.5}
                      textAnchor="middle"
                      fill="#4DB8D4"
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="700"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                    >
                      {step.number}
                    </motion.text>
                    {/* Title alongside */}
                    <motion.text
                      x="68" y={y + 5}
                      fill="#F0F0F0"
                      fontSize="13"
                      fontFamily="system-ui, sans-serif"
                      fontWeight="600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + i * 0.08 }}
                    >
                      {step.title}
                    </motion.text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right: step details */}
          <div className="flex flex-col gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="rounded-lg p-5 md:p-6 flex gap-4 md:gap-5"
                style={{
                  background: 'rgba(14,16,21,0.65)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                  transition: { duration: 0.2 },
                }}
              >
                {/* Dot — mobile only (lg hidden via SVG) */}
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center lg:hidden"
                  style={{
                    background: 'rgba(14,16,21,0.9)',
                    border: '1px solid rgba(77,184,212,0.4)',
                    marginTop: 2,
                  }}
                >
                  <span className="font-mono text-[10px] font-bold" style={{ color: '#4DB8D4' }}>
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <h4 className="font-heading font-semibold text-h3" style={{ color: '#F0F0F0' }}>
                    {step.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#C8D0D8' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
