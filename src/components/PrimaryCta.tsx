import React from "react";
import { Link } from "react-router-dom";

export default function PrimaryCta() {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-[#1e1e1e]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
          Ready to de-risk your mining or infrastructure project?
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Our experts can walk you through how satellite-based risk assessment can save your project millions.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/contact"
            className="inline-flex items-center font-bold text-white bg-[var(--clr-accent,#d98c3e)] hover:bg-[var(--clr-accent,#d98c3e)]/90 px-8 py-4 rounded-full text-lg transition-all shadow-lg"
          >
            Schedule a Demo
          </Link>
          <Link
            to="/technology"
            className="inline-flex items-center font-bold text-[var(--clr-accent,#d98c3e)] border-2 border-[var(--clr-accent,#d98c3e)] hover:bg-[var(--clr-accent,#d98c3e)] hover:text-white px-8 py-4 rounded-full text-lg transition-all"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
} 