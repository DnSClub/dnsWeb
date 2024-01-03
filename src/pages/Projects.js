import classes from "./Projects.module.css";
import { AiFillGithub } from "react-icons/ai";

function ProjectsPage() {
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
      <div className={classes.project}>
        <h2>WEBCRAFT</h2>
        <b>
          {" "}
          <a
            href="https://github.com/DnSClub/Webdev-Fall-2023"
            className={classes.links}
          >
            <AiFillGithub style={{ fill: "white" }} /> more information
          </a>
        </b>
        <img
          className={classes.projectphoto}
          src={require("../assets/webcraftV2.png")}
          alt="WebCraft"
        />
        <div className={classes.projectDesc}>
          <h3>
            A time crunch challenge for web developers of all skill ranges to
            compete for prizes of different categories.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
