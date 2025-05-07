
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CTA from "@/components/CTA";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("sector");
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80" 
            alt="Infrastructure services"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-merriweather text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl">
              Strategic Advisory for Transformational Impact
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="sector" onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-12">
              <TabsTrigger value="sector">Sector & Project Advisory</TabsTrigger>
              <TabsTrigger value="financing">Financing Advisory</TabsTrigger>
              <TabsTrigger value="ifi">IFI Transactions Support</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sector" className="pt-6">
              <h2 className="text-2xl font-merriweather text-primary font-bold mb-8">
                Sector & Project Advisory
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">Sector Strategy Development</h3>
                  <p className="text-gray-700">Strategic planning and roadmaps for infrastructure development aligned with policy objectives.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">Technical Due Diligence</h3>
                  <p className="text-gray-700">Comprehensive assessment of technical aspects, risks, and mitigation measures.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">Project Screening</h3>
                  <p className="text-gray-700">Rapid assessment of project viability and strategic fit with development goals.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">Feasibility Studies</h3>
                  <p className="text-gray-700">Comprehensive technical, economic, and financial analysis of project viability.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">Climate Resilience Planning</h3>
                  <p className="text-gray-700">Integration of climate adaptation measures into infrastructure design and planning.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">ESG Integration</h3>
                  <p className="text-gray-700">Implementation of environmental, social, and governance frameworks across infrastructure lifecycle.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">Resource Assessment</h3>
                  <p className="text-gray-700">Evaluation of geological and natural resource potential and sustainable utilization.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">Impact Assessment</h3>
                  <p className="text-gray-700">Measuring and quantifying development impacts of infrastructure investments.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">Digital Solutions</h3>
                  <p className="text-gray-700">Implementation of monitoring systems and project management digital tools.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">Capacity Building</h3>
                  <p className="text-gray-700">Training and knowledge transfer for local institutions and project stakeholders.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">Policy Advisory</h3>
                  <p className="text-gray-700">Guidance on regulatory frameworks to enable sustainable infrastructure development.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">Recovery Design</h3>
                  <p className="text-gray-700">Post-disaster infrastructure recovery and resilience building strategies.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="financing" className="pt-6">
              <h2 className="text-2xl font-merriweather text-primary font-bold mb-8">
                Financing Advisory
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">PPP Structuring</h3>
                  <p className="text-gray-700 mb-4">
                    Expert guidance on designing public-private partnerships that balance risk allocation and provide value for money.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Risk assessment and allocation strategies</li>
                    <li>Financial model development</li>
                    <li>Performance metrics design</li>
                    <li>Contract structuring</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Blended-Finance Models</h3>
                  <p className="text-gray-700 mb-4">
                    Creative solutions that leverage concessional funding, grants, and private capital to make projects bankable.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Donor coordination</li>
                    <li>Concessional instrument design</li>
                    <li>First-loss mechanisms</li>
                    <li>Sustainability-linked finance</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">EU & Multilateral Access</h3>
                  <p className="text-gray-700 mb-4">
                    Navigation of complex application processes for funding from major development institutions.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Eligibility assessment</li>
                    <li>Proposal development</li>
                    <li>Results framework design</li>
                    <li>Compliance planning</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Green & Climate Finance</h3>
                  <p className="text-gray-700 mb-4">
                    Specialized advisory on accessing climate funds and structuring green bonds and other instruments.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Green bond framework development</li>
                    <li>Climate fund application</li>
                    <li>ESG metrics implementation</li>
                    <li>Impact reporting structures</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ifi" className="pt-6">
              <h2 className="text-2xl font-merriweather text-primary font-bold mb-8">
                IFI Transactions Support
              </h2>
              <div className="space-y-8 mb-12">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Due-Diligence Packs</h3>
                  <p className="text-gray-700">
                    Comprehensive technical, financial, environmental, and social due diligence packages that meet the 
                    rigorous requirements of International Financial Institutions. Our experts prepare all necessary 
                    documentation and assessments to facilitate smooth transactions and investment decisions.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Valuation & Scenario Modelling</h3>
                  <p className="text-gray-700">
                    Sophisticated financial models that reflect the complex realities of infrastructure investments. 
                    We develop robust scenarios that account for various risk factors, market conditions, and policy 
                    changes to provide decision-makers with clear insights for investment planning.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Transaction Advisory</h3>
                  <p className="text-gray-700">
                    End-to-end support throughout the transaction process, from initial market sounding to final 
                    deal closing. Our team provides strategic guidance on transaction structuring, negotiation 
                    support, and documentation preparation to ensure optimal outcomes for all stakeholders.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Project Development Funnel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-merriweather text-primary font-bold text-center mb-16">
            Project Development & Financing Funnel
          </h2>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Bar */}
            <div className="absolute left-0 right-0 h-2 bg-primary top-16 hidden md:block"></div>
            
            {/* Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="relative text-center">
                <div className="h-10 w-10 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-white font-bold z-10 relative">1</div>
                <h3 className="text-lg font-semibold mb-2">Gap Diagnostics</h3>
                <p className="text-sm text-gray-600">Identifying infrastructure needs and financing gaps</p>
              </div>
              
              <div className="relative text-center">
                <div className="h-10 w-10 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-white font-bold z-10 relative">2</div>
                <h3 className="text-lg font-semibold mb-2">Project Definition</h3>
                <p className="text-sm text-gray-600">Scoping and technical specification</p>
              </div>
              
              <div className="relative text-center">
                <div className="h-10 w-10 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-white font-bold z-10 relative">3</div>
                <h3 className="text-lg font-semibold mb-2">Feasibility Assessment</h3>
                <p className="text-sm text-gray-600">Technical, economic, and financial viability</p>
              </div>
              
              <div className="relative text-center">
                <div className="h-10 w-10 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-white font-bold z-10 relative">4</div>
                <h3 className="text-lg font-semibold mb-2">Project Structuring</h3>
                <p className="text-sm text-gray-600">Governance, risk allocation, and procurement</p>
              </div>
              
              <div className="relative text-center">
                <div className="h-10 w-10 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-white font-bold z-10 relative">5</div>
                <h3 className="text-lg font-semibold mb-2">Capital Structuring</h3>
                <p className="text-sm text-gray-600">Financing sources and transaction execution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-merriweather font-bold mb-6">
            Ready to Advance Your Project?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our team of experts can provide tailored advisory services to meet your specific needs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <CTA type="proposal" />
            <CTA type="discovery" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
