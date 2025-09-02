import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 px-12 py-10">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center">
                <h1 className="text-2xl font-medium text-foreground mb-2">
                  Dashboard
                </h1>
                <p className="text-muted-foreground text-sm">
                  Suivez vos performances en temps réel
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card/50 border-0 rounded-2xl p-8 text-center hover:bg-card/80 transition-all duration-200">
                  <p className="text-4xl font-light text-foreground mb-2">1,234</p>
                  <p className="text-sm text-muted-foreground mb-3">Utilisateurs actifs</p>
                  <p className="text-xs text-emerald-600 font-medium">+12%</p>
                </div>
                
                <div className="bg-card/50 border-0 rounded-2xl p-8 text-center hover:bg-card/80 transition-all duration-200">
                  <p className="text-4xl font-light text-foreground mb-2">€45,670</p>
                  <p className="text-sm text-muted-foreground mb-3">Revenus</p>
                  <p className="text-xs text-emerald-600 font-medium">+8%</p>
                </div>
                
                <div className="bg-card/50 border-0 rounded-2xl p-8 text-center hover:bg-card/80 transition-all duration-200">
                  <p className="text-4xl font-light text-foreground mb-2">892</p>
                  <p className="text-sm text-muted-foreground mb-3">Commandes</p>
                  <p className="text-xs text-emerald-600 font-medium">+15%</p>
                </div>
              </div>
              
              <div className="bg-card/30 border-0 rounded-2xl p-8">
                <h2 className="text-lg font-medium text-foreground mb-8 text-center">
                  Activité récente
                </h2>
                <div className="space-y-6 max-w-2xl mx-auto">
                  <div className="flex items-center justify-between py-4">
                    <div className="flex-1">
                      <p className="font-medium text-foreground text-sm">Nouvelle commande</p>
                      <p className="text-xs text-muted-foreground mt-1">Commande #1234 - €299</p>
                    </div>
                    <span className="text-xs text-muted-foreground">5 min</span>
                  </div>
                  <div className="h-px bg-border/30"></div>
                  <div className="flex items-center justify-between py-4">
                    <div className="flex-1">
                      <p className="font-medium text-foreground text-sm">Nouvel utilisateur</p>
                      <p className="text-xs text-muted-foreground mt-1">john.doe@example.com</p>
                    </div>
                    <span className="text-xs text-muted-foreground">12 min</span>
                  </div>
                  <div className="h-px bg-border/30"></div>
                  <div className="flex items-center justify-between py-4">
                    <div className="flex-1">
                      <p className="font-medium text-foreground text-sm">Paiement reçu</p>
                      <p className="text-xs text-muted-foreground mt-1">€450 de Premium Corp</p>
                    </div>
                    <span className="text-xs text-muted-foreground">1h</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;