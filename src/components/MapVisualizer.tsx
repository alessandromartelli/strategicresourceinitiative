import React from "react";
import { Globe, Layers } from "lucide-react";

export default function MapVisualizer() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">TerraScope™ Web GIS</h2>
          <p className="text-gray-600">
            Our interactive web GIS system delivers daily deformation maps, climate model overlays, and ESG layers with automated alerts when areas exceed risk thresholds.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Map Placeholder */}
          <div className="relative h-[450px] bg-gradient-to-b from-slate-700 to-slate-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Globe className="h-16 w-16 text-[var(--clr-accent,#d98c3e)] mx-auto mb-4" />
                <p className="text-white font-medium">Interactive Map Placeholder</p>
                <p className="text-white/60 text-sm mt-2">Live Demo Available During Product Tours</p>
              </div>
            </div>
            
            {/* Map Controls */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-3 space-y-3">
              <button className="h-10 w-10 flex items-center justify-center rounded-md bg-[var(--clr-accent,#d98c3e)] text-white hover:bg-[var(--clr-accent,#d98c3e)]/90 transition-colors">
                <Layers className="h-5 w-5" />
              </button>
              <div className="w-10 h-20 bg-white/10 rounded-md flex flex-col">
                <button className="h-10 flex items-center justify-center hover:bg-white/10 rounded-t-md">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <button className="h-10 flex items-center justify-center hover:bg-white/10 rounded-b-md">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Map Legend */}
            <div className="absolute left-4 bottom-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
              <h4 className="text-white font-medium mb-2 text-sm">Deformation Risk</h4>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded"></div>
                <div className="flex justify-between text-xs text-white/80 w-full">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>
            </div>
            
            {/* Map Features */}
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              {["SAR Deformation", "ESG Layers", "Climate Risk", "Alerts"].map((feature, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          
          {/* Features Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              {
                title: "Daily Updates",
                desc: "Fresh satellite data processed every 24 hours with automatic change detection"
              },
              {
                title: "Customizable Alerts",
                desc: "Set thresholds for movement, water levels, or ESG metrics to trigger notifications"
              },
              {
                title: "Secure Role-Based Access",
                desc: "Control who sees what data with fine-grained permissions by user role"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6">
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 