'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#system', label: 'System' },
  { href: '#framework', label: 'Framework' },
  { href: '#difference', label: 'Difference' },
  { href: '#access', label: 'Access' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* NAVBAR — fixed, z-50, never overlaps content */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal-950/92 backdrop-blur-xl border-b border-border shadow-luxury'
            : 'bg-transparent'
        }`}
        style={{ backgroundColor: isScrolled ? 'rgba(6, 7, 10, 0.95)' : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8">
          <div className="flex items-center justify-between h-[64px] sm:h-[72px]">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div
                className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:shadow-steel-glow-sm"
                style={{
                  background: 'rgba(28, 31, 38, 0.7)',
                  border: '1px solid rgba(77, 184, 212, 0.25)',
                }}
              >
                <span className="font-mono font-bold text-sm" style={{ color: '#4DB8D4' }}>G</span>
              </div>
              <span className="font-heading font-semibold text-base leading-none" style={{ color: '#F0F0F0' }}>
                GlowCush
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-7 flex-shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: '#8A939E' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4DB8D4')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#8A939E')}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              {/* Instagram link */}
              <a
                href="https://www.instagram.com/glowcush?igsh=MWt0a3RyeXI1Y251Nw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GlowCush on Instagram"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#C8D0D8',
                  transition: 'color 0.18s, border-color 0.18s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#E1306C';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(225,48,108,0.35)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#C8D0D8';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://whop.com/checkout/plan_EjHj4OUPVTK3W/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-sm"
              >
                Access System
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded transition-colors duration-200 flex-shrink-0"
              style={{ color: '#F0F0F0' }}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU — full-screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: 'rgba(7, 8, 11, 0.97)',
              WebkitBackdropFilter: 'blur(16px)',
              backdropFilter: 'blur(16px)'
            }}
          >
            <div className="flex flex-col h-full px-5 sm:px-6 pb-10" style={{ paddingTop: 'clamp(64px, 15vw, 72px)' }}>
              {/* Nav links */}
              <nav className="flex flex-col gap-1 mt-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    className="flex items-center justify-between py-4 border-b font-medium text-xl transition-colors duration-200"
                    style={{
                      color: '#F0F0F0',
                      borderColor: 'rgba(255,255,255,0.06)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#4DB8D4')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#F0F0F0')}
                  >
                    {link.label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
              >
                <a
                  href="https://whop.com/checkout/plan_EjHj4OUPVTK3W/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="btn-primary w-full text-center block"
                  style={{ fontSize: '1rem' }}
                >
                  Access The GlowCush System
                </a>

                {/* Instagram link — mobile */}
                <a
                  href="https://www.instagram.com/glowcush?igsh=MWt0a3RyeXI1Y251Nw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    marginTop: 14,
                    padding: '12px',
                    borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#C8D0D8',
                    fontFamily: 'monospace',
                    fontSize: 13,
                    textDecoration: 'none',
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                  Follow on Instagram
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
