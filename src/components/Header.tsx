import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header fixed top-0 left-0 right-0 bg-white bg-opacity-95 border-b border-gray-200 z-[1000] transition-all duration-300">
      <div className="container flex justify-between items-center py-4 px-5 md:py-3 md:px-4">
        <div className="logo">
          <h3 className="text-2xl font-bold text-gray-800 lg:text-xl xl:text-2xl">Portfolio</h3>
        </div>
        <nav className="nav flex gap-7 md:gap-4">
          <button onClick={() => scrollToSection('about')} className="nav-link bg-none border-none text-base font-medium text-gray-600 cursor-pointer py-2 px-4 rounded-md transition-all duration-300 no-underline hover:text-gray-800 hover:bg-gray-50 hover:-translate-y-px md:text-sm md:py-1.5 md:px-3">
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link bg-none border-none text-base font-medium text-gray-600 cursor-pointer py-2 px-4 rounded-md transition-all duration-300 no-underline hover:text-gray-800 hover:bg-gray-50 hover:-translate-y-px md:text-sm md:py-1.5 md:px-3">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link bg-none border-none text-base font-medium text-gray-600 cursor-pointer py-2 px-4 rounded-md transition-all duration-300 no-underline hover:text-gray-800 hover:bg-gray-50 hover:-translate-y-px md:text-sm md:py-1.5 md:px-3">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;