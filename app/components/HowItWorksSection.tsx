'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { ClipboardCheck, Map, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Audit',
    duration: '15 Minutes',
    description: 'We review your niche, assets, and goals. Quick call to understand exactly where you are and where you want to go.',
  },
  {
    number: '02',
    icon: Map,
    title: 'Blueprint',
    duration: 'Custom Strategy',
    description: 'We map your funnel, offer, and content plan clearly. A complete roadmap tailored to your brand and audience.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Build & Launch',
    duration: 'Days, Not Months',
    description: 'We install the system. You keep creating. Your backend starts generating predictable income.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              Our Process
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From first call to revenue-generating system in days. 
              Simple, fast, and built around your schedule.
            </p>
          </AnimatedSection>
        </div>

        {/* Timeline */}
        <StaggerContainer className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="relative group">
                  {/* Connection line - mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-accent/30 to-transparent -translate-x-1/2" />
                  )}
                  
                  {/* Card */}
                  <div className="relative">
                    {/* Number badge */}
                    <div className="relative z-20 w-20 h-20 mx-auto mb-6 rounded-full bg-navy-800 border-2 border-accent/30 flex items-center justify-center group-hover:border-accent group-hover:shadow-glow transition-all duration-300">
                      <span className="text-2xl font-heading font-bold gradient-text">{step.number}</span>
                      {/* Glow ring */}
                      <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                        <step.icon className="text-accent" size={24} />
                      </div>
                      
                      <h3 className="text-2xl font-heading font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm mb-4">
                        {step.duration}
                      </span>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Result callout */}
        <AnimatedSection delay={0.5} className="mt-16">
          <div className="glass rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto border border-accent/20">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4">
              The Result?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              You keep creating content you love. Your backend works 24/7 turning 
              that audience into consistent, predictable revenue.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>No tech headaches</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>No funnel confusion</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Just results</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}






