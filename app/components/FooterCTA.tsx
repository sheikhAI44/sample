'use client';

import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Mail, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
];

export default function FooterCTA() {
  return (
    <>
      {/* CTA Section */}
      <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-900" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              Let&apos;s Build Together
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Ready to Scale with{' '}
              <span className="gradient-text">Acceleryn?</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a quick call — we&apos;ll map your offer, install your system, 
              and launch within days, not months.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 group text-lg"
              >
                Book a Free Audit Call
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#process"
                className="btn-secondary inline-flex items-center justify-center gap-2 group text-lg"
              >
                <Play size={18} className="group-hover:scale-110 transition-transform" />
                See How It Works
              </a>
            </div>
          </AnimatedSection>
          
          {/* Trust badges */}
          <AnimatedSection delay={0.4}>
            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>15-Minute Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>No Upfront Cost</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Launch in Days</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-navy-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <a href="#" className="inline-flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                  <span className="text-navy-900 font-bold text-lg font-heading">A</span>
                </div>
                <span className="text-white font-heading font-semibold text-xl">
                  Acceleryn
                </span>
              </a>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Acceleryn Agency. All rights reserved.
              </p>
            </div>
            
            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:bg-white/10 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
              <a
                href="mailto:hello@acceleryn.agency"
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:bg-white/10 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


