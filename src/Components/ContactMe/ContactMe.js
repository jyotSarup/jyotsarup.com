import React from "react";
import "../../App.css";
import "./contactMe.scss";
import TextField from "@material-ui/core/TextField";
import gitHubLogo from "../../assets/github.png";
import linkedInLogo from "../../assets/linkedin.png";
import emailLogo from "../../assets/email.png";

function ContactMe() {
    return (
        <div className="contactMeWrapper">
            <h1>Lets Connect!</h1>
            <p className="contactmeStatement">
                So, That was all about me and I would love to hear about you and
                your work. So, Lets Connect :)
            </p>
            <p className="contactmeStatement">
                Also, I am looking for a full-time opportunity in Software
                Engineer role and I am open to take on some freelance projects.
                Please connect if you know of any open position which aligns
                with my skills. :)
            </p>
            <div className="services">
                <div className="hexagons">
                    <h4>Connect and Share</h4>
                </div>
                <hr className="connect" />
                <div className="hexagons">
                    <h4>Ask a Query</h4>
                </div>
                <hr className="connect" />
                <div className="hexagons">
                    <h4>Hire Me</h4>
                </div>
                <hr className="connect" />
                <div className="hexagons">
                    <h4>Contact for Project</h4>
                </div>
            </div>
            <div style={{position:"relative"}}>
            <div className="formWrapper">
                <TextField
                    className="formInput name"
                    required
                    id="name"
                    label="Name"
                />
                <TextField
                    className="formInput company"
                    id="company"
                    label="Company"
                />
                <TextField
                    className="formInput"
                    required
                    id="email"
                    label="Email"
                />
                <TextField
                    className="formInput"
                    required
                    id="subject"
                    label="Subject"
                />
                <TextField
                    className="formInput"
                    id="message"
                    label="Message"
                    multiline
                    rows={6}
                    defaultValue=""
                />

                <button className="actionButton"> Send</button>
            </div>

            <div className="ContactMeHere">
                <p>
                    <h2> OR Contact Me Here</h2>
                    <h2 style={{ textDecoration: "underline" }}>
                        {" "}
                        Jyot Sarup Kaur
                    </h2>
                </p>

                <div className="socialMediaWrapper">
                    <div className="logoImgDiv">
                        <img className="logoImg" src={emailLogo} />
                    </div>
                    <h4 className="contactDetail">jyotsarup93@gmail.com</h4>
                    <div className="logoImgDiv">
                        <img className="logoImg" src={linkedInLogo} />
                    </div>
                    <h4 className="contactDetail">
                        {" "}
                        <a href="https://www.linkedin.com/in/jyotsarupkaur/">
                            linkedin.com/in/jyotsarupkaur/
                        </a>
                    </h4>
                    <div className="logoImgDiv">
                        <img className="logoImg" src={gitHubLogo} />
                    </div>
                    <h4 className="contactDetail">
                        {" "}
                        <a href="https://github.com/jyotSarup">
                            https://github.com/jyotSarup
                        </a>
                    </h4>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ContactMe;
