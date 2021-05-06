import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = (): JSX.Element => {
  let location = useLocation();
  const [currentPath, setCurrentPath] = useState({
    aboutMe: "◉",
    projects: "○",
    til: "○",
  });

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentPath({ aboutMe: "◉", projects: "○", til: "○" });
        break;
      case "/projects":
        setCurrentPath({ aboutMe: "○", projects: "◉", til: "○" });
        break;
      case "/til":
        setCurrentPath({ aboutMe: "○", projects: "○", til: "◉" });
        break;
    }
  }, [location]);

  return (
    <nav className="nav-container">
      <div className="nav-item">
        <div className="nav-dot">{currentPath.aboutMe}</div>
        <Link to="/" className="nav-title">
          About Me
        </Link>
      </div>
      <div className="nav-item">
        <div className="nav-dot">{currentPath.projects}</div>
        <Link to="projects" className="nav-title">
          Projects
        </Link>
      </div>
      {/* <div className="nav-item">
        <div className="nav-dot">{currentPath.til}</div>
        <Link to="til" className="nav-title">
          TIL
        </Link>
      </div> */}
    </nav>
  );
};

export default NavBar;
