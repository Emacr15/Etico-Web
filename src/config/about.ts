import {
  Blocks,
  Gauge,
  HeartHandshake,
  RefreshCw,
} from "lucide-react";

export const aboutValues = [
  {
    id: "continuous",
    title: "Desarrollo continuo",
    description:
      "Nuestros productos evolucionan constantemente para adaptarse a nuevas necesidades.",
    icon: RefreshCw,
    tone: "blue",
  },
  {
    id: "close",
    title: "Cercanía",
    description:
      "Construimos soluciones entendiendo primero cómo funciona realmente cada negocio.",
    icon: HeartHandshake,
    tone: "green",
  },
  {
    id: "simple",
    title: "Simplicidad",
    description:
      "Buscamos que la tecnología facilite el trabajo, no que agregue más complejidad.",
    icon: Gauge,
    tone: "orange",
  },
  {
    id: "scalable",
    title: "Escalabilidad",
    description:
      "Creamos tecnología preparada para crecer junto con nuestros clientes.",
    icon: Blocks,
    tone: "purple",
  },
];