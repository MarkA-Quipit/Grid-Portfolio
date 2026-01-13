import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

interface FigmaProject {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  link: string;
}

interface FigmaProjectsProps {
  title?: string;
  description?: string;
}

const FigmaProjects: React.FC<FigmaProjectsProps> = ({
  title = "Figma Projects",
  description = ""
}) => {
  const figmaProjects: FigmaProject[] = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'Complete design system for online shopping with product catalogs, checkout flows, and user dashboards',
      thumbnail: '/images/figma-ecommerce.jpg',
      link: 'https://figma.com/file/ecommerce-platform'
    },
    {
      id: 2,
      name: 'SaaS Dashboard',
      description: 'Modern admin dashboard with data visualization, analytics charts, and user management interfaces',
      thumbnail: '/images/figma-dashboard.jpg',
      link: 'https://figma.com/file/saas-dashboard'
    },
    {
      id: 3,
      name: 'Mobile Banking App',
      description: 'iOS and Android banking app with secure authentication, transaction history, and payment features',
      thumbnail: '/images/figma-banking.jpg',
      link: 'https://figma.com/file/mobile-banking'
    },
    {
      id: 4,
      name: 'Food Delivery App',
      description: 'Restaurant discovery and food ordering app with real-time tracking and payment integration',
      thumbnail: '/images/figma-food-delivery.jpg',
      link: 'https://figma.com/file/food-delivery'
    },
    {
      id: 5,
      name: 'Design System Library',
      description: 'Comprehensive design system with components, tokens, typography, and brand guidelines',
      thumbnail: '/images/figma-design-system.jpg',
      link: 'https://figma.com/file/design-system'
    },
    {
      id: 6,
      name: 'Healthcare Portal',
      description: 'Patient management system with appointment scheduling, medical records, and telemedicine features',
      thumbnail: '/images/figma-healthcare.jpg',
      link: 'https://figma.com/file/healthcare-portal'
    },
    {
      id: 7,
      name: 'Learning Management',
      description: 'Educational platform with course creation, student progress tracking, and interactive learning tools',
      thumbnail: '/images/figma-lms.jpg',
      link: 'https://figma.com/file/learning-management'
    },
    {
      id: 8,
      name: 'Real Estate Platform',
      description: 'Property listing and management platform with search filters, virtual tours, and agent profiles',
      thumbnail: '/images/figma-real-estate.jpg',
      link: 'https://figma.com/file/real-estate'
    },
    {
      id: 9,
      name: 'Social Media App',
      description: 'Modern social networking app with posts, stories, messaging, and community features',
      thumbnail: '/images/figma-social-media.jpg',
      link: 'https://figma.com/file/social-media'
    },
    {
      id: 10,
      name: 'Fitness Tracker',
      description: 'Health and fitness app with workout plans, progress tracking, and nutrition monitoring',
      thumbnail: '/images/figma-fitness.jpg',
      link: 'https://figma.com/file/fitness-tracker'
    },
    {
      id: 11,
      name: 'Travel Booking',
      description: 'Travel planning platform with flight bookings, hotel reservations, and itinerary management',
      thumbnail: '/images/figma-travel.jpg',
      link: 'https://figma.com/file/travel-booking'
    },
    {
      id: 12,
      name: 'Crypto Trading',
      description: 'Cryptocurrency trading platform with portfolio management, market analysis, and secure transactions',
      thumbnail: '/images/figma-crypto.jpg',
      link: 'https://figma.com/file/crypto-trading'
    }
  ];

  return (
    <TooltipProvider delayDuration={300}>
      <div className="figma-projects rounded-lg border border-purple-500 border-opacity-40 p-3 sm:p-4 lg:p-5 flex flex-col relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:border-opacity-80 bg-gray-900 w-full h-full">
        <div className="figma-content relative z-[2] text-white h-full flex flex-col">
          {/* Title with horizontal lines on both sides */}
          <div className="mb-2 sm:mb-3 lg:mb-1 xl:mb-2 2xl:mb-3 flex items-center w-full">
            <div className="flex-1 h-px bg-gradient-to-l from-purple-400/50 to-transparent"></div>
            <h2 className="text-lg sm:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-purple-300 mx-2 sm:mx-4 lg:mx-2 xl:mx-3 2xl:mx-4">{title}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
          </div>
          {description && (
            <p className="figma-description leading-relaxed opacity-90 text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base mb-3 sm:mb-4 lg:mb-2 xl:mb-3 2xl:mb-4">{description}</p>
          )}
          
          {/* Figma projects carousel */}
          <div className="flex-1 relative min-h-0">
            <Carousel
              className="w-full h-full"
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
            >
              <CarouselContent className="h-full">
                {figmaProjects.slice(0, 6).map((project) => (
                  <CarouselItem key={project.id} className="basis-full lg:basis-1/2 h-full">
                    <div className="w-full h-full bg-gray-800 border border-purple-500/30 rounded-lg hover:bg-gray-700 transition-all duration-300 group cursor-pointer relative overflow-hidden p-4 flex flex-col justify-center items-center text-center">
                      {/* Figma icon */}
                      <div className="w-16 h-16 bg-purple-400 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15.5 2A8.5 8.5 0 0 0 7 10.5v3A8.5 8.5 0 0 0 15.5 22h3A8.5 8.5 0 0 0 27 13.5v-3A8.5 8.5 0 0 0 18.5 2h-3zM15.5 4h3A6.5 6.5 0 0 1 25 10.5v3A6.5 6.5 0 0 1 18.5 20h-3A6.5 6.5 0 0 1 9 13.5v-3A6.5 6.5 0 0 1 15.5 4z"/>
                        </svg>
                      </div>
                      
                      {/* Project info */}
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation buttons */}
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-gray-800/80 border border-gray-600 text-gray-300 rounded-full hover:bg-gray-700 hover:text-purple-300 transition-all duration-300" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-gray-800/80 border border-gray-600 text-gray-300 rounded-full hover:bg-gray-700 hover:text-purple-300 transition-all duration-300" />
            </Carousel>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default FigmaProjects;