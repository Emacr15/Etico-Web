import { Link2, Monitor, Settings, Smartphone } from "lucide-react";

import { Container } from "../../layout/Container";
import { HeroContent } from "./HeroContent";

const services = [
  { icon: Settings, title: "Software a la medida", description: "Soluciones adaptadas a tus procesos y objetivos." },
  { icon: Monitor, title: "Sitios web", description: "Presencia digital profesional y orientada a resultados." },
  { icon: Smartphone, title: "Aplicaciones móviles", description: "Conecta tu negocio donde estés." },
  { icon: Link2, title: "Integraciones", description: "Unifica tus sistemas y automatiza tu operación." },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__background" aria-hidden="true" />

      <Container>
        <div className="hero__layout">
          <HeroContent />
        </div>
      </Container>

      <div className="hero__services">
        <Container>
          <div className="hero__services-grid">
            {services.map(({ icon: Icon, title, description }) => (
              <article className="hero-service" key={title}>
                <div className="hero-service__icon"><Icon size={22} /></div>
                <div><strong>{title}</strong><span>{description}</span></div>
              </article>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
