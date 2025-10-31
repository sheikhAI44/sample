"use client";
import Section from './Section';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const episodes = [
  { title: 'FireGuard for Homeowners', image: '/fireguard/podcast1.jpeg' },
  { title: 'Fire Safety for Building Managers', image: '/fireguard/podcast1.jpeg' },
  { title: 'Insurance + Prevention: A Win-Win', image: '/fireguard/podcast1.jpeg' },
  { title: 'Behind the Tech: AI + Panels', image: '/fireguard/podcast1.jpeg' }
];

export default function Podcast() {
  return (
    <Section id="podcast" className="container-page py-20">
      <h2 className="section-title mb-6"><span className="bg-gold-gradient bg-clip-text text-transparent">Our</span> Podcast</h2>
      <div className="flex gap-5 overflow-x-auto pb-2 snap-x">
        {episodes.map(({ title, image }, i) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.03 }}
            className="relative min-w-[280px] snap-start rounded-2xl glass p-0 overflow-hidden"
          >
            <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
            <div className="p-4">
              <p className="text-white font-medium">{title}</p>
            </div>
            <div className="absolute inset-0 grid place-items-center hover:bg-black/30 transition-colors">
              <Play className="h-10 w-10 text-white opacity-80" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
