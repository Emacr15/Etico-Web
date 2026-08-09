interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlightedText?: string;
  description?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  highlightedText,
  description,
}: SectionHeaderProps) {
  return (
    <div className="section-heading">
      <div className="section-heading__left">
        <span className="section-kicker">{eyebrow}</span>

        <h2>
          {title}
          {highlightedText && (
            <span> {highlightedText}</span>
          )}
        </h2>
      </div>

      {description && (
        <p className="section-heading__description">
          {description}
        </p>
      )}
    </div>
  );
}
