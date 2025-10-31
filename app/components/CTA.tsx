import Section from './Section';

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function CTA() {
  return (
    <Section id="cta" className="relative isolate">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            `linear-gradient(rgba(12,12,12,0.75), rgba(12,12,12,0.9)), url('${assetPrefix}/fireguard/cta.jpeg')`
        }}
      />
      {/* animated fire gradient overlay */}
      <div className="absolute inset-0 -z-10 opacity-40" style={{
        background: 'linear-gradient(120deg, rgba(233,69,69,0.25), rgba(245,197,66,0.18), rgba(233,69,69,0.25))',
        backgroundSize: '200% 200%',
        animation: 'fireflow 12s ease-in-out infinite'
      }} />
      <div className="container-page py-20">
        <h2 className="section-title">Stop the Fire Before It Starts.</h2>
        <p className="muted mt-3 max-w-2xl">
          Remote monitoring, instant alerts, and actionable guidance—so your family, tenants, and assets stay safe.
        </p>
        <form className="mt-8 flex w-full max-w-xl gap-3">
          <input type="email" placeholder="Enter your email" className="flex-1 rounded-lg bg-white text-black px-4 py-3 shadow focus:outline-none focus:ring-2 focus:ring-primary" />
          <button type="submit" className="btn btn-primary">Get Started</button>
        </form>
      </div>
    </Section>
  );
}
