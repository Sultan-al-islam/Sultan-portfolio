import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Academic from './components/Academic';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Competitive from './components/Competitive';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative w-full h-full min-h-screen">
      <div className="animated-bg-glow"></div>

      <Navbar />

      <main className="flex flex-col items-center w-full">
        <div className="w-full">
          <Hero />
        </div>
        <div className="w-full">
          <Academic />
        </div>
        <div className="w-full">
          <Skills />
        </div>
        <div className="w-full">
          <Projects />
        </div>
        <div className="w-full">
          <Competitive />
        </div>
        <div className="w-full mb-12">
          <Contact />
        </div>
      </main>

      <footer className="w-full py-8 text-center text-gray-500 text-sm border-t border-white/10 relative z-10 bg-black/20 backdrop-blur-md">
        <p>© {new Date().getFullYear()} Sultan Al Islam. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-60">Designed & Built with React, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
