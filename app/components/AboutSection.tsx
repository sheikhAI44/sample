'use client';

import { AnimatedSection } from './AnimatedSection';
import { Zap, TrendingUp, Settings, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Visual */}
          <AnimatedSection direction="left" className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main visual container */}
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Central hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center glow-accent">
                  <span className="text-navy-900 font-heading font-bold text-3xl">A</span>
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 glass rounded-xl p-4">
                  <Zap className="text-accent mb-2" size={24} />
                  <p className="text-sm text-white font-medium">Funnels</p>
                </div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 glass rounded-xl p-4">
                  <Settings className="text-accent mb-2" size={24} />
                  <p className="text-sm text-white font-medium">Automation</p>
                </div>
                
                <div className="absolute top-1/2 left-0 -translate-y-1/2 glass rounded-xl p-4">
                  <TrendingUp className="text-accent mb-2" size={24} />
                  <p className="text-sm text-white font-medium">Analytics</p>
                </div>
                
                <div className="absolute top-1/2 right-0 -translate-y-1/2 glass rounded-xl p-4">
                  <Target className="text-accent mb-2" size={24} />
                  <p className="text-sm text-white font-medium">Delivery</p>
                </div>
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle
                    cx="200"
                    cy="200"
                    r="120"
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.2)"
                    strokeWidth="1"
                    strokeDasharray="8 4"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="160"
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.1)"
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                Who We Are
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6">
                The Backend Infrastructure{' '}
                <span className="gradient-text">Creators Need</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Acceleryn Agency builds the backend systems creators need to generate 
                consistent, predictable revenue. While you create content, we engineer 
                the structure behind your brand—funnels, analytics, delivery, automation, 
                and monetization.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="glass rounded-xl p-6 border-l-4 border-accent">
                <p className="text-white font-medium text-lg mb-2">Our Mission</p>
                <p className="text-gray-400">
                  Turn engaged audiences into dependable income without creators needing 
                  to learn tech, funnels, or complex systems. You focus on what you do best. 
                  We handle everything else.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Zero Tech Learning Curve</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Fully Managed Systems</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Predictable Revenue</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}





