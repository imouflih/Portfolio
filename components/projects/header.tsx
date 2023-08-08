import Link from "next/link";

export const ProjectHeader: ({
  project,
}: {
  project: Project;
}) => JSX.Element = ({ project }: { project: Project }) => {
  return (
    <div className="container relative py-10 mx-auto overflow-hidden isolate animate-fade-in">
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
          <div className="flex text-base font-semibold leading-7 gap-y-6 gap-x-8">
            {project.github && (
              <Link target="_blank" key="github" href={project.github}>
                Github <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
            {project.link && (
              <Link target="_blank" key="link" href={project.link}>
                Link <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
