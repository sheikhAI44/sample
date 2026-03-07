'use client';

import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: '#06070A',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5 mb-5 group">
              <div
                className="w-8 h-8 rounded flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(28,31,38,0.7)',
                  border: '1px solid rgba(77,184,212,0.25)',
                }}
              >
                <span className="font-mono font-bold text-sm" style={{ color: '#4DB8D4' }}>G</span>
              </div>
              <span className="font-heading font-semibold text-base" style={{ color: '#F0F0F0' }}>
                GlowCush
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs mb-5" style={{ color: '#8A939E' }}>
              Masculine transformation through structured systems. Status engineered, not hoped for.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: 'https://instagram.com/glowcush', Icon: Instagram, label: 'Instagram' },
                { href: 'https://twitter.com/glowcush', Icon: Twitter, label: 'Twitter' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#8A939E',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.color = '#4DB8D4';
                    el.style.borderColor = 'rgba(77,184,212,0.35)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.color = '#8A939E';
                    el.style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4" style={{ color: '#F0F0F0' }}>
              About
            </h4>
            <ul className="flex flex-col gap-2.5">
              {['#system', '#framework', '#difference'].map((href, i) => {
                const labels = ['The System', 'Framework', 'Difference'];
                return (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: '#8A939E' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#4DB8D4')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#8A939E')}
                    >
                      {labels[i]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4" style={{ color: '#F0F0F0' }}>
              Legal
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[['#', 'Privacy Policy'], ['#', 'Terms of Service']].map(([href, label]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#8A939E' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#4DB8D4')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#8A939E')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#8A939E' }}
        >
          <p>© {new Date().getFullYear()} GlowCush. All rights reserved.</p>
          <a
            href="https://whop.com/checkout/plan_EjHj4OUPVTK3W/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-primary-sm"
          >
            Access The System
          </a>
        </div>
      </div>
    </footer>
  );
}
