import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { navigation } from "../../config/navigation";
import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="navbar">
      <Container>
        <div className="navbar__inner">
          <Link to="/" className="navbar__brand">
            <span className="navbar__brand-mark">E</span>
            <span className="navbar__brand-name">TICO</span>
          </Link>

          <nav className="navbar__nav">
            {navigation.map((item) => (
              <Link key={item.href} to={item.href}>{item.label}</Link>
            ))}
          </nav>

          <Link to="/contacto" className="navbar__contact">
            Hablemos <ArrowUpRight size={17} />
          </Link>
        </div>
      </Container>
    </header>
  );
}
