import React from 'react';
import { Smartphone, Globe, Monitor, Palette, Database, Cloud } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Mobile App Development',
    description: 'Custom Android and iOS application development with modern technologies like Flutter. Smooth UI, powerful features, and strong backends.',
    icon: Smartphone,
  },
  {
    title: 'Web Development',
    description: 'High-performance websites and web apps built using React, Angular, and ASP.NET Core. From landing pages to enterprise dashboards.',
    icon: Globe,
  },
  {
    title: 'Windows/Desktop Apps',
    description: 'Secure, scalable, and feature-rich desktop applications for business automation, tools, and internal company operations.',
    icon: Monitor,
  },
  {
    title: 'UI/UX & Branding',
    description: 'Clean, modern, and user-friendly designs that improve user engagement and enhance brand identity.',
    icon: Palette,
  },
  {
    title: 'API & Database',
    description: 'Enterprise-level backend (C#, SQL Server) solutions with high security, performance optimization, and structured architecture.',
    icon: Database,
  },
  {
    title: 'Cloud Deployment',
    description: 'Azure, AWS, or Google Cloud — we help you deploy, maintain, and scale your systems smoothly.',
    icon: Cloud,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Our Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We bring experience in C#, ASP.NET Core, Flutter, Angular, SQL Server, Azure, JavaScript and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon className="w-24 h-24 text-cyan-400 rotate-12" />
              </div>
              
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-cyan-500/30 group-hover:scale-110 transition-all">
                <service.icon className="w-7 h-7 text-cyan-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
