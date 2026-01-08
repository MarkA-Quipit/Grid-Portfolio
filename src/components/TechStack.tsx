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
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' }
  ];

  return (
    <TooltipProvider delayDuration={300}>
      <div className="tech-stack rounded-lg border border-cyan-500 border-opacity-40 p-5 flex flex-col relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 md:p-3.5 md:rounded-md bg-gray-900">
        <div className="tech-content relative z-[2] text-white h-full flex flex-col items-center justify-center text-center">
          {/* Title - Centered */}
          <div className="mb-3">
            <h2 className="text-2xl font-bold text-cyan-300">{title}</h2>
          </div>
          {description && (
            <p className="tech-description leading-relaxed opacity-90 text-base mb-4 md:text-sm md:mb-3">{description}</p>
          )}
          
          {/* Technology logos - Centered horizontally within container */}
          <div className="flex items-center justify-center px-2 py-2">
            <div className="flex items-center justify-center gap-3 flex-wrap max-w-full">
              {technologies.map((tech, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-200 cursor-pointer flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-7 h-7 object-contain"
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
                    className="z-[9999] bg-gray-800 border border-gray-600 text-white px-2 py-1 text-sm rounded shadow-lg"
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