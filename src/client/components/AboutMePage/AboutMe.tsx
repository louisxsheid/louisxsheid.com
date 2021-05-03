import React from "react";
import FadeIn from "react-fade-in";
import "../../styles/App.scss";
import WhoAmI from "./WhoAmI";
import Skills from "./Skills";
import Experience from "./Experience";
import NavBar from "../navbar";

const AboutMe = (): JSX.Element => {
  return (
    <div>
      <FadeIn>
        <div className="wrapper">
          <div className="whoami-skills-wrapper">
            <div style={{ paddingRight: "5rem" }}>
              <WhoAmI />
            </div>
            <div style={{ paddingRight: "5rem" }}>
              <Skills />
            </div>
          </div>
          <div style={{ paddingRight: "5rem" }}>
            <Experience />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default AboutMe;
