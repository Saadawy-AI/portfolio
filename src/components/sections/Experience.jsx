import { useState } from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaGraduationCap, FaBrain } from "react-icons/fa";

const experiences = [
  {
    title: "Junior Data Engineer - Trainee",
    organization: "Ministry of Communications - DEPI Program",
    period: "Jun 2025 - Dec 2025",
    status: "Completed",
    icon: <FaDatabase className="text-2xl text-cyan-300" />,
    summary:
      "Professional data engineering training focused on production-style pipelines, data warehousing, big data processing, cloud analytics, and deployment automation.",
    highlights: [
      "Built and maintained 10+ batch and streaming ETL pipelines using Python, SQL, Spark, Kafka, and Airflow.",
      "Designed 5+ star-schema data warehouses and optimized analytical queries by 30-40%.",
      "Processed millions of records with Hadoop, Hive, and Spark for scalable data workflows.",
      "Implemented Azure Synapse, Dedicated SQL Pools, Stream Analytics, and Azure Data Factory solutions.",
      "Applied Git and GitHub Actions CI/CD to reduce manual deployment work by 40%.",
    ],
    stack: [
      "Python",
      "SQL",
      "Spark",
      "Kafka",
      "Airflow",
      "Azure",
      "Hadoop",
      "Hive",
    ],
  },
  {
    title: "Big Data Trainee",
    organization: "Huawei ICT Academy-Egypt · Internship",
    period: "Jul 2026 - Sep 2026",
    status: "Completed",
    icon: <FaDatabase className="text-2xl text-cyan-300" />,
    summary:
      "Built hands-on Big Data processing workflows using Hadoop, HDFS, MapReduce, YARN, Hive, and Apache Spark for large-scale data processing and analytics, with practical exposure to distributed data systems in Smart Village, Egypt.",
    highlights: [
      "Built hands-on Big Data processing workflows using Hadoop, HDFS, MapReduce, YARN, Hive, and Apache Spark for large-scale data processing and analytics.",
      "Developed data processing solutions with Python, SQL, Jupyter Notebook, and PySpark, applying distributed computing concepts to handle large datasets efficiently.",
      "Implemented practical batch and streaming data processing concepts using Apache Kafka, Apache Flink, and Apache Flume.",
      "Worked with HBase, ClickHouse, Elasticsearch, and ZooKeeper to explore NoSQL, analytical databases, search, and distributed coordination in Big Data environments.",
      "Covered Linux command line, file systems, permissions, SQL, Python fundamentals, and Hadoop ecosystem components including Hive, HBase, and Elasticsearch.",
    ],
    stack: [
      "Hadoop",
      "HDFS",
      "MapReduce",
      "YARN",
      "Hive",
      "Spark",
      "PySpark",
      "Kafka",
      "Flink",
      "Flume",
      "HBase",
      "ClickHouse",
      "Elasticsearch",
      "ZooKeeper",
      "Python",
      "SQL",
      "Jupyter Notebook",
    ],
  },
  {
    title: "Machine Learning Trainee",
    organization: "National Telecommunication Institute (NTI)",
    period: "Aug 2025 - Sep 2025",
    status: "Completed",
    icon: <FaBrain className="text-2xl text-pink-300" />,
    summary:
      "Applied machine learning training covering model development, preprocessing, feature engineering, tuning, evaluation, and deployment workflows.",
    highlights: [
      "Developed and evaluated models with Python, NumPy, Pandas, and Scikit-learn on real-world datasets.",
      "Applied preprocessing, feature engineering, and model tuning to improve predictive performance.",
      "Implemented regression, classification, clustering, and end-to-end ML workflows.",
      "Deployed practical ML applications with Streamlit and REST-style interfaces.",
    ],
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Feature Engineering",
      "Streamlit",
    ],
  },
];

const coursework = [
  "Data Structures",
  "Data Mining",
  "Algorithms",
  "Database Systems",
  "OOP",
  "Machine Learning",
];

export default function Experience() {
  const [expandedExperience, setExpandedExperience] = useState(null);

  return (
    <section id="experience" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute left-0 top-24 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 uppercase tracking-[4px] text-cyan-400">
            Experience
          </p>

          <h2 className="text-4xl font-black lg:text-5xl">
            Training & Education
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Practical training and academic foundation focused on data
            engineering, machine learning, cloud analytics, and scalable data
            systems.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {experiences.map((item, index) => {
            const isExpanded = expandedExperience === item.title;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-cyan-400/10 bg-[#08111f] p-5 transition hover:border-cyan-400/30"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-1 text-xs text-cyan-300">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-200">
                    {item.period} | {item.status}
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="leading-6 text-sm text-gray-400">{item.summary}</p>
                </div>

                {isExpanded ? (
                  <>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      <h4 className="text-[11px] font-semibold uppercase tracking-[3px] text-gray-300">
                        Key Highlights
                      </h4>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-6 text-gray-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-gray-700 px-2.5 py-1 text-[10px] text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex justify-center">
                      <button
                        type="button"
                        onClick={() => setExpandedExperience(null)}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/20"
                      >
                        Hide Details
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="mt-5 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setExpandedExperience(item.title)}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/20"
                    >
                      Details
                    </button>
                  </div>
                )}
              </motion.article>
            );
          })}

          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-cyan-400/10 bg-[#08111f] p-7"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                <FaGraduationCap className="text-2xl text-cyan-300" />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Bachelor of Computers and Artificial Intelligence
                </h3>
                <p className="mt-1 text-sm text-cyan-300">
                  Minia National University, Egypt
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-gray-400">Expected Graduation</p>
              <p className="mt-1 text-2xl font-bold text-white">2027</p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-[3px] text-gray-300">
                Relevant Coursework
              </h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {coursework.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
