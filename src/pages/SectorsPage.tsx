import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTA from "@/components/CTA";

const SectorsPage = () => {
  const [activeSection, setActiveSection] = useState("geotechnical");
  
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16 sm:py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=1920&q=80" 
            alt="Aerial infrastructure view"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-merriweather text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Sectors of Expertise
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              Specialized knowledge across critical infrastructure domains
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <section className="sticky top-16 bg-white shadow-md z-20 py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            <button 
              onClick={() => scrollToSection("geotechnical")}
              className={`px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeSection === "geotechnical" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <span className="hidden sm:inline">Geotechnical & Geomechanical</span>
              <span className="sm:hidden">Geotechnical</span>
            </button>
            <button 
              onClick={() => scrollToSection("mobility")}
              className={`px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeSection === "mobility" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <span className="hidden sm:inline">Sustainable Mobility</span>
              <span className="sm:hidden">Mobility</span>
            </button>
            <button 
              onClick={() => scrollToSection("climate")}
              className={`px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeSection === "climate" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <span className="hidden sm:inline">Climate-Resilient Infrastructure</span>
              <span className="sm:hidden">Climate</span>
            </button>
            <button 
              onClick={() => scrollToSection("mining")}
              className={`px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeSection === "mining" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <span className="hidden sm:inline">Mining & Critical Raw Materials</span>
              <span className="sm:hidden">Mining</span>
            </button>
            <button 
              onClick={() => scrollToSection("esg")}
              className={`px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeSection === "esg" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <span className="hidden sm:inline">ESG & Climate Finance</span>
              <span className="sm:hidden">ESG</span>
            </button>
            <button 
              onClick={() => scrollToSection("capacity")}
              className={`px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeSection === "capacity" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <span className="hidden sm:inline">Capacity Building</span>
              <span className="sm:hidden">Capacity</span>
            </button>
          </div>
        </div>
      </section>

      {/* Sectors Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Geotechnical Section */}
          <div id="geotechnical" className="mb-16 sm:mb-20 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-merriweather text-primary font-bold mb-4 sm:mb-6">
                  Geotechnical & Geomechanical Asset Management
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Geotechnical and geomechanical asset management is a systematic approach to maintaining, inspecting, and planning for the repair or replacement of geotechnical assets like slopes, embankments, and retaining walls. It involves assessing the current condition of these assets, identifying potential risks, and developing strategies to ensure their continued safety and functionality over their lifespan. This includes monitoring their performance, managing data, and making informed decisions about maintenance and repair.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Hazard Mapping & Risk Assessment</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Identification and assessment of geological and geomechanical hazards through advanced mapping 
                      techniques, providing crucial data for infrastructure planning and risk mitigation.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Underground Infrastructure Monitoring</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Implementation of sophisticated monitoring systems for tunnels, underground facilities, and 
                      subsurface infrastructure to detect and address structural issues before they become critical.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Slope Stability Analysis</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Advanced analysis and modelling of slope stability for transportation corridors, mining operations, 
                      and civil infrastructure in mountainous and challenging terrains.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Foundation Design Optimization</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Expert engineering solutions for complex foundation challenges, ensuring structural integrity 
                      while optimizing material use and construction methodologies.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Lifecycle Integration</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Integration of geotechnical and geomechanical considerations throughout the entire infrastructure 
                      lifecycle, from planning and design to maintenance and decommissioning.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/how-are-bridges-built-hero.webp" 
                  alt="Modern bridge infrastructure"
                  className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Sustainable Mobility Section */}
          <div id="mobility" className="mb-16 sm:mb-20 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8">
              <div className="order-2">
                <h2 className="text-2xl sm:text-3xl font-merriweather text-primary font-bold mb-4 sm:mb-6">
                  Sustainable Mobility Systems
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Sustainable mobility systems focus on transportation that minimizes environmental impact, promotes social equity, and ensures economic viability. This means reducing emissions, optimizing resource use, and providing accessible and affordable transport options for all, while considering the needs of future generations.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Integrated Transport Planning</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Comprehensive planning approaches that integrate multiple transport modes and consider 
                      land-use patterns, economic development, and social equity.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Low-Carbon Transport Infrastructure</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Design and implementation of infrastructure supporting electric mobility, alternative fuels, 
                      and reduced emissions throughout the transportation ecosystem.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Urban Mobility Solutions</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Innovative approaches to urban transportation challenges, including public transport optimization, 
                      active mobility infrastructure, and smart traffic management systems.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Transport Corridor Development</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Strategic planning and implementation of major transportation corridors that connect regions and 
                      facilitate economic development while minimizing environmental impacts.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="order-1">
                <img 
                  src="https://www.techexplorist.com/wp-content/uploads/2024/11/electric-bus-depot.jpg.webp" 
                  alt="Electric bus depot for sustainable mobility"
                  className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Climate-Resilient Infrastructure Section */}
          <div id="climate" className="mb-16 sm:mb-20 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-merriweather text-primary font-bold mb-4 sm:mb-6">
                  Climate-Resilient Infrastructure
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Climate-resilient infrastructure refers to infrastructure designed, built, and managed to withstand the impacts of climate change. This includes adapting to extreme weather events, rising sea levels, and other climate-related challenges. The goal is to ensure infrastructure can function reliably despite these changes and recover quickly from disruptions.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Climate Risk Assessment</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Systematic evaluation of climate hazards and their potential impacts on infrastructure assets 
                      and networks, informing adaptation planning and investment prioritization.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Adaptation Planning</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Development of comprehensive adaptation strategies that identify and prioritize measures to 
                      enhance infrastructure resilience against climate-related threats.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Resilient Design Standards</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Creation and implementation of engineering standards and guidelines that incorporate climate 
                      projections and resilience principles into infrastructure design and construction.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Natural Infrastructure Solutions</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Integration of nature-based solutions and green infrastructure approaches that leverage 
                      ecological systems to enhance climate resilience while providing additional benefits.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://climate.axa/wp-content/uploads/2024/03/AXA-Climate-Image-site-internet-1920-×-1200-px-1-1.png" 
                  alt="Climate-resilient infrastructure and adaptation"
                  className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Mining & Critical Raw Materials Section */}
          <div id="mining" className="mb-16 sm:mb-20 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8">
              <div className="order-2">
                <h2 className="text-2xl sm:text-3xl font-merriweather text-primary font-bold mb-4 sm:mb-6">
                  Mining & Critical Raw Materials
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Sustainable development and management of mineral resources with a focus on critical materials 
                  essential for the clean energy transition and technological advancement.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Resource Assessment & Exploration</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Advanced geological assessment and exploration strategies for identifying and quantifying mineral 
                      resources, with particular focus on critical raw materials.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Sustainable Mining Practices</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Implementation of innovative technologies and approaches to minimize environmental impacts, 
                      reduce water and energy use, and improve safety in mining operations.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Supply Chain Development</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Strategic advisory on developing resilient and transparent supply chains for critical minerals, 
                      addressing geopolitical risks and promoting responsible sourcing.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Mine Closure & Rehabilitation</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Planning and implementation of environmentally and socially responsible mine closure and site 
                      rehabilitation, including repurposing strategies for post-mining landscapes.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="order-1">
                <img 
                  src="https://www.zcmc.am/upload/iblock/bbb/ctowvzydrzotb1v5j8ftlz20istzrhs5/Slide-16_9-_-1_min.jpg" 
                  alt="Mining operations and critical raw materials"
                  className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* ESG & Climate Finance Section */}
          <div id="esg" className="mb-16 sm:mb-20 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-merriweather text-primary font-bold mb-4 sm:mb-6">
                  ESG & Climate Finance
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Integration of environmental, social, and governance considerations into infrastructure investment 
                  decisions, and mobilization of climate finance for sustainable development.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">ESG Integration Framework</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Development and implementation of comprehensive frameworks for integrating ESG factors throughout 
                      the infrastructure investment cycle, from planning to operation.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Green Bond Structuring</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Advisory services for developing green bond frameworks, selecting eligible projects, and ensuring 
                      compliance with international standards and reporting requirements.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Climate Finance Mobilization</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Strategic guidance on accessing and blending climate finance from various sources, including 
                      multilateral climate funds, development banks, and private investors.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Impact Measurement & Reporting</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Design and implementation of systems for measuring, monitoring, and reporting on the environmental 
                      and social impacts of infrastructure investments, aligned with global standards.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80" 
                  alt="Offshore wind turbines for ESG and climate finance"
                  className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Capacity Building Section */}
          <div id="capacity" className="mb-16 sm:mb-20 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8">
              <div className="order-2">
                <h2 className="text-2xl sm:text-3xl font-merriweather text-primary font-bold mb-4 sm:mb-6">
                  Capacity Building & Institutional Strengthening
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Capacity building and institutional strengthening are intertwined processes that focus on enhancing the ability of individuals, organizations, and societies to achieve their goals. Capacity building primarily involves developing the skills, knowledge, and resources of individuals and groups, while institutional strengthening focuses on improving the systems, structures, and policies of organizations and institutions. Both are crucial for sustainable development and effective governance.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Technical Skills Development</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Training programs and knowledge transfer initiatives to enhance technical expertise in 
                      infrastructure planning, design, construction, and management.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Institutional Process Improvement</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Advisory on strengthening organizational processes, procedures, and systems to improve 
                      efficiency, transparency, and effectiveness in infrastructure governance.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Policy & Regulatory Framework Development</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Support for developing and implementing enabling policies, regulations, and standards for 
                      sustainable infrastructure development and management.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base">Knowledge Management Systems</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Implementation of systems and platforms for capturing, sharing, and applying knowledge and 
                      lessons learned to continuously improve infrastructure practices.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="order-1">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/5caf422e7eb88c059093d44a/1639435103969-USKDBBKMZFA46K764FXU/unsplash-image-8Gg2Ne_uTcM.jpg?format=2500w" 
                  alt="Capacity building and institutional strengthening"
                  className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-merriweather font-bold mb-4 sm:mb-6">
            Access Specialized Expertise for Your Sector
          </h2>
          <p className="max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            Our team brings deep domain knowledge and practical experience across diverse infrastructure sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA type="discovery" />
            <CTA type="capability" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectorsPage;
