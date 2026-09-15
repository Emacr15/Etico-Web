import { Globe2, Monitor, Search, Settings, Users, Zap } from "lucide-react";

function WebsiteScreen({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className="web-preview__website">
      <header><b>ETICO</b><span>{mobile ? "☰" : "Inicio　 Servicios　 Nosotros　 Contacto"}</span>{!mobile && <i>Solicitar cotización</i>}</header>
      <div className="web-preview__hero">
        <div><small>TU NEGOCIO EN EL SIGUIENTE NIVEL</small><h4>{mobile ? "Tu negocio también en línea" : "Soluciones que hacen crecer tu negocio"}</h4><p>Diseñamos experiencias digitales que conectan tu marca con más clientes.</p><i>Solicitar cotización</i></div>
        <div className="web-preview__office"><div className="web-preview__window" /><div className="web-preview__desk" /><div className="web-preview__computer" /><div className="web-preview__plant"><span /><span /><span /><b /></div><p>Ideas<br />today.<br />Mejores<br />negocios<br />mañana.</p></div>
      </div>
      <h5>{mobile ? "Servicios" : "Nuestros servicios"}</h5><p className="web-preview__intro">Todo lo que necesitas para una presencia digital profesional</p>
      <div className="web-preview__services">{[{Icon: Monitor, title: "Sitios web corporativos"}, {Icon: Settings, title: "Sitios a medida"}, {Icon: Users, title: "Landing pages"}].map(({Icon,title}) => <div key={title}><Icon /><b>{title}</b><span>Conecta con tus clientes.</span></div>)}</div>
      {mobile && <div className="web-preview__mobile-icons"><Search /><Zap /></div>}
    </div>
  );
}

export function WebPreview() {
  return (
    <div className="web-preview" role="img" aria-label="Vista ilustrativa de una página Etico adaptable a computadora y teléfono, con servicios y contacto">
      <div aria-hidden="true">
        <div className="web-preview__halo" />
        <div className="web-preview__desktop"><div className="web-preview__screen"><WebsiteScreen /></div><div className="web-preview__stand" /><div className="web-preview__foot" /></div>
        <div className="web-preview__phone"><div className="web-preview__notch" /><WebsiteScreen mobile /></div>
        <div className="web-preview__floating"><Globe2 /><div><b>Tu negocio en línea</b><span>Más clientes, más oportunidades</span><i /></div></div>
      </div>
    </div>
  );
}