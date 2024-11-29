import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border/40">
      <div className="container flex h-20 items-center justify-between">
        <div className="font-bold text-2xl">
          <span className="text-primary">&lt;</span>
          AgencyName
          <span className="text-primary">/&gt;</span>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => scrollToSection("portfolio")}
              >
                Portfolio
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => scrollToSection("pricing")}
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => scrollToSection("team")}
              >
                Team
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button 
          onClick={() => scrollToSection("contact")}
          className="bg-primary/90 hover:bg-primary transition-colors rounded-full px-6"
        >
          Contact Us
        </Button>
      </div>
    </header>
  );
}
