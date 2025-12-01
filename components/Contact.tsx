import React from 'react';
import { Mail, MessageCircle, Phone, Globe } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
       {/* Decorative circles */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
       <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let’s Build Something Great Together</h2>
            <p className="text-slate-400">
              Have an idea? Want to build an app or website? We’re ready to work with you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                <div className="p-3 bg-cyan-900/20 rounded-lg">
                    <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Email Us</h4>
                  <a href="mailto:aktechsource@gmail.com" className="text-white hover:text-cyan-400 transition-colors text-lg">aktechsource@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                 <div className="p-3 bg-green-900/20 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                 </div>
                <div>
                  <h4 className="text-sm text-slate-500 font-semibold uppercase tracking-wider">WhatsApp</h4>
                  <p className="text-white text-lg">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>

             <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                 <div className="p-3 bg-blue-900/20 rounded-lg">
                    <Globe className="w-6 h-6 text-blue-400" />
                 </div>
                <div>
                  <h4 className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Website</h4>
                  <a href="https://aktechsource.com" className="text-white hover:text-cyan-400 transition-colors text-lg">AKTechSource.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                 <div className="p-3 bg-purple-900/20 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-400" />
                 </div>
                <div>
                  <h4 className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Call Us</h4>
                  <p className="text-white text-lg">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center border-t border-slate-700 pt-8">
            <p className="text-slate-500 text-sm">
                We typically reply within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};