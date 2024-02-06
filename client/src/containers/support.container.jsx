import React from "react";
import { SecHeading } from "../components/heading/heading.component";
import { Section } from "./container.styled";

const SupportContainer = () => {
  return (
    <Section>
      <div>
        <SecHeading>Contact Support</SecHeading>
      </div>
      <div>
        <SecHeading>FAQs</SecHeading>
        <div>
          <details>
            <summary>How to change my profile picture</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              inventore obcaecati necessitatibus quibusdam qui repellendus
              provident odio nostrum cumque quam. Totam nostrum aliquam in,
              iusto magnam praesentium ab esse possimus!
            </p>
          </details>
          <details>
            <summary>How to change my name</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              inventore obcaecati necessitatibus quibusdam qui repellendus
              provident odio nostrum cumque quam. Totam nostrum aliquam in,
              iusto magnam praesentium ab esse possimus!
            </p>
          </details>
          <details>
            <summary>How to update patient record</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              inventore obcaecati necessitatibus quibusdam qui repellendus
              provident odio nostrum cumque quam. Totam nostrum aliquam in,
              iusto magnam praesentium ab esse possimus!
            </p>
          </details>
        </div>
      </div>
    </Section>
  );
};

export default SupportContainer;
