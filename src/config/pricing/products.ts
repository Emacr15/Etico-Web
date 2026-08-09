import type { PricingProduct } from "./types";

export const pricingProducts: PricingProduct[] = [
  {
    id: "eticopos-basic",
    name: "EticoPOS Basic",
    eyebrow: "PUNTO DE VENTA",
    description:
      "Las herramientas esenciales para administrar ventas y la operación diaria de tu negocio.",
    category: "pos",
    billingType: "monthly",
    currency: "₡",
    pricePrefix: "Desde",
    priceSuffix: "/ mes",
    features: [
      "Punto de venta",
      "Gestión de productos",
      "Inventario",
      "Clientes",
      "Usuarios y roles",
      "Reportes básicos",
      "Dashboard",
    ],
    href: "/proyectos/eticopos",
  },

  {
    id: "eticopos-business",
    name: "EticoPOS Business",
    eyebrow: "PUNTO DE VENTA",
    description:
      "Más control y herramientas para negocios que necesitan administrar una operación más completa.",
    category: "pos",
    billingType: "monthly",
    currency: "₡",
    pricePrefix: "Desde",
    priceSuffix: "/ mes",
    featured: true,
    features: [
      "Todo lo incluido en Basic",
      "Cuentas por cobrar y abonos",
      "Inventario avanzado",
      "Cierres y retiros de caja",
      "Reportes avanzados",
      "Usuarios y permisos avanzados",
      "Sistema de roles y usuarios personalizados",
      "Múltiples cajas y dispositivos",
      "Etico Device",
      "Dashboard",
    ],
    href: "/proyectos/eticopos",
  },

  {
    id: "api-factura",
    name: "API Etico Factura",
    eyebrow: "API DE FACTURACIÓN",
    description:
      "API para integrar emisión de comprobantes electrónicos en sistemas propios o externos.",
    category: "billing",
    billingType: "usage",
    currency: "₡",
    pricePrefix: "Desde",
    features: [
      "API REST",
      "Comprobantes electrónicos",
      "Integración con sistemas externos",
      "Automatización",
      "Consulta de documentos",
    ],
    href: "/proyectos/factura",
  },

  {
    id: "etico-factura",
    name: "Etico Factura",
    eyebrow: "FACTURACIÓN ELECTRÓNICA",
    description:
      "Sistema completo para administrar y emitir comprobantes electrónicos.",
    category: "billing",
    billingType: "monthly",
    currency: "₡",
    pricePrefix: "Desde",
    priceSuffix: "/ mes",
    features: [
      "Facturación electrónica",
      "Clientes",
      "Comprobantes",
      "Historial",
      "Integraciones",
    ],
    href: "/proyectos/factura",
  },

  {
    id: "management",
    name: "Etico Management",
    eyebrow: "APP ANDROID",
    description:
      "Aplicación para administrar impresoras y dispositivos vinculados al ecosistema Etico.",
    category: "devices",
    billingType: "per-device",
    currency: "₡",
    pricePrefix: "Desde",
    features: [
      "Administración de dispositivos",
      "Vinculación",
      "Estado de conexión",
      "Gestión de impresoras",
    ],
    href: "/proyectos/management",
  },

  {
    id: "device-windows",
    name: "Etico Device Windows",
    eyebrow: "WINDOWS",
    description:
      "Servicio local para conectar Etico con impresoras y dispositivos físicos del negocio.",
    category: "devices",
    billingType: "per-device",
    currency: "₡",
    pricePrefix: "Desde",
    features: [
      "Impresión térmica",
      "Terminales Windows",
      "Conexión local",
      "Comunicación con EticoPOS",
    ],
    href: "/proyectos/device",
  },

  {
    id: "eticohotel",
    name: "EticoHotel",
    eyebrow: "GESTIÓN HOTELERA",
    description:
      "Sistema administrativo para hoteles, alojamientos y propiedades.",
    category: "business",
    billingType: "monthly",
    currency: "₡",
    pricePrefix: "Desde",
    priceSuffix: "/ mes",
    features: [
      "Habitaciones",
      "Reservaciones",
      "Clientes",
      "Disponibilidad",
      "Administración",
    ],
    href: "/proyectos/eticohotel",
  },

  {
    id: "restaurant",
    name: "EticoPOS Restaurante",
    eyebrow: "RESTAURANTES",
    description:
      "EticoPOS adaptado a restaurantes y negocios gastronómicos.",
    category: "business",
    billingType: "monthly",
    currency: "₡",
    pricePrefix: "Desde",
    priceSuffix: "/ mes",
    features: [
      "Punto de venta",
      "Mesas",
      "Comandas",
      "Cocina",
      "Inventario",
      "Caja",
    ],
    href: "/proyectos/eticopos",
  },

  {
    id: "workshop",
    name: "Etico Talleres",
    eyebrow: "TALLERES",
    description:
      "Panel especializado para talleres de reparación y servicio técnico.",
    category: "business",
    billingType: "monthly",
    currency: "₡",
    pricePrefix: "Desde",
    priceSuffix: "/ mes",
    features: [
      "Recepción de equipos",
      "Órdenes de reparación",
      "Técnicos",
      "Evidencias",
      "Estados",
      "Seguimiento",
    ],
    href: "/proyectos/talleres",
  },
];
