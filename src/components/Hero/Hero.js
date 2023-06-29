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
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/u/0/uc?id=1wODyTjKQ6h3gxafzJxjYGJ4VIwjZul-G&export=download")
        }
      >
        Download CV
      </Button>
    </LeftSection>
  </Section>
);
export default Hero;
