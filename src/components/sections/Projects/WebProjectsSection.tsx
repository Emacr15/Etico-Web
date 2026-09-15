import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Globe2,
} from "lucide-react";

/*
 * Proyectos web realizados por Etico.
 *
 * Mantener los datos separados del JSX facilita agregar
 * nuevos sitios posteriormente sin modificar el diseño.
 */
const webProjects = [
  {
    id: "terrazas-zoe",
    name: "Hotel Terrazas Zoe",
    domain: "terrazaszoe.com",
    image: "/images/web-projects/terrazas-zoe.webp",
    href: "#",
  },
  {
    id: "fix-lab",
    name: "Fix Lab",
    domain: "fixlabcr.com",
    image: "/images/web-projects/fix-lab.webp",
    href: "#",
  },
  {
    id: "intec",
    name: "InTec",
    domain: "inteccr.com",
    image: "/images/web-projects/intec.webp",
    href: "#",
  },
  {
  id: "ravencorp",
  name: "Ravencorp",
  domain: "ravencorpcr.com",
  image: "/images/web-projects/ravencorp.webp",
  href: "https://ravencorpcr.com/",
},
];

function RavencorpPreview() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const frame = iframe?.parentElement;
    if (!iframe || !frame) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      iframe.style.transform = `scale(${Math.max(width / 1440, height / 850)})`;
    });
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://ravencorpcr.com/"
      title="Sitio web de Ravencorp"
      className="web-project-card__iframe"
      loading="lazy"
      tabIndex={-1}
    />
  );
}

export function WebProjectsSection() {
  return (
    <section className="web-projects">
      {/* =====================================================
          ENCABEZADO
      ====================================================== */}

      <div className="web-projects__header">
        <div>
          <span className="web-projects__eyebrow">
            <Globe2 size={12} />
            PÁGINAS WEB
          </span>

          <h2>
            Páginas con las que
            <span> hemos trabajado.</span>
          </h2>

          <p>
            Sitios web reales, para negocios reales.
          </p>
        </div>

        <a
          href="/proyectos"
          className="web-projects__all"
        >
          Ver todos los proyectos
          <ArrowRight size={14} />
        </a>
      </div>

      {/* =====================================================
          PROYECTOS
      ====================================================== */}

      <div className="web-projects__grid">
  {webProjects.map((project) => (
    <a
      key={project.id}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="web-project-card"
    >
      <div className="web-project-card__image">
        {project.id === "ravencorp" ? (
          <RavencorpPreview />
        ) : (
          <img
            src={project.image}
            alt={`Sitio web de ${project.name}`}
          />
        )}

        <span className="web-project-card__open">
          <ArrowRight size={17} />
        </span>
      </div>

      <div className="web-project-card__info">
        <strong>{project.name}</strong>
        <span>{project.domain}</span>
      </div>
    </a>
  ))}
</div>
    </section>
  );
}
