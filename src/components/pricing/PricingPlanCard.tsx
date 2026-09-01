import {
  ArrowRight,
  Check,
} from "lucide-react";

import type {
  PricingProduct,
} from "../../config/pricing";

interface PricingPlanCardProps {
  product: PricingProduct;
  animationDelay?: number;
}

export function PricingPlanCard({
  product,
  animationDelay = 0,
}: PricingPlanCardProps) {
  return (
    <article
      className="etico-plan-card"
      data-etico-animate
      data-direction="up"
      data-offset="45"
      data-delay={animationDelay}
    >
      <span
        className="etico-plan-card__animated-border"
        aria-hidden="true"
      />

      <div className="etico-plan-card__inner">
        <div className="etico-plan-card__header">
          <span className="etico-plan-card__eyebrow">
            {product.eyebrow}
          </span>

          <h3>{product.name}</h3>

          <p>{product.description}</p>
        </div>

        <div className="etico-plan-card__prices">
          <div className="etico-plan-card__price">
            <span className="etico-plan-card__price-label">
              {product.pricePrefix || "Precio"}
            </span>

            <div>
              {product.price !== undefined ? (
                <>
                  <strong>
                    {product.currency}
                    {product.price.toLocaleString("es-CR")}
                  </strong>

                  {product.priceSuffix && (
                    <small>{product.priceSuffix}</small>
                  )}
                </>
              ) : (
                <strong className="etico-plan-card__price-pending">
                  Precio por definir
                </strong>
              )}
            </div>
          </div>
        </div>

        <a href="/contacto" className="etico-plan-card__button">
          Consultar
          <ArrowRight size={15} />
        </a>

        <div className="etico-plan-card__divider" />

        <ul className="etico-plan-card__features">
          {product.features.map((feature, index) => (
            <li
              key={feature}
              className={index < 3 ? "is-highlighted" : ""}
            >
              <span className="etico-plan-card__check">
                <Check size={12} />
              </span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {product.href && (
          <a
            href={product.href}
            className="etico-plan-card__product-link"
          >
            Conocer producto
            <ArrowRight size={13} />
          </a>
        )}
      </div>
    </article>
  );
}
