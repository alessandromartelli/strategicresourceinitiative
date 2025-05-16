import React, { useEffect, useState } from "react";
import { animateNumber } from "../lib/utils";

const kpis = [
  { value: 8.2, prefix: "$", suffix: "bn", label: "projects de-risked" },
  { value: 27000, suffix: "km", label: "climate-proofed corridors" },
  { value: 1.4, suffix: "Mt CO₂e", label: "mitigated" },
];

export default function KpiBanner() {
  const [counters, setCounters] = useState([0, 0, 0]);

  useEffect(() => {
    kpis.forEach((kpi, idx) => {
      animateNumber(0, kpi.value, 1500, (value) => {
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[idx] = value;
          return newCounters;
        });
      });
    });
  }, []);

  return (
    <section className="py-16 bg-[#1e1e1e] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {kpis.map((kpi, idx) => (
            <div key={idx} className="text-center" style={{ fontFamily: "Inter, sans-serif" }}>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[var(--clr-accent,#d98c3e)]">
                {kpi.prefix && kpi.prefix}{" "}
                {kpi.value >= 100
                  ? Math.round(counters[idx])
                  : counters[idx].toFixed(1)}
                {" "}{kpi.suffix}
              </div>
              <div className="text-lg text-white/80">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 