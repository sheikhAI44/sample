'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../ui/Badge';
import Stat from '../ui/Stat';

export default function SocialProof() {
  const logos = ['Creator Co', 'Digital Hub', 'Growth Agency', 'Course Masters', 'Funnel Pro'];

  return (
    <section className="relative py-16 px-6 border-y border-border/30">
      <div className="max-w-7xl mx-auto">
        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted mb-6">Trusted by creators, communities & agencies</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo, idx) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-lg font-semibold text-muted/50 hover:text-cyan transition-colors"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <Stat value="+247%" label="Revenue increase" color="cyan" />
          <Stat value="20%" label="Lead conversion" color="purple" />
          <Stat value="3%" label="Click-through rate" color="pink" />
        </div>
      </div>
    </section>
  );
}
