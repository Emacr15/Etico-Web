import type { Project } from "../../config/projects";

import { Container } from "../layout/Container";

interface ProjectHighlightsProps {
  project: Project;
}

export function ProjectHighlights({
  project,
}: ProjectHighlightsProps) {
  if (!project.highlights?.length) {
    return null;
  }

  return (
    <section
      id="project-features"
      className="product-highlights"
    >
      <Container>
        <div className="product-highlights__heading">
          <span>
            TODO CONECTADO
          </span>

          <h2>
            Una plataforma.
            <strong>
              {" "}
              Toda tu operación.
            </strong>
          </h2>

          <p>
            Las herramientas principales del negocio
            trabajan juntas para que la información esté
            disponible donde realmente se necesita.
          </p>
        </div>

        <div className="product-highlights__grid">
          {project.highlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <article
                key={highlight.title}
                className="product-highlight"
              >
                <div className="product-highlight__icon">
                  <Icon size={22} />
                </div>

                <h3>
                  {highlight.title}
                </h3>

                <p>
                  {highlight.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
