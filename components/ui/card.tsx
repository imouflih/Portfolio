import {
  MotionValue,
  motion,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { PropsWithChildren, ReactNode } from "react";

export const Card: React.FC<PropsWithChildren> = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const mouseX: MotionValue<any> = useSpring(0, {
    stiffness: 500,
    damping: 100,
  });
  const mouseY: MotionValue<any> = useSpring(0, {
    stiffness: 500,
    damping: 100,
  });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  let maskImage: MotionValue<string> = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style: {
    maskImage: MotionValue<string>;
    WebkitMaskImage: MotionValue<string>;
  } = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className="relative overflow-hidden border rounded-xl hover:border-zinc-600 dark:hover:border-zinc-100/50 border-zinc-500/50 dark:border-zinc-600 bg-gradient-to-tl from-slate-400/20 via-slate-200 to-slate-400/20 dark:from-black/20 dark:via-zinc-600/20 dark:to-black-800/20"
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0" />
        <motion.div
          className="absolute inset-0 z-10 opacity-100 bg-gradient-to-br via-zinc-100/10"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay group-hover:opacity-0 dark:group-hover:opacity-100"
          style={style}
        />
      </div>
      {children}
    </div>
  );
};
