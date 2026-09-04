import { ArrowRight, BarChart3, CirclePlay, Settings, ShieldCheck, Users } from "lucide-react";

const benefits = [
  { icon: BarChart3, label: "Más eficiencia" },
  { icon: Settings, label: "Procesos simplificados" },
  { icon: Users, label: "Mejores experiencias" },
  { icon: ShieldCheck, label: "Tecnología confiable" },
];

export function HeroContent() {
  return (
    <div className="hero__content">
      <div className="hero__eyebrow">SOFTWARE QUE IMPULSA NEGOCIOS</div>

      <h1>
        Soluciones digitales<br />
        para un <span>mundo real</span>
      </h1>

      <p>
        Desarrollamos software, aplicaciones, sitios web e integraciones que
        simplifican tu operación, conectan tus procesos y te ayudan a crecer.
      </p>

      <div className="hero__actions">
        <a href="/contacto" className="button button--primary">
          Solicitar una asesoría
          <ArrowRight size={17} />
        </a>

        <a href="#services" className="button button--secondary">
          <CirclePlay size={20} />
          Ver cómo trabajamos
        </a>
      </div>

      <div className="hero__benefits">
        {benefits.map(({ icon: Icon, label }) => (
          <div className="hero-benefit" key={label}>
            <Icon size={21} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
