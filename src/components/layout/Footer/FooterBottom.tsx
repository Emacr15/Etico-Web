export function FooterBottom() {
  const currentYear =
    new Date().getFullYear();

  return (
    <div className="footer__bottom">
      <span>
        © {currentYear} Etico. Todos los derechos reservados.
      </span>

      <div>
        <a href="#">
          Privacidad
        </a>

        <a href="#">
          Términos
        </a>

        <a href="#">
          Política de cookies
        </a>
      </div>
    </div>
  );
}
