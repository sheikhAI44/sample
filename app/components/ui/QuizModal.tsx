'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHOOP_LINK = 'https://whop.com/checkout/plan_EjHj4OUPVTK3W/';

const questions = [
  {
    id: 1,
    question: "What's your biggest challenge right now?",
    options: [
      'My face / skin / grooming',
      'My style and how I dress',
      'My body language and presence',
      'My mindset and confidence',
    ],
  },
  {
    id: 2,
    question: 'How would you describe your current look?',
    options: [
      'I put in zero effort — just basic',
      'I try but nothing feels right',
      'Decent, but I want to level up',
      'Good — I just need a system',
    ],
  },
  {
    id: 3,
    question: 'What outcome matters most to you?',
    options: [
      'Be more attractive to women',
      'Command more respect from men',
      'Feel confident in any room',
      'All of the above',
    ],
  },
  {
    id: 4,
    question: 'How consistent are you with self-improvement?',
    options: [
      "I start strong then fall off",
      'I need a clear structure to stick with it',
      'I\'m fairly consistent already',
      'Very — I just need the right content',
    ],
  },
  {
    id: 5,
    question: "What's held you back from making changes until now?",
    options: [
      "I didn't know where to start",
      'Tried things that didn\'t work',
      'Inconsistency and motivation',
      'Cost / access to quality info',
    ],
  },
];

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [step, setStep] = useState(0); // 0 = not started, 1-5 = questions, 6 = result
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const currentQ = questions[step - 1];
  const progress = step === 0 ? 0 : (step / questions.length) * 100;

  function handleStart() {
    setStep(1);
    setSelected(null);
  }

  function handleSelect(option: string) {
    setSelected(option);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setStep(6);
    }
  }

  function handleClose() {
    setStep(0);
    setAnswers([]);
    setSelected(null);
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{
              background: 'rgba(6,7,10,0.88)',
              WebkitBackdropFilter: 'blur(8px)',
              backdropFilter: 'blur(8px)',
              willChange: 'opacity'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg mx-4"
              style={{
                background: 'rgba(14,16,21,0.97)',
                border: '1px solid rgba(77,184,212,0.18)',
                borderRadius: 16,
                overflow: 'hidden',
                willChange: 'transform',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
              initial={{ scale: 0.93, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 24 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Teal top bar */}
              <div
                style={{
                  height: 3,
                  background: 'linear-gradient(to right, #4DB8D4, #8B7EC8)',
                }}
              />

              {/* Progress bar (questions only) */}
              {step >= 1 && step <= questions.length && (
                <div style={{ height: 3, background: 'rgba(77,184,212,0.1)' }}>
                  <motion.div
                    style={{ height: '100%', background: '#4DB8D4' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
              )}

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4"
                style={{
                  color: '#8A939E',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 4,
                  lineHeight: 1,
                }}
                aria-label="Close"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div style={{ padding: '36px 36px 40px' }}>
                <AnimatePresence mode="wait">

                  {/* ── Intro screen ── */}
                  {step === 0 && (
                    <motion.div
                      key="intro"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.22 }}
                      style={{ textAlign: 'center' }}
                    >
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8,
                          borderRadius: 99,
                          padding: '6px 16px',
                          marginBottom: 20,
                          fontFamily: 'monospace',
                          fontSize: 11,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: '#4DB8D4',
                          background: 'rgba(77,184,212,0.08)',
                          border: '1px solid rgba(77,184,212,0.2)',
                        }}
                      >
                        Quick 5-Question Fit Check
                      </div>
                      <h2
                        style={{
                          fontFamily: 'var(--font-playfair), Georgia, serif',
                          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                          fontWeight: 600,
                          color: '#F0F0F0',
                          lineHeight: 1.25,
                          marginBottom: 12,
                        }}
                      >
                        Let&apos;s see where you&apos;re at.
                      </h2>
                      <p
                        style={{
                          color: '#8A939E',
                          fontSize: 14,
                          lineHeight: 1.7,
                          marginBottom: 32,
                          fontFamily: 'monospace',
                        }}
                      >
                        5 quick questions so the system actually fits your situation.
                        Takes 30 seconds.
                      </p>
                      <button
                        onClick={handleStart}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '14px 32px',
                          borderRadius: 8,
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: 'monospace',
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          background: 'linear-gradient(135deg, #4DB8D4 0%, #6DCDE6 100%)',
                          color: '#06070A',
                        }}
                      >
                        Start the Check
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </motion.div>
                  )}

                  {/* ── Questions ── */}
                  {step >= 1 && step <= questions.length && (
                    <motion.div
                      key={`q-${step}`}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.22 }}
                    >
                      {/* Step counter */}
                      <div
                        style={{
                          fontFamily: 'monospace',
                          fontSize: 11,
                          color: '#4DB8D4',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          marginBottom: 14,
                        }}
                      >
                        Question {step} of {questions.length}
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-playfair), Georgia, serif',
                          fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
                          fontWeight: 600,
                          color: '#F0F0F0',
                          lineHeight: 1.3,
                          marginBottom: 24,
                        }}
                      >
                        {currentQ.question}
                      </h3>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                        {currentQ.options.map((option) => {
                          const isSelected = selected === option;
                          return (
                            <button
                              key={option}
                              onClick={() => handleSelect(option)}
                              style={{
                                textAlign: 'left',
                                padding: '13px 16px',
                                borderRadius: 8,
                                border: `1px solid ${isSelected ? '#4DB8D4' : 'rgba(255,255,255,0.07)'}`,
                                background: isSelected ? 'rgba(77,184,212,0.1)' : 'rgba(255,255,255,0.02)',
                                cursor: 'pointer',
                                color: isSelected ? '#F0F0F0' : '#C8D0D8',
                                fontFamily: 'monospace',
                                fontSize: 13,
                                lineHeight: 1.5,
                                transition: 'all 0.15s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                              }}
                            >
                              <span
                                style={{
                                  width: 18,
                                  height: 18,
                                  borderRadius: '50%',
                                  border: `2px solid ${isSelected ? '#4DB8D4' : 'rgba(255,255,255,0.2)'}`,
                                  background: isSelected ? '#4DB8D4' : 'transparent',
                                  flexShrink: 0,
                                  display: 'inline-block',
                                }}
                              />
                              {option}
                            </button>
                          );
                        })}
                      </div>

                      <button
                        onClick={handleNext}
                        disabled={!selected}
                        style={{
                          width: '100%',
                          padding: '14px',
                          borderRadius: 8,
                          border: 'none',
                          cursor: selected ? 'pointer' : 'not-allowed',
                          fontFamily: 'monospace',
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          background: selected
                            ? 'linear-gradient(135deg, #4DB8D4 0%, #6DCDE6 100%)'
                            : 'rgba(255,255,255,0.06)',
                          color: selected ? '#06070A' : '#4A5260',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {step < questions.length ? 'Next →' : 'See My Result →'}
                      </button>
                    </motion.div>
                  )}

                  {/* ── Result screen ── */}
                  {step === 6 && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ textAlign: 'center' }}
                    >
                      {/* Check icon */}
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: '50%',
                          background: 'rgba(77,184,212,0.12)',
                          border: '1px solid rgba(77,184,212,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 20px',
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4DB8D4" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>

                      <h2
                        style={{
                          fontFamily: 'var(--font-playfair), Georgia, serif',
                          fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
                          fontWeight: 600,
                          color: '#F0F0F0',
                          lineHeight: 1.25,
                          marginBottom: 12,
                        }}
                      >
                        The system fits.
                      </h2>
                      <p
                        style={{
                          color: '#8A939E',
                          fontSize: 14,
                          lineHeight: 1.7,
                          marginBottom: 32,
                          fontFamily: 'monospace',
                          maxWidth: 360,
                          margin: '0 auto 32px',
                        }}
                      >
                        Based on your answers, the 5-Pillar system directly addresses where you are.
                        You&apos;re ready to start.
                      </p>

                      <button
                        onClick={handleClose}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 10,
                          padding: '15px 36px',
                          borderRadius: 8,
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: 'monospace',
                          fontSize: 14,
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          background: 'linear-gradient(135deg, #4DB8D4 0%, #6DCDE6 100%)',
                          color: '#06070A',
                          boxShadow: '0 0 28px rgba(77,184,212,0.35)',
                        }}
                      >
                        Start the 5-Pillar Upgrade
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <p
                        style={{
                          fontFamily: 'monospace',
                          fontSize: 11,
                          color: '#4A5260',
                          marginTop: 16,
                        }}
                      >
                        $8.99 one-time
                      </p>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
