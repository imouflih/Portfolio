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
    <div className="flex flex-col justify-center min-h-screen -mt-[68px] overflow-hidden bg-gradient-to-tl from-slate-300 via-slate-400/20 to-slate-300 dark:from-black dark:via-zinc-600/20 dark:to-black">
      <ParticlesWrapper
        className="absolute inset-0 min-h-screen -z-1"
        quantity={1000}
      />
      <ProjectHeader project={project} />
    </div>
  );
};

export default SingleProjectPage;
