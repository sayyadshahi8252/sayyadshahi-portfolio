import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, MessageCircle } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "b6e865f6-8beb-4606-9b90-7c8eea3d7247");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
    setTimeout(() => setResult(""), 5000);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };
  
  return (
    <section id="contact" className={styles.contactSection} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={styles.sectionTitle}>Get In <span className={styles.gradientText}>Touch</span></h2>
          <p className={styles.sectionSubtitle}>
            Ready to start your next project? I'd love to hear about your ideas and discuss how we can bring them to life together.
          </p>
        </motion.div>

        <div className={styles.mainGrid}>
          <motion.div 
            className={styles.formCard}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <form onSubmit={onSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required className={styles.formInput} placeholder="Your full name" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required className={styles.formInput} placeholder="your.email@example.com" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" required className={styles.formInput} placeholder="Project discussion, collaboration, etc." />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" required rows="5" className={styles.formTextarea} placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
              <p className={styles.formResult}>{result}</p>
            </form>
          </motion.div>

          <motion.div 
            className={styles.rightColumn}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <a href="mailto:sayyadshahi1805@gmail.com" className={styles.infoItem}><Mail size={20} /> sayyadshahi1805@gmail.com</a>
              <a href="tel:+918252589359" className={styles.infoItem}><Phone size={20} /> +91 8252589359</a>
              <div className={styles.infoItem}><MapPin size={20} /> Hazaribagh, Jharkhand, India</div>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Connect with me</h3>
              <div className={styles.socialsList}>
                <a href="https://github.com/sayyadshahi8252/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/sayyadshahi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24} /></a>
                <a href="https://wa.me/918252589359" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={24} /></a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Download Resume</h3>
              <p className={styles.infoDescription}>Get a detailed overview of my experience, skills, and projects.</p>
              <button className={styles.resumeButton} onClick={() => window.open('https://drive.google.com/file/d/1SWyXKFb_JQvXTKuV8RgL7_jhnqJfuUY0/view?usp=sharing')}>
                <Download size={16} /> Download CV
              </button>
            </motion.div>
            
            <motion.div variants={itemVariants} className={`${styles.infoCard} ${styles.availabilityCard}`}>
              <div className={styles.availabilityHeader}>
                <div className={styles.availabilityDot} />
                <h3 className={styles.infoTitle}>Available for Work</h3>
              </div>
              <p className={styles.infoDescription}>I'm currently available for freelance and full-time opportunities.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Contact;