'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ebooks = [
  {
    id: '01',
    title: 'The Attraction Code',
    subtitle: 'Mental Foundation',
    color: '#4DB8D4',
    accent: 'rgba(77, 184, 212, 0.12)',
    patternAngle: 135,
  },
  {
    id: '02',
    title: 'Face Card Mastery',
    subtitle: 'First Impression',
    color: '#7D6FA3',
    accent: 'rgba(125, 111, 163, 0.12)',
    patternAngle: 120,
  },
  {
    id: '03',
    title: 'Presence Engineering',
    subtitle: 'Physical Power',
    color: '#4DB8D4',
    accent: 'rgba(77, 184, 212, 0.15)',
    patternAngle: 150,
  },
  {
    id: '04',
    title: 'Modern Masculine Aesthetic',
    subtitle: 'Visual Status',
    color: '#7D6FA3',
    accent: 'rgba(125, 111, 163, 0.12)',
    patternAngle: 125,
  },
  {
    id: '05',
    title: 'The Discipline Framework',
    subtitle: 'Execution',
    color: '#4DB8D4',
    accent: 'rgba(77, 184, 212, 0.1)',
    patternAngle: 140,
  },
];

function BookCover({
  ebook,
  width = 168,
  height = 230,
}: {
  ebook: (typeof ebooks)[0];
  width?: number;
  height?: number;
}) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
        background: `linear-gradient(${ebook.patternAngle}deg, ${ebook.accent} 0%, rgba(14,16,21,0.96) 100%)`,
        border: `1px solid ${ebook.color}30`,
        flexShrink: 0,
      }}
    >
      {/* SVG dot pattern */}
      <svg
        width={width}
        height={height}
        style={{ position: 'absolute', top: 0, left: 0, opacity: 0.08 }}
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`dots-${ebook.id}`}
            x="0"
            y="0"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill={ebook.color} />
          </pattern>
        </defs>
        <rect width={width} height={height} fill={`url(#dots-${ebook.id})`} />
      </svg>

      {/* Top horizontal accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(to right, ${ebook.color}, transparent)`,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          padding: '18px 16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Number badge */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `${ebook.color}18`,
            border: `1px solid ${ebook.color}60`,
          }}
        >
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              fontWeight: 700,
              color: ebook.color,
              letterSpacing: '0.05em',
            }}
          >
            {ebook.id}
          </span>
        </div>

        {/* Title block */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 1.35,
              color: '#F0F0F0',
              marginBottom: 8,
            }}
          >
            {ebook.title}
          </h4>
          {/* Divider */}
          <div
            style={{
              height: 1,
              background: `linear-gradient(to right, ${ebook.color}80, transparent)`,
              marginBottom: 6,
            }}
          />
          <p
            style={{
              fontFamily: 'monospace',
              fontSize: 9,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: ebook.color,
              opacity: 0.8,
            }}
          >
            {ebook.subtitle}
          </p>
          <p
            style={{
              fontFamily: 'monospace',
              fontSize: 8,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#F0F0F0',
              opacity: 0.35,
              marginTop: 6,
            }}
          >
            GLOWCUSH SYSTEM
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EbookMockups() {
  return (
    <>
      {/* DESKTOP: overlapping fan layout */}
      <div
        className="hidden md:block"
        style={{
          position: 'relative',
          height: 380,
          width: '100%',
        }}
        aria-label="5 GlowCush ebooks displayed in a fan layout"
      >
        {ebooks.map((ebook, index) => {
          const mid = 2; // index of center book
          const offset = index - mid; // -2 to +2
          const rotation = offset * 11; // target rotation (degrees)
          const xPos = offset * 82; // horizontal spread from center
          const yArc = Math.abs(offset) * 14; // outer books sit slightly lower

          return (
            <motion.div
              key={ebook.id}
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                marginLeft: -92, // half of book width (184/2) to center-anchor
                transformOrigin: 'bottom center',
                zIndex: index === mid ? 5 : 5 - Math.abs(offset),
                cursor: 'pointer',
              }}
              /* Let framer-motion own ALL transform values — no CSS transform conflict */
              initial={{ opacity: 0, x: xPos, y: 80 + yArc, rotate: rotation, scale: 0.82 }}
              animate={{ opacity: 1, x: xPos, y: yArc, rotate: rotation, scale: 1 }}
              transition={{ duration: 0.75, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: yArc - 22,
                scale: 1.07,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.2, ease: 'easeOut' },
              }}
            >
              <BookCover ebook={ebook} width={184} height={256} />

              {/* Spine shadow */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 7,
                  height: '100%',
                  background: 'linear-gradient(to right, rgba(0,0,0,0.55), transparent)',
                  borderRadius: '8px 0 0 8px',
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* MOBILE: horizontal scroll carousel */}
      <div className="md:hidden ebook-scroll" role="list" aria-label="GlowCush ebook system">
        {ebooks.map((ebook, index) => (
          <motion.div
            key={ebook.id}
            className="ebook-scroll-item"
            role="listitem"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            <BookCover ebook={ebook} width={160} height={220} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
