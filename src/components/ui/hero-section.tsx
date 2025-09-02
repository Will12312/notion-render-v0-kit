import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import "./hero-section.module.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Now in public beta
          </div>

          {/* Main heading */}
          <h1 className="hero-title">
            Build your SaaS
            <span className="gradient-text"> faster than ever</span>
          </h1>

          {/* Subheading */}
          <p className="hero-subtitle">
            A modern, beautiful, and production-ready SaaS boilerplate. 
            Ship your idea in days, not months.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <Button size="lg">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6">Trusted by developers worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {/* Placeholder for company logos */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-20 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;