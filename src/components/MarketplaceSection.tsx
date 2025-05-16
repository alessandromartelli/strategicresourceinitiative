import React from "react";
import { ShoppingCart } from "lucide-react";

interface MarketplaceSectionProps {
  className?: string;
}

export default function MarketplaceSection({ className = "" }: MarketplaceSectionProps) {
  const marketplaceItems = [
    {
      title: "Curated Data Library",
      description: "Historical surveys, SAR/optical cubes, airborne EM, DEM"
    },
    {
      title: "Pay-Per-Tile API",
      description: "OGC-standard endpoints; priced by km² or subscription"
    },
    {
      title: "AI-Ready Cubes",
      description: "Pre-stacked netCDF / COG—64 layers, aligned & scaled"
    },
    {
      title: "Revenue Share",
      description: "Upload your own data, earn 70% on every sale"
    }
  ];

  return (
    <section id="marketplace" className={`bg-slate-900 text-white py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div className="flex flex-col items-start">
          <div className="bg-[var(--clr-accent,#d98c3e)]/20 p-4 rounded-full mb-6">
            <ShoppingCart className="h-8 w-8 text-[var(--clr-accent,#d98c3e)]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">GeoData Marketplace</h2>
          <p className="text-white/80 mb-8">
            Access premium geospatial data tailored for infrastructure and mining risk analysis. 
            Purchase curated datasets for immediate download or API access.
          </p>
        </div>

        {/* Columns 2-3 */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          {marketplaceItems.map((item, index) => (
            <div 
              key={index} 
              className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 hover:border-[var(--clr-accent,#d98c3e)]/40 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-[var(--clr-accent,#d98c3e)]">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 