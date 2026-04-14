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
    <div className="references-section rounded-lg border border-cyan-500 border-opacity-40 pt-3 px-3 pb-3 sm:pt-4 sm:px-4 sm:pb-4 md:pt-5 md:px-5 md:pb-5 lg:pt-2 lg:px-2 lg:pb-0 xl:pt-4 xl:px-4 xl:pb-0 2xl:pt-5 2xl:px-5 2xl:pb-0 flex flex-col relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 bg-gray-900 w-full h-full">
      {/* Title with horizontal line */}
      <div className="mb-2 flex items-center flex-shrink-0">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-cyan-300 mr-2 sm:mr-3 lg:mr-2 xl:mr-2 2xl:mr-3 leading-tight whitespace-nowrap">References</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
      </div>

      {/* Responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2 2xl:gap-2.5 flex-1 min-h-0">
        {references.map((reference, index) => (
          <Popover key={index}>
            <PopoverTrigger asChild>
              <button className="reference-card bg-gray-800 rounded-md border border-cyan-500/20 p-2.5 sm:p-3 md:p-3.5 lg:p-2.5 xl:p-3 2xl:p-3.5 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer hover:bg-gray-750 w-full text-left group h-full flex flex-col justify-center overflow-hidden">
                <div className="min-w-0">
                  <h5 className="text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl font-semibold text-white leading-tight group-hover:text-cyan-300 transition-colors duration-300 truncate">
                    {reference.name}
                  </h5>
                  <h6 className="text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg text-cyan-300 font-medium leading-tight truncate">
                    {reference.title}
                  </h6>
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
                <div className="space-y-0">
                  <h5 className="text-xl sm:text-2xl font-semibold text-white leading-tight">{reference.name}</h5>
                  <h6 className="text-cyan-300 font-medium text-lg leading-tight">
                    {reference.title}
                  </h6>
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