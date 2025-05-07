
import CTA from "@/components/CTA";

type TeamMember = {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Diego Furesi",
    title: "Senior Exploration Geologist",
    bio: "Dr. Diego Furesi brings over 20 years of experience in geological exploration and resource assessment across four continents. Specializing in critical raw materials and complex geological formations, Dr. Furesi has led major exploration campaigns for multinational mining companies and advised government institutions on resource policy.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&h=500&q=80"
  },
  {
    id: 2,
    name: "Enrique Burkhalter",
    title: "Critical Raw Materials Expert",
    bio: "Enrique Burkhalter is a recognized authority on critical raw materials supply chains and their role in the clean energy transition. With a background in mineral economics and international trade, Enrique advises on strategic sourcing, market trends, and policy frameworks to ensure sustainable access to essential materials.",
    imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&h=500&q=80"
  },
  {
    id: 3,
    name: "Dr. Elisa Livi",
    title: "Critical Raw Materials & Geomechanics Specialist",
    bio: "Dr. Elisa Livi combines expertise in critical minerals with advanced understanding of geomechanical engineering. Her research on the intersection of resource extraction and structural stability has informed best practices for sustainable mining operations and infrastructure development in geologically challenging environments.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&h=500&q=80"
  },
  {
    id: 4,
    name: "Alessandro Martelli",
    title: "Finance & Valuation Analyst",
    bio: "Alessandro Martelli specializes in financial modeling and valuation for resource and infrastructure projects. With a background in investment banking and international development finance, Alessandro develops sophisticated financial structures that align public and private capital to achieve sustainable development outcomes.",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&h=500&q=80"
  }
];

const TeamPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1920&q=80" 
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-merriweather text-4xl md:text-5xl font-bold mb-4">
              Our Team
            </h1>
            <p className="text-lg md:text-xl">
              Expert professionals with specialized knowledge and global experience
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="sr-only">Our Team Members</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col md:flex-row gap-6">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto md:mx-0 flex-shrink-0">
                  <img 
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-merriweather text-primary font-bold mb-1 text-center md:text-left">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-4 text-center md:text-left">{member.title}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Collective Competencies Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-merriweather text-primary font-bold text-center mb-16">
            Collective Competencies
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center min-w-[160px]">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="font-semibold">Geology</span>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center min-w-[160px]">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-semibold">Finance</span>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center min-w-[160px]">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="font-semibold">Digital Solutions</span>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center min-w-[160px]">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span className="font-semibold">ESG</span>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center min-w-[160px]">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-semibold">Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-merriweather text-primary font-bold text-center mb-16">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="h-20 w-20 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-merriweather font-bold mb-4">Excellence</h3>
              <p className="text-gray-700">
                We are committed to delivering the highest quality services and solutions, 
                maintaining rigorous standards in all aspects of our work.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-20 w-20 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-merriweather font-bold mb-4">Collaboration</h3>
              <p className="text-gray-700">
                We value partnerships with clients, communities, and institutions, 
                working together to achieve shared goals and sustainable outcomes.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-20 w-20 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5M8 3.935V5.5A2.5 2.5 0 0110.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0120 5.5v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-merriweather font-bold mb-4">Sustainability</h3>
              <p className="text-gray-700">
                We are dedicated to promoting environmental stewardship, social equity, and 
                economic prosperity through all our advisory services and project work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-merriweather text-primary font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We're always looking for talented professionals who share our values and passion 
              for sustainable infrastructure development. Explore opportunities to work with us.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-merriweather font-bold mb-6">
            Work With Our Experts
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Connect with our specialized team to address your most complex infrastructure and resource challenges.
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

export default TeamPage;
