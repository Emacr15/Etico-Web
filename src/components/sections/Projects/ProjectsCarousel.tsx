import { WebPreview } from "./WebPreview";
import { AppsPreview } from "./AppsPreview";
import { PreviewFrame } from "./PreviewFrame";
import { ManagementPreview } from "./ManagementPreview";
import { BillingPreview } from "./BillingPreview";
import { useState } from "react";

import {
  ArrowRight,
  Search,
  Zap,
  CheckCircle2,
  Clock3,
  Cloud,
  Database,
  Shield,
  TrendingUp,
  Link2,
  Settings,
  BarChart3,
  FileText,
  Globe2,
  Package,
  Smartphone,
  ShoppingCart,
  Store,
  Users,
} from "lucide-react";

import { projects } from "../../../config/projects";

/**
 * Categorías principales que mostraremos en el selector.
 *
 * No todas tienen que corresponder 1:1 con el nombre
 * interno de un proyecto. La idea es presentar el ecosistema
 * de una forma comercial más clara.
 */
const carouselItems = [
  {
    id: "pos",
    label: "EticoPOS",
    icon: ShoppingCart,
    projectSlug: "eticopos",

    benefits: [
      {
        title: "Ventas",
        description: "Agiliza tus ventas",
        icon: ShoppingCart,
      },
      {
        title: "Control de inventario",
        description: "Siempre al día",
        icon: Package,
      },
      {
        title: "Gestión de usuarios",
        description: "Trabaja en equipo",
        icon: Users,
      },
      {
        title: "Reportes en tiempo real",
        description: "Decisiones más inteligentes",
        icon: BarChart3,
      },
    ],
  },

  {
    id: "admin",
    label: "Panel administrativo",
    icon: BarChart3,
    projectSlug: null,
    customContent: {
      name: "Panel administrativo",
      category: "ETICO",
      description:
        "Centraliza métricas, usuarios, negocios, configuraciones y reportes en un solo lugar.",
      href: "/contacto",
      illustration: undefined,
    },

    benefits: [
      {
        title: "Métricas",
        description: "Vista general del negocio",
        icon: BarChart3,
      },
      {
        title: "Usuarios",
        description: "Control de accesos",
        icon: Users,
      },
      {
        title: "Negocios",
        description: "Gestión centralizada",
        icon: Store,
      },
      {
        title: "Reportes",
        description: "Información en tiempo real",
        icon: FileText,
      },
    ],
  },

  {
    id: "billing",
    label: "Factura electrónica",
    icon: FileText,
    projectSlug: "factura",

    benefits: [
      {
        title: "Comprobantes",
        description: "Emisión y control de DTE",
        icon: FileText,
      },
      { title: "Clientes", description: "Gestión de clientes", icon: Users },
      {
        title: "Integraciones",
        description: "Conectividad fiscal",
        icon: Link2,
      },
      {
        title: "Reportes",
        description: "Información en tiempo real",
        icon: BarChart3,
      },
      {
        title: "Automatización",
        description: "Flujo documental",
        icon: Settings,
      },
    ],
  },

  {
    id: "management",
    label: "Software de gestión",
    icon: Database,
    projectSlug: "management",

    benefits: [
      {
        title: "Ahorra tiempo",
        description: "Automatiza procesos",
        icon: Clock3,
      },
      {
        title: "Todo en un solo lugar",
        description: "Información centralizada",
        icon: Settings,
      },
      {
        title: "Mejores decisiones",
        description: "Con datos reales",
        icon: TrendingUp,
      },
      {
        title: "Seguro y confiable",
        description: "Control de usuarios y roles",
        icon: Shield,
      },
    ],
  },

  {
    id: "web",
    label: "Páginas web",
    icon: Globe2,
    projectSlug: null,

    customContent: {
      name: "Páginas web",
      category: "Desarrollo web",

      description:
        "Sitios y plataformas web diseñados alrededor de tu negocio, preparados para crecer e integrarse con tus sistemas.",

      href: "/contacto",

      illustration: undefined,
    },

    benefits: [
      {
        title: "Responsive",
        description: "Adaptado a móvil y desktop",
        icon: Smartphone,
      },
      { title: "SEO", description: "Optimizado para buscadores", icon: Search },
      {
        title: "Velocidad",
        description: "Carga rápida y rendimiento óptimo",
        icon: Zap,
      },
      {
        title: "Conversión",
        description: "Diseñado para generar contactos",
        icon: Users,
      },
    ],
  },

  {
    id: "apps",
    label: "Apps",
    icon: Smartphone,
    projectSlug: null,
    customContent: {
      name: "Apps",
      category: "ETICO",
      description: "Aplicaciones móviles que conectan tu negocio con tus clientes, donde quieras, cuando quieras.",
      href: "/contacto",
      illustration: undefined,
    },

    benefits: [
      {
        title: "Multiplataforma",
        description: "iOS y Android",
        icon: Smartphone,
      },
      {
        title: "Personalizable",
        description: "Adaptada a tu negocio",
        icon: Settings,
      },
      {
        title: "Siempre conectada",
        description: "Datos en tiempo real",
        icon: Cloud,
      },
      {
        title: "Segura y confiable",
        description: "Protección de tu información",
        icon: Shield,
      },
    ],
  },
];

