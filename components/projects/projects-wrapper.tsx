import Link from "next/link";
import { Card } from "../ui/card";

type Props = {
  allProjects: Project[];
  type: string;
};

export const ProjectsWrapper: ({ allProjects, type }: Props) => JSX.Element = ({
  allProjects,
  type,
}: Props) => {
  allProjects = allProjects.sort(
    (a: Project, b: Project) => a.priority - b.priority
  );

  return (
    <div className="flex items-center justify-center px-6 py-8 mx-auto animate-fade-in w-[90%] max-w-7xl">
      <div className="grid w-full grid-cols-3 gap-8 mx-auto">
        {allProjects.map((project: Project, index: number) =>
          project.type === type && type === "web" ? (
            <Card key={index + 1}>
              <Link
                href={project.href}
                className="relative flex flex-col gap-4 p-6 group"
              >
                <div className="flex flex-col justify-start min-h-[220px]">
                  <span className="text-3xl font-bold text-zinc-800 group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white font-display">
                    {project.title}
                  </span>
                  <span className="mt-4 text-base text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200">
                    {project.desc}
                  </span>
                  <div className="grid grid-cols-5 mt-auto">
                    {project.technologies.map((tech: string, index: number) => {
                      return (
                        <div
                          dangerouslySetInnerHTML={{ __html: tech }}
                          className="w-12 h-12 mb-2 space-x-2 fill-current"
                          key={index + 1}
                        />
                      );
                    })}
                  </div>
                </div>
              </Link>
            </Card>
          ) : project.type != "web" && type != "web" ? (
            <Card key={index + 1}>
              <Link
                href={project.href}
                className="relative flex flex-col gap-4 p-6 group"
              >
                <div className="flex flex-col justify-start min-h-[220px]">
                  <span className="text-3xl font-bold text-zinc-800 group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white font-display">
                    {project.title}
                  </span>
                  <span className="mt-4 text-base text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200">
                    {project.desc}
                  </span>
                  <div className="grid grid-cols-5 mt-auto">
                    {project.technologies.map((tech: string, index: number) => {
                      return (
                        <div
                          dangerouslySetInnerHTML={{ __html: tech }}
                          className="w-12 h-12 mb-2 space-x-2 fill-current"
                          key={index + 1}
                        />
                      );
                    })}
                  </div>
                </div>
              </Link>
            </Card>
          ) : null
        )}
      </div>
    </div>
  );
};
