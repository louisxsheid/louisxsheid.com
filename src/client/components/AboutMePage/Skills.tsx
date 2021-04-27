import React from 'react';
import FadeIn from 'react-fade-in';

const Skills = (): JSX.Element => {
  return (
    <FadeIn>
    <div className="skills-wrapper">
      <div className='title'>My Skills</div>
      <div className='skill-divider'>
        <div>
          <div className='sub-title'>Languages</div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/javascript_official.svg")} />
            <div>Javascript</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/typesript.svg")} />
            <div>Typescript</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/python.svg")} />
            <div>Python</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/cpp.svg")} />
            <div>C/C++</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/go.svg")} />
            <div>Go</div>
          </div>
        </div>
        <div>
          <div className='sub-title'>Frontend</div>  
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/react.svg")} />
            <div>React</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/redux.svg")} />
            <div>Redux</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/html.svg")} />
            <div>HTML</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/css.svg")} />
            <div>CSS</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/sass.svg")} />
            <div>SASS</div>
          </div>
        </div>
      </div>
      <div className='skill-divider'>
        <div className='sub-title'>
          <div>Backend</div>  
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/node.svg")} />
            <div>Node</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/rest-api.png")} />
            <div>REST</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/graphql.svg")} />
            <div>GraphQL</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/aws.svg")} />
            <div>AWS</div>
          </div>
        </div>
        <div>
          <div className='sub-title'>Database</div>  
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/sql.svg")} />
            <div>{'SQL (Postgres)'}</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/mongo.svg")} />
            <div>{'NoSQL (MongoDB/Mongoose)'}</div>
          </div>
        </div>
        <div>
          <div className='sub-title'>DevOps</div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/docker.svg")} />
            <div>Docker</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/kubernetes.svg")} />
            <div>Kubernetes</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/github.png")} />
            <div>Github Actions</div>
          </div>
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/travis.svg")} />
            <div>Travis CI</div>
          </div>
        </div>
        <div>
          <div>Testing</div>  
          <div className="icon-wrapper">
            <img className="skills-icon" src={require("../../../../public/assets/icons/jest.svg")} />
            <div>Jest</div>
          </div>
        </div>
        {/* <div className="icon-wrapper">
          <img className="skills-icon" src={require("../../../../public/assets/icons/mongo.svg")} />
          <div>Puppeteer</div>
        </div>
        <div className="icon-wrapper">
          <img className="skills-icon" src={require("../../../../public/assets/icons/mongo.svg")} />
          <div>Mocha</div>
        </div>
        <div className="icon-wrapper">
          <img className="skills-icon" src={require("../../../../public/assets/icons/mongo.svg")} />
          <div>Chai</div>
        </div>
        <div className="icon-wrapper">
          <img className="skills-icon" src={require("../../../../public/assets/icons/mongo.svg")} />
          <div>Enzyme</div>
        </div> */}
      </div>
    </div>
    </FadeIn>
  )
};

export default Skills;