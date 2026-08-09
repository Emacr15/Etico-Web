import { CheckCircle2 } from "lucide-react";

import type { Project } from "../../../config/projects";

interface HeroProductProps {
  project: Project;
  position: number;
}

export function HeroProduct({
  project,
  position,
}: HeroProductProps) {
  const Icon = project.icon;

  return (
    <article
      className={`hero-product hero-product--${position}`}
    >
      <div
        className={`hero-product__icon hero-product__icon--${project.variant}`}
      >
        <Icon size={20} />
      </div>

      <div className="hero-product__content">
        <strong>{project.name}</strong>

        <span>{project.category}</span>

        <small>
          <CheckCircle2 size={11} />
          Activo en este negocio
        </small>
      </div>
    </article>
  );
}
