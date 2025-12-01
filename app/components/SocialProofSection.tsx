'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
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

function LiveRevenueSimulator() {
  const [views, setViews] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Derived values
  const clicks = Math.floor(views * 0.03);
  const leads = Math.floor(clicks * 0.20);
  const sales = Math.floor(leads * 0.05);
  const revenue = sales * 97;

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 100000, {
        duration: 3,
        ease: "easeOut",
        onUpdate: (latest) => setViews(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div ref={ref} className="space-y-4 font-mono">
      <div className="flex justify-between items-center py-3 border-b border-white/5">
        <span className="text-gray-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Monthly Views
        </span>
        <span className="text-white font-bold tabular-nums text-lg tracking-wide">
          {formatNumber(views)}
        </span>
      </div>

      <div className="flex justify-between items-center py-3 border-b border-white/5 relative overflow-hidden">
        {/* Progress bar background */}
        <motion.div 
          className="absolute left-0 top-0 bottom-0 bg-accent/5 -z-10"
          initial={{ width: "0%" }}
          animate={{ width: `${(clicks / 3000) * 100}%` }}
          transition={{ duration: 0.1 }}
        />
        <span className="text-gray-400 pl-2">Clicks (3%)</span>
        <span className="text-accent font-medium tabular-nums">
          {formatNumber(clicks)}
        </span>
      </div>

      <div className="flex justify-between items-center py-3 border-b border-white/5 relative overflow-hidden">
        <motion.div 
          className="absolute left-0 top-0 bottom-0 bg-accent/5 -z-10"
          initial={{ width: "0%" }}
          animate={{ width: `${(leads / 600) * 100}%` }}
          transition={{ duration: 0.1 }}
        />
        <span className="text-gray-400 pl-2">Leads (20%)</span>
        <span className="text-accent font-medium tabular-nums">
          {formatNumber(leads)}
        </span>
      </div>

      <div className="flex justify-between items-center py-3 border-b border-white/5 relative overflow-hidden">
        <motion.div 
          className="absolute left-0 top-0 bottom-0 bg-accent/5 -z-10"
          initial={{ width: "0%" }}
          animate={{ width: `${(sales / 30) * 100}%` }}
          transition={{ duration: 0.1 }}
        />
        <span className="text-gray-400 pl-2">Sales (5%)</span>
        <span className="text-accent font-medium tabular-nums">
          {formatNumber(sales)}
        </span>
      </div>

      <div className="flex justify-between items-center py-4 mt-2">
        <span className="text-white font-semibold">At $97/product</span>
        <motion.span 
          className="text-3xl font-bold gradient-text tabular-nums"
          animate={{ 
            scale: revenue === 2910 ? [1, 1.1, 1] : 1,
            textShadow: revenue === 2910 ? "0 0 20px rgba(6,182,212,0.5)" : "none"
          }}
        >
          ${formatNumber(revenue)}/mo
        </motion.span>
      </div>
    </div>
  );
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
              Here&apos;s what a well-built system can deliver:
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
          <div className="glass rounded-2xl p-8 lg:p-10 max-w-4xl mx-auto border border-accent/10 shadow-glow">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left - Calculation */}
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-accent rounded-full" />
                  Live Revenue Simulator
                </h3>
                
                <LiveRevenueSimulator />
              </div>
              
              {/* Right - Message */}
              <div className="lg:pl-8 lg:border-l border-white/10">
                <div className="text-center lg:text-left">
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Watch how <span className="text-white font-medium">predictable math</span> turns views into income. 
                    These are conservative estimates.
                  </p>
                  <div className="bg-navy-900/50 rounded-xl p-6 border border-white/5">
                    <p className="text-accent font-medium mb-2">
                      The Real Question:
                    </p>
                    <p className="text-gray-400 text-sm italic">
                      &quot;What is your current system leaving on the table right now?&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
