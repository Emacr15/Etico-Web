import { useState } from "react";

import { Rocket } from "lucide-react";

import {
  projectFilters,
  projects,
} from "../config/projects";

import { Container } from "../components/layout/Container";
import { Footer } from "../components/layout/Footer/Footer";
import { Navbar } from "../components/layout/Navbar";
import { ProjectGridCard } from "../components/ui/ProjectGridCard";

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.id === activeFilter,
        );

  return (
    <>
      <Navbar />

      <main className="projects-page-new">
        <section className="projects-main-hero">
          <Container>
            <div className="projects-main-hero__grid">
              <div className="projects-main-hero__content">
                <span className="projects-main-hero__eyebrow">
                  <span />
                  NUESTROS PROYECTOS
                </span>

                <h1>
                  Soluciones desarrolladas
                  <br />
                  para negocios que quieren
                  <span>
                    {" "}
                    crecer y ser más eficientes.
                  </span>
                </h1>

                <p>
                  Conoce algunos de nuestros proyectos y
                  cómo la tecnología ha transformado la
                  forma de trabajar de nuestros clientes.
                </p>
              </div>

              <div className="projects-main-hero__visual">
                <div className="projects-main-hero__shape" />

                <div className="project-laptop">
                  <div className="project-laptop__screen">
                    <div className="project-laptop__sidebar">
                      <strong>E</strong>

                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="project-laptop__content">
                      <div className="project-laptop__header">
                        <div>
                          <small>ETICO</small>
                          <strong>Dashboard</strong>
                        </div>

                        <span />
                      </div>

                      <div className="project-laptop__metrics">
                        <div>
                          <small>Ventas</small>
                          <strong>₡184K</strong>
                        </div>

                        <div>
                          <small>Clientes</small>
                          <strong>505</strong>
                        </div>

                        <div>
                          <small>Órdenes</small>
                          <strong>658</strong>
                        </div>

                        <div>
                          <small>Activos</small>
                          <strong>895</strong>
                        </div>
                      </div>

                      <div className="project-laptop__chart">
                        <svg
                          viewBox="0 0 400 130"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0 105 C35 85 52 95 85 72 S135 48 165 68 S220 88 255 53 S320 28 400 42"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />

                          <path
                            d="M0 105 C35 85 52 95 85 72 S135 48 165 68 S220 88 255 53 S320 28 400 42 L400 130 L0 130 Z"
                            fill="currentColor"
                            opacity="0.07"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="project-laptop__base" />
                </div>

                <div className="project-mobile">
                  <div className="project-mobile__notch" />

                  <small>
                    Ventas de hoy
                  </small>

                  <strong>
                    ₡124.250
                  </strong>

                  <div className="project-mobile__chart">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>

            <div className="projects-filter-bar">
              {projectFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() =>
                    setActiveFilter(filter.id)
                  }
                  className={
                    activeFilter === filter.id
                      ? "projects-filter-pill projects-filter-pill--active"
                      : "projects-filter-pill"
                  }
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </Container>
        </section>

        <section className="projects-catalog">
          <Container>
            <div className="projects-catalog__grid">
              {filteredProjects.map(
                (project) => (
                  <ProjectGridCard
                    key={project.id}
                    project={project}
                  />
                ),
              )}
            </div>

            <div className="projects-bottom-cta">
              <div className="projects-bottom-cta__icon">
                <Rocket size={20} />
              </div>

              <div className="projects-bottom-cta__content">
                <strong>
                  ¿Tienes un proyecto en mente?
                </strong>

                <span>
                  Cuéntanos tu idea y creemos juntos
                  la solución que tu negocio necesita.
                </span>
              </div>

              <a href="/#contact">
                Hablemos de tu proyecto
                <span>→</span>
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
