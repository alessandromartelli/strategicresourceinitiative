import { useEffect, useState } from "react";
import CTA from "@/components/CTA";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80" 
            alt="Infrastructure landscape"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="font-merriweather text-4xl md:text-5xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl">
              Strategic expertise with global impact
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-merriweather text-primary font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-12">
              We collaborate with infrastructure firms, mining companies, and blended finance institutions to develop and finance 
              sustainable projects that adhere to global standards across infrastructure and mining sectors.
            </p>
            
            <h3 className="text-2xl font-merriweather text-primary font-bold mb-6">Our Competitive Edge</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Blended-Finance Know-How</h4>
                <p className="text-gray-700">
                  Expert knowledge in structuring complex financing solutions that combine public, private, and philanthropic capital.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">SDG Impact Modelling</h4>
                <p className="text-gray-700">
                  Quantifiable assessment of how infrastructure and mining projects contribute to Sustainable Development Goals and responsible resource development.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">End-to-End Lifecycle Oversight</h4>
                <p className="text-gray-700">
                  Comprehensive monitoring from initial concept development through implementation and ongoing management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="h-12 w-12 text-primary mx-auto mb-6 opacity-70" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8v6c0 3.314-2.686 6-6 6h-2c-1.105 0-2 0.895-2 2v0c0 1.105 0.895 2 2 2h2c5.523 0 10-4.477 10-10v-6c0-1.105-0.895-2-2-2v0c-1.105 0-2 0.895-2 2zM28 8v6c0 3.314-2.686 6-6 6h-2c-1.105 0-2 0.895-2 2v0c0 1.105 0.895 2 2 2h2c5.523 0 10-4.477 10-10v-6c0-1.105-0.895-2-2-2v0c-1.105 0-2 0.895-2 2z"></path>
            </svg>
            <blockquote className="text-2xl md:text-3xl font-merriweather text-primary font-medium italic mb-8">
              "Strategic advisory ensures that technical assistance delivers real, fundable outcomes."
            </blockquote>
            <p className="text-lg font-semibold text-primary">Dr. Diego Furesi, Senior Exploration Geologist</p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-merriweather text-primary font-bold mb-10 text-center">
              Our Approach
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80" 
                  alt="Strategic planning meeting"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-merriweather font-bold mb-4">Holistic Solutions</h3>
                <p className="text-gray-700 mb-6">
                  We design comprehensive strategies that address the technical, environmental, social, and financial 
                  aspects of infrastructure and mining development, ensuring long-term sustainability and resilience.
                </p>
                <h3 className="text-xl font-merriweather font-bold mb-4">Impact-Focused</h3>
                <p className="text-gray-700">
                  All our advisory services are centered on achieving measurable impacts aligned with global sustainability 
                  standards and responsible mining practices in the regions where we operate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-merriweather font-bold mb-6">
            Work With Our Team of Experts
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Discover how our strategic approach can unlock new opportunities for your infrastructure and mining projects.
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

export default AboutPage;
