import { Container } from "../../layout/Container";

import { AboutContent } from "./AboutContent";
import { AboutProcess } from "./AboutProcess";
import { AboutValues } from "./AboutValues";

export function AboutSection() {
  return (
    <section
      id="about"
      className="about"
    >
      <Container>
        <div className="about__layout">
          <AboutContent />

          <div className="about__visual">
            <div className="about__visual-header">
              <span>
                CÓMO CONSTRUIMOS
              </span>

              <strong>
                Una forma diferente de crear tecnología.
              </strong>
            </div>

            <AboutValues />
            <AboutProcess />
          </div>
        </div>
      </Container>
    </section>
  );
}
