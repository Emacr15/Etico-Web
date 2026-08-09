export type PricingBillingType =
  | "monthly"
  | "yearly"
  | "one-time"
  | "per-device"
  | "usage"
  | "custom";

export type PricingCategory =
  | "pos"
  | "billing"
  | "devices"
  | "business";

export interface PricingProduct {
  id: string;
  name: string;
  eyebrow: string;
  description: string;

  category: PricingCategory;
  billingType: PricingBillingType;

  price?: number;
  currency?: string;
  pricePrefix?: string;
  priceSuffix?: string;

  features: string[];

  featured?: boolean;
  href?: string;
}
