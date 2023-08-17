import { useEffect } from "react";
import classes from "./Projects.module.css";
import { AiFillGithub } from "react-icons/ai";

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
        <h2>Make Your Own Programming Language</h2>
        <br></br>
        <h3>Creating a programming language using Python, Rust, C, or C++</h3>
        <br></br>
        <b>
          {" "}
          <a
            href="https://github.com/DnSClub/MakeALanguage"
            className={classes.links}
          >
            <AiFillGithub style={{ fill: "white" }} /> more information
          </a>
        </b>
        <br></br>
        <img
          className={classes.project1Photo}
          src={require("../assets/makeown.png")}
          alt="Make Your Own Programming Language"
        />
      </div>
      <div className={classes.project2}>
        <h2>LIBCOMP.A: A SFU CSSS x DNS Collaboration</h2>
        <h3>
          A collaboration with SFU's Computing Science Student Society
          hackathon. Participants used pre-built libraries from DNS and the CSSS
          to create projects.
        </h3>
        <br></br>
        <b>
          {" "}
          <a
            href="https://github.com/DnSClub/Library-Challenge-2023"
            className={classes.links}
          >
            <AiFillGithub style={{ fill: "white" }} /> more information
          </a>
        </b>
        <br></br>
        <img
          className={classes.project2Photo}
          src={require("../assets/libcomp.png")}
          alt="Lib Comp A"
        />
      </div>

      <div className={classes.footer}>
        <h3>sophia and sog made this slay</h3>
      </div>
    </div>
  );
}

export default ProjectsPage;
