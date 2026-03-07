import React from 'react';
import { motion } from 'framer-motion';

interface TimelineStep {
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

      {/* Steps */}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative pl-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            {/* Dot */}
            <div className="absolute left-0 top-1">
              <div className="w-8 h-8 rounded-full border-2 border-steel bg-charcoal-950 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-steel" />
              </div>
            </div>

            {/* Content */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-text-primary mb-2">
                {step.title}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
