import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", section: "motivation" },
    { label: "Responsibilities", section: "responsibilities" },
    { label: "Education", section: "education" },
    { label: "Skills", section: "skills" },
    { label: "Career", section: "career" }
  ];

  const handleNavClick = (section: string) => {
    onNavigate?.(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick('hero')}
            className="text-xl font-bold hover-elevate px-3 py-1 rounded-md"
            data-testid="button-nav-logo"
          >
            Career Path
          </button>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                onClick={() => handleNavClick(item.section)}
                data-testid={`button-nav-${item.section}`}
              >
                {item.label}
              </Button>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-nav-mobile-toggle"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => handleNavClick(item.section)}
                data-testid={`button-nav-mobile-${item.section}`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
