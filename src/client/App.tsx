import React from 'react';
import FadeIn from 'react-fade-in';
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
            <FadeIn>
              <WhoAmI />
            </FadeIn>
          </div>
          <div style={{paddingRight: '5rem'}}>
            <FadeIn>
              <Skills />
            </FadeIn>
          </div>
        </div>
        <div style={{paddingRight: '5rem'}}>
          <FadeIn>
            <Experience />
          </FadeIn>
        </div>
        
      </div>
  );
}

export default App;