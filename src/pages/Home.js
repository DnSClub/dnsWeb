import { useEffect } from "react";
import classes from "./Home.module.css";
import { CiLinkedin } from "react-icons/ci";
function HomePage() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(120deg, #020091, #A2004C, #FF014A)";
    document.body.style.backgroundSize = "100% 1100%";
    document.body.style.animation = "gradientAnimation 30s ease infinite";
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.mainTitle}>
        <h1>&#123;</h1> {/* { */}
        <div className={classes.aboutText}>
          <h1>dns</h1>
          <h2>developers and systems</h2>
          <h3>created by first years, made for all</h3>
        </div>
        <img
          className={classes.bagel}
          src={require("../assets/donut.gif")}
          alt="3D Sprinning Donut"
        />
      </div>
      <div className={classes.aboutUs}>
        <div className={classes.aboutUsText}>
          <h1>about us</h1>
          <h2>who are we?</h2>
          <h3>a club dedicated to</h3>
        </div>
      </div>

      <div className={classes.arya}>
        <h2>president</h2>
        <h3>Arya</h3>
        <img
          className={classes.aryaPhoto}
          src={require("../assets/arya.png")}
          alt="Arya"
        />
        <h2>
          <a
            href="https://www.linkedin.com/in/aryafaghihy/"
            className={classes.links}
          >
            <CiLinkedin style={{ fill: "white" }} />
          </a>
        </h2>
      </div>
      <div className={classes.cohen}>
        <h2>vice-president</h2>
        <h3>Cohen</h3>
        <img
          className={classes.cohenPhoto}
          src={require("../assets/cohen.png")}
          alt="Cohen"
        />
      </div>
      <div className={classes.song}>
        <h2>director of communications and multimedia</h2>
        <h3>Song</h3>
        <img
          className={classes.songPhoto}
          src={require("../assets/song.png")}
          alt="Song"
        />
      </div>
      <div className={classes.saraang}>
        <h2>director of finance</h2>
        <h3>Saraang</h3>
        <img
          className={classes.saraangPhoto}
          src={require("../assets/saraang.png")}
          alt="Saraang"
        />
      </div>
      <div className={classes.sophia}>
        <h2>director of events</h2>
        <h3>Sophia</h3>
        <img
          className={classes.sophiaPhoto}
          src={require("../assets/sophia.jpg")}
          alt="Sophia"
        />
      </div>
      <div className={classes.sam}>
        <h2>director of resources</h2>
        <h3>Sam</h3>
        <img
          className={classes.samPhoto}
          src={require("../assets/sam.jpg")}
          alt="Sam"
        />
      </div>
      <div className={classes.footer}>
        <h3>sophia and sog made this slay</h3>
      </div>
    </div>
  );
}

export default HomePage;
