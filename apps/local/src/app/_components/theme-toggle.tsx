"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative rounded-full p-2 hover:bg-primary-foreground/10"
    >
      <Sun className="h-5 w-5 transition-all dark:absolute dark:opacity-0" />
      <Moon className="absolute h-5 w-5 opacity-0 transition-all dark:static dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
