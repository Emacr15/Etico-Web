import { Container } from "../layout/Container";

export function PurposeSection() {
  return (
    <section className="purpose-section" aria-labelledby="purpose-title">
      <Container>
        <div className="purpose-section__panel">
          <div>
            <span className="purpose-section__eyebrow">TECNOLOGÍA CON PROPÓSITO</span>
            <h2 id="purpose-title">
              Empresas más simples,<br />
              más conectadas, <strong>más fuertes.</strong>
            </h2>
          </div>

          <p>
            En Etico creemos en el poder de la tecnología bien aplicada.
            Diseñamos herramientas que se adaptan a tu negocio, sin
            complicaciones, con un enfoque en resultados.
          </p>
        </div>
      </Container>
    </section>
  );
}
