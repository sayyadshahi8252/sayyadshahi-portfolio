import React, { Suspense } from 'react'; // 1. Import Suspense
import { motion } from 'framer-motion';

// --- Eagerly load components visible on initial load ---
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

// --- 2. Lazily load the large, below-the-fold sections ---
const About = React.lazy(() => import('../components/About'));
const Projects = React.lazy(() => import('../components/Projects'));
const Skills = React.lazy(() => import('../components/Skills'));
const Services = React.lazy(() => import('../components/Services'));
const Contact = React.lazy(() => import('../components/Contact'));

// --- A simple component to show while the lazy components are loading ---
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0d1117',
    color: '#c9d1d9',
    fontFamily: 'sans-serif'
  }}>
    <p>Loading content...</p>
  </div>
);

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="main-container"
    >
      <Navigation />
      <Hero />

      {/* 3. Wrap the lazy components in a Suspense boundary */}
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </Suspense>
      
      <Footer />
    </motion.main>
  );
}