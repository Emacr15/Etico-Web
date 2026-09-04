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
  const Icon = project.icon;

  return (
    <article
      className={`project-card project-card--${project.accent ?? "blue"}`}
      data-etico-animate
      data-direction="up"
      data-offset="45"
      data-delay={animationDelay}
    >
      <div className="project-card__category">
        {project.category}
      </div>

      <div className="project-card__content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>

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

        {project.id === "erp" && (
          <div className="project-card__erp-preview" aria-hidden="true">
            <div className="project-card__erp-screen">
              <div className="project-card__erp-sidebar">
                <strong>E</strong>
                <span />
                <span />
                <span />
              </div>

              <div className="project-card__erp-dashboard">
                <div className="project-card__erp-heading">
                  <span />
                  <small />
                </div>

                <div className="project-card__erp-metrics">
                  <span />
                  <span />
                  <span />
                </div>

                <svg viewBox="0 0 160 58" preserveAspectRatio="none">
                  <path
                    d="M0 49 C18 46 28 30 44 35 S70 46 86 24 S116 35 132 15 S148 18 160 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="project-card__erp-base" />
          </div>
        )}

        {!project.illustration && project.id !== "erp" && (
          <Icon
            className="project-card__fallback-icon"
            aria-hidden="true"
          />
        )}
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
