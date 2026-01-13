import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';

interface DesignProject {
  id: number;
  name: string;
  description: string;
  category: string;
  tools: string[];
  duration: string;
  status: string;
  thumbnail: string;
  link: string;
  prototypeLink: string;
}

interface DesignProjectsProps {
  title?: string;
  description?: string;
}

const DesignProjects: React.FC<DesignProjectsProps> = ({
  title = "Design Projects",
  description = ""
}) => {
  const designProjects: DesignProject[] = [
    {
      id: 1,
      name: 'Mango Avenue',
      description: 'Complete Figma mobile design for Mango Avenue, featuring fully interactable screens for browsing, product selection, and checkout flows.',
      category: 'Mobile App Design',
      tools: ['Figma', 'Auto Layout', 'Components', 'Animated', 'Prototyping'],
      duration: '2 Months',
      status: 'Completed',
      thumbnail: '/images/figma-dashboard.jpg',
      link: 'https://www.figma.com/design/e8rp8CUkahuw9V4Z49q8L5/HCI-HI-FI?node-id=0-1&t=Qr8SB6UcBGbdbys6-1',
      prototypeLink: 'https://www.figma.com/proto/e8rp8CUkahuw9V4Z49q8L5/HCI-HI-FI?node-id=0-1&t=Qr8SB6UcBGbdbys6-1'
    },
    {
      id: 2,
      name: 'Agricultural E-Commerce System – Initial Design',
      description: 'Complete Figma design system for an agricultural e-commerce platform, featuring admin and customer dashboards, product catalogs, order placement and tracking, and checkout flows.',
      category: 'Web Design',
      tools: ['Figma', 'Auto Layout', 'Components', 'Prototyping'],
      duration: '1 month',
      status: 'Completed',
      thumbnail: '/images/figma-ecommerce.jpg',
      link: 'https://www.figma.com/design/btTxWyahoxnDvU35iCJeDe/Capstone-UI?node-id=0-1&t=y8IOpHej7uXN4Zf3-1',
      prototypeLink: 'https://www.figma.com/proto/btTxWyahoxnDvU35iCJeDe/Capstone-UI?node-id=0-1&t=y8IOpHej7uXN4Zf3-1'
    }
  ];

  return (
    <div className="design-projects rounded-lg border border-cyan-500 border-opacity-40 p-3 sm:p-4 lg:p-5 flex flex-col relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 bg-gray-900 w-full h-full">
      <div className="design-content relative z-[2] text-white h-full flex flex-col text-center min-h-0">
        {/* Title with horizontal lines on both sides */}
        <div className="mb-2 flex items-center w-full">
          <div className="flex-1 h-px bg-gradient-to-l from-cyan-400/50 to-transparent"></div>
          <h3 className="text-2xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-cyan-300 mx-2 sm:mx-4 lg:mx-2 xl:mx-3 2xl:mr-4 leading-tight">{title}</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
        </div>
        {description && (
          <p className="design-description leading-relaxed opacity-90 text-base sm:text-lg lg:text-sm xl:text-base 2xl:text-lg mb-3 sm:mb-4 lg:mb-2 xl:mb-3 2xl:mb-4">{description}</p>
        )}

        {/* Design projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-3 lg:gap-1.5 xl:gap-2 2xl:gap-4 flex-1 w-full items-start">
          {designProjects.map((project) => (
            <Popover key={project.id}>
              <PopoverTrigger asChild>
                <button className="design-project-card bg-gray-800 rounded-md border border-cyan-500/20 p-2 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer hover:bg-gray-750 w-full text-left group">
                  <div className="flex items-center space-x-2 lg:space-x-1.5 xl:space-x-2 w-full">
                    {/* Design icon */}
                    <div className="w-8 h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8 bg-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-300 transition-colors duration-300">
                      <svg className="w-4 h-4 lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5zM21 15a2 2 0 00-2-2h-4a2 2 0 00-2 2v2a4 4 0 004 4h2a2 2 0 002-2v-2z" />
                      </svg>
                    </div>
                    
                    {/* Project info */}
                    <div className="flex-1 min-w-0">
                      <h5 className="text-lg sm:text-xl lg:text-base xl:text-lg font-semibold text-white leading-tight group-hover:text-cyan-300 transition-colors duration-300 truncate">
                        {project.name}
                      </h5>
                      <h6 className="text-base sm:text-lg lg:text-sm xl:text-base text-cyan-300 font-medium leading-tight">
                        {project.category}
                      </h6>
                    </div>
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent 
                side="bottom" 
                align="start"
                sideOffset={8}
                className="w-72 sm:w-80 bg-gray-800 border border-cyan-500/30 text-white p-3 sm:p-4 shadow-lg z-50"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="space-y-0">
                    <h5 className="text-xl sm:text-2xl font-semibold text-white leading-tight">{project.name}</h5>
                    <h6 className="text-cyan-300 font-medium text-lg leading-tight">
                      {project.category}
                    </h6>
                  </div>
                  
                  <div className="space-y-2">
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide leading-tight">Description</p>
                      <p className="text-white text-base leading-relaxed">{project.description}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide leading-tight">Tools Used</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.tools.map((tool, index) => (
                          <span key={index} className="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full text-sm border border-cyan-500/30 leading-tight">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wide leading-tight">Duration</p>
                        <p className="text-white text-base leading-snug">{project.duration}</p>
                      </div>
                      
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wide leading-tight">Status</p>
                        <p className={`text-base font-medium leading-snug ${
                          project.status === 'Completed' ? 'text-green-400' : 
                          project.status === 'In Progress' ? 'text-yellow-400' : 'text-gray-400'
                        }`}>
                          {project.status}
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-2 space-y-2">
                      <a
                        href={project.prototypeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-300 text-center text-base leading-snug inline-block"
                      >
                        View Prototype
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gray-700 hover:bg-gray-600 border border-cyan-500/30 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-300 text-center text-base leading-snug inline-block flex items-center justify-center gap-2"
                      >
                        View Design File
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignProjects;