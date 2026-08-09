import { developmentFeatures } from "../../../config/development";

import { DevelopmentFeature } from "./DevelopmentFeature";

export function DevelopmentFeatures() {
  return (
    <div className="development__features">
      {developmentFeatures.map((feature) => (
        <DevelopmentFeature
          key={feature.id}
          feature={feature}
        />
      ))}
    </div>
  );
}
