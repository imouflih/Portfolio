import Particles from "@/components/home/particles";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden min-w-screen bg-gradient-to-tl from-slate-500 via-white/20 to-slate-500 dark:from-black dark:via-zinc-600/20 dark:to-black">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-black/0 via-black/50 to-black/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
      <Particles
        className="absolute inset-0 min-h-screen -z-10 animate-fade-in"
        quantity={1000}
      />
      <h1 className="z-10 text-6xl text-transparent duration-1000 bg-black cursor-default dark:bg-white text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text ">
        page not found
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-black/0 via-black/50 to-black/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
      <div className="flex items-center justify-center my-16 animate-fade-in">
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
