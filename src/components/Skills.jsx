import { Card } from './ui/Card';
import { useState, useEffect, useRef } from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null); 

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 90 }, { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 95 }, { name: "CSS3", level: 90 },
        { name: "Javascript", level: 80 }, { name: "Tailwind CSS", level: 85 },
      ]
    },
    {
      title: "Backend Technologies", icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85 }, { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 85 }, { name: "MySQL", level: 75 },
        { name: "PHP", level: 70 }, { name: "REST APIs", level: 88 },
      ]
    },
    {
      title: "Tools & Platforms", icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 90 }, { name: "VS Code", level: 95 },
        { name: "Vite", level: 85 }, { name: "n8n", level: 80 },
        { name: "Cloudinary", level: 75 }, { name: "Postman", level: 85 },
      ]
    },
    {
      title: "Concepts & Other", icon: "💡",
      skills: [
        { name: "Data Structures", level: 80 }, { name: "Algorithms", level: 75 },
        { name: "Solidity", level: 65 }, { name: "Blockchain", level: 70 },
        { name: "Problem Solving", level: 90 }, { name: "Team Collaboration", level: 95 },
      ]
    }
  ];

  const certifications = [
    "Blockchain Revolution Specialization - 2024",
    "Web Development with HTML, CSS, JavaScript - 2023",
    "Responsive Web Design - 2023",
    "NPTEL Certificate in Information Technology (86%) - 2023",
    "Web Development Intern - Internshala Training (2023)",
    "Angular Developer Program - Infosys Training (2023)"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } 
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className={styles.skillsSection} ref={skillsRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            My <span className={styles.gradientText}>Skills</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            A comprehensive set of technical skills and tools I use to build modern,
            efficient web applications and solve complex problems.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={styles.skillCard}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillBadge}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div
                        className={styles.skillProgressBar}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className={styles.certificationsSection}>
          <h3 className={styles.certificationsTitle}>
            Certifications & Training
          </h3>
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={styles.certificationItem}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                🏆 {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;