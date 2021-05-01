import React, { useEffect, useState } from 'react';
import {
  Link,
  useLocation
} from "react-router-dom";

const NavBar = (): JSX.Element => {
  let location = useLocation();
  const [currentPath, setCurrentPath] = useState({
    aboutMe: "◉",
    projects: "○",
    til: "○"
  });

  useEffect(() => {
    switch(location.pathname) {
      case "/":
        setCurrentPath({ aboutMe: "◉", projects: "○", til: "○" });
        break;
      case "/projects":
        setCurrentPath({ aboutMe: "○", projects: "◉", til: "○" })
        break;
      case "/til":
        setCurrentPath({ aboutMe: "○", projects: "○", til: "◉" });
        break;
    }
  }, [location]);

  return (
    <nav className="nav">
        <div className="nav-item">
          <div style={{ paddingRight: '0.5rem'}}>{currentPath.aboutMe}</div> 
          <Link to='/' className='nav-placeholder'>About Me</Link>
        </div>
        <div className='nav-link-bar'>|</div>
        <div className="nav-item">
          <div style={{ paddingRight: '0.5rem'}}>{currentPath.projects}</div>
          <Link to='projects' className='nav-placeholder'>Projects</Link>
        </div>
        <div className='nav-link-bar'>|</div>
        <div className="nav-item">
          <div style={{ paddingRight: '0.5rem'}}>{currentPath.til}</div>
          <Link to='til' className='nav-placeholder'>TIL</Link>
        </div>
    </nav>
  );
}

export default NavBar;