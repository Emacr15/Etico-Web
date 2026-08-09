import { ArrowRight } from "lucide-react";

import type { Project } from "../../config/projects";

import { ProductPreview } from "./ProductPreview/ProductPreview";

interface ProjectGridCardProps {
  project: Project;
}

export function ProjectGridCard({
  project,
}: ProjectGridCardProps) {
  const Icon = project.icon;

  return (
    <article className="project-grid-card">
      <div className="project-grid-card__info">
        <div className="project-grid-card__heading">
          <div
            className={`project-grid-card__icon project-grid-card__icon--${project.variant}`}
          >
            <Icon size={20} />
          </div>

          <div>
            <span>
              {project.category}
            </span>

            <h2>
              {project.name}
            </h2>
          </div>
        </div>

        <p>
          {project.description}
        </p>

        <a href={project.href}>
          Ver proyecto
          <ArrowRight size={14} />
        </a>
      </div>

      <div className="project-grid-card__preview">
        <ProductPreview
          projectId={project.id}
        />
      </div>
    </article>
  );
}
