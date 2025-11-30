'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: 3,
    suffix: '%',
    label: 'View-to-Click',
    description: 'Of viewers click through to your offer',
  },
  {
    icon: Users,
    value: 20,
    suffix: '%',
    label: 'Click-to-Lead',
    description: 'Of clicks become qualified leads',
  },
  {
    icon: DollarSign,
    value: 5,
    suffix: '%',
    label: 'Lead-to-Sale',
    description: 'Of leads convert to paying customers',
  },
];

function CountUp({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function SocialProofSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-800 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-glow opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust Message */}
        <AnimatedSection className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              Why This Works
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Your Audience Already{' '}
              <span className="gradient-text">Trusts You</span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              You have credibility, a clear niche, and a warm audience ready to buy. 
              Small conversion percentages generate significant revenue at scale. 
              Here's what a well-built system can deliver:
            </p>
          </div>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="glass rounded-2xl p-8 text-center h-full border border-transparent hover:border-accent/20 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <stat.icon className="text-accent" size={28} />
                  </div>
                  
                  {/* Value */}
                  <div className="text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
                    <CountUp value={stat.value} />
                    <span className="text-accent">{stat.suffix}</span>
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Revenue Example */}
        <AnimatedSection delay={0.4}>
          <div className="glass rounded-2xl p-8 lg:p-10 max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left - Calculation */}
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-4">
                  Let's Do The Math
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400">Monthly Views</span>
                    <span className="text-white font-medium">100,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400">Clicks (3%)</span>
                    <span className="text-white font-medium">3,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400">Leads (20%)</span>
                    <span className="text-white font-medium">600</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400">Sales (5%)</span>
                    <span className="text-white font-medium">30</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-white font-semibold">At $97/product</span>
                    <span className="text-2xl font-bold gradient-text">$2,910/mo</span>
                  </div>
                </div>
              </div>
              
              {/* Right - Message */}
              <div className="lg:pl-8 lg:border-l border-white/10">
                <div className="text-center lg:text-left">
                  <p className="text-lg text-gray-300 mb-4">
                    These are conservative estimates. With a higher-ticket offer or 
                    better optimization, results multiply.
                  </p>
                  <p className="text-accent font-medium">
                    The only question is: what's your system leaving on the table?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

