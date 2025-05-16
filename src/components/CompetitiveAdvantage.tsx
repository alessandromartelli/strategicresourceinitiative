import React from "react";
import { CheckCircle, Lock, Zap, BarChart, Clock, CreditCard } from "lucide-react";

export default function CompetitiveAdvantage() {
  const advantages = [
    {
      icon: <Lock className="h-6 w-6 text-[var(--clr-accent,#d98c3e)]" />,
      title: "Proprietary Algorithms",
      description: "Patented temporal GAN for cloud removal and LSTM for deformation prediction with 91% accuracy.",
      metric: "3 patents filed"
    },
    {
      icon: <Zap className="h-6 w-6 text-[var(--clr-accent,#d98c3e)]" />,
      title: "Processing Speed",
      description: "Process and analyze satellite data 8x faster than traditional methods with our parallel computing architecture.",
      metric: "Hours vs. weeks"
    },
    {
      icon: <BarChart className="h-6 w-6 text-[var(--clr-accent,#d98c3e)]" />,
      title: "Predictive Accuracy",
      description: "30-day forward prediction of slope failures with 91% accuracy, compared to industry standard of 60-70%.",
      metric: "91% accuracy"
    },
    {
      icon: <Clock className="h-6 w-6 text-[var(--clr-accent,#d98c3e)]" />,
      title: "Early Risk Detection",
      description: "Identify potential failures up to 30 days earlier than traditional monitoring systems.",
      metric: "30-day lead time"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-[var(--clr-accent,#d98c3e)]" />,
      title: "Financing Integration",
      description: "Direct API integrations with leading financial institutions' risk assessment frameworks.",
      metric: "7 bank integrations"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-[var(--clr-accent,#d98c3e)]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[var(--clr-accent,#d98c3e)] font-semibold text-sm">FOR INVESTORS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Competitive Edge</h2>
          <p className="text-gray-600">
            SRI has built significant barriers to entry through proprietary technology, deep domain expertise, and strategic partnerships.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[var(--clr-accent,#d98c3e)]/10 rounded-full mr-4">
                  {advantage.icon}
                </div>
                <h3 className="font-bold text-lg">{advantage.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{advantage.description}</p>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm font-bold">{advantage.metric}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 border border-[var(--clr-accent,#d98c3e)]/30 rounded-2xl bg-[var(--clr-accent,#d98c3e)]/5 mx-auto max-w-4xl">
          <h3 className="text-xl font-bold mb-4 text-center">Market Position & Growth Potential</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$12.5B</div>
              <p className="text-sm text-gray-600">Total Addressable Market</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">218%</div>
              <p className="text-sm text-gray-600">Annual Growth Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$9.2M</div>
              <p className="text-sm text-gray-600">ARR Projection (2024)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 