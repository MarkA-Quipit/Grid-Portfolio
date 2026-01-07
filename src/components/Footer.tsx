import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-800 text-white pt-12 pb-5 mt-auto md:pt-10" id="contact">
      <div className="container">
        <div className="footer-content grid grid-cols-2 gap-10 mb-7 md:grid-cols-1 md:gap-7 md:text-center">
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Get In Touch</h3>
            <p className="text-gray-400 text-base leading-relaxed">Let's work together on your next project</p>
          </div>
          <div className="footer-section">
            <div className="contact-links flex gap-6 justify-end items-center md:justify-center md:flex-wrap md:gap-4">
              <a href="mailto:hello@example.com" className="contact-link text-gray-100 no-underline font-medium py-2.5 px-5 border-2 border-transparent rounded-md transition-all duration-300 hover:text-blue-400 hover:border-blue-400 hover:-translate-y-0.5 md:py-2 md:px-4 md:text-sm">
                Email
              </a>
              <a href="https://linkedin.com" className="contact-link text-gray-100 no-underline font-medium py-2.5 px-5 border-2 border-transparent rounded-md transition-all duration-300 hover:text-blue-400 hover:border-blue-400 hover:-translate-y-0.5 md:py-2 md:px-4 md:text-sm">
                LinkedIn
              </a>
              <a href="https://github.com" className="contact-link text-gray-100 no-underline font-medium py-2.5 px-5 border-2 border-transparent rounded-md transition-all duration-300 hover:text-blue-400 hover:border-blue-400 hover:-translate-y-0.5 md:py-2 md:px-4 md:text-sm">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom border-t border-gray-700 pt-5 text-center">
          <p className="text-gray-500 text-sm">&copy; 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;