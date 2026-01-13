import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface TechStackProps {
  title?: string;
  description?: string;
}

const TechStack: React.FC<TechStackProps> = ({
  title = "Tech Stack",
  description = ""
}) => {
  const technologies = [
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Inertia.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg' }, // Using Nuxt as closest alternative
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' }
  ];

  return (
    <TooltipProvider delayDuration={300}>
      <div className="tech-stack rounded-lg border border-cyan-500 border-opacity-40 p-3 sm:p-4 lg:p-5 flex flex-col relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 bg-gray-900 w-full h-full">
        <div className="tech-content relative z-[2] text-white h-full flex flex-col text-center min-h-0">
          {/* Title with horizontal lines on both sides */}
          <div className="mb-2 sm:mb-3 lg:mb-1 xl:mb-2 2xl:mb-3 flex items-center w-full">
            <div className="flex-1 h-px bg-gradient-to-l from-cyan-400/50 to-transparent"></div>
            <h3 className="text-2xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-cyan-300 mx-2 sm:mx-4 lg:mx-2 xl:mx-3 2xl:mx-4 leading-tight">{title}</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
          </div>
          {description && (
            <p className="tech-description leading-relaxed opacity-90 text-base sm:text-lg lg:text-sm xl:text-base 2xl:text-lg mb-3 sm:mb-4 lg:mb-2 xl:mb-3 2xl:mb-4">{description}</p>
          )}
          
          {/* Technology logos - Responsive grid */}
          <div className="flex items-center justify-center px-1 sm:px-2 py-1 sm:py-2 lg:px-1 lg:py-1 xl:px-2 xl:py-2 flex-1">
            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-11 gap-2 sm:gap-3 lg:gap-1.5 xl:gap-2 2xl:gap-3 max-w-full">
              {technologies.map((tech, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div className="w-8 sm:w-10 lg:w-8 xl:w-10 2xl:w-12 h-8 sm:h-10 lg:h-8 xl:h-10 2xl:h-12 rounded-lg bg-white/10 border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-200 cursor-pointer flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-5 sm:w-6 lg:w-5 xl:w-6 2xl:w-7 h-5 sm:h-6 lg:h-5 xl:h-6 2xl:h-7 object-contain"
                        onError={(e) => {
                          // Fallback to a generic icon if the image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-xs font-bold text-white">${tech.name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="top" 
                    sideOffset={8}
                    className="z-[9999] bg-gray-800 border border-gray-600 text-white px-2 py-1 text-sm rounded shadow-lg leading-tight"
                  >
                    <p className="font-medium">{tech.name}</p>
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

export default TechStack;