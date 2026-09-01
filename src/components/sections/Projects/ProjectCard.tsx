import { ArrowRight } from "lucide-react";

import type { Project } from "../../../config/projects";

interface ProjectCardProps {
  project: Project;
  animationDelay?: number;
}

export function ProjectCard({
  project,
  animationDelay = 0,
}: ProjectCardProps) {
  return (
    <article
      className={`project-card project-card--${project.accent ?? "blue"}`}
      data-etico-animate
      data-direction="up"
      data-offset="45"
      data-delay={animationDelay}
    >
      <div className="project-card__visual">
        <div
          className="project-card__halo"
          aria-hidden="true"
        />

        <div
          className="project-card__dots"
          aria-hidden="true"
        />

        {project.illustration && (
          <img
            src={project.illustration}
            alt=""
            className="project-card__illustration"
          />
        )}
      </div>

      <div className="project-card__category">
        {project.category}
      </div>

      <div className="project-card__content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>

      <div className="project-card__footer">
        <a href={project.href}>
          Explorar proyecto
          <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}
