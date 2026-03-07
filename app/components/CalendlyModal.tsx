'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly script only once
    if (document.querySelector('script[src*="calendly.com"]')) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      // Don't remove script on cleanup - keep it loaded
    };
  }, []);

  useEffect(() => {
    // Initialize widget when modal opens and script is loaded
    if (isOpen && scriptLoaded && widgetRef.current && window.Calendly) {
      // Clear any existing widget
      widgetRef.current.innerHTML = '';
      
      // Initialize Calendly inline widget
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/wasif-acceleryn/30min',
        parentElement: widgetRef.current,
      });
    }
  }, [isOpen, scriptLoaded]);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-navy-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-violet/20"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-navy-800/80 hover:bg-navy-700 flex items-center justify-center text-text-primary hover:text-neon transition-colors border border-white/10"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Calendly Widget */}
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
                    Book Your Free Audit Call
                  </h2>
                  <p className="text-text-muted text-sm">
                    Let&apos;s discuss how we can scale your creator income
                  </p>
                </div>
                <div 
                  ref={widgetRef}
                  className="calendly-inline-widget rounded-lg overflow-hidden" 
                  style={{ minWidth: '320px', height: '700px' }}
                />
                {!scriptLoaded && (
                  <div className="flex items-center justify-center h-[700px]">
                    <div className="text-text-muted">Loading calendar...</div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
