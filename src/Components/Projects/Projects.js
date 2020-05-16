import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import "./projects.scss";
import ProjectDetails from "./ProjectDetails";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { useMediaQuery } from "react-responsive";
// import Carousel from "react-material-ui-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from "nuka-carousel";
import Carousel from "react-bootstrap/Carousel";
// import Carousel from '@bit/react-bootstrap.react-bootstrap.carousel'
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import Slider from "react-slick";
import { Slide } from "pure-react-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Projects() {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
    const projects = [
        {
            id: 1,
            heading: "Easy Realty System",
            subHeading: "Business Management Tool for Realtor",
            techStack: "React + ChartJS + NestJS + TypeScript + Nodejs",
            description:
                "Developed in a team of developers and designers and presented as a final project in Term 3. Easy Realty System is a business managemen tool for small to medium size realtor companies. Using this, they can manage their realtors, listings. The system also offers a dashboard where the user can see statistics of past sales of the realtors.",
            bgColor:
                "linear-gradient(rgb(203, 218, 187), rgb(170, 189, 208), rgb(107, 119, 98))",
            screenshots: ["easyRealtySystem_screenshots.png"],
            gitHub: "https://github.com/jyotSarup/easy-realty-system-dashboard",
            projectLink: "http://easyrealtysystem.wmdd.ca/",
        },
        {
            id: 2,
            heading: "Dishlist",
            subHeading:
                "Digital Menu for Restaurants (Hybrid Mobile Application)",
            techStack: "Apache Cordova + Vue + Quasar + HTML + Sass",
            description:
                "Developed in a team of developers and designers and presented as a final project in Term 2. Dishlist is a digital menu which serves as a solution to restaurants. Being in a city with restaurants having food from different nationalities, customers find it tough to understand the menu. Dishlist mobile application makes it wast by providing detailed description of the menu items and ingredients with some real pictures and reviews uploaded by other customers",

            bgColor:
                "linear-gradient(rgb(203, 218, 187), rgb(170, 189, 208), rgb(107, 119, 98))",
            screenshots: [
                "dishlist_scan_qr.png",
                "dishlist_dish_photos.png",
                "dishlist_menu.png",
            ],
            gitHub: "https://github.com/jyotSarup/dishlist-hybrid-mobile",
            projectLink: "http://dishlist.wmdd.ca/",
        },
    ];
    var settings = {
        dots: true,
        // appendArrows: "projectDetailsWrapper",
        adaptiveHeight: false,
        arrows: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        accessibility:true,

        // centerPadding:'20px',
        cssEase: "ease",
        pauseOnHover: true,
    };
    return (
        <div>
            <div className="ProjectsWrapper">
                
           
           
                {/* {!isTabletOrMobile && (
                    <AutoplaySlider
                    animation="cubeAnimation"
                    // play={true}
                    cancelOnInteraction={true} // should stop playing on user interaction
                    interval={6000}
                    // fillParent={true}
                >
                    {projects.map((project) => (
                        <div style={{margin:"0", padding:"0", height:"100vh"}}>
                            <ProjectDetails
                                key={project.id}
                                projects={project}
                            />
                        </div>
                    ))}
                </AutoplaySlider>
                )}
                
                
                    {isTabletOrMobile && projects.map((project) => (
                        <div style={{margin:"0", padding:"0"}}>
                            <ProjectDetails
                                key={project.id}
                                projects={project}
                            />
                        </div>
                    ))} */}

                {/* <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={projects.length}
                >
                    <Slider>
                        {projects.map((project, index) => (
                            <Slide index={index}>
                                <div style={{ margin: "0", padding: "0" }}>
                                    <ProjectDetails
                                        key={project.id}
                                        projects={project}
                                    />
                                </div>
                            </Slide>
                        ))}
                    </Slider>
                    <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
                </CarouselProvider> */}
                {/* <Carousel style showArrows={true}>
                    {projects.map((project) => (
                        // <div style={{ margin: "0", padding: "0" }}>
                        <ProjectDetails key={project.id} projects={project} />
                        // </div>
                    ))}
                </Carousel> */}
                {/* <Carousel
                    autoplay = {true}
                    autoplayInterval={5000}
                    autoplayReverse={true}
                    heightMode="max"

                >
                {projects.map((project) => (
                        <div style={{ margin: "0", padding: "0" }}>
                        <ProjectDetails key={project.id} projects={project} />
                         </div>
                    ))}
                </Carousel> */}

                {/* <Carousel>
                {projects.map((project) => (
                        <Carousel.Item>
                            <Carousel.Caption>
                        <ProjectDetails key={project.id} projects={project} />
                        </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel> */}
                {/* <Slider {...settings}>
                    <ProjectDetails projects = {projects[0]}/>
                    <ProjectDetails projects = {projects[1]}/>
                </Slider> */}
                <Slider {...settings}>
                    {projects.map((project) => (
                        <ProjectDetails key={project.id} projects={project} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Projects;
