"use client";
import Section from './Section';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

const quotes = [
  { name: 'Ava R.', text: 'FireGuard alerted us to a dangerous outlet before it could spark. Best investment in our home.' },
  { name: 'Michael T.', text: 'The 24/7 monitoring gives me peace of mind when I travel. Alerts are clear and actionable.' },
  { name: 'Priya K.', text: 'Installation was quick and professional. The app makes it easy to track panel health.' }
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % quotes.length), 5000);
    return () => clearInterval(id);
  }, []);

  const current = quotes[idx];

  return (
    <Section id="reviews" className="py-20">
      <div className="container-page">
        <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-6 -left-6 text-gold opacity-40">
            <Quote className="h-20 w-20" />
          </div>
          <h2 className="section-title mb-6">Trusted by Homeowners</h2>
          <motion.blockquote key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-xl md:text-2xl text-white/90 text-center">
            “{current.text}”
          </motion.blockquote>
          <p className="mt-4 text-gold font-medium text-center">— {current.name}</p>
          <div className="mx-auto mt-6 h-[3px] w-40 rounded-full bg-gradient-to-r from-primary via-gold to-primary" />
          <a href="#" className="btn btn-primary mt-8">View All Reviews</a>
        </div>
      </div>
    </Section>
  );
}
