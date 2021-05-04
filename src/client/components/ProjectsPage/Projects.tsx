import Project from "./Project";
import { dlData } from "./dlData";
import FadeIn from "react-fade-in";

const Projects = (): JSX.Element => {
  return (
    <FadeIn>
      <div className="projects-container">
        <div className="projects-title">My Projects</div>
        <div>
          <Project {...dlData} />
        </div>
        <div style={{paddingTop: "4rem"}}>More projects to be documented...</div>
      </div>
    </FadeIn>
  );
};

export default Projects;
