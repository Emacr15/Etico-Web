import { Printer } from "lucide-react";

export function ManagementPreview() {
  return (
    <div className="preview preview--management">
      <div className="preview__browser">
        <span />
        <span />
        <span />
      </div>

      <div className="preview-management__stats">
        <div>
          <span>
            Impresoras
          </span>

          <strong>
            24
          </strong>
        </div>

        <div>
          <span>
            Activas
          </span>

          <strong>
            18
          </strong>
        </div>

        <div>
          <span>
            Alertas
          </span>

          <strong>
            2
          </strong>
        </div>
      </div>

      <div className="preview-management__list">
        <div>
          <Printer size={12} />

          <span>
            Impresora Caja 1
          </span>

          <small className="online">
            En línea
          </small>
        </div>

        <div>
          <Printer size={12} />

          <span>
            Impresora Recepción
          </span>

          <small className="online">
            En línea
          </small>
        </div>

        <div>
          <Printer size={12} />

          <span>
            Impresora Caja 3
          </span>

          <small>
            Sin conexión
          </small>
        </div>
      </div>
    </div>
  );
}
