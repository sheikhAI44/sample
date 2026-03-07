'use client';

import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import EbookSystem from './components/sections/EbookSystem';
import SystemTimeline from './components/sections/SystemTimeline';
import WhyDifferent from './components/sections/WhyDifferent';
import Testimonials from './components/sections/Testimonials';
import Audience from './components/sections/Audience';
import Deliverables from './components/sections/Deliverables';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/Footer';
import QuizModal from './components/ui/QuizModal';

export default function Home() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Prevent browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll to top immediately and on load
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Ensure we're on the client side
    setIsClient(true);

    // Additional scroll to top after a brief delay to override any hash navigation
    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);

    // Open quiz after component mounts with a small delay for Chrome
    const quizTimer = setTimeout(() => {
      setQuizOpen(true);
    }, 300);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(quizTimer);
    };
  }, []);

  return (
    <main className="min-h-screen antialiased" style={{ background: '#06070A', color: '#F0F0F0', width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      {isClient && <QuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} />}
      <Navigation />
      <Hero />
      <Problem />
      <EbookSystem id="system" />
      <SystemTimeline id="framework" />
      <WhyDifferent id="difference" />
      <Testimonials />
      <Audience />
      <Deliverables />
      <FinalCTA id="access" />
      <Footer />
    </main>
  );
}
