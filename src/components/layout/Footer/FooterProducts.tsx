import { projects } from "../../../config/projects";

export function FooterProducts() {
  return (
    <div className="footer__column footer__products">
      <h3>
        Productos
      </h3>

      <div className="footer__column-line" />

      {projects.map((project) => {
        const Icon = project.icon;

        return (
          <a
            key={project.id}
            href={project.href}
          >
            <span
              className={`footer-product__icon footer-product__icon--${project.variant}`}
            >
              <Icon size={12} />
            </span>

            {project.name}
          </a>
        );
      })}
    </div>
  );
}
