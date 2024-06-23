import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1>Contact</h1>
      <h3>I'd Love To Connect With You.</h3>
      <p>Let me get to know more about you.</p>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope size={50} className="contact-icon" />
          <h4>Email Me At</h4>
          <p>pate1759@purdue.edu</p>
        </div>
        <div className="contact-item">
          <FaLinkedin size={50} className="contact-icon" />
          <h4>Let's Connect</h4>
          <p><a href="https://www.linkedin.com/in/vidit-patel-770766239" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        </div>
      </div>
      <footer className="contact-footer">
        &copy; {new Date().getFullYear()} Vidit Patel | Design Inspired by <a href="https://styleshout.com/" target="_blank" 
        rel="noopener noreferrer">Styleshout</a>
      </footer>
    </div>
  );
};

export default Contact;
