import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-page py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-white/80">
        <div className="col-span-2 sm:col-span-1">
          <div className="font-heading text-xl text-white">FireGuard</div>
          <p className="mt-3 text-white/70">AI-powered fire prevention for homes and buildings.</p>
          <div className="mt-4 flex gap-3">
            <a className="p-2 rounded-md hover:bg-gold/10" href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-gold"/></a>
            <a className="p-2 rounded-md hover:bg-gold/10" href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-gold"/></a>
            <a className="p-2 rounded-md hover:bg-gold/10" href="#" aria-label="X"><Twitter className="h-5 w-5 text-gold"/></a>
          </div>
        </div>
        <div>
          <div className="text-white font-medium mb-3">About</div>
          <ul className="space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#how">Fire Prevention</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-medium mb-3">Services</div>
          <ul className="space-y-2">
            <li>Live Monitoring</li>
            <li>Overload Detection</li>
            <li>Hidden Hazards</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-medium mb-3">Contact</div>
          <ul className="space-y-2">
            <li>+1 (800) 555-0199</li>
            <li>support@fireguard.ai</li>
            <li>1234 Safety Ave, Los Angeles, CA</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-white/60 py-4">
        © 2025 Lights Of America Corp. – FireGuard. All Rights Reserved.
      </div>
    </footer>
  );
}

