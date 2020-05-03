import React, { useState} from "react";
import { useMediaQuery } from "react-responsive";
import "../../App.css";
import "./style.scss";
import {
    Link
} from "react-scroll";

function Nav() {
    const [isBurgerIcon, setisBurgerIcon] = useState(true);

    const [burgerIconClass, setBurgerIconClass] = useState("burgerIcon");

    const [navDrawerClass, setnavDrawerClass] = useState("navWrapper");


    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

    const toggleBurgerIcon = (e) => {
        if (isBurgerIcon) {
            setBurgerIconClass("burgerIcon change");
            setisBurgerIcon(false);
            setnavDrawerClass("navWrapper enterFromLeft");
        } else {
            setBurgerIconClass("burgerIcon");
            setisBurgerIcon(true);
            setnavDrawerClass("navWrapper");
        }
    };

    return (
        <div className="NavOuterDiv">
            {isTabletOrMobile && !isBurgerIcon && (
                <div className="backdrop"></div>
            )}
            {isTabletOrMobile && (
                <div className={burgerIconClass} onClick={toggleBurgerIcon}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            )}

            <div className={navDrawerClass}>
                <header>
                    <nav>
                        <ul className="navList">
                            <li className="navListItem">
                                <Link
                                    onClick={toggleBurgerIcon}
                                    className="navListItemLink"
                                    to="aboutMe"
                                    spy={true}
                                    smooth={true}
                                    offset={25}
                                    duration={1000}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="navListItem">
                                <Link
                                    onClick={toggleBurgerIcon}
                                    className="navListItemLink"
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Work History
                                </Link>
                            </li>
                            <li className="navListItem">
                                <Link
                                    onClick={toggleBurgerIcon}
                                    className="navListItemLink"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Skills
                                </Link>
                            </li>
                            <li className="navListItem">
                                <Link
                                    onClick={toggleBurgerIcon}
                                    className="navListItemLink"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="navListItem">
                                <Link
                                    onClick={toggleBurgerIcon}
                                    className="navListItemLink"
                                    to="contactMe"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Nav;
