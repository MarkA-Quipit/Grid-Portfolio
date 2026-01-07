import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <p>Let's work together on your next project</p>
          </div>
          <div className="footer-section">
            <div className="contact-links">
              <a href="mailto:hello@example.com" className="contact-link">
                Email
              </a>
              <a href="https://linkedin.com" className="contact-link">
                LinkedIn
              </a>
              <a href="https://github.com" className="contact-link">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;