import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { trackEvent } from "../../utils/analytics";
export default function Navbar() {
  const resumeUrl = `${import.meta.env.BASE_URL}cv.pdf`;
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  const [showNav, setShowNav] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 40);
 
      if (current > lastScroll.current && current > 180) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScroll.current = current;
      const sections = [
        "about",
        "skills",
        "experience",
        "projects",
        "certifications",
        "contact",
      ];

      sections.forEach((section) => {
        const el = document.getElementById(section);

        if (!el) return;

        const top = el.offsetTop - 140;
        const height = el.offsetHeight;

        if (current >= top && current < top + height) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];
 
  const scrollToSection = (id) => {
    trackEvent("nav_click", { section: id });

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -120 }}
      animate={{ y: showNav ? 0 : -120 }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className={`fixed inset-x-0 top-0 z-[99999] transition-all duration-500 ${
        scrolled
          ? "border-b border-cyan-400/10 bg-[#020817]/65 backdrop-blur-3xl shadow-[0_10px_50px_rgba(6,182,212,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* Logo */}

        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="group flex items-center gap-2 text-3xl font-black tracking-wide"
        >
          <span className="transition group-hover:text-cyan-300">
            Saadawy
          </span>

          <motion.span
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="text-cyan-400"
          >
            ●
          </motion.span>
        </motion.a>

        {/* Desktop */}

        <div className="hidden items-center gap-1 lg:gap-3 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative overflow-hidden rounded-full px-3 py-2 text-sm lg:px-5 lg:text-base"
            >
              {active === link.id && (
                <motion.div
                  layoutId="activeLink"
                  className="absolute inset-0 rounded-full border border-cyan-400/30 bg-cyan-400/15"
                />
              )}

              <span
                className={`relative z-10 ${
                  active === link.id
                    ? "text-cyan-300"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </span>
            </button>
          ))}

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
 
            href={resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("resume_download", { source: "navbar" })}
            className="ml-5 flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black shadow-[0_0_35px_rgba(6,182,212,.45)]"
          >
            <Download size={18} />
            Resume
          </motion.a>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl border border-cyan-400/20 bg-white/5 p-3 md:hidden"
        >
          {mobileOpen ? (
            <X className="text-cyan-300" />
          ) : (
            <Menu className="text-cyan-300" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t border-cyan-400/10 bg-[#020817]/95 px-6 py-6 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`rounded-xl px-4 py-3 text-left ${
                    active === link.id
                      ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                      : "text-gray-300 hover:bg-cyan-400/10"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <a
                href={resumeUrl}
                download
 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("resume_download", { source: "mobile_nav" })}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-cyan-400 py-3 font-semibold text-black"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
 
}
