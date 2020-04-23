import React from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import { BrowserRouter , Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <Switch>
                  <Route path="/" exact component={AboutMe}/>
                  <Route path="/projects" exact component={Projects}/>
                  <Route path="/skills" exact component={Skills}/>
                  <Route path="/experience" exact component={Experience}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
