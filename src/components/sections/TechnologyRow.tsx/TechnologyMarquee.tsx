import { Container } from "../../layout/Container";
import { TechnologyRow } from "./TechnologyRow";

const webTechnologies = [
  {
    name: "React",
    shortName: "R",
  },
  {
    name: "TypeScript",
    shortName: "TS",
  },
  {
    name: "Vite",
    shortName: "V",
  },
  {
    name: "Node.js",
    shortName: "N",
  },
  {
    name: "Express",
    shortName: "EX",
  },
  {
    name: "MongoDB",
    shortName: "M",
  },
];

const platformTechnologies = [
  {
    name: "Kotlin",
    shortName: "K",
  },
  {
    name: "Android",
    shortName: "A",
  },
  {
    name: "Electron",
    shortName: "E",
  },
  {
    name: "REST API",
    shortName: "API",
  },
  {
    name: "Git",
    shortName: "G",
  },
  {
    name: "Windows",
    shortName: "W",
  },
];

export function TechnologyMarquee() {
  return (
    <section className="technology-marquee">
      <Container>
        <div className="technology-marquee__heading">
          <span>
            TECNOLOGÍA QUE UTILIZAMOS
          </span>

          <h2>
            Construido con herramientas modernas
            <strong> para productos que pueden crecer.</strong>
          </h2>
        </div>

        <div className="technology-marquee__rows">
          <TechnologyRow
            technologies={webTechnologies}
            direction="left"
          />

          <TechnologyRow
            technologies={platformTechnologies}
            direction="right"
          />
        </div>
      </Container>
    </section>
  );
}
