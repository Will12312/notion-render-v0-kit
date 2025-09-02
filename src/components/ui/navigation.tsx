import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-content">
          {/* Logo */}
          <div className="navigation-logo">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary"></div>
            <span className="ml-2 text-xl font-semibold">SaaS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="navigation-menu">
            <a href="#features" className="navigation-link">
              Features
            </a>
            <a href="#pricing" className="navigation-link">
              Pricing
            </a>
            <a href="/components" className="navigation-link">
              Components
            </a>
            <a href="#about" className="navigation-link">
              About
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="navigation-actions">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="mobile-menu-button">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;