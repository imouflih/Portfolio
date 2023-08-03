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
    <div>
      <ParticlesWrapper
        className="absolute inset-0 min-h-screen -z-1"
        quantity={1000}
      />
      <p>{project.title}</p>
    </div>
  );
};

export default SingleProjectPage;
