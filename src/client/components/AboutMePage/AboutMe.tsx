import FadeIn from "react-fade-in";
import WhoAmI from "./WhoAmI";
import Skills from "./Skills";
import Experience from "./Experience";

const AboutMe = (): JSX.Element => {
  return (
    <div>
      <FadeIn>
        <div className="about-me-container">
          <div className="whoami-skills">
            <div>
              <WhoAmI />
            </div>
            <div>
              <Skills />
            </div>
          </div>
          <div className="section">
            <Experience />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default AboutMe;
