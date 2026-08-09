import {
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

export const contactMethods = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "Conversemos sobre tu proyecto.",
    value: "Escríbenos",
    icon: MessageCircle,
    href: "#",
  },
  {
    id: "email",
    title: "Correo",
    description: "Cuéntanos qué necesitas desarrollar.",
    value: "contacto@etico.cr",
    icon: Mail,
    href: "mailto:contacto@etico.cr",
  },
  {
    id: "phone",
    title: "Contacto directo",
    description: "Atención para proyectos y soluciones.",
    value: "Costa Rica",
    icon: Phone,
    href: "#",
  },
];