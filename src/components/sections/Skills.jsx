import { motion } from "framer-motion";

import {
  FaDatabase,
  FaBrain,
  FaCode,
  FaTools,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Data Engineering",
    icon: <FaDatabase className="text-3xl text-cyan-400" />,
    skills: [
      "Apache Kafka",
      "Apache Spark",
      "ETL Pipelines",
 
      "Data Warehousing",
      "Apache Airflow",
      "Azure Data Factory",
      "SQL",
    ],
  },
  {
    title: "Machine Learning",
    icon: <FaBrain className="text-3xl text-pink-400" />,
    skills: [
      "Scikit-Learn",
      "CatBoost",
      "XGBoost",
      "Feature Engineering",
      "NLP",
 
      "Model Evaluation",
      "Model Tuning",
    ],
  },
  {
    title: "Programming",
    icon: <FaCode className="text-3xl text-blue-400" />,
    skills: [
      "Python",
      "Java",
 
      "SQL",
      "Pandas",
      "NumPy",
      "REST APIs",
      "Object-Oriented Programming",
    ],
  },
  {
    title: "Tools & Deployment",
    icon: <FaTools className="text-3xl text-orange-400" />,
    skills: [
 
      "Docker",
      "Git & GitHub",
      "GitHub Actions",
      "Azure Synapse",
      "Streamlit",
      "Linux",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 py-32"
    >
      {/* Background */}

      <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl">

        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-3 uppercase tracking-[4px] text-cyan-400">
            Expertise
          </p>

          <h2 className="text-4xl font-black lg:text-5xl">
            Technical Stack
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Technologies I use across ingestion, orchestration, warehousing,
            streaming, cloud analytics, machine learning, and deployment.
          </p>
        </motion.div>

        {/* GRID */}

        <div className="grid gap-8 md:grid-cols-2">

          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-cyan-400/10 bg-[#08111f] p-8 transition hover:border-cyan-400/30"
            >
              <div className="flex items-center gap-4">

                {group.icon}

                <h3 className="text-2xl font-bold text-white">
                  {group.title}
                </h3>

              </div>

              <div className="mt-6 flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-gray-700 px-4 py-2 text-sm text-gray-300 transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
 
}
