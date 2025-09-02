import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle -z-10"></div>
      
      <div className="container-modern">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-border/50 bg-card/50 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm mb-8">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Now in public beta
          </div>

          {/* Main heading */}
          <h1 className="text-balance mb-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Build your SaaS
            <span className="gradient-text"> faster than ever</span>
          </h1>

          {/* Subheading */}
          <p className="text-balance mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            A modern, beautiful, and production-ready SaaS boilerplate. 
            Ship your idea in days, not months.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="px-8">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
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