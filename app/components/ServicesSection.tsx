'use client';

import { StaggerContainer, StaggerItem } from './AnimatedSection';
import { AnimatedSection } from './AnimatedSection';
import { 
  Workflow, 
  FileText, 
  Video, 
  PenTool, 
  Package, 
  Cog 
} from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'Complete Funnel',
    description: 'Awareness to checkout — built to convert. Every step optimized for maximum revenue.',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    icon: FileText,
    title: 'High-Converting Landing Page',
    description: 'Clear promise, proof, FAQs, and strong CTAs. Designed to turn visitors into buyers.',
    accent: 'from-blue-400 to-indigo-500',
  },
  {
    icon: Video,
    title: 'VSL That Sells 24/7',
    description: 'Hook, story, offer, and objection handling. Your automated sales machine.',
    accent: 'from-indigo-400 to-purple-500',
  },
  {
    icon: PenTool,
    title: 'On-Brand Content + CTA Scripts',
    description: 'Bi-weekly scripts designed to drive clicks and build demand for your offers.',
    accent: 'from-purple-400 to-pink-500',
  },
  {
    icon: Package,
    title: 'Digital Products Ready',
    description: 'PDFs, templates, courses — packaged professionally and ready for delivery.',
    accent: 'from-pink-400 to-rose-500',
  },
  {
    icon: Cog,
    title: 'Automated Delivery + Fulfillment',
    description: 'Frictionless checkout and instant customer access. No manual work required.',
    accent: 'from-rose-400 to-orange-500',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-navy-800 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              What We Build For You
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Complete Backend Buildout{' '}
              <span className="gradient-text">for Creators</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We install every system required to monetize consistently. 
              No piecemeal solutions—just a complete, working backend.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="group relative h-full">
                {/* Card */}
                <div className="relative h-full glass rounded-2xl p-8 transition-all duration-500 hover:bg-navy-700/50 hover:border-accent/30 border border-transparent">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-xl bg-navy-800 flex items-center justify-center">
                      <service.icon className="text-white" size={24} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <p className="text-gray-400 mb-4">Ready to have your backend built?</p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Audit Call
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}


