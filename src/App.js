import React from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import ContactMe from "./Components/ContactMe"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Element } from "react-scroll";
// import ContactMe from "./Components/ContactMe";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <Element id="aboutMe" name="aboutMe">
                    <AboutMe />
                </Element>
                <Element id="experience" name="experience">
                    <Experience />
                </Element>
                <Element id="skills" name="skills">
                    <Skills />
                </Element>
                <Element id="projects" name="projects">
                    <Projects />
                </Element>
                <Element id="contactMe" name="contactMe">
                    <ContactMe />
                </Element>
            </div>
        </BrowserRouter>
    );
}

export default App;
