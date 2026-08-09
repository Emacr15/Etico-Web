import {
  motion,
  useInView,
} from "framer-motion";
import {
  BarChart3,
  Boxes,
  CreditCard,
  MonitorSmartphone,
  ReceiptText,
  Store,
  Users,
  WalletCards,
} from "lucide-react";
import {
  useRef,
} from "react";

import { Container } from "../layout/Container";

const modules = [
  {
    id: "sales",
    title: "Punto de venta",
    description: "Ventas rápidas y control de caja.",
    icon: CreditCard,
  },
  {
    id: "inventory",
    title: "Inventario",
    description: "Productos, existencias y movimientos.",
    icon: Boxes,
  },
  {
    id: "customers",
    title: "Clientes",
    description: "Historial y cuentas asociadas.",
    icon: Users,
  },
  {
    id: "accounts",
    title: "Cuentas por cobrar",
    description: "Abonos, saldos y seguimiento.",
    icon: WalletCards,
  },
  {
    id: "reports",
    title: "Reportes",
    description: "Información clave del negocio.",
    icon: BarChart3,
  },
  {
    id: "devices",
    title: "Dispositivos",
    description: "Impresoras y terminales conectadas.",
    icon: MonitorSmartphone,
  },
];

export function EticoPosOperations() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(
    sectionRef,
    {
      once: true,
      margin: "-15% 0px -15% 0px",
    },
  );

  return (
    <section
      ref={sectionRef}
      className="pos-operations"
    >
      <Container>
        <div className="pos-operations__heading">
          <span>UNA OPERACIÓN CONECTADA</span>

          <h2>
            Diseñado para trabajar
            <strong> como trabaja tu negocio.</strong>
          </h2>

          <p>
            EticoPOS reúne las herramientas de operación diaria
            dentro de un mismo entorno, manteniendo ventas,
            inventario, clientes, cajas y dispositivos conectados.
          </p>
        </div>

        <div className="pos-operations__visual">
          <div className="pos-operations__glow" />

          <motion.div
            className="pos-dashboard"
            initial={{
              opacity: 0,
              y: 70,
              scale: 0.94,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <aside className="pos-dashboard__sidebar">
              <div className="pos-dashboard__brand">
                E
              </div>

              <div className="pos-dashboard__menu">
                <span className="is-active">
                  <Store size={14} />
                </span>

                <span>
                  <CreditCard size={14} />
                </span>

                <span>
                  <Boxes size={14} />
                </span>

                <span>
                  <Users size={14} />
                </span>

                <span>
                  <BarChart3 size={14} />
                </span>
              </div>
            </aside>

            <div className="pos-dashboard__workspace">
              <header className="pos-dashboard__header">
                <div>
                  <small>ETICOPOS</small>
                  <strong>Resumen del negocio</strong>
                </div>

                <motion.div
                  className="pos-dashboard__status"
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span />
                  Caja abierta
                </motion.div>
              </header>

              <motion.div
                className="pos-dashboard__stats"
                initial="hidden"
                animate={
                  isInView
                    ? "show"
                    : "hidden"
                }
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      delayChildren: 0.5,
                      staggerChildren: 0.12,
                    },
                  },
                }}
              >
                <motion.article
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45 }}
                >
                  <span>Ventas de hoy</span>
                  <strong>₡184.250</strong>
                  <small>+12.4%</small>
                </motion.article>

                <motion.article
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45 }}
                >
                  <span>Transacciones</span>
                  <strong>38</strong>
                  <small>Hoy</small>
                </motion.article>

                <motion.article
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45 }}
                >
                  <span>Clientes</span>
                  <strong>24</strong>
                  <small>Atendidos</small>
                </motion.article>

                <motion.article
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45 }}
                >
                  <span>Productos</span>
                  <strong>342</strong>
                  <small>En inventario</small>
                </motion.article>
              </motion.div>

              <div className="pos-dashboard__main">
                <div className="pos-dashboard__chart">
                  <div className="pos-dashboard__chart-heading">
                    <div>
                      <span>VENTAS</span>
                      <strong>Actividad del día</strong>
                    </div>

                    <small>Hoy</small>
                  </div>

                  <div className="pos-dashboard__chart-grid">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>

                  <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M0 115 C45 105, 65 72, 110 84 S170 115, 205 72 S270 45, 310 66 S375 95, 415 48 S470 30, 500 42"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{
                        pathLength: 0,
                        opacity: 0,
                      }}
                      animate={
                        isInView
                          ? {
                              pathLength: 1,
                              opacity: 1,
                            }
                          : {}
                      }
                      transition={{
                        pathLength: {
                          delay: 0.8,
                          duration: 1.7,
                          ease: "easeInOut",
                        },
                        opacity: {
                          delay: 0.8,
                          duration: 0.2,
                        },
                      }}
                    />

                    <motion.path
                      d="M0 115 C45 105, 65 72, 110 84 S170 115, 205 72 S270 45, 310 66 S375 95, 415 48 S470 30, 500 42 L500 150 L0 150 Z"
                      fill="currentColor"
                      initial={{
                        opacity: 0,
                      }}
                      animate={
                        isInView
                          ? {
                              opacity: 0.06,
                            }
                          : {}
                      }
                      transition={{
                        delay: 2,
                        duration: 0.5,
                      }}
                    />
                  </svg>
                </div>

                <motion.div
                  className="pos-dashboard__activity"
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay: 1,
                    duration: 0.65,
                  }}
                >
                  <span className="pos-dashboard__activity-label">
                    ACTIVIDAD
                  </span>

                  <div>
                    <span className="pos-dashboard__activity-icon">
                      <ReceiptText size={12} />
                    </span>

                    <p>
                      <strong>Venta #1045</strong>
                      <small>₡18.500 · hace 3 min</small>
                    </p>
                  </div>

                  <div>
                    <span className="pos-dashboard__activity-icon">
                      <Boxes size={12} />
                    </span>

                    <p>
                      <strong>Inventario actualizado</strong>
                      <small>12 productos · hace 14 min</small>
                    </p>
                  </div>

                  <div>
                    <span className="pos-dashboard__activity-icon">
                      <Users size={12} />
                    </span>

                    <p>
                      <strong>Nuevo cliente</strong>
                      <small>Registrado · hace 28 min</small>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="pos-operations__modules">
            {modules.map((module, index) => {
              const Icon = module.icon;

              return (
                <motion.article
                  key={module.id}
                  className={`pos-module pos-module--${module.id}`}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    x:
                      index % 2 === 0
                        ? -35
                        : 35,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          x: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay:
                      1.1 +
                      index * 0.15,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="pos-module__icon">
                    <Icon size={18} />
                  </div>

                  <div>
                    <strong>{module.title}</strong>
                    <span>{module.description}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
