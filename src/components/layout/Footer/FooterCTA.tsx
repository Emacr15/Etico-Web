import {
  ArrowUpRight,
  Send,
} from "lucide-react";

export function FooterCTA() {
  return (
    <div className="footer__cta">
      <div className="footer__cta-decoration" />

      <div className="footer__cta-icon">
        <Send size={21} />
      </div>

      <div className="footer__cta-copy">
        <h3>
          ¿Tienes un proyecto en mente?
        </h3>

        <p>
          Cuéntanos tu idea y creemos juntos la solución
          que tu negocio necesita.
        </p>
      </div>

      <a href="/contacto">
        Hablemos de tu proyecto

        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
