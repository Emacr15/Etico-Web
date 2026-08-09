import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import type { services } from "../../config/services";

type Service =
  (typeof services)[number];

interface ServiceItemProps {
  service: Service;
}

export function ServiceItem({
  service,
}: ServiceItemProps) {
  const Icon = service.icon;

  return (
    <article className="service-item">
      <div className="service-item__number">
        {service.number}
      </div>

      <div className="service-item__icon">
        <Icon size={25} />
      </div>

      <div className="service-item__content">
        <h3>
          {service.title}
        </h3>

        <p>
          {service.description}
        </p>

        <div className="service-item__features">
          {service.items.map((item) => (
            <span key={item}>
              <Check size={14} />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="service-item__arrow">
        <ArrowUpRight size={19} />
      </div>
    </article>
  );
}