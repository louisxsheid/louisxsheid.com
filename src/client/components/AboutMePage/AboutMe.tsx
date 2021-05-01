import React from 'react';
import FadeIn from 'react-fade-in';
import "../../styles/App.scss";
import WhoAmI from './WhoAmI';
import Skills from './Skills';
import Experience from './Experience';
import NavBar from '../navbar';

const AboutMe = (): JSX.Element => {
  return (
      <div>
          <div className='wrapper'>
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
      </div>
  );
}

export default AboutMe;