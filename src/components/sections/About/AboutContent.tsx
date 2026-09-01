import {
  ArrowUpRight,
  Check,
} from "lucide-react";

const capabilities = [
  "Software",
  "Aplicaciones",
  "Dispositivos",
  "Integraciones",
];

export function AboutContent() {
  return (
    <div className="about__content">
      <span className="about__eyebrow">
        <span />
        NUESTRO PROPÓSITO
      </span>

      <h2>
        Creamos tecnología útil,
        <span>
          {" "}
          pensada para negocios reales.
        </span>
      </h2>

      <p className="about__lead">
        En Etico desarrollamos soluciones que
        simplifican procesos, conectan sistemas y
        dispositivos, y ayudan a las empresas a
        trabajar de una manera más eficiente.
      </p>

      <p className="about__text">
        No buscamos crear tecnología por crearla.
        Diseñamos productos alrededor de necesidades
        reales y construimos un ecosistema capaz de
        crecer junto con cada negocio.
      </p>

      <div className="about__capabilities">
        {capabilities.map((item) => (
          <span key={item}>
            <Check size={14} />
            {item}
          </span>
        ))}
      </div>

      <a
        href="/contacto"
        className="about__link"
      >
        Conocer más sobre Etico
        <ArrowUpRight size={17} />
      </a>
    </div>
  );
}
