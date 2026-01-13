import React from 'react';
import ProjectCard from './ProjectCard';
import TechStack from './TechStack';
import FigmaProjects from './FigmaProjects';
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
      isImagePlaceholder: true,
      imageSrc: "/images/473652273_1272421347381392_8984096361405809779_n.jpg"
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
    <div className="responsive-grid-container w-full h-screen overflow-hidden p-4 sm:p-6 md:p-8 lg:p-8 xl:p-12 2xl:p-16">
      {/* Desktop Grid Layout (lg and above) - Fixed viewport height */}
      <div className="hidden lg:grid lg:grid-cols-6 lg:grid-rows-6 lg:gap-2 xl:gap-2.5 2xl:gap-3 lg:w-full lg:h-full">
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
        
        {/* Figma Projects - Independent Component */}
        <FigmaProjects 
          title="Figma Projects"
          description=""
        />
        
        {/* Social Footer - Independent Component */}
        <SocialFooter />
      </div>

      {/* Mobile and Tablet Layout (below lg) - Scrollable */}
      <div className="lg:hidden flex flex-col gap-4 sm:gap-6 w-full h-full overflow-y-auto">
        {/* Personal Section - First on mobile */}
        <div className="w-full flex-shrink-0">
          <ProjectCard
            key={projects[1].id}
            title={projects[1].title}
            description={projects[1].description}
            link={projects[1].link}
            size="wide-horizontal"
            isPersonalSection={projects[1].isPersonalSection}
            personalName={projects[1].personalName}
            personalSummary={projects[1].personalSummary}
          />
        </div>

        {/* Image Placeholder - Second on mobile */}
        <div className="w-full aspect-square sm:aspect-[4/3] md:aspect-[3/2] flex-shrink-0">
          <ProjectCard
            key={projects[0].id}
            title={projects[0].title}
            description={projects[0].description}
            link={projects[0].link}
            size="small-square"
            isImagePlaceholder={projects[0].isImagePlaceholder}
            imageSrc={projects[0].imageSrc}
          />
        </div>

        {/* Project Showcase - Third on mobile */}
        <div className="w-full aspect-[16/9] sm:aspect-[2/1] min-h-[200px] flex-shrink-0">
          <ProjectCard
            key={projects[2].id}
            title={projects[2].title}
            description={projects[2].description}
            link={projects[2].link}
            size="wide-horizontal"
            isProjectShowcase={projects[2].isProjectShowcase}
          />
        </div>

        {/* Tech Stack - Fourth on mobile */}
        <div className="w-full flex-shrink-0">
          <TechStack 
            title="Tech Stack"
            description=""
          />
        </div>

        {/* Figma Projects - Fifth on mobile */}
        <div className="w-full flex-shrink-0">
          <FigmaProjects 
            title="Figma Projects"
            description=""
          />
        </div>

        {/* References - Sixth on mobile */}
        <div className="w-full flex-shrink-0">
          <References />
        </div>

        {/* Social Footer - Last on mobile */}
        <div className="w-full flex-shrink-0">
          <SocialFooter />
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;