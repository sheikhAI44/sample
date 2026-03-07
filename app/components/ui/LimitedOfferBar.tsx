'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const STEEL = '#4DB8D4';
const STEEL_15 = 'rgba(77,184,212,0.15)';
const TEXT_PRIMARY = '#F0F0F0';
const TEXT_MUTED = '#8A939E';

export default function LimitedOfferBar() {
  const [joinedCount, setJoinedCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    let current = 0;
    const target = 439;
    const increment = Math.ceil(target / 50);

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setJoinedCount(target);
        clearInterval(interval);
      } else {
        setJoinedCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const percentageFilled = (joinedCount / 500) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="w-full"
    >
      <div
        className="relative rounded-lg p-4"
        style={{
          background: 'rgba(14,16,21,0.6)',
          border: `1px solid ${STEEL_15}`,
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Pulsing background */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{ background: `linear-gradient(90deg, transparent, ${STEEL_15}, transparent)` }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <div className="relative z-10">
          {/* Header with price */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Zap size={16} style={{ color: STEEL }} fill={STEEL} />
              </motion.div>
              <span
                className="font-mono text-xs sm:text-sm font-bold"
                style={{ color: TEXT_PRIMARY }}
              >
                LIMITED FLASH SALE
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span
                className="text-xs sm:text-sm line-through"
                style={{ color: TEXT_MUTED }}
              >
                $24.99
              </span>
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="font-bold text-lg sm:text-xl"
                style={{ color: STEEL }}
              >
                $8.99
              </motion.span>
              <span
                className="px-2 py-0.5 rounded text-xs font-bold"
                style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#FCA5A5',
                }}
              >
                64% OFF
              </span>
            </div>
          </div>

          {/* Social proof + spots left */}
          <div className="flex items-center justify-between mb-3 text-xs sm:text-sm">
            <div style={{ color: TEXT_PRIMARY }}>
              <motion.span
                key={joinedCount}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-bold"
                style={{ color: STEEL }}
              >
                {joinedCount}
              </motion.span>
              <span style={{ color: TEXT_MUTED }} className="ml-1">people joined</span>
            </div>
            <span style={{ color: TEXT_MUTED }}>
              Only <span className="font-bold" style={{ color: STEEL }}>{500 - joinedCount}</span> spots left
            </span>
          </div>

          {/* Animated loading bar */}
          <div
            className="relative rounded-full overflow-hidden mb-3"
            style={{
              height: 20,
              background: 'rgba(10, 12, 18, 0.8)',
              border: `1px solid ${STEEL_15}`,
            }}
          >
            {/* Pulsing background */}
            <motion.div
              className="absolute inset-0"
              style={{ background: STEEL_15 }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Progress fill */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentageFilled}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative h-full"
              style={{
                background: `linear-gradient(90deg, ${STEEL}, rgba(125,111,163,0.8), ${STEEL})`,
              }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
            </motion.div>

            {/* Percentage text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isAnimating ? 1 : 0 }}
                className="font-mono text-xs font-bold"
                style={{
                  color: TEXT_PRIMARY,
                  textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                }}
              >
                {percentageFilled.toFixed(0)}% CLAIMED
              </motion.span>
            </div>
          </div>

          {/* Urgency message */}
          <motion.div
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-center text-xs"
            style={{ color: STEEL }}
          >
            ⚡ First 500 users only • Price returns to $24.99 soon
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
