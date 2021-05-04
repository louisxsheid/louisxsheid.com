import React from "react";
import Skill from "../AboutMePage/Skill";

const Project = (props: any) => {
  const { title, subTitle, logo, description, stack, contributors, repoLink } = props;

  return (
    <div className="project-wrapper">
      <div className="project-section">
        <div style={{ fontSize: "1.15rem" }}>{title}</div>
        <div style={{ fontSize: "0.8rem", height: "1rem" }}>{subTitle}</div>
        <div className="project-img-bg">
          <img src={logo} className="project-img" />
        </div>
      </div>
      <div className="project-section">
        <div>Description</div>
        <div className="project-description">{description}</div>
        <a href={repoLink} target="_blank">
          <img
            style={{width: "1.5rem"}}
            src={require("../../../../public/assets/github.png")}
          />
        </a>
      </div>
      <div className="project-section">
        <div style={{ paddingBottom: "0.5rem" }}>Tech Stack</div>
        <div>
          {stack.map((item: any) => {
            return <Skill key={item.name} name={item.name} icon={item.logo} />;
          })}
        </div>
      </div>
      <div className="project-section">
        <div>Main Contributors</div>
        <div className="contributors">
          <ul>
            {contributors.map((person: any) => {
              return <li key={person}>{person}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
