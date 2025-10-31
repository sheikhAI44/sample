import Section from './Section';

export default function About() {
  return (
    <Section id="about" className="container-page py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="section-title">About <span className="bg-gold-gradient bg-clip-text text-transparent">FireGuard</span></h2>
          <div className="relative">
            {/* AI chip glow */}
            <div className="absolute -inset-10 -z-10 blur-3xl opacity-30" style={{
              background: 'radial-gradient(600px 300px at 20% 30%, rgba(245,197,66,0.25), transparent 60%)'
            }} />
          </div>
          <p className="mt-4 muted">
            FireGuard is an AI‑powered electrical safety platform from Lights of America. Sensors installed at the panel continuously measure current, voltage and arc‑fault signatures. Our cloud intelligence learns the normal behavior of your system and flags irregularities before they become hazards.
          </p>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> 24/7 live monitoring with instant mobile alerts</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Detects overloads, arcing, overheating and loose connections</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Installed by licensed professionals—no invasive rewiring</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Works for homes, multifamily and commercial buildings</li>
          </ul>
          <a href="#how" className="btn btn-primary mt-6">Learn More</a>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden glass">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(12,12,12,0.2), rgba(12,12,12,0.5)), url('/fireguard/about.jpeg')"
            }}
          />
        </div>
      </div>
    </Section>
  );
}
