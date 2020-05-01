import React from "react";
import heroBackgroundImage from "../../assets/myHeroBackground.jpg";
import myImage from "../../assets/my-image.png";
import abstractImageBackground from "../../assets/abstract-image-background.jpg";
import whiteImageBackground from "../../assets/white-image-background.jpg";
import myLinkedIn from "../../assets/linkedin.png";
import myMail from "../../assets/email.png";
import myGitHub from "../../assets/github.png";
import downArrow from "../../assets/down-arrow.png"
import "../../App.css";
import "./styles.scss";
import { useMediaQuery } from "react-responsive";

function AboutMe() {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1000px)",
    });

    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

    return (
        <div className="wrapper">
            <div className="aboutMeWrapper">
                
                <div className="imgWrapper">
                    {!isTabletOrMobile && (<div className="purpleDiv">

                    </div>)}
                    {!isTabletOrMobile && (<div className="blueDiv">
                    
                    </div>)}
                    <img className="myImg" src={myImage} />
                    {/* 
                    <img
                        className="myImgBackground"
                        src={abstractImageBackground}
                    />
                    <img
                        className="myWhiteImgBackground"
                        src={whiteImageBackground}
                    /> */}
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
                        <h2 className="aboutMeText">Hi There! <br /> I'm <span style={{color:"#07072b"}}>Jyot Sarup</span> </h2>
                        <h2 className="aboutMeText">
                            I'm a <span style={{color:"#07072b"}}>Full-Stack Developer</span>
                        </h2>
                    </div>
                </div>
                {/* <div className="bio">
                    <div className="bioText">
                        <h2 className="aboutMeText">
                            Full-Stack Developer
                        </h2>
                    </div>
                </div> */}
                
            </div>
            {!isTabletOrMobile && (<div className="arrow bounce">
                    <a class="fa fa-arrow-down fa-2x" href="#"><img src={downArrow}/></a>
                </div>)}
        </div>
    );
}

export default AboutMe;
