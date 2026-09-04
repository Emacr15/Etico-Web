import { Container } from "../../layout/Container";

import { DevelopmentContent } from "./DevelopmentContent";
import { DevelopmentFeatures } from "./DevelopmentFeatures";

export function DevelopmentSection() {
  return (
    <section
      id="development"
      className="development"
    >
      <Container>
        <div className="development__panel">
          <DevelopmentContent />
          <DevelopmentFeatures />
        </div>
      </Container>
    </section>
  );
}
