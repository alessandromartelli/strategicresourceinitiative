
import CTA from "@/components/CTA";

const ProcessPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1920&q=80" 
            alt="Infrastructure process"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-merriweather text-4xl md:text-5xl font-bold mb-4">
              Our Process
            </h1>
            <p className="text-lg md:text-xl">
              Structured methodology for infrastructure development success
            </p>
          </div>
        </div>
      </section>

      {/* Value Cycle Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-merriweather text-primary font-bold text-center mb-16">
            Value Cycle
          </h2>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Circle Container */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto border-2 border-primary rounded-full">
              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">SRI Advisory</span>
              </div>
              
              {/* Strategy Node */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-center mt-2 w-24">
                  <span className="font-semibold text-primary">Strategy</span>
                </div>
              </div>
              
              {/* Preparation Node */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div className="text-center mt-2 w-24">
                  <span className="font-semibold text-primary">Preparation</span>
                </div>
              </div>
              
              {/* Financing Node */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center mt-2 w-24">
                  <span className="font-semibold text-primary">Financing</span>
                </div>
              </div>
              
              {/* Implementation Node */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-center mt-2 w-28">
                  <span className="font-semibold text-primary">Implementation</span>
                </div>
              </div>
              
              {/* Oversight Node - Inside the circle */}
              <div className="absolute top-1/4 left-1/4 bg-white">
                <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center text-white">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="text-center mt-2 w-20">
                  <span className="font-semibold text-primary">Oversight</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24 max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Our integrated value cycle approach ensures that each phase of the infrastructure development process 
              informs and strengthens the others, creating a continuous feedback loop of improvement and optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Process Graphics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Quality Through Advisory Oversight */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-merriweather text-primary font-bold mb-6 text-center">
                Ensuring Quality Through Advisory Oversight
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Technical Excellence Assurance</h4>
                    <p className="text-sm text-gray-700">
                      Independent review and verification of technical specifications and design standards 
                      to ensure best practices and quality outcomes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Risk Identification & Mitigation</h4>
                    <p className="text-sm text-gray-700">
                      Proactive identification of potential risks and implementation of appropriate 
                      mitigation strategies throughout the project lifecycle.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Performance Monitoring</h4>
                    <p className="text-sm text-gray-700">
                      Ongoing tracking of key performance indicators against established targets 
                      to ensure project objectives are being met.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Adaptive Management</h4>
                    <p className="text-sm text-gray-700">
                      Flexible approach to project oversight that allows for adjustments based on 
                      emerging conditions, new information, and lessons learned.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Preparation Process */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-merriweather text-primary font-bold mb-6 text-center">
                Project Preparation Process for Infrastructure & PPP
              </h3>
              
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-primary"></div>
                
                <div className="space-y-8">
                  <div className="relative pl-12">
                    <div className="absolute left-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">1</div>
                    <h4 className="font-semibold mb-2">Project Identification & Screening</h4>
                    <p className="text-sm text-gray-700">
                      Initial assessment of project ideas against strategic objectives and basic 
                      viability criteria to determine which initiatives to develop further.
                    </p>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">2</div>
                    <h4 className="font-semibold mb-2">Prefeasibility Study</h4>
                    <p className="text-sm text-gray-700">
                      Preliminary analysis of technical, economic, legal, and environmental aspects 
                      to determine if a full feasibility study is warranted.
                    </p>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">3</div>
                    <h4 className="font-semibold mb-2">Detailed Feasibility Study</h4>
                    <p className="text-sm text-gray-700">
                      Comprehensive assessment of all project aspects, including detailed technical 
                      design, financial modeling, risk analysis, and implementation planning.
                    </p>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">4</div>
                    <h4 className="font-semibold mb-2">Transaction Structuring</h4>
                    <p className="text-sm text-gray-700">
                      Development of the financial and commercial structure, risk allocation framework, 
                      and procurement strategy to attract appropriate investors and partners.
                    </p>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">5</div>
                    <h4 className="font-semibold mb-2">Procurement & Financial Close</h4>
                    <p className="text-sm text-gray-700">
                      Implementation of a transparent procurement process, investor engagement, 
                      negotiation of final agreements, and securing of financing commitments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-merriweather text-primary font-bold text-center mb-16">
            Benefits of Our Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border-l-4 border-primary bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Reduced Risk</h3>
              <p className="text-gray-700">
                Our structured approach identifies and addresses risks early, preventing costly problems later in the project lifecycle.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-primary bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Enhanced Bankability</h3>
              <p className="text-gray-700">
                Well-prepared projects with robust feasibility studies and clear risk allocation attract financing more effectively.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-primary bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Improved Outcomes</h3>
              <p className="text-gray-700">
                Rigorous oversight and quality assurance lead to infrastructure that delivers intended services reliably and sustainably.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-primary bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Faster Implementation</h3>
              <p className="text-gray-700">
                Thorough preparation accelerates the development process by anticipating and resolving potential roadblocks.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-primary bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Stakeholder Alignment</h3>
              <p className="text-gray-700">
                Clear processes foster understanding and buy-in from all parties, reducing conflicts and delays.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-primary bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Long-term Sustainability</h3>
              <p className="text-gray-700">
                Our integrated approach ensures projects are environmentally responsible, socially beneficial, and economically viable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-merriweather font-bold mb-6">
            Ready to Transform Your Infrastructure Approach?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Leverage our proven process to enhance project outcomes and maximize sustainable development impact.
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

export default ProcessPage;
