"use client";

import ParticlesWrapper from "@/components/home/particles-wrapper";
import { Card } from "@/components/ui/card";
import { Code2, Codepen, Codesandbox } from "lucide-react";
import Link from "next/link";

const MyProjectsPage = () => {
  const projects = [
    {
      href: "/my-projects",
      label: "Linkedin",
      title: "titre-1",
      desc: "description-1",
      technologies: [
        <Codepen size={20} key={null} />,
        <Code2 size={20} key={null} />,
        <Codesandbox size={20} key={null} />,
      ],
    },
    {
      href: "/my-projects",
      label: "Email",
      title: "titre-2",
      desc: "description-2",
      technologies: [
        <Codepen size={20} key={null} />,
        <Code2 size={20} key={null} />,
        <Codesandbox size={20} key={null} />,
      ],
    },
    {
      href: "/my-projects",
      label: "Github",
      title: "titre-3",
      desc: "description-3",
      technologies: [
        <Codepen size={20} key={null} />,
        <Code2 size={20} key={null} />,
        <Codesandbox size={20} key={null} />,
      ],
    },
    {
      href: "/my-projects",
      label: "Github",
      title: "titre-4",
      desc: "description-4",
      technologies: [
        <Codepen size={20} key={null} />,
        <Code2 size={20} key={null} />,
        <Codesandbox size={20} key={null} />,
      ],
    },
    {
      href: "/my-projects",
      label: "Github",
      title: "titre-5",
      desc: "description-5",
      technologies: [
        <Codepen size={20} key={null} />,
        <Code2 size={20} key={null} />,
        <Codesandbox size={20} key={null} />,
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden min-w-screen bg-gradient-to-tl from-slate-300 via-slate-400/20 to-slate-300 dark:from-black dark:via-zinc-600/20 dark:to-black">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-black/0 via-black/50 to-black/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
      <ParticlesWrapper
        className="absolute inset-0 min-h-screen -z-1"
        quantity={1000}
      />
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto animate-fade-in w-[90%]">
        <div className="grid w-full grid-cols-3 gap-8 mx-auto mt-32">
          {projects.map((project) => (
            <Card key={null}>
              <Link
                href={project.href}
                target="_blank"
                className="relative flex flex-col gap-4 p-6 group"
              >
                <div className="z-10 flex flex-col">
                  <span className="text-3xl font-bold text-zinc-800 group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white font-display">
                    {project.title}
                  </span>
                  <span className="mt-4 text-base text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200">
                    {project.desc}
                  </span>
                  <div className="flex pt-4 space-x-2">
                    {project.technologies.map((tech) => tech)}
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-black/0 via-black/50 to-black/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
    </div>
  );
};

export default MyProjectsPage;
