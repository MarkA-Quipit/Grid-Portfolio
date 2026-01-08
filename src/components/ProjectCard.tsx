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
    name: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Social Network",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Mobile Game",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "AI Assistant",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Task Manager",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    name: "Portfolio Site",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    name: "Weather App",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop"
  },
  {
    id: 9,
    name: "Chat Application",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop"
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
      <div className={`project-card ${size} project-showcase relative overflow-hidden`}>
        <Carousel
          className="w-full h-full"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="h-full -ml-0">
            {showcaseProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-0 basis-1/3 h-full">
                <div className="w-full h-full bg-gray-900 border-r border-cyan-500/30 last:border-r-0 hover:bg-gray-800 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

                  {/* Full height image */}
                  <div className="w-full h-full overflow-hidden bg-gray-800 relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                    {/* Overlaid title text */}
                    <div className="absolute inset-0 flex items-center justify-center text-center px-4 py-3 z-20">
                      <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight drop-shadow-2xl text-shadow-lg">
                        {project.name}
                      </h3>
                    </div>

                    {/* Accent border on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation buttons with tech styling */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/90 border border-gray-600 text-gray-300 w-8 h-8 rounded hover:bg-gray-700 hover:border-cyan-500 hover:text-cyan-300 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:ring-offset-0 transition-all duration-300 backdrop-blur-sm" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/90 border border-gray-600 text-gray-300 w-8 h-8 rounded hover:bg-gray-700 hover:border-cyan-500 hover:text-cyan-300 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:ring-offset-0 transition-all duration-300 backdrop-blur-sm" />
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