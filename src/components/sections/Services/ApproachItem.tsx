import type { approachItems } from "../../../config/approach";

type ApproachData =
  (typeof approachItems)[number];

interface ApproachItemProps {
  item: ApproachData;
}

export function ApproachItem({
  item,
}: ApproachItemProps) {
  const Icon = item.icon;

  return (
    <article className="approach-item">
      <div
        className={`approach-item__icon approach-item__icon--${item.tone}`}
      >
        <Icon size={20} />
      </div>

      <h3>
        {item.title}
      </h3>

      <p>
        {item.description}
      </p>
    </article>
  );
}
