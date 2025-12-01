import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-2">
            <span className="text-lg font-bold text-slate-200">AKTechSource</span>
            <p className="text-slate-500 text-sm">
            © 2025 AKTechSource Technologies. All Rights Reserved.
            </p>
            <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-2">
                <span>Made with passion in India</span>
                <img src="https://flagcdn.com/w20/in.png" alt="India Flag" className="w-5" />
            </div>
        </div>
      </div>
    </footer>
  );
};
