import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "../../App.css";
import "./style.scss";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function Nav() {
    const [isBurgerIcon, setisBurgerIcon] = useState(true);

    const [burgerIconClass, setBurgerIconClass] = useState("burgerIcon");

    const [navDrawerClass, setnavDrawerClass] = useState("navWrapper");
    
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1000px)",
    });

    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

    // if (isDesktopOrLaptop) {
    //     setBurgerIconClass("burgerIcon");
    //     setisBurgerIcon(true);
    //     setnavDrawerClass("navWrapper");
    // }

    

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
        <div class="NavOuterDiv">
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
            {/* {isTabletOrMobile && !isBurgerIcon &&( */}
            {/* //      <CSSTransition */}
            {/* //      in = {!isBurgerIcon}
            //      timeout={300}
            //      className={navDrawerClass}
            //      unmountOnExit
            //    > */}
            <div className={navDrawerClass}>
                <header>
                    <nav>
                        <ul className="navList">
                            <li className="navListItem">
                                <Link className="navListItemLink" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="navListItem">
                                <Link className="navListItemLink" to="/skills">
                                    Skills
                                </Link>
                            </li>
                            <li className="navListItem">
                                <Link
                                    className="navListItemLink"
                                    to="/experience"
                                >
                                    Experience
                                </Link>
                            </li>
                            <li className="navListItem">
                                <Link
                                    className="navListItemLink"
                                    to="/projects"
                                >
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            {/* // </CSSTransition> */}
            {/* )} */}
        </div>
    );
}

export default Nav;
