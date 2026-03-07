'use client';

import React from 'react';
import { Target, Layers, FileText, Megaphone, Package, TrendingUp } from 'lucide-react';
import Card from '../ui/Card';
import SectionContainer from '../ui/SectionContainer';

export default function WhatYouGet() {
  const features = [
    {
      icon: Target,
      title: 'Offer & Positioning',
      description: 'Nail your unique value prop and market positioning to stand out from the noise.',
      color: 'text-cyan',
    },
    {
      icon: Layers,
      title: 'Funnel Build Blueprint',
      description: 'Step-by-step templates for high-converting sales funnels that sell on autopilot.',
      color: 'text-purple',
    },
    {
      icon: FileText,
      title: 'Landing Page Templates',
      description: 'Plug-and-play landing page designs optimized for conversions and clarity.',
      color: 'text-pink',
    },
    {
      icon: Megaphone,
      title: 'Ad Creative System',
      description: 'Frameworks for writing scroll-stopping ads and content that drives clicks.',
      color: 'text-cyan',
    },
    {
      icon: Package,
      title: 'Automated Checkout + Email',
      description: 'Set up seamless payment flows and nurture sequences that close sales.',
      color: 'text-purple',
    },
    {
      icon: TrendingUp,
      title: 'Scaling & Optimization',
      description: 'Data-driven strategies to scale your funnel and maximize lifetime value.',
      color: 'text-pink',
    },
  ];

  return (
    <SectionContainer id="benefits">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What You Get:
          <span className="bg-text-gradient bg-clip-text text-transparent"> Course + System</span>
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Everything you need to build, launch, and scale a profitable digital product business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <Card key={idx} glow={idx % 2 === 0 ? 'steel' : 'violet'}>
              <div className={`w-12 h-12 rounded-lg bg-glass border border-border flex items-center justify-center mb-4 ${feature.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
}
