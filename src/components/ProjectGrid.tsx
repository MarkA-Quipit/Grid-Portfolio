import React from 'react';
import ProjectCard from './ProjectCard';
import TechStack from './TechStack';
import References from './References';
import SocialFooter from './SocialFooter';
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
      personalName: "Mark Aldrin M. Quipit",
      personalSummary: "I am a full-stack developer with hands-on experience building web applications using modern technologies such as React, Laravel, and MySQL. I enjoy building practical, user-centered applications and have created projects like eCommerce platforms, multi-role dashboards, and task management systems. I am also intrigued by AI engineering and continuously explore ways to enhance software solutions. I value clean code, structured development, and lifelong learning, using tools including AI responsibly—to improve productivity and problem-solving. I am adaptable, detail-oriented, and motivated to grow as a developer while contributing meaningful solutions to real-world problems."
    },
    {
      id: 3,
      title: "Project Showcase",
      description: "Featured projects with interactive sliding gallery",
      link: "#",
      size: "medium-horizontal",
      isProjectShowcase: true
    }
  ];

  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-2.5 w-screen h-screen p-16">
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
      
      {/* References - Independent Component */}
      <References />
      
      {/* Tech Stack - Independent Component */}
      <TechStack 
        title="Tech Stack"
        description=""
      />
      
      {/* Social Footer - Independent Component */}
      <SocialFooter />
    </div>
  );
};

export default ProjectGrid;