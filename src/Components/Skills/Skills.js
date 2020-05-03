import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import "./skills.scss";

function Skills() {
    const logoImages = require.context("../../assets", true);

    useEffect(() => {
        let div1 = document.getElementsByClassName("division");
        const images = document.getElementsByClassName("logoImages");
        div1 = [...div1];
        let loadFlag = false;
        const division = document.addEventListener("scroll", () => {
            div1.forEach((div) => {
                let bounding = div.getBoundingClientRect();
                if (bounding.bottom <= 514) {
                    loadFlag = true;
                    div.style.transform = "translateX(0)";
                }
            });
            if (loadFlag) {
                let images1 = [...images];
                images1.forEach((logo) => {
                    logo.style.opacity = "1";
                });
            }
        });
    }, []);

    return (
        <div className="skillsOuterDiv">
            <h2>Technologies I have worked on</h2>
            <div className="skillsWrapper">
                <div className="client-side tools leftSide">
                    <h2 className="toolsHeading">Client-Side</h2>
                    <img
                        className="logoImages"
                        src={logoImages(`./html-css-javascript-logo.png`)}
                    />
                    <img
                        className="logoImages"
                        src={logoImages(`./JQuery_logo-512.png`)}
                    />
                    <img
                        className="logoImages"
                        src={logoImages(`./React_logo.png`)}
                    />
                    <img
                        className="logoImages"
                        src={logoImages(`./vuejs.png`)}
                    />
                    <img
                        className="logoImages"
                        src={logoImages(`./sass-logo.png`)}
                    />
                </div>
                <div id="division1" className="division fromLeft">
                    
                </div>
                <div className="server-side tools rightSide">
                <h2 className="toolsHeading">Server-Side</h2>
                <img
                    className="logoImages"
                    src={logoImages(`./java-logo.png`)}
                />
                <img
                        className="logoImages"
                        src={logoImages(`./asp.net-logo.png`)}
                    />
                    <img
                        className="logoImages"
                        src={logoImages(`./csharp-logo.png`)}
                    />
                <img
                        className="logoImages"
                        src={logoImages(`./nodejs-logo.png`)}
                    />

<img
                        className="logoImages"
                        src={logoImages(`./ssis-logo.png`)}
                    />
                    
                    
                </div>
                <div id="division2" className="division fromRight"></div>
                <div className="database tools leftSide">
                <h2 className="toolsHeading">Database</h2>
                <img
                    className="logoImages"
                    src={logoImages(`./mysql-logo.png`)}
                />
                </div>
                <div id="division3" className="division fromLeft"></div>
                <div className="other tools rightSide">
                <h2 className="toolsHeading">Other Tools</h2>
                    <img
                        className="logoImages"
                        src={logoImages(`./github-logo.png`)}
                    />
                    <img
                        className="logoImages"
                        src={logoImages(`./SoapUI-logo.png`)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;
