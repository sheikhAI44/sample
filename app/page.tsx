import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import SocialProofSection from "./components/SocialProofSection";
import PricingSection from "./components/PricingSection";
import FooterCTA from "./components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Social Proof / Stats Section */}
      <SocialProofSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Footer with CTA */}
      <FooterCTA />
    </main>
  );
}
