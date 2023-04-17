import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Cokde Putra Profile
      </SectionTitle>
      <SectionText>
        JavaScript is a programming language that is primarily used for creating
        interactive web pages and web applications.
      </SectionText>
      <Button onClick={() => (window.location = "#")}>Learn More</Button>
    </LeftSection>
  </Section>
);
export default Hero;
