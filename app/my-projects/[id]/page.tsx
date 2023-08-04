import ParticlesWrapper from "@/components/home/particles-wrapper";
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
      <div className="container relative py-24 mx-auto overflow-hidden isolate animate-fade-in">
        <div className="flex flex-col items-center px-6 mx-auto text-center max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold tracking-tight font-display">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              {project.desc}
            </p>
          </div>

          <div className="max-w-2xl mx-auto mt-10">
            <div className="grid grid-cols-1 text-base font-semibold leading-7 text-white gap-y-6 gap-x-8">
              Links
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
