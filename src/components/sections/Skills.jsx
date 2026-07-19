import { motion } from "framer-motion";

import {
  FaDatabase,
  FaBrain,
  FaCode,
  FaTools,
  FaServer,
  FaProjectDiagram,
  FaCodeBranch,
  FaJava,
  FaCloud,
} from "react-icons/fa";
import {
  SiApachekafka,
  SiApachespark,
  SiApacheairflow,
  SiPython,
  SiDocker,
  SiGithub,
  SiGit,
  SiLinux,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiStreamlit,
  SiFastapi,
  SiMysql,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Data Engineering",
    summary: "Building reliable pipelines, warehouses, and cloud-based analytics flows.",
    icon: <FaDatabase className="text-3xl text-cyan-400" />,
    skills: [
      { name: "Apache Kafka", icon: <SiApachekafka className="text-cyan-400" /> },
      { name: "Apache Spark", icon: <SiApachespark className="text-orange-400" /> },
      { name: "ETL Pipelines", icon: <FaProjectDiagram className="text-sky-400" /> },
      { name: "Data Warehousing", icon: <FaServer className="text-violet-400" /> },
      { name: "Apache Airflow", icon: <SiApacheairflow className="text-slate-300" /> },
      { name: "Azure Data Factory", icon: <FaCloud className="text-cyan-400" /> },
      { name: "SQL", icon: <SiMysql className="text-orange-500" /> },
    ],
  },
  {
    title: "Machine Learning",
    summary: "Modeling, tuning, and deploying practical ML solutions with strong evaluation.",
    icon: <FaBrain className="text-3xl text-pink-400" />,
    skills: [
      { name: "Scikit-Learn", icon: <SiScikitlearn className="text-orange-400" /> },
      { name: "Feature Engineering", icon: <FaCodeBranch className="text-purple-400" /> },
      { name: "NLP", icon: <FaCode className="text-blue-400" /> },
      { name: "Model Evaluation", icon: <FaProjectDiagram className="text-emerald-400" /> },
      { name: "Model Tuning", icon: <FaTools className="text-amber-400" /> },
      { name: "Pandas", icon: <SiPandas className="text-cyan-500" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
    ],
  },
  {
    title: "Programming",
    summary: "Core software development skills for building scalable and maintainable systems.",
    icon: <FaCode className="text-3xl text-blue-400" />,
    skills: [
      { name: "Python", icon: <SiPython className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "SQL", icon: <SiMysql className="text-orange-500" /> },
      { name: "REST APIs", icon: <SiFastapi className="text-green-500" /> },
      { name: "Object-Oriented Programming", icon: <FaCodeBranch className="text-cyan-400" /> },
    ],
  },
  {
    title: "Tools & Deployment",
    summary: "DevOps, containerization, automation, and cloud deployment practices.",
    icon: <FaTools className="text-3xl text-orange-400" />,
    skills: [
      { name: "Docker", icon: <SiDocker className="text-sky-500" /> },
      { name: "Git & GitHub", icon: <SiGithub className="text-gray-200" /> },
      { name: "GitHub Actions", icon: <SiGithub className="text-purple-400" /> },
      { name: "Azure Synapse", icon: <FaCloud className="text-cyan-400" /> },
      { name: "Streamlit", icon: <SiStreamlit className="text-cyan-400" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-500" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
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

          <h2 className="text-4xl font-black lg:text-5xl">Technical Stack</h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Technologies I use across ingestion, orchestration, warehousing,
            streaming, cloud analytics, machine learning, and deployment.
          </p>
        </motion.div>

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

                <div>
                  <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{group.summary}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-700 px-4 py-2 text-sm text-gray-300 transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <span className="text-base">{skill.icon}</span>
                    <span>{skill.name}</span>
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
