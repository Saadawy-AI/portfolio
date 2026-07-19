import { motion } from "framer-motion";
import depiImg from "../../assets/certificates/depi-achievement.png";
import gdgImg from "../../assets/certificates/gdg-ai.png";
import cleanCodeImg from "../../assets/certificates/clean-code.png";
import topPerformerImg from "../../assets/certificates/top-performer.png";

const certifications = [
  {
    title: "Microsoft Data Engineer",
    issuer: "Digital Egypt Pioneers Program (DEPI)",
    date: "2025",
    subtitle: "Certificate of Achievement",
    description:
      "Built end-to-end batch and streaming ETL pipelines using Python, SQL, Spark, Kafka, and Airflow, applying data modeling and warehousing best practices in hands-on production-style projects.",
    tech: ["Data Engineering","ETL","Data Pipeline", "Data Modeling","Data Warehousing", "Apache Spark", "Kafka", "Airflow", "Azure"],
    badge: "🚀",
    image: depiImg,
    link: "https://github.com/Saadawy-AI/Certifications/blob/main/02_DEPI_Microsoft_Data_Engineer_Certificate_of_Achievement.pdf",
  },

  {
    title: "Build with AI",
    issuer: "Google Developer Groups OnCampus",
    date: "2026",
    subtitle: "Certificate of Attendance & Completion",
    description:
      "Completed a practical AI workshop focused on generative AI, prompt engineering, and building useful solutions with modern tools.",
    tech: ["Generative AI", "Prompt Engineering", "AI Solutions"],
    badge: "🤖",
    image: gdgImg,
    link: "https://github.com/Saadawy-AI/Certifications/blob/main/04_Build_with_AI_GDG_Certificate.pdf",
  },

  {
    title: "Clean Code Principles",
    issuer: "Mahara-Tech / ITI",
    date: "2026",
    subtitle: "Certificate of Completion",
    description:
      "Strengthened software craftsmanship by learning how to write cleaner, more maintainable, and professional code.",
    tech: ["Clean Code", "Software Quality", "Best Practices"],
    badge: "🧼",
    image: cleanCodeImg,
    link: "https://github.com/Saadawy-AI/Certifications/blob/main/05_Mahara_Tech_Clean_Code_Certificate.pdf",
  },

  {
    title: "Top Performer Recognition",
    issuer: "Ministry of Communications and Information Technology (Egypt)",
    date: "2025",
    subtitle: "DEPI Recognition Award",
    description:
      "Recognized as a top-performing student in the DEPI Microsoft Data Engineer program for outstanding achievement and commitment.",
    tech: ["Top Performer", "Government Level", "Recognition", "DEPI", "Achievement"],
    badge: "🏅",
    image: topPerformerImg,
    link: "https://github.com/Saadawy-AI/Certifications/blob/main/01_DEPI_Microsoft_Data_Engineer_Top_Performer_Recognition.pdf",
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
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm text-cyan-400">{item.subtitle}</p>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-cyan-400/10 bg-white/95">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-contain p-3 sm:h-72"
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-cyan-300">
                  {item.date}
                </span>
                <span className="text-gray-400">Issued by {item.issuer}</span>
              </div>

              <p className="mt-6 text-sm leading-7 text-gray-400">
                {item.description}
              </p>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10"
                >
                  View credential
                </a>
              ) : null}

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
