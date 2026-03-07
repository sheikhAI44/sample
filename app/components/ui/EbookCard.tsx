import React from 'react';
import { motion } from 'framer-motion';

interface EbookCardProps {
  number: string;
  title: string;
  subtitle: string;
  promise: string;
  outcome: string;
  description: string;
  features: string[];
  index: number;
}

export default function EbookCard({
  number,
  title,
  subtitle,
  promise,
  outcome,
  description,
  features,
  index,
}: EbookCardProps) {
  return (
    <motion.div
      className="group relative rounded-lg p-6 md:p-8 transition-all duration-300"
      style={{
        background: 'rgba(14,16,21,0.7)',
        WebkitBackdropFilter: 'blur(12px)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderLeft: '3px solid rgba(77,184,212,0.15)',
      }}
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{
        y: -3,
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        borderLeftColor: 'rgba(77,184,212,0.6)',
        transition: { duration: 0.2 },
      }}
    >
      {/* Number — top right, decorative */}
      <div
        className="absolute top-6 right-6 font-mono font-light select-none"
        style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', color: '#F0F0F0', opacity: 0.05 }}
        aria-hidden="true"
      >
        {number}
      </div>

      <div className="flex flex-col gap-4 md:gap-5">
        {/* Header */}
        <div>
          <h3
            className="font-heading font-semibold text-h3 mb-1.5"
            style={{ color: '#F0F0F0', paddingRight: '3rem' }}
          >
            {title}
          </h3>
          <p
            className="font-mono text-xs uppercase tracking-wider"
            style={{ color: '#4DB8D4' }}
          >
            {subtitle}
          </p>
        </div>

        <div
          className="rounded px-3 py-2 text-sm font-medium"
          style={{
            background: 'rgba(77,184,212,0.06)',
            border: '1px solid rgba(77,184,212,0.14)',
            color: '#4DB8D4',
          }}
        >
          {promise}
        </div>

        <p
          className="text-sm md:text-base leading-relaxed font-medium"
          style={{ color: '#F0F0F0', maxWidth: '72ch' }}
        >
          {outcome}
        </p>

        <p
          className="text-sm md:text-base leading-relaxed"
          style={{ color: '#C8D0D8', maxWidth: '72ch' }}
        >
          {description}
        </p>

        <ul className="flex flex-col gap-2 pt-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0" style={{ color: '#4DB8D4' }}>•</span>
              <span className="text-sm leading-relaxed" style={{ color: '#C8D0D8' }}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
