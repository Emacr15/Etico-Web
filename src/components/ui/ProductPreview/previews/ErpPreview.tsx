import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  ReceiptText,
  ShoppingCart,
  Users,
} from "lucide-react";

const metrics = [
  { label: "Ventas del mes", value: "₡8.4M", trend: "+12.8%" },
  { label: "Órdenes", value: "1,248", trend: "+8.2%" },
  { label: "Inventario", value: "3,892", trend: "Actualizado" },
];

export function ErpPreview() {
  return (
    <div className="preview preview--erp">
      <aside className="preview-erp__sidebar">
        <strong>E</strong>

        <nav aria-label="Módulos de Etico ERP">
          <LayoutDashboard />
          <ShoppingCart />
          <Boxes />
          <ReceiptText />
          <Users />
        </nav>
      </aside>

      <div className="preview-erp__main">
        <header className="preview-erp__header">
          <div>
            <small>Vista general</small>
            <h3>Panel empresarial</h3>
          </div>

          <span>Septiembre 2026</span>
        </header>

        <div className="preview-erp__metrics">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <small>{metric.label}</small>
              <strong>{metric.value}</strong>
              <span>{metric.trend}</span>
            </div>
          ))}
        </div>

        <section className="preview-erp__chart">
          <div>
            <span>
              <BarChart3 />
              Rendimiento general
            </span>
            <small>Últimos 6 meses</small>
          </div>

          <svg viewBox="0 0 420 150" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="erp-chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 125 C48 118 58 88 104 95 S171 112 210 70 S284 91 325 46 S376 59 420 24 L420 150 L0 150 Z"
              fill="url(#erp-chart-fill)"
            />
            <path
              d="M0 125 C48 118 58 88 104 95 S171 112 210 70 S284 91 325 46 S376 59 420 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </section>
      </div>
    </div>
  );
}
