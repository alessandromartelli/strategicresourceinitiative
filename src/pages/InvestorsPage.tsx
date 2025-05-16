import React from "react";
import { ChevronRight, BarChart3, LineChart, TrendingUp, DollarSign, Users, Landmark } from "lucide-react";

// Reusing components created for other pages
import CompetitiveAdvantage from "../components/CompetitiveAdvantage";
import CaseStudies from "../components/CaseStudies";
import PricingModel from "../components/PricingModel";

export default function InvestorsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(to top, rgba(30, 30, 30, 0.9), rgba(30, 30, 30, 0.6)), url('./bg/investor-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white py-24">
          <div className="inline-block bg-[var(--clr-accent,#d98c3e)]/20 px-4 py-2 rounded-full mb-6">
            <span className="text-[var(--clr-accent,#d98c3e)] font-semibold text-sm">INVESTOR RELATIONS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Strategic Resources Initiative
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90 mb-8">
            Transforming infrastructure risk assessment with satellite analytics
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#highlights" className="bg-[var(--clr-accent,#d98c3e)] hover:bg-[var(--clr-accent,#d98c3e)]/90 text-white px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all">
              Financial Highlights
            </a>
            <a href="#strategy" className="border-2 border-white/70 hover:border-white text-white px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all">
              Growth Strategy
            </a>
          </div>
        </div>
      </section>
      
      {/* Key Metrics */}
      <section id="highlights" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Financial Highlights</h2>
            <p className="text-gray-600">
              SRI is experiencing rapid growth with strong unit economics and clear path to profitability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Financial Metrics */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[var(--clr-accent,#d98c3e)]/10 rounded-full mr-4">
                  <TrendingUp className="h-6 w-6 text-[var(--clr-accent,#d98c3e)]" />
                </div>
                <h3 className="font-bold text-lg">Growth</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Annual Revenue Growth</span>
                    <span className="font-bold">218%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{width: "80%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Client Expansion Rate</span>
                    <span className="font-bold">147%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{width: "60%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">New Contracts (YoY)</span>
                    <span className="font-bold">+32</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{width: "70%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Unit Economics */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[var(--clr-accent,#d98c3e)]/10 rounded-full mr-4">
                  <DollarSign className="h-6 w-6 text-[var(--clr-accent,#d98c3e)]" />
                </div>
                <h3 className="font-bold text-lg">Unit Economics</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">LTV:CAC Ratio</span>
                    <span className="font-bold">5.3x</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{width: "85%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Gross Margin</span>
                    <span className="font-bold">82%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{width: "82%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">CAC Payback</span>
                    <span className="font-bold">7.2 months</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{width: "75%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Projections */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[var(--clr-accent,#d98c3e)]/10 rounded-full mr-4">
                  <LineChart className="h-6 w-6 text-[var(--clr-accent,#d98c3e)]" />
                </div>
                <h3 className="font-bold text-lg">Projections</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">ARR 2024</span>
                    <span className="font-bold">$9.2M</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-purple-500 rounded-full" style={{width: "65%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">ARR 2025 (proj.)</span>
                    <span className="font-bold">$21.8M</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-purple-500 rounded-full" style={{width: "85%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Break-even</span>
                    <span className="font-bold">Q2 2025</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-purple-500 rounded-full" style={{width: "70%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Growth Strategy */}
      <section id="strategy" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Growth Strategy</h2>
            <p className="text-gray-600">
              Our three-phase approach to market expansion and revenue growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm relative border-t-4 border-blue-500">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                PHASE 1: 2023-2024
              </div>
              <h3 className="text-lg font-bold mt-4 mb-3">Mining Sector Focus</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Expand client base in top-tier mining companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Launch Data Marketplace for broader reach</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Strategic partnerships with mining consultancies</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-sm font-medium">Target Revenue:</div>
                <div className="text-xl font-bold">$9.2M ARR</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm relative border-t-4 border-teal-500">
              <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                PHASE 2: 2025-2026
              </div>
              <h3 className="text-lg font-bold mt-4 mb-3">Infrastructure Expansion</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Enter transportation & utilities sectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Release financing integration APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Launch self-service platform</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-sm font-medium">Target Revenue:</div>
                <div className="text-xl font-bold">$28M ARR</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm relative border-t-4 border-purple-500">
              <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                PHASE 3: 2027+
              </div>
              <h3 className="text-lg font-bold mt-4 mb-3">Global Risk Platform</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Expand to insurance & reinsurance markets</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Launch climate adaptation predictive suite</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>International expansion focus (APAC, LATAM)</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-sm font-medium">Target Revenue:</div>
                <div className="text-xl font-bold">$65M+ ARR</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-600">
              Experienced leadership with technical depth and domain expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Leadership profiles would go here - using placeholders */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-lg font-bold text-center">Dr. Sarah Chen</h3>
              <div className="text-[var(--clr-accent,#d98c3e)] text-center text-sm mb-4">CEO & Co-Founder</div>
              <p className="text-gray-600 text-sm text-center">
                Former NASA JPL Lead Engineer with 15+ years in satellite systems. PhD in Remote Sensing from MIT.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-lg font-bold text-center">James Rodriguez</h3>
              <div className="text-[var(--clr-accent,#d98c3e)] text-center text-sm mb-4">CTO</div>
              <p className="text-gray-600 text-sm text-center">
                Former Google AI Research Lead. Expert in geospatial ML applications with 20+ published papers.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-lg font-bold text-center">Michael Thompson</h3>
              <div className="text-[var(--clr-accent,#d98c3e)] text-center text-sm mb-4">CFO</div>
              <p className="text-gray-600 text-sm text-center">
                Former VP at Morgan Stanley, specialist in infrastructure financing. MBA from Wharton.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="/team" className="text-[var(--clr-accent,#d98c3e)] font-medium hover:underline flex items-center justify-center">
              View full team <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Advisors/Investors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Backed By</h2>
            <p className="text-gray-600">
              Our trusted advisors and investment partners
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
            {/* Logos would go here - using placeholders */}
            <div className="h-16 w-32 bg-gray-200 rounded"></div>
            <div className="h-16 w-32 bg-gray-200 rounded"></div>
            <div className="h-16 w-32 bg-gray-200 rounded"></div>
            <div className="h-16 w-32 bg-gray-200 rounded"></div>
            <div className="h-16 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-[var(--clr-accent,#d98c3e)]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Learning More?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our investor relations team is available to provide additional information, arrange meetings with our leadership team, or share our detailed investor deck.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-[var(--clr-accent,#d98c3e)] hover:bg-[var(--clr-accent,#d98c3e)]/90 text-white px-8 py-4 rounded-lg font-bold transition-all">
                Contact Investor Relations
              </a>
              <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-800 px-8 py-4 rounded-lg font-bold transition-all">
                Download Investor Deck
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reused Components */}
      <CompetitiveAdvantage />
      <CaseStudies />
      <PricingModel />
    </div>
  );
} 