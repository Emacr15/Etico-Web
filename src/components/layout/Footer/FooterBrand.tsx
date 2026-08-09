import {
  AtSign,
  Globe2,
  Mail,
  MessageCircle,
} from "lucide-react";

export function FooterBrand() {
  return (
    <div className="footer__brand">
      <a
        href="/"
        className="footer__logo"
      >
        <span className="footer__logo-mark">
          E
        </span>

        <div>
          <strong>
            ETICO
          </strong>

          <small>
            TECNOLOGÍA
          </small>
        </div>
      </a>

      <p>
        Tecnología creada para simplificar operaciones,
        conectar procesos y ayudar a los negocios a crecer.
      </p>

      <div className="footer__socials">
        <a
          href="#"
          aria-label="Sitio web"
        >
          <Globe2 size={14} />
        </a>

        <a
          href="#"
          aria-label="Red social"
        >
          <AtSign size={14} />
        </a>

        <a
          href="#"
          aria-label="Mensajería"
        >
          <MessageCircle size={14} />
        </a>

        <a
          href="mailto:contacto@etico.cr"
          aria-label="Correo"
        >
          <Mail size={14} />
        </a>
      </div>
    </div>
  );
}
