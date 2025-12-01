import React from 'react';
import { Smartphone, Download, Star } from 'lucide-react';

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden border border-slate-700 flex items-center justify-center">
                    {/* Placeholder for Pakida App Screenshot */}
                    <div className="text-center p-8">
                         <Smartphone className="w-20 h-20 text-cyan-500 mx-auto mb-4 opacity-80" />
                         <span className="text-slate-500 text-sm">App Preview Interface</span>
                    </div>
                    {/* If a real image existed: <img src="..." className="w-full h-full object-cover" /> */}
                </div>
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="inline-block px-3 py-1 bg-cyan-900/30 border border-cyan-800 rounded-full text-cyan-400 text-xs font-bold mb-4">
              FEATURED PROJECT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pakida</h2>
            <h3 className="text-xl text-slate-400 mb-6">Multi-Tool Game Utility App</h3>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Pakida is a modern multi-tool utility app containing Dice Roller, Coin Flip, Number Dial, and more fun tools with smooth animations. Designed and developed completely by AKTechSource to demonstrate our capability in building interactive mobile experiences.
            </p>

            <ul className="space-y-3 mb-8">
              {['Smooth Animations', 'Interactive UI', 'Lightweight', 'Android Native'].map((feat, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-400">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  {feat}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-slate-100 text-slate-900 font-bold rounded-lg hover:bg-white transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Available for Testing
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-500">Currently in internal testing on Google Play.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
