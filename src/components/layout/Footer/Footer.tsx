import { Container } from "../Container";

import { FooterBrand } from "./FooterBrand";
import { FooterBottom } from "./FooterBottom";
import { FooterColumn } from "./FooterColumn";
import { FooterContact } from "./FooterContact";
import { FooterProducts } from "./FooterProducts";

const companyLinks = [
  {
    label: "Proyectos",
    href: "/proyectos",
  },
  {
    label: "Qué hacemos",
    href: "/#services",
  },
  {
    label: "Nosotros",
    href: "/#about",
  },
  {
    label: "Contacto",
    href: "/#contact",
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__surface">
        <Container>
          <div className="footer__top">
            <FooterBrand />

            <FooterColumn
              title="Etico"
              links={companyLinks}
            />

            <FooterProducts />

            <FooterContact />
          </div>

          <FooterBottom />
        </Container>
      </div>
    </footer>
  );
}
