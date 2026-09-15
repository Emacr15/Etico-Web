import { BarChart3, FileText, Package, ShoppingCart, Users } from "lucide-react";

export function ManagementPreview() {
  return (
    <div className="management-preview" role="img" aria-label="Vista ilustrativa de Software de gestión Etico con ventas, inventario, clientes, compras y reportes conectados">
      <div aria-hidden="true">
        <svg className="management-preview__connections" viewBox="0 0 600 450" preserveAspectRatio="none"><path d="M130 65 Q210 65 210 145 M320 45 V140 M510 75 Q450 75 450 145 M35 240 Q90 240 110 270 M560 270 Q530 340 480 340" /></svg>
        <div className="management-preview__tag management-preview__tag--inventory"><Package /><b>Inventario</b></div>
        <div className="management-preview__tag management-preview__tag--customers"><Users /><b>Clientes</b></div>
        <div className="management-preview__tag management-preview__tag--purchases"><ShoppingCart /><b>Compras</b></div>
        <div className="management-preview__tag management-preview__tag--sales"><BarChart3 /><b>Ventas</b></div>
        <div className="management-preview__tag management-preview__tag--reports"><FileText /><b>Reportes</b></div>
        <div className="admin-preview management-preview__laptop">
          <div className="admin-preview__screen">
            <aside><b>EticoPOS</b>{["Dashboard", "Productos", "Inventario", "Ventas", "Compras", "Clientes", "Proveedores", "Reportes", "Configuración"].map((label, index) => <span key={label} className={index === 0 ? "is-selected" : ""}><Package size={8} />{label}</span>)}</aside>
            <div className="admin-preview__dashboard">
              <div className="admin-preview__toolbar">Buscar… <span>● JD</span></div>
              <div className="admin-preview__metrics">{[["Ventas del mes", "₡3,450,000"], ["Productos", "248"], ["Clientes", "186"], ["Compras", "₡1,125,000"]].map(([label, value]) => <div key={label}><small>{label}</small><b>{value}</b><em>↑ 12%</em></div>)}</div>
              <div className="admin-preview__panels">
                <div><b>Ventas</b><svg viewBox="0 0 200 110"><path d="M0 95 Q20 90 30 76 T60 68 T95 55 T125 35 T160 24 T200 15 V110 H0Z" fill="#dbeafe" /><path d="M0 95 Q20 90 30 76 T60 68 T95 55 T125 35 T160 24 T200 15" fill="none" stroke="#2563eb" strokeWidth="2" /></svg><small>Ene　Feb　Mar　Abr　May　Jun</small></div>
                <div><b>Productos más vendidos</b>{["Cargador USB-C", "Vidrio templado", "Estuche protector", "Cable Lightning", "Audífonos Bluetooth"].map((name, index) => <span className="management-preview__product" key={name}><Package size={12} /><span>{name}</span><small>{120 - index * 17}</small></span>)}</div>
              </div>
            </div>
          </div>
          <div className="admin-preview__base" />
        </div>
        <div className="management-preview__plant"><i /><i /><i /><span /></div>
        <div className="management-preview__mug"><b>ETICO</b><small>TECNOLOGÍA<br />QUE IMPULSA</small></div>
      </div>
    </div>
  );
}