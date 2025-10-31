"use client";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function Section({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string; }) {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } });
  }, [controls]);
  return (
    <motion.section id={id} initial={{ opacity: 0, y: 20 }} animate={controls} className={className}>
      {children}
    </motion.section>
  );
}

