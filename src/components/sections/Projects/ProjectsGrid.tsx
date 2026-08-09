import { projects } from "../../../config/projects";

import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  return (
    <div className="projects__grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}
