import React from "react";

const Skill = (props: any): JSX.Element => {
  const { name, icon } = props;
  return (
    <div className="icon-wrapper">
      <img className="skills-icon" src={icon} />
      <div>{name}</div>
    </div>
  );
};

export default Skill;
