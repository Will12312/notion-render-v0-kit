import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function DashboardHeader() {
  const handleLogout = () => {
    // TODO: Implémenter la déconnexion plus tard
    console.log("Déconnexion");
  };

  return (
    <header className="h-16 border-b border-border/50 bg-background">
      <div className="flex h-full items-center justify-between px-6">
        {/* Gauche - Trigger sidebar */}
        <div className="flex items-center">
          <SidebarTrigger className="mr-4" />
        </div>

        {/* Droite - Profil utilisateur et déconnexion */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-sm">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-gradient-to-r from-primary to-primary/60 text-white text-xs font-medium">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="font-medium text-foreground">John Doe</p>
              <p className="text-xs text-muted-foreground">john.doe@example.com</p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="text-muted-foreground hover:text-foreground hover:bg-accent"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </div>
    </header>
  );
}