import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  size: 'large-vertical' | 'medium-horizontal' | 'small-square' | 'wide-horizontal';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, size }) => {
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