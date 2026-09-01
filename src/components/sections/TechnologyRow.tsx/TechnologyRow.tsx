interface Technology {
  name: string;
  shortName: string;
}

interface TechnologyRowProps {
  technologies: Technology[];
  direction?: "left" | "right";
}

export function TechnologyRow({
  technologies,
  direction = "left",
}: TechnologyRowProps) {
  const duplicatedTechnologies = [
    ...technologies,
    ...technologies,
  ];

  return (
    <div className="technology-marquee__viewport">
      <div className="technology-marquee__fade technology-marquee__fade--left" />
      <div className="technology-marquee__fade technology-marquee__fade--right" />

      <div
        className={`technology-marquee__track technology-marquee__track--${direction}`}
      >
        {duplicatedTechnologies.map(
          (technology, index) => (
            <div
              key={`${technology.name}-${index}`}
              className="technology-marquee__item"
            >
              <span className="technology-marquee__mark">
                {technology.shortName}
              </span>

              <strong>
                {technology.name}
              </strong>
            </div>
          ),
        )}
      </div>
    </div>
  );
}