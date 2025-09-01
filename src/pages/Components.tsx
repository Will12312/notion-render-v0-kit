import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FeatureCard from "@/components/ui/feature-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Zap, 
  Shield, 
  Palette, 
  Code, 
  Users, 
  BarChart3,
  Star,
  Heart,
  ArrowRight,
  Search,
  Settings,
  Bell,
  Download
} from "lucide-react";

const ComponentsShowcase = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container-modern py-8">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-4">
              Design System
              <span className="gradient-text"> Components</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez tous les composants de notre design system inspiré de Notion, v0 et Render
            </p>
          </div>
        </div>
      </div>

      <div className="container-modern py-12 space-y-16">
        
        {/* Color Palette */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Palette de Couleurs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="card-modern p-4 text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-3"></div>
              <p className="text-sm font-medium text-foreground">Primary</p>
              <p className="text-xs text-muted-foreground">--primary</p>
            </div>
            <div className="card-modern p-4 text-center">
              <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-3"></div>
              <p className="text-sm font-medium text-foreground">Secondary</p>
              <p className="text-xs text-muted-foreground">--secondary</p>
            </div>
            <div className="card-modern p-4 text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-3"></div>
              <p className="text-sm font-medium text-foreground">Accent</p>
              <p className="text-xs text-muted-foreground">--accent</p>
            </div>
            <div className="card-modern p-4 text-center">
              <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-3"></div>
              <p className="text-sm font-medium text-foreground">Muted</p>
              <p className="text-xs text-muted-foreground">--muted</p>
            </div>
            <div className="card-modern p-4 text-center">
              <div className="w-16 h-16 bg-destructive rounded-lg mx-auto mb-3"></div>
              <p className="text-sm font-medium text-foreground">Destructive</p>
              <p className="text-xs text-muted-foreground">--destructive</p>
            </div>
            <div className="card-modern p-4 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-3"></div>
              <p className="text-sm font-medium text-foreground">Gradient</p>
              <p className="text-xs text-muted-foreground">Primary</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Typographie</h2>
          <div className="card-modern p-8 space-y-6">
            <div>
              <h1 className="mb-2">Heading 1 - Display Title</h1>
              <p className="text-sm text-muted-foreground">text-3xl md:text-4xl lg:text-5xl font-semibold</p>
            </div>
            <div>
              <h2 className="mb-2">Heading 2 - Section Title</h2>
              <p className="text-sm text-muted-foreground">text-2xl md:text-3xl font-semibold</p>
            </div>
            <div>
              <h3 className="mb-2">Heading 3 - Subsection</h3>
              <p className="text-sm text-muted-foreground">text-xl md:text-2xl font-semibold</p>
            </div>
            <div>
              <h4 className="mb-2">Heading 4 - Component Title</h4>
              <p className="text-sm text-muted-foreground">text-lg md:text-xl font-medium</p>
            </div>
            <div>
              <p className="text-foreground mb-2">Body Text - Regular paragraph text with good readability</p>
              <p className="text-sm text-muted-foreground">text-base text-foreground</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">Muted Text - Secondary information and descriptions</p>
              <p className="text-sm text-muted-foreground">text-muted-foreground</p>
            </div>
            <div>
              <p className="gradient-text mb-2 text-xl font-semibold">Gradient Text - For special emphasis</p>
              <p className="text-sm text-muted-foreground">gradient-text class</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Boutons</h2>
          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Primary Buttons */}
            <div className="card-modern p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Primary Buttons</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button disabled>Disabled</Button>
                  <Button>
                    With Icon <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div className="card-modern p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Secondary Buttons</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="sm">Small</Button>
                  <Button variant="secondary">Default</Button>
                  <Button variant="secondary" size="lg">Large</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
            </div>

            {/* Destructive Buttons */}
            <div className="card-modern p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Destructive Actions</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="destructive">Delete</Button>
                  <Button variant="destructive" size="sm">Remove</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                    Cancel Subscription
                  </Button>
                </div>
              </div>
            </div>

            {/* Icon Buttons */}
            <div className="card-modern p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Icon Buttons</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Bell className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Feature Cards</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Built with modern web technologies for blazing fast performance and optimal user experience."
            />
            <FeatureCard
              icon={Shield}
              title="Secure by Default"
              description="Industry-standard security practices and authentication built-in from day one."
            />
            <FeatureCard
              icon={Palette}
              title="Beautiful Design"
              description="Clean, modern interface inspired by the best design systems and user experiences."
            />
            <FeatureCard
              icon={Code}
              title="Developer Friendly"
              description="Clean codebase with TypeScript, comprehensive docs, and excellent developer experience."
            />
            <FeatureCard
              icon={Users}
              title="Team Collaboration"
              description="Built-in team management, roles, and permissions for seamless collaboration."
            />
            <FeatureCard
              icon={BarChart3}
              title="Analytics Ready"
              description="Integrated analytics and monitoring to track your SaaS metrics and user behavior."
            />
          </div>
        </section>

        {/* Cards & Content */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Cards & Content</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Basic Card */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Basic Card</h3>
              <p className="text-muted-foreground mb-4">
                Une card simple avec du contenu basique et un style épuré.
              </p>
              <Button variant="outline" size="sm">Action</Button>
            </Card>

            {/* Stats Card */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">Active Users</h3>
                <Users className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">12,543</div>
              <p className="text-sm text-muted-foreground">+12% from last month</p>
            </Card>

            {/* Feature Highlight Card */}
            <Card className="p-6 bg-gradient-subtle border-border/50">
              <div className="flex items-center mb-3">
                <Star className="h-5 w-5 text-primary mr-2" />
                <Badge variant="secondary">Premium</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Premium Feature</h3>
              <p className="text-muted-foreground mb-4">
                Débloquez des fonctionnalités avancées pour votre équipe.
              </p>
              <Button size="sm">Upgrade Now</Button>
            </Card>
          </div>
        </section>

        {/* Badges & Labels */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Badges & Labels</h2>
          <div className="card-modern p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold mb-3 text-foreground">Default Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-3 text-foreground">Status Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100/80 dark:bg-green-900 dark:text-green-300">Active</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 dark:bg-yellow-900 dark:text-yellow-300">Pending</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100/80 dark:bg-red-900 dark:text-red-300">Inactive</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100/80 dark:bg-blue-900 dark:text-blue-300">Processing</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Form Elements</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Input Fields</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Password</label>
                  <Input type="password" placeholder="Enter your password" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-10" placeholder="Search..." />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Form Actions</h3>
              <div className="space-y-4">
                <Button className="w-full">Submit Form</Button>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">Cancel</Button>
                  <Button variant="secondary" className="flex-1">Save Draft</Button>
                </div>
                <Button variant="ghost" className="w-full">Reset Form</Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Shadows & Effects */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Shadows & Effects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 shadow-sm">
              <h3 className="text-base font-semibold mb-2 text-foreground">Small Shadow</h3>
              <p className="text-sm text-muted-foreground">shadow-sm - Subtle elevation</p>
            </Card>
            <Card className="p-6 shadow-md">
              <h3 className="text-base font-semibold mb-2 text-foreground">Medium Shadow</h3>
              <p className="text-sm text-muted-foreground">shadow-md - Standard elevation</p>
            </Card>
            <Card className="p-6 shadow-lg">
              <h3 className="text-base font-semibold mb-2 text-foreground">Large Shadow</h3>
              <p className="text-sm text-muted-foreground">shadow-lg - High elevation</p>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ComponentsShowcase;