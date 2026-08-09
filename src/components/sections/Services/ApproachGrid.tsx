import { approachItems } from "../../../config/approach";

import { ApproachItem } from "./ApproachItem";

export function ApproachGrid() {
  return (
    <div className="services__approach">
      {approachItems.map((item) => (
        <ApproachItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
