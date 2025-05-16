import React from "react";
import { ArrowDown } from "lucide-react";

export default function TechHero() {
  const scrollToContent = () => {
    const element = document.getElementById("data-pipeline");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(to top, rgba(14, 61, 76, 0.9), rgba(14, 61, 76, 0.7)), url('./bg/technology-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Merriweather, serif",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white py-24">
        <div className="inline-block bg-accent/20 px-4 py-2 rounded-full mb-6">
          <span className="text-accent font-medium text-sm uppercase tracking-wide">PROPRIETARY TECHNOLOGY</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
          SRI's Advanced Risk Assessment Platform
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-white/90 mb-10 font-sans">
          Our satellite-based analytics engine reduces infrastructure failure risk by 40% and accelerates financing timelines by 3x.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="#marketplace" 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-md font-bold text-base transition-all shadow-lg"
          >
            Explore Data Marketplace
          </a>
          <a 
            href="#pipeline" 
            className="border-2 border-white/80 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold text-base transition-all"
          >
            View Processing Pipeline
          </a>
        </div>
        
        {/* Key Metrics Banner - Improved spacing and clarity */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-8 shadow-lg transform transition-transform hover:scale-105">
            <div className="text-accent font-bold text-4xl md:text-5xl mb-3">91%</div>
            <p className="text-white/90 text-base font-sans">Prediction accuracy for slope failures</p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-8 shadow-lg transform transition-transform hover:scale-105">
            <div className="text-accent font-bold text-4xl md:text-5xl mb-3">$4.2B</div>
            <p className="text-white/90 text-base font-sans">Infrastructure value protected</p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-8 shadow-lg transform transition-transform hover:scale-105">
            <div className="text-accent font-bold text-4xl md:text-5xl mb-3">3-5x</div>
            <p className="text-white/90 text-base font-sans">ROI for client projects</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-accent transition-colors flex flex-col items-center mt-8 animate-bounce"
          aria-label="Scroll down"
        >
          <span className="mb-2 text-sm">Scroll to explore</span>
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>

      {/* Improved curved separator with stronger contrast */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0 80H1440V0C1295.19 53.7721 1125.6 80 948.943 80C772.283 80 591.497 53.7721 446.686 0C301.876 0 143.876 26.8861 0 80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
