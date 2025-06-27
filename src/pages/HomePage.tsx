import { Link } from "react-router-dom";
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
      <section className="relative bg-primary text-white py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" 
            alt="Infrastructure development"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10">
          <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="font-merriweather text-4xl md:text-5xl font-bold mb-6">
              Strategic Infrastructure Advisory
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
              Expert advisory services for sustainable infrastructure development, innovative financing solutions, and strategic project implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 text-base">
                  Get Started
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-6 py-3 text-base">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="main-content">
        {/* Why Choose SRI Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose SRI</h2>
              <p className="text-lg text-muted-foreground">
                Strategic advisory expertise for complex infrastructure challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Expertise */}
              <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Sector Expertise</h3>
                <p className="text-muted-foreground">
                  Specialized knowledge across infrastructure, mining, mobility, and climate resilience sectors.
                </p>
              </div>
              
              {/* Finance */}
              <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Finance Solutions</h3>
                <p className="text-muted-foreground">
                  Expert structuring of innovative financing solutions combining public and private capital.
                </p>
              </div>
              
              {/* Results */}
              <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Strategic Approach</h3>
                <p className="text-muted-foreground">
                  Results-oriented approach with measurable impact on project success and financial returns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Proven track record of successful project implementation and sustainable development outcomes.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">$4.2B</div>
                <div className="text-sm text-muted-foreground">Projects Unlocked</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">27,000km</div>
                <div className="text-sm text-muted-foreground">Climate-Proofed Roads</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">6</div>
                <div className="text-sm text-muted-foreground">Specialist Sectors</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive advisory services across the infrastructure development lifecycle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-4">Sector Advisory</h3>
                  <p className="text-muted-foreground mb-6">
                    Expert guidance on sector strategy, technical due diligence, and project development.
                  </p>
                </div>
                <Link to="/services" className="mt-auto">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
              <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-4">Financing Advisory</h3>
                  <p className="text-muted-foreground mb-6">
                    Innovative financing solutions and transaction structuring for sustainable projects.
                  </p>
                </div>
                <Link to="/services" className="mt-auto">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
              <div className="text-center p-8 rounded-lg border hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-4">IFI Transactions</h3>
                  <p className="text-muted-foreground mb-6">
                    Support for International Financial Institution engagements and compliance.
                  </p>
                </div>
                <Link to="/services" className="mt-auto">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-accent text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Project?</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Partner with SRI for expert advisory services that drive sustainable infrastructure development and measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-accent hover:bg-white/90 px-6 py-3 text-base">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-accent px-6 py-3 text-base">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
