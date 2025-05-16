import React from "react";

export default function ArchitectureSvg() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">System Architecture</h2>
        
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="400"
            viewBox="0 0 900 400"
            className="max-w-full h-auto"
          >
            {/* Background */}
            <rect width="900" height="400" fill="#1e1e1e" rx="12" />
            
            {/* Data Sources */}
            <g transform="translate(100, 60)">
              {/* Sentinel-1 */}
              <rect width="140" height="50" rx="8" stroke="#d98c3e" strokeWidth="2" fill="none" />
              <text x="70" y="30" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="16">
                Sentinel-1
              </text>
              
              {/* Sentinel-2 */}
              <rect x="180" width="140" height="50" rx="8" stroke="#d98c3e" strokeWidth="2" fill="none" />
              <text x="250" y="30" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="16">
                Sentinel-2
              </text>
              
              {/* IoT */}
              <rect x="360" width="140" height="50" rx="8" stroke="#d98c3e" strokeWidth="2" fill="none" />
              <text x="430" y="30" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="16">
                IoT
              </text>
              
              {/* Arrow to S3 */}
              <line x1="540" y1="25" x2="600" y2="25" stroke="#d98c3e" strokeWidth="2" strokeDasharray="4" />
              <polygon points="600,20 610,25 600,30" fill="#d98c3e" />
              
              {/* S3 */}
              <rect x="620" width="80" height="50" rx="8" stroke="#d98c3e" strokeWidth="2" fill="none" />
              <text x="660" y="30" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="16">
                S3
              </text>
            </g>
            
            {/* Vulcan AI */}
            <g transform="translate(240, 140)">
              {/* Connection lines from sources */}
              <line x1="-70" y1="-30" x2="0" y2="40" stroke="#d98c3e" strokeWidth="2" />
              <line x1="80" y1="-30" x2="80" y2="40" stroke="#d98c3e" strokeWidth="2" />
              <line x1="260" y1="-30" x2="160" y2="40" stroke="#d98c3e" strokeWidth="2" />
              
              {/* Vulcan AI Box */}
              <rect x="0" y="40" width="320" height="60" rx="8" stroke="#d98c3e" strokeWidth="2" fill="rgba(217, 140, 62, 0.2)" />
              <text x="160" y="75" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="bold">
                Vulcan AI (EKS)
              </text>
              
              {/* Arrow down to STAC */}
              <line x1="160" y1="100" x2="160" y2="140" stroke="#d98c3e" strokeWidth="2" />
              <polygon points="155,140 160,150 165,140" fill="#d98c3e" />
            </g>
            
            {/* STAC Catalog */}
            <g transform="translate(320, 290)">
              <rect x="0" y="0" width="160" height="40" rx="8" stroke="#d98c3e" strokeWidth="2" fill="none" />
              <text x="80" y="25" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="16">
                STAC Catalog
              </text>
              
              {/* Arrow down to products */}
              <line x1="80" y1="40" x2="80" y2="70" stroke="#d98c3e" strokeWidth="2" />
              <polygon points="75,70 80,80 85,70" fill="#d98c3e" />
            </g>
            
            {/* Products */}
            <g transform="translate(100, 370)">
              {/* TerraScope */}
              <rect width="140" height="40" rx="8" stroke="#d98c3e" strokeWidth="2" fill="none" />
              <text x="70" y="25" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="14">
                TerraScope
              </text>
              
              {/* Atlas Field */}
              <rect x="160" width="140" height="40" rx="8" stroke="#d98c3e" strokeWidth="2" fill="none" />
              <text x="230" y="25" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="14">
                Atlas Field
              </text>
              
              {/* Compliance PDF */}
              <rect x="320" width="140" height="40" rx="8" stroke="#d98c3e" strokeWidth="2" fill="none" />
              <text x="390" y="25" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="14">
                Compliance PDF
              </text>
              
              {/* JSON API */}
              <rect x="480" width="140" height="40" rx="8" stroke="#d98c3e" strokeWidth="2" fill="none" />
              <text x="550" y="25" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontSize="14">
                JSON API
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
} 