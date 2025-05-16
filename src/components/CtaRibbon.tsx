
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
      className={`bg-primary-800 py-12 shadow-lg ${className}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 md:w-2 bg-gradient-to-b from-accent to-accent/70 rounded-r"></div>
          
          <div className="pl-4 md:pl-8">
            {title && <h3 className="text-white text-2xl font-bold mb-3" style={{ fontFamily: "Merriweather, serif" }}>{title}</h3>}
            <p className="text-white/90 text-lg max-w-2xl">
              {description}
            </p>
          </div>
          
          <Link 
            to={buttonLink} 
            className="group flex items-center gap-2 bg-accent hover:bg-accent-600 text-white px-8 py-4 rounded-md font-bold transition-all shadow-md whitespace-nowrap"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
