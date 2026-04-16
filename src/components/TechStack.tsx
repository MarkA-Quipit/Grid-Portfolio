import React, { useEffect, useRef, useState } from 'react';
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
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || window.innerWidth < 1024) return;

    let animationId: number;
    let scrollSpeed = 0.5; // pixels per frame

    const autoScroll = () => {
      if (!isDragging && !isHovering && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Seamless infinite loop - reset when reaching 1/3 of the way
        const itemWidth = scrollContainer.scrollWidth / 3;
        if (scrollContainer.scrollLeft >= itemWidth) {
          scrollContainer.scrollLeft -= itemWidth;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, [isDragging, isHovering]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  const handleIconMouseEnter = () => {
    // Clear any pending leave timeout
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    
    // Stop scrolling immediately
    setIsHovering(true);
  };

  const handleIconMouseLeave = () => {
    // Clear any existing leave timeout
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    
    // Wait 1 second before resuming scroll
    leaveTimeoutRef.current = setTimeout(() => {
      setIsHovering(false);
      leaveTimeoutRef.current = null;
    }, 1000);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Triple the technologies for seamless infinite scroll
  const infiniteTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <TooltipProvider delayDuration={300}>
      <div className="tech-stack rounded-lg border border-cyan-500 border-opacity-40 pt-3 px-3 pb-0 sm:pt-4 sm:px-4 sm:pb-0 md:pt-5 md:px-5 md:pb-0 lg:pt-3 lg:px-3 lg:pb-0 xl:pt-4 xl:px-4 xl:pb-0 2xl:pt-5 2xl:px-5 2xl:pb-0 flex flex-col relative transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 bg-gray-900 w-full h-full" style={{ overflow: 'visible' }}>
        <div className="tech-content relative z-[2] text-white h-full flex flex-col text-center min-h-0" style={{ overflow: 'visible' }}>
          {/* Title with horizontal lines on both sides */}
          <div className="mb-2 flex items-center w-full flex-shrink-0">
            <div className="flex-1 h-px bg-gradient-to-l from-cyan-400/50 to-transparent"></div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-cyan-300 mx-2 sm:mx-3 lg:mx-2 xl:mx-2 2xl:mx-3 leading-tight whitespace-nowrap">{title}</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
          </div>
          {description && (
            <p className="tech-description leading-relaxed opacity-90 text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg mb-2 sm:mb-3 lg:mb-2 xl:mb-3 2xl:mb-4">{description}</p>
          )}
          
          {/* Technology logos */}
          <div className="flex items-center justify-center flex-1 min-h-0 relative" style={{ overflow: 'visible' }}>
            {/* Mobile/Tablet: Wrapped grid */}
            <div className="lg:hidden flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 justify-center items-center py-1 pb-3">
              {technologies.map((tech, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-lg bg-white/10 border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-200 cursor-pointer flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-xs font-bold text-white">${tech.name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="top" 
                    sideOffset={8}
                    className="z-[99999] bg-gray-800 border border-cyan-500/30 text-white p-3 rounded-lg shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <p className="font-semibold text-base leading-tight">{tech.name}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            {/* Desktop: Infinite scrolling carousel with drag */}
            <div 
              ref={scrollRef}
              className={`hidden lg:flex overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex gap-2 xl:gap-2 2xl:gap-2.5 py-1">
                {infiniteTechnologies.map((tech, index) => (
                  <Tooltip key={`${tech.name}-${index}`}>
                    <TooltipTrigger asChild>
                      <div 
                        className="w-10 xl:w-11 2xl:w-12 h-10 xl:h-11 2xl:h-12 rounded-lg bg-white/10 border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-200 cursor-pointer flex items-center justify-center flex-shrink-0 backdrop-blur-sm select-none"
                        onMouseEnter={handleIconMouseEnter}
                        onMouseLeave={handleIconMouseLeave}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-6 xl:w-7 2xl:w-7 h-6 xl:h-7 2xl:h-7 object-contain pointer-events-none"
                          draggable="false"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<span class="text-xs font-bold text-white">${tech.name.charAt(0)}</span>`;
                          }}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      sideOffset={8}
                      className="z-[99999] bg-gray-800 border border-cyan-500/30 text-white p-3 rounded-lg shadow-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <p className="font-semibold text-base leading-tight">{tech.name}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default TechStack;