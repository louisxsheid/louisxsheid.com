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
            <div>
              <WhoAmI />
            </div>
            <div>
              <Skills />
            </div>
          </div>
          <div className="section-wrapper">
            <Experience />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default AboutMe;
