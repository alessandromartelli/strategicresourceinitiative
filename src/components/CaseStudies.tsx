import React, { useState } from "react";
import { ChevronRight, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);
  
  const caseStudies = [
    {
      client: "Major Mining Conglomerate",
      region: "South America",
      problem: "Tailings dam instability causing financing delays",
      solution: "Deployed SRI's comprehensive slope monitoring system and risk assessment platform",
      outcome: [
        { icon: <AlertTriangle className="h-5 w-5" />, text: "Identified 3 critical risk zones missed by conventional monitoring" },
        { icon: <TrendingUp className="h-5 w-5" />, text: "Improved overall stability score from 72% to 91%" },
        { icon: <DollarSign className="h-5 w-5" />, text: "Unlocked $420M in project financing within 60 days" }
      ],
      roi: "8.4x return on investment",
      quote: "SRI's analytics gave us the confidence to proceed with financing that had been stalled for 18 months.",
      quoteAuthor: "VP of Risk Management"
    },
    {
      client: "Development Bank",
      region: "Southeast Asia",
      problem: "Climate risk uncertainty for infrastructure corridor",
      solution: "Applied SRI's satellite-based risk assessment with enhanced climate modeling",
      outcome: [
        { icon: <AlertTriangle className="h-5 w-5" />, text: "Mapped 127 high-risk sections across 1,200km corridor" },
        { icon: <TrendingUp className="h-5 w-5" />, text: "Reduced project insurance premiums by 32%" },
        { icon: <DollarSign className="h-5 w-5" />, text: "Enabled $1.8B blended finance package" }
      ],
      roi: "12.7x return on investment",
      quote: "The granular risk data provided by SRI was instrumental in structuring our financing package.",
      quoteAuthor: "Director of Infrastructure Finance"
    },
    {
      client: "Multinational Construction Firm",
      region: "Africa",
      problem: "Recurring slope failures delaying critical dam project",
      solution: "Implemented early warning system using SRI's predictive analytics",
      outcome: [
        { icon: <AlertTriangle className="h-5 w-5" />, text: "Detected early signs of movement 22 days before visible evidence" },
        { icon: <TrendingUp className="h-5 w-5" />, text: "Reduced project delays by 74%" },
        { icon: <DollarSign className="h-5 w-5" />, text: "Saved an estimated $34M in remediation costs" }
      ],
      roi: "6.2x return on investment",
      quote: "SRI's early warning system fundamentally changed how we manage geotechnical risk.",
      quoteAuthor: "Chief Engineering Officer"
    }
  ];
  
  const activeStudy = caseStudies[activeCase];
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-[var(--clr-accent,#d98c3e)]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[var(--clr-accent,#d98c3e)] font-semibold text-sm">PROVEN RESULTS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Customer Success Stories</h2>
          <p className="text-gray-600">
            Real-world applications of our technology with measurable outcomes and ROI.
          </p>
        </div>
        
        {/* Case Study Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-4">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCase === index 
                  ? "bg-[var(--clr-accent,#d98c3e)] text-white shadow-md" 
                  : "bg-white border border-gray-200 text-gray-700 hover:border-[var(--clr-accent,#d98c3e)]"
              }`}
            >
              {study.client}
            </button>
          ))}
        </div>
        
        {/* Case Study Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2">
            {/* Left Column */}
            <div className="p-8 bg-gray-50 border-r border-gray-100">
              <div className="text-sm font-medium text-gray-500 mb-1">{activeStudy.region}</div>
              <h3 className="text-2xl font-bold mb-6">{activeStudy.client}</h3>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase text-gray-500 font-medium mb-2">Challenge</h4>
                <p className="text-gray-800">{activeStudy.problem}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase text-gray-500 font-medium mb-2">Solution</h4>
                <p className="text-gray-800">{activeStudy.solution}</p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase text-gray-500 font-medium mb-2">ROI</h4>
                <div className="bg-green-50 text-green-800 font-bold px-4 py-2 rounded-lg inline-block">
                  {activeStudy.roi}
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="p-8">
              <h4 className="text-sm uppercase text-gray-500 font-medium mb-4">Outcomes</h4>
              <div className="space-y-4 mb-8">
                {activeStudy.outcome.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 h-8 w-8 rounded-full bg-[var(--clr-accent,#d98c3e)]/10 flex items-center justify-center text-[var(--clr-accent,#d98c3e)]">
                      {item.icon}
                    </div>
                    <p className="text-gray-800">{item.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-6 mt-8">
                <blockquote className="italic text-gray-600 mb-2">
                  "{activeStudy.quote}"
                </blockquote>
                <div className="text-sm font-medium text-[var(--clr-accent,#d98c3e)]">
                  — {activeStudy.quoteAuthor}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-flex items-center text-[var(--clr-accent,#d98c3e)] font-medium hover:underline"
          >
            Request a detailed case study presentation
            <ChevronRight className="h-5 w-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
} 