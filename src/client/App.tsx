import React from 'react';
import "./styles/App.scss"

const App = (): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="card">
        <div>
          {"Hi, I'm Louis Sheid"}
        </div>
        <img src={require("../../public/assets/louis.PNG")}/>
        <div>
          {"💻 Software Developer"}
        </div>
        <div>
          {"🌴 San Diego, California"}
        </div>
        <div style={{padding: '0.5rem'}}/>
        <div style={{fontSize: '1.25rem'}}>~</div>
        <div className="icon-wrapper">
          <div className='social-wrapper'>
            <a href='https://www.github.com/louisxsheid' target="_blank" rel="noreferrer">
              <img className="icon" src={require("../../public/assets/github.png")} />
              Github @louisxsheid
            </a>
          </div>
          <div className='social-wrapper'>
            <a href='https://www.linkedin.com/in/louisxsheid/' target="_blank" rel="noreferrer">
              <img className="icon" src={require("../../public/assets/linkedin.png")} />
              LinkedIn @louisxsheid
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;