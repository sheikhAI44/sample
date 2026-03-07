'use client';

import { AnimatedSection } from './AnimatedSection';
import { Zap, TrendingUp, Settings, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Visual */}
          <AnimatedSection direction="left" className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main visual container */}
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Central hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-brand-gradient flex items-center justify-center neon-glow">
                  <span className="text-navy-900 font-heading font-bold text-3xl">A</span>
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 glass rounded-xl p-4">
                  <Zap className="text-electric mb-2" size={24} />
                  <p className="text-sm text-text-primary font-medium">Funnels</p>
                </div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 glass rounded-xl p-4">
                  <Settings className="text-violet mb-2" size={24} />
                  <p className="text-sm text-text-primary font-medium">Automation</p>
                </div>
                
                <div className="absolute top-1/2 left-0 -translate-y-1/2 glass rounded-xl p-4">
                  <TrendingUp className="text-neon mb-2" size={24} />
                  <p className="text-sm text-text-primary font-medium">Analytics</p>
                </div>
                
                <div className="absolute top-1/2 right-0 -translate-y-1/2 glass rounded-xl p-4">
                  <Target className="text-electric mb-2" size={24} />
                  <p className="text-sm text-text-primary font-medium">Delivery</p>
                </div>
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle
                    cx="200"
                    cy="200"
                    r="120"
                    fill="none"
                    stroke="rgba(122, 77, 255, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="8 4"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="160"
                    fill="none"
                    stroke="rgba(58, 111, 247, 0.2)"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                  />
                </svg>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <AnimatedSection delay={0.1}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-electric/10 border border-electric/30 text-electric text-sm font-medium mb-6">
                Digital Marketing Agency
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary leading-tight mb-6">
                Your Digital Product{' '}
                <span className="brand-gradient-text">Marketing Partner</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                Acceleryn Agency is a digital marketing agency specializing in selling ebooks
                and digital products online. We build complete marketing systems—sales funnels,
                landing pages, email automation, and delivery—so you can sell digital products
                profitably without technical expertise.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="glass rounded-xl p-6 border-l-4 border-violet">
                <p className="text-text-primary font-medium text-lg mb-2">Our Mission</p>
                <p className="text-text-muted">
                  Help content creators and entrepreneurs sell digital products and ebooks
                  profitably through proven marketing systems. No technical skills required—we
                  build everything you need to turn your knowledge into consistent revenue.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-electric electric-glow" />
                  <span>Digital Product Marketing</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-violet electric-glow" />
                  <span>Ebook Selling Systems</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-neon neon-glow" />
                  <span>Sales Funnel Development</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}








