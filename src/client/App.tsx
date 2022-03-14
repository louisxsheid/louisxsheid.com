import React from "react";
import "./styles/App.scss";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./components/AboutMePage/AboutMe";
// import Projects from "./components/ProjectsPage/Projects";
// import TIL from "./components/TodayILearnedPage/TIL";
// import NavBar from "./components/navbar";

const App = (): JSX.Element => {
  return (<AboutMe />);
  };
  // <Router>
  //   <NavBar />
  //   <Switch>
  //     <Route path="/" exact component={AboutMe} />
  //     <Route path="/projects" exact component={Projects} />
  //     <Route path="/til" exact component={TIL} />
  //   </Switch>
  // </Router>

export default App;
