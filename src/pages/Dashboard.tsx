import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-semibold text-foreground mb-6">
                Tableau de bord
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Cartes de statistiques factices */}
                <div className="card-modern p-6">
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Utilisateurs actifs
                  </h3>
                  <p className="text-3xl font-semibold text-primary">1,234</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    +12% par rapport au mois dernier
                  </p>
                </div>
                
                <div className="card-modern p-6">
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Revenus
                  </h3>
                  <p className="text-3xl font-semibold text-primary">€45,670</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    +8% par rapport au mois dernier
                  </p>
                </div>
                
                <div className="card-modern p-6">
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Commandes
                  </h3>
                  <p className="text-3xl font-semibold text-primary">892</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    +15% par rapport au mois dernier
                  </p>
                </div>
              </div>
              
              <div className="mt-8 card-modern p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Activité récente
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-border/50">
                    <div>
                      <p className="font-medium text-foreground">Nouvelle commande</p>
                      <p className="text-sm text-muted-foreground">Commande #1234 - €299</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Il y a 5 min</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border/50">
                    <div>
                      <p className="font-medium text-foreground">Nouvel utilisateur</p>
                      <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Il y a 12 min</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium text-foreground">Paiement reçu</p>
                      <p className="text-sm text-muted-foreground">€450 de Premium Corp</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Il y a 1h</span>
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