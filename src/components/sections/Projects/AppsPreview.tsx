import { BarChart3, Bell, ChevronRight, Clock3, Home, Menu, Package, Rocket, Settings, ShoppingBag, Smartphone, Users } from "lucide-react";

export function AppsPreview() {
  return (
    <div className="apps-preview" role="img" aria-label="Vista ilustrativa de dos teléfonos con la app EticoPOS: inicio, ventas, productos, clientes y reportes">
      <div className="apps-preview__halo" />
      <div className="apps-preview__phone apps-preview__phone--sales" aria-hidden="true">
        <div className="apps-preview__status">9:41 <span>▮▮▮ ▰</span></div>
        <header>‹ <b>Ventas</b><span /></header>
        <small>Últimos 30 días⌄</small>
        <h4>₡ 1,248,320</h4>
        <p className="apps-preview__growth">↑ 12%</p>
        <svg className="apps-preview__chart" viewBox="0 0 180 100">
          <path d="M0 73 Q15 88 30 60 T60 66 T90 65 T120 45 T150 30 T180 22 L180 100 L0 100Z" fill="#e7f0ff" />
          <path d="M0 73 Q15 88 30 60 T60 66 T90 65 T120 45 T150 30 T180 22" fill="none" stroke="#0878ff" strokeWidth="2" />
        </svg>
        {[['Efectivo', '52%'], ['Tarjeta', '28%'], ['SINPE', '15%'], ['Otros', '5%']].map(([label, value], index) => (
          <div className={`apps-preview__payment apps-preview__tile--${index}`} key={label}><ShoppingBag /><span>{label}</span><b>{value}</b></div>
        ))}
      </div>
      <div className="apps-preview__phone apps-preview__phone--home" aria-hidden="true">
        <div className="apps-preview__status">9:41 <span>▮▮▮ ▰</span></div>
        <header><Menu /><b>EticoPOS</b><Bell /></header>
        <h4>Hola, Juan 👋</h4>
        <small>Tu negocio en tus manos</small>
        <div className="apps-preview__tiles">
          {[{ label: 'Ventas', icon: ShoppingBag }, { label: 'Productos', icon: Package }, { label: 'Clientes', icon: Users }, { label: 'Reportes', icon: BarChart3 }].map(({ label, icon: Icon }, index) => (
            <div className={`apps-preview__tile--${index}`} key={label}><Icon /><span>{label}</span></div>
          ))}
        </div>
        <div className="apps-preview__row"><Clock3 />Cierres de turno<ChevronRight /></div>
        <div className="apps-preview__row"><Settings />Configuración<ChevronRight /></div>
        <footer><span><Home />Inicio</span><span><ShoppingBag />Ventas</span><span><Package />Productos</span><span><Smartphone />Más</span></footer>
      </div>
      <div className="apps-preview__callout" aria-hidden="true"><Rocket /><strong>Lleva tu negocio<br />más lejos</strong><span /><span /></div>
    </div>
  );
}
