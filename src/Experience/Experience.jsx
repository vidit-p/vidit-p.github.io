import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';
import { FaBriefcase } from "react-icons/fa";

const experiences = [
    {
        title: "Research Assistant",
        company: "Purdue University",
        period: "Jan 2023 - present",
        description: "As a research assistant, I collaborated with a group of 4 other researchers to develop an algorithm and a platform" + 
        " to detect plagiarism in source code. I worked under the guidance of Dr. Andres Bejarano to develop and optimise greedy string tilling algorithm" + 
        " and work with Abstract Syntax Trees for this project. I was also involved in testing of our algorithm and compare the results with that" + 
        "of MOSS. For testing, I developed a Python script to get a result from MOSS and compared them with the results of our algorithm",
    },
    {
        title: "Undergraduate Teaching Assistant",
        company: "Purdue University",
        period: "Aug 2023 - present",
        description: "I worked as a UTA for the introductory CS class for freshmen CS 180 for the Fall 2023 semester. As a UTA, I was responsible" + 
        " for heading lab sessions uder a GTA and helping students in the labs. I was also responsible for monitoring discussion forums and helping" + 
        "students through them. For the Spring 2024 semester, I was a UTA for the introdutory C class CS 240. I was responsonle for heading lab" + 
        " sessions, grading code standard, attending lectures with the Professor and monitorring online discussion forums.",
    },
    // Add more experiences as needed
];

function Experience() {
    return (
    <div id="experience" className="experience">
            <h1>Experience</h1>
            <div className="experience-container">
                <VerticalTimeline animate={false} layout="1-column-left">
                    {experiences.map((exp, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={exp.period}
                            icon={<FaBriefcase />}
                            iconStyle={{ background: '#333', color: '#cccccc' }}
                            position="left" // Position all items on the left
                            contentArrowStyle={{ borderRight: '#f0f0f0' }} // Change the arrow color
                            >
                            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
                            <p>{exp.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Experience;
