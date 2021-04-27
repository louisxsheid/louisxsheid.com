import React from 'react';
const description = "I am a software developer experienced in creating full stack javascript / typescript applications. Currently learning anything I can."
import FadeIn from 'react-fade-in';

const WhoAmI = (): JSX.Element => {
  return (
    <FadeIn>
    <div className="whoami-wrapper">
      <div>
        <div className="title">
          {"Louis Xavier Sheid III"}
        </div>
        <img src={require("../../../../public/assets/louis.PNG")}/>
        <div>
          {"💻 Software Developer"}
        </div>
        <div>
          {"🌴 San Diego, California"}
        </div>
        <div style={{padding: '0.5rem'}}/>
        <div style={{width: '15rem'}}>
          {description}
        </div>
        <div style={{paddingTop: '1rem'}}>
          @louisxsheid
        </div>
        <div className="icon-wrapper">
          <div className='social-wrapper'>
            <a href='https://www.github.com/louisxsheid' target="_blank" rel="noreferrer">
              <img className="icon" src={require("../../../../public/assets/github.png")} />
            </a>
          </div>
          <div className='social-wrapper'>
            <a href='https://www.linkedin.com/in/louisxsheid/' target="_blank" rel="noreferrer">
              <img className="icon" src={require("../../../../public/assets/linkedin.png")} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </FadeIn>
  )
}

export default WhoAmI;