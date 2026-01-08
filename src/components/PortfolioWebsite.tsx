import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

interface PortfolioWebsiteProps {
  title?: string;
  description?: string;
  link?: string;
  technologies?: string[];
}

const PortfolioWebsite: React.FC<PortfolioWebsiteProps> = ({
  title = "Portfolio Website",
  description = "Responsive personal portfolio built with React and TypeScript",
  link = "#",
  technologies = ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
}) => {
  const projectData = {
    name: title,
    description,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=300&fit=crop",
    technologies,
    liveUrl: link,
    githubUrl: "https://github.com/user/portfolio-site"
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="portfolio-website rounded-lg border border-cyan-500 border-opacity-40 p-5 flex flex-col justify-end relative overflow-hidden transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 md:p-3.5 md:rounded-md">
          <div className="portfolio-content relative z-[2] text-white">
            <h3 className="portfolio-title font-bold mb-2.5 leading-tight text-xl md:text-lg md:mb-2">{title}</h3>
            <p className="portfolio-description leading-relaxed opacity-90 text-sm mb-3.5 md:text-sm md:mb-3">{description}</p>
            <span className="portfolio-link text-cyan-300 no-underline font-semibold text-sm inline-flex items-center transition-all duration-300 border-b border-transparent hover:border-cyan-300 hover:translate-x-1 hover:text-cyan-100 md:text-xs">
              View Project →
            </span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-gray-900 border border-cyan-500/30 text-white p-0 overflow-hidden">
        <div className="flex">
          {/* Main Project Content - Left Side */}
          <div className="flex-1">
            {/* Project Image - Enlarged and emphasized */}
            <div className="w-full h-96 overflow-hidden bg-gray-800">
              <img
                src={projectData.image}
                alt={projectData.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Content */}
            <div className="p-6">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl font-bold text-cyan-300 mb-3">
                  {projectData.name}
                </DialogTitle>
                <DialogDescription className="text-gray-300 text-base leading-relaxed">
                  {projectData.description}
                </DialogDescription>
              </DialogHeader>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projectData.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 border border-cyan-500/30 rounded-full text-sm text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Card - Right Side */}
          <div className="w-80 bg-gray-800 border-l border-cyan-500/30 p-6 space-y-4 relative">
            {/* Close button in top-right corner of Project Details card */}
            <DialogClose className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500 text-gray-400 hover:text-white transition-all duration-200 flex items-center justify-center text-sm font-bold">
              ×
            </DialogClose>
            
            <h4 className="text-xl font-bold text-cyan-300 mb-4">Project Details</h4>

            {/* Project Stats */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Status:</span>
                <span className="text-green-400 text-sm font-medium">Completed</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Duration:</span>
                <span className="text-gray-300 text-sm">2 months</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Team Size:</span>
                <span className="text-gray-300 text-sm">Solo project</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Platform:</span>
                <span className="text-gray-300 text-sm">Web</span>
              </div>
            </div>

            <hr className="border-gray-700" />

            {/* Key Features */}
            <div>
              <h5 className="text-lg font-semibold text-cyan-300 mb-3">Key Features</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Performance Optimized
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  User Authentication
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  SEO Friendly
                </li>
              </ul>
            </div>

            <hr className="border-gray-700" />

            {/* Performance Metrics */}
            <div>
              <h5 className="text-lg font-semibold text-cyan-300 mb-3">Performance</h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Load Time:</span>
                  <span className="text-green-400 text-sm font-medium">&lt; 1.5s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Lighthouse Score:</span>
                  <span className="text-green-400 text-sm font-medium">98/100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Accessibility:</span>
                  <span className="text-green-400 text-sm font-medium">100/100</span>
                </div>
              </div>
            </div>

            <hr className="border-gray-700" />

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-center"
              >
                View Live Project
              </a>
              <a
                href={projectData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-center"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioWebsite;