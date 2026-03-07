import React from 'react';
import { motion } from 'framer-motion';

interface StatProps {
  value: string;
  label: string;
  suffix?: string;
  color?: 'cyan' | 'purple' | 'pink';
}

export default function Stat({
  value,
  label,
  suffix = '',
  color = 'cyan',
}: StatProps) {
  const colorClasses = {
    cyan: 'text-cyan',
    purple: 'text-purple',
    pink: 'text-pink',
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`text-4xl md:text-5xl font-bold ${colorClasses[color]}`}>
        {value}{suffix}
      </div>
      <div className="text-muted mt-2">{label}</div>
    </motion.div>
  );
}
