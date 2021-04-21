import React from 'react';
import "./styles/App.scss"

const App = (): JSX.Element => {
  return (
    <div className="wrapper">
      <div>
        {"Hi, I'm Louis Sheid"}
      </div>
      <img src="file:///C:/dev/louisxsheid-website/public/assets/louis.PNG"/>
      <div>
        {"💻 Software Developer"}
      </div>
      <div>
        {"🌴 San Diego, California"}
      </div>
      <div>
        {"You can check out what I'm working on "}
        <a href='https://www.github.com/louisxsheid' target="_blank" rel="noreferrer">
          {"here"}
        </a>
      </div>
      <div>
        {"or if you'd like to "}
        <a href='https://www.linkedin.com/in/louisxsheid/' target="_blank" rel="noreferrer">
          {"connect / get in touch"}
        </a>
      </div>
    </div>
  );
}

export default App;