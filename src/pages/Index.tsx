import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import FeaturesSection from "@/components/ui/features-section";
import PricingSection from "@/components/ui/pricing-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;