import React from 'react';
import { motion } from 'framer-motion'; 
import { Button } from './ui/Button'; 
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '../assets/background.png';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }, 
    },
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.backgroundContainer}>
        <img src={heroBackground} alt="Tech background" className={styles.backgroundImage} />
        <div className={styles.backgroundOverlay} />
      </div>
      <div className={styles.floatWrapper}>
        <div className={styles.float1} />
        <div className={styles.float2} />
        <div className={styles.float3} />
      </div>

      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className={styles.greeting}>👋 Hello, I'm</motion.p>
        
        <motion.h1 variants={itemVariants} className={styles.mainHeading}>
          <span className={styles.gradientText}>Sayyad Shahi</span>
        </motion.h1>

        <motion.div variants={itemVariants} className={styles.tagline}>
         <div className={styles.tagline}>
          <span className={styles.typewriter}>
         
            <span className={styles.desktopOnly}>Building the future with modern web applications</span>
            <span className={styles.mobileOnly}>Modern Web Applications</span>
          </span>
        </div>
        </motion.div>

        <motion.p variants={itemVariants} className={styles.description}>
          Full-Stack MERN Developer specializing in React.js, Node.js, and MongoDB. 
          Passionate about creating efficient, user-friendly web solutions.
        </motion.p>

        <motion.div variants={itemVariants} className={styles.buttonGroup}>
          <Button onClick={scrollToProjects}>View My Projects</Button>
          <Button onClick={scrollToContact} variant="outline" className={styles.contactButton}>
            Get In Touch
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.socialLinks}>
          <a href="https://github.com/sayyadshahi8252/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/sayyadshahi" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:sayyadshahi1805@gmail.com" className={styles.socialIcon} aria-label="Email">
            <Mail size={24} />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.scrollIndicator}>
          <ArrowDown size={24} className={styles.scrollArrow} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;