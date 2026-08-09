import { projects } from "../../../config/projects";

import { ServiceProductCard } from "./ServiceProductCard";

export function ServicesProducts() {
  return (
    <div className="services__products">
      {projects
        .slice(0, 6)
        .map((project) => (
          <ServiceProductCard
            key={project.id}
            project={project}
          />
        ))}
    </div>
  );
}
