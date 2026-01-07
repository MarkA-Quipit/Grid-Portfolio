import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

interface Project {
  id: number;
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

const ProjectGrid: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack React application with payment integration and admin dashboard",
      link: "#",
      size: "large-vertical",
      isImagePlaceholder: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      link: "#",
      size: "medium-horizontal",
      isPersonalSection: true,
      personalName: "Alex Johnson",
      personalSummary: "Full-stack developer passionate about creating intuitive user experiences and scalable web applications. Experienced in React, TypeScript, and modern development practices."
    },
    {
      id: 3,
      title: "Project Showcase",
      description: "Featured projects with interactive sliding gallery",
      link: "#",
      size: "medium-horizontal",
      isProjectShowcase: true
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
    <div className="grid grid-cols-3 grid-rows-[1fr_1fr_auto] gap-2.5 w-full h-full max-w-[calc(100vw-20px)] max-h-[calc(100vh-20px)] lg:grid-cols-2 lg:gap-2 lg:max-w-[calc(100vw-16px)] lg:max-h-[calc(100vh-16px)] md:grid-cols-1 md:grid-rows-[repeat(6,1fr)] md:gap-1.5 md:max-w-[calc(100vw-16px)] md:max-h-[calc(100vh-16px)]">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
          size={project.size}
          isImagePlaceholder={project.isImagePlaceholder}
          imageSrc={project.imageSrc}
          isPersonalSection={project.isPersonalSection}
          personalName={project.personalName}
          personalSummary={project.personalSummary}
          isProjectShowcase={project.isProjectShowcase}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;