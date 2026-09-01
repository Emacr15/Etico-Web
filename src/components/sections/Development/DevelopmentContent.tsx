import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

export function DevelopmentContent() {
  return (
    <div className="development__content">
      <span className="development__eyebrow">
        ¿TIENES UNA IDEA?
      </span>

      <h2>
        Hablemos para desarrollar
        <span> la próxima tecnología.</span>
      </h2>

      <p>
        Convertimos ideas en productos reales,
        escalables y conectados. Cuéntanos tu
        proyecto y hagámoslo posible.
      </p>

      <div className="development__actions">
        <a
          href="/contacto"
          className="development__button development__button--primary"
        >
          <MessageCircle size={17} />

          Hablemos de tu proyecto

          <ArrowUpRight size={16} />
        </a>

        <a
          href="#services"
          className="development__button development__button--secondary"
        >
          Ver cómo trabajamos

          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
