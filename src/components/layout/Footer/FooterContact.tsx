import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

export function FooterContact() {
  return (
    <div className="footer__column">
      <h3>
        Contacto
      </h3>

      <div className="footer__column-line" />

      <a
        href="mailto:contacto@etico.cr"
        className="footer__contact-link"
      >
        <Mail size={13} />

        contacto@etico.cr

        <ArrowUpRight size={11} />
      </a>

      <span className="footer__location">
        <MapPin size={13} />

        Costa Rica
      </span>
    </div>
  );
}
