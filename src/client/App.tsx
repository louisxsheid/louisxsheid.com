import React from 'react';
import FadeIn from 'react-fade-in';
import "./styles/App.scss"
import AboutMe from './components/AboutMePage/AboutMe';
import Projects from './components/ProjectsPage/Projects';
import NavBar from './components/navbar';
import TIL from './components/TodayILearnedPage/TIL';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = (): JSX.Element => {
  return (
      <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={AboutMe} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/til" exact component={TIL} />
          </Switch>
      </Router>
  );
}

export default App;