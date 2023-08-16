import { useEffect } from "react";
import classes from "./Projects.module.css";

function ProjectsPage() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(120deg, #020091, #A2004C, #FF014A)";
    document.body.style.backgroundSize = "100% 1100%";
    document.body.style.animation = "gradientAnimation 30s ease infinite";
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.mainTitle}>
        <h1>&#123;</h1>
        <h1>
          projects and
          <br />
          events
        </h1>
        <h2>our github</h2>
      </div>
      <br></br>
      <div className={classes.project1}>
        <h2>make your own programming language</h2>
        <br></br>
        <h3>
          cheese cheetos chez cheezwhiz ches chezcheese cheetos chez cheezwhiz
          ches chezcheese cheetos chez cheezwhiz ches chezcheese cheetos chez
          cheezwhiz ches chezcheese cheetos chez cheezwhiz ches chez
        </h3>
      </div>
      <div className={classes.project2}>
        <h2>CSSS Collab</h2>
        <h3>
          cheese cheetos chez cheezwhiz ches chezcheese cheetos chez cheezwhiz
          ches chezcheese cheetos chez cheezwhiz ches chezcheese cheetos chez
          cheezwhiz ches chezcheese cheetos chez cheezwhiz ches chez
        </h3>
      </div>

      <div className={classes.footer}>
        <h3>sophia and sog made this slay</h3>
      </div>
    </div>
  );
}

export default ProjectsPage;
