import { useEffect } from "react";
import classes from "./Projects.module.css";
import { AiFillGithub } from "react-icons/ai";

function ProjectsPage() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(120deg, #000243, #420064, #020091, #A2004C, #420064)";
    document.body.style.backgroundSize = "600% 600%";
    document.body.style.animation = "gradientAnimation 15s ease infinite";
    // Define the @keyframes rule for the gradientAnimation
    const styleSheet = document.styleSheets[0];
    if (styleSheet) {
      styleSheet.insertRule(
        `
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `,
        styleSheet.cssRules.length
      );
    }
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.mainTitle}>
        <div className={classes.titleText}>
          <h1>&#123;</h1>
          <div className={classes.aboutText}>
            <h1>
              projects and
              <br />
              events
            </h1>
          </div>
        </div>
      </div>
      <br></br>
      <div className={classes.project}>
        <h2>Make Your Own Programming Language</h2>
        <b>
          {" "}
          <a
            href="https://github.com/DnSClub/MakeALanguage"
            className={classes.links}
          >
            <AiFillGithub style={{ fill: "white" }} /> more information
          </a>
        </b>
        <img
          className={classes.projectphoto}
          src={require("../assets/makeown.png")}
          alt="Make Your Own Programming Language"
        />
        <div className={classes.projectDesc}>
          <h3>
            Our first icebreaker event creating a programming language using
            Python, Rust, C, or C++
          </h3>
        </div>
      </div>
      <div className={classes.project}>
        <h2>LIBCOMP.A: A SFU CSSS x DNS Collaboration</h2>
        <b>
          {" "}
          <a
            href="https://github.com/DnSClub/Library-Challenge-2023"
            className={classes.links}
          >
            <AiFillGithub style={{ fill: "white" }} /> more information
          </a>
        </b>
        <img
          className={classes.projectphoto}
          src={require("../assets/libcomp.png")}
          alt="Lib Comp A"
        />
        <div className={classes.projectDesc}>
          <h3>
            A collaboration with SFU's Computing Science Student Society
            hackathon. Participants used pre-built libraries from DNS and the
            CSSS to create projects.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
