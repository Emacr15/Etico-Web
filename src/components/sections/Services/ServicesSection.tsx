import {
  ArrowRight,
  Blocks,
  Braces,
  Globe2,
  Monitor,
  PencilRuler,
  Rocket,
  Search,
  Smartphone,
  Workflow,
} from "lucide-react";

import { Container } from "../../layout/Container";

export function ServicesSection() {
  const processSteps = [
    { number: "01", title: "Entendemos tu negocio", description: "Escuchamos, analizamos y mapeamos tus procesos, usuarios y necesidades reales.", icon: Search, variant: "blue" },
    { number: "02", title: "Diseñamos la solución", description: "Proponemos la mejor forma de resolverlo con una experiencia simple, intuitiva y enfocada en tu equipo.", icon: PencilRuler, variant: "green" },
    { number: "03", title: "Construimos e integramos", description: "Desarrollamos e integramos web, Android, Windows, APIs, dispositivos y servicios que ya utilizas.", icon: Braces, variant: "purple" },
    { number: "04", title: "Evoluciona contigo", description: "Tu solución puede crecer, adaptarse y mejorar a medida que tu negocio avanza.", icon: Rocket, variant: "orange" },
  ];

  const capabilities = [
    { title: "Web", description: "Aplicaciones web rápidas y seguras.", icon: Globe2, variant: "blue" },
    { title: "Android", description: "Apps móviles nativas e intuitivas.", icon: Smartphone, variant: "green" },
    { title: "Windows", description: "Sistemas de escritorio estables.", icon: Monitor, variant: "purple" },
    { title: "APIs / Servicios", description: "Integración con sistemas y servicios.", icon: Workflow, variant: "orange" },
    { title: "Dispositivos", description: "Hardware, impresoras e IoT.", icon: Blocks, variant: "cyan" },
  ];

  return (
    <section className="custom-development" id="services">
      <Container>
        <div className="custom-development__layout">
          <div className="custom-development__content">
            <div className="custom-development__eyebrow" data-etico-animate data-direction="up">
              <Braces size={13} />
              <span>DESARROLLO A TU MEDIDA</span>
            </div>

            <h2 data-etico-animate data-direction="up" data-delay="0.08">
              Tu negocio es único.<br />
              Tu software también<strong> puede serlo.</strong>
            </h2>

            <p className="custom-development__description" data-etico-animate data-direction="up" data-delay="0.14">
              No todas las empresas trabajan igual. Por eso podemos crear páginas web,
              aplicaciones, plataformas e integraciones que se adapten a tu forma de operar, no al revés.
            </p>

            <div className="custom-development__steps">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.number} className="development-step" data-etico-animate data-direction="up" data-delay={0.08 + index * 0.07}>
                    <div className="development-step__number">{step.number}</div>
                    <div className={`development-step__icon development-step__icon--${step.variant}`}><Icon size={22} /></div>
                    <div className="development-step__copy"><h3>{step.title}</h3><p>{step.description}</p></div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="custom-development__visual" data-etico-animate data-direction="left" data-delay="0.18">
            <div className="custom-solution">
              <div className="custom-solution__window">
                <div className="custom-solution__topbar">
                  <div className="custom-solution__window-controls"><span /><span /><span /></div>
                  <div className="custom-solution__search">Buscar...</div>
                  <div className="custom-solution__avatar" />
                </div>

                <div className="custom-solution__body">
                  <aside className="custom-solution__sidebar">
                    <div className="custom-solution__brand"><Blocks size={15} /><strong>TuSolución</strong></div>
                    <div className="custom-solution__nav"><span className="is-active" /><span /><span /><span /><span /></div>
                  </aside>

                  <div className="custom-solution__dashboard">
                    <div className="custom-solution__dashboard-title"><span>Resumen general</span><small>Esta semana</small></div>
                    <div className="custom-solution__metrics">
                      <div><span>Total</span><strong>12,540</strong><small>+18.6%</small></div>
                      <div><span>En proceso</span><strong>8,320</strong><small>+12.4%</small></div>
                      <div><span>Completadas</span><strong>4,220</strong><small>+9.1%</small></div>
                      <div><span>Pendientes</span><strong>2,150</strong><small>-4.3%</small></div>
                    </div>

                    <div className="custom-solution__lower">
                      <div className="custom-solution__chart">
                        <div className="custom-solution__chart-header"><strong>Actividad</strong></div>
                        <svg viewBox="0 0 440 150" preserveAspectRatio="none" aria-hidden="true">
                          <path d="M0 120 C45 112, 60 80, 100 95 S155 108, 185 68 S235 48, 265 77 S325 68, 350 38 S405 24, 440 44" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                        <div className="custom-solution__chart-grid"><span /><span /><span /></div>
                      </div>

                      <div className="custom-solution__activity">
                        <strong>Actividad reciente</strong>
                        <div><i className="custom-solution__activity-dot custom-solution__activity-dot--blue" /><span>Nuevo registro</span></div>
                        <div><i className="custom-solution__activity-dot custom-solution__activity-dot--green" /><span>Aprobación pendiente</span></div>
                        <div><i className="custom-solution__activity-dot custom-solution__activity-dot--orange" /><span>Proceso completado</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="custom-solution__phone">
                <div className="custom-solution__phone-notch" />
                <div className="custom-solution__phone-content">
                  <div className="custom-solution__phone-header"><Blocks size={12} /><span>Resumen</span></div>
                  <div className="custom-solution__phone-main"><span>Progreso</span><strong>64%</strong><div className="custom-solution__progress"><i /></div></div>
                  <div className="custom-solution__phone-grid"><span /><span /><span /><span /></div>
                </div>
              </div>

              <div className="custom-development__capabilities">
                {capabilities.map((capability) => {
                  const Icon = capability.icon;
                  return (
                    <article key={capability.title} className={`development-capability development-capability--${capability.variant}`}>
                      <Icon size={20} /><strong>{capability.title}</strong><span>{capability.description}</span>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="custom-development__cta" data-etico-animate data-direction="up">
          <div className="custom-development__cta-icon"><Rocket size={25} /></div>
          <div className="custom-development__cta-copy"><strong>¿Tienes una idea en mente?</strong><p>Cuéntanos cómo trabajas y construyamos juntos la herramienta que tu negocio necesita.</p></div>
          <a href="/contacto" className="custom-development__cta-button">Cuéntanos tu idea <ArrowRight size={16} /></a>
          <div className="custom-development__cta-benefits">
            <span>✓ 100% adaptado a tu negocio</span>
            <span>✓ Integración con tus sistemas actuales</span>
            <span>✓ Preparado para crecer contigo</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
