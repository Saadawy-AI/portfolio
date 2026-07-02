import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedin } from "react-icons/fa";
 
import { MdEmail } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import profile from "../../assets/profile.webp";

import Container from "../common/Container";
import Button from "../common/Button";
import { trackEvent } from "../../utils/analytics";
 
export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}cv.pdf`;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-0 pb-16 pt-28 lg:pt-32">
      {/* Background Glow */}
 
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="pointer-events-none absolute inset-0 
      bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),
      linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] 
      bg-[size:50px_50px]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <p className="mb-4 text-sm uppercase tracking-[5px] text-cyan-400">

              Hello, I'm

            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">

              Muhammad{" "}

              <span className="text-cyan-400">

                Mostafa Saadawy

              </span>

            </h1>

            <div className="mt-6 h-12 text-2xl font-semibold text-gray-300 sm:text-3xl">

              <TypeAnimation
                sequence={[
                  "Data Engineer",
                  1800,
                  "Machine Learning Engineer",
                  1800,
                  "Cloud Analytics Builder",
                  1800,
                ]}
                speed={50}
                repeat={Infinity}
              />

            </div>
 
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">

              I build reliable data pipelines, analytics systems, and
              ML-ready data products using Python, SQL, Spark, Kafka, Airflow,
              Azure, and modern machine learning workflows.

            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-300">
              <span className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
                10+ ETL Pipelines
              </span>

              <span className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
                5+ Star Schemas
              </span>

              <span className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
                30-40% Query Optimization
              </span>
            </div>
            {/* BUTTONS */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Button
 
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                onTrack={() => trackEvent("hero_view_projects")}
              >
                View Projects

                <HiArrowRight className="ml-2 h-5 w-5" />

              </Button>
 
              <Button
              variant="outline"
              href={resumeUrl}
              download
              onTrack={() => trackEvent("resume_download", { source: "hero" })}
            >
              <FiDownload className="mr-2 h-5 w-5" />
              Download Resume
            </Button>

              <Button
                variant="ghost"
                href="mailto:elsameenm@gmail.com"
                className="border border-white/10 bg-white/5"
                onTrack={() => trackEvent("contact_click", { source: "hero" })}
              >
                <BsChatDots className="mr-2 h-5 w-5" />
                Contact Me
              </Button>

            </div>
            {/* SOCIALS */}

            <div className="mt-10 flex gap-6">

              <a
                href="https://github.com/Saadawy-AI"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("social_click", { platform: "github", source: "hero" })}
                className="transition hover:text-cyan-400"
              >
                <FaGithub size={27} />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-saadawy/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social_click", { platform: "linkedin", source: "hero" })}
                className="transition hover:text-cyan-400"
              >
                <FaLinkedin size={27} />
              </a>
 
              <a
                href="mailto:elsameenm@gmail.com"
                onClick={() => trackEvent("contact_click", { source: "hero_email_icon" })}
                className="transition hover:text-cyan-400"
              >
                <MdEmail size={27} />
              </a>

            </div>

            {/* STATS */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">

                <h2 className="text-3xl font-bold text-cyan-400">

                  2

                </h2>

                <p className="mt-2 text-sm text-gray-400">

                  Completed Trainings

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">

                <h2 className="text-3xl font-bold text-cyan-400">

                  10+

                </h2>

                <p className="mt-2 text-sm text-gray-400">

                  ETL Pipelines

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">

                <h2 className="text-3xl font-bold text-cyan-400">

                  Open

                </h2>

                <p className="mt-2 text-sm text-gray-400">

                  Junior Roles

                </p>

              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative hidden justify-center lg:flex"
          >

            {/* Glow */}

            <div className="pointer-events-none absolute h-[470px] w-[470px] rounded-full bg-cyan-500/10 blur-[100px]" />

            {/* IMAGE CARD */}

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[35px]
              border border-cyan-400/20
              bg-white/5
              p-5
              backdrop-blur-xl
              shadow-[0_0_70px_rgba(34,211,238,.15)]"
            >
 
              <img
                src={profile}
                alt="profile"
                loading="eager"
                fetchPriority="high"
                className="h-[430px] w-[330px] rounded-[25px] object-cover"
              />
            </motion.div>

            {/* FLOATING SKILLS */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute -right-4 top-12 rounded-full
              border border-cyan-400/30
              bg-[#111827]/80
              px-4 py-2 text-sm font-semibold
              backdrop-blur-lg"
            >

              Data Engineering

            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -left-8 top-16 rounded-full
              border border-cyan-400/30
              bg-[#111827]/80
              px-5 py-2 font-semibold
              backdrop-blur-lg"
            >

               Machine Learning

            </motion.div>
                        <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
              }}
              className="absolute left-8 bottom-24 rounded-full
              border border-cyan-400/30
              bg-[#111827]/80
              px-5 py-2 font-semibold
              backdrop-blur-lg"
            >

              Spark

            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
              }}
              className="absolute right-8 bottom-28 rounded-full
              border border-cyan-400/30
              bg-[#111827]/80
              px-5 py-2 font-semibold
              backdrop-blur-lg"
            >

             Kafka

            </motion.div>

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.8,
              }}
              className="absolute bottom-0.5 left-1/2 -translate-x-1/2
              rounded-full
              border border-cyan-400/30
              bg-[#111827]/80
              px-6 py-3
              font-semibold
              backdrop-blur-lg"
            >

              Database

            </motion.div>

          </motion.div>

        </div>

      </Container>

      {/* SCROLL INDICATOR */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >

        <div className="flex h-12 w-7 justify-center rounded-full border border-gray-500">

          <motion.div
            animate={{
              y: [4, 18, 4],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
            }}
            className="mt-2 h-3 w-3 rounded-full bg-cyan-400"
          />

        </div>

      </motion.div>

    </section>
  );
 
}
