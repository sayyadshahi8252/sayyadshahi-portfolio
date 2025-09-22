import { Card } from './ui/Card';
import { Button } from './ui/Button';
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Zap,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      icon: Globe, title: "Full-Stack Web Development",
      description: "End-to-end web application development using the MERN stack. From concept to deployment, I handle everything.",
      features: ["React.js frontend development", "Node.js & Express.js backend", "MongoDB database design", "RESTful API development", "Authentication & authorization", "Responsive design"],
      color: "text-primary"
    },
    {
      icon: Code2, title: "Frontend Development",
      description: "Modern, responsive, and interactive user interfaces that provide exceptional user experiences.",
      features: ["React.js applications", "TypeScript integration", "Tailwind CSS styling", "Performance optimization", "Cross-browser compatibility", "Mobile-first design"],
      color: "text-accent"
    },
    {
      icon: Database, title: "Backend Development",
      description: "Robust server-side solutions with secure APIs, database management, and scalable architecture.",
      features: ["RESTful API design", "Database modeling", "JWT authentication", "File upload handling", "Third-party integrations", "Server deployment"],
      color: "text-success"
    },
    {
      icon: Zap, title: "Workflow Automation",
      description: "Streamline business processes with custom automation solutions using n8n and various integrations.",
      features: ["n8n workflow automation", "API integrations", "Data synchronization", "Process optimization", "Webhook configurations", "Custom automation scripts"],
      color: "text-primary"
    },
    {
      icon: Smartphone, title: "Responsive Web Apps",
      description: "Mobile-optimized web applications that work seamlessly across all devices and screen sizes.",
      features: ["Mobile-first approach", "Touch-friendly interfaces", "Progressive Web Apps", "Cross-platform compatibility", "Performance optimization", "Offline functionality"],
      color: "text-accent"
    },
    {
      icon: Users, title: "Consulting & Support",
      description: "Technical consultation, code reviews, and ongoing support for your existing projects.",
      features: ["Code review & optimization", "Technical architecture advice", "Performance audits", "Bug fixing & debugging", "Technology recommendations", "Ongoing maintenance"],
      color: "text-success"
    }
  ];

  const processSteps = [
    { step: "1", title: "Discovery", desc: "Understanding your requirements and goals" },
    { step: "2", title: "Design", desc: "Creating wireframes and technical architecture" },
    { step: "3", title: "Development", desc: "Building your application with best practices" },
    { step: "4", title: "Deployment", desc: "Testing, deployment, and ongoing support" }
  ];

  // Maps the color names from your data to the CSS module classes
  const colorMap = {
    'text-primary': styles.iconPrimary,
    'text-accent': styles.iconAccent,
    'text-success': styles.iconSuccess,
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            My <span className={styles.gradientText}>Services</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            I offer comprehensive web development services to help bring your ideas to life
            with modern technologies and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={styles.serviceCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${styles.serviceIconWrapper} ${colorMap[service.color]}`}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <div className={styles.featuresList}>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={styles.featureItem}>
                      <CheckCircle size={14} className={styles.featureIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className={styles.processSection}>
          <h3 className={styles.processTitle}>My Development Process</h3>
          <div className={styles.processGrid}>
            {processSteps.map((process, index) => (
              <div
                key={index}
                className={styles.processStep}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.stepNumber}>
                  {process.step}
                </div>
                <h4 className={styles.stepTitle}>{process.title}</h4>
                <p className={styles.stepDescription}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Ready to Start Your Project?</h3>
          <p className={styles.ctaText}>
            Let's discuss your project requirements and create something amazing together.
            I'm always excited to work on new challenges and innovative ideas.
          </p>
          <Button onClick={scrollToContact}>
            Get Started
            <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;