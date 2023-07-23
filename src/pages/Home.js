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
        {/* this is for the :{ symbol */}
        <h1 style={{ textAlign: "left" }}>&#123;</h1>
        <br />
        <h1>
          {/* this is to tab*/}
          &nbsp;&nbsp;&nbsp; dns
        </h1>
        <br style={{ lineHeight: "0.5em" }} />
        <h3>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          developers and systems
        </h3>
        <br style={{ lineHeight: "0.5em" }} />
        <h3>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          created by first years, made for all
        </h3>
      </div>
      <div className={classes.bagel}>BAGEL</div>
      <div className={classes.aboutUs}>
        <div className={classes.aboutUsText}>
          <h1>about us</h1>
          <br />
          <h2>talk to us!</h2>
          <br />
          <h3>
            <br />
            we are prororgramers <br />
            we arrrghh pirates
            <br />
            we fancy coding workshops
            <br />
            pls join us we have food
          </h3>
        </div>
      </div>

      <div className={classes.arya}>
        <h2>arya pres guy</h2>
      </div>
      <div className={classes.cohen}>cohen vp guy</div>
      <div className={classes.song}>song woman</div>
      <div className={classes.saraang}>saraabng finance guy</div>
      <div className={classes.sophia}>sophia event woman</div>
      <div className={classes.sam}>sam resource man</div>
    </div>
  );
}

export default HomePage;
