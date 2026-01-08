import React, { useState, useEffect } from 'react';
import './ProjectCard.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

// Custom Project Dialog with External Info Card
const ProjectDialog: React.FC<{
  trigger: React.ReactNode;
  project?: any;
  title?: string;
  description?: string;
  link?: string;
  technologies?: string[];
}> = ({ trigger, project, title, description, link, technologies = ["React", "TypeScript", "Tailwind CSS", "Node.js"] }) => {
  const projectData = project || {
    name: title,
    description,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
    technologies,
    liveUrl: link,
    githubUrl: "https://github.com/user/sample-project"
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
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
                <span className="text-gray-300 text-sm">{project ? "3 months" : "2 months"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Team Size:</span>
                <span className="text-gray-300 text-sm">{project ? "4 developers" : "Solo project"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Platform:</span>
                <span className="text-gray-300 text-sm">{project ? "Web & Mobile" : "Web"}</span>
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
                  {project ? "Real-time Updates" : "Performance Optimized"}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  User Authentication
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  {project ? "API Integration" : "SEO Friendly"}
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
                  <span className="text-green-400 text-sm font-medium">&lt; {project ? "2s" : "1.5s"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Lighthouse Score:</span>
                  <span className="text-green-400 text-sm font-medium">{project ? "95" : "98"}/100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{project ? "Uptime:" : "Accessibility:"}</span>
                  <span className="text-green-400 text-sm font-medium">{project ? "99.9%" : "100/100"}</span>
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

// Sample project data for the showcase
const showcaseProjects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    image: "/images/smmc-front.png",
    description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
    liveUrl: "https://smmc-ecommerce.onrender.com",
    githubUrl: "https://github.com/anyunyay/ITB13-capstone.git"
  },
  {
    id: 2,
    name: "Deploying..",
    image: "/images/Default.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: 3,
    name: "Soon..",
    image: "/images/Default.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: ""
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
  // Array of Mark Quipit photos for cycling animation
  const markQuipitPhotos = [
    "/images/Mark-Quipit-Photo1.jpg",
    "/images/Mark-Quipit-Photo2.jpg",
    "/images/Mark-Quipit-Photo3.jpg"
  ];

  // Always call hooks at the top level
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Only set up the interval if this is an image placeholder
    if (isImagePlaceholder) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % markQuipitPhotos.length
        );
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isImagePlaceholder, markQuipitPhotos.length]);

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
                <ProjectDialog
                  project={project}
                  trigger={
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
                  }
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation buttons - invisible by default, 80% opaque on hover, full height */}
          <CarouselPrevious className="absolute left-0 top-32 h-full w-12 bg-gray-800/0 border-0 text-gray-300 rounded-none hover:bg-gray-800/80 hover:text-cyan-300 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:ring-offset-0 transition-all duration-300 opacity-0 hover:opacity-100 flex items-center justify-center" />
          <CarouselNext className="absolute right-0 top-32 h-full w-12 bg-gray-800/0 border-0 text-gray-300 rounded-none hover:bg-gray-800/80 hover:text-cyan-300 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:ring-offset-0 transition-all duration-300 opacity-0 hover:opacity-100 flex items-center justify-center" />
        </Carousel>
      </div>
    );
  }

  if (isImagePlaceholder) {
    return (
      <div className={`project-card ${size} image-placeholder bg-gray-900 border border-cyan-500 border-opacity-30 p-0 flex items-center justify-center rounded-lg hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 group relative`}>
        {/* Outside Bubbles - Larger bubbles floating around the photo */}
        <div className="absolute inset-0 pointer-events-none overflow-visible z-20">
          {/* Large Outside Bubbles */}
          <div className="absolute -top-8 -left-6 w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-100 group-hover:animate-[float_4s_ease-in-out_infinite]"></div>
          
          <div className="absolute -top-4 -right-8 w-10 h-10 bg-gradient-to-br from-purple-400/40 to-pink-500/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1200 delay-300 group-hover:animate-[float_3.5s_ease-in-out_infinite_0.5s]"></div>
          
          <div className="absolute -bottom-6 -left-8 w-14 h-14 bg-gradient-to-br from-teal-400/25 to-cyan-500/25 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-900 delay-200 group-hover:animate-[float_4.5s_ease-in-out_infinite_1s]"></div>
          
          <div className="absolute -bottom-8 -right-4 w-8 h-8 bg-gradient-to-br from-indigo-400/35 to-purple-500/35 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1100 delay-400 group-hover:animate-[float_3s_ease-in-out_infinite_1.5s]"></div>
          
          <div className="absolute top-1/2 -left-10 w-6 h-6 bg-gradient-to-br from-sky-400/40 to-blue-500/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-800 delay-150 group-hover:animate-[float_3.8s_ease-in-out_infinite_0.8s]"></div>
          
          <div className="absolute top-1/4 -right-6 w-9 h-9 bg-gradient-to-br from-violet-400/30 to-purple-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-350 group-hover:animate-[float_4.2s_ease-in-out_infinite_0.3s]"></div>
        </div>

        <div className="image-container w-full h-full flex items-center justify-center overflow-hidden relative">
          {markQuipitPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Mark Quipit Photo ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          
          {/* Inside Bubbles - Smaller, subtle bubbles within the photo */}
          <div className="absolute inset-0 pointer-events-none z-10">
            {/* Small Inside Bubbles */}
            <div className="absolute top-[15%] left-[20%] w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 delay-200 group-hover:animate-pulse"></div>
            
            <div className="absolute top-[25%] right-[25%] w-3 h-3 bg-cyan-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-800 delay-400 group-hover:animate-bounce"></div>
            
            <div className="absolute bottom-[35%] left-[30%] w-1.5 h-1.5 bg-blue-300/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 group-hover:animate-ping"></div>
            
            <div className="absolute top-[60%] right-[15%] w-2.5 h-2.5 bg-purple-300/35 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-500 group-hover:animate-pulse"></div>
            
            <div className="absolute bottom-[25%] right-[35%] w-2 h-2 bg-teal-300/45 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 delay-250 group-hover:animate-bounce"></div>
            
            <div className="absolute top-[45%] left-[15%] w-1 h-1 bg-sky-300/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-350 group-hover:animate-ping"></div>
            
            <div className="absolute top-[35%] right-[45%] w-2 h-2 bg-indigo-300/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150 group-hover:animate-pulse"></div>
            
            <div className="absolute bottom-[50%] left-[45%] w-1.5 h-1.5 bg-violet-300/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 delay-450 group-hover:animate-bounce"></div>
            
            {/* Floating subtle bubbles */}
            <div className="absolute top-[20%] left-[60%] w-2 h-2 bg-gradient-to-br from-cyan-300/20 to-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-900 delay-100 group-hover:animate-[float_2.5s_ease-in-out_infinite]"></div>
            
            <div className="absolute bottom-[40%] right-[20%] w-1.5 h-1.5 bg-gradient-to-br from-purple-300/25 to-pink-400/25 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-800 delay-300 group-hover:animate-[float_3s_ease-in-out_infinite_0.5s]"></div>
          </div>
          
          {/* Photo indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
            {markQuipitPhotos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-cyan-400 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isPersonalSection) {
    return (
      <div className={`project-card ${size} personal-section rounded-lg border border-cyan-500 border-opacity-40 p-5 flex flex-col justify-end relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 md:p-3.5 md:rounded-md bg-gray-900`}>
        <div className="card-content relative z-[2] text-white">
          {/* Name and Download CV Button - Aligned horizontally */}
          <div className="flex items-center mb-4 gap-4">
            <h2 className="text-5xl font-bold text-cyan-300 leading-tight">{personalName || "Your Name"}</h2>
            <a
              href="/file/MarkAldrin-Quipit-CV.pdf"
              download="MarkAldrin-Quipit-CV.pdf"
              className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
          <p className="card-description leading-relaxed opacity-90 text-md mb-5 md:text-md md:mb-3">
            I am a <span className="text-cyan-300 font-bold">full-stack developer</span> with hands-on experience building web applications using modern technologies such as React, Laravel, and MySQL. I enjoy building practical, user-centered applications and have created projects like eCommerce platforms, multi-role dashboards, and task management systems. I am also intrigued by AI engineering and continuously explore ways to enhance software solutions. I value clean code, structured development, and lifelong learning, using tools including AI responsibly—to improve productivity and problem-solving. I am adaptable, detail-oriented, and motivated to grow as a developer while contributing meaningful solutions to real-world problems.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ProjectDialog
      title={title}
      description={description}
      link={link}
      trigger={
        <div className={`project-card ${size} rounded-lg border border-cyan-500 border-opacity-40 p-5 flex flex-col justify-end relative overflow-hidden transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 md:p-3.5 md:rounded-md bg-gray-900`}>
          <div className="card-content relative z-[2] text-white">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-cyan-300">{title}</h2>
            </div>
            <p className={`card-description leading-relaxed opacity-90 ${size === 'large-vertical' ? 'text-lg mb-6 md:text-sm' : size === 'small-square' ? 'text-sm mb-3.5 md:text-sm' : 'text-base mb-5'} md:text-sm md:mb-3`}>{description}</p>
            <span className="card-link text-cyan-300 no-underline font-semibold text-sm inline-flex items-center transition-all duration-300 border-b border-transparent hover:border-cyan-300 hover:translate-x-1 hover:text-cyan-100 md:text-xs">
              View Project →
            </span>
          </div>
        </div>
      }
    />
  );
};

export default ProjectCard;