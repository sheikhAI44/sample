'use client';

import React from 'react';
import { Target, Zap, Rocket, Users } from 'lucide-react';
import Card from '../ui/Card';
import SectionContainer from '../ui/SectionContainer';
import Badge from '../ui/Badge';

export default function About() {
  const reasons = [
    {
      icon: Target,
      title: 'Funnel-First Approach',
      description: 'We don&apos;t just build pretty pages. Every element is engineered to convert and drive revenue.',
    },
    {
      icon: Zap,
      title: 'Conversion Copy',
      description: 'Persuasive, psychology-driven copywriting that speaks directly to your audience&apos;s pain points.',
    },
    {
      icon: Rocket,
      title: 'Fast Execution',
      description: 'From strategy to live funnel in days, not months. Speed is your competitive advantage.',
    },
    {
      icon: Users,
      title: 'Creator-Friendly',
      description: 'Built specifically for course creators, coaches, and digital product sellers. We speak your language.',
    },
  ];

  return (
    <SectionContainer id="about" className="bg-surface/20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Story */}
        <div>
          <Badge variant="cyan" size="md" className="mb-6">
            About GlowCush
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Help Creators Build{' '}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              7-Figure Funnels
            </span>
          </h2>
          <div className="space-y-4 text-lg text-muted leading-relaxed">
            <p>
              GlowCush was born from a simple observation: most creators have great products but terrible marketing systems.
            </p>
            <p>
              We&apos;ve helped hundreds of course creators, coaches, and digital entrepreneurs scale from inconsistent sales to predictable, automated revenue machines.
            </p>
            <p>
              Our approach is simple: funnel-first, conversion-focused, and fast. No fluff, no theory—just systems that sell.
            </p>
          </div>
        </div>

        {/* Right: Why GlowCush */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-6">Why GlowCush?</h3>
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <Card key={idx} glow="none" hover={false} className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-glass border border-cyan/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{reason.title}</h4>
                    <p className="text-muted">{reason.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
