'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', label: 'Identity', desc: 'Mental Foundation' },
  { id: '02', label: 'Face', desc: 'First Impression' },
  { id: '03', label: 'Presence', desc: 'Physical Dominance' },
  { id: '04', label: 'Aesthetic', desc: 'Visual Status' },
  { id: '05', label: 'Discipline', desc: 'Execution' },
];

const STEEL = '#4DB8D4';
const STEEL_30 = 'rgba(77,184,212,0.3)';
const STEEL_15 = 'rgba(77,184,212,0.15)';
const BG_BOX = 'rgba(14,16,21,0.8)';
const TEXT_PRIMARY = '#F0F0F0';
const TEXT_MUTED = '#8A939E';

export default function SystemDiagram() {
  return (
    <div className="w-full" aria-label="Identity engineering system flow">
      {/* ── Desktop: compact horizontal SVG ── */}
      <div className="hidden sm:block">
        <svg
          viewBox="0 0 760 90"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          style={{ maxWidth: 620, display: 'block' }}
          role="img"
          aria-label="5-step system: Identity, Face, Presence, Aesthetic, Discipline"
        >
          <defs>
            <linearGradient id="sd-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={STEEL} stopOpacity="0.25" />
              <stop offset="50%" stopColor="#7D6FA3" stopOpacity="0.35" />
              <stop offset="100%" stopColor={STEEL} stopOpacity="0.25" />
            </linearGradient>
            <filter id="sd-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connecting lines */}
          {steps.map((_, i) => {
            if (i === steps.length - 1) return null;
            const x1 = 66 + i * 148;
            const x2 = x1 + 88;
            return (
              <motion.line
                key={`line-${i}`}
                x1={x1} y1="32" x2={x2} y2="32"
                stroke="url(#sd-line)"
                strokeWidth="1.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
              />
            );
          })}

          {/* Arrow heads */}
          {steps.map((_, i) => {
            if (i === steps.length - 1) return null;
            const x = 66 + i * 148 + 88;
            return (
              <motion.polygon
                key={`arrow-${i}`}
                points={`${x},32 ${x - 5},28 ${x - 5},36`}
                fill={STEEL}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.55 }}
                transition={{ duration: 0.3, delay: 0.9 + i * 0.12 }}
              />
            );
          })}

          {/* Boxes */}
          {steps.map((step, i) => {
            const cx = 33 + i * 148;
            return (
              <g key={step.id}>
                {/* Box */}
                <motion.rect
                  x={cx} y="10" width="66" height="44" rx="4"
                  fill={BG_BOX}
                  stroke={STEEL_30}
                  strokeWidth="0.8"
                  filter="url(#sd-glow)"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                />
                {/* Number */}
                <motion.text
                  x={cx + 33} y="28"
                  textAnchor="middle"
                  fill={STEEL}
                  fontSize="11"
                  fontFamily="monospace"
                  fontWeight="700"
                  letterSpacing="0.05em"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                >
                  {step.id}
                </motion.text>
                {/* Label */}
                <motion.text
                  x={cx + 33} y="42"
                  textAnchor="middle"
                  fill={TEXT_PRIMARY}
                  fontSize="9"
                  fontFamily="system-ui, sans-serif"
                  fontWeight="500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                >
                  {step.label}
                </motion.text>

                {/* Sub-label below box */}
                <motion.text
                  x={cx + 33} y="72"
                  textAnchor="middle"
                  fill={TEXT_MUTED}
                  fontSize="8"
                  fontFamily="monospace"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.45 + i * 0.08 }}
                >
                  {step.desc}
                </motion.text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* ── Mobile: compact horizontal pill row ── */}
      <div className="sm:hidden flex items-center gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
        {steps.map((step, i) => (
          <React.Fragment key={step.id}>
            <motion.div
              className="flex items-center gap-1.5 flex-shrink-0"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  borderRadius: 4,
                  background: BG_BOX,
                  border: `1px solid ${STEEL_15}`,
                  flexShrink: 0,
                }}
              >
                <div style={{ textAlign: 'center', lineHeight: 1 }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, color: STEEL, fontWeight: 700 }}>
                    {step.id}
                  </div>
                  <div style={{ fontFamily: 'system-ui', fontSize: 7, color: TEXT_PRIMARY, marginTop: 1 }}>
                    {step.label}
                  </div>
                </div>
              </div>
            </motion.div>
            {i < steps.length - 1 && (
              <div style={{ width: 8, height: 1, background: STEEL_30, flexShrink: 0 }} aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
