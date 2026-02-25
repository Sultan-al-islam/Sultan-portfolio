import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Academic from './components/Academic';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Competitive from './components/Competitive';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="relative w-full h-full min-h-screen">
      <div className="animated-bg-glow"></div>
      {/* Smooth Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-purple-500/10 rounded-full blur-[100px] md:blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, 50, -100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] left-[30%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen"
        />
      </div>

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
