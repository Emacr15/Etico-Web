import { ReceiptText } from "lucide-react";

export function InvoicePreview() {
  return (
    <div className="preview preview--invoice">
      <div className="preview__browser">
        <span />
        <span />
        <span />
      </div>

      <div className="preview-invoice__document">
        <div className="preview-invoice__heading">
          <div>
            <ReceiptText size={16} />

            <strong>
              Factura electrónica
            </strong>
          </div>

          <div className="preview-invoice__qr">
            QR
          </div>
        </div>

        <div className="preview-invoice__meta">
          <span>
            Cliente
          </span>

          <span>
            Fecha
          </span>
        </div>

        <div className="preview-invoice__table">
          <span />
          <span />
          <span />
        </div>

        <strong className="preview-invoice__total">
          ₡38.740
        </strong>
      </div>
    </div>
  );
}
