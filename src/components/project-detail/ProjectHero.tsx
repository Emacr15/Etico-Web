import {
  ArrowDown,
  ArrowRight,
} from "lucide-react";

import type { Project } from "../../config/projects";

import { Container } from "../layout/Container";
import { ProjectHeroPreview } from "./previews/ProjectHeroPreview";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({
  project,
}: ProjectHeroProps) {
  const Icon = project.icon;

  return (
    <section className="product-detail-hero">
      <Container>
        <div className="product-detail-hero__layout">
          <div className="product-detail-hero__content">
            <div className="product-detail-hero__category">
              <div
                className={`product-detail-hero__icon product-detail-hero__icon--${project.variant}`}
              >
                <Icon size={22} />
              </div>

              <span>
                {project.category}
              </span>
            </div>

            <h1>
              {project.name}
            </h1>

            <h2>
              {project.headline}
            </h2>

            <p>
              {project.longDescription}
            </p>

            <div className="product-detail-hero__actions">
              <a
                href="#project-features"
                className="button button--primary"
              >
                Conocer la plataforma

                <ArrowDown size={16} />
              </a>

              <a
                href="/#contact"
                className="button button--secondary"
              >
                Hablar con Etico

                <ArrowRight size={16} />
              </a>
            </div>

            <div className="product-detail-hero__tags">
              {project.features.map((feature) => (
                <span key={feature}>
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="product-detail-hero__visual">
            <div className="product-detail-hero__glow" />

            <div className="product-detail-device">
              <div className="product-detail-device__bar">
                <div>
                  <span />
                  <span />
                  <span />
                </div>

                <small>
                  {project.name}
                </small>
              </div>

              <ProjectHeroPreview
                projectId={project.id}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
