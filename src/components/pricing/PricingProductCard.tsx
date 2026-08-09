import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import type { PricingProduct } from "../../config/pricing";

interface PricingProductCardProps {
  product: PricingProduct;
}

export function PricingProductCard({
  product,
}: PricingProductCardProps) {
  return (
    <article
      className={`pricing-card ${
        product.featured
          ? "pricing-card--featured"
          : ""
      }`}
    >
      {product.featured && (
        <span className="pricing-card__badge">
          RECOMENDADO
        </span>
      )}

      <span className="pricing-card__eyebrow">
        {product.eyebrow}
      </span>

      <h3>
        {product.name}
      </h3>

      <p className="pricing-card__description">
        {product.description}
      </p>

      <div className="pricing-card__price">
        {product.pricePrefix && (
          <span>
            {product.pricePrefix}
          </span>
        )}

        {product.price ? (
          <strong>
            {product.currency}
            {product.price.toLocaleString("es-CR")}
          </strong>
        ) : (
          <strong>
            Precio por definir
          </strong>
        )}

        {product.priceSuffix && (
          <small>
            {product.priceSuffix}
          </small>
        )}
      </div>

      <div className="pricing-card__features">
        {product.features.map((feature) => (
          <div key={feature}>
            <CheckCircle2 size={14} />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="pricing-card__actions">
        {product.href && (
          <a
            href={product.href}
            className="pricing-card__secondary"
          >
            Conocer producto
            <ArrowRight size={14} />
          </a>
        )}

        <a
          href="/#contact"
          className="pricing-card__primary"
        >
          Consultar
          <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}
