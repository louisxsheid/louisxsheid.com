import React from "react";
import { me, githubIcon, linkedIn } from "./iconIndex";

const description =
  "I am a software developer experienced in creating full stack javascript / typescript applications. Currently learning anything I can.";

const WhoAmI = (): JSX.Element => {
  return (
    <div className="whoami-container">
      <div className="whoami-title">Louis Xavier Sheid III</div>
      {/* <img className="whoami-pic" src={me} /> */}
      <div style={{fontSize: "10rem"}}>?!</div>
      <div style={{paddingTop: '0.5rem'}}/>
      <div className="icon-container">
        <div>💻</div> <div>Software Developer</div>
      </div>
      <div className="icon-container">
        <div>🌴</div> <div>San Diego, California</div>
      </div>
      <div style={{ padding: "0.5rem" }} />
      <div style={{ width: "15rem" }}>{description}</div>
      <div style={{ paddingTop: "1rem" }}>@louisxsheid</div>
      <div className="icon-container">
        <div>
          <a
            href="https://www.github.com/louisxsheid"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon" src={githubIcon} />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/louisxsheid/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon" src={linkedIn} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
