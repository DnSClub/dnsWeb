import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import classes from "./Contact.module.css";

function ContactsPage() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(120deg, #020091, #A2004C, #FF014A)";
    document.body.style.backgroundSize = "100% 1100%";
    document.body.style.animation = "gradientAnimation 30s ease infinite";
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.maintitle}>
        <h1>&#123;</h1>
        <div className={classes.aboutText}>
          <h1>contact us</h1>
        </div>
      </div>
      <div className={classes.contact}>
        <a href="dns_exec@sfu.ca" className={classes.links}>
          <AiOutlineMail style={{ fill: "white" }} /> send us an email!
        </a>
        <br></br>
        <a
          href="https://www.linkedin.com/company/sfudns/"
          className={classes.links}
        >
          <CiLinkedin style={{ fill: "white" }} /> connect with us!
        </a>
        <br></br>
        <a href="https://www.instagram.com/sfu_dns" className={classes.links}>
          <AiOutlineInstagram style={{ fill: "white" }} /> follow us!
        </a>
      </div>
    </div>
  );
}

export default ContactsPage;