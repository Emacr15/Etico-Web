import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import type { Project } from "../../config/projects";
import { ProductPreview } from "./ProductPreview/ProductPreview";

interface ProjectShowcaseCardProps {
  project: Project;
}

export function ProjectShowcaseCard({
  project,
}: ProjectShowcaseCardProps) {
  const Icon = project.icon;

  return (
    <article
      className={`project-showcase project-showcase--${project.variant}`}
    >
      <div className="project-showcase__content">
        <div className="project-showcase__top">
          <div className="project-showcase__icon">
            <Icon size={22} />
          </div>

          <span className="project-showcase__category">
            {project.category}
          </span>
        </div>

        <h2>
          {project.name}
        </h2>

        <p>
          {project.description}
        </p>

        <div className="project-showcase__features">
          {project.features.map((feature) => (
            <span key={feature}>
              <Check size={13} />
              {feature}
            </span>
          ))}
        </div>

        <a
          href={project.href}
          className="project-showcase__link"
        >
          Explorar proyecto
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="project-showcase__preview">
        <ProductPreview
          projectId={project.id}
        />
      </div>
    </article>
  );
}
