import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'steel' | 'violet' | 'none';
}

export default function Card({
  children,
  className = '',
  hover = true,
  glow = 'none',
}: CardProps) {
  const glowClasses = {
    steel: 'hover:shadow-steel-glow-sm',
    violet: 'hover:shadow-violet-glow',
    none: '',
  };

  return (
    <motion.div
      className={`
        glass-luxury
        rounded-lg p-6
        shadow-luxury
        ${hover ? 'hover:scale-[1.01] hover:border-steel/30 transition-all duration-200' : ''}
        ${glowClasses[glow]}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
