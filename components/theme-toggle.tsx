"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so this is safe
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="glass-effect border hover:border-primary transition-colors bg-transparent"
        aria-label="Toggle theme"
        disabled
      >
        <div className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="glass-effect border hover:border-primary transition-colors bg-transparent"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary" />
      ) : (
        <Moon className="h-5 w-5 text-primary" />
      )}
    </Button>
  );
}
