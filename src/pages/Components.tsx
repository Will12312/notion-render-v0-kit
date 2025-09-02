import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap, Shield, Palette } from "lucide-react";
import Navigation from "@/components/ui/navigation";

const ComponentsShowcase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto max-w-6xl p-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Design System Components
          </h1>
          <p className="text-lg text-muted-foreground">
            A showcase of all available UI components and design tokens
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Color Palette</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-primary"></div>
              <p className="text-sm text-muted-foreground">Primary</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-secondary"></div>
              <p className="text-sm text-muted-foreground">Secondary</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-accent"></div>
              <p className="text-sm text-muted-foreground">Accent</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-muted"></div>
              <p className="text-sm text-muted-foreground">Muted</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-destructive"></div>
              <p className="text-sm text-muted-foreground">Destructive</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-gradient-to-r from-primary to-primary/60"></div>
              <p className="text-sm text-muted-foreground">Gradient</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Typography</h2>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Heading 1</h1>
            <h2 className="text-3xl font-semibold text-foreground">Heading 2</h2>
            <h3 className="text-2xl font-medium text-foreground">Heading 3</h3>
            <p className="text-base text-foreground">Body text - Regular paragraph text</p>
            <p className="text-sm text-muted-foreground">Muted text - Secondary information</p>
            <p className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent text-xl font-semibold">
              Gradient text effect
            </p>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
            <Button>
              <Zap className="mr-2 h-4 w-4" />
              With Icon
            </Button>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Cards & Content</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Feature Card</h3>
              <p className="text-muted-foreground">
                This is a basic feature card with an icon and description.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Security</h3>
              <p className="text-muted-foreground">
                Built with security best practices and modern standards.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Design</h3>
              <p className="text-muted-foreground">
                Beautiful, modern design that adapts to your brand.
              </p>
            </Card>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Badges & Labels</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Error</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Form Elements</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Enter password" />
            </div>
          </div>
        </section>

        {/* Shadows & Effects */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Shadows & Effects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 shadow-sm">
              <h3 className="font-semibold text-foreground">Small Shadow</h3>
              <p className="text-sm text-muted-foreground">shadow-sm</p>
            </Card>
            <Card className="p-6 shadow-md">
              <h3 className="font-semibold text-foreground">Medium Shadow</h3>
              <p className="text-sm text-muted-foreground">shadow-md</p>
            </Card>
            <Card className="p-6 shadow-lg">
              <h3 className="font-semibold text-foreground">Large Shadow</h3>
              <p className="text-sm text-muted-foreground">shadow-lg</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComponentsShowcase;