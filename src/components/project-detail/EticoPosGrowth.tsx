import {
  Boxes,
  Building2,
  FileText,
  MonitorSmartphone,
  ShoppingCart,
  Store,
  Users,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";

import { Container } from "../layout/Container";

const startFeatures = [
  {
    label: "Punto de venta",
    icon: ShoppingCart,
  },
  {
    label: "Inventario",
    icon: Boxes,
  },
  {
    label: "Clientes",
    icon: Users,
  },
];

const connectedProducts = [
  {
    id: "device",
    title: "Etico Device",
    description:
      "Conecta impresoras, terminales Windows y dispositivos Android.",
    icon: MonitorSmartphone,
  },
  {
    id: "invoice",
    title: "Etico Factura",
    description:
      "Integra comprobantes y facturación electrónica.",
    icon: FileText,
  },
];

const expansionModules = [
  {
    id: "workshop",
    title: "Talleres",
    description:
      "Recepciones, órdenes de reparación y técnicos.",
    icon: Wrench,
  },
  {
    id: "restaurant",
    title: "Restaurantes",
    description:
      "Mesas, comandas, salón y operación de cocina.",
    icon: UtensilsCrossed,
  },
  {
    id: "branches",
    title: "Sucursales",
    description:
      "Más puntos de venta, usuarios y dispositivos.",
    icon: Building2,
  },
];

export function EticoPosGrowth() {
  return (
    <section className="pos-growth">
      <Container>
        <div className="pos-growth__heading">
          <span>
            UNA PLATAFORMA QUE EVOLUCIONA
          </span>

          <h2>
            Empieza simple.
            <strong> Crece sin empezar de nuevo.</strong>
          </h2>

          <p>
            EticoPOS puede comenzar con las herramientas
            esenciales del negocio y agregar nuevas
            capacidades conforme la operación lo necesite.
          </p>
        </div>

        <div className="pos-growth__map">
          <div
            className="pos-growth__glow"
            aria-hidden="true"
          />

          <div className="pos-growth__level pos-growth__level--start">
            <span className="pos-growth__level-label">
              EMPIEZA
            </span>

            <article className="pos-growth-core">
              <div className="pos-growth-core__icon">
                <Store size={27} />
              </div>

              <div>
                <span>
                  PUNTO DE PARTIDA
                </span>

                <h3>
                  EticoPOS
                </h3>

                <p>
                  La base para administrar la operación
                  diaria de tu negocio.
                </p>
              </div>

              <div className="pos-growth-core__features">
                {startFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <span key={feature.label}>
                      <Icon size={12} />
                      {feature.label}
                    </span>
                  );
                })}
              </div>
            </article>
          </div>

          <div
            className="pos-growth__connector"
            aria-hidden="true"
          >
            <span />
          </div>

          <div className="pos-growth__level">
            <span className="pos-growth__level-label">
              CONECTA
            </span>

            <div className="pos-growth__connected">
              {connectedProducts.map((product) => {
                const Icon = product.icon;

                return (
                  <article
                    key={product.id}
                    className="pos-growth-card pos-growth-card--connected"
                  >
                    <div className="pos-growth-card__icon">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3>
                        {product.title}
                      </h3>

                      <p>
                        {product.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div
            className="pos-growth__connector"
            aria-hidden="true"
          >
            <span />
          </div>

          <div className="pos-growth__level">
            <span className="pos-growth__level-label">
              EXPANDE
            </span>

            <div className="pos-growth__expansion">
              {expansionModules.map((module) => {
                const Icon = module.icon;

                return (
                  <article
                    key={module.id}
                    className="pos-growth-card"
                  >
                    <div className="pos-growth-card__icon">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3>
                        {module.title}
                      </h3>

                      <p>
                        {module.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pos-growth__message">
          <div>
            <span>
              CRECE A TU RITMO
            </span>

            <strong>
              No necesitas implementar todo desde el
              primer día.
            </strong>

            <p>
              Empieza con lo que tu negocio necesita hoy
              y agrega nuevas herramientas cuando realmente
              las necesites.
            </p>
          </div>

          <a
            href="/#contact"
            className="button button--primary"
          >
            Hablar con Etico
          </a>
        </div>
      </Container>
    </section>
  );
}
