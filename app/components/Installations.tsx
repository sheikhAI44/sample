"use client";
import { motion } from 'framer-motion';
import Section from './Section';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
// Use PNGs so you can drop in the provided files directly
const imgs = [
  { src: '/gallery/installations/installation-1.png', alt: 'FireGuard installation 1' },
  { src: '/gallery/installations/installation-2.png', alt: 'FireGuard installation 2' },
  { src: '/gallery/installations/installation-3.png', alt: 'FireGuard installation 3' },
  { src: '/gallery/installations/installation-4.png', alt: 'FireGuard installation 4' }
];

export default function Installations() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const dirRef = useRef(1);
  const pausedRef = useRef(false);

  // Auto-scroll loop that only mutates scrollLeft (no layout reads)
  useEffect(() => {
    let raf = 0;
    const step = () => {
      const el = ref.current;
      if (el && !pausedRef.current) {
        el.scrollLeft += 0.4 * dirRef.current;
        if (el.scrollLeft <= 0) dirRef.current = 1;
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) dirRef.current = -1;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Determine active item, throttled to animation frames on scroll only
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const center = el.scrollLeft + el.clientWidth / 2;
        let bestIdx = 0;
        let bestDist = Infinity;
        for (let i = 0; i < el.children.length; i++) {
          const child = el.children[i] as HTMLElement;
          const mid = child.offsetLeft + child.clientWidth / 2;
          const d = Math.abs(mid - center);
          if (d < bestDist) { bestDist = d; bestIdx = i; }
        }
        setActive(bestIdx);
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { el.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  return (
    <Section className="relative bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
      <div className="container-page py-16 md:py-20">
        <div className="text-center">
          <h2 className="section-title">See FireGuard In Action</h2>
          <p className="mt-3 text-gray-400">Real installations. Real protection. Certified by professionals.</p>
        </div>
      </div>

      <div className="relative">
        {/* gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />

        <div
          ref={ref}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
          className="no-scrollbar relative mx-auto flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-6 py-6"
        >
          {imgs.map((img, i) => {
            const isActive = i === active;
            const isHovered = hovered === i;
            return (
              <motion.div
                key={i}
                className="relative snap-center shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(233,69,69,0.15)] transform-gpu will-change-transform will-change-opacity"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onTouchStart={() => setHovered(i)}
                onTouchEnd={() => setHovered(null)}
                animate={{
                  scale: isHovered ? 1.08 : isActive ? 1.05 : 0.95,
                  opacity: isHovered ? 1 : isActive ? 1 : 0.6,
                  zIndex: isHovered ? 10 : isActive ? 5 : 1
                }}
                transition={{ type: 'spring', stiffness: 160, damping: 18 }}
                style={{ width: 350, height: 450 }}
              >
                {/* glow trail */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  animate={{ opacity: isHovered || isActive ? 0.3 : 0 }}
                  style={{ background: 'radial-gradient(400px 300px at 50% 50%, rgba(233,69,69,0.35), transparent 60%)' }}
                />
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 250px, 350px" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .no-scrollbar > div[style] { width: 250px !important; height: 300px !important; }
        }
      `}</style>
    </Section>
  );
}
