'use client';

import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import SectionContainer from '../ui/SectionContainer';
import { ArrowRight } from 'lucide-react';

export default function OfferStack() {
  const modules = [
    'Module 1: Market Research & Offer Creation',
    'Module 2: Funnel Architecture & Strategy',
    'Module 3: High-Converting Landing Pages',
    'Module 4: Persuasive Copywriting Framework',
    'Module 5: Video Sales Letter (VSL) Mastery',
    'Module 6: Email Automation & Sequences',
    'Module 7: Traffic & Ad Strategies',
    'Module 8: Analytics & Optimization',
    'Module 9: Scaling to 6-7 Figures',
  ];

  const bonuses = [
    'Landing page templates (10+)',
    'Copywriting swipe files',
    'Email sequence templates',
    'Ad creative prompts & examples',
    'Funnel blueprint workbook',
  ];

  return (
    <SectionContainer id="offer" className="bg-surface/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="cyan" size="md" className="mb-6">
            The Complete Package
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What&apos;s <span className="bg-text-gradient bg-clip-text text-transparent">Inside</span>
          </h2>
          <p className="text-xl text-muted">
            A complete system to build, launch, and scale your digital product funnel.
          </p>
        </div>

        <Card glow="violet" className="p-8">
          {/* Modules */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan" />
              Course Modules
            </h3>
            <div className="space-y-3">
              {modules.map((module, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bonuses */}
          <div className="pt-8 border-t border-border mb-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple" />
              Bonuses Included
            </h3>
            <div className="space-y-3">
              {bonuses.map((bonus, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{bonus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lifetime Updates Badge */}
          <div className="bg-glass border border-cyan/30 rounded-xl p-4 mb-8">
            <div className="flex items-center gap-3">
              <Badge variant="cyan" size="sm">New</Badge>
              <span className="text-foreground font-semibold">Lifetime updates + new modules added regularly</span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              href="https://whop.com/checkout/plan_EjHj4OUPVTK3W/"
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Buy the Course Now
            </Button>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}
