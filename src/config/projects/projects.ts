import {
  BarChart3,
  Boxes,
  Building2,
  CreditCard,
  Hotel,
  MonitorSmartphone,
  ReceiptText,
  Smartphone,
  Store,
  Users,
  Wrench,
} from "lucide-react";

import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "pos",
    slug: "eticopos",
    name: "EticoPOS",
    category: "Punto de venta",
    description:
      "Sistema de punto de venta para comercios, con ventas, inventario, clientes, cuentas por cobrar y reportes.",
    icon: Store,
    variant: "primary",
    illustration: "/images/projects/eticopos-3d.png",
    accent: "blue",
    href: "/proyectos/eticopos",

    features: [
      "Ventas",
      "Inventario",
      "Clientes",
      "Reportes",
    ],

    headline:
      "Todo lo que necesitas para administrar tu negocio desde un solo lugar.",

    longDescription:
      "EticoPOS conecta ventas, inventario, clientes, cajas, reportes y dispositivos en una plataforma diseñada para simplificar la operación diaria.",

    capabilities: [
      {
        title: "Punto de venta",
        description:
          "Procesa ventas de forma rápida y sencilla desde diferentes dispositivos.",
      },
      {
        title: "Inventario",
        description:
          "Mantén el control de productos, existencias y movimientos.",
      },
      {
        title: "Clientes",
        description:
          "Centraliza información, historial y cuentas por cobrar.",
      },
      {
        title: "Reportes",
        description:
          "Consulta información clave para entender mejor el negocio.",
      },
    ],
    highlights: [
  {
    title: "Ventas rápidas",
    description:
      "Una interfaz de cobro diseñada para reducir pasos y mantener la operación ágil.",
    icon: CreditCard,
  },
  {
    title: "Inventario conectado",
    description:
      "Productos, existencias y movimientos actualizados desde la misma plataforma.",
    icon: Boxes,
  },
  {
    title: "Clientes",
    description:
      "Historial, cuentas por cobrar y ventas asociadas a cada cliente.",
    icon: Users,
  },
  {
    title: "Información para decidir",
    description:
      "Reportes y datos que permiten entender mejor la operación del negocio.",
    icon: BarChart3,
  },
],

audience: [
  "Tiendas",
  "Supermercados",
  "Restaurantes",
  "Panaderías",
  "Ferreterías",
  "Comercios",
],

