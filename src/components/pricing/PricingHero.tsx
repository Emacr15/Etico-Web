import { Container } from "../layout/Container";

export function PricingHero() {
  return (
    <section className="pricing-hero">
      <Container>
        <div className="pricing-hero__content">
          <span className="pricing-hero__eyebrow">
            PLANES Y PRODUCTOS
          </span>

          <h1>
            Tecnología para
            <strong> cada parte de tu negocio.</strong>
          </h1>

          <p>
            Elige únicamente las soluciones que necesitas y
            conecta nuevas herramientas cuando tu operación crezca.
          </p>
        </div>
      </Container>
    </section>
  );
}
