import { ArrowUpRight } from "lucide-react";

import type { Project } from "../../../config/projects";

import { ProductPreview } from "../../ui/ProductPreview/ProductPreview";

interface ServiceProductCardProps {
  project: Project;
}

export function ServiceProductCard({
  project,
}: ServiceProductCardProps) {
  const Icon = project.icon;

  return (
    <article className="service-product">
      <div className="service-product__content">
        <div className="service-product__heading">
          <div
            className={`service-product__icon service-product__icon--${project.variant}`}
          >
            <Icon size={22} />
          </div>

          <div>
            <span>
              {project.category}
            </span>

            <h3>
              {project.name}
            </h3>
          </div>
        </div>

        <p>
          {project.description}
        </p>

        <a href={project.href}>
          Ver más
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div
        className="service-product__preview"
        aria-hidden="true"
      >
        <ProductPreview
          projectId={project.id}
        />
      </div>
    </article>
  );
}
