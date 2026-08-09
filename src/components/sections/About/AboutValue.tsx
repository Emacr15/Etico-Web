import type { aboutValues } from "../../../config/about";

type AboutValueData =
  (typeof aboutValues)[number];

interface AboutValueProps {
  value: AboutValueData;
}

export function AboutValue({
  value,
}: AboutValueProps) {
  const Icon = value.icon;

  return (
    <article className="about-value">
      <div
        className={`about-value__icon about-value__icon--${value.tone}`}
      >
        <Icon size={21} />
      </div>

      <div>
        <h3>
          {value.title}
        </h3>

        <p>
          {value.description}
        </p>
      </div>
    </article>
  );
}
