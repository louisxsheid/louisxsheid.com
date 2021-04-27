import React from 'react';
const description = "I am a software developer experienced in creating full stack Javascript / Typescript applications. I value user accessibility and experience on the frontend and clear cut functionality and organization on the backend. Among that, I believe that creating useful and engaging software for both developers and users alike is the best part about computer programming. If you’ve read this far, you can tell that I’m just writing a lot of bullshit to fill in this blank space. I also like to code in MIT’s Scratch software for fun because I’m an autistic masochist."

const WhoAmI = (): JSX.Element => {
  return (
    <div className="whoami-wrapper">
      <div>
        <div>
          {"Hi, I'm Louis Sheid"}
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
        <div style={{paddingTop: '0.5rem'}}>
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
  )
}

export default WhoAmI;