import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { FEATURES } from "../config/features";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40 z-50 border-b border-border/20">
      <div className="container flex h-20 items-center justify-between">
        <div className="font-bold text-2xl relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-lg group-hover:blur-xl transition-all opacity-70 group-hover:opacity-100" />
          <span className="relative">
            <span className="text-primary">&lt;</span>
            codecraftdev
            <span className="text-primary">/&gt;</span>
          </span>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-2">
            {FEATURES.SHOW_PORTFOLIO && (
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="cursor-pointer px-4 py-2 text-sm font-medium transition-all hover:text-primary hover:bg-primary/10 rounded-full"
                  onClick={() => scrollToSection("portfolio")}
                >
                  Portfolio
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer px-4 py-2 text-sm font-medium transition-all hover:text-primary hover:bg-primary/10 rounded-full"
                onClick={() => scrollToSection("pricing")}
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer px-4 py-2 text-sm font-medium transition-all hover:text-primary hover:bg-primary/10 rounded-full"
                onClick={() => scrollToSection("team")}
              >
                Team
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button 
          onClick={() => scrollToSection("contact")}
          className="bg-primary/90 hover:bg-primary transition-all duration-300 rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40"
        >
          Contact Us
        </Button>
      </div>
    </header>
  );
}
