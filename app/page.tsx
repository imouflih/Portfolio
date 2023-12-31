import { siteConfig } from "@/config/site";
import ParticlesWrapper from "@/components/home/particles-wrapper";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen -mb-[68px] overflow-hidden min-w-screen bg-gradient-to-tl from-slate-300 via-slate-400/20 to-slate-300 dark:from-black dark:via-zinc-600/20 dark:to-black">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-black/0 via-black/50 to-black/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
      <ParticlesWrapper
        className="absolute inset-0 min-h-screen -z-10"
        quantity={1000}
      />
      <h1 className="z-10 text-6xl text-transparent duration-1000 bg-black cursor-default dark:bg-white text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text">
        MOUFLIH Iliasse
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-black/0 via-black/50 to-black/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
      <div className="flex items-center justify-center my-16 animate-fade-in animate-oscillate-2">
        <h2 className="text-base text-zinc-800 dark:text-zinc-400 text-justify w-[70%] indent-12">
          {siteConfig.me.description.map((line) => (
            <>
              <p key={null}>{line}</p>
              <br />
            </>
          ))}
        </h2>
      </div>
    </div>
  );
}
