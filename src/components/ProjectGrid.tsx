import React from 'react';
import ProjectCard from './ProjectCard';
import TechStack from './TechStack';
import DesignProjects from './DesignProjects';
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
  isPersonalSection?: boolean;
  personalName?: string;
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
      personalName: "Mark Aldrin M. Quipit"
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
    <div className="responsive-grid-container w-full h-screen overflow-hidden p-3 sm:p-4 md:p-6 lg:p-6 xl:p-10 2xl:p-14">
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
            isPersonalSection={project.isPersonalSection}
            personalName={project.personalName}
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
        
        {/* Design Projects - Independent Component */}
        <DesignProjects 
          title="Design Projects"
          description=""
        />
        
        {/* Social Footer - Independent Component */}
        <SocialFooter />
      </div>

      {/* Mobile and Tablet Layout (below lg) - Scrollable */}
      <div className="lg:hidden flex flex-col gap-3 sm:gap-3 md:gap-4 w-full pb-4">
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
          />
        </div>

        {/* Image Placeholder - Second on mobile */}
        <div className="w-full aspect-square sm:aspect-[4/3] flex-shrink-0">
          <ProjectCard
            key={projects[0].id}
            title={projects[0].title}
            description={projects[0].description}
            link={projects[0].link}
            size="small-square"
            isImagePlaceholder={projects[0].isImagePlaceholder}
          />
        </div>

        {/* Project Showcase - Third on mobile */}
        <div className="w-full flex-shrink-0">
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

        {/* Design Projects - Fifth on mobile */}
        <div className="w-full flex-shrink-0">
          <DesignProjects 
            title="Design Projects"
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