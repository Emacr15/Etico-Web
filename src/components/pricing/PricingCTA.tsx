import {
  ArrowRight,
  Lightbulb,
} from "lucide-react";

import { Container } from "../layout/Container";

export function PricingCTA() {
  return (
    <section className="pricing-custom">
      <Container>
        <div className="pricing-custom__panel">
          <div className="pricing-custom__icon">
            <Lightbulb size={25} />
          </div>

          <div>
            <span>
              SOLUCIONES A MEDIDA
            </span>

            <h2>
              ¿Necesitas combinar productos o desarrollar algo específico?
            </h2>

            <p>
              Podemos adaptar nuestras soluciones a los procesos,
              dispositivos y necesidades de tu negocio.
            </p>
          </div>

          <a
            href="/#contact"
            className="button button--primary"
          >
            Hablemos de tu proyecto
            <ArrowRight size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}
