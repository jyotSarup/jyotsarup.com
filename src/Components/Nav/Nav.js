import React from "react";
import { useMediaQuery } from "react-responsive";
import "../../App.css";
import "./style.scss";
import {Link} from "react-router-dom"

function Nav() {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1000px)",
    });
    // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

    let isBurgerIcon = true;
    const toggleBurgerIcon = ()=> {

    }
    // const isTabletOrMobileDevice = useMediaQuery({
    //   query: '(max-device-width: 1224px)'
    // })
    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
        <>
            <div class="burgerIcon" >
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            {isTabletOrMobile && !isBurgerIcon &&(
                <div class="navWrapper">
                    <header>
                        <nav>
                            <ul class="navList">
                                {/* <li class="navListItem">
                                    <Link class="navListItemLink" to="">
                                        Home
                                    </Link>
                                </li> */}
                                <li class="navListItem">
                                    <Link class="navListItemLink" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li class="navListItem">
                                    <Link class="navListItemLink" to="/skills">
                                        Skills
                                    </Link>
                                </li>
                                <li class="navListItem">
                                    <Link class="navListItemLink" to="/experience">
                                        Experience
                                    </Link>
                                </li>
                                <li class="navListItem">
                                    <Link class="navListItemLink" to="/projects">
                                        Projects
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
            )}
        </>
    );
}

export default Nav;
