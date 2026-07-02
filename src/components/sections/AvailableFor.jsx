import { motion } from "framer-motion";

const items = [
  "Junior Data Engineer roles",
  "Machine Learning internships",
  "Freelance data projects",
  "Analytics dashboard work",
];

export default function AvailableFor() {
  return (
    <section className="border-y border-cyan-400/10 bg-cyan-400/[0.04] px-6 py-5">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-gray-300 lg:flex-row lg:items-center lg:justify-between"
      >
        <p className="font-semibold text-cyan-300">
          Available for opportunities
        </p>

        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/20 px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
