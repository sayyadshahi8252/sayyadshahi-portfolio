import React, { useRef } from 'react';
import { GraduationCap, MapPin, User } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import styles from './About.module.css';


const statsData = [
  { value: 15, label: "Projects Completed" },
  { value: 3, label: "Years Learning" },
  { value: 1, label: "Project Delivered" }
];

const educationData = [
  {
    dotClass: styles.dotPrimary,
    subtitleClass: styles.subtitlePrimary,
    title: "B.E. Computer Science & Engineering",
    subtitle: "Chandigarh University, Mohali",
    meta: "2021 - 2025 • CGPA: 7.81"
  },
  {
    dotClass: styles.dotAccent,
    subtitleClass: styles.subtitleAccent,
    title: "XII (CBSE)",
    subtitle: "DAV Public School, Hazaribagh",
    meta: "2020 • 86.40%"
  }
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};


const AnimatedStat = ({ value, label, isInView }) => {
  return (
    <motion.div
      className={styles.statCard}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={styles.statNumber}>{value}+</div>
      <div className={styles.statLabel}>{label}</div>
    </motion.div>
  );
};

const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className={styles.aboutSection} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>
            About <span className={styles.gradientText}>Me</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Passionate developer with a strong foundation in computer science and hands-on experience in building scalable applications.
          </p>
        </motion.div>

        <div className={styles.gridContainer}>
          <motion.div
            className={styles.aboutTextColumn}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className={styles.columnHeader}>
              <div className={styles.iconWrapper}><User color="#38bdf8" size={24} /></div>
              <h3 className={styles.columnTitle}>Who I Am</h3>
            </motion.div>

            <motion.p variants={itemVariants} className={styles.aboutParagraph}>
              I'm a <strong className={styles.strongText}>2025 Computer Science & Engineering graduate</strong> with a passion for creating innovative web solutions. As a freelance MERN stack developer, I specialize in building modern, responsive, and scalable applications.
            </motion.p>
            <motion.p variants={itemVariants} className={styles.aboutParagraph}>
              My journey has led me to cutting-edge technologies like <span className={styles.highlightText}>React.js, Node.js, and MongoDB</span>. I'm also experienced in automation with n8n and have a keen interest in blockchain.
            </motion.p>
            
            <motion.div variants={itemVariants} className={styles.location}>
              <MapPin size={18} color="#38bdf8" />
              <span>Hazaribagh, Jharkhand, India</span>
            </motion.div>
            
            <div className={styles.statsGrid}>
              {statsData.map(stat => (
                <AnimatedStat key={stat.label} value={stat.value} label={stat.label} isInView={isInView} />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className={styles.educationColumn}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className={styles.columnHeader}>
              <div className={styles.iconWrapper}><GraduationCap color="#38bdf8" size={24} /></div>
              <h3 className={styles.columnTitle}>Education</h3>
            </motion.div>

            <div className={styles.educationTimeline}>
              {educationData.map(edu => (
                <motion.div key={edu.title} variants={itemVariants} className={styles.timelineCard}>
                  <div className={styles.timelineItem}>
                    <div className={`${styles.timelineDot} ${edu.dotClass}`} />
                    <div className={styles.timelineContent}>
                      <h4 className={styles.timelineTitle}>{edu.title}</h4>
                      <p className={`${styles.timelineSubtitle} ${edu.subtitleClass}`}>{edu.subtitle}</p>
                      <p className={styles.timelineMeta}>{edu.meta}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className={styles.researchBox}>
              <h4 className={styles.researchTitle}>📄 Research Publication</h4>
              <p className={styles.researchText}>"Research on Ethical Hacking" in GIJET, Volume 9, Issue 1, Jan 2023 • SCOPUS indexed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;