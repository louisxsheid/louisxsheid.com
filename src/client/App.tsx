import React from 'react';
import "./styles/App.scss"
import NavBar from './components/navbar';
import WhoAmI from './components/AboutMePage/WhoAmI';
import Skills from './components/AboutMePage/Skills';

const App = (): JSX.Element => {
  return (
    <div className='wrapper'>
      <NavBar />
      <WhoAmI />
      <Skills />
    </div>
  );
}

export default App;