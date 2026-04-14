import React, { useState, useEffect, useRef } from 'react';
import './ProjectCard.css';
import {
  Dialog,
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

  // Dynamic project details configuration
  const projectStats = [
    { label: "Status", value: "Completed", color: "text-green-400" },
    { label: "Duration", value: project ? "6 ½ months" : "6 months", color: "text-gray-300" },
    { label: "Team Size", value: project ? "3 developers" : "Solo project", color: "text-gray-300" },
    { label: "Platform", value: project ? "Web (Desktop & Mobile)" : "Web", color: "text-gray-300" }
  ];

  const keyFeatures = [
    "Secure authentication and authorization",
    project ? "Multi-role dashboards (Farmers, Customers, Admin, Logistics)" : "Performance Optimized",
    "Order placement, tracking, and management system",
    project ? "Product management and inventory tracking" : "SEO Friendly",
    "Reporting and analytics for admins to monitor sales, deliveries, and user activity",
    project ? "Data export reports in PDF and CSV formats for easy record-keeping and analysis" : "SEO Friendly",
    "Responsive design for seamless desktop and mobile use",
    project ? "Efficient handling of perishable goods" : "SEO Friendly"
  ];

  const technologiesUsed = [
    "React",
    "Laravel",
    "MySql",
    "PHP",
    "Inertia.js"
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl max-h-[90vh] bg-gray-900 border border-cyan-500/30 text-white p-0 overflow-hidden">
        <div className="flex flex-col xl:flex-row max-h-[90vh] overflow-y-auto xl:overflow-y-hidden">
          {/* Main Project Content - Top on mobile/tablet, Left on desktop */}
          <div className="flex-1 overflow-y-auto xl:max-h-[90vh]">
            {/* Project Image - Responsive height */}
            <div className="w-full h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 overflow-hidden bg-gray-800 flex-shrink-0">
              <img
                src={projectData.image}
                alt={projectData.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Content */}
            <div className="p-4 sm:p-5 lg:p-6 xl:p-7">
              <DialogHeader className="mb-4 sm:mb-5 lg:mb-6">
                <DialogTitle className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-cyan-300 mb-2 sm:mb-3 leading-tight">
                  {projectData.name}
                </DialogTitle>
                <DialogDescription className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed mb-4 sm:mb-5 lg:mb-6">
                  {projectData.description}
                </DialogDescription>
              </DialogHeader>

              {/* Technologies Used - Responsive spacing */}
              <div className="mb-4 sm:mb-5 lg:mb-6">
                <h5 className="text-base sm:text-lg lg:text-xl font-semibold text-cyan-300 mb-2 sm:mb-3 leading-tight">Technologies Used:</h5>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {technologiesUsed.map((tech, index) => (
                    <span key={index} className="bg-gray-800 text-cyan-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-cyan-500/30 leading-snug">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Project Details Card - Bottom on mobile/tablet, Right on desktop */}
          <div className="w-full xl:w-80 bg-gray-800 border-t xl:border-t-0 xl:border-l border-cyan-500/30 p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4 relative overflow-y-auto xl:max-h-[90vh]">
            
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-300 mb-3 sm:mb-4 leading-tight">Project Details</h4>

            {/* Project Stats */}
            <div className="space-y-2 sm:space-y-3">
              {projectStats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs sm:text-sm leading-tight">{stat.label}:</span>
                  <span className={`${stat.color} text-xs sm:text-sm font-medium leading-snug`}>{stat.value}</span>
                </div>
              ))}
            </div>

            <hr className="border-gray-700" />

            {/* Key Features */}
            <div>
              <h5 className="text-base sm:text-lg lg:text-xl font-semibold text-cyan-300 mb-2 sm:mb-3 leading-tight">Key Features</h5>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                {keyFeatures.slice(0, 6).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-gray-700" />

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 sm:gap-3 pt-2">
              <a
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 sm:py-2.5 px-4 rounded-lg transition-colors duration-300 text-center text-sm sm:text-base leading-snug"
              >
                View Live Project
              </a>
              <a
                href={projectData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 sm:py-2.5 px-4 rounded-lg transition-colors duration-300 text-center text-sm sm:text-base leading-snug"
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
    name: "Agricultural E-commerce System",
    image: "/images/smmc-front.png",
    description: "Developed an agricultural eCommerce platform that connects farmers, customers, and logistics staff. The system features multi-role access, product management, order tracking, and secure transactions. I handled both the frontend and backend development using React and Laravel, creating a user-friendly and responsive interface while ensuring smooth database operations with MySQL. The platform streamlines the buying and selling of perishable goods, improving efficiency for both sellers and buyers.",
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
  isPersonalSection?: boolean;
  personalName?: string;
  isProjectShowcase?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  size,
  isImagePlaceholder,
  isPersonalSection,
  personalName,
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
  const carouselRef = useRef<HTMLDivElement>(null);

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

  // Auto-scroll for project showcase
  useEffect(() => {
    if (isProjectShowcase && carouselRef.current) {
      const carousel = carouselRef.current;
      let currentIndex = 0;

      const autoScroll = () => {
        if (carousel) {
          currentIndex = (currentIndex + 1) % showcaseProjects.length;
          const scrollAmount = carousel.scrollWidth / showcaseProjects.length * currentIndex;
          carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
          });
        }
      };

      const interval = setInterval(autoScroll, 10000); // Auto-scroll every 10 seconds

      return () => clearInterval(interval);
    }
  }, [isProjectShowcase]);

  // Navigation functions for carousel
  const scrollToNext = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = carousel.scrollWidth / showcaseProjects.length;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      
      // If at the end, go back to start
      if (carousel.scrollLeft >= maxScroll - 10) {
        carousel.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        carousel.scrollBy({
          left: itemWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollToPrev = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = carousel.scrollWidth / showcaseProjects.length;
      
      // If at the start, go to end
      if (carousel.scrollLeft <= 10) {
        carousel.scrollTo({
          left: carousel.scrollWidth - carousel.clientWidth,
          behavior: 'smooth'
        });
      } else {
        carousel.scrollBy({
          left: -itemWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  if (isProjectShowcase) {
    return (
      <div className={`project-card ${size} project-showcase relative overflow-hidden w-full h-full`}>
        {/* Simple CSS-based carousel */}
        <div 
          ref={carouselRef}
          className="w-full h-full flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {showcaseProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="flex-shrink-0 w-full lg:w-1/3 h-full snap-start"
            >
              {project.id === 2 || project.id === 3 ? (
                // Non-clickable version for projects 2 and 3
                <div className={`w-full h-full bg-gray-900 ${index < showcaseProjects.length - 1 ? 'border-r border-cyan-500/30' : ''} hover:bg-gray-800 transition-all duration-300 group relative overflow-hidden cursor-not-allowed`}>
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
                    <div className="absolute inset-0 flex items-center justify-center text-center px-2 sm:px-4 py-3 z-20">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-tight drop-shadow-2xl text-shadow-lg">
                        {project.name}
                      </h3>
                    </div>

                    {/* Accent border on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-500 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  </div>
                </div>
              ) : (
                // Clickable version for other projects
                <ProjectDialog
                  project={project}
                  trigger={
                    <div className={`w-full h-full bg-gray-900 ${index < showcaseProjects.length - 1 ? 'border-r border-cyan-500/30' : ''} hover:bg-gray-800 transition-all duration-300 group cursor-pointer relative overflow-hidden`}>
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
                        <div className="absolute inset-0 flex items-center justify-center text-center px-2 sm:px-4 py-3 z-20">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight drop-shadow-2xl text-shadow-lg">
                            {project.name}
                          </h3>
                        </div>

                        {/* Accent border on hover */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                      </div>
                    </div>
                  }
                />
              )}
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={scrollToPrev}
          className="absolute left-2 sm:left-3 lg:left-1 top-1/2 -translate-y-1/2 lg:top-0 lg:translate-y-0 h-9 sm:h-10 lg:h-full w-9 sm:w-10 lg:w-10 bg-gray-800/70 lg:bg-gray-800/0 border border-gray-600 lg:border-0 text-gray-300 rounded-full lg:rounded-none hover:bg-gray-800/90 hover:text-cyan-300 transition-all duration-300 opacity-90 lg:opacity-0 hover:opacity-100 flex items-center justify-center z-30"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollToNext}
          className="absolute right-2 sm:right-3 lg:right-1 top-1/2 -translate-y-1/2 lg:top-0 lg:translate-y-0 h-9 sm:h-10 lg:h-full w-9 sm:w-10 lg:w-10 bg-gray-800/70 lg:bg-gray-800/0 border border-gray-600 lg:border-0 text-gray-300 rounded-full lg:rounded-none hover:bg-gray-800/90 hover:text-cyan-300 transition-all duration-300 opacity-90 lg:opacity-0 hover:opacity-100 flex items-center justify-center z-30"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  }

  if (isImagePlaceholder) {
    return (
      <div className={`project-card ${size} image-placeholder bg-gray-900 border border-cyan-500 border-opacity-30 p-0 flex items-center justify-center rounded-lg hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 group relative w-full h-full`}>
        {/* Outside Bubbles - Responsive sizing */}
        <div className="absolute inset-0 pointer-events-none overflow-visible z-20">
          {/* Large Outside Bubbles - Responsive sizes */}
          <div className="absolute -top-4 sm:-top-6 lg:-top-8 -left-3 sm:-left-4 lg:-left-6 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-100 group-hover:animate-[float_4s_ease-in-out_infinite]"></div>
          
          <div className="absolute -top-2 sm:-top-3 lg:-top-4 -right-4 sm:-right-6 lg:-right-8 w-5 sm:w-7 lg:w-10 h-5 sm:h-7 lg:h-10 bg-gradient-to-br from-purple-400/40 to-pink-500/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1200 delay-300 group-hover:animate-[float_3.5s_ease-in-out_infinite_0.5s]"></div>
          
          <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 -left-4 sm:-left-6 lg:-left-8 w-7 sm:w-10 lg:w-14 h-7 sm:h-10 lg:h-14 bg-gradient-to-br from-teal-400/25 to-cyan-500/25 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-900 delay-200 group-hover:animate-[float_4.5s_ease-in-out_infinite_1s]"></div>
          
          <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-2 sm:-right-3 lg:-right-4 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-gradient-to-br from-indigo-400/35 to-purple-500/35 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1100 delay-400 group-hover:animate-[float_3s_ease-in-out_infinite_1.5s]"></div>
          
          <div className="absolute top-1/2 -left-5 sm:-left-7 lg:-left-10 w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6 bg-gradient-to-br from-sky-400/40 to-blue-500/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-800 delay-150 group-hover:animate-[float_3.8s_ease-in-out_infinite_0.8s]"></div>
          
          <div className="absolute top-1/4 -right-3 sm:-right-4 lg:-right-6 w-4 sm:w-6 lg:w-9 h-4 sm:h-6 lg:h-9 bg-gradient-to-br from-violet-400/30 to-purple-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-350 group-hover:animate-[float_4.2s_ease-in-out_infinite_0.3s]"></div>
        </div>

        <div className="image-container w-full h-full flex items-center justify-center overflow-hidden relative">
          {markQuipitPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Mark Quipit ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          
          {/* Inside Bubbles - Responsive sizes */}
          <div className="absolute inset-0 pointer-events-none z-10">
            {/* Small Inside Bubbles - Responsive sizes */}
            <div className="absolute top-[15%] left-[20%] w-1 sm:w-1.5 lg:w-2 h-1 sm:h-1.5 lg:h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 delay-200 group-hover:animate-pulse"></div>
            
            <div className="absolute top-[25%] right-[25%] w-1.5 sm:w-2 lg:w-3 h-1.5 sm:h-2 lg:h-3 bg-cyan-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-800 delay-400 group-hover:animate-bounce"></div>
            
            <div className="absolute bottom-[35%] left-[30%] w-1 sm:w-1.5 lg:w-1.5 h-1 sm:h-1.5 lg:h-1.5 bg-blue-300/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 group-hover:animate-ping"></div>
            
            <div className="absolute top-[60%] right-[15%] w-1.5 sm:w-2 lg:w-2.5 h-1.5 sm:h-2 lg:h-2.5 bg-purple-300/35 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-500 group-hover:animate-pulse"></div>
            
            <div className="absolute bottom-[25%] right-[35%] w-1 sm:w-1.5 lg:w-2 h-1 sm:h-1.5 lg:h-2 bg-teal-300/45 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 delay-250 group-hover:animate-bounce"></div>
            
            <div className="absolute top-[45%] left-[15%] w-0.5 sm:w-1 lg:w-1 h-0.5 sm:h-1 lg:h-1 bg-sky-300/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-350 group-hover:animate-ping"></div>
            
            <div className="absolute top-[35%] right-[45%] w-1 sm:w-1.5 lg:w-2 h-1 sm:h-1.5 lg:h-2 bg-indigo-300/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150 group-hover:animate-pulse"></div>
            
            <div className="absolute bottom-[50%] left-[45%] w-1 sm:w-1.5 lg:w-1.5 h-1 sm:h-1.5 lg:h-1.5 bg-violet-300/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 delay-450 group-hover:animate-bounce"></div>
            
            {/* Floating subtle bubbles - Responsive sizes */}
            <div className="absolute top-[20%] left-[60%] w-1 sm:w-1.5 lg:w-2 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-br from-cyan-300/20 to-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-900 delay-100 group-hover:animate-[float_2.5s_ease-in-out_infinite]"></div>
            
            <div className="absolute bottom-[40%] right-[20%] w-1 sm:w-1.5 lg:w-1.5 h-1 sm:h-1.5 lg:h-1.5 bg-gradient-to-br from-purple-300/25 to-pink-400/25 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-800 delay-300 group-hover:animate-[float_3s_ease-in-out_infinite_0.5s]"></div>
          </div>
          
          {/* Photo indicators - Responsive positioning */}
          <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-30">
            {markQuipitPhotos.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 sm:w-2 lg:w-2 h-1.5 sm:h-2 lg:h-2 rounded-full transition-all duration-300 ${
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
      <div className={`project-card ${size} personal-section rounded-lg border border-cyan-500 border-opacity-40 p-3 sm:p-4 md:p-5 lg:p-3 xl:p-4 2xl:p-5 flex flex-col justify-end relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 bg-gray-900 w-full h-full`}>
        <div className="card-content relative z-[2] text-white">
          {/* Name and Download CV Button - Responsive layout */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 lg:mb-2 xl:mb-3 2xl:mb-4 gap-2 sm:gap-3 lg:gap-1 xl:gap-2 2xl:gap-3">
            <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-cyan-300 leading-tight">{personalName || "Your Name"}</h1>
            <a
              href="/file/MarkAldrin-Quipit-CV.pdf"
              download="MarkAldrin-Quipit-CV.pdf"
              className="bg-cyan-600 hover:bg-cyan-700 text-white text-xs sm:text-sm lg:text-xs xl:text-sm font-semibold px-3 sm:px-4 lg:px-2 xl:px-3 2xl:px-4 py-1.5 sm:py-2 lg:py-1 xl:py-1.5 2xl:py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-1 sm:gap-2 lg:gap-1 xl:gap-2 flex-shrink-0 self-start sm:self-auto leading-snug whitespace-nowrap"
            >
              <svg className="w-3 sm:w-4 lg:w-3 xl:w-4 h-3 sm:h-4 lg:h-3 xl:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
          <p className="card-description leading-relaxed opacity-90 text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg mb-0">
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
        <div className={`project-card ${size} rounded-lg border border-cyan-500 border-opacity-40 p-3 sm:p-4 lg:p-5 flex flex-col justify-end relative overflow-hidden transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 bg-gray-900 w-full h-full`}>
          <div className="card-content relative z-[2] text-white">
            <div className="mb-3 sm:mb-4 lg:mb-2 xl:mb-3 2xl:mb-4">
              <h3 className="text-2xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-cyan-300 leading-tight">{title}</h3>
            </div>
            <p className={`card-description leading-relaxed opacity-90 ${size === 'large-vertical' ? 'text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-xl mb-4 sm:mb-5 lg:mb-3 xl:mb-4 2xl:mb-6' : size === 'small-square' ? 'text-sm sm:text-base lg:text-sm xl:text-base mb-2 sm:mb-3 lg:mb-1 xl:mb-2 2xl:mb-3' : 'text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-xl mb-3 sm:mb-4 lg:mb-2 xl:mb-3 2xl:mb-5'}`}>{description}</p>
            <span className="card-link text-cyan-300 no-underline font-semibold text-base sm:text-lg lg:text-base xl:text-lg inline-flex items-center transition-all duration-300 border-b border-transparent hover:border-cyan-300 hover:translate-x-1 hover:text-cyan-100 leading-snug">
              View Project →
            </span>
          </div>
        </div>
      }
    />
  );
};

export default ProjectCard;