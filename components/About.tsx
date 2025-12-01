import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-30"></div>
             <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team collaborating" 
              className="relative rounded-2xl shadow-2xl border border-slate-700 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-cyan-500 block rounded-full"></span>
              About Us
            </h2>
            <p className="text-xl text-slate-300 mb-6 font-light">
              AKTechSource is a modern software development startup based in India, founded with the vision to make digital solutions <span className="text-cyan-400 font-medium">affordable</span> and <span className="text-cyan-400 font-medium">powerful</span>.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We specialize in creating reliable, user-friendly, and secure applications for businesses across the world. We combine clean design with strong architecture to bring your ideas to life.
            </p>
            
            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="p-3 bg-slate-800 rounded-lg h-fit border border-slate-700">
                  <Target className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Mission</h3>
                  <p className="text-slate-400 text-sm">To build technology that simplifies life, accelerates business growth, and delivers real value.</p>
                </div>
              </div>

               <div className="flex gap-4">
                <div className="p-3 bg-slate-800 rounded-lg h-fit border border-slate-700">
                  <Lightbulb className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Vision</h3>
                  <p className="text-slate-400 text-sm">Democratizing high-quality software development for startups and small businesses worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
