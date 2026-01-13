import React, { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"
import ContactForm from './ContactForm';

// Add custom blink animation
const blinkStyle = `
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const SocialFooter: React.FC = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactFormOpen(true);
  };
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Mark-Quipit',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mark-aldrin-quipit',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:quipit.ma@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: blinkStyle }} />
      <TooltipProvider delayDuration={300}>
      <div className="social-footer rounded-lg border border-cyan-500 border-opacity-40 p-3 sm:p-4 lg:p-5 flex items-center justify-between relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] min-h-0 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:border-opacity-80 bg-gray-900 w-full h-full">
        <div className="social-content relative z-[2] text-white w-full">
          {/* Mobile Layout (below lg) */}
          <div className="lg:hidden flex flex-col space-y-3 sm:space-y-4">
            {/* Connect text */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-1 sm:mb-2 leading-tight">Connect with me:</h3>
              <p className="text-base sm:text-lg text-gray-300 opacity-90 leading-relaxed">
                Feel free to reach out via email or check my GitHub/LinkedIn.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {socialLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={link.name === 'Email' ? '#' : link.url}
                        target={link.name === 'Email' ? '_self' : '_blank'}
                        rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
                        onClick={link.name === 'Email' ? handleEmailClick : undefined}
                        className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-white/10 border border-white/20 hover:scale-110 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-200 cursor-pointer flex items-center justify-center backdrop-blur-sm text-cyan-300 hover:text-cyan-200"
                      >
                        {link.icon}
                      </a>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      sideOffset={8}
                      className="z-[9999] bg-gray-800 border border-gray-600 text-white px-2 py-1 text-sm rounded shadow-lg leading-tight"
                    >
                      <p className="font-medium">{link.name}</p>
                    </TooltipContent>
                  </Tooltip>
                  {link.name === 'Email' && (
                    <div className="flex flex-col text-base sm:text-lg text-cyan-300 font-medium whitespace-nowrap leading-snug">
                      <span>Got work for me?</span>
                      <span className="text-sm text-gray-300 opacity-80 leading-tight">Email me</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm sm:text-base text-gray-300 opacity-90 flex items-center justify-center leading-tight">
                © 2026 Mark Aldrin Quipit
                <span className="inline-block w-0.5 h-3 sm:h-4 bg-cyan-300 animate-[blink_1s_infinite] ml-1"></span>
              </p>
            </div>
          </div>

          {/* Desktop Layout (lg and above) */}
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4 lg:items-center">
            {/* Column 1: Decorative Lines */}
            <div className="flex flex-col items-start justify-center gap-3 w-full">
              <div className="h-px w-full bg-gradient-to-r from-transparent to-cyan-400/50"></div>
              <div className="h-px w-3/4 bg-gradient-to-r from-transparent to-cyan-400/30"></div>
            </div>
            
            {/* Column 2: Connect with me text */}
            <div className="text-left">
              <h3 className="text-2xl font-bold text-cyan-300 mb-1 leading-tight">Connect with me:</h3>
              <p className="text-lg text-gray-300 opacity-90 leading-relaxed">
                Feel free to reach out via email or check my GitHub/LinkedIn.
              </p>
            </div>
            
            {/* Column 3: Social Icons */}
            <div className="flex items-center gap-4 justify-center">
              {socialLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={link.name === 'Email' ? '#' : link.url}
                        target={link.name === 'Email' ? '_self' : '_blank'}
                        rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
                        onClick={link.name === 'Email' ? handleEmailClick : undefined}
                        className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 hover:scale-110 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-200 cursor-pointer flex items-center justify-center backdrop-blur-sm text-cyan-300 hover:text-cyan-200"
                      >
                        {link.icon}
                      </a>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      sideOffset={8}
                      className="z-[9999] bg-gray-800 border border-gray-600 text-white px-2 py-1 text-sm rounded shadow-lg leading-tight"
                    >
                      <p className="font-medium">{link.name}</p>
                    </TooltipContent>
                  </Tooltip>
                  {link.name === 'Email' && (
                    <div className="flex flex-col text-lg text-cyan-300 font-medium whitespace-nowrap leading-snug">
                      <span>Got work for me?</span>
                      <span className="text-sm text-gray-300 opacity-80 leading-tight">Email me</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Column 4: Copyright with blinking cursor */}
            <div className="text-right">
              <p className="text-lg text-gray-300 opacity-90 flex items-center justify-end leading-tight">
                © 2026 Mark Aldrin Quipit
                <span className="inline-block w-0.5 h-4 bg-cyan-300 animate-[blink_1s_infinite]"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </TooltipProvider>
    </>
  );
};

export default SocialFooter;