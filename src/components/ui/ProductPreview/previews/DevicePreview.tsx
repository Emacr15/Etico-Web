import {
  Monitor,
  Printer,
  Smartphone,
} from "lucide-react";

export function DevicePreview() {
  return (
    <div className="preview preview--device">
      <div className="preview__browser">
        <span />
        <span />
        <span />
      </div>

      <strong className="preview-device__title">
        Dispositivos conectados
      </strong>

      <div className="preview-device__list">
        <div>
          <Printer size={13} />

          <span>
            Impresora TM-T20
          </span>

          <small>
            Conectada
          </small>
        </div>

        <div>
          <Smartphone size={13} />

          <span>
            Terminal Android
          </span>

          <small>
            Conectado
          </small>
        </div>

        <div>
          <Monitor size={13} />

          <span>
            POS Caja 1
          </span>

          <small>
            Conectado
          </small>
        </div>
      </div>
    </div>
  );
}
