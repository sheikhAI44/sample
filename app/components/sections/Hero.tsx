'use client';

import React from 'react';
import { motion } from 'framer-motion';
import EbookMockups from '../ui/EbookMockups';
import SystemDiagram from '../ui/SystemDiagram';
import AnimatedLines from '../ui/AnimatedLines';
import LimitedOfferBar from '../ui/LimitedOfferBar';

export default function Hero() {
  return (
    <>
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-noise"
      style={{ paddingTop: 'clamp(64px, 15vw, 72px)' }} /* exact nav height — no overlap */
    >
      {/* ─── Background Layer (pointer-events-none, no horizontal bleed) ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, #06070A 0%, #0D1018 40%, #0A0C12 100%)',
          }}
        />
        {/* Orb 1 — top left */}
        <div
          className="absolute animate-float-orb"
          style={{
            top: '8%',
            left: '4%',
            width: 'min(480px, 38vw)',
            height: 'min(480px, 38vw)',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(77,184,212,0.09) 0%, transparent 70%)',
            filter: 'blur(48px)',
          }}
        />
        {/* Orb 2 — bottom right */}
        <div
          className="absolute animate-float-orb-delay"
          style={{
            bottom: '10%',
            right: '4%',
            width: 'min(380px, 32vw)',
            height: 'min(380px, 32vw)',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(125,111,163,0.09) 0%, transparent 70%)',
            filter: 'blur(56px)',
          }}
        />
        {/* Orb 3 — center accent */}
        <div
          className="absolute"
          style={{
            top: '35%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(600px, 60vw)',
            height: 'min(300px, 30vw)',
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse, rgba(77,184,212,0.04) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Grid */}
        <div className="absolute inset-0 bg-grid-subtle opacity-60" />
        {/* Animated lines */}
        <AnimatedLines />
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-5 md:px-8 py-12 sm:py-16 md:py-24" style={{ maxWidth: '1280px' }}>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* LEFT COLUMN: text */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10 w-full" style={{ maxWidth: '100%', overflow: 'hidden' }}>

            {/* System Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SystemDiagram />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="flex flex-col gap-4"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 font-mono uppercase tracking-wider self-start"
                style={{
                  color: '#4DB8D4',
                  background: 'rgba(77,184,212,0.06)',
                  border: '1px solid rgba(77,184,212,0.16)',
                  fontSize: 'clamp(9px, 2vw, 12px)',
                  maxWidth: '100%',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                <span className="hidden sm:inline">5-step system: Identity → Face → Presence → Aesthetic → Discipline</span>
                <span className="sm:hidden">5-STEP SYSTEM</span>
              </div>
              <h1
                className="font-display font-semibold text-display"
                style={{
                  color: '#F0F0F0',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  hyphens: 'auto',
                  maxWidth: '100%',
                  width: '100%'
                }}
              >
                Fix the 5 pillars that decide how attractive and respected you are.
              </h1>
              <p
                className="text-body-lg"
                style={{
                  color: '#C8D0D8',
                  maxWidth: '100%',
                  width: '100%'
                }}
              >
                A step-by-step system to upgrade your face, presence, style, and discipline in 30 days — without relying on motivation.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                href="https://whop.com/checkout/plan_EjHj4OUPVTK3W/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
                style={{
                  padding: 'clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)',
                  fontSize: 'clamp(14px, 3.5vw, 18px)',
                  whiteSpace: 'normal',
                  minHeight: 'auto'
                }}
              >
                Start the 5-Pillar Upgrade
              </a>
              <a
                href="#system"
                className="btn-outline text-center"
                style={{
                  padding: 'clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)',
                  fontSize: 'clamp(14px, 3.5vw, 18px)',
                  whiteSpace: 'normal',
                  minHeight: 'auto'
                }}
              >
                Explore Framework
              </a>
            </motion.div>

            {/* IG-aligned bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-2.5 w-full"
            >
              {[
                'Kill habits that ruin your facial attractiveness.',
                'Look taller and more dominant without changing your genetics.',
                'Build a masculine aesthetic that actually fits you.',
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-start gap-2 font-mono w-full"
                  style={{
                    color: '#8A939E',
                    fontSize: 'clamp(11px, 3vw, 14px)',
                    lineHeight: 1.6,
                    maxWidth: '100%'
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                    style={{ background: '#4DB8D4' }}
                  />
                  <span style={{ flex: 1, wordBreak: 'break-word', overflowWrap: 'break-word' }}>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN: ebook mockups + limited offer */}
          <div className="flex flex-col gap-12 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative mb-4"
              style={{ zIndex: 1 }}
            >
              <EbookMockups />

              {/* Floating badge — desktop only */}
              <motion.div
                className="absolute hidden lg:flex items-center gap-2 rounded-lg px-4 py-2.5"
                style={{
                  top: '-20px',
                  right: '-8px',
                  background: 'rgba(14, 16, 21, 0.85)',
                  WebkitBackdropFilter: 'blur(12px)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(77, 184, 212, 0.2)',
                  zIndex: 20,
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: '#4DB8D4' }}
                />
                <span className="font-mono text-xs" style={{ color: '#F0F0F0' }}>
                  System Active
                </span>
              </motion.div>
            </motion.div>

            {/* Limited Offer Bar - positioned below mockups with higher z-index */}
            <div className="mt-4" style={{ position: 'relative', zIndex: 15 }}>
              <LimitedOfferBar />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5"
          style={{ color: '#8A939E' }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.15em]">Scroll</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
    </>
  );
}
