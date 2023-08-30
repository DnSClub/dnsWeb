import { useEffect } from "react";
import classes from "./Home.module.css";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

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
        <div className={classes.TitleText}>
          <h1>&#123;</h1> {/* { */}
            <div className={classes.TitleWords}>
            <h1>dns</h1>
            <h2>developers and systems</h2>
            <h3>created by first years, made for all</h3>
          </div>
        </div>
        <img
          className={classes.bagel}
          src={require("../assets/donut.gif")}
          alt="3D Spinning Donut"
        />
      </div>
      
      <div className={classes.aboutUs}>
        <div className={classes.aboutUsText}>
          <div className={classes.aboutUsWords}>
            <h1>about us</h1>
            <h2>who are we?</h2>
            <h3>
              a club dedicated to bringing workshop/hackathon styled events for
              coders of all levels
            </h3>
          </div>
          <img
          className={classes.sphere}
          src={require("../assets/vectorsphere.gif")}
          alt="3D Spinning Vector Sphere"
          />
        </div>
      </div>

      <div className={classes.people}>
        <div className={classes.personleft}>
            <h2>president</h2>
            <h3>Arya Faghihy</h3>
            <img
            className={classes.personPhoto}
            src={require("../assets/arya.png")}
            alt="Arya Faghihy"
            />
            <h2>
              <a
                href="https://www.linkedin.com/in/aryafaghihy/"
                className={classes.links}
              >
                <CiLinkedin style={{ fill: "white" }} />
              </a>
            </h2>
            <div className={classes.persontext}>
              I am passionate about cryptography, machine learning, quantum
              computing,and mathematics. I've been the recipient of numerous
              academic awards, demonstrating my commitment to excellence as well
              as teamwork and leadership skills. My coursework has given me
              experience in Java, Python, C, and C++.
            </div>
        </div>
        <div className={classes.personright}>
          <h2>vice-president</h2>
          <h3>Cohen</h3>
          <img
            className={classes.personPhoto}
            src={require("../assets/cohen.png")}
            alt="Cohen"
          />
          <h2>
            <a
              href="https://www.linkedin.com/in/cohen-ter-heide-a12729272/"
              className={classes.links}
            >
              <CiLinkedin style={{ fill: "white" }} />
            </a>

            <a href="cjt15@sfu.ca" className={classes.links}>
              <AiOutlineMail style={{ fill: "white" }} />
            </a>
          </h2>
        </div>
        <div className={classes.personleft}>
          <h2>director of communications and multimedia</h2>
          <h3>Song</h3>
          <img
            className={classes.personPhoto}
            src={require("../assets/song.png")}
            alt="Song"
          />
          <h2>
            <a
              href="https://www.linkedin.com/in/eunsongkoh/"
              className={classes.links}
            >
              <CiLinkedin style={{ fill: "white" }} />
            </a>
            <a href="eka74@sfu.ca" className={classes.links}>
              <AiOutlineMail style={{ fill: "white" }} />
            </a>
          </h2>
          <div className={classes.persontext}>
            Hello! I'm Song! I'm a Computing Science student at Simon Fraser
            University who's passionate about everything related to computer
            science. I find myself drawn to areas like full-stack development,
            software engineering, data science, and product management, and
            cybersecurity. I love learning and always stay curious about the
            latest innovations and <br></br>
            breakthroughs in technology. On top of that, I enjoy getting
            creative with digital projects, whether it's working with DNS or
            video editing for the SFU Computing Student Society social media.
          </div>
        </div>
        <div className={classes.personright}>
          <h2>director of finance</h2>
          <h3>Saarang</h3>
          <img
            className={classes.personPhoto}
            src={require("../assets/saraang.png")}
            alt="Saarang"
          />
          <h2>
            <a
              href="https://www.linkedin.com/in/saaranganand/"
              className={classes.links}
            >
              <CiLinkedin style={{ fill: "white" }} />
            </a>
            <a href="eka74@sfu.ca" className={classes.links}>
              <AiOutlineMail style={{ fill: "white" }} />
            </a>
          </h2>
        </div>
        <div className={classes.personleft}>
          <h2>director of events</h2>
          <h3>Sophia</h3>
          <img
            className={classes.personPhoto}
            src={require("../assets/sophia.jpg")}
            alt="Sophia"
          />
          <h2>
            <a
              href="https://www.linkedin.com/in/sophiadontranho/"
              className={classes.links}
            >
              <CiLinkedin style={{ fill: "white" }} />
            </a>
          </h2>
          <div className={classes.persontext}>
            My name's Sophia and I'm a first-year studying computer science at
            Simon Fraser University. I'm still exploring but I have an interest
            in software development, game development, AI, ML, and UI/UX
            design.With my passions, I am looking forward to pursuing a career
            in software engineering.
            <br></br>
            <br></br>💻 I have been heavily involved in workshops, hackathons,
            and projects to broaden and strengthen my skills. In my leisure, I
            tinker with my projects, such as my AI Discord chat bots. From these
            experiences, I have expanded my proficiency in Python, C, C++, HTML,
            CSS, and SQL and learnt how to use tools such as Figma, Bootstrap,
            and various APIs. Currently, I am working at a student-led
            non-profit organization, Project Tech Conferences, as part of their
            tech committee's front end developer to help provide students
            technological opportunities. Along my journey, I aspire to meet new
            people and make new memories as I take on new experiences and
            opportunities!
          </div>
        </div>
        <div className={classes.personright}>
          <h2>director of resources</h2>
          <h3>Sam</h3>
          <img
            className={classes.personPhoto}
            src={require("../assets/sam.jpg")}
            alt="Sam"
          />
        </div>
      </div>
      <div className={classes.footer}>
        sophia and sog made this slay &#169;
      </div>
    </div>
  );
}

export default HomePage;
