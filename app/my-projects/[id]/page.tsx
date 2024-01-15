import ParticlesWrapper from "@/components/home/particles-wrapper";
import { ProjectHeader } from "@/components/projects/header";
import getProjectByName from "@/lib/get-project-by-name";

const SingleProjectPage: ({
  params,
}: {
  params: {
    id: string;
  };
}) => Promise<JSX.Element> = async ({ params }: { params: { id: string } }) => {
  const project: Project = await getProjectByName(params.id);

  return (
    <div className="flex flex-col justify-center min-h-screen -mt-[68px] pt-10 overflow-hidden bg-gradient-to-tl from-slate-300 via-slate-400/20 to-slate-300 dark:from-black dark:via-zinc-600/20 dark:to-black">
      <ParticlesWrapper
        className="absolute inset-0 min-h-screen -z-1"
        quantity={1000}
      />
      <ProjectHeader project={project} />
      <div className="hidden w-screen h-px animate-glow animate-fade-in md:block bg-gradient-to-r from-black/0 via-black/50 to-black/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
      <div className="container relative py-10 mx-auto overflow-hidden isolate animate-fade-in">
        <div className="flex flex-col items-center max-w-5xl px-6 mx-auto text-justify">
          <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-200">
            {project.detailedDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
