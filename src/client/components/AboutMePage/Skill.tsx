import React from "react";
interface SkillProps {
  name: String;
  icon: any;
}

const Skill = (props: SkillProps): JSX.Element => {
  const { name, icon } = props;
  return (
    <div className="skill-icon-container">
      <img className="skill-icon" src={icon} />
      <div className="skill-title">{name}</div>
    </div>
  );
};
export default Skill;
