import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-border/20 bg-background/50 backdrop-blur-sm">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search..."
              className="pl-10 pr-4 py-1.5 text-sm bg-card/50 border border-border/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-foreground/20 w-64"
            />
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="text-muted-foreground hover:text-foreground hover:bg-card/50"
          >
            <Bell className="h-4 w-4" />
          </Button>

          <Avatar className="h-7 w-7">
            <AvatarFallback className="bg-foreground text-background text-xs font-medium">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}