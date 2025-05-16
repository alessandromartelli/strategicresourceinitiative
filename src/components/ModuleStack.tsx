import React from "react";
import { Satellite, Cpu, Phone, DollarSign, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const modules = [
  {
    icon: <Satellite className="h-8 w-8 text-white" />,
    title: "TerraScope™ Platform",
    desc: "Live web-GIS with daily deformation, climate-hazard & ESG layers.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-white" />,
    title: "Vulcan AI™ Engine",
    desc: "Fills satellite gaps, predicts failure 30 days ahead; low-latency API.",
  },
  {
    icon: <Phone className="h-8 w-8 text-white" />,
    title: "Atlas Field™ Mobile",
    desc: "Offline app for NI 43-101 data, photos & BLE sensors; auto-sync on cell.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-white" />,
    title: "Blended-Finance Advisory",
    desc: "Gap diagnostics → capital structuring → IFI deal support.",
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Compliance Pack",
    desc: "One-click NI 43-101, GISTM, EU-Taxonomy, CEDEX pdfs.",
  },
];

export default function ModuleStack() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Module Stack</h2>
        
        <div className="max-w-2xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-14 bottom-14 w-1 bg-[var(--clr-accent,#d98c3e)]"></div>
          
          {/* Module cards */}
          <div className="space-y-10">
            {modules.map((m, i) => (
              <motion.div
                whileHover={{ x: 8, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                key={m.title}
                className="flex items-start gap-6 bg-[#1e1e1e] rounded-2xl shadow-lg border-t-4 border-[var(--clr-accent,#d98c3e)] p-6 relative z-10"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <div className="flex-shrink-0 h-16 w-16 bg-[var(--clr-accent,#d98c3e)] rounded-full p-3 shadow-lg flex items-center justify-center z-20">
                  {m.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg mb-2">{m.title}</h4>
                  <p className="text-white/80 mb-3">{m.desc}</p>
                  <Link 
                    to="/offering#modules" 
                    className="text-[var(--clr-accent,#d98c3e)] text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 