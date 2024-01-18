import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import classes from "./Contact.module.css";

function ContactsPage() {
  return (
    <div className={classes.container}>
      <div className={classes.maintitle}>
        <h1>&#123;</h1>
        <div className={classes.aboutText}>
          <h1>contact us</h1>
        </div>
        <div className={classes.contact}>
          <h3 style={{ fontStyle: "italic", fontSize: "25px" }}>
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
            <a href="https://discord.gg/KHxdUNTb23" className={classes.links}>
              <BsDiscord style={{ fill: "white" }} /> join our discord
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
