import {
  Smartphone,
  Wrench,
} from "lucide-react";

export function WorkshopPreview() {
  return (
    <div className="preview preview--workshop">
      <div className="preview__browser">
        <span />
        <span />
        <span />
      </div>

      <div className="preview-workshop__header">
        <div>
          <Wrench size={13} />
          Orden #00124
        </div>

        <span>
          En reparación
        </span>
      </div>

      <div className="preview-workshop__content">
        <div className="preview-workshop__data">
          <span />
          <span />
          <span />
        </div>

        <div className="preview-workshop__device">
          <Smartphone size={42} />
        </div>
      </div>

      <div className="preview-workshop__steps">
        <span className="done" />
        <span className="done" />
        <span className="active" />
        <span />
      </div>
    </div>
  );
}
