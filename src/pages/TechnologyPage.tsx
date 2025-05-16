
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
    <div className="bg-white">
      <TechHero />
      
      <div id="data-pipeline" className="pt-16">
        <DataPipeline />
      </div>
      
      <section className="py-20 bg-gray-50">
        <DataCubeInfo />
      </section>
      
      <section id="map-visualizer" className="py-20">
        <MapVisualizer />
      </section>
      
      <section className="py-20 bg-gray-50">
        <CompetitiveAdvantage />
      </section>
      
      {/* Interactive Data Insights Dashboard */}
      <section id="insights" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-4">
              <span className="text-accent font-medium text-sm uppercase tracking-wide">INTERACTIVE DATA INSIGHTS</span>
            </div>
            <h2 className="heading-2 mb-6" style={{ fontFamily: "Merriweather, serif" }}>Advanced Analytics Dashboard</h2>
            <p className="text-body-1 text-muted-foreground max-w-2xl mx-auto">
              Explore our enterprise-grade analytics dashboard that provides actionable insights for risk reduction and infrastructure optimization.
            </p>
          </div>
          
          <div className="mt-10">
            <DataInsightsDashboard />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <CaseStudies />
      </section>
      
      <section className="py-20">
        <PricingModel />
      </section>
      
      <section id="marketplace" className="py-20 bg-gray-50">
        <MarketplaceSection />
      </section>
      
      <CtaRibbon 
        title="Ready to Experience Our Technology?" 
        description="Schedule a demo to see how our platform can transform your infrastructure risk management."
        buttonText="Request Demo"
        buttonLink="/contact"
      />
      
      <PrimaryCta />
    </div>
  );
}
