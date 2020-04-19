import React from "react";
import heroBackgroundImage from "../../assets/myHeroBackground.jpg";
import myImage from "../../assets/my-image.png";
import myLinkedIn from "../../assets/linkedin.png";
import myMail from "../../assets/email.png";
import myGitHub from "../../assets/github.png";
import "../../App.css";
import "./styles.scss"

function AboutMe() {
    return (
        <div class="aboutMeWrapper">
            <div class="bio">
                <hr width="100%" />
                <h2 class="aboutMeText">about me</h2>

                <p class="bioDescription">
                    I'm a vancouver based web and mobile application developer.
                </p>
                <hr width="100%" />
            </div>
            <div class="imgWrapper">
                <img class="myImg" src={myImage} />
                <h2> Jyot Sarup Kaur</h2>
                <ul class="socialMenu">
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
                </ul>
            </div>
        </div>
    );
}

export default AboutMe;
