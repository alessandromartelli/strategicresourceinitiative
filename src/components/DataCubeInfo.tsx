import React from "react";
import { BarChart3, Cpu, Database, EyeIcon, Share2 } from "lucide-react";

export default function DataCubeInfo() {
  return (
    <section id="pipeline" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Vulcan AI™ Engine</h2>
          
          {/* Processing Pipeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-[var(--clr-accent,#d98c3e)]"></div>
            
            {/* Steps */}
            <div className="space-y-16">
              <div className="flex gap-6">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-[var(--clr-accent,#d98c3e)] flex items-center justify-center shadow-lg z-10">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Data Ingestion & Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Sentinel-1 SAR, Sentinel-2 optical, and ground sensors are fused into a standardized data cube. Our proprietary GAN strips clouds and atmospheric effects from images.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Multi-sensor fusion (SAR + optical + ground)</li>
                    <li>• Cloud & atmosphere removal via GAN</li>
                    <li>• Temporal alignment across 6-year baseline</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-[var(--clr-accent,#d98c3e)] flex items-center justify-center shadow-lg z-10">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">AI Prediction & Risk Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    Our LSTM neural network predicts slope deformation 30 days ahead with 91% accuracy. Climate models are incorporated to adjust risk estimates for seasonal variations.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• 30-day forward prediction (LSTM + transformer)</li>
                    <li>• Climate-adjusted stress models</li>
                    <li>• Failure probability computation</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-[var(--clr-accent,#d98c3e)] flex items-center justify-center shadow-lg z-10">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Risk Scores & Financial Metrics</h3>
                  <p className="text-gray-600 mb-4">
                    Risk patterns are converted to bank-grade probability scores and financial metrics that align with EU Taxonomy, TCFD, and Equator Principles for seamless inclusion in term sheets.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Bank-grade risk scoring (0.1-10.0)</li>
                    <li>• Regulatory alignment (EU Taxonomy, TCFD, GISTM)</li>
                    <li>• Financial impact simulation</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-[var(--clr-accent,#d98c3e)] flex items-center justify-center shadow-lg z-10">
                    <Share2 className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Data Delivery & Integration</h3>
                  <p className="text-gray-600 mb-4">
                    Access risk data through TerraScope web app, Atlas Field mobile, compliance reports, or direct API integration with existing enterprise systems.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• TerraScope web GIS (role-based access)</li>
                    <li>• Atlas Field mobile app (offline capable)</li>
                    <li>• API integration (JSON & OGC standards)</li>
                    <li>• Compliance PDF reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 