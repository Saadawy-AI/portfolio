import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { trackEvent } from "../../utils/analytics";

import ikea from "../../assets/ikea.webp";
import smartcity from "../../assets/smartcity.webp";
import road from "../../assets/road.webp";
import spam from "../../assets/spam.webp";

const projects = [
  {
    title: "IKEA Shopping Analytics Platform",
    category: "Data Engineering + ML + Analytics",
    image: ikea,
    problem:
      "An e-commerce admin workflow needed a cleaner way to move transactional sales data into analytics and forecasting.",
    solution:
      "Built a Java Swing and SQL Server OLTP layer, then designed ETL jobs, a star-schema warehouse, XGBoost forecasting, and a Streamlit analytics dashboard.",
    impact:
      "Delivered a complete OLTP to warehouse to forecasting flow with a deployed dashboard for business-style analysis.",
    architecture:
      "Java Swing App -> SQL Server -> Python ETL -> SQLite star schema -> XGBoost forecasting -> Streamlit dashboard.",
    dataset:
      "Operational SQL Server data extended with reproducible synthetic historical sales because the original demo database was too small for time-series training.",
    challenges: [
      "Keeping the operational Java app separate from the analytics layer.",
      "Designing a star schema from transactional order data.",
      "Using time-based features, lag values, and rolling means for forecasting.",
    ],
    learned:
      "How to connect OLTP systems to analytics and ML workflows without changing the original application code.",
    stack: ["Java", "SQL Server", "Python", "ETL", "XGBoost", "Streamlit"],
    github: "https://github.com/Saadawy-AI/Ikea_Shopping",
    demo: "https://saadawy-ai-ikea-shopping-dashboardapp-kpdswe.streamlit.app/",
  },
  {
    title: "Smart City Real-Time Pipeline",
    category: "Streaming Data Engineering",
    image: smartcity,
    problem:
      "Smart city sensor events need continuous ingestion, transformation, and storage without waiting for batch windows.",
    solution:
      "Simulated IoT producers, streamed 5 Kafka topics into Spark Structured Streaming, orchestrated services with Docker, and wrote curated Parquet outputs.",
    impact:
      "Created a distributed real-time architecture with checkpointing and scalable storage patterns.",
    architecture:
      "Python IoT simulation -> Kafka topics -> Spark Structured Streaming -> checkpointed Parquet storage.",
    dataset:
      "Simulated smart city events covering vehicle movement, GPS, traffic cameras, weather readings, and emergency alerts.",
    challenges: [
      "Processing five independent Kafka topics at the same time.",
      "Defining schemas for JSON streams before writing reliable outputs.",
      "Managing Docker services for Kafka, Zookeeper, Spark master, and workers.",
    ],
    learned:
      "How streaming platforms separate ingestion, processing, and storage in real-time data systems.",
    stack: ["Kafka", "Spark", "Docker", "Python", "Parquet", "Streaming"],
    github: "https://github.com/Saadawy-AI/SmartCity",
  },
  {
    title: "Road Collisions Prediction",
    category: "Machine Learning",
    image: road,
    problem:
      "Road collision severity is hard to estimate from messy, imbalanced real-world accident data.",
    solution:
      "Built a full ML pipeline with cleaning, EDA, feature engineering, CatBoost training, evaluation, and Streamlit deployment.",
    impact:
      "Achieved 92.6% accuracy and packaged the model into a usable prediction application.",
    architecture:
      "CSV dataset -> cleaning and EDA -> feature engineering -> CatBoost model -> evaluation -> Streamlit app.",
    dataset:
      "Road collision dataset with dates, locations, road conditions, weather, vehicle details, and a 3-class severity target.",
    challenges: [
      "Handling a highly imbalanced target where slight collisions dominate.",
      "Engineering useful temporal and categorical features.",
      "Choosing metrics beyond accuracy, including weighted F1 and class-level performance.",
    ],
    learned:
      "Why CatBoost is useful for categorical-heavy data and how evaluation changes when classes are imbalanced.",
    stack: ["Python", "CatBoost", "Scikit-learn", "EDA", "Streamlit"],
    github: "https://github.com/Saadawy-AI/Road-Collisions-ML",
    demo: "https://road-collision-severity-app.streamlit.app/",
  },
  {
    title: "Spam Message NLP Classifier",
    category: "NLP + Machine Learning",
    image: spam,
    problem:
      "Short text messages require reliable preprocessing and classification before they can be flagged as spam or legitimate.",
    solution:
      "Implemented cleaning, tokenization, stopword handling, TF-IDF features, Naive Bayes classification, and Streamlit inference.",
    impact:
      "Built a complete NLP pipeline that supports fast real-time message classification.",
    architecture:
      "Raw message -> text cleaning -> tokenization and lemmatization -> TF-IDF -> Multinomial Naive Bayes -> Streamlit app.",
    dataset:
      "Text message classification data with spam and ham labels for supervised NLP training.",
    challenges: [
      "Normalizing short, noisy messages before vectorization.",
      "Balancing simplicity and reliability with TF-IDF and Naive Bayes.",
      "Packaging vectorizer and model artifacts for repeatable inference.",
    ],
    learned:
      "How classic NLP pipelines can still deliver practical, explainable classification for text applications.",
    stack: ["Python", "NLTK", "TF-IDF", "Naive Bayes", "Streamlit"],
    github: "https://github.com/Saadawy-AI/spam-classifier-streamlit",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 uppercase tracking-[4px] text-cyan-400">
            Portfolio
          </p>

          <h2 className="text-4xl font-black lg:text-5xl">
            Selected Case Studies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Projects that show how I approach data pipelines, streaming
            architecture, analytics dashboards, and machine learning systems.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#08111f] transition hover:border-cyan-400/30"
            >
              <button
                type="button"
                onClick={() => {
                  trackEvent("project_open", { project: project.title })
                  setSelectedProject(project);
                }}
                className="group block w-full text-left"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    {project.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <div className="mt-5 grid gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[3px] text-gray-500">
                        Problem
                      </p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[3px] text-gray-500">
                        Impact
                      </p>
                      <p className="mt-2 text-sm leading-6 text-cyan-200">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-sm font-semibold text-cyan-400">
                    View case study
                  </p>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-cyan-400/10 bg-[#08111f] p-5 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                    {selectedProject.category}
                  </span>
                  <h2 className="mt-4 text-3xl font-black">
                    {selectedProject.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-xl border border-white/10 p-3 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-300"
                  aria-label="Close project details"
                >
                  <FiX />
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="mt-6 aspect-[16/8] w-full rounded-xl object-cover"
              />

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {[
                  ["Problem", selectedProject.problem],
                  ["Solution", selectedProject.solution],
                  ["Impact", selectedProject.impact],
                ].map(([label, text]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <h4 className="text-sm font-semibold uppercase tracking-[3px] text-cyan-300">
                      {label}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-gray-300">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[3px] text-cyan-300">
                  Architecture
                </h4>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  {selectedProject.architecture}
                </p>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[3px] text-cyan-300">
                    Data
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {selectedProject.dataset}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[3px] text-cyan-300">
                    What I Learned
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {selectedProject.learned}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[3px] text-cyan-300">
                  Challenges
                </h4>
                <ul className="mt-4 space-y-3">
                  {selectedProject.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex gap-3 text-sm leading-6 text-gray-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    trackEvent("project_github_click", {
                      project: selectedProject.title,
                    })
                  }
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
                >
                  <FiGithub />
                  GitHub
                </a>

                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      trackEvent("project_demo_click", {
                        project: selectedProject.title,
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-300"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
