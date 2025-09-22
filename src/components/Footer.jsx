import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/Sayyad-Shahi" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/sayyad-shahi" },
    { icon: Mail, label: "Email", link: "mailto:sayyadshahi1805@gmail.com" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          <div className={styles.brandColumn}>
            <div className={styles.brandLogo} onClick={scrollToTop} role="button" tabIndex={0}>
              Sayyad Shahi
            </div>
            <p className={styles.brandDescription}>
              Full-Stack MERN Developer passionate about creating modern,
              scalable web applications that solve real-world problems.
            </p>
            <div className={styles.socialsList}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.link} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={social.label}>
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollTo(link.href)} className={styles.quickLink}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contactColumn}>
            <h3 className={styles.columnTitle}>Get In Touch</h3>
            <div className={styles.contactList}>
              <p>📧 sayyadshahi1805@gmail.com</p>
              <p>📱 +91 8252589359</p>
              <p>📍 Hazaribagh, Jharkhand, India</p>
            </div>
            <div className={styles.availability}>
              <div className={styles.availabilityDot} />
              <span className={styles.availabilityText}>Available for work</span>
            </div>
          </div>
        </div>


        <div className={styles.bottomBar}>
          <div className={styles.bottomBarContent}>

            <div className={styles.copyright}>
              <span>© {currentYear} Sayyad Shahi. All Rights Reserved.</span>
            </div>
            
         
            <div className={styles.footerActions}>

              <button onClick={scrollToTop} className={styles.backToTopButton}>
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;