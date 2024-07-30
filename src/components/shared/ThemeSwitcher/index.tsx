"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      aria-label="theme switcher"
      variant="ghost"
      onClick={handleThemeChange}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};
