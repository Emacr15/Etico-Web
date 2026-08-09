import { Container } from "../../layout/Container";

import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsHeader } from "./ProjectsHeader";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="projects"
    >
      <Container>
        <ProjectsHeader />
        <ProjectsGrid />
      </Container>
    </section>
  );
}
