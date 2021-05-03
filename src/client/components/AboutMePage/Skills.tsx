import React from "react";
import Skill from "./Skill";
import {
  javascriptIcon,
  typescriptIcon,
  pythonIcon,
  cppIcon,
  reactIcon,
  reduxIcon,
  htmlIcon,
  cssIcon,
  sassIcon,
  nodeIcon,
  restIcon,
  graphqlIcon,
  awsIcon,
  sqlIcon,
  mongoIcon,
  dockerIcon,
  kubernetesIcon,
  githubIcon,
  travisIcon,
  jestIcon,
} from "./iconIndex";

const Skills = (): JSX.Element => {
  return (
    <div>
      <div
        className="title"
        style={{ paddingTop: "2.5rem", paddingLeft: "2.5rem" }}
      >
        My Skills
      </div>
      <div className="skills-wrapper">
        <div className="skill">
          <div className="sub-title">Languages</div>
          <Skill name="Javascript" icon={javascriptIcon} />
          <Skill name="Typescript" icon={typescriptIcon} />
          <Skill name="Python" icon={pythonIcon} />
          <Skill name="C/C++" icon={cppIcon} />
        </div>
        <div className="skill">
          <div className="sub-title">Frontend</div>
          <Skill name="React" icon={reactIcon} />
          <Skill name="Redux" icon={reduxIcon} />
          <Skill name="HTML" icon={htmlIcon} />
          <Skill name="CSS" icon={cssIcon} />
          <Skill name="SASS" icon={sassIcon} />
        </div>
        <div className="skill">
          <div className="sub-title">Backend</div>
          <Skill name="Node" icon={nodeIcon} />
          <Skill name="REST" icon={restIcon} />
          <Skill name="GraphQL" icon={graphqlIcon} />
          <Skill name="AWS" icon={awsIcon} />
        </div>
        <div className="skill">
          <div className="sub-title">Database</div>
          <Skill name="SQL (Postgres)" icon={sqlIcon} />
          <Skill name="NoSQL (MongoDB/Mongoose)" icon={mongoIcon} />
        </div>
        <div className="skill">
          <div className="sub-title">DevOps</div>
          <Skill name="Docker" icon={dockerIcon} />
          <Skill name="Kubernetes" icon={kubernetesIcon} />
          <Skill name="Github Actions" icon={githubIcon} />
          <Skill name="Travis CI" icon={travisIcon} />
        </div>
        <div className="skill">
          <div>Testing</div>
          <Skill name="Jest" icon={jestIcon} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
