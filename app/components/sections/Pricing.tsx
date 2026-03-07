'use client';

import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import FAQItem from '../ui/FAQItem';
import SectionContainer from '../ui/SectionContainer';

export default function Pricing() {
  const faqs = [
    {
      question: 'Is this beginner friendly?',
      answer: 'Absolutely! The course is designed for both beginners and experienced marketers. We start with fundamentals and progress to advanced strategies. No prior funnel-building experience required.',
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Most students launch their first funnel within 7-14 days. Revenue results vary based on your offer, audience size, and implementation speed. We provide all the templates and frameworks to move fast.',
    },
    {
      question: 'Do I need to run paid ads?',
      answer: 'No! While we teach ad strategies, you can start with organic traffic (social media, email list, etc.). Many students generate sales without ads initially, then scale with paid traffic later.',
    },
    {
      question: 'What if I already have a product?',
      answer: 'Perfect! This course will help you build a high-converting funnel around your existing product. We&apos;ll optimize your offer positioning, copy, and automation to increase sales.',
    },
  ];

  return (
    <SectionContainer id="pricing">
      <div className="text-center mb-16">
        <Badge variant="purple" size="md" className="mb-6">
          Pricing
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Choose Your <span className="bg-text-gradient bg-clip-text text-transparent">Path</span>
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Self-study course or done-with-you implementation. You decide.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        {/* Course Only */}
        <Card glow="steel">
          <Badge variant="cyan" size="sm" className="mb-4">
            Self-Study
          </Badge>
          <h3 className="text-3xl font-bold mb-2">Course Only</h3>
          <div className="text-4xl font-bold text-cyan mb-4">
            $497
            <span className="text-lg text-muted font-normal"> one-time</span>
          </div>
          <p className="text-muted mb-6">
            Complete course, templates, and bonuses. Build your funnel yourself.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              'All 9 course modules',
              'Templates & swipe files',
              'Bonuses included',
              'Lifetime access & updates',
              'Community support',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Button
            variant="primary"
            size="lg"
            href="https://whop.com/checkout/plan_EjHj4OUPVTK3W/"
            className="w-full"
          >
            Buy Course
          </Button>
        </Card>

        {/* Done-With-You */}
        <Card glow="violet" className="relative">
          <Badge variant="purple" size="sm" className="mb-4">
            Done-With-You
          </Badge>
          <div className="absolute -top-3 right-6">
            <Badge variant="pink" size="sm">
              <Sparkles className="w-3 h-3 inline mr-1" />
              Popular
            </Badge>
          </div>
          <h3 className="text-3xl font-bold mb-2">Service Add-On</h3>
          <div className="text-4xl font-bold text-purple mb-4">
            Custom
            <span className="text-lg text-muted font-normal"> pricing</span>
          </div>
          <p className="text-muted mb-6">
            We build your funnel for you. Course included + hands-on implementation.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              'Everything in Course Only',
              'Custom funnel build',
              'Copywriting & design',
              'Tech setup & automation',
              '1-on-1 strategy calls',
              'Launch support',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Button
            variant="outline"
            size="lg"
            href="#audit"
            className="w-full"
          >
            Book Discovery Call
          </Button>
        </Card>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">
          Frequently Asked <span className="text-cyan">Questions</span>
        </h3>
        <Card className="p-8">
          <div className="space-y-0">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}
