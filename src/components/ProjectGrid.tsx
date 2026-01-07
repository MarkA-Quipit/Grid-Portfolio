import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  size: 'large-vertical' | 'medium-horizontal' | 'small-square' | 'wide-horizontal';
}

const ProjectGrid: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack React application with payment integration and admin dashboard",
      link: "#",
      size: "large-vertical"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      link: "#",
      size: "medium-horizontal"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather app with location-based forecasts",
      link: "#",
      size: "medium-horizontal"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive personal portfolio built with React and TypeScript",
      link: "#",
      size: "small-square"
    },
    {
      id: 5,
      title: "Mobile Game",
      description: "HTML5 canvas game with touch controls and leaderboard",
      link: "#",
      size: "small-square"
    },
    {
      id: 6,
      title: "Data Visualization Platform",
      description: "Interactive charts and analytics dashboard for business intelligence with real-time data processing",
      link: "#",
      size: "wide-horizontal"
    },
    {
      id: 7,
      title: "Inventory Management System",
      description: "Comprehensive inventory tracking with automated reordering and supplier management",
      link: "#",
      size: "medium-horizontal"
    }
  ];

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
          size={project.size}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;