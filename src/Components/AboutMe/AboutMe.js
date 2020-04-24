import React from "react";
import heroBackgroundImage from "../../assets/myHeroBackground.jpg";
import myImage from "../../assets/my-image.png";
import abstractImageBackground from "../../assets/abstract-image-background.jpg";
import whiteImageBackground from "../../assets/white-image-background.jpg";
import myLinkedIn from "../../assets/linkedin.png";
import myMail from "../../assets/email.png";
import myGitHub from "../../assets/github.png";
import "../../App.css";
import "./styles.scss";

function AboutMe() {
    return (
        <div className="wrapper">
            <div className="aboutMeWrapper">
                <div className="bio">
                    <div className="bioText">
                        <h2 className="aboutMeText">Hi There</h2>
                    </div>
                </div>
                <div className="imgWrapper">
                    <img className="myImg" src={myImage} />
                    <img
                        className="myImgBackground"
                        src={abstractImageBackground}
                    />
                    <img
                        className="myWhiteImgBackground"
                        src={whiteImageBackground}
                    />
                    {/* <h2> Jyot Sarup Kaur</h2> */}
                    {/* <ul class="socialMenu">
                    <li class="socialMenuLinks">
                        <a href="#">
                            <span class="icon">
                                <img src={myLinkedIn} />
                            </span>
                        </a>
                    </li>
                    <li class="socialMenuLinks">
                        <a href="#">
                            <span class="icon">
                                <img src={myGitHub} />
                            </span>
                        </a>
                    </li>
                    <li class="socialMenuLinks">
                        <a href="#">
                            <span class="icon">
                                <img src={myMail} />
                            </span>
                        </a>
                    </li>
                </ul> */}
                </div>
                <div className="bio">
                    <div className="bioText">
                        <h2 className="aboutMeText">
                            I'm <br />
                            Jyot Sarup{" "}
                        </h2>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default AboutMe;
