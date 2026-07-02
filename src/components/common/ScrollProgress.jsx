import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  return (
    <>
      {/* Background */}
      <div className="pointer-events-none fixed left-0 top-0 z-[99997] h-[5px] w-full bg-white/[0.03]" />

      {/* Glow */}
      <motion.div
        style={{ scaleX }}
        className="pointer-events-none fixed left-0 top-0 z-[99998] h-[8px] w-full origin-left bg-cyan-400/40 blur-md"
      />

      {/* Main Progress */}
      <motion.div
        style={{ scaleX }}
        className="pointer-events-none fixed left-0 top-0 z-[99999] h-[4px] w-full origin-left overflow-hidden rounded-r-full"
      >
        <motion.div
          animate={{
            backgroundPosition: [
              "0% 50%",
              "100% 50%",
              "0% 50%",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full w-full bg-[length:300%_300%] bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-cyan-400"
        />

        <motion.div
          animate={{
            x: ["-100%", "300%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />
      </motion.div>

      {/* Glow Ball */}
      <motion.div
        animate={{
          left: `calc(${progress * 100}% - 12px)`,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
        }}
        className="pointer-events-none fixed top-[2px] z-[100000] h-5 w-5 rounded-full bg-cyan-300 shadow-[0_0_25px_#22d3ee]"
      />

      {/* Trail */}
      <motion.div
        animate={{
          left: `calc(${progress * 100}% - 40px)`,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 28,
        }}
        className="pointer-events-none fixed top-[2px] z-[99999] h-2 w-10 rounded-full bg-cyan-400/50 blur-md"
      />

      {/* Particle */}
      <motion.div
        animate={{
          left: `calc(${progress * 100}% - 4px)`,
          scale: [1, 1.8, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          left: {
            type: "spring",
            stiffness: 250,
            damping: 25,
          },
          scale: {
            repeat: Infinity,
            duration: 1.2,
          },
          opacity: {
            repeat: Infinity,
            duration: 1.2,
          },
        }}
        className="pointer-events-none fixed top-[2px] z-[100001] h-2.5 w-2.5 rounded-full bg-white"
      />

      {/* Ripple */}
      {progress > 0.995 && (
        <motion.div
          initial={{
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: 8,
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="pointer-events-none fixed right-0 top-0 z-[100002] h-4 w-4 rounded-full border-2 border-cyan-300"
        />
      )}
    </>
  );
 
}