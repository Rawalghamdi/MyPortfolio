import { useState, useEffect, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const section = document.getElementById(href.replace("#", ""));

    if (section) {
      const navOffset = window.innerWidth >= 768 ? 88 : 72;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: Math.max(sectionTop, 0), behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }

    setIsOpen(false);
  };

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-500 ${isScrolled ? "shadow-card" : ""}`}>
      {isScrolled && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full pointer-events-none" />}
      <div className="container-custom">
        <div className="relative flex items-center justify-center h-16 md:h-20">
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navItems.map((item) => (
              <a
                key={item.name} 
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={`relative px-4 xl:px-6 py-2.5 xl:py-3 font-bold text-[0.65rem] xl:text-[0.7rem] tracking-[0.12em] uppercase font-orbitron transition-all duration-300 rounded-xl cursor-pointer ${
                  activeSection === item.href.substring(1) 
                    ? "text-primary bg-primary/10 border-2 border-primary/40" 
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5 border-2 border-transparent hover:border-primary/20"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {activeSection === item.href.substring(1) && (
                  <div className="absolute inset-0 rounded-xl bg-primary/5 animate-pulse pointer-events-none" />
                )}
              </a>
            ))}
          </div>
          <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden relative min-h-[44px] min-w-[44px]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden fixed left-0 right-0 top-16 md:top-20 max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-border bg-background/95 backdrop-blur-xl shadow-card z-[10000] animate-fade-in">
          <div className="container-custom py-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name} 
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={`relative block w-full text-left px-6 py-4 font-bold text-sm tracking-[0.12em] uppercase font-orbitron rounded-xl transition-all cursor-pointer min-h-[48px] touch-manipulation active:scale-95 ${
                  activeSection === item.href.substring(1) 
                    ? "text-primary bg-primary/10 border-2 border-primary/30" 
                    : "text-muted-foreground hover:bg-primary/5 hover:text-foreground border-2 border-transparent"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
