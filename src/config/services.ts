import {
  Boxes,
  Braces,
  Cpu,
  Layers3,
} from "lucide-react";

export const services = [
  {
    id: "software",
    number: "01",
    title: "Software",
    description:
      "Creamos plataformas y aplicaciones diseñadas alrededor de procesos reales de negocio.",
    icon: Layers3,
    items: [
      "Sistemas administrativos",
      "Aplicaciones web",
      "Aplicaciones Android",
      "Plataformas personalizadas",
    ],
  },
  {
    id: "integrations",
    number: "02",
    title: "Integraciones",
    description:
      "Conectamos sistemas, servicios y plataformas para que la información fluya entre ellos.",
    icon: Braces,
    items: [
      "APIs",
      "Servicios externos",
      "Facturación electrónica",
      "Automatización de procesos",
    ],
  },
  {
    id: "devices",
    number: "03",
    title: "Dispositivos",
    description:
      "Integramos el software con equipos físicos para crear soluciones completas.",
    icon: Cpu,
    items: [
      "Impresoras",
      "Terminales POS",
      "Dispositivos Android",
      "Equipos especializados",
    ],
  },
  {
    id: "custom",
    number: "04",
    title: "Desarrollo a medida",
    description:
      "Transformamos necesidades específicas en productos tecnológicos preparados para crecer.",
    icon: Boxes,
    items: [
      "Análisis del proyecto",
      "Diseño de solución",
      "Desarrollo",
      "Evolución continua",
    ],
  },
];