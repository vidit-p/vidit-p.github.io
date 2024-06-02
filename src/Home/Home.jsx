import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home() {
    return (
        <div id="home" className='home-container'>
            <div>
                <h1>Vidit Patel</h1>
                <p>Student | Developer | Researcher</p>
                <div className='social-links'>
                    <a href="https://github.com/vidit-p" target="_blank" ><FaGithub size={32}/></a>
                    <a href="mailto:vidit5904@gmail.com" target="_blank" ><FaEnvelope size={32}/></a>
                    <a href="https://www.linkedin.com/in/vidit-patel-770766239/" target="_blank" ><FaLinkedin size={32}/></a>
                </div>
                
            </div>       

        </div>
    );
}

export default Home;
