import { Zap, Shield, Palette, Code, Users, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with modern web technologies for blazing fast performance and optimal user experience."
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Industry-standard security practices and authentication built-in from day one."
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Clean, modern interface inspired by the best design systems and user experiences."
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Clean codebase with TypeScript, comprehensive docs, and excellent developer experience."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in team management, roles, and permissions for seamless collaboration."
    },
    {
      icon: BarChart3,
      title: "Analytics Ready",
      description: "Integrated analytics and monitoring to track your SaaS metrics and user behavior."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Everything you need to
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> launch faster</span>
          </h2>
          <p className="text-balance text-lg text-muted-foreground">
            A complete toolkit with all the features and integrations 
            you need to build and scale your SaaS product.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title} className="p-6 group hover:shadow-lg transition-all duration-300">
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;