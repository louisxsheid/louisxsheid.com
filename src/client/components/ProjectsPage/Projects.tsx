import React from "react";
import Project from "./Project";
import { dlData } from "./dlData";
import { gngData } from "./gngData";
import FadeIn from "react-fade-in";

const Projects = (): JSX.Element => {
  return (
    <FadeIn>
      <div className="projects-container">
        <div className="projects-title">Projects</div>
        <div className="projects">
          <Project {...dlData} />
        </div>
        <div className="projects">
          <Project {...gngData} />
        </div>
        <div style={{ paddingTop: "4rem" }}>
          More projects to be documented...
        </div>
      </div>
    </FadeIn>
  );
};

export default Projects;
