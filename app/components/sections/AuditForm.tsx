'use client';

import React, { useState } from 'react';
import Card from '../ui/Card';
import SectionContainer from '../ui/SectionContainer';
import Badge from '../ui/Badge';

export default function AuditForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    revenue: '',
    product: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic (e.g., send to API, email service, etc.)
    console.log('Form submitted:', formData);
    alert('Thanks! We\'ll be in touch within 24 hours.');
  };

  return (
    <SectionContainer id="audit" className="bg-surface/20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="purple" size="md" className="mb-6">
            Free Audit Call
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your <span className="bg-text-gradient bg-clip-text text-transparent">Free Audit</span>
          </h2>
          <p className="text-xl text-muted">
            Let&apos;s analyze your offer and map out a custom funnel strategy. No pitch, just value.
          </p>
        </div>

        <Card glow="steel" className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-cyan transition-colors"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-cyan transition-colors"
                placeholder="john@example.com"
              />
            </div>

            {/* Instagram/Website */}
            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-foreground mb-2">
                Instagram or Website
              </label>
              <input
                type="text"
                id="instagram"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-cyan transition-colors"
                placeholder="@yourhandle or yoursite.com"
              />
            </div>

            {/* Monthly Revenue */}
            <div>
              <label htmlFor="revenue" className="block text-sm font-medium text-foreground mb-2">
                Current Monthly Revenue *
              </label>
              <select
                id="revenue"
                required
                value={formData.revenue}
                onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground focus:outline-none focus:border-cyan transition-colors"
              >
                <option value="">Select range...</option>
                <option value="0-1k">$0 - $1K</option>
                <option value="1k-5k">$1K - $5K</option>
                <option value="5k-10k">$5K - $10K</option>
                <option value="10k-25k">$10K - $25K</option>
                <option value="25k+">$25K+</option>
              </select>
            </div>

            {/* What are you selling */}
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-foreground mb-2">
                What are you selling? *
              </label>
              <textarea
                id="product"
                required
                rows={4}
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-cyan transition-colors resize-none"
                placeholder="Tell us about your course, ebook, or digital product..."
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-cyan to-purple text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Request Free Audit Call
            </button>

            {/* Disclaimer */}
            <p className="text-xs text-muted text-center">
              By submitting, you agree to receive follow-up communication. We respect your privacy and never spam.
            </p>
          </form>
        </Card>
      </div>
    </SectionContainer>
  );
}
