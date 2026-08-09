import { ProductPreview } from "../../ui/ProductPreview/ProductPreview";
import { EticoPosHeroPreview } from "./EticoPosHeroPreview";

interface ProjectHeroPreviewProps {
  projectId: string;
}

export function ProjectHeroPreview({
  projectId,
}: ProjectHeroPreviewProps) {
  if (projectId === "pos") {
    return <EticoPosHeroPreview />;
  }

  return (
    <ProductPreview
      projectId={projectId}
    />
  );
}
