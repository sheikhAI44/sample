import React from 'react';
import { motion } from 'framer-motion';

interface InclusionBoxProps {
  included: string[];
  excluded: string[];
}

export default function InclusionBox({ included, excluded }: InclusionBoxProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Included column */}
      <motion.div
        className="glass-luxury rounded-lg p-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-heading text-xl font-semibold text-text-primary mb-6">
          This is for you if
        </h3>
        <ul className="space-y-4">
          {included.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-steel text-xl flex-shrink-0 mt-0.5">✓</span>
              <span className="text-text-secondary text-sm leading-relaxed">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Excluded column */}
      <motion.div
        className="glass-luxury rounded-lg p-8"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-heading text-xl font-semibold text-text-primary mb-6">
          Not for you if
        </h3>
        <ul className="space-y-4">
          {excluded.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-text-muted text-xl flex-shrink-0 mt-0.5">×</span>
              <span className="text-text-muted text-sm leading-relaxed">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