integrations: [
  "Etico Device",
  "Etico Factura",
  "Impresoras térmicas",
  "Terminales Windows",
  "Dispositivos Android",
],
  },

  {
    id: "hotel",
    slug: "eticohotel",
    name: "EticoHotel",
    category: "Gestión hotelera",
    description:
      "Administración de habitaciones, reservaciones, clientes, disponibilidad y presencia web.",
    icon: Hotel,
    variant: "dark",
    illustration: "/images/projects/eticohotel-3d.png",
    accent: "purple",
    href: "/proyectos/eticohotel",

    features: [
      "Habitaciones",
      "Reservaciones",
      "Clientes",
      "Disponibilidad",
    ],

    headline:
      "Gestiona habitaciones, reservaciones y huéspedes desde una sola plataforma.",

    longDescription:
      "EticoHotel centraliza la operación hotelera para facilitar la administración de habitaciones, reservaciones, disponibilidad, clientes y procesos internos.",

    capabilities: [
      {
        title: "Habitaciones",
        description:
          "Administra habitaciones, categorías, estados y disponibilidad.",
      },
      {
        title: "Reservaciones",
        description:
          "Gestiona reservaciones y movimientos desde una vista centralizada.",
      },
      {
        title: "Clientes",
        description:
          "Mantén organizada la información de huéspedes y sus estadías.",
      },
      {
        title: "Disponibilidad",
        description:
          "Consulta rápidamente qué habitaciones están disponibles.",
      },
    ],
  },

  {
    id: "workshop",
    slug: "talleres",
    name: "EticoPOS Talleres",
    category: "Talleres",
    description:
      "Recepción de equipos, órdenes de reparación, técnicos, evidencias y seguimiento.",
    icon: Wrench,
    variant: "light",
    illustration: "/images/projects/talleres-3d.png",
    accent: "orange",
    href: "/proyectos/talleres",

    features: [
      "Recepciones",
      "Órdenes",
      "Técnicos",
      "Evidencias",
    ],

    headline:
      "Controla cada reparación desde la recepción hasta la entrega.",

    longDescription:
      "EticoPOS Talleres permite organizar recepciones, órdenes de trabajo, técnicos, estados, evidencias y seguimiento de equipos durante todo el proceso de reparación.",

    capabilities: [
      {
        title: "Recepción",
        description:
          "Registra clientes, equipos, accesorios y detalles del problema.",
      },
      {
        title: "Órdenes",
        description:
          "Mantén organizada cada reparación mediante órdenes de trabajo.",
      },
      {
        title: "Técnicos",
        description:
          "Asigna responsables y da seguimiento al avance de cada reparación.",
      },
      {
        title: "Evidencias",
        description:
          "Documenta el estado de los equipos y el proceso realizado.",
      },
    ],
  },

  {
    id: "device",
    slug: "device",
    name: "Etico Device",
    category: "Dispositivos",
    description:
      "Conexión entre nuestros sistemas, impresoras, terminales Windows, Android y hardware.",
    icon: MonitorSmartphone,
    variant: "soft",
    illustration: "/images/projects/device-3d.png",
    accent: "cyan",
    href: "/proyectos/device",

    features: [
      "Impresoras",
      "Windows",
      "Android",
      "Conectividad",
    ],

    headline:
      "Conectamos el software de Etico con los dispositivos que utiliza tu negocio.",

    longDescription:
      "Etico Device permite que nuestros sistemas se comuniquen con impresoras, terminales Windows, dispositivos Android y otros equipos físicos de forma controlada.",

    capabilities: [
      {
        title: "Impresoras",
        description:
          "Integra impresoras térmicas y otros equipos de impresión.",
      },
      {
        title: "Windows",
        description:
          "Conecta terminales de escritorio con servicios y dispositivos locales.",
      },
      {
        title: "Android",
        description:
          "Permite utilizar dispositivos Android dentro del ecosistema Etico.",
      },
      {
        title: "Conectividad",
        description:
          "Mantiene comunicación entre software, hardware y servicios.",
      },
    ],
  },

  {
    id: "invoice",
    slug: "factura",
    name: "Etico Factura",
    category: "Factura electrónica",
    description:
      "API de facturación electrónica, emisión de comprobantes e integración con sistemas externos.",
    icon: ReceiptText,
    variant: "invoice",
    illustration: "/images/projects/factura-3d.png",
    accent: "green",
    href: "/proyectos/factura",

    features: [
      "API",
      "Comprobantes",
      "Integraciones",
      "Automatización",
    ],

    headline:
      "Facturación electrónica preparada para integrarse con diferentes plataformas.",

    longDescription:
      "Etico Factura centraliza la emisión de comprobantes electrónicos mediante una API preparada para conectarse con productos Etico y sistemas externos.",

    capabilities: [
      {
        title: "API",
        description:
          "Integra facturación electrónica con diferentes aplicaciones.",
      },
      {
        title: "Comprobantes",
        description:
          "Gestiona la generación y emisión de comprobantes electrónicos.",
      },
      {
        title: "Integraciones",
        description:
          "Conecta la facturación con sistemas internos o plataformas externas.",
      },
      {
        title: "Automatización",
        description:
          "Reduce procesos manuales mediante flujos automatizados.",
      },
    ],
  },

  {
    id: "management",
    slug: "management",
    name: "Etico Management",
    category: "App Android",
    description:
      "Aplicación Android para administrar impresoras y dispositivos vinculados al ecosistema Etico.",
    icon: Smartphone,
    variant: "management",
    illustration: "/images/projects/management-3d.png",
    accent: "purple",
    href: "/proyectos/management",

    features: [
      "Impresoras",
      "Vinculación",
      "Estado",
      "Administración",
    ],

    headline:
      "Administra dispositivos Etico desde una aplicación Android.",

    longDescription:
      "Etico Management permite vincular, identificar y administrar impresoras y dispositivos asociados al ecosistema Etico, además de consultar su estado de conexión.",

    capabilities: [
      {
        title: "Dispositivos",
        description:
          "Consulta los equipos vinculados desde un único lugar.",
      },
      {
        title: "Vinculación",
        description:
          "Asocia nuevos dispositivos al negocio de forma controlada.",
      },
      {
        title: "Estado",
        description:
          "Consulta si una impresora o dispositivo se encuentra conectado.",
      },
      {
        title: "Administración",
        description:
          "Gestiona equipos vinculados y su configuración desde Android.",
      },
    ],
  },

  {
    id: "erp",
    slug: "erp",
    name: "Etico ERP",
    category: "Gestión empresarial",
    description:
      "Plataforma integral para conectar ventas, compras, inventario, finanzas y operaciones en un solo lugar.",
    icon: Building2,
    variant: "primary",
    accent: "blue",
    href: "/proyectos/erp",

    features: [
      "Ventas",
      "Compras",
      "Inventario",
      "Finanzas",
    ],

    headline:
      "Conecta las áreas de tu empresa y toma mejores decisiones con información centralizada.",

    longDescription:
      "Etico ERP integra los procesos esenciales del negocio en una plataforma preparada para organizar la operación, reducir tareas manuales y ofrecer una visión completa de la empresa.",

    capabilities: [
      {
        title: "Operación centralizada",
        description:
          "Gestiona ventas, compras e inventario desde una misma plataforma.",
      },
      {
        title: "Control financiero",
        description:
          "Consulta movimientos e información clave para mantener el control del negocio.",
      },
      {
        title: "Procesos conectados",
        description:
          "Mantén sincronizadas las diferentes áreas y reduce la duplicación de tareas.",
      },
      {
        title: "Información para decidir",
        description:
          "Obtén una visión integral de la empresa mediante datos organizados y accesibles.",
      },
    ],
  },
];
