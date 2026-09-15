import { Container } from "../../layout/Container";

import { ProjectsCarousel } from "./ProjectsCarousel";
import { ProjectsHeader } from "./ProjectsHeader";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="projects"
    >
      <Container>
        <div className="projects__layout">
          <ProjectsHeader />

          <ProjectsCarousel />
        </div>
      </Container>
    </section>
  );
}