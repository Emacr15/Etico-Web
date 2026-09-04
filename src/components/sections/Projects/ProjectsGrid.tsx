import { projects } from "../../../config/projects";

import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  const featuredProjects = projects.filter(
    (project) => !["hotel", "workshop"].includes(project.id),
  );

  return (
    <div className="projects__grid">
      {featuredProjects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          animationDelay={index * 0.08}
        />
      ))}
    </div>
  );
}
