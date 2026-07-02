import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiDownload, FiSend } from "react-icons/fi";
import { trackEvent } from "../../utils/analytics";
const contacts = [
  {
    title: "Email",
 
    value: "elsameenm@gmail.com",
    link: "mailto:elsameenm@gmail.com",
    icon: <MdEmail />,
  },
  {
    title: "LinkedIn",
 
    value: "linkedin.com/in/muhammad-saadawy",
    link: "https://www.linkedin.com/in/muhammad-saadawy/",
    icon: <FaLinkedin />,
  },
  {
    title: "GitHub",
 
    value: "github.com/Saadawy-AI",
    link: "https://github.com/Saadawy-AI",
    icon: <FaGithub />,
  },
  {
    title: "WhatsApp",
 
    value: "+20 122 686 7568",
    link: "https://wa.me/201226867568",
    icon: <FaWhatsapp />,
  },
];

 
export default function Contact() {
  const resumeUrl = `${import.meta.env.BASE_URL}cv.pdf`;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    trackEvent("contact_form_submit", { source: "contact_section" });
    window.location.href = `mailto:elsameenm@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="pointer-events-none absolute left-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 uppercase tracking-[4px] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-black lg:text-5xl">
            Open To Data Roles
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            I'm actively seeking junior Data Engineering, Machine Learning,
            and analytics opportunities where I can build reliable pipelines
            and practical ML systems.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item, index) => (
            <motion.a
              key={index}
 
              href={item.link}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("contact_card_click", { method: item.title })
              }
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
 
              className="rounded-2xl border border-cyan-400/10 bg-[#08111f] p-7 text-center transition hover:border-cyan-400/30"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl text-cyan-300">
                {item.icon}
              </div>
              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 break-all text-sm text-gray-400">
                {item.value}
              </p>
            </motion.a>
          ))}
 
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="mx-auto mt-12 grid max-w-3xl gap-4 rounded-2xl border border-cyan-400/10 bg-[#08111f] p-5 sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              required
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-cyan-400"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-cyan-400"
            />
          </div>

          <textarea
            name="message"
            required
            rows="5"
            placeholder="Tell me about the role, project, or opportunity..."
            className="resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-cyan-400"
          />

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:bg-cyan-300 sm:w-fit"
          >
            <FiSend />
            Send Message
          </button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14 flex flex-wrap justify-center gap-5"
        >
 
          <a
            href={resumeUrl}
            download
            onClick={() => trackEvent("resume_download", { source: "contact" })}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition hover:bg-cyan-300"
          >
            <FiDownload />
            Download Resume
          </a>

          <a
            href="mailto:elsameenm@gmail.com"
            onClick={() => trackEvent("contact_click", { source: "contact_cta" })}
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400 px-7 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            <FiSend />
            Send Email
          </a>
        </motion.div>

      </div>
    </section>
  );
 
}
