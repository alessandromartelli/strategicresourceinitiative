import React from "react";
import TechHero from "../components/TechHero";
import DataCubeInfo from "../components/DataCubeInfo";
import MapVisualizer from "../components/MapVisualizer";
import MarketplaceSection from "../components/MarketplaceSection";
import CtaRibbon from "../components/CtaRibbon";
import DataPipeline from "../components/DataPipeline";
import KpiBanner from "../components/KpiBanner";
import CompetitiveAdvantage from "../components/CompetitiveAdvantage";
import CaseStudies from "../components/CaseStudies";
import PricingModel from "../components/PricingModel";
import DataInsightsDashboard from "../components/DataInsightsDashboard";

export default function TechnologyPage() {
  return (
    <div>
      <TechHero />
      <DataPipeline />
      <DataCubeInfo />
      <MapVisualizer />
      <CompetitiveAdvantage />
      
      {/* Interactive Data Insights Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-4">
              <span className="text-accent font-medium text-sm">INTERACTIVE DATA INSIGHTS</span>
            </div>
            <h2 className="heading-2 mb-6">Advanced Analytics Dashboard</h2>
            <p className="text-body-1 text-muted-foreground max-w-2xl mx-auto">
              Explore our enterprise-grade analytics dashboard that provides actionable insights for risk reduction and infrastructure optimization.
            </p>
          </div>
          
          <div className="mt-8">
            <DataInsightsDashboard />
          </div>
        </div>
      </section>
      
      <CaseStudies />
      <PricingModel />
      <MarketplaceSection />
      <CtaRibbon 
        title="Ready to Experience Our Technology?" 
        description="Schedule a demo to see how our platform can transform your infrastructure risk management."
        buttonText="Request Demo"
        buttonLink="/contact"
      />
    </div>
  );
} 