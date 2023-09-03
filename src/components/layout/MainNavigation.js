import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useEffect } from "react";

function MainNavigation() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(120deg, #020091, #A2004C, #FF014A)";
    document.body.style.backgroundSize = "100% 1100%";
    document.body.style.animation = "gradientAnimation 30s ease infinite";
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        &#123;<div className={classes.dns}>dns</div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contacts">contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
