import React from 'react';

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
        <h2 className="text-2xl font-bold text-cyan-300 mb-2">References</h2>
        <div className="w-12 h-0.5 bg-cyan-500"></div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
        {references.map((reference, index) => (
          <div
            key={index}
            className="reference-card bg-gray-800 rounded-md border border-cyan-500/20 p-3 hover:border-cyan-500/40 transition-all duration-300"
          >
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white leading-tight">{reference.name}</h3>
              
              <div className="space-y-1">
                <p className="text-cyan-300 font-medium text-xs">
                  {reference.title} | {reference.company}
                </p>
                
                <div className="space-y-0.5">
                  <a
                    href={`mailto:${reference.email}`}
                    className="block text-gray-300 hover:text-cyan-300 transition-colors duration-200 text-xs"
                  >
                    {reference.email}
                  </a>
                  
                  <a
                    href={`tel:${reference.phone}`}
                    className="block text-gray-300 hover:text-cyan-300 transition-colors duration-200 text-xs"
                  >
                    {reference.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;