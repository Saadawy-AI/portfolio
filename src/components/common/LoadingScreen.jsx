import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#030712]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[140px]" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <motion.h1
          className="text-7xl font-black tracking-widest"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-cyan-400">M</span>S.
        </motion.h1>

        {/* Title */}
        <p className="mt-5 text-sm uppercase tracking-[5px] text-gray-400">
          Data & Machine Learning Engineer
        </p>

        {/* Progress Bar */}
        <div className="mt-10 h-1 w-72 overflow-hidden rounded-full bg-gray-800">
          <motion.div
            className="h-full bg-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          className="mt-5 text-gray-500"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Loading Portfolio...
        </motion.p>
      </motion.div>
    </motion.div>
  );
 
}