import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';

interface FigmaProject {
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

interface FigmaProjectsProps {
  title?: string;
  description?: string;
}

const FigmaProjects: React.FC<FigmaProjectsProps> = ({
  title = "Design Projects",
  description = ""
}) => {
  const figmaProjects: FigmaProject[] = [
    {
      id: 1,
      name: 'Mango Avenue',
      description: 'Complete Figma mobile design for Mango Avenue, featuring fully interactable screens for browsing, product selection, and checkout flows.',
      category: 'Mobile App Design',
      tools: ['Figma'],
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
    <div className="figma-projects rounded-lg border border-purple-500 border-opacity-40 p-3 sm:p-4 lg:p-5 flex flex-col relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:border-opacity-80 bg-gray-900 w-full h-full max-h-full">
      {/* Title with horizontal line */}
      <div className="mb-3 sm:mb-4 lg:mb-2 xl:mb-3 2xl:mb-4 flex items-center flex-shrink-0">
        <h2 className="text-lg sm:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-purple-300 mr-2 sm:mr-4 lg:mr-2 xl:mr-3 2xl:mr-4 whitespace-nowrap">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
      </div>
      {description && (
        <p className="figma-description leading-relaxed opacity-90 text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base mb-3 sm:mb-4 lg:mb-2 xl:mb-3 2xl:mb-4 flex-shrink-0">{description}</p>
      )}

      {/* Figma projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-3 lg:gap-1.5 xl:gap-2 2xl:gap-4 flex-1">
        {figmaProjects.map((project) => (
          <Popover key={project.id}>
            <PopoverTrigger asChild>
              <button className="figma-project-card bg-gray-800 rounded-md border border-purple-500/20 p-2 sm:p-3 lg:p-1.5 xl:p-2 2xl:p-3 hover:border-purple-500/40 transition-all duration-300 cursor-pointer hover:bg-gray-750 w-full text-left group">
                <div className="flex items-start space-x-2 lg:space-x-1.5 xl:space-x-2">
                  {/* Figma icon */}
                  <div className="w-8 h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-300 transition-colors duration-300">
                    <svg className="w-4 h-4 lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.5 2A8.5 8.5 0 0 0 7 10.5v3A8.5 8.5 0 0 0 15.5 22h3A8.5 8.5 0 0 0 27 13.5v-3A8.5 8.5 0 0 0 18.5 2h-3zM15.5 4h3A6.5 6.5 0 0 1 25 10.5v3A6.5 6.5 0 0 1 18.5 20h-3A6.5 6.5 0 0 1 9 13.5v-3A6.5 6.5 0 0 1 15.5 4z"/>
                    </svg>
                  </div>
                  
                  {/* Project info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm lg:text-xs xl:text-sm font-bold text-white leading-tight group-hover:text-purple-300 transition-colors duration-300 mb-1 lg:mb-0.5 xl:mb-1">
                      {project.name}
                    </h3>
                    <p className="text-xs lg:text-xs xl:text-xs text-purple-300 font-medium mb-1 lg:mb-0.5 xl:mb-1">
                      {project.category}
                    </p>
                    <p className="text-xs lg:text-xs xl:text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-tight line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent 
              side="bottom" 
              align="start"
              sideOffset={8}
              className="w-72 sm:w-80 bg-gray-800 border border-purple-500/30 text-white p-3 sm:p-4 shadow-lg z-50"
            >
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{project.name}</h3>
                  <p className="text-purple-300 font-medium text-sm">
                    {project.category}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Description</p>
                    <p className="text-white text-sm leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Tools Used</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.tools.map((tool, index) => (
                        <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full text-xs border border-purple-500/30">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide">Duration</p>
                      <p className="text-white text-sm">{project.duration}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide">Status</p>
                      <p className={`text-sm font-medium ${
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
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-300 text-center text-sm inline-block"
                    >
                      View Prototype
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gray-700 hover:bg-gray-600 border border-purple-500/30 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-300 text-center text-sm inline-block flex items-center justify-center gap-2"
                    >
                      View in Figma
                    </a>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
};

export default FigmaProjects;