import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="uppercase tracking-[5px] text-cyan-400 text-sm">
        {subtitle}
      </p>

      <h2 className="text-4xl lg:text-5xl font-black mt-3">
        {title}
      </h2>
    </motion.div>
  );
 
}