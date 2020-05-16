import React, { useState,useEffect } from "react";
import "../../App.css";
import "./contactMe.scss";
import TextField from "@material-ui/core/TextField";
import gitHubLogo from "../../assets/github.png";
import linkedInLogo from "../../assets/linkedin.png";
import emailLogo from "../../assets/email.png";
import { sendEmail } from '../../utils/api'
import ClipLoader from "react-spinners/ClipLoader";

function ContactMe() {
    const [message, setMessage] = useState({
        name: "",
        company: "",
        subject: "",
        email: "",
        body: "",
    });

    const [isError, setIsError] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [isLoading,setIsLoading] = useState(false)
    const [errorMessage, seterrorMessage] = useState("")
    const sendMessage = () => {

        // setErrorMessage("");
        
        if (message.name == "" || message.email == "" ||message.subject == "") {
            seterrorMessage("Fields marked with * can not be left blank")
            setIsError(true);
            setSuccessMessage(false);
        }else{
            // setIsLoading(true);
            setIsError(false)
            setIsLoading(true)
            sendEmail(message)
            .then(res => {
                if (res.status === 200) {
                    setIsLoading(false)
                    console.log(res.data)
                    setSuccessMessage(true)
                    setMessage({
                        name: "",
                        company: "",
                        subject: "",
                        email: "",
                        body: "",
                    })
                    // textFields.forEach(element => {
                    //     element.value=""
                    // });
                    // setIsLoading(false);
                    
                } else {
                    setIsLoading(false)
                    seterrorMessage("I can not receive your message right now. Please try later or email me at jyotsarup93@gmail.com")
                    setIsError(true)
                    // setIsLoading(false);
                }
            })
            .catch(err => {
                
            })
        }
    };

    const handleChange = input => e => {
        setMessage({
            ...message,
            [input]: e.target.value
        })
    }
    return (
        <div className="contactMeWrapper">
            {/* <ClipLoader
          size={150}
          color={"#123abc"}
          loading={isLoading}
        /> */}
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
            <div style={{ position: "relative" }}>
            
                <div className="formWrapper">
    {isError && <div style={{ color: "red", display:"block" , flex:"0 0 100%" , fontWeight:"bold"}}>{errorMessage}</div>}
                {successMessage && <div style={{ color: "#6b7762", display:"block" , flex:"0 0 100%" , merginBottom:"2em", fontWeight:"bold"}}>I have received your message and will get back to you as soon as possible. Thank you. </div>}
                    <TextField
                        className="formInput name"
                        required
                        id="name"
                        label="Name"
                        onChange={handleChange('name')}
                        value={message.name}
                    />
                    <TextField
                        className="formInput company"
                        id="company"
                        label="Company"
                        onChange={handleChange('company')}
                        value={message.company}
                    />
                    <TextField
                        className="formInput"
                        required
                        id="email"
                        label="Email"
                        onChange={handleChange('email')}
                        value={message.email}
                    />
                    <TextField
                        className="formInput"
                        required
                        id="subject"
                        label="Subject"
                        onChange={handleChange('subject')}
                        value={message.subject}
                    />
                    <TextField
                        className="formInput"
                        id="message"
                        label="Message"
                        multiline
                        rows={6}
                        onChange={handleChange('body')}
                        value={message.body}
                    />
                    
                    <button className="actionButton" onClick={sendMessage}>
                        {" "}
                        Send
                    </button>
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
