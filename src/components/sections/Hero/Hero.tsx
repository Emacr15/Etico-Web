import { Container } from "../../layout/Container";

import { HeroContent } from "./HeroContent";
import { HeroEcosystem } from "./HeroEcosystem";

export function Hero() {
  return (
    <section className="hero">
      <div
        className="hero__background"
        aria-hidden="true"
      />

      <Container>
        <div className="hero__layout">
          <HeroContent />
          <HeroEcosystem />
        </div>
      </Container>
    </section>
  );
}
