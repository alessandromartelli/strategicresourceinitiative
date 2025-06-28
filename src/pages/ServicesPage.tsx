import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CTA from "@/components/CTA";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("sector");
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16 sm:py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80" 
            alt="Infrastructure services"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-3 sm:mb-4">
              Strategic Advisory for Transformational Impact
            </p>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Comprehensive expertise across the infrastructure development lifecycle, 
              from initial concept to successful implementation and operation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Service Areas</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end advisory services across three core areas of expertise,
                each designed to maximize project success and development impact.
              </p>
            </div>

            <Tabs defaultValue="sector" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-12 sm:mb-16 h-auto p-2 bg-white border border-gray-200 rounded-xl shadow-sm">
                <TabsTrigger 
                  value="sector" 
                  className="py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm"
                >
                  <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <span>Sector & Project Advisory</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="financing" 
                  className="py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm"
                >
                  <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <span>Financing Advisory</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="ifi" 
                  className="py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm"
                >
                  <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <span>IFI Transactions Support</span>
                  </div>
                </TabsTrigger>
              </TabsList>
            
              <TabsContent value="sector" className="pt-6 sm:pt-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 p-6 sm:p-8 border-b border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Sector & Project Advisory
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg">
                      Comprehensive strategic guidance from concept to implementation, 
                      ensuring projects align with development objectives and deliver sustainable impact.
                    </p>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      {[
                        {
                          title: "Strategic Planning & Assessment",
                          description: "Sector strategy development, technical due diligence, and comprehensive feasibility studies to establish project viability and alignment with development goals.",
                          services: ["Sector Strategy Development", "Technical Due Diligence", "Feasibility Studies", "Project Screening"]
                        },
                        {
                          title: "Climate & Sustainability Integration",
                          description: "Climate resilience planning, ESG integration, and environmental impact assessment to ensure sustainable and future-ready infrastructure.",
                          services: ["Climate Resilience Planning", "ESG Integration", "Environmental Impact Assessment", "Sustainability Frameworks"]
                        },
                        {
                          title: "Resource & Asset Management",
                          description: "Resource assessment, asset optimization, and lifecycle management strategies for efficient infrastructure development and operation.",
                          services: ["Resource Assessment", "Asset Optimization", "Lifecycle Management", "Performance Monitoring"]
                        },
                        {
                          title: "Institutional Development",
                          description: "Capacity building, policy advisory, and institutional strengthening to support effective project governance and implementation.",
                          services: ["Capacity Building", "Policy Advisory", "Institutional Strengthening", "Governance Frameworks"]
                        }
                      ].map((service, index) => (
                        <div 
                          key={index}
                          className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-md hover:border-gray-300 transition-all duration-300"
                        >
                          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                            {service.description}
                          </p>
                          <div className="space-y-2">
                            {service.services.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            
              <TabsContent value="financing" className="pt-6 sm:pt-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 p-6 sm:p-8 border-b border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Financing Advisory
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg">
                      Innovative financing solutions that bridge the gap between development needs and capital availability,
                      maximizing the impact of every investment dollar.
                    </p>
                  </div>
                
                  <div className="p-6 sm:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      {[
                        {
                          title: "PPP Structuring",
                          description: "Expert guidance on designing public-private partnerships that balance risk allocation and provide value for money.",
                          items: ["Risk assessment and allocation strategies", "Financial model development", "Performance metrics design", "Contract structuring"]
                        },
                        {
                          title: "Blended-Finance Models",
                          description: "Creative solutions that leverage concessional funding, grants, and private capital to make projects bankable.",
                          items: ["Donor coordination", "Concessional instrument design", "First-loss mechanisms", "Sustainability-linked finance"]
                        },
                        {
                          title: "EU & Multilateral Access",
                          description: "Navigation of complex application processes for funding from major development institutions.",
                          items: ["Eligibility assessment", "Proposal development", "Results framework design", "Compliance planning"]
                        },
                        {
                          title: "Green & Climate Finance",
                          description: "Specialized advisory on accessing climate funds and structuring green bonds and other instruments.",
                          items: ["Green bond framework development", "Climate fund application", "ESG metrics implementation", "Impact reporting structures"]
                        }
                      ].map((service, index) => (
                        <div 
                          key={index}
                          className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-md hover:border-gray-300 transition-all duration-300"
                        >
                          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">
                            {service.title}
                          </h3>
                          <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                            {service.description}
                          </p>
                          <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-100">
                            <ul className="space-y-2">
                              {service.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
                                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            
              <TabsContent value="ifi" className="pt-6 sm:pt-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 p-6 sm:p-8 border-b border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                      IFI Transactions Support
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg">
                      Specialized expertise in working with International Financial Institutions,
                      ensuring transactions meet the highest standards of due diligence and governance.
                    </p>
                  </div>
                
                  <div className="p-6 sm:p-8">
                    <div className="space-y-6 sm:space-y-8">
                      {[
                        {
                          title: "Due-Diligence Packs",
                          description: "Comprehensive technical, financial, environmental, and social due diligence packages that meet the rigorous requirements of International Financial Institutions. Our experts prepare all necessary documentation and assessments to facilitate smooth transactions and investment decisions.",
                          features: ["Technical Assessment", "Financial Analysis", "Environmental Impact", "Social Safeguards", "Risk Evaluation"]
                        },
                        {
                          title: "Valuation & Scenario Modelling",
                          description: "Sophisticated financial models that reflect the complex realities of infrastructure investments. We develop robust scenarios that account for various risk factors, market conditions, and policy changes to provide decision-makers with clear insights for investment planning.",
                          features: ["Financial Modeling", "Risk Scenarios", "Market Analysis", "Sensitivity Testing", "Investment Insights"]
                        },
                        {
                          title: "Transaction Advisory",
                          description: "End-to-end support throughout the transaction process, from initial market sounding to final deal closing. Our team provides strategic guidance on transaction structuring, negotiation support, and documentation preparation to ensure optimal outcomes for all stakeholders.",
                          features: ["Transaction Structuring", "Negotiation Support", "Documentation", "Deal Execution", "Stakeholder Management"]
                        }
                      ].map((service, index) => (
                        <div 
                          key={index}
                          className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-md hover:border-gray-300 transition-all duration-300"
                        >
                          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                            <div className="flex-1">
                              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">
                                {service.title}
                              </h3>
                              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                {service.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {service.features.map((feature, featureIndex) => (
                                  <span 
                                    key={featureIndex}
                                    className="px-2 sm:px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Project Development Funnel */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Project Development & Financing Funnel
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our systematic approach guides projects from initial concept through successful financing,
                ensuring each phase builds upon the previous to maximize success probability.
              </p>
            </div>
            
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                
                <div className="grid grid-cols-5 gap-6 xl:gap-8">
                  {[
                    {
                      number: 1,
                      title: "Gap Diagnostics",
                      description: "Identifying infrastructure needs and financing gaps"
                    },
                    {
                      number: 2,
                      title: "Project Definition",
                      description: "Scoping and technical specification"
                    },
                    {
                      number: 3,
                      title: "Feasibility Assessment",
                      description: "Technical, economic, and financial viability"
                    },
                    {
                      number: 4,
                      title: "Project Structuring",
                      description: "Governance, risk allocation, and procurement"
                    },
                    {
                      number: 5,
                      title: "Capital Structuring",
                      description: "Financing sources and transaction execution"
                    }
                  ].map((step, index) => (
                    <div key={index} className="relative">
                      {/* Step Circle */}
                      <div className="flex justify-center mb-8 sm:mb-12">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border-3 border-primary shadow-lg flex items-center justify-center text-primary font-bold text-lg sm:text-xl relative z-10 hover:scale-105 transition-transform duration-300">
                          {step.number}
                        </div>
                      </div>
                      
                      {/* Content Card */}
                      <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 min-h-[160px] sm:min-h-[180px]">
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 text-center leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                
                <div className="space-y-8 sm:space-y-12">
                  {[
                    {
                      number: 1,
                      title: "Gap Diagnostics",
                      description: "Identifying infrastructure needs and financing gaps"
                    },
                    {
                      number: 2,
                      title: "Project Definition",
                      description: "Scoping and technical specification"
                    },
                    {
                      number: 3,
                      title: "Feasibility Assessment",
                      description: "Technical, economic, and financial viability"
                    },
                    {
                      number: 4,
                      title: "Project Structuring",
                      description: "Governance, risk allocation, and procurement"
                    },
                    {
                      number: 5,
                      title: "Capital Structuring",
                      description: "Financing sources and transaction execution"
                    }
                  ].map((step, index) => (
                    <div key={index} className="relative flex items-start gap-6 sm:gap-8">
                      {/* Step Circle */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border-3 border-primary shadow-lg flex items-center justify-center text-primary font-bold text-lg sm:text-xl relative z-10 flex-shrink-0">
                        {step.number}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-1 sm:pt-2">
                        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Advance Your Project?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our team of experts can provide tailored advisory services to meet your specific needs
              and accelerate your infrastructure development goals.
            </p>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-center">
              <CTA type="proposal" />
              <CTA type="discovery" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
