import React from "react";
import "./About.css";
import profileImage from '../Assets/me.jpg'; // Replace with the correct path to your profile image

const skillsData = [
    { name: 'JavaScript/React', level: 90 },
    { name: 'C and C++', level: 90 },
    { name: 'SQL', level: 85},
    { name: 'Java', level: 85 },
    { name: 'Python', level: 80 },
];


function About() {
    return (
        <div id="about" className="about-container">
            <h1>About</h1>
            <h3>Hi there! Let me introduce myself</h3>
            <div className="introduction">
                <img src={profileImage} alt="Profile" className="profile-image" />
                <div className="intro-text">
                    <p>
                        I am a student in Purdue University's class of 2026 studying Computer Science. I am passionate about 
                        software development, systems engineering and research. I have experience in full-stack web development, 
                        and data analysis. I am always looking for new opportunities to learn and grow!
                    </p>
                </div>
            </div>
            <div className="details">
                <div className="profile-section">
                    <h5>SKILLS</h5>
                    <div className="skills-section">
                        {skillsData.map((skill, index) => (
                            <div className="skill" key={index}>
                                <span className="skill-name">{skill.name}</span>
                                <div className="skill-bar-container">
                                    <div className="skill-bar">
                                        <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                                    </div>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hobbies-section">
                    <h5>HOBBIES</h5>
                        
                        <ul className="hobbies-list">
                            <li><h6>Travelling</h6>I enjoy exploring new destinations and experiencing different cultures. Some of 
                            my favorite places are Edinburgh and Seqouia National Park!</li>
                            <li><h6>Sports</h6>I'm an avid sports enthusiast. I love playing soccer, basketball, and pickleball! 
                            I am also a huge fan of Arsenal, Detroit Lions and Los Angeles Lakers</li>
                            <li><h6>Fitness</h6>I enjoy going to the gym regularly and maintaining a healthy lifestyle</li>                        
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
