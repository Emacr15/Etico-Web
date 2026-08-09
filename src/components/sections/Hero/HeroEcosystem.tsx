import { projects } from "../../../config/projects";
import { HeroProduct } from "./HeroProduct";

export function HeroEcosystem() {
  return (
    <div className="hero__ecosystem">
      {projects
        .slice(0, 6)
        .map((project, index) => (
          <HeroProduct
            key={project.id}
            project={project}
            position={index + 1}
          />
        ))}
    </div>
  );
}
