import Skill from "../AboutMePage/Skill";
import githubLogo from "../../../../public/assets/github.png";

interface ProjectDataProps {
  title: string;
  subTitle: string;
  logo: any;
  description: string;
  stack: Array<{
    name: string;
    logo: any;
  }>
  contributors: Array<string>;
  repoLink: string;
}

const Project = (props: ProjectDataProps): JSX.Element => {
  const {
    title,
    subTitle,
    logo,
    description,
    stack,
    contributors,
    repoLink,
  } = props;

  return (
    <div className="project-container">
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
          <img style={{ width: "1.5rem" }} src={githubLogo} />
        </a>
      </div>
      <div className="project-section">
        <div style={{ paddingBottom: "1rem" }}>Tech Stack</div>
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
