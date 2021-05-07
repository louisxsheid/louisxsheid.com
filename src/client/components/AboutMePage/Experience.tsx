import React from "react";

const Experience = (): JSX.Element => {
  return (
    <div className="experience-container">
      <div className="experience-title">~Experience~</div>
      <div>
        <div className="job-title">
          <a href="https://perlmanclinic.com/" target="_blank" rel="noreferrer">
            {"The Perlman Clinic"}
          </a>
          <div style={{ fontSize: "1rem" }}>
            <div>Full Stack Developer (Contract) | 2020/2021</div>
          </div>
        </div>
        <ul>
          <li>{`Harnessed React to create reusable and modular components for a frontend garnered towards both patients and doctors`}</li>
          <li>{`Developed with Express.js, handling both backend and frontend requests to a Node.js application server (later migrating to Go)`}</li>
          <li>{`Used Go to have a faster, strictly typed backend application server over a previously slower Node.js server`}</li>
          <li>{`Leveraged React-Native to build a platform agnostic mobile application with a user friendly experience and clean interface`}</li>
          <li>{`Utilized Github actions to make the teams development cycle agile and methodical while keeping the codebase organized and documented`}</li>
          <li>{`Had a noSQL database for organizing and displaying complex user medical data`}</li>
          <li>{`Incorporated visualization libraries to communicate a patients health tracking data to doctors through the use of clean and accurate charts`}</li>
          <li>{`Designed a user friendly UI/UX meant for patients of all ages and abilities`}</li>
        </ul>
      </div>
      <div>
        <div className="job-title">
          <a href="https://pacific-webservices.com/" target="_blank" rel="noreferrer">
            {"Pacific Web Services"}
          </a>
          <div style={{ fontSize: "1rem" }}>
            <div>Full Stack Developer | 2020</div>
          </div>
        </div>
        <ul>
          <li>{`Harnessed React to create reusable and modular components for a frontend garnered towards both patients and doctors`}</li>
          <li>{`Developed with Express.js, handling both backend and frontend requests to a Node.js application server`}</li>
          <li>{`Designed a user friendly UI/UX meant for a variety of restaurants and customers`}</li>
        </ul>
      </div>
      <div>
        <div className="job-title">
          <div style={{ display: "flex" }}>
            <a
              href="https://github.com/oslabs-beta/DockerLocal/"
              target="_blank"
              rel="noreferrer"
            >
              {"DockerLocal"}
            </a>
            <div style={{ fontSize: "0.75rem", paddingTop: "0.4rem" }}>
              {" (Open Source Product)"}
            </div>
          </div>
        </div>
        <div style={{ fontSize: "1rem" }}>
          <div>Software Developer | 2020</div>
        </div>
        <ul>
          <li>{`Used Node.js child processes with bash shell scripts automating the remote file transfer process through SSH, quickly generating local assets`}</li>
          <li>{`Implemented Express.js, handling both backend and frontend requests to a Node.js application server`}</li>
          <li>{`Leveraged Electron framework with functionality of dynamic local Docker Compose files, cloning/updating git repositories written locally to user`}</li>
          <li>{`Harnessed React to create reusable and modular components and dynamic rerendering from the virtual DOM`}</li>
          <li>{`A secure OAuth 2.0 authentication for user login while utilizing AES for encrypting/decrypting sensitive user data`}</li>
          <li>{`Product developed under tech accelerator OS Labs (opensourcelabs.io)`}</li>
        </ul>
      </div>
      <div>
        <div className="job-title">
          <a
            href="https://www.kmswireless.com/"
            target="_blank"
            rel="noreferrer"
          >
            {"K&M Systems"}
          </a>
        </div>
        <div style={{ fontSize: "1rem" }}>
          <div>Web Developer (Contract) | 2019</div>
        </div>
        <ul>
          <li>{`Used a content management system with a SQL database to create a user friendly and ad-effective website`}</li>
          <li>{`Utilized effective SEO techniques to increase website traffic and company sales`}</li>
          <li>{`Added custom styling and functionality using Javascript, HTML5/CSS3`}</li>
          <li>{`Implemented form protection to avoid scripted spam and other website security faults`}</li>
        </ul>
      </div>
      <div>
        <div className="job-title">NewDesignMedia</div>
        <div style={{ fontSize: "1rem" }}>
          <div>Web Developer (Contract) | 2018</div>
        </div>
        <ul>
          <li>{`Incorporated a content management system to create a user friendly and informative Real Estate listing website`}</li>
          <li>{`Utilized a third party map API to display listings from a user’s chosen location`}</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
