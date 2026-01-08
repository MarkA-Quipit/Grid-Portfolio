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
    <div className="references-section rounded-lg border border-cyan-500 border-opacity-40 p-5 flex flex-col relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 md:p-3.5 md:rounded-md bg-gray-900">
      {/* Left-sided title */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-cyan-300">References</h2>
      </div>

      {/* Two-column layout with popovers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
        {references.map((reference, index) => (
          <Popover key={index}>
            <PopoverTrigger asChild>
              <button className="reference-card bg-gray-800 rounded-md border border-cyan-500/20 p-3 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer hover:bg-gray-750 w-full text-left">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white leading-tight">{reference.name}</h3>
                  <p className="text-cyan-300 font-medium text-xs">{reference.title}</p>
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent 
              side="bottom" 
              align="start"
              sideOffset={8}
              className="w-80 bg-gray-800 border border-cyan-500/30 text-white p-4 shadow-lg z-50"
            >
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-white">{reference.name}</h3>
                  <p className="text-cyan-300 font-medium text-sm">
                    {reference.title}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Organization</p>
                    <p className="text-white text-sm">{reference.company}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Email</p>
                    <a
                      href={`mailto:${reference.email}`}
                      className="text-cyan-300 hover:text-cyan-200 transition-colors duration-200 text-sm underline"
                    >
                      {reference.email}
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Phone</p>
                    <a
                      href={`tel:${reference.phone}`}
                      className="text-cyan-300 hover:text-cyan-200 transition-colors duration-200 text-sm underline"
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