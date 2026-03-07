'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { motion } from 'framer-motion';
import { Sparkles, PieChart, Shield, ArrowRight, Zap } from 'lucide-react';
import { useCalendly } from './CalendlyContext';
import { useEffect, useState } from 'react';

const pricingFeatures = [
  {
    icon: Sparkles,
    title: 'Zero Upfront Investment',
    description: 'We build your complete ebook selling system with no upfront fees. No risk to launch your digital product marketing.',
    highlight: '$0',
    highlightLabel: 'To Start',
  },
  {
    icon: PieChart,
    title: '70/30 Revenue Split',
    description: 'You keep 70% of all digital product sales. We earn 30%. Performance-based pricing aligned with your ebook selling success.',
    highlight: '70%',
    highlightLabel: 'You Keep',
  },
  {
    icon: Shield,
    title: 'Results-Driven Guarantee',
    description: 'If our digital product marketing doesn\'t drive sales, you pay nothing. Risk-free ebook selling partnership.',
    highlight: '100%',
    highlightLabel: 'Risk-Free',
  },
];

// Limited Time Offer Component with Loading Bar
function LimitedTimeOffer() {
  const [joinedCount, setJoinedCount] = useState(439);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    // Animate the number counting up
    const interval = setInterval(() => {
      setJoinedCount((prev) => {
        if (prev < 439) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const percentageFilled = (joinedCount / 500) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto mb-16"
    >
      <div className="relative glass rounded-2xl p-8 border border-accent/30 overflow-hidden">
        {/* Pulsing glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 animate-pulse" />

        <div className="relative z-10">
          {/* Flash Sale Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="text-accent" size={28} fill="currentColor" />
            </motion.div>
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white">
              Limited Time Flash Sale
            </h3>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="text-accent" size={28} fill="currentColor" />
            </motion.div>
          </div>

          {/* Price Display */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="text-gray-400 text-xl line-through">$89.99</span>
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="text-5xl lg:text-6xl font-heading font-bold gradient-text"
              >
                $8.99
              </motion.span>
              <span className="px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 text-red-300 text-sm font-bold">
                90% OFF
              </span>
            </div>
            <p className="text-gray-300 mt-3 text-lg">
              One-time payment • Lifetime access
            </p>
          </div>

          {/* Social Proof Counter */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-white font-semibold">
                <motion.span
                  key={joinedCount}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent text-2xl font-bold"
                >
                  {joinedCount}
                </motion.span>
                <span className="text-gray-300 ml-2">people joined</span>
              </p>
              <p className="text-gray-400 text-sm">
                Only <span className="text-accent font-bold">{500 - joinedCount}</span> spots left
              </p>
            </div>

            {/* Animated Loading Bar */}
            <div className="relative h-6 bg-navy-800 rounded-full overflow-hidden border border-accent/20">
              {/* Background pulse */}
              <motion.div
                className="absolute inset-0 bg-accent/5"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Progress bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentageFilled}%` }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="relative h-full bg-gradient-to-r from-accent via-accent/80 to-accent overflow-hidden"
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                />
              </motion.div>

              {/* Percentage text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isAnimating ? 1 : 0 }}
                  className="text-white font-bold text-sm drop-shadow-lg"
                >
                  {percentageFilled.toFixed(0)}% claimed
                </motion.span>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <motion.div
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-center"
          >
            <p className="text-accent font-semibold text-lg">
              ⚡ First 500 users only • Offer expires soon!
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Price returns to $89.99 after {500 - joinedCount} more sign-ups
            </p>
          </motion.div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-tr-full blur-2xl" />
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  const { openModal } = useCalendly();

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              Digital Product Marketing Pricing
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Performance-Based{' '}
              <span className="gradient-text">Ebook Marketing Services</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              No upfront costs for our digital product marketing services.
              We only win when your ebooks and digital products sell. It&apos;s that simple.
            </p>
          </AnimatedSection>

        </div>

        {/* Limited Time Offer with Loading Bar */}
        <LimitedTimeOffer />

        {/* Pricing Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingFeatures.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative group h-full"
              >
                <div className="relative h-full glass rounded-2xl p-8 border border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden">
                  {/* Background highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <feature.icon className="text-accent" size={28} />
                    </div>
                    
                    {/* Highlight Number */}
                    <div className="mb-4">
                      <span className="text-4xl lg:text-5xl font-heading font-bold gradient-text">
                        {feature.highlight}
                      </span>
                      <span className="block text-sm text-gray-400 mt-1">
                        {feature.highlightLabel}
                      </span>
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="text-xl font-heading font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass rounded-2xl p-6 sm:p-8">
              <div className="text-center sm:text-left sm:pr-8 sm:border-r border-white/10">
                <p className="text-white font-semibold text-lg mb-1">
                  Ready to sell digital products profitably?
                </p>
                <p className="text-gray-400 text-sm">
                  Book a free marketing audit and discover your ebook selling potential.
                </p>
              </div>
              <button
                onClick={openModal}
                className="btn-primary inline-flex items-center gap-2 group whitespace-nowrap"
              >
                Get Free Marketing Audit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


