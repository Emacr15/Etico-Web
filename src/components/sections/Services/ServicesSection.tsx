import { Container } from "../../layout/Container";

import { ApproachGrid } from "./ApproachGrid";
import { ServicesIntro } from "./ServicesIntro";
import { ServicesProducts } from "./ServicesProducts";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="services"
    >
      <Container>
        <div className="services__top">
          <ServicesIntro />
          <ApproachGrid />
        </div>

        <ServicesProducts />
      </Container>
    </section>
  );
}
