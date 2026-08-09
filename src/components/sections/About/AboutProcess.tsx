const processSteps = [
  "Idea",
  "Diseño",
  "Desarrollo",
  "Evolución",
];

export function AboutProcess() {
  return (
    <div className="about__ecosystem">
      <div className="about__ecosystem-line">
        {processSteps.map((step) => (
          <span
            key={step}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="about__ecosystem-items">
        {processSteps.map((step) => (
          <span key={step}>
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}
