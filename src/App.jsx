import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Learnings from './components/Learnings';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import { ThemeProvider, LangProvider } from './context/Context';

function AppContent() {
  return (
    <div className="min-h-screen selection:bg-[var(--color-primary)]/30 selection:text-[var(--color-primary)] overflow-x-hidden transition-colors duration-500">

      {/* Background with noise texture and gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-[0.4]" />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">

        {/* Bento Grid Layout - Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max">

          {/* Row 1 */}
          <div className="md:col-span-2 md:row-span-2 bento-card min-h-[450px] p-6">
            <Hero />
          </div>

          <div className="md:col-span-2 bento-card p-6" id="about">
            <About />
          </div>

          {/* Row 2 */}
          <div className="md:col-span-2 bento-card p-6" id="experience">
            <Experience />
          </div>

          {/* Row 3 */}
          <div className="md:col-span-3 bento-card min-h-[300px] p-6" id="stack">
            <Stack />
          </div>

          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="bento-card p-4">
              <Learnings />
            </div>
            <div className="bento-card p-4">
              <Hobbies />
            </div>
          </div>

          {/* Row 4 - Projects */}
          <div className="md:col-span-4 bento-card p-6" id="projects">
            <Projects />
          </div>

          {/* Row 5 - Contact centered */}
          <div className="md:col-start-2 md:col-span-2 bento-card p-6" id="contact">
            <Contact />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AppContent />
      </LangProvider>
    </ThemeProvider>
  );
}
