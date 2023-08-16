import { useEffect } from "react";
import classes from "./Home.module.css";
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
          <h2>talk to us!</h2>
          <h3>
            we are prororgramers. we arrrghh pirates. we fancy coding workshops.
            pls join us we have food
          </h3>
        </div>
      </div>

      <div className={classes.arya}>
        <h2>arya pres guy</h2>
        <img
          className={classes.AryaPhoto}
          src={require("../assets/arya.png")}
          alt="Arya"
        />
      </div>
      <div className={classes.cohen}>
        <h2>cohen vp guy</h2>
        <img
          className={classes.cohenPhoto}
          src={require("../assets/cohen.png")}
          alt="Cohen"
        />
      </div>
      <div className={classes.song}>
        song woman{" "}
        <img
          className={classes.songPhoto}
          src={require("../assets/song.png")}
          alt="Song"
        />
      </div>
      <div className={classes.saraang}>
        saraabng finance guy{" "}
        <img
          className={classes.saraangPhoto}
          src={require("../assets/saraang.png")}
          alt="Saraang"
        />
      </div>
      <div className={classes.sophia}>
        sophia event woman
        <img
          className={classes.sophiaPhoto}
          src={require("../assets/sophia.jpg")}
          alt="Sophia"
        />
      </div>
      <div className={classes.sam}>
        sam resource man
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
