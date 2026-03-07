'use client';

import React from 'react';
import Card from '../ui/Card';
import SectionContainer from '../ui/SectionContainer';
import Badge from '../ui/Badge';

export default function Results() {
  const cases = [
    {
      before: '$2K/mo',
      after: '$15K/mo',
      problem: 'Low-converting landing page, no email sequence',
      solution: 'Rebuilt funnel with VSL + nurture automation',
      result: '650% revenue increase in 90 days',
      badge: 'Course Creator',
    },
    {
      before: '5% conv rate',
      after: '22% conv rate',
      problem: 'Generic positioning, weak offer stack',
      solution: 'Repositioned as premium, added bonuses',
      result: '340% conversion rate improvement',
      badge: 'Digital Agency',
    },
    {
      before: 'Manual fulfillment',
      after: '100% automated',
      problem: 'Time-intensive manual delivery, burnout',
      solution: 'Built automated checkout + delivery system',
      result: 'Saved 20 hours/week, scaled 3x',
      badge: 'Ebook Seller',
    },
  ];

  return (
    <SectionContainer id="results">
      <div className="text-center mb-16">
        <Badge variant="pink" size="md" className="mb-6">
          Case Studies
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Real <span className="bg-text-gradient bg-clip-text text-transparent">Results</span>
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          See how we&apos;ve helped creators and agencies scale their digital product businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, idx) => (
          <Card key={idx} glow="steel">
            <Badge variant="outline" size="sm" className="mb-4">
              {c.badge}
            </Badge>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-muted line-through">{c.before}</div>
                <div className="text-xs text-muted mt-1">Before</div>
              </div>
              <div className="text-cyan">→</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan">{c.after}</div>
                <div className="text-xs text-muted mt-1">After</div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <div className="text-muted mb-1">Problem:</div>
                <div className="text-foreground">{c.problem}</div>
              </div>
              <div>
                <div className="text-muted mb-1">Solution:</div>
                <div className="text-foreground">{c.solution}</div>
              </div>
              <div className="pt-3 border-t border-border">
                <div className="text-cyan font-semibold">{c.result}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
