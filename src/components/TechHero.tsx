import React from "react";

export default function TechHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(to top, rgba(30, 30, 30, 0.9), rgba(30, 30, 30, 0.6)), url('/bg/technology-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white py-24">
        <div className="inline-block bg-[var(--clr-accent,#d98c3e)]/20 px-4 py-2 rounded-full mb-6">
          <span className="text-[var(--clr-accent,#d98c3e)] font-semibold text-sm">PROPRIETARY TECHNOLOGY</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          SRI's Advanced Risk Assessment Platform
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-white/90 mb-8">
          Our satellite-based analytics engine reduces infrastructure failure risk by 40% and accelerates financing timelines by 3x.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#marketplace" className="bg-[var(--clr-accent,#d98c3e)] hover:bg-[var(--clr-accent,#d98c3e)]/90 text-white px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all">
            Explore Data Marketplace
          </a>
          <a href="#pipeline" className="border-2 border-white/70 hover:border-white text-white px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all">
            View Processing Pipeline
          </a>
        </div>
        
        {/* Key Metrics Banner */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-[var(--clr-accent,#d98c3e)] font-bold text-3xl md:text-4xl mb-2">91%</div>
            <p className="text-white/80 text-sm">Prediction accuracy for slope failures</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-[var(--clr-accent,#d98c3e)] font-bold text-3xl md:text-4xl mb-2">$4.2B</div>
            <p className="text-white/80 text-sm">Infrastructure value protected</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-[var(--clr-accent,#d98c3e)] font-bold text-3xl md:text-4xl mb-2">3-5x</div>
            <p className="text-white/80 text-sm">ROI for client projects</p>
          </div>
        </div>
      </div>
    </section>
  );
} 