import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import AvailableFor from "./components/sections/AvailableFor";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import ChatBot from "./components/chatbot/ChatBot";

import SectionWrapper from "./components/common/SectionWrapper";

export default function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main className="relative">
        <Hero />
        <AvailableFor />

        <SectionWrapper>
          <About />
        </SectionWrapper>

        <SectionWrapper>
          <Skills />
        </SectionWrapper>

        <SectionWrapper>
          <Experience />
        </SectionWrapper>

        <SectionWrapper>
          <Projects />
        </SectionWrapper>

        <SectionWrapper>
          <Certifications />
        </SectionWrapper>

        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </main>

      <ChatBot />
    </>
  );
}
