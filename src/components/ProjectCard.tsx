import React from 'react';
import './ProjectCard.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

// Sample project data for the showcase
const showcaseProjects = [
  {
    id: 1,
    name: "E-Commerce App",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
  },
  {
    id: 2,
    name: "Social Platform",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
  },
  {
    id: 4,
    name: "Mobile Game",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
  },
  {
    id: 5,
    name: "AI Assistant",
    image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
  }
];

interface ProjectCardProps {
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

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  link, 
  size, 
  isImagePlaceholder, 
  imageSrc, 
  isPersonalSection, 
  personalName, 
  personalSummary,
  isProjectShowcase 
}) => {

  if (isProjectShowcase) {
    return (
      <div className={`project-card ${size} project-showcase`}>
        <Carousel 
          className="w-full h-full absolute inset-0"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 3,
          }}
        >
          <CarouselContent className="h-full ml-0">
            {showcaseProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-0 basis-1/3 h-full">
                <div className="showcase-item w-full h-full flex flex-col cursor-pointer transition-all duration-300 border-r border-cyan-500 border-opacity-30 last:border-r-0 hover:z-10 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] relative bg-gray-800 hover:bg-gray-750">
                  <div className="showcase-image w-full flex-shrink-0 overflow-hidden bg-gray-900 border-b border-cyan-500 border-opacity-20" style={{ height: '66.666667%' }}>
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-contain transition-all duration-300 hover:scale-105 hover:brightness-110" 
                    />
                  </div>
                  <div className="showcase-name w-full flex-shrink-0 flex items-center justify-center text-xs font-semibold text-cyan-100 text-center leading-tight break-words p-2 transition-all duration-300 hover:bg-cyan-500 hover:bg-opacity-20 hover:text-cyan-300" style={{ height: '33.333333%' }}>
                    {project.name}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-1 top-1/2 -translate-y-1/2 bg-gray-800 border border-cyan-500 text-cyan-400 w-8 h-8 rounded-none hover:bg-cyan-500 hover:text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0 z-20 transition-all duration-300" />
          <CarouselNext className="absolute right-1 top-1/2 -translate-y-1/2 bg-gray-800 border border-cyan-500 text-cyan-400 w-8 h-8 rounded-none hover:bg-cyan-500 hover:text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0 z-20 transition-all duration-300" />
        </Carousel>
      </div>
    );
  }

  if (isImagePlaceholder) {
    return (
      <div className={`project-card ${size} image-placeholder bg-gray-800 border border-cyan-500 border-opacity-30 p-0 flex items-center justify-center rounded-lg hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300`}>
        <div className="image-container w-full h-full flex items-center justify-center overflow-hidden">
          <img 
            src={imageSrc || "https://via.placeholder.com/400x300/e0e0e0/666666?text=Sample+Image"} 
            alt="Sample placeholder" 
            className="placeholder-image w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    );
  }

  if (isPersonalSection) {
    return (
      <div className={`project-card ${size} personal-section flex items-center justify-center text-center rounded-lg border border-purple-500 border-opacity-50 p-5 md:p-3.5`}>
        <div className="personal-content relative z-[2] text-white p-5 md:p-3.5">
          <h2 className="personal-name text-3xl font-bold mb-4 leading-tight text-purple-300 md:text-2xl md:mb-3">{personalName || "Your Name"}</h2>
          <p className="personal-summary text-base leading-relaxed opacity-90 text-purple-100 m-0 md:text-sm">{personalSummary || "Brief personal summary goes here."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-card ${size} rounded-lg border border-cyan-500 border-opacity-40 p-5 flex flex-col justify-end relative overflow-hidden transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 md:p-3.5 md:rounded-md`}>
      <div className="card-content relative z-[2] text-white">
        <h3 className={`card-title font-bold mb-3 leading-tight ${size === 'large-vertical' ? 'text-3xl mb-4 md:text-lg' : size === 'small-square' ? 'text-xl mb-2.5 md:text-lg' : 'text-2xl'} md:text-lg md:mb-2`}>{title}</h3>
        <p className={`card-description leading-relaxed opacity-90 ${size === 'large-vertical' ? 'text-lg mb-6 md:text-sm' : size === 'small-square' ? 'text-sm mb-3.5 md:text-sm' : 'text-base mb-5'} md:text-sm md:mb-3`}>{description}</p>
        <a href={link} className="card-link text-cyan-300 no-underline font-semibold text-sm inline-flex items-center transition-all duration-300 border-b border-transparent hover:border-cyan-300 hover:translate-x-1 hover:text-cyan-100 md:text-xs">
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;