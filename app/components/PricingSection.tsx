'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { motion } from 'framer-motion';
import { Sparkles, PieChart, Shield, ArrowRight } from 'lucide-react';

const pricingFeatures = [
  {
    icon: Sparkles,
    title: 'No Upfront Cost',
    description: 'We handle the entire setup. You risk time, not cash. Zero investment required to get started.',
    highlight: '$0',
    highlightLabel: 'To Start',
  },
  {
    icon: PieChart,
    title: '70/30 Revenue Split',
    description: 'You keep 70% of newly generated revenue. We take 30%. Fair, transparent, and aligned with your success.',
    highlight: '70%',
    highlightLabel: 'You Keep',
  },
  {
    icon: Shield,
    title: 'Results or You Don\'t Pay',
    description: 'If we don\'t produce outcomes, you owe nothing. Our incentives are 100% aligned with your growth.',
    highlight: '100%',
    highlightLabel: 'Risk-Free',
  },
];

export default function PricingSection() {
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
              Partnership Model
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Performance-Based{' '}
              <span className="gradient-text">Pricing</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We don&apos;t charge setup fees. We don&apos;t do retainers. 
              We only win when you win. It&apos;s that simple.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-8 w-full flex justify-center">
              <div className="inline-block bg-blue-500/10 border border-blue-400/20 rounded-full px-6 py-2">
                <p className="text-sm font-medium text-blue-200 text-center">
                  Limited Offer: This performance-based pricing is guaranteed for the next 10 clients only.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

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
                  Ready to start your partnership?
                </p>
                <p className="text-gray-400 text-sm">
                  Book a call and let&apos;s map your offer together.
                </p>
              </div>
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 group whitespace-nowrap"
              >
                Book Free Audit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


