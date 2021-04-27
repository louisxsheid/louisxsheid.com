import React from 'react';
const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nobis, incidunt consequuntur in necessitatibus, commodi cumque harum ut quasi odio earum quis praesentium, optio quas dolor ipsa! At iusto adipisci vero reprehenderit doloremque mollitia, blanditiis iste repellat saepe, officiis non cumque perferendis? Non maxime quidem ratione cum ducimus a, amet atque eos!"
import FadeIn from 'react-fade-in';

const WhoAmI = (): JSX.Element => {
  return (
    <FadeIn>
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
    </FadeIn>
  )
}

export default WhoAmI;