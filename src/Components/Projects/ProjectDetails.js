import React from "react";
import "../../App.css";
import "./projects.scss";

function ProjectDetails(props) {
    const screenshotImages = require.context("../../assets", true);
    const screenshots = props.projects.screenshots;
    console.log(props);
    return (
        <div>
            <div
                style={{ background: `${props.projects.bgColor}` }}
                className="projectDetailsWrapper"
            >
                {props.projects.id == 1 ? (
                    <h1 style={{ color: "#07072b" }}>
                        Projects I have worked on
                    </h1>
                ) : (
                    ""
                )}
                <h2
                    style={{
                        color: "#07072b",
                        marginBottom: "0",
                        paddingBottom: "0",
                    }}
                    className="projectHeading"
                >
                    {props.projects.heading}
                </h2>
                <div className="screenShotsWrapper">
                    <div className="screenshots">
                        {screenshots.map((screenshot, index) => (
                            <img
                                key={`screenshot${index}`}
                                className="screenshotImg"
                                style={{
                                    maxWidth: `${
                                        100 / screenshots.length - 4
                                    }%`,
                                }}
                                src={screenshotImages(`./${screenshot}`)}
                            />
                        ))}
                    </div>
                </div>
                <div className="DescriptionWrapper">
                    <h3
                        style={{ color: "#07072b" }}
                        className="ProjectSubHeading"
                    >
                        {props.projects.subHeading}
                    </h3>
                    <p className="projectDescription">
                        {props.projects.description}
                    </p>
                </div>
                <div className="actionButtons">
                    <a href={props.projects.projectLink}>View Website</a>
                    <a href={props.projects.gitHub}>View on Github</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
