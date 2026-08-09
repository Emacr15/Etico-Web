import {
  Navigate,
  useParams,
} from "react-router-dom";

import { projects } from "../config/projects";

import { Footer } from "../components/layout/Footer/Footer";
import { Navbar } from "../components/layout/Navbar";

import { EticoPosGrowth } from "../components/project-detail/EticoPosGrowth";
import { EticoPosOperations } from "../components/project-detail/EticoPosOperations";
import { ProjectCapabilities } from "../components/project-detail/ProjectCapabilities";
import { ProjectHero } from "../components/project-detail/ProjectHero";
import { ProjectHighlights } from "../components/project-detail/ProjectHighlights";

export function ProjectDetailPage() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return (
      <Navigate
        to="/proyectos"
        replace
      />
    );
  }

  return (
    <>
      <Navbar />

      <main>
        <ProjectHero
          project={project}
        />

        <ProjectHighlights
          project={project}
        />

        <ProjectCapabilities
          project={project}
        />

        {project.id === "pos" && (
          <>
            <EticoPosOperations />
            <EticoPosGrowth />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
