import { Link } from "react-router-dom";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import EnhancedHero from "@/components/EnhancedHero";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Main Content Start - Adding an ID for scroll navigation */}
      <div id="main-content" className="relative z-10">
        {/* Stats Ticker */}
        <section className="bg-secondary py-16">
          <div className="container overflow-hidden">
            <div className="flex space-x-16 ticker-content">
              <div className="flex items-center">
                <span className="text-5xl font-medium tracking-tight text-foreground">$4.2bn</span>
                <span className="ml-4 text-body-2 text-muted-foreground">projects unlocked</span>
              </div>
              <div className="flex items-center">
                <span className="text-5xl font-medium tracking-tight text-foreground">6</span>
                <span className="ml-4 text-body-2 text-muted-foreground">specialist sectors</span>
              </div>
              <div className="flex items-center">
                <span className="text-5xl font-medium tracking-tight text-foreground">27,000km</span>
                <span className="ml-4 text-body-2 text-muted-foreground">climate-proofed roads</span>
              </div>
              {/* Duplicate for continuous scrolling */}
              <div className="flex items-center">
                <span className="text-5xl font-medium tracking-tight text-foreground">$4.2bn</span>
                <span className="ml-4 text-body-2 text-muted-foreground">projects unlocked</span>
              </div>
              <div className="flex items-center">
                <span className="text-5xl font-medium tracking-tight text-foreground">6</span>
                <span className="ml-4 text-body-2 text-muted-foreground">specialist sectors</span>
              </div>
              <div className="flex items-center">
                <span className="text-5xl font-medium tracking-tight text-foreground">27,000km</span>
                <span className="ml-4 text-body-2 text-muted-foreground">climate-proofed roads</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className="bg-white py-24 border-t border-b border-gray-100">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="heading-2 mb-4">Our Solutions</h2>
              <p className="text-body-1 text-muted-foreground">
                Explore our suite of advanced solutions designed to drive sustainable growth and climate resilience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Solution 1 */}
              <div className="card p-8 flex flex-col items-center text-center card-hover">
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Climate Risk Analytics</h3>
                <p className="text-body-2 text-muted-foreground mb-6">Advanced analytics to assess and manage climate risks for infrastructure projects.</p>
                <Button className="bg-accent text-white hover:bg-accent/90 w-full">Learn More</Button>
              </div>
              {/* Solution 2 */}
              <div className="card p-8 flex flex-col items-center text-center card-hover">
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h3m4 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Remote Sensing</h3>
                <p className="text-body-2 text-muted-foreground mb-6">Satellite and drone-based monitoring for real-time insights and reporting.</p>
                <Link to="/technology">
                  <Button className="bg-accent text-white hover:bg-accent/90 w-full">Explore Technology</Button>
                </Link>
              </div>
              {/* Solution 3 */}
              <div className="card p-8 flex flex-col items-center text-center card-hover">
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0h-1v-4h-1" /></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Sustainability Reporting</h3>
                <p className="text-body-2 text-muted-foreground mb-6">Automated ESG and sustainability reporting for compliance and transparency.</p>
                <Button className="bg-accent text-white hover:bg-accent/90 w-full">Learn More</Button>
              </div>
              {/* Solution 4 */}
              <div className="card p-8 flex flex-col items-center text-center card-hover">
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Digital Twin Solutions</h3>
                <p className="text-body-2 text-muted-foreground mb-6">Create digital replicas of assets for simulation, monitoring, and optimization.</p>
                <Button className="bg-accent text-white hover:bg-accent/90 w-full">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Teaser */}
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="heading-2 mb-6">
              Our Services
            </h2>
              <p className="text-body-1 text-muted-foreground">
                Comprehensive solutions to drive sustainable infrastructure development and inclusive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Advisory Card */}
              <div className="card p-8 hover:shadow-lg transition-all duration-300 card-hover">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-center mb-3">
                  Advisory
                </h3>
                <p className="text-body-2 text-muted-foreground text-center mb-6">
                  Specialized consulting for sector strategies, capacity building, and impact assessments.
                </p>
                <div className="text-center">
                  <Link to="/services" className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Finance Card */}
              <div className="card p-8 hover:shadow-lg transition-all duration-300 card-hover">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-center mb-3">
                  Finance
                </h3>
                <p className="text-body-2 text-muted-foreground text-center mb-6">
                  Blended-finance structuring, PPP advisory, and innovative ESG climate finance solutions.
                </p>
                <div className="text-center">
                  <Link to="/services" className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Transactions Card */}
              <div className="card p-8 hover:shadow-lg transition-all duration-300 card-hover">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-center mb-3">
                  Transactions
                </h3>
                <p className="text-body-2 text-muted-foreground text-center mb-6">
                  End-to-end transaction support from concept to financial close for complex infrastructure deals.
                </p>
                <div className="text-center">
                  <Link to="/services" className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Climate Card */}
              <div className="card p-8 hover:shadow-lg transition-all duration-300 card-hover">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-center mb-3">
                  Climate
                </h3>
                <p className="text-body-2 text-muted-foreground text-center mb-6">
                  Climate adaptation and resilience assessments, strategies and investment planning.
                </p>
                <div className="text-center">
                  <Link to="/services" className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Credentials */}
        <section className="bg-gray-50 py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="badge badge-accent mb-4">TRUSTED GLOBALLY</div>
              <h2 className="heading-2 mb-6">Client Success Stories</h2>
              <p className="text-body-1 text-muted-foreground">
                We've helped leading organizations worldwide achieve their infrastructure goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden group card-hover">
                <div className="h-48 bg-gray-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="Mining project" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="badge bg-white text-primary text-xs font-semibold px-2 py-1">Mining</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Tailings Dam Risk Management</h3>
                  <p className="text-gray-600 mb-4">
                    Early detection of instability issues saved a major mining company $34M in potential damages.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium text-primary">91%</span>
                    <span className="mx-2">·</span>
                    <span>Prediction accuracy</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden group card-hover">
                <div className="h-48 bg-gray-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1566365869734-44de746c0196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="Railway project" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="badge bg-white text-primary text-xs font-semibold px-2 py-1">Transportation</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Railway Corridor Assessment</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive risk assessment enabled a $1.8B financing package for critical infrastructure.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium text-primary">3x</span>
                    <span className="mx-2">·</span>
                    <span>Faster approval process</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden group card-hover">
                <div className="h-48 bg-gray-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1593475585125-fe9f347dfbc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="Dam project" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="badge bg-white text-primary text-xs font-semibold px-2 py-1">Water</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Dam Safety Monitoring</h3>
                  <p className="text-gray-600 mb-4">
                    Early warning system detected movement 22 days before visible evidence appeared.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium text-primary">74%</span>
                    <span className="mx-2">·</span>
                    <span>Reduction in project delays</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                to="/credentials" 
                className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
              >
                View all case studies
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-primary-800 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-2 text-white mb-6">Ready to Transform Your Risk Management?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Let our experts show you how SRI's satellite-based analytics can protect your assets and accelerate your projects.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="btn-accent">
                  Request a Consultation
                </Link>
                <Link to="/technology" className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-bold transition-all">
                  Explore Our Technology
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
