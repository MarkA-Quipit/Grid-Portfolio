import React, { useEffect, useState } from 'react';
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
  const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Prevent body scroll when popover is open
  useEffect(() => {
    if (openPopoverId !== null) {
      // Store scroll position
      const scrollY = window.scrollY;
      
      // Prevent scrolling on desktop
      document.body.style.overflow = 'hidden';
      
      // Prevent scrolling on mobile (iOS Safari fix)
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      
      // Prevent touch move events on mobile
      const preventScroll = (e: TouchEvent) => {
        // Allow scrolling within the popover content
        const target = e.target as HTMLElement;
        const popoverContent = target.closest('[role="dialog"]');
        if (!popoverContent) {
          e.preventDefault();
        }
      };
      
      document.addEventListener('touchmove', preventScroll, { passive: false });
      
      return () => {
        // Restore scrolling
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        
        // Remove touch event listener
        document.removeEventListener('touchmove', preventScroll);
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [openPopoverId]);

  const designProjects: DesignProject[] = [
    {
      id: 1,
      name: 'Mango Avenue',
      description: 'Complete Figma mobile design for Mango Avenue, featuring fully interactable screens for browsing, product selection, and checkout flows.',
      category: 'Mobile App Design',
      tools: ['Figma', 'Auto Layout', 'Components', 'Animated', 'Prototyping'],
      duration: '2 Months',
      status: 'Completed',
      thumbnail: '/images/Mango-Avenue-Logo.png',
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
      thumbnail: '/images/SMMC-Logo.png',
      link: 'https://www.figma.com/design/btTxWyahoxnDvU35iCJeDe/Capstone-UI?node-id=0-1&t=y8IOpHej7uXN4Zf3-1',
      prototypeLink: 'https://www.figma.com/proto/btTxWyahoxnDvU35iCJeDe/Capstone-UI?node-id=0-1&t=y8IOpHej7uXN4Zf3-1'
    }
  ];

  return (
    <div className="design-projects rounded-lg border border-cyan-500 border-opacity-40 p-3 sm:p-4 md:p-5 lg:p-3 xl:p-4 2xl:p-5 flex flex-col relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 bg-gray-900 w-full h-full">
      <div className="design-content relative z-[2] text-white h-full flex flex-col text-center min-h-0">
        {/* Title with horizontal lines on both sides */}
        <div className="mb-2 flex items-center w-full flex-shrink-0">
          <div className="flex-1 h-px bg-gradient-to-l from-cyan-400/50 to-transparent"></div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-cyan-300 mx-2 sm:mx-3 lg:mx-2 xl:mx-2 2xl:mx-3 leading-tight whitespace-nowrap">{title}</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
        </div>
        {description && (
          <p className="design-description leading-relaxed opacity-90 text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg mb-2 sm:mb-3 lg:mb-2 xl:mb-3 2xl:mb-4">{description}</p>
        )}

        {/* Design projects grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2 2xl:gap-2.5 flex-1 w-full items-start min-h-0">
          {designProjects.map((project) => (
            <Popover key={project.id} open={openPopoverId === project.id} onOpenChange={(open) => setOpenPopoverId(open ? project.id : null)}>
              <PopoverTrigger asChild>
                <button className="design-project-card bg-gray-800 rounded-md border border-cyan-500/20 p-2 sm:p-2.5 lg:p-2 xl:p-2.5 2xl:p-3 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer hover:bg-gray-750 w-full text-left group min-h-0 overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-1.5 xl:space-x-2 w-full min-w-0">
                    {/* Project logo */}
                    <div className="w-12 h-12 sm:w-9 sm:h-9 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white group-hover:bg-gray-100 transition-colors duration-300">
                      <img
                        src={project.thumbnail}
                        alt={`${project.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Project info */}
                    <div className="flex-1 min-w-0 overflow-hidden w-full">
                      <h5 className="text-base sm:text-lg md:text-xl lg:text-sm xl:text-base 2xl:text-lg font-semibold text-white leading-tight group-hover:text-cyan-300 transition-colors duration-300 overflow-hidden text-ellipsis whitespace-nowrap block w-full">
                        {project.name}
                      </h5>
                      <h6 className="text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base text-cyan-300 font-medium leading-tight overflow-hidden text-ellipsis whitespace-nowrap block w-full">
                        {project.category}
                      </h6>
                    </div>
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent 
                side={isDesktop ? "left" : "bottom"}
                align={isDesktop ? "start" : "center"}
                sideOffset={8}
                alignOffset={0}
                collisionPadding={20}
                avoidCollisions={true}
                className="w-[calc(100vw-2rem)] sm:w-80 max-w-sm bg-gray-800 border border-cyan-500/30 text-white p-3 sm:p-4 shadow-lg z-50"
              >
                <div className="space-y-2 sm:space-y-3">
                  {/* Header with title/subtitle on left and thumbnail on right */}
                  <div className="flex items-start gap-3">
                    <div className="flex-1 space-y-0">
                      <h5 className="text-xl sm:text-2xl font-semibold text-white leading-tight">{project.name}</h5>
                      <h6 className="text-cyan-300 font-medium text-lg leading-tight">
                        {project.category}
                      </h6>
                    </div>
                    
                    {/* Project thumbnail on the right */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                      <img
                        src={project.thumbnail}
                        alt={`${project.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
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