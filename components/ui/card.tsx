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
      className="relative overflow-hidden duration-700 border rounded-xl hover:bg-zinc-400/10 group md:gap-8 hover:border-zinc-100/50 border-zinc-600 "
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 transition duration-1000 opacity-100 bg-gradient-to-br via-zinc-100/10 group-hover:opacity-50 "
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 transition duration-1000 opacity-0 mix-blend-overlay group-hover:opacity-100"
          style={style}
        />
      </div>

      {children}
    </div>
  );
};
