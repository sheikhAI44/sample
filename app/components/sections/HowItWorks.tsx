'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Hammer, Rocket } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import Badge from '../ui/Badge';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Audit + Strategy',
      description: 'We analyze your offer, audience, and goals. Then map out your complete sales funnel and positioning strategy.',
      color: 'cyan',
    },
    {
      number: '02',
      icon: Hammer,
      title: 'Build Funnel + Assets',
      description: 'We design your landing pages, write your copy, set up automation, and create all the assets you need to sell.',
      color: 'purple',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Launch + Optimize',
      description: 'Go live with your funnel, drive traffic, and continuously optimize based on real data to scale revenue.',
      color: 'pink',
    },
  ];

  return (
    <SectionContainer id="process" className="bg-surface/20">
      <div className="text-center mb-16">
        <Badge variant="purple" size="md" className="mb-6">
          The Process
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          How It <span className="bg-text-gradient bg-clip-text text-transparent">Works</span>
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          From idea to profitable funnel in 3 simple steps.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connection Line (desktop only) */}
        <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-cyan via-purple to-pink opacity-20" />

        {steps.map((step, idx) => {
          const Icon = step.icon;
          const colorClasses = {
            cyan: 'text-cyan border-cyan/30 bg-cyan/10',
            purple: 'text-purple border-purple/30 bg-purple/10',
            pink: 'text-pink border-pink/30 bg-pink/10',
          };

          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              {/* Step Number Badge */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full border-2 flex items-center justify-center font-bold text-2xl relative z-10 backdrop-blur-xl ${colorClasses[step.color as keyof typeof colorClasses]}`}>
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-glass border border-border flex items-center justify-center">
                <Icon className={`w-7 h-7 ${colorClasses[step.color as keyof typeof colorClasses].split(' ')[0]}`} />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-sm text-cyan font-semibold">
          ⚡ Time to launch: 7-14 days from audit to live funnel
        </p>
      </motion.div>
    </SectionContainer>
  );
}
