'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA({ id }: { id?: string }) {
  return (
    <>
    <section
      id={id}
      className="relative overflow-hidden"
      style={{ padding: 'clamp(5rem, 12vw, 9rem) 1.25rem' }}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: '#06070A' }} aria-hidden="true" />

      {/* Radial glow — pointer-events-none, no bleed */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(700px, 80vw)',
          height: 'min(400px, 50vw)',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(77,184,212,0.07) 0%, rgba(125,111,163,0.05) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex flex-col items-center gap-8 md:gap-10"
        >
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 font-mono text-xs uppercase tracking-widest"
            style={{
              color: '#4DB8D4',
              background: 'rgba(77,184,212,0.07)',
              border: '1px solid rgba(77,184,212,0.18)',
            }}
          >
            Complete System Access
          </div>

          {/* Main headline — clamp prevents mobile overflow */}
          <h2
            className="font-display font-semibold"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#F0F0F0',
              maxWidth: 760,
            }}
          >
            Status is Engineered.{' '}
            <span className="gradient-text">Not Hoped For.</span>
          </h2>

          {/* Price card */}
          <motion.div
            className="rounded-xl px-10 py-7 inline-block"
            style={{
              background: 'rgba(14,16,21,0.8)',
              WebkitBackdropFilter: 'blur(12px)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div
              className="font-mono text-xs uppercase tracking-widest mb-2"
              style={{ color: '#8A939E' }}
            >
              Full system — one-time payment
            </div>
            <div className="flex items-center justify-center gap-3 mb-1">
              <div
                className="font-display font-semibold"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: '#8A939E',
                  lineHeight: 1,
                  textDecoration: 'line-through',
                  opacity: 0.5
                }}
              >
                $24.99
              </div>
              <div
                className="font-display font-semibold"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#F0F0F0', lineHeight: 1 }}
              >
                $8.99
              </div>
            </div>
            <div
              className="font-mono text-xs mt-3 mb-2"
              style={{ color: '#4DB8D4' }}
            >
              Limited Time Offer — First 500 Users Only
            </div>
            <div
              className="font-mono text-xs"
              style={{ color: '#8A939E' }}
            >
              <span style={{ color: '#F0F0F0', fontWeight: 600 }}>439/500</span> spots claimed
            </div>
            <div
              className="font-mono text-xs mt-3"
              style={{ color: '#8A939E' }}
            >
              Less than one haircut or one night out.
            </div>
          </motion.div>

          {/* Value stack */}
          <p className="font-mono text-sm" style={{ color: '#8A939E' }}>
            5 core ebooks · 30-day execution plan · Lifetime updates · One-time payment · No subscriptions
          </p>

          {/* CTA button */}
          <a
            href="https://whop.com/checkout/plan_EjHj4OUPVTK3W/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-primary-lg"
          >
            Start the 5-Pillar Upgrade
          </a>

          {/* Guarantee block */}
          <div
            className="rounded-xl px-8 py-5 max-w-lg text-center"
            style={{
              background: 'rgba(14,16,21,0.6)',
              border: '1px solid rgba(77,184,212,0.12)',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: '#C8D0D8' }}>
              Go through the system. If you don&apos;t feel a measurable upgrade in how you&apos;re perceived in 30 days, email us for a refund.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
