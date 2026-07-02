import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#030712] text-white">

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Certifications & Experience */}
      <Certifications />

      {/* Contact Section */}
      <Contact />

    </main>
  );
 
}