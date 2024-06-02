import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [navbarVisible, setNavbarVisible] = useState(true);
    const [navbarBackground, setNavbarBackground] = useState('transparent');
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 180) {
                setNavbarVisible(false);
            } else {
                setNavbarVisible(true);
            }

            if (scrollPosition > window.innerHeight) {
                setNavbarBackground('#333');
                setNavbarVisible(true);
            } else {
                setNavbarBackground('transparent');
            }
        };

        const sections = document.querySelectorAll('header > div');
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <nav className={`navbar ${!navbarVisible ? 'hidden' : ''}`} style={{ backgroundColor: navbarBackground }}>
            {console.log(activeSection)}
            <ul className="navbar-links">
                <li className={activeSection === 'home' ? 'active' : ''}><a href="#home">Home</a></li>
                <li className={activeSection === 'about' ? 'active' : ''}><a href="#about">About</a></li>
                <li className={activeSection === 'experience' ? 'active' : ''}><a href='#experience'>Experience</a></li>
                <li className={activeSection === 'projects' ? 'active' : ''}><a href="#projects">Projects</a></li>
                <li className={activeSection === 'contact' ? 'active' : ''}><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
