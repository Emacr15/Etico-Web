import type {
  PricingCategory,
  PricingProduct,
} from "../../config/pricing";

import { Container } from "../layout/Container";

import { PricingPlanCard } from "./PricingPlanCard";

interface PricingSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  category: PricingCategory;
  products: PricingProduct[];
}

export function PricingSection({
  eyebrow,
  title,
  description,
  category,
  products,
}: PricingSectionProps) {
  const filtered = products.filter(
    (product) => product.category === category,
  );

  return (
    <section className="pricing-group">
      <Container>
        <div className="pricing-group__heading">
          <span>{eyebrow}</span>

          <h2>{title}</h2>

          <p>{description}</p>
        </div>

        <div
          className={`pricing-group__grid pricing-group__grid--${filtered.length}`}
        >
          {filtered.map((product, index) => (
            <PricingPlanCard
              key={product.id}
              product={product}
              animationDelay={index * 0.08}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
