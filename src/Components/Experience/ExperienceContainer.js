import React from "react";
import Experience from "./Experience";
import "./experience.scss";

function ExperienceContainer() {
    const workExp = [
        {
            position: "System Engineer",
            timeServed: "3+ years",
            dates: "Sep 21,2015 - Jan 25,2019",
            company: "Tata Consultancy Services",
            place: "Noida,India",
            workDone: [
              "Domain: Healthcare",
              "•	As a part of a team, built real-time, scalable and secure web solutions used by a US Healthcare Insurance Client.",
              "•	Completed various projects over a period of 3 years working in a Agile project model. ",
              "•	Duties included developing and maintaining Web applications for client.",
              "•	Worked on projects by discussing requirements with clients, designing and developing solution, unit testing and debugging which resulted in successful release of code in higher environments.",
              "•	worked on GIT as a version control system.",
              "•	Deployed code in all environments (TEST/INT/QA/PROD) using CICD process of Microsoft Team Foundation Server (TFS). ",
              "•	Developed back-end solutions for web applications and APIs by using ASP.NET/WCF/MVC with C# as backend language.",
              "•	Performed testing on web services using tools SOAPUI and fiddler.",
              "•	Developed front-end solutions for web applications by using scripting languages that included HTML5, CSS3, JavaScript and AngularJS. ",
              "•	Worked on MySQL database to manage client’s data and execute business processes using stored procedures.",
              "•	Developed and maintained SSIS packages (SQL Server Integration Services) to build scheduled processes to perform ETL (Extraction, Transformation, Loading) operations on database. ",
              
              "Notable Achievements",
              "•	Optimized an existing client process by developing an automated logging solution in MySQL database which generated USD 14000 client savings per year.",
              "•	Awarded ‘Star of the Month’ for developing a defect- free code for a critical client project."
          ],
        },
        {
            position: "Intern",
            timeServed: "6 months",
            dates: "Jun 1,2014 - Dec 1,2014",
            company: "NIIT Technology Ltd",
            place: "Noida,India",
            workDone: [
              "•	worked in a team on a project for German client","•	Main responsibility was to get training from mentor on core java", 
            ],
        },
    ];
    return (
        <div
            style={{
                background: "linear-gradient(#efeaea,#c3c0c0, #9e9e9e)",
                padding: "2em",
            }}
        >
            <h1>What I have been upto</h1>
            <div className="desc">
                My interest in logical thinking and analysis brought me in
                software industry. After completing 4 years of graduation in
                Information Technology, I started working as System Engineer in
                a globally known firm. The experience of working direcly with
                clients for more than three years helped me grow from a fresh
                graduate to an IT professional. New trends and technologies in
                this industry tempted me to get back into school and learn more.
                Currently, I am a Web and Mobile Application Development student
                at Langara College, Vancouver. This course is not only
                professional, but, it also keeps me updated with trending
                technologies. Can not wait to join a new team and get back to
                work this september.
            </div>
            <div className="ExpWrapper">
                {workExp.map((exp) => (
                    <Experience experience={exp} />
                ))}
            </div>
        </div>
    );
}

export default ExperienceContainer;
