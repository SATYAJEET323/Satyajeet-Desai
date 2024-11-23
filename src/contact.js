import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faProjectDiagram, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './contact.css'; // Add custom styles for the contact section


const Contact = () => {
  return (
    <section id="Contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-cards">
        <div className="contact-card">
          <a href="https://www.linkedin.com/in/satyajeet-desai323"  target="_blank" rel="noopener noreferrer">
            <div className="card-content">
              <i className="fab fa-linkedin"></i>
              <h3>LinkedIn</h3><br></br>
              {/* <p>Connect with me on LinkedIn</p> */}
            </div>
          </a>
        </div>

        <div className="contact-card">
          <a href="https://github.com/satyajeet323" target="_blank" rel="noopener noreferrer">
            <div className="card-content">
            <i className="fab fa-github"></i>
              <h3>GitHub</h3>
              {/* <p>Explore my repositories</p> */}
            </div>
          </a>
        </div>

        <div className="contact-card">
          <a href="mailto:sattudesai007@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="card-content">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              {/* <p>Send me an email</p> */}
            </div>
          </a>
        </div>
        <div className="contact-card">
          <a href="https://www.instagram.com/satyajeet_323" target="_blank" rel="noopener noreferrer">
            <div className="card-content">
              <i className="fab fa-instagram"></i>
              <h3>Instagram</h3>
              {/* <p>Follow me on Instagram</p> */}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
