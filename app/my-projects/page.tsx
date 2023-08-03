"use client";

import ParticlesWrapper from "@/components/home/particles-wrapper";
import { ProjectsWrapper } from "@/components/projects/projects-wrapper";
import getProjectsData from "@/lib/get-projects";

const MyProjectsPage: () => Promise<JSX.Element> = async () => {
  const projects: Project[] = await getProjectsData();

  return (
    <div className="flex flex-col justify-center min-h-screen overflow-hidden min-w-screen bg-gradient-to-tl from-slate-300 via-slate-400/20 to-slate-300 dark:from-black dark:via-zinc-600/20 dark:to-black">
      <ParticlesWrapper
        className="absolute inset-0 min-h-screen -z-1"
        quantity={1000}
      />
      <span className="mt-10 text-5xl font-bold ml-[20%] text-zinc-800 group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white font-display mx-auto animate-fade-in">
        Projets Web & Mobiles
      </span>
      <ProjectsWrapper allProjects={projects} type="web" />
      <span className="text-5xl ml-[20%] font-bold text-left text-zinc-800 group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white font-display mx-auto animate-fade-in">
        Autres Projets
      </span>
      <ProjectsWrapper allProjects={projects} type="not_web" />
    </div>
  );
};

export default MyProjectsPage;
