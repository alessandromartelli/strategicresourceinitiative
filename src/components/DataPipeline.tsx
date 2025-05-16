import React from "react";
import { Satellite, Cpu, Waves, Database, Monitor, Phone, FileText, Code } from "lucide-react";
import { motion } from "framer-motion";

const ingestData = [
  { icon: <Satellite className="h-8 w-8 text-[var(--clr-accent,#d98c3e)]" />, label: "Satellite Data" },
  { icon: <Cpu className="h-8 w-8 text-[var(--clr-accent,#d98c3e)]" />, label: "IoT/SCADA" },
  { icon: <Waves className="h-8 w-8 text-[var(--clr-accent,#d98c3e)]" />, label: "Climate Models" },
  { icon: <Database className="h-8 w-8 text-[var(--clr-accent,#d98c3e)]" />, label: "Historic Records" },
];

const vulcanProcess = [
  { step: 1, title: "Clean & Gap-Fill", desc: "Temporal GAN strips clouds/atmosphere." },
  { step: 2, title: "Predict", desc: "LSTM forecasts deformation 30 days ahead." },
  { step: 3, title: "Generate Indices", desc: "Slope-Failure Probability, Climate-Adjusted Asset Scores." },
];

const deliverData = [
  { icon: <Monitor className="h-8 w-8 text-[var(--clr-accent,#d98c3e)]" />, label: "TerraScope Web-GIS" },
  { icon: <Phone className="h-8 w-8 text-[var(--clr-accent,#d98c3e)]" />, label: "Atlas Field Mobile" },
  { icon: <FileText className="h-8 w-8 text-[var(--clr-accent,#d98c3e)]" />, label: "Compliance Reports" },
  { icon: <Code className="h-8 w-8 text-[var(--clr-accent,#d98c3e)]" />, label: "JSON/OGC API" },
];

export default function DataPipeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Data Pipeline</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Column 1: Ingest */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-center">Ingest</h3>
            <div className="space-y-6">
              {ingestData.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-3 bg-gray-100 rounded-full">{item.icon}</div>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Column 2: Process */}
          <motion.div 
            className="bg-[#1e1e1e] text-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-center">Vulcan AI™ Engine</h3>
            <div className="space-y-8">
              {vulcanProcess.map((process) => (
                <div key={process.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-[var(--clr-accent,#d98c3e)] flex items-center justify-center font-bold text-white">
                      {process.step}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{process.title}</h4>
                    <p className="text-sm text-white/80">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Column 3: Deliver */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-center">Deliver</h3>
            <div className="space-y-6">
              {deliverData.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-3 bg-gray-100 rounded-full">{item.icon}</div>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 