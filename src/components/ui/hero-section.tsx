import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 inline-flex items-center gap-2 px-4 py-2">
            <Sparkles className="h-4 w-4" />
            Now in public beta
          </Badge>

          {/* Main heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Build your SaaS
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}faster than ever
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            The modern, production-ready SaaS boilerplate. 
            Ship your product in days, not months.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="min-w-[200px]">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              View Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-16">
            <p className="mb-6 text-sm text-muted-foreground">
              Trusted by developers worldwide
            </p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="h-8 w-20 rounded bg-muted"></div>
              <div className="h-8 w-20 rounded bg-muted"></div>
              <div className="h-8 w-20 rounded bg-muted"></div>
              <div className="h-8 w-20 rounded bg-muted"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;