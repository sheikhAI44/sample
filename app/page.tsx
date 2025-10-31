import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Installations from './components/Installations';
import Podcast from './components/Podcast';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <HowItWorks />
      <Installations />
      <Podcast />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
