import { ArrowUpRight } from "lucide-react";

import type { Project } from "../../config/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <article
      className={`project-card project-card--${project.variant}`}
    >
      <div className="project-card__top">
        <div className="project-card__icon">
          <Icon size={24} />
        </div>

        <span className="project-card__tag">
          {project.category}
        </span>
      </div>

      <div className="project-card__content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>

      <a
        href={project.href}
        className="project-card__link"
      >
        Explorar proyecto
        <ArrowUpRight size={17} />
      </a>
    </article>
  );
}
