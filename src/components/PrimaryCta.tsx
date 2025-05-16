
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PrimaryCta() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary-800 to-primary-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-white/5 backdrop-blur-sm p-10 md:p-16 rounded-2xl shadow-xl border border-white/10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8" style={{ fontFamily: "Merriweather, serif" }}>
              Ready to de-risk your mining or infrastructure project?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto font-sans leading-relaxed">
              Our experts can walk you through how satellite-based risk assessment can save your project millions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-3 font-bold text-white bg-accent hover:bg-accent-600 px-8 py-5 rounded-md text-lg transition-all shadow-lg"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/technology"
                className="flex items-center justify-center gap-3 font-bold text-accent border-2 border-accent hover:bg-accent/10 px-8 py-5 rounded-md text-lg transition-all"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
