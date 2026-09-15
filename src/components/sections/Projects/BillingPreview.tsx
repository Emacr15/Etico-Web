import { FileText } from "lucide-react";

export function BillingPreview() {
  return (
    <div className="admin-preview billing-preview" role="img" aria-label="Vista ilustrativa de facturación Etico: comprobantes, factura electrónica y métricas de emisión">
      <div className="admin-preview__screen" aria-hidden="true">
        <aside>
          <b>ETICO</b>
          {["Facturación", "Comprobantes", "Clientes", "Productos", "Catálogos", "Integraciones", "Reportes", "Configuración"].map((label, index) => (
            <span key={label} className={index === 0 ? "is-selected" : ""}><FileText size={9} />{label}</span>
          ))}
        </aside>
        <div className="billing-preview__workspace">
          <div className="admin-preview__toolbar">Buscar factura, cliente o folio… <span>● JD</span></div>
          <div className="billing-preview__columns">
            <div className="billing-preview__documents">
              <strong>Comprobantes</strong>
              <div className="billing-preview__tabs"><b>Todos</b><span>Emitidas</span><span>Pendientes</span><span>Enviadas</span></div>
              <div className="billing-preview__row billing-preview__head"><span>Folio</span><span>Cliente</span><span>Total</span><span>Estado</span></div>
              {["Comercial Delta", "Servicios Luna", "Restaurantes El Sol", "Distribuidora Norte", "Grupo Industrial", "Soluciones Creativas"].map((name, index) => (
                <div className="billing-preview__row" key={name}>
                  <span>F-0012{index}</span><span>{name}</span><span>₡{[12480, 8930, 6780, 32400, 3210, 6980][index].toLocaleString("es-CR")}</span><em className={index === 2 ? "is-pending" : index % 2 ? "is-sent" : ""}>{index === 2 ? "Pendiente" : index % 2 ? "Enviada" : "Emitida"}</em>
                </div>
              ))}
            </div>
            <div className="billing-preview__invoice">
              <div className="billing-preview__tabs"><b>DTE</b><span>PDF</span></div>
              <header><b>ETICO</b><strong>FACTURA ELECTRÓNICA</strong></header>
              <p>Folio: F-00125<br />Fecha: 12 jun 2026</p>
              <strong>Cliente</strong><span>Comercial Delta S.A.</span>
              <div className="billing-preview__line"><b>Descripción</b><b>Total</b></div>
              <div className="billing-preview__line"><span>Consultoría tecnológica</span><span>₡9.500</span></div>
              <div className="billing-preview__line"><span>Soporte y mantenimiento</span><span>₡2.980</span></div>
              <footer><div className="billing-preview__code" /><div>Subtotal: ₡12.480<br />IVA: ₡1.622<br /><strong>Total: ₡14.102</strong></div></footer>
              <small>Este documento es una representación gráfica del comprobante.</small>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-preview__base" />
      <div className="admin-preview__floating billing-preview__floating" aria-hidden="true"><FileText size={24} /><div><small>Comprobantes emitidos</small><b>1,482</b><em>↑ +12%</em></div><div className="billing-preview__bars">{[25, 38, 52, 72, 100].map(height => <span key={height} style={{ height: `${height}%` }} />)}</div></div>
    </div>
  );
}