import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

/**
 * Main Page Component
 * 
 * This is the home page that combines all sections:
 * - Hero: Introduction and CTA
 * - About: Personal information
 * - Skills: Technical skills
 * - Projects: Portfolio projects
 * - Experience: Work and education timeline
 * - Contact: Contact form and information
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

