import { Zap, Shield, Palette, Code, Users, BarChart3 } from "lucide-react";
import FeatureCard from "./feature-card";

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
      <div className="container-modern">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Everything you need to
            <span className="gradient-text"> launch faster</span>
          </h2>
          <p className="text-balance text-lg text-muted-foreground">
            A complete toolkit with all the features and integrations 
            you need to build and scale your SaaS product.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={index === 2 ? "md:col-span-2 lg:col-span-1" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;