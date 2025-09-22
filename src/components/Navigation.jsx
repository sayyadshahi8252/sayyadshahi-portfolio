import { useState, useEffect } from 'react';
import { Button } from './ui/Button'; 
import { Menu, X } from 'lucide-react';
import styles from './Navigation.module.css'; 

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      let currentSection = 'home';
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            currentSection = item.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); 
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div
            className={styles.logo}
            onClick={() => scrollTo('home')}
            role="button"
            tabIndex={0}
            onKeyPress={() => scrollTo('home')}
          >
            Sayyad Shahi
          </div>

          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`${styles.navLink} ${
                  activeSection === item.id ? styles.active : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className={styles.hireMeButtonDesktop}>
            <Button onClick={() => scrollTo('contact')}>Hire Me</Button>
          </div>
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className={styles.mobileNav}>
            <div className={styles.mobileNavLinks}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`${styles.navLink} ${
                    activeSection === item.id ? styles.active : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo('contact')}
                className={styles.mobileHireButton}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;