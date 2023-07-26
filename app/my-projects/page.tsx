import ParticlesWrapper from "@/components/home/particles-wrapper";

const MyProjectsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden min-w-screen bg-gradient-to-tl from-slate-500 via-white/20 to-slate-500 dark:from-black dark:via-zinc-600/20 dark:to-black">
      <ParticlesWrapper
        className="absolute inset-0 min-h-screen -z-1"
        quantity={1000}
      />
    </div>
  );
};

export default MyProjectsPage;
