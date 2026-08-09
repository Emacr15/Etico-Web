import { ArrowRight } from "lucide-react";

export function HeroContent() {
  return (
    <div className="hero__content">
      <div className="hero__eyebrow">
        <span />
        Tecnología para negocios
      </div>

      <h1>
        Creamos tecnología
        <span>
          {" "}
          para hacer avanzar negocios.
        </span>
      </h1>

      <p>
        Diseñamos software, plataformas e
        integraciones que simplifican la operación
        de empresas y conectan su mundo digital con
        el físico.
      </p>

      <div className="hero__actions">
        <a
          href="/proyectos"
          className="button button--primary"
        >
          Explorar soluciones
          <ArrowRight size={17} />
        </a>

        <a
          href="#about"
          className="button button--secondary"
        >
          Conocer Etico
        </a>
      </div>
    </div>
  );
}
