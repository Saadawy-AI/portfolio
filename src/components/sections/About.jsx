import { motion } from "framer-motion";
import myPhoto from "../../assets/about.webp";
 
const stats = [
  { number: "10+", label: "ETL Pipelines" },
  { number: "5+", label: "Warehouse Schemas" },
  { number: "2027", label: "Graduation" },
  { number: "Open", label: "Opportunities" },
];
export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 py-28"
    >
      {/* Title */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <p className="mb-3 uppercase tracking-[4px] text-cyan-400">
          Get To Know Me
        </p>

        <h2 className="text-5xl font-bold text-white">
          About Me
        </h2>
      </motion.div>

      <div className="grid items-center gap-14 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />
 
            <img
              src={myPhoto}
              alt="profile"
              loading="lazy"
              className="relative w-[340px] rounded-3xl border border-cyan-500/20 object-cover"
            />
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="mb-6 text-3xl font-bold text-white">
            Data Engineering Trainee with Machine Learning Depth
          </h3>

          <p className="text-lg leading-9 text-gray-400">
 
            I am a final-year Computers and Artificial Intelligence student at
            Minia National University, focused on building practical data
            systems that move from raw data to reliable analytics and ML-ready
            products.
          </p>

          <p className="mt-4 text-lg leading-9 text-gray-400">
 
            Through the DEPI Data Engineering track, I built 10+ batch and
            streaming ETL pipelines, designed star-schema warehouses, processed
            large datasets with Spark, Hadoop, and Hive, and worked with Azure
            analytics services.
          </p>

          <p className="mt-4 text-lg leading-9 text-gray-400">
            I also completed NTI Machine Learning training, where I developed
            supervised and unsupervised models, tuned pipelines, and deployed
            practical applications with Streamlit.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <span className="rounded-xl border border-cyan-500/20 px-4 py-2 text-cyan-400">
              NTI Machine Learning
            </span>

            <span className="rounded-xl border border-cyan-500/20 px-4 py-2 text-cyan-400">
 
              DEPI Data Engineering
            </span>

            <span className="rounded-xl border border-cyan-500/20 px-4 py-2 text-cyan-400">
              Azure Analytics
            </span>
          </div>
        </motion.div>

      </div>

      {/* Stats */}

      <div className="mt-20 grid gap-6 md:grid-cols-4">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.15,
            }}
            className="rounded-3xl border border-cyan-500/10 bg-[#081120] p-8 text-center duration-300 hover:border-cyan-400"
          >
            <h4 className="text-4xl font-bold text-cyan-400">
              {item.number}
            </h4>

            <p className="mt-3 text-gray-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
 
}
