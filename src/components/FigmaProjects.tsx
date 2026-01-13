import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface FigmaProject {
  name: string;
  description: string;
  thumbnail: string;
  link: string;
}

interface FigmaProjectsProps {
  title?: string;
  description?: string;
}

const FigmaProjects: React.FC<FigmaProjectsProps> = ({
  title = "Figma Projects",
  description = ""
}) => {
  const figmaProjects: FigmaProject[] = [
    {
      name: 'E-Commerce UI Kit',
      description: 'Complete design system for online shopping platforms',
      thumbnail: '/images/figma-project-1.jpg',
      link: '#'
    },
    {
      name: 'Dashboard Design',
      description: 'Admin dashboard with data visualization components',
      thumbnail: '/images/figma-project-2.jpg',
      link: '#'
    },
    {
      name: 'Mobile App Wireframes',
      description: 'iOS and Android app wireframes and prototypes',
      thumbnail: '/images/figma-project-3.jpg',
      link: '#'
    },
    {
      name: 'Landing Page Design',
      description: 'Modern landing page with conversion optimization',
      thumbnail: '/images/figma-project-4.jpg',
      link: '#'
    }
  ];

  return (
    <TooltipProvider delayDuration={300}>
      <div className="figma-projects rounded-lg border border-purple-500 border-opacity-40 p-3 sm:p-4 lg:p-5 flex flex-col relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:border-opacity-80 bg-gray-900 w-full h-full">
        <div className="figma-content relative z-[2] text-white h-full flex flex-col">
          {/* Title with horizontal lines on both sides */}
          <div className="mb-2 sm:mb-3 lg:mb-1 xl:mb-2 2xl:mb-3 flex items-center w-full">
            <div className="flex-1 h-px bg-gradient-to-l from-purple-400/50 to-transparent"></div>
            <h2 className="text-lg sm:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-purple-300 mx-2 sm:mx-4 lg:mx-2 xl:mx-3 2xl:mx-4">{title}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
          </div>
          {description && (
            <p className="figma-description leading-relaxed opacity-90 text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base mb-3 sm:mb-4 lg:mb-2 xl:mb-3 2xl:mb-4">{description}</p>
          )}
          
          {/* Figma projects grid */}
          <div className="flex-1 flex items-center justify-center px-1 sm:px-2 py-1 sm:py-2 lg:px-1 lg:py-1 xl:px-2 xl:py-2">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-1.5 xl:gap-2 2xl:gap-3 max-w-full w-full">
              {figmaProjects.map((project, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <a
                      href={project.link}
                      className="group relative aspect-square rounded-lg bg-white/10 border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-200 cursor-pointer flex items-center justify-center flex-shrink-0 backdrop-blur-sm overflow-hidden"
                    >
                      {/* Placeholder for project thumbnail */}
                      <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                        <div className="text-center p-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 mx-auto mb-1 bg-purple-400 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M15.5 2A8.5 8.5 0 0 0 7 10.5v3A8.5 8.5 0 0 0 15.5 22h3A8.5 8.5 0 0 0 27 13.5v-3A8.5 8.5 0 0 0 18.5 2h-3zM15.5 4h3A6.5 6.5 0 0 1 25 10.5v3A6.5 6.5 0 0 1 18.5 20h-3A6.5 6.5 0 0 1 9 13.5v-3A6.5 6.5 0 0 1 15.5 4z"/>
                            </svg>
                          </div>
                          <div className="text-xs font-medium text-purple-200 leading-tight">{project.name}</div>
                        </div>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="top" 
                    sideOffset={8}
                    className="z-[9999] bg-gray-800 border border-gray-600 text-white px-2 py-1 text-sm rounded shadow-lg max-w-xs"
                  >
                    <p className="font-medium">{project.name}</p>
                    <p className="text-xs text-gray-300 mt-1">{project.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default FigmaProjects;