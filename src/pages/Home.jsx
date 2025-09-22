import React, { Suspense } from 'react'; 
import { motion } from 'framer-motion';


import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


const About = React.lazy(() => import('../components/About'));
const Projects = React.lazy(() => import('../components/Projects'));
const Skills = React.lazy(() => import('../components/Skills'));
const Services = React.lazy(() => import('../components/Services'));
const Contact = React.lazy(() => import('../components/Contact'));

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