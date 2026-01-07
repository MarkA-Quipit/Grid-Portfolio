import React from 'react';
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
  if (isProjectShowcase) {
    return (
      <div className={`project-card ${size} project-showcase`}>
        <div className="showcase-container">
          <div className="showcase-grid">
            {showcaseProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="showcase-item">
                <div className="showcase-image">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="showcase-name">{project.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isImagePlaceholder) {
    return (
      <div className={`project-card ${size} image-placeholder`}>
        <div className="image-container">
          <img 
            src={imageSrc || "https://via.placeholder.com/400x300/e0e0e0/666666?text=Sample+Image"} 
            alt="Sample placeholder" 
            className="placeholder-image"
          />
        </div>
      </div>
    );
  }

  if (isPersonalSection) {
    return (
      <div className={`project-card ${size} personal-section`}>
        <div className="personal-content">
          <h2 className="personal-name">{personalName || "Your Name"}</h2>
          <p className="personal-summary">{personalSummary || "Brief personal summary goes here."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-card ${size}`}>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className="card-link">
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;