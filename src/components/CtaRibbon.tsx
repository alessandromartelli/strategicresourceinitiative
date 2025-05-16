import React from "react";
import { Link } from "react-router-dom";

interface CtaRibbonProps {
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CtaRibbon({ 
  className = "",
  title = "Need a custom data bundle?",
  description = "Tell us what AOI and we'll prep a download in 48 hours.",
  buttonText = "Request Bundle",
  buttonLink = "/contact"
}: CtaRibbonProps) {
  return (
    <div 
      className={`bg-slate-800 py-8 border-l-4 border-gradient-to-b from-[#d98c3e] to-[#b36d4f] ${className}`}
      style={{ 
        borderImage: 'linear-gradient(to bottom, #d98c3e, #b36d4f) 1'
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div>
          {title && <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>}
          <p className="text-white/80 text-lg">
            {description}
          </p>
        </div>
        <Link 
          to={buttonLink} 
          className="bg-[var(--clr-accent,#d98c3e)] hover:bg-[var(--clr-accent,#d98c3e)]/90 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300 mt-4 md:mt-0"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
} 