"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ShieldAlert } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-lg shadow-black/30' : ''}`}>
      <div className="glass">
        <div className="container-page flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-gradient">
              <ShieldAlert className="h-5 w-5" />
            </span>
            <span className="font-heading font-bold text-white text-lg">FireGuard</span>
            {/* AI pulse indicator */}
            <span aria-label="AI monitoring active" className="relative ml-2 inline-flex">
              <span className="h-2 w-2 rounded-full bg-gold opacity-80" />
              <span className="absolute inset-0 rounded-full bg-gold opacity-60 animate-ping" />
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <Link href="#about" className="hover:text-white">About</Link>
            <Link href="#how" className="hover:text-white">How It Works</Link>
            <Link href="#podcast" className="hover:text-white">Podcast</Link>
            <Link href="#reviews" className="hover:text-white">Reviews</Link>
          </nav>
          <Link href="#cta" className="btn btn-primary text-sm">Explore FireGuard</Link>
        </div>
      </div>
    </header>
  );
}
