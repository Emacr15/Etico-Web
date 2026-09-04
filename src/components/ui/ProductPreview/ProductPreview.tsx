import { DevicePreview } from "./previews/DevicePreview";
import { ErpPreview } from "./previews/ErpPreview";
import { HotelPreview } from "./previews/HotelPreview";
import { InvoicePreview } from "./previews/InvoicePreview";
import { ManagementPreview } from "./previews/ManagementPreview";
import { PosPreview } from "./previews/PosPreview";
import { WorkshopPreview } from "./previews/WorkshopPreview";

interface ProductPreviewProps {
  projectId: string;
}

export function ProductPreview({
  projectId,
}: ProductPreviewProps) {
  switch (projectId) {
    case "pos":
      return <PosPreview />;

    case "hotel":
      return <HotelPreview />;

    case "workshop":
      return <WorkshopPreview />;

    case "device":
      return <DevicePreview />;

    case "invoice":
      return <InvoicePreview />;

    case "management":
      return <ManagementPreview />;

    case "erp":
      return <ErpPreview />;

    default:
      return null;
  }
}
