"use client";

import { useTheme } from "next-themes";
import Particles from "@/components/home/particles";

export default function ParticlesWrapper(props: any) {
  const { theme } = useTheme();

  return <Particles {...props} darkMode={theme === "dark"} />;
}