export function ProjectsCarousel() {
  const [activeId, setActiveId] = useState("pos");

  return (
    <div className="projects-carousel">
      {/* ===================================================
          SELECTOR IZQUIERDO
      ==================================================== */}
      <div className="projects-carousel__menu">
        {carouselItems.map((item) => {
          const Icon = item.icon;

          const isActive = item.id === activeId;

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={isActive}
              className={`projects-carousel__menu-item ${
                isActive ? "is-active" : ""
              }`}
              onClick={() => setActiveId(item.id)}
            >
              <span className="projects-carousel__menu-icon">
                <Icon size={23} />
              </span>

              <span>{item.label}</span>

              {isActive && (
                <i
                  className="projects-carousel__active-line"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ===================================================
          CONTENIDO DERECHO
      ==================================================== */}
      <div className="projects-carousel__stage">
        {carouselItems.map((activeItem) => {
          const panelId = activeItem.id;
          const isActive = panelId === activeId;
          const project = activeItem.projectSlug
            ? projects.find((item) => item.slug === activeItem.projectSlug)
            : null;

          const content = project
            ? {
                name: project.name,
                category: project.category,
                description: project.description,
                href: project.href,
                illustration: project.illustration,
              }
            : activeItem.customContent;

          return (
            <div
              key={panelId}
              data-active={isActive}
              aria-hidden={!isActive}
              inert={!isActive}
              className={`projects-carousel__content projects-carousel__content--${panelId}`}
            >
            <div className="projects-carousel__main">
  <div
    className={`projects-carousel__visual projects-carousel__visual--${panelId}`}
  >
    {panelId === "admin" ? (
      <img
        src="/images/projects/panel-administrativo.png"
        alt="Panel administrativo Etico con métricas, ventas y reportes en laptop y celular"
      />
    ) : panelId === "billing" ? (
      <PreviewFrame height={420}><BillingPreview /></PreviewFrame>
    ) : panelId === "management" ? (
      <PreviewFrame height={440}><ManagementPreview /></PreviewFrame>
    ) : panelId === "apps" ? (
      <AppsPreview />
    ) : panelId === "web" ? (
      <PreviewFrame height={540}><WebPreview /></PreviewFrame>
    ) : content?.illustration ? (
      <img
        src={
          panelId === "pos"
            ? "/images/projects/eticopos-pos.png"
            : content.illustration
        }
        alt={
          panelId === "pos"
            ? "EticoPOS con pantalla de ventas, impresora de recibos y lector móvil de productos"
            : ""
        }
      />
    ) : (
      <div className="projects-carousel__placeholder">
        <Globe2 size={62} />
      </div>
    )}
  </div>

  <div className="projects-carousel__copy">
    <span className="projects-carousel__category">
      {panelId === "billing" ||
      panelId === "management" ||
      panelId === "web"
        ? "ETICO"
        : content?.category}
    </span>

    <h3>
      {panelId === "billing"
        ? "Factura electrónica"
        : panelId === "management"
          ? "Software de gestión"
          : content?.name}
    </h3>

    {panelId === "apps" && (
      <div className="apps-platforms" aria-label="Plataformas de desarrollo">
        <span><Smartphone size={25} /><span>Aplicaciones para<strong>iOS</strong></span></span>
        <span><Smartphone size={25} /><span>Aplicaciones para<strong>Android</strong></span></span>
      </div>
    )}

    {panelId === "pos" && (
      <p className="pos-carousel__subtitle">
        El punto de venta completo para hacer crecer tu negocio.
      </p>
    )}

    <p>
      {panelId === "pos"
        ? "Vende más, controla tu inventario, gestiona tu equipo y toma mejores decisiones, todo en un solo lugar."
        : panelId === "billing"
          ? "Emite comprobantes, automatiza documentos, controla clientes y conecta tu operación fiscal desde una sola plataforma."
          : panelId === "management"
            ? "Controla y conecta todas las áreas de tu negocio en un solo sistema."
            : panelId === "web"
              ? "Sitios web modernos que ayudan a tu negocio a mostrar su marca, servicios, información de contacto y convertir visitantes en clientes."
              : content?.description}
    </p>

    {panelId === "pos" && (
      <a
        className="pos-carousel__cta"
        href="/contacto"
      >
        Solicitar una demostración
        <ArrowRight size={22} />
      </a>
    )}

    {panelId === "management" && (
      <ul className="management-features">
        {[
          "Inventario y productos",
          "Ventas y compras",
          "Clientes y proveedores",
          "Reportes en tiempo real",
        ].map((label) => (
          <li key={label}>
            <CheckCircle2 size={20} />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
</div>

             <div
  className={`projects-carousel__benefits ${
    panelId === "billing"
      ? "projects-carousel__benefits--billing"
      : ""
  }`}
>
  {activeItem.benefits.map((benefit) => {
    const BenefitIcon = benefit.icon;

    return (
      <div className="projects-carousel__benefit" key={benefit.title}>
        <div>
          <BenefitIcon size={22} aria-hidden="true" />
        </div>
        <strong>{benefit.title}</strong>
        <span>{benefit.description}</span>
      </div>
    );
  })}
</div>

<a
  href={content?.href ?? "/contacto"}
  className="projects-carousel__link"
>
  Conocer más
  <ArrowRight size={15} />
</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
