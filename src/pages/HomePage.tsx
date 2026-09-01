import { Footer } from "../components/layout/Footer/Footer";
import { Navbar } from "../components/layout/Navbar";

import { AboutSection } from "../components/sections/About/AboutSection";
import { DevelopmentSection } from "../components/sections/Development/DevelopmentSection";
import { Hero } from "../components/sections/Hero/Hero";
import { ProjectsSection } from "../components/sections/Projects/ProjectsSection";
import { ServicesSection } from "../components/sections/Services/ServicesSection";
import { TechnologyMarquee } from "../components/sections/TechnologyRow.tsx/TechnologyMarquee";
import { EticoBackground } from "../components/ui/EticoBackground";

export function HomePage() {
  return (
    <>
      <Navbar />

      <main className="home-page">
        <EticoBackground />

        <div className="home-page__content">
          <Hero />
          <ProjectsSection />
          <DevelopmentSection />
          <ServicesSection />
          <AboutSection />
          <TechnologyMarquee />
        </div>
      </main>

      <Footer />
    </>
  );
}
