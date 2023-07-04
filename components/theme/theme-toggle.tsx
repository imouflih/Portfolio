"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, SunMedium } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <SunMedium className="block dark:hidden" />
      <Moon className="hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export default ThemeToggle;
