import React from 'react';
import './ProjectCard.css';

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
  personalSummary 
}) => {
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