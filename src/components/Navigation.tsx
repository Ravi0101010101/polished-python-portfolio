import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold font-mono">
          Ravi
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className="px-4 py-2 hover:text-primary transition-colors">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className="px-4 py-2 hover:text-primary transition-colors">
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/projects" className="px-4 py-2 hover:text-primary transition-colors">
                Projects
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className="px-4 py-2 hover:text-primary transition-colors">
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </header>
  );
};