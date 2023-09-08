import classes from "./Home.module.css";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

function HomePage() {
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
          <h3>Arya</h3>
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
            <a href="mfa90@sfu.ca" className={classes.links}>
              <AiOutlineMail style={{ fill: "white" }} />
            </a>
          </h2>
          <div className={classes.persontextleft}>
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
          <div className={classes.persontextright}>
            Hello, I'm a second year CS student at SFU! My coding journey began
            at the age of 8 on Khan Academy, and I've since become an enthusiast
            of programming language development. In 2018, I received the
            prestigious PARC Systems Award for my efforts. I also have hands-on
            experience as a former developer at MindBlocks Studio, LLC, where I
            contributed to a video game with over 10 million downloads on Google
            Play, 1 million on iOS, and 20,000 on Steam.
          </div>
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
          <div className={classes.persontextleft}>
            Hello! I'm Song! I'm a Computing Science student at Simon Fraser
            University who's passionate about everything related to computer
            science. I find myself drawn to areas like full-stack development,
            software engineering, data science, product management, and
            cybersecurity. I love learning and always stay curious about the
            latest innovations and breakthroughs in technology. Being able to
            bring creativity to something so technical of a computer is so
            beautiful to me. <br></br>On top of that, I enjoy getting creative
            with digital projects, whether it's working with DNS or video
            editing for the SFU Computing Student Society social media.
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
            <a href="saa183@sfu.ca" className={classes.links}>
              <AiOutlineMail style={{ fill: "white" }} />
            </a>
          </h2>

          <div className={classes.persontextright}>
            Hi! I'm Saarang, a second-year CS student at SFU. I'm passionate
            about both front and back-end development, and I have a special
            interest in game design. You'll often find me at hackathons and tech
            club events, whether as a participant or organizer. Beyond
            technology, I'm also fascinated by the latest advancements in
            science and space exploration.
          </div>
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
            <a href="syd3@sfu.ca" className={classes.links}>
              <AiOutlineMail style={{ fill: "white" }} />
            </a>
          </h2>
          <div className={classes.persontextleft}>
            My name's Sophia and I'm a second-year studying computer science at
            Simon Fraser University. I'm still exploring but I have an interest
            in software development, game development, AI, and UI/UX design.
            <br></br>
            <br></br>
            💻 I have been heavily involved in workshops, hackathons, and
            projects to broaden and strengthen my skills. In my leisure, I
            tinker with my projects, such as my AI Discord chat bots.
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
          <h2>
            <a href="sza193@sfu.ca" className={classes.links}>
              <AiOutlineMail style={{ fill: "white" }} />
            </a>
          </h2>
          <div className={classes.persontextright}>
            Hello, I'm Shanglin, a second-year Computing Science student at SFU,
            and I proudly serve as the Director of Resources for the Developers
            and System Club (DNS). Within the tech world, my passion lies in
            harnessing AI to boost daily productivity for everyone. Beyond
            coding and algorithms, I find my creative outlet in playing metal
            guitar. This combination of interests makes me a unique addition to
            DNS.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
