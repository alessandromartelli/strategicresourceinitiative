import React from "react";
import { Check, Info } from "lucide-react";

export default function PricingModel() {
  const plans = [
    {
      name: "Standard",
      price: "$3,500",
      unit: "per mine / month",
      description: "Complete risk monitoring for single asset",
      features: [
        "Daily deformation updates",
        "30-day predictive analytics",
        "Web GIS access (5 users)",
        "Monthly risk reports",
        "Email alerts"
      ],
      limitations: [
        "Limited historical data (1 year)",
        "Basic climate modeling"
      ],
      cta: "Request Demo",
      popular: false
    },
    {
      name: "Enterprise",
      price: "$8,900",
      unit: "per mine / month",
      description: "Advanced analytics with custom integrations",
      features: [
        "Real-time deformation updates",
        "90-day predictive analytics",
        "API access & custom integrations",
        "Web GIS access (unlimited users)",
        "Weekly risk reports",
        "SMS & email alerts",
        "Custom alert thresholds",
        "Financial risk analysis"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: true
    },
    {
      name: "Data Marketplace",
      price: "Pay-Per-Tile",
      unit: "starting at $350",
      description: "On-demand access to processed data products",
      features: [
        "Individual data tiles",
        "Bulk purchase discounts",
        "Historical archives (6 years)",
        "AI-ready data formats",
        "OGC-standard endpoints",
        "Custom area extraction"
      ],
      limitations: [
        "No predictive analytics",
        "Web viewer only (no API)"
      ],
      cta: "Browse Marketplace",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-[var(--clr-accent,#d98c3e)]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[var(--clr-accent,#d98c3e)] font-semibold text-sm">REVENUE MODEL</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Clear Pricing Structure</h2>
          <p className="text-gray-600">
            Transparent SaaS pricing with high margins (82% gross) and predictable recurring revenue.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                rounded-2xl overflow-hidden shadow-lg border
                ${plan.popular 
                  ? "border-[var(--clr-accent,#d98c3e)] relative" 
                  : "border-gray-100"
                }
              `}
            >
              {plan.popular && (
                <div className="bg-[var(--clr-accent,#d98c3e)] text-white text-xs font-bold uppercase py-1 px-4 text-center">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold">{plan.price}</div>
                  <div className="text-gray-500 text-sm">{plan.unit}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-500 text-sm">
                      <Info className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`
                    w-full py-3 rounded-lg font-bold transition-colors
                    ${plan.popular 
                      ? "bg-[var(--clr-accent,#d98c3e)] text-white hover:bg-[var(--clr-accent,#d98c3e)]/90" 
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }
                  `}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enterprise Custom */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-3">Custom Services Available</h3>
              <p className="text-gray-600 mb-4">
                For development banks, government agencies, and large mining corporations, we offer custom packages that include bespoke risk modeling, on-site integration, and specialized compliance reporting.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-medium">Training & Implementation</span>
                <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-medium">Compliance Frameworks</span>
                <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-medium">Financing Advisory</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <button className="bg-[var(--clr-accent,#d98c3e)] text-white px-8 py-3 rounded-lg font-bold hover:bg-[var(--clr-accent,#d98c3e)]/90 transition-colors">
                Contact Enterprise Sales
              </button>
            </div>
          </div>
        </div>
        
        {/* Investor Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-xs font-medium text-gray-500 uppercase mb-2">Average Contract Value</div>
            <div className="text-2xl font-bold mb-1">$104,400</div>
            <div className="text-sm text-green-600">↑ 38% YoY</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-xs font-medium text-gray-500 uppercase mb-2">Customer Acquisition Cost</div>
            <div className="text-2xl font-bold mb-1">$19,700</div>
            <div className="text-sm text-green-600">↓ 12% YoY</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-xs font-medium text-gray-500 uppercase mb-2">Gross Margin</div>
            <div className="text-2xl font-bold mb-1">82%</div>
            <div className="text-sm text-green-600">↑ 3% YoY</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-xs font-medium text-gray-500 uppercase mb-2">Retention Rate</div>
            <div className="text-2xl font-bold mb-1">94%</div>
            <div className="text-sm text-green-600">↑ 2% YoY</div>
          </div>
        </div>
      </div>
    </section>
  );
} 