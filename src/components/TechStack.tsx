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
    <TooltipProvider>
      <div className="tech-stack rounded-lg border border-cyan-500 border-opacity-40 p-5 flex items-center justify-start relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 md:p-3.5 md:rounded-md">
        <div className="tech-content relative z-[2] text-white text-left">
          <h3 className="tech-title font-bold mb-4 leading-tight text-2xl md:text-lg md:mb-3">{title}</h3>
          {description && (
            <p className="tech-description leading-relaxed opacity-90 text-base mb-6 md:text-sm md:mb-4">{description}</p>
          )}
          
          {/* Technology logos in horizontal line */}
          <div className="flex items-center justify-start gap-4 overflow-hidden">
            {technologies.map((tech, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="w-14 h-14 rounded-lg bg-white/10 border border-white/20 hover:scale-110 hover:bg-white/20 transition-all duration-200 cursor-pointer flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        // Fallback to a generic icon if the image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<span class="text-sm font-bold text-white">${tech.name.charAt(0)}</span>`;
                      }}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default TechStack;