import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

const allProjects = [
  {
    title: "Velora - E-commerce Platform",
    description: "A full-stack e-commerce platform built with React.js, Node.js, and MongoDB...",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Cloudinary"],
    image: "/projects/velora.webp",
    liveDemo: "https://velora-frontend-iota.vercel.app/",
    github: "https://github.com/sayyadshahi8252/velora",
    category: "Full-Stack"
  },
  {
    title: "Grozee - Online Grocery Platform",
    description: "A modern grocery shopping platform with responsive design, optimized for fast load times...",
    tech: ["React.js", "CSS3", "JavaScript", "Responsive Design"],
    image: "/projects/Grozee.webp",
    liveDemo: "https://grozee.vercel.app/",
    github: "https://github.com/sayyadshahi8252/grozee",
    category: "Frontend"
  },
  {
    title: "UniVision - University Portal",
    description: "A comprehensive university portal featuring modern UI/UX design, responsive layout...",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "React Router"],
    image: "/projects/univision.webp",
    liveDemo: "https://uni-vision-lusk.vercel.app/",
    github: "https://github.com/sayyadshahi8252/univision",
    category: "Frontend"
  },
  {
    title: "Automation Workflows",
    description: "Custom automation solutions built with n8n, integrating various APIs and services...",
    tech: ["n8n", "APIs", "Webhooks", "Database Integration"],
    image: "/projects/n8nproject.webp",
    liveDemo: "https://www.linkedin.com/posts/sayyadshahi_n8n-automation-ai-activity-7368621387172806659-BAAy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnfxUMBb6PjTl9yhEdjgqVqp6Y-9IoMev8",
    github: "#",
    category: "Automation"
  }
];


const ProjectCard = memo(({ project, index }) => {
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: index * 0.1 } },
    exit: { y: -30, opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      className={styles.projectCard}
    >
      <div className={styles.imageWrapper}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
          width={500}
          height={300}
          loading="lazy"
        />
        <div className={styles.categoryBadge}>{project.category}</div>
      </div>
      <div className={styles.cardContent}>
        <div>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>
        <div className={styles.techStack}>
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className={styles.techBadge}>{tech}</span>
          ))}
        </div>
      </div>
      <div className={styles.cardOverlay}>
        <div className={styles.projectLinks}>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
            <ExternalLink size={16} /> Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.codeButton}`}>
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
});

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const categories = ['All', 'Full-Stack', 'Frontend', 'Automation'];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(p => p.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section id="projects" className={styles.projectsSection} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>My <span className={styles.gradientText}>Projects</span></h2>
          <p className={styles.sectionSubtitle}>A collection of projects showcasing my skills in development, design, and automation.</p>
        </motion.div>

        <motion.div
          className={styles.filterButtons}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.filterButton} ${activeFilter === category ? styles.active : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div className={styles.projectsGrid} layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className={styles.viewMoreContainer}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="https://github.com/sayyadshahi8252/" target="_blank" rel="noopener noreferrer" className={styles.viewMoreButton}>
            <Github size={18} /> View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
