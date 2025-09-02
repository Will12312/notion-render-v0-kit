import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "Community support",
        "Core features"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Best for growing businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "All features",
        "Custom integrations",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Dedicated support",
        "Custom contracts",
        "SLA guarantees",
        "On-premise deployment",
        "Advanced security"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Simple, transparent
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> pricing</span>
          </h2>
          <p className="text-balance text-lg text-muted-foreground">
            Choose the perfect plan for your needs. 
            Start free and scale as you grow.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={plan.name} className={`relative p-8 ${plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              
              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include our core features and 30-day money-back guarantee.
            <br />
            <a href="#" className="text-primary hover:underline">
              Questions? Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;