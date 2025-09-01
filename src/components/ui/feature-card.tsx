import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className = "" }: FeatureCardProps) => {
  return (
    <div className={`card-modern p-6 group hover:shadow-lg transition-all duration-300 ${className}`}>
      {/* Icon */}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-subtle">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;