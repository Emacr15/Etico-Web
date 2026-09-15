import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { navigation } from "../../config/navigation";
import { Container } from "./Container";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1001px)");
    const handleResize = () => {
      if (desktop.matches) setIsMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [isMenuOpen]);

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
      ref={headerRef}
      className={`navbar${isVisible || isMenuOpen ? "" : " navbar--hidden"}`}
      onFocusCapture={() => setIsVisible(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsMenuOpen(false);
      }}
    >
      <Container>
        <div className="navbar__inner">
          <Link to="/" className="navbar__brand" aria-label="Etico, inicio" onClick={() => setIsMenuOpen(false)}>
            <span className="navbar__brand-mark">E</span>
            <span className="navbar__brand-name">TICO</span>
          </Link>

          <nav className="navbar__nav" aria-label="Navegación principal">
            {navigation.map((item) => (
              <Link key={item.href} to={item.href}>{item.label}</Link>
            ))}
          </nav>

          <Link to="/contacto" className="navbar__contact" onClick={() => setIsMenuOpen(false)}>
            Hablemos <ArrowUpRight size={17} />
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="navbar__toggle"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <nav id="navbar-mobile-menu" className="navbar__mobile-menu" aria-label="Navegación móvil" hidden={!isMenuOpen}>
          {navigation.map((item) => (
            <Link key={item.href} to={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
