import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { navigation } from "../../config/navigation";
import { Container } from "./Container";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let animationFrame = 0;

    const handleScroll = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0);
        const scrollDifference = currentScrollY - lastScrollY.current;

        if (currentScrollY <= 16) {
          setIsVisible(true);
        } else if (Math.abs(scrollDifference) > 4) {
          setIsVisible(scrollDifference < 0);
        }

        lastScrollY.current = currentScrollY;
        animationFrame = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <header
      className={`navbar${isVisible ? "" : " navbar--hidden"}`}
      onFocusCapture={() => setIsVisible(true)}
    >
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
