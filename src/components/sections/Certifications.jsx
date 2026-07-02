import { motion } from "framer-motion";

const certifications = [
  {
    title: "DEPI Program",
    subtitle: "Professional Data Engineering Track",
    description:
      "Built end-to-end ETL pipelines using Python, SQL, Spark, Kafka, and Airflow. Designed Data Warehouse schemas, processed large-scale datasets with Hadoop & Hive, and implemented cloud analytics solutions with Azure Synapse, Stream Analytics, and Data Factory.",
    tech: [
      "Kafka",
      "Spark",
      "Airflow",
      "Azure",
      "Hadoop",
      "ETL",
    ],
    badge: "🚀",
  },

  {
    title: "NTI Training",
    subtitle: "Machine Learning Program",
    description:
      "Built end-to-end Machine Learning workflows covering data preprocessing, feature engineering, model tuning, classification, regression, clustering, and deployment of production-ready ML applications using Streamlit.",
    tech: [
      "Machine Learning",
      "Scikit-Learn",
      "Feature Engineering",
      "Python",
      "Deployment",
    ],
    badge: "🧠",
  },

  {
    title: "Google Developer Groups",
    subtitle: "Build with AI — Certificate of Completion (2026)",
    description:
      "Successfully completed Google's Build with AI training workshop, gaining practical experience in Generative AI, Prompt Engineering, and real-world AI solution development using Google technologies.",
    tech: [
      "Generative AI",
      "Prompt Engineering",
      "AI Solutions",
    ],
    badge: "🤖",
  },

  {
    title: "University",
    subtitle: "Faculty of Computers & Artificial Intelligence",
    description:
      "Final-year Computer Science student focusing on Data Engineering, Machine Learning, and building production-ready systems.",
    tech: [
      "Data Structures",
      "Data Mining",
      "Algorithms",
      "Database Systems",
      "OOP",
      "Machine Learning",
    ],
    badge: "🎓",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">

        {/* Title */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 uppercase tracking-[4px] text-cyan-400">
            Journey
          </p>

          <h2 className="text-4xl font-black lg:text-5xl">
            Certifications & Learning
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Training and learning milestones that support my data engineering
            and machine learning focus.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-cyan-400/10 bg-[#08111f] p-8 transition hover:border-cyan-400/30"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                  {item.badge}
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-cyan-400">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-gray-400">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-gray-300"
                  >
                    {tech}
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
