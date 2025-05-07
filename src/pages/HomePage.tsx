
import { Link } from "react-router-dom";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80" 
            alt="Infrastructure and geology"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-3xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="font-merriweather text-4xl md:text-6xl font-bold leading-tight mb-4">
              Driving Climate-Aligned Infrastructure & Inclusive Growth
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Unlock financing for infrastructure investments through strategic advisory.
            </p>
            <Link to="/contact" className="inline-block">
              <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-3 rounded-md text-lg h-auto">
                Speak with an Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <section className="bg-secondary py-8">
        <div className="container mx-auto overflow-hidden">
          <div className="flex space-x-16 ticker-content animate-scroll">
            <div className="flex items-center">
              <span className="text-3xl md:text-4xl font-merriweather font-bold text-primary">$4.2bn</span>
              <span className="ml-3 text-lg text-primary">projects unlocked</span>
            </div>
            <div className="flex items-center">
              <span className="text-3xl md:text-4xl font-merriweather font-bold text-primary">6</span>
              <span className="ml-3 text-lg text-primary">specialist sectors</span>
            </div>
            <div className="flex items-center">
              <span className="text-3xl md:text-4xl font-merriweather font-bold text-primary">27,000km</span>
              <span className="ml-3 text-lg text-primary">climate-proofed roads</span>
            </div>
            {/* Duplicate for continuous scrolling */}
            <div className="flex items-center">
              <span className="text-3xl md:text-4xl font-merriweather font-bold text-primary">$4.2bn</span>
              <span className="ml-3 text-lg text-primary">projects unlocked</span>
            </div>
            <div className="flex items-center">
              <span className="text-3xl md:text-4xl font-merriweather font-bold text-primary">6</span>
              <span className="ml-3 text-lg text-primary">specialist sectors</span>
            </div>
            <div className="flex items-center">
              <span className="text-3xl md:text-4xl font-merriweather font-bold text-primary">27,000km</span>
              <span className="ml-3 text-lg text-primary">climate-proofed roads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-merriweather text-primary font-bold text-center mb-16">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advisory Card */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-merriweather text-primary font-semibold text-center mb-3">
                Advisory
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Specialized consulting for sector strategies, capacity building, and impact assessments.
              </p>
              <div className="text-center">
                <Link to="/services" className="text-accent hover:text-accent/80 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Finance Card */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-merriweather text-primary font-semibold text-center mb-3">
                Finance
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Blended-finance structuring, PPP advisory, and innovative ESG climate finance solutions.
              </p>
              <div className="text-center">
                <Link to="/services" className="text-accent hover:text-accent/80 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Transactions Card */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-merriweather text-primary font-semibold text-center mb-3">
                Transactions
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Due-diligence support, valuation modeling, and structured financing oversight.
              </p>
              <div className="text-center">
                <Link to="/services" className="text-accent hover:text-accent/80 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partner Logos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-merriweather text-center text-gray-600 mb-8">
            Trusted By Global Partners
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-16 bg-white rounded shadow-sm flex items-center justify-center">
                <div className="w-24 h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-merriweather font-bold mb-4">
            Ready to start your journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Connect with our team to discuss how we can help you achieve your infrastructure and financing goals.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <CTA type="discovery" />
            <CTA type="capability" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
