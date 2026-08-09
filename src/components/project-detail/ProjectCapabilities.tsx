import {
  ArrowRight,
  Boxes,
  Building2,
  CheckCircle2,
  CreditCard,
  Lightbulb,
  Puzzle,
  Rocket,
  Settings,
  Star,
  Users,
  WalletCards,
  BarChart3,
} from "lucide-react";

import type { Project } from "../../config/projects";

import { Container } from "../layout/Container";

interface ProjectCapabilitiesProps {
  project: Project;
}

const posFeatures = [
  {
    number: "01",
    title: "Punto de venta",
    description:
      "Ventas rápidas, múltiples medios de pago, impresiones y más.",
    icon: CreditCard,
    visual: "pos",
  },
  {
    number: "02",
    title: "Inventario",
    description:
      "Control de existencias, alertas, ajustes y movimientos.",
    icon: Boxes,
    visual: "inventory",
  },
  {
    number: "03",
    title: "Clientes y cuentas por cobrar",
    description:
      "Historial de compras, créditos, abonos y estados de cuenta.",
    icon: WalletCards,
    visual: "customers",
  },
  {
    number: "04",
    title: "Reportes avanzados",
    description:
      "Métricas, gráficos y análisis para tomar mejores decisiones.",
    icon: BarChart3,
    visual: "reports",
  },
  {
    number: "05",
    title: "Gestión de sucursales",
    description:
      "Administra múltiples ubicaciones desde un solo lugar.",
    icon: Building2,
  },
  {
    number: "06",
    title: "Usuarios y permisos",
    description:
      "Controla el acceso y las acciones según roles en tu negocio.",
    icon: Users,
  },
  {
    number: "07",
    title: "Configuración avanzada",
    description:
      "Impuestos, métodos de pago, impresoras y más.",
    icon: Settings,
  },
  {
    number: "08",
    title: "Integraciones",
    description:
      "Conecta con dispositivos, herramientas externas y APIs.",
    icon: Puzzle,
  },
];

const basePlan = [
  "Punto de venta",
  "Gestión de productos",
  "Clientes",
  "Reportes básicos",
  "Usuarios y roles",
];

export function ProjectCapabilities({
  project,
}: ProjectCapabilitiesProps) {
  if (project.id !== "pos") {
    return null;
  }

  return (
    <section
      id="project-features"
      className="pos-features"
    >
      <Container>
        <div className="pos-features__top">
          <div className="pos-features__heading">
            <span>
              FUNCIONALIDADES
            </span>

            <h2>
              Diseñado alrededor de
              <strong> necesidades reales.</strong>
            </h2>

            <p>
              Nuestras soluciones integran las herramientas
              que tu negocio necesita para operar mejor,
              ahorrar tiempo y tomar decisiones con
              información real.
            </p>
          </div>

          <div className="pos-features__plan">
            <div className="pos-features__plan-left">
              <div className="pos-features__plan-title">
                <div className="pos-features__plan-icon">
                  <Star size={20} />
                </div>

                <h3>
                  Plan básico
                </h3>

                <span>
                  Incluido
                </span>
              </div>

              <div className="pos-features__plan-list">
                {basePlan.map((item) => (
                  <div key={item}>
                    <CheckCircle2 size={13} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pos-features__scalable">
              <div className="pos-features__rocket">
                <Rocket size={28} />
              </div>

              <h3>
                Escalable
              </h3>

              <p>
                Agrega más módulos a medida que tu negocio
                crece.
              </p>
            </div>
          </div>
        </div>

        <div className="pos-features__divider">
          <span />

          <p>
            Descubre
            <strong>
              {" "}
              todas las funcionalidades para todo tipo de
              negocio
            </strong>
          </p>

          <span />
        </div>

        <div className="pos-features__grid">
          {posFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className={`pos-feature-card ${
                  feature.visual
                    ? "pos-feature-card--visual"
                    : ""
                }`}
              >
                <div className="pos-feature-card__top">
                  <span className="pos-feature-card__number">
                    {feature.number}
                  </span>

                  <div className="pos-feature-card__icon">
                    <Icon size={19} />
                  </div>
                </div>

                {feature.visual && (
                  <div
                    className={`pos-feature-card__visual pos-feature-card__visual--${feature.visual}`}
                  >
                    {feature.visual === "pos" && (
                      <>
                        <div className="feature-pos-screen">
                          <span />
                          <span />
                          <span />
                        </div>

                        <div className="feature-pos-printer" />
                      </>
                    )}

                    {feature.visual === "inventory" && (
                      <>
                        <div className="feature-boxes">
                          <span />
                          <span />
                          <span />
                        </div>

                        <div className="feature-clipboard">
                          <i />
                          <i />
                          <i />
                        </div>
                      </>
                    )}

                    {feature.visual === "customers" && (
                      <div className="feature-customers">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    )}

                    {feature.visual === "reports" && (
                      <div className="feature-report">
                        <svg
                          viewBox="0 0 200 80"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0 65 C25 55, 35 30, 55 45 S90 60, 110 32 S150 18, 200 28"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>

                        <div className="feature-report__bars">
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="pos-feature-card__content">
                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.description}
                  </p>

                  <a href="/#contact">
                    Ver más
                    <ArrowRight size={13} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="pos-features__cta">
          <div className="pos-features__cta-icon">
            <Lightbulb size={24} />
          </div>

          <div>
            <strong>
              ¿Necesitas algo más específico?
            </strong>

            <p>
              Desarrollamos soluciones a la medida de tu
              negocio.
            </p>
          </div>

          <a
            href="/#contact"
            className="button button--primary"
          >
            Hablemos de tu proyecto
            <ArrowRight size={15} />
          </a>
        </div>
      </Container>
    </section>
  );
}
