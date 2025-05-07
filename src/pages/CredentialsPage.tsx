
import { useState } from "react";
import CTA from "@/components/CTA";

type CaseStudy = {
  id: number;
  title: string;
  location: string;
  category: "mining" | "climate";
  summary: string;
  imageUrl: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Technical Due Diligence & Reserve Evaluation",
    location: "Turkey & Vietnam",
    category: "mining",
    summary: "Comprehensive assessment of mineral reserves and mining operations to support investment decisions and strategic planning for international resource companies.",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Exploration Strategy & Feasibility",
    location: "Ivory Coast & Kenya",
    category: "mining",
    summary: "Development of exploration strategies and feasibility studies for critical mineral projects, optimizing resource discovery and project economics.",
    imageUrl: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Resource Governance & EITI Compliance",
    location: "Dominican Republic",
    category: "mining",
    summary: "Implementation of governance frameworks and transparency measures to ensure compliance with Extractive Industries Transparency Initiative (EITI) standards.",
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "SAR-Based Structural Monitoring",
    location: "EU Corridors",
    category: "climate",
    summary: "Implementation of Synthetic Aperture Radar monitoring systems to detect early signs of structural stress in critical transportation infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Climate Proofing for Concessionaires",
    location: "Central Europe",
    category: "climate",
    summary: "Development of climate adaptation strategies and resilience measures for infrastructure concessionaires to protect assets from extreme weather events.",
    imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "National Roads Adaptation Plan",
    location: "North Africa",
    category: "climate",
    summary: "Creation of comprehensive adaptation plan for national road network to address climate change impacts, including extreme heat and flooding events.",
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Underground Transport Infrastructure",
    location: "Capital Structuring",
    category: "climate",
    summary: "Innovative financing solutions for major underground transportation projects, blending public funding with private investment to enable project viability.",
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Hydrogeological Modelling for Tunnels",
    location: "Central Europe",
    category: "climate",
    summary: "Advanced hydrogeological assessment and modelling to mitigate groundwater risks in major tunnel construction projects across challenging alpine terrain.",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Geotechnical Risk & Sensitivity",
    location: "EU Tunnel Projects",
    category: "climate",
    summary: "Comprehensive geotechnical risk assessment and sensitivity analysis for complex tunnel projects, informing design adaptations and construction methodologies.",
    imageUrl: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80"
  }
];

const CredentialsPage = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "mining" | "climate">("all");
  
  const filteredCaseStudies = activeFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80" 
            alt="Project credentials"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-merriweather text-4xl md:text-5xl font-bold mb-4">
              Our Credentials
            </h1>
            <p className="text-lg md:text-xl">
              Track record of impactful projects across diverse sectors and regions
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button 
                type="button" 
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
                  activeFilter === "all" 
                    ? "bg-primary text-white" 
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                All Projects
              </button>
              <button 
                type="button" 
                onClick={() => setActiveFilter("mining")}
                className={`px-6 py-2 text-sm font-medium border-t border-b ${
                  activeFilter === "mining" 
                    ? "bg-primary text-white" 
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                Mining & Resources
              </button>
              <button 
                type="button" 
                onClick={() => setActiveFilter("climate")}
                className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
                  activeFilter === "climate" 
                    ? "bg-primary text-white" 
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                Climate Resilience & Infrastructure
              </button>
            </div>
          </div>
          
          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-white bg-primary rounded-full">
                    {study.location}
                  </div>
                  <h3 className="text-xl font-merriweather font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-700 mb-4">{study.summary}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                  >
                    Download Case Study (PDF)
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-merriweather text-primary font-bold text-center mb-16">
            Our Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-merriweather font-bold text-primary mb-2">27+</div>
              <p className="text-gray-700">Countries Served</p>
            </div>
            
            <div>
              <div className="text-5xl font-merriweather font-bold text-primary mb-2">150+</div>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            
            <div>
              <div className="text-5xl font-merriweather font-bold text-primary mb-2">$4.2B</div>
              <p className="text-gray-700">Infrastructure Financing Unlocked</p>
            </div>
            
            <div>
              <div className="text-5xl font-merriweather font-bold text-primary mb-2">18+</div>
              <p className="text-gray-700">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-merriweather text-primary font-bold text-center mb-16">
            What Our Clients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <svg className="h-12 w-12 text-primary mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v6c0 3.314-2.686 6-6 6h-2c-1.105 0-2 0.895-2 2v0c0 1.105 0.895 2 2 2h2c5.523 0 10-4.477 10-10v-6c0-1.105-0.895-2-2-2v0c-1.105 0-2 0.895-2 2zM28 8v6c0 3.314-2.686 6-6 6h-2c-1.105 0-2 0.895-2 2v0c0 1.105 0.895 2 2 2h2c5.523 0 10-4.477 10-10v-6c0-1.105-0.895-2-2-2v0c-1.105 0-2 0.895-2 2z"></path>
              </svg>
              <blockquote className="text-lg italic mb-6">
                "SRI's expertise in blending technical and financial advisory was instrumental in securing the 
                necessary funding for our climate-resilient infrastructure project. Their approach to risk assessment 
                and mitigation was thorough and innovative."
              </blockquote>
              <div>
                <p className="font-semibold">Technical Director</p>
                <p className="text-sm text-gray-600">European Transport Concessionaire</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <svg className="h-12 w-12 text-primary mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v6c0 3.314-2.686 6-6 6h-2c-1.105 0-2 0.895-2 2v0c0 1.105 0.895 2 2 2h2c5.523 0 10-4.477 10-10v-6c0-1.105-0.895-2-2-2v0c-1.105 0-2 0.895-2 2zM28 8v6c0 3.314-2.686 6-6 6h-2c-1.105 0-2 0.895-2 2v0c0 1.105 0.895 2 2 2h2c5.523 0 10-4.477 10-10v-6c0-1.105-0.895-2-2-2v0c-1.105 0-2 0.895-2 2z"></path>
              </svg>
              <blockquote className="text-lg italic mb-6">
                "The team's deep understanding of both geological complexities and international financing mechanisms 
                allowed us to structure a mining project that met the highest ESG standards while remaining economically 
                viable. Their guidance throughout the process was invaluable."
              </blockquote>
              <div>
                <p className="font-semibold">Chief Strategy Officer</p>
                <p className="text-sm text-gray-600">Global Mining Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-merriweather font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our team brings proven expertise and a track record of success across diverse projects worldwide.
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

export default CredentialsPage;
