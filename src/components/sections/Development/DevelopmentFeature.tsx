import type { developmentFeatures } from "../../../config/development";

type DevelopmentFeatureData =
  (typeof developmentFeatures)[number];

interface DevelopmentFeatureProps {
  feature: DevelopmentFeatureData;
}

export function DevelopmentFeature({
  feature,
}: DevelopmentFeatureProps) {
  const Icon = feature.icon;

  return (
    <article className="development-feature">
      <div className="development-feature__icon">
        <Icon size={23} />
      </div>

      <h3>
        {feature.title}
      </h3>

      <p>
        {feature.description}
      </p>
    </article>
  );
}
