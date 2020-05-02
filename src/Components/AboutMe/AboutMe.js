import React from "react";
import myImage from "../../assets/my-image.png";
import downArrow from "../../assets/down-arrow.png";
import "../../App.css";
import "./styles.scss";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

function AboutMe() {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1000px)",
    });

    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

    return (
        <div className="wrapper">
            <div className="aboutMeWrapper">
                <div className="imgWrapper">
                    {!isTabletOrMobile && <div className="purpleDiv"></div>}
                    {!isTabletOrMobile && <div className="blueDiv"></div>}
                    <img className="myImg" src={myImage} />
                </div>
                <div className="bio">
                    <div className="bioText">
                        <h2 className="aboutMeText">
                            Hi There! <br /> I'm{" "}
                            <span style={{ color: "#07072b" }}>Jyot Sarup</span>{" "}
                        </h2>
                        <h2 className="aboutMeText">
                            I'm a{" "}
                            <span style={{ color: "#07072b" }}>
                                Full-Stack Developer
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
            {!isTabletOrMobile && (
                <div className="arrow bounce">
                    <Link
                        className="arrowLink"
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        <img src={downArrow} />
                    </Link>
                </div>
            )}
        </div>
    );
}

export default AboutMe;
