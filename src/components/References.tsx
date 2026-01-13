import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';

interface Reference {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
}

const References: React.FC = () => {
  const references: Reference[] = [
    {
      name: "Prof. Joseph Cartagenas",
      title: "Asst. Professor",
      company: "University of Cabuyao",
      email: "joseph.cartagenas@gmail.com",
      phone: "09182943201"
    },
    {
      name: "Ms. Kier Panollera",
      title: "Assistant Manager",
      company: "SM Investments Corporation",
      email: "kier.panollera@sminvestments.com",
      phone: "09056373376"
    }
  ];

  return (
    <div className="references-section rounded-lg border border-cyan-500 border-opacity-40 p-3 sm:p-4 lg:p-5 flex flex-col relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 bg-gray-900 w-full h-full">
      {/* Title with horizontal line */}
      <div className="mb-3 sm:mb-4 lg:mb-2 xl:mb-3 2xl:mb-4 flex items-center">
        <h3 className="text-2xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-cyan-300 mr-2 sm:mr-4 lg:mr-2 xl:mr-3 2xl:mr-4 leading-tight">References</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
      </div>

      {/* Responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-3 lg:gap-1.5 xl:gap-2 2xl:gap-4 flex-1">
        {references.map((reference, index) => (
          <Popover key={index}>
            <PopoverTrigger asChild>
              <button className="reference-card bg-gray-800 rounded-md border border-cyan-500/20 p-2 sm:p-3 lg:p-1.5 xl:p-2 2xl:p-3 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer hover:bg-gray-750 w-full text-left">
                <div className="space-y-1 lg:space-y-0.5 xl:space-y-1">
                  <h3 className="text-lg sm:text-xl lg:text-base xl:text-lg font-bold text-white leading-tight">{reference.name}</h3>
                  <p className="text-cyan-300 font-medium text-base sm:text-lg lg:text-sm xl:text-base leading-snug">{reference.title}</p>
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent 
              side="bottom" 
              align="start"
              sideOffset={8}
              className="w-72 sm:w-80 bg-gray-800 border border-cyan-500/30 text-white p-3 sm:p-4 shadow-lg z-50"
            >
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{reference.name}</h3>
                  <p className="text-cyan-300 font-medium text-lg leading-snug">
                    {reference.title}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide leading-tight">Organization</p>
                    <p className="text-white text-base leading-snug">{reference.company}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide leading-tight">Email</p>
                    <a
                      href={`mailto:${reference.email}`}
                      className="text-cyan-300 hover:text-cyan-200 transition-colors duration-200 text-base underline leading-snug"
                    >
                      {reference.email}
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide leading-tight">Phone</p>
                    <a
                      href={`tel:${reference.phone}`}
                      className="text-cyan-300 hover:text-cyan-200 transition-colors duration-200 text-base underline leading-snug"
                    >
                      {reference.phone}
                    </a>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
};

export default References;