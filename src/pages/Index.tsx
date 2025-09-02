import Navigation from "@/components/ui/navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Welcome to Your SaaS
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Build something amazing with this clean, minimal starter.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;