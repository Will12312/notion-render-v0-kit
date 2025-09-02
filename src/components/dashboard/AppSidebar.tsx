import { 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  ShoppingCart, 
  FileText,
  Plus
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Users", url: "/dashboard/users", icon: Users },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "Orders", url: "/dashboard/orders", icon: ShoppingCart },
  { title: "Reports", url: "/dashboard/reports", icon: FileText },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-foreground/5 text-foreground font-medium border-r-2 border-foreground" 
      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5";

  return (
    <Sidebar
      className={collapsed ? "w-16" : "w-72"}
      collapsible="icon"
    >
      <SidebarHeader className="h-16 border-r border-border/20">
        <div className="flex items-center px-6 h-full">
          <div className="h-6 w-6 rounded-md bg-foreground flex items-center justify-center">
            <span className="text-background font-bold text-xs">K</span>
          </div>
          {!collapsed && (
            <span className="ml-3 text-base font-medium text-foreground tracking-tight">
              Krea
            </span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-0 border-r border-border/20">
        <SidebarGroup className="px-4 py-6">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="px-4 pb-4 border-t border-border/20 pt-4 mt-auto">
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button className="w-full flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/5 py-2">
                  <Plus className="h-4 w-4" />
                  <span>New Project</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}