"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, SunMedium } from "lucide-react";
import Button from "../ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="Ghost"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="sm"
    >
      <SunMedium className="block dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  );
}

export default ThemeToggle;
