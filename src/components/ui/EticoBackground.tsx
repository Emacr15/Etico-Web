/**
 * Fondo decorativo reutilizable de Etico.
 *
 * Las palabras son únicamente visuales, por eso se ocultan
 * de lectores de pantalla con aria-hidden.
 */
export function EticoBackground() {
  return (
    <div className="etico-background" aria-hidden="true">
      {Array.from({ length: 28 }).map((_, index) => (
        <span
          key={index}
          className={`etico-background__word etico-background__word--${index + 1}`}
        >
          ETICO
        </span>
      ))}
    </div>
  );
}
