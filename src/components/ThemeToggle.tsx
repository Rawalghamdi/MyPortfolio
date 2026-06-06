import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("light", initialTheme === "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      className="relative group border-2 border-primary/20 hover:border-primary/40 rounded-2xl transition-all duration-300 cursor-pointer z-50"
    >
      <div className="relative w-6 h-6">
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-primary group-hover:text-accent transition-all duration-300 group-hover:rotate-180 group-hover:scale-110" />
        ) : (
          <Moon className="w-5 h-5 text-primary group-hover:text-accent transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110" />
        )}
      </div>
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </Button>
  );
};

export default ThemeToggle;
