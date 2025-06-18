
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GlobeVisualization from "./GlobeVisualization";
import { ChevronDown } from "lucide-react";

export default function EnhancedHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [metrics] = useState([
    { 
      id: "accuracy", 
      value: "91%", 
      label: "Prediction accuracy", 
      description: "Our algorithms predict slope failures with 91% accuracy, compared to industry standard of 60-70%."
    },
    { 
      id: "protected", 
      value: "$4.2B", 
      label: "Infrastructure protected", 
      description: "Our technology has helped safeguard over $4.2 billion worth of critical infrastructure assets worldwide."
    },
    { 
      id: "reduction", 
      value: "40%", 
      label: "Risk reduction", 
      description: "Clients experience an average 40% reduction in infrastructure failure risk after implementation."
    },
    { 
      id: "financing", 
      value: "3x", 
      label: "Faster financing", 
      description: "Our data accelerates financing approvals by 3x by providing lenders with quantifiable risk assessments."
    },
  ]);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-select each metric in sequence
    let index = 0;
    const interval = setInterval(() => {
      setSelectedMetric(metrics[index].id);
      index = (index + 1) % metrics.length;
    }, 4000);
    
    return () => clearInterval(interval);
  }, [metrics]);

  const scrollToContent = () => {
    const contentElement = document.getElementById('main-content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden pt-24">
      {/* Background globe visualization */}
      <div className="absolute inset-0 opacity-40">
        <GlobeVisualization />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center py-24">
        <div className={`max-w-4xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block bg-accent/20 px-4 py-2 rounded-full mb-6">
            <span className="text-accent font-medium text-sm">SATELLITE-POWERED RISK ASSESSMENT</span>
          </div>
          
          <h1 className="heading-1 text-white mb-8">
            Infrastructure Risk Intelligence for a Changing World
          </h1>
          
          <p className="body-1 text-white/90 mb-10 max-w-2xl">
            SRI's advanced satellite analytics reduce infrastructure failure risk by 40% and accelerate financing timelines by 3x.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/technology" className="btn-accent">
              Explore Our Technology
            </Link>
            <Link to="/contact" className="btn-secondary">
              Request a Consultation
            </Link>
          </div>
          
          {/* Key Metrics */}
          <div className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map(metric => (
                <button
                  key={metric.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 text-left transition-all duration-300 hover:bg-white/20 ${selectedMetric === metric.id ? 'ring-2 ring-accent' : ''}`}
                  onClick={() => setSelectedMetric(metric.id)}
                >
                  <div className="text-accent font-bold text-3xl md:text-4xl mb-2">{metric.value}</div>
                  <p className="text-white/80 text-sm">{metric.label}</p>
                </button>
              ))}
            </div>
            
            {/* Metric description */}
            {selectedMetric && (
              <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 animate-fade-in">
                <p className="text-white/90">
                  {metrics.find(m => m.id === selectedMetric)?.description}
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <button 
            onClick={scrollToContent}
            className="text-white/80 hover:text-white focus:outline-none transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
      
      {/* Curved separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0 80H80V0C71.6 40.3 42.8 80 20 80C8.9 80 0 71.1 0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
} 
