import React from "react";
import "../../App.css";
import "./contactMe.scss";
import { Button, TextField } from "@material-ui/core";
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
        </div>
    );
}

export default ContactMe;
