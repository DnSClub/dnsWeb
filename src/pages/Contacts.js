import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import classes from "./Contact.module.css";

function ContactsPage() {
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
      <div className={classes.maintitle}>
        <h1>&#123;</h1>
        <div className={classes.aboutText}>
          <h1>contact us</h1>
        </div>
        <div className={classes.contact}>
          <h3 style={{ fontStyle: "italic" }}>
            <a href="dns_exec@sfu.ca" className={classes.links}>
              <AiOutlineMail style={{ fill: "white" }} /> send us an email
            </a>
            <br></br>
            <a
              href="https://www.linkedin.com/company/sfudns/"
              className={classes.links}
            >
              <CiLinkedin style={{ fill: "white" }} /> connect with us
            </a>
            <br></br>
            <a
              href="https://www.instagram.com/sfu_dns"
              className={classes.links}
            >
              <AiOutlineInstagram style={{ fill: "white" }} /> follow us
            </a>
            <br></br>
            <a href="https://discord.gg/bDTJYPXu" className={classes.links}>
              <BsDiscord style={{ fill: "white" }} /> join our discord
            </a>
          </h3>
        </div>
      </div>
      <div className={classes.footer}>
        Developers and Systems Club at Simon Fraser University 2023 &#169;
      </div>
    </div>
  );
}

export default ContactsPage;
