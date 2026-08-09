import { aboutValues } from "../../../config/about";

import { AboutValue } from "./AboutValue";

export function AboutValues() {
  return (
    <div className="about__values">
      {aboutValues.map((value) => (
        <AboutValue
          key={value.id}
          value={value}
        />
      ))}
    </div>
  );
}
