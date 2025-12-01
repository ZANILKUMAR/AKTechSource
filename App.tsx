import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;
