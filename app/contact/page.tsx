"use client";

import ParticlesWrapper from "@/components/home/particles-wrapper";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/iliasse-mouflih/",
    label: "Linkedin",
    handle: "iliasse-mouflih",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:iliasse.mouflih.2001@gmail.com",
    label: "Email",
    handle: "iliasse.mouflih.2001@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/imouflih",
    label: "Github",
    handle: "imouflih",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden min-w-screen bg-gradient-to-tl from-slate-500 via-white/20 to-slate-500 dark:from-black dark:via-zinc-600/20 dark:to-black">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-black/0 via-black/50 to-black/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
      <ParticlesWrapper
        className="absolute inset-0 min-h-screen -z-1"
        quantity={1000}
      />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16 animate-cards">
          {socials.map((s) => (
            <Card key={null}>
              <Link
                href={s.href}
                target="_blank"
                className="relative flex flex-col items-center gap-4 p-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-800 dark:text-zinc-200 dark:group-hover:text-white dark:group-hover:bg-zinc-900 dark:border-zinc-500 bg-zinc-100 dark:bg-zinc-900 dark:group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 text-zinc-800 group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-black/0 via-black/50 to-black/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
    </div>
  );
}
