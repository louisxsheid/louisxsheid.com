import React from 'react';
import "./styles/App.scss"
import NavBar from './components/navbar';
import WhoAmI from './components/AboutMePage/WhoAmI';
import Skills from './components/AboutMePage/Skills';
import Experience from './components/AboutMePage/Experience';

const App = (): JSX.Element => {
  return (
    <div className='wrapper'>
      <div style={{paddingRight: '5rem'}}>
        <NavBar />
      </div>
      <div className="whoami-skills-wrapper">
        <div style={{paddingRight: '5rem'}}>
          <WhoAmI />
        </div>
        <div style={{paddingRight: '5rem'}}>
          <Skills />
        </div>
      </div>
      <div style={{paddingRight: '5rem'}}>
        <Experience />
      </div>
    </div>
  );
}

export default App;