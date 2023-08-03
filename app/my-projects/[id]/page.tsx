import ParticlesWrapper from "@/components/home/particles-wrapper";

const SingleProjectPage: ({
  params,
}: {
  params: {
    id: string;
  };
}) => Promise<JSX.Element> = async ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <ParticlesWrapper
        className="absolute inset-0 min-h-screen -z-1"
        quantity={1000}
      />
      <p>{params.id}</p>
    </div>
  );
};

export default SingleProjectPage;
