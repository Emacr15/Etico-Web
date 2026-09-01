import { ArrowUpRight } from "lucide-react";

import { navigation } from "../../config/navigation";
import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="navbar">
      <Container>
        <div className="navbar__inner">
          <a href="/" className="navbar__brand">
            <span className="navbar__brand-mark">E</span>
            <span className="navbar__brand-name">TICO</span>
          </a>

          <nav className="navbar__nav">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <a href="/contacto" className="navbar__contact">
            Hablemos <ArrowUpRight size={17} />
          </a>
        </div>
      </Container>
    </header>
  );
}
