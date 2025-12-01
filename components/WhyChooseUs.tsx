import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Professional development with clean code",
  "Fast delivery & on-time communication",
  "Affordable pricing for startups",
  "Custom solutions based on your needs",
  "Support even after project delivery",
  "Skilled in modern technologies & best practices"
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">Why Choose <span className="text-cyan-400">AKTechSource?</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-colors text-left">
              <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
              <p className="text-slate-300 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-slate-800/50 rounded-2xl border border-slate-700 max-w-4xl mx-auto backdrop-blur-sm">
          <p className="text-2xl font-light text-slate-200">
            "Your idea + our expertise = <span className="font-bold text-white">a powerful product.</span>"
          </p>
        </div>
      </div>
    </section>
  );
};
