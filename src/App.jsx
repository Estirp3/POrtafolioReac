import React from 'react';
import {
  Navbar,
  Hero,
  About,
  Stack,
  Projects,
  Experience,
  Contact,
  Learnings,
  Hobbies,
  Footer
} from './components';
import { ThemeProvider, LangProvider } from './context';

function AppContent() {
  return (
    <div className="min-h-screen selection:bg-[var(--color-primary)]/20 selection:text-[var(--color-primary)] overflow-x-hidden transition-colors duration-500 relative">

      {/* Modern Background: Subtle mesh gradients and radial grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-60" />
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] bg-indigo-600/10 dark:bg-indigo-500/15 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute top-[35%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 dark:bg-purple-500/12 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[35vw] h-[35vw] bg-sky-600/10 dark:bg-sky-500/10 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '5s' }} />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">

        {/* Bento Grid Layout - Balanced Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Row 1: Hero Showcase (Full Width Bento Hero) */}
          <div className="col-span-1 md:col-span-4 bento-card p-6 sm:p-8 lg:p-10" id="hero">
            <Hero />
          </div>

          {/* Row 2: About & Experience (2 + 2 split) */}
          <div className="col-span-1 md:col-span-2 bento-card p-6 sm:p-8" id="about">
            <About />
          </div>

          <div className="col-span-1 md:col-span-2 bento-card p-6 sm:p-8" id="experience">
            <Experience />
          </div>

          {/* Row 3: Tech Stack & AI (3 cols) + Learnings/Hobbies (1 col) */}
          <div className="col-span-1 md:col-span-3 bento-card p-6 sm:p-8" id="stack">
            <Stack />
          </div>

          <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
            <div className="bento-card p-5 sm:p-6 flex-1">
              <Learnings />
            </div>
            <div className="bento-card p-5 sm:p-6 flex-1">
              <Hobbies />
            </div>
          </div>

          {/* Row 4: Projects (Full Width Bento Showcase with Metropolitan Featured) */}
          <div className="col-span-1 md:col-span-4 bento-card p-6 sm:p-8 lg:p-10" id="projects">
            <Projects />
          </div>

          {/* Row 5: Contact (Full Width Action Center) */}
          <div className="col-span-1 md:col-span-4 bento-card p-6 sm:p-8 lg:p-10" id="contact">
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
