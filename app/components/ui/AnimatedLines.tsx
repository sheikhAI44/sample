'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* Diagonal + horizontal lines that animate in on mount */
export default function AnimatedLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 900"
    >
      {/* Horizontal lines */}
      {[120, 240, 380, 520, 660, 780].map((y, i) => (
        <motion.line
          key={`h-${y}`}
          x1="0"
          y1={y}
          x2="1440"
          y2={y}
          stroke="rgba(77,184,212,0.07)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.1 + i * 0.12, ease: 'easeOut' }}
        />
      ))}

      {/* Vertical lines */}
      {[180, 360, 540, 720, 900, 1080, 1260].map((x, i) => (
        <motion.line
          key={`v-${x}`}
          x1={x}
          y1="0"
          x2={x}
          y2="900"
          stroke="rgba(77,184,212,0.05)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
        />
      ))}

      {/* Diagonal accent lines — top-left to bottom-right */}
      {[
        { x1: 0, y1: 300, x2: 600, y2: 0 },
        { x1: 0, y1: 700, x2: 900, y2: 0 },
        { x1: 200, y1: 900, x2: 1100, y2: 0 },
        { x1: 600, y1: 900, x2: 1440, y2: 160 },
        { x1: 900, y1: 900, x2: 1440, y2: 430 },
      ].map((d, i) => (
        <motion.line
          key={`d-${i}`}
          x1={d.x1}
          y1={d.y1}
          x2={d.x2}
          y2={d.y2}
          stroke="rgba(77,184,212,0.055)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.6 + i * 0.18, ease: 'easeOut' }}
        />
      ))}

      {/* Glowing accent diagonal — stands out slightly */}
      <motion.line
        x1="0"
        y1="520"
        x2="1440"
        y2="100"
        stroke="rgba(77,184,212,0.14)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.4, delay: 0.4, ease: 'easeOut' }}
      />

      {/* Violet accent diagonal */}
      <motion.line
        x1="1440"
        y1="600"
        x2="400"
        y2="900"
        stroke="rgba(139,126,200,0.1)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.8, ease: 'easeOut' }}
      />

      {/* Intersection dots — where diagonals cross horizontal lines */}
      {[
        { cx: 360, cy: 380 },
        { cx: 720, cy: 240 },
        { cx: 1080, cy: 120 },
        { cx: 540, cy: 660 },
        { cx: 900, cy: 520 },
      ].map((dot, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={dot.cx}
          cy={dot.cy}
          r="2"
          fill="rgba(77,184,212,0.35)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 + i * 0.1, ease: 'easeOut' }}
        />
      ))}
    </svg>
  );
}
