import {
  ArrowUpRight,
} from "lucide-react";

import type {
  Project,
} from "../../config/projects";

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
      data-etico-animate
      data-direction="up"
    >
      {/* Brillo decorativo del hover */}
      <div
        className="project-card__glow"
        aria-hidden="true"
      />

      <div className="project-card__top">
        <div
          className={`project-card__icon project-card__icon--${project.variant}`}
        >
          <Icon size={20} />
        </div>

        <span className="project-card__tag">
          {project.category}
        </span>
      </div>

      {/* Preview abstracto del producto */}
      <div
        className={`project-card__preview project-card__preview--${project.id}`}
        aria-hidden="true"
      >
        <div className="project-card__preview-window">
          <div className="project-card__preview-bar">
            <span />
            <span />
            <span />
          </div>

          <div className="project-card__preview-content">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="project-card__content">
        <h3>
          {project.name}
        </h3>

        <p>
          {project.description}
        </p>
      </div>

      <div className="project-card__footer">
        <a href={project.href}>
          Explorar proyecto

          <span className="project-card__arrow">
            <ArrowUpRight size={14} />
          </span>
        </a>
      </div>
    </article>
  );
}
