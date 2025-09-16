import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { About, Experience, Projects, Skills, Education, Achievements, Contact, Footer } from './components/About';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
