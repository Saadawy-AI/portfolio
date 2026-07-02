import { motion } from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition";

export default function GlowBackground() {
  const { x, y } = useMousePosition();

  return (
    <>
      {/* Static Glow */}
      <div className="fixed left-0 top-0 -z-20 h-screen w-screen bg-[#050816]" />

      <div className="fixed left-20 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="fixed bottom-20 right-20 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Mouse Glow */}

      <motion.div
        animate={{
          x: x - 150,
          y: y - 150,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 120,
        }}
        className="pointer-events-none fixed -z-10 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[120px]"
      />
    </>
  );
 
}