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
        <img className={classes.bagel} src={require('../assets/donut.gif')} alt="3D Sprinning Donut" />
      </div>
      <div className={classes.aboutUs}>
        <div className={classes.aboutUsText}>
          <h1>about us</h1>
          <h2>talk to us!</h2>
          <h3>
            we are prororgramers. we arrrghh pirates. we fancy coding workshops. pls join us we have food
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
