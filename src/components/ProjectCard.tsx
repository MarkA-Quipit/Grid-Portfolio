import React, { useState } from 'react';
import './ProjectCard.css';

// Sample project data for the showcase
const showcaseProjects = [
  {
    id: 1,
    name: "E-Commerce App",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
  },
  {
    id: 2,
    name: "Social Platform",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
  },
  {
    id: 4,
    name: "Mobile Game",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
  },
  {
    id: 5,
    name: "AI Assistant",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
  }
];

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  size: 'large-vertical' | 'medium-horizontal' | 'small-square' | 'wide-horizontal';
  isImagePlaceholder?: boolean;
  imageSrc?: string;
  isPersonalSection?: boolean;
  personalName?: string;
  personalSummary?: string;
  isProjectShowcase?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  link, 
  size, 
  isImagePlaceholder, 
  imageSrc, 
  isPersonalSection, 
  personalName, 
  personalSummary,
  isProjectShowcase 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextProjects = () => {
    setCurrentIndex((prev) => (prev + 3) % showcaseProjects.length);
  };
  
  const prevProjects = () => {
    setCurrentIndex((prev) => (prev - 3 + showcaseProjects.length) % showcaseProjects.length);
  };
  
  const getCurrentProjects = () => {
    const projects = [];
    for (let i = 0; i < 3; i++) {
      projects.push(showcaseProjects[(currentIndex + i) % showcaseProjects.length]);
    }
    return projects;
  };

  if (isProjectShowcase) {
    return (
      <div className={`project-card ${size} project-showcase bg-transparent p-0 overflow-hidden rounded-lg shadow-none relative flex items-center`}>
        <button className="nav-arrow nav-arrow-left absolute top-0 bottom-0 bg-black bg-opacity-50 text-white border-none w-10 h-full rounded-none text-2xl font-bold cursor-pointer flex items-center justify-center transition-all duration-300 z-10 left-1.5 hover:bg-opacity-70 md:w-7.5 md:text-xl md:left-0" onClick={prevProjects}>
          &#8249;
        </button>
        <div className="showcase-container w-[calc(100%-80px)] h-full flex items-stretch justify-stretch mx-10 md:w-[calc(100%-60px)] md:mx-7.5">
          <div className="showcase-grid flex w-full h-full gap-0">
            {getCurrentProjects().map((project, index) => (
              <div key={`${project.id}-${currentIndex}-${index}`} className="showcase-item flex-1 flex flex-col cursor-pointer transition-all duration-300 border-r border-black border-opacity-10 h-full relative z-[1] last:border-r-0 hover:z-10 hover:shadow-lg">
                <div className="showcase-image w-full h-2/3 rounded-none overflow-hidden mb-0 shadow-none transition-shadow duration-300 hover:shadow-md">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                </div>
                <div className="showcase-name h-1/3 flex items-center justify-center text-xs font-semibold text-gray-800 text-center leading-tight break-words p-2 transition-all duration-300 hover:bg-white hover:bg-opacity-90 hover:text-gray-900 md:text-[0.7rem] md:p-1.5">{project.name}</div>
              </div>
            ))}
          </div>
        </div>
        <button className="nav-arrow nav-arrow-right absolute top-0 bottom-0 bg-black bg-opacity-50 text-white border-none w-10 h-full rounded-none text-2xl font-bold cursor-pointer flex items-center justify-center transition-all duration-300 z-10 right-1.5 hover:bg-opacity-70 md:w-7.5 md:text-xl md:right-0" onClick={nextProjects}>
          &#8250;
        </button>
      </div>
    );
  }

  if (isImagePlaceholder) {
    return (
      <div className={`project-card ${size} image-placeholder bg-gray-100 p-0 flex items-center justify-center rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300`}>
        <div className="image-container w-full h-full flex items-center justify-center overflow-hidden">
          <img 
            src={imageSrc || "https://via.placeholder.com/400x300/e0e0e0/666666?text=Sample+Image"} 
            alt="Sample placeholder" 
            className="placeholder-image w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    );
  }

  if (isPersonalSection) {
    return (
      <div className={`project-card ${size} personal-section flex items-center justify-center text-center rounded-lg p-5 md:p-3.5`}>
        <div className="personal-content relative z-[2] text-white p-5 md:p-3.5">
          <h2 className="personal-name text-3xl font-bold mb-4 leading-tight text-gray-100 md:text-2xl md:mb-3">{personalName || "Your Name"}</h2>
          <p className="personal-summary text-base leading-relaxed opacity-90 text-gray-300 m-0 md:text-sm">{personalSummary || "Brief personal summary goes here."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-card ${size} rounded-lg p-5 flex flex-col justify-end relative overflow-hidden transition-all duration-300 cursor-pointer shadow-[0_2px_15px_rgba(0,0,0,0.1)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] md:p-3.5 md:rounded-md`}>
      <div className="card-content relative z-[2] text-white">
        <h3 className={`card-title font-bold mb-3 leading-tight ${size === 'large-vertical' ? 'text-3xl mb-4 md:text-lg' : size === 'small-square' ? 'text-xl mb-2.5 md:text-lg' : 'text-2xl'} md:text-lg md:mb-2`}>{title}</h3>
        <p className={`card-description leading-relaxed opacity-90 ${size === 'large-vertical' ? 'text-lg mb-6 md:text-sm' : size === 'small-square' ? 'text-sm mb-3.5 md:text-sm' : 'text-base mb-5'} md:text-sm md:mb-3`}>{description}</p>
        <a href={link} className="card-link text-white no-underline font-semibold text-sm inline-flex items-center transition-all duration-300 border-b border-transparent hover:border-white hover:translate-x-1 md:text-xs">
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;