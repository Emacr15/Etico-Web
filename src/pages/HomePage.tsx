import { Footer } from "../components/layout/Footer/Footer";
import { Navbar } from "../components/layout/Navbar";

import { AboutSection } from "../components/sections/About/AboutSection";
import { DevelopmentSection } from "../components/sections/Development/DevelopmentSection";
import { Hero } from "../components/sections/Hero/Hero";
import { ProjectsSection } from "../components/sections/Projects/ProjectsSection";
import { ServicesSection } from "../components/sections/Services/ServicesSection";
import { ContactSection } from "../components/sections/ContactSection";

export function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProjectsSection />
        <DevelopmentSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
