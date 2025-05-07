
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the logic to submit the form data
    console.log("Form submitted:", formData, file);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      organization: "",
      email: "",
      message: "",
    });
    setFile(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80" 
            alt="Contact us"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-merriweather text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl">
              Reach out to discuss how we can support your infrastructure and financing needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-merriweather text-primary font-bold mb-8">
                Get in Touch
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
                    Upload RFP (optional)
                  </label>
                  <Input
                    id="file"
                    name="file"
                    type="file"
                    onChange={handleFileChange}
                    className="w-full"
                    accept=".pdf,.doc,.docx"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Accepted formats: PDF, DOC, DOCX (max 10MB)
                  </p>
                </div>
                
                <div>
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 h-auto">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Map and Contact Info */}
            <div>
              {/* Map Placeholder */}
              <div className="w-full h-80 bg-gray-200 mb-8 rounded-lg overflow-hidden">
                {/* This would be replaced with an actual map component */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Map Placeholder - Global Operations
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-merriweather text-primary font-bold">
                  Contact Information
                </h3>
                
                <div>
                  <h4 className="font-semibold mb-2">Global Headquarters</h4>
                  <p className="text-gray-700">
                    Our team operates globally with regional presence across multiple continents.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <a href="mailto:info@sri-advisory.com" className="text-accent hover:underline">
                    info@sri-advisory.com
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Connect with us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:text-accent">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-primary hover:text-accent">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-merriweather text-primary font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">What types of projects do you typically work on?</h3>
              <p className="text-gray-700">
                We specialize in infrastructure and resource projects across multiple sectors, including transportation, 
                mining, energy, and water. Our focus is on projects that contribute to sustainable development and climate resilience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">How do you charge for your services?</h3>
              <p className="text-gray-700">
                Our fee structures vary based on project scope, complexity, and duration. We offer options including 
                fixed fee arrangements, time-based billing, and success-based components for financing advisory.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Do you work with public sector clients?</h3>
              <p className="text-gray-700">
                Yes, we work extensively with public sector entities, including national and local governments, 
                state-owned enterprises, and multilateral development institutions, as well as private sector clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">What regions do you operate in?</h3>
              <p className="text-gray-700">
                We operate globally, with particular focus on Europe, Africa, Asia, and Latin America. Our team 
                has experience working in over 27 countries across diverse geographical and regulatory contexts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-merriweather text-primary font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-700 mb-8">
              Stay updated with the latest insights, industry trends, and our upcoming events.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-600 mt-4">
              By subscribing, you agree to our privacy policy and consent to receive email updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
