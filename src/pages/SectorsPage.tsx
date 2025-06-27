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
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=1920&q=80" 
            alt="Aerial infrastructure view"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-merriweather text-4xl md:text-5xl font-bold mb-4">
              Sectors of Expertise
            </h1>
            <p className="text-lg md:text-xl">
              Specialized knowledge across critical infrastructure domains
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <section className="sticky top-16 bg-white shadow-md z-20 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => scrollToSection("geotechnical")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === "geotechnical" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Geotechnical & Geomechanical
            </button>
            <button 
              onClick={() => scrollToSection("mobility")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === "mobility" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Sustainable Mobility
            </button>
            <button 
              onClick={() => scrollToSection("climate")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === "climate" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Climate-Resilient Infrastructure
            </button>
            <button 
              onClick={() => scrollToSection("mining")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === "mining" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Mining & Critical Raw Materials
            </button>
            <button 
              onClick={() => scrollToSection("esg")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === "esg" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              ESG & Climate Finance
            </button>
            <button 
              onClick={() => scrollToSection("capacity")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === "capacity" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Capacity Building
            </button>
          </div>
        </div>
      </section>

      {/* Sectors Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Geotechnical Section */}
          <div id="geotechnical" className="mb-20 scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div>
                <h2 className="text-3xl font-merriweather text-primary font-bold mb-6">
                  Geotechnical & Geomechanical Asset Management
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Comprehensive management of geological and geotechnical assets to ensure infrastructure stability, 
                  safety, and longevity in complex terrains and challenging conditions.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium">Hazard Mapping & Risk Assessment</AccordionTrigger>
                    <AccordionContent>
                      Identification and assessment of geological and geomechanical hazards through advanced mapping 
                      techniques, providing crucial data for infrastructure planning and risk mitigation.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium">Underground Infrastructure Monitoring</AccordionTrigger>
                    <AccordionContent>
                      Implementation of sophisticated monitoring systems for tunnels, underground facilities, and 
                      subsurface infrastructure to detect and address structural issues before they become critical.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium">Slope Stability Analysis</AccordionTrigger>
                    <AccordionContent>
                      Advanced analysis and modelling of slope stability for transportation corridors, mining operations, 
                      and civil infrastructure in mountainous and challenging terrains.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium">Foundation Design Optimization</AccordionTrigger>
                    <AccordionContent>
                      Expert engineering solutions for complex foundation challenges, ensuring structural integrity 
                      while optimizing material use and construction methodologies.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left font-medium">Lifecycle Integration</AccordionTrigger>
                    <AccordionContent>
                      Integration of geotechnical and geomechanical considerations throughout the entire infrastructure 
                      lifecycle, from planning and design to maintenance and decommissioning.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" 
                  alt="Strategic consulting and planning"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Sustainable Mobility Section */}
          <div id="mobility" className="mb-20 scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="md:order-2">
                <h2 className="text-3xl font-merriweather text-primary font-bold mb-6">
                  Sustainable Mobility Systems
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Development and optimization of transportation networks that balance efficiency, accessibility, 
                  and environmental sustainability to serve communities while reducing carbon footprints.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium">Integrated Transport Planning</AccordionTrigger>
                    <AccordionContent>
                      Comprehensive planning approaches that integrate multiple transport modes and consider 
                      land-use patterns, economic development, and social equity.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium">Low-Carbon Transport Infrastructure</AccordionTrigger>
                    <AccordionContent>
                      Design and implementation of infrastructure supporting electric mobility, alternative fuels, 
                      and reduced emissions throughout the transportation ecosystem.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium">Urban Mobility Solutions</AccordionTrigger>
                    <AccordionContent>
                      Innovative approaches to urban transportation challenges, including public transport optimization, 
                      active mobility infrastructure, and smart traffic management systems.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium">Transport Corridor Development</AccordionTrigger>
                    <AccordionContent>
                      Strategic planning and implementation of major transportation corridors that connect regions and 
                      facilitate economic development while minimizing environmental impacts.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                  alt="Strategic advisory session"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Climate-Resilient Infrastructure Section */}
          <div id="climate" className="mb-20 scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div>
                <h2 className="text-3xl font-merriweather text-primary font-bold mb-6">
                  Climate-Resilient Infrastructure
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Design and adaptation of infrastructure systems to withstand and recover from climate-related 
                  stresses and shocks, ensuring long-term functionality and service delivery.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium">Climate Risk Assessment</AccordionTrigger>
                    <AccordionContent>
                      Systematic evaluation of climate hazards and their potential impacts on infrastructure assets 
                      and networks, informing adaptation planning and investment prioritization.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium">Adaptation Planning</AccordionTrigger>
                    <AccordionContent>
                      Development of comprehensive adaptation strategies that identify and prioritize measures to 
                      enhance infrastructure resilience against climate-related threats.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium">Resilient Design Standards</AccordionTrigger>
                    <AccordionContent>
                      Creation and implementation of engineering standards and guidelines that incorporate climate 
                      projections and resilience principles into infrastructure design and construction.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium">Natural Infrastructure Solutions</AccordionTrigger>
                    <AccordionContent>
                      Integration of nature-based solutions and green infrastructure approaches that leverage 
                      ecological systems to enhance climate resilience while providing additional benefits.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80" 
                  alt="Climate advisory and strategy"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Mining & Critical Raw Materials Section */}
          <div id="mining" className="mb-20 scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="md:order-2">
                <h2 className="text-3xl font-merriweather text-primary font-bold mb-6">
                  Mining & Critical Raw Materials
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Sustainable development and management of mineral resources with a focus on critical materials 
                  essential for the clean energy transition and technological advancement.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium">Resource Assessment & Exploration</AccordionTrigger>
                    <AccordionContent>
                      Advanced geological assessment and exploration strategies for identifying and quantifying mineral 
                      resources, with particular focus on critical raw materials.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium">Sustainable Mining Practices</AccordionTrigger>
                    <AccordionContent>
                      Implementation of innovative technologies and approaches to minimize environmental impacts, 
                      reduce water and energy use, and improve safety in mining operations.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium">Supply Chain Development</AccordionTrigger>
                    <AccordionContent>
                      Strategic advisory on developing resilient and transparent supply chains for critical minerals, 
                      addressing geopolitical risks and promoting responsible sourcing.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium">Mine Closure & Rehabilitation</AccordionTrigger>
                    <AccordionContent>
                      Planning and implementation of environmentally and socially responsible mine closure and site 
                      rehabilitation, including repurposing strategies for post-mining landscapes.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                  alt="Strategic analysis and consulting"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* ESG & Climate Finance Section */}
          <div id="esg" className="mb-20 scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div>
                <h2 className="text-3xl font-merriweather text-primary font-bold mb-6">
                  ESG & Climate Finance
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Integration of environmental, social, and governance considerations into infrastructure investment 
                  decisions, and mobilization of climate finance for sustainable development.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium">ESG Integration Framework</AccordionTrigger>
                    <AccordionContent>
                      Development and implementation of comprehensive frameworks for integrating ESG factors throughout 
                      the infrastructure investment cycle, from planning to operation.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium">Green Bond Structuring</AccordionTrigger>
                    <AccordionContent>
                      Advisory services for developing green bond frameworks, selecting eligible projects, and ensuring 
                      compliance with international standards and reporting requirements.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium">Climate Finance Mobilization</AccordionTrigger>
                    <AccordionContent>
                      Strategic guidance on accessing and blending climate finance from various sources, including 
                      multilateral climate funds, development banks, and private investors.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium">Impact Measurement & Reporting</AccordionTrigger>
                    <AccordionContent>
                      Design and implementation of systems for measuring, monitoring, and reporting on the environmental 
                      and social impacts of infrastructure investments, aligned with global standards.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                  alt="Financial advisory and analysis"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Capacity Building Section */}
          <div id="capacity" className="mb-20 scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="md:order-2">
                <h2 className="text-3xl font-merriweather text-primary font-bold mb-6">
                  Capacity Building & Institutional Strengthening
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Development of human and institutional capabilities to effectively plan, implement, and manage 
                  sustainable infrastructure projects and programs.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium">Technical Skills Development</AccordionTrigger>
                    <AccordionContent>
                      Training programs and knowledge transfer initiatives to enhance technical expertise in 
                      infrastructure planning, design, construction, and management.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium">Institutional Process Improvement</AccordionTrigger>
                    <AccordionContent>
                      Advisory on strengthening organizational processes, procedures, and systems to improve 
                      efficiency, transparency, and effectiveness in infrastructure governance.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium">Policy & Regulatory Framework Development</AccordionTrigger>
                    <AccordionContent>
                      Support for developing and implementing enabling policies, regulations, and standards for 
                      sustainable infrastructure development and management.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium">Knowledge Management Systems</AccordionTrigger>
                    <AccordionContent>
                      Implementation of systems and platforms for capturing, sharing, and applying knowledge and 
                      lessons learned to continuously improve infrastructure practices.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                  alt="Strategic development consulting"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-merriweather font-bold mb-6">
            Access Specialized Expertise for Your Sector
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our team brings deep domain knowledge and practical experience across diverse infrastructure sectors.
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

export default SectorsPage;
