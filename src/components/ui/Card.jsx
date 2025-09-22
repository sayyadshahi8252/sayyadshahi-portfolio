import React from 'react';
import styles from './Card.module.css'; // Import the new CSS module

// Each Card component is forwardRef'd to allow parent components to get a ref to the DOM element.
// The className prop is combined with the module's style for flexibility.

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`${styles.card} ${className || ''}`} {...props} />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`${styles.cardHeader} ${className || ''}`} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={`${styles.cardTitle} ${className || ''}`} {...props} />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={`${styles.cardDescription} ${className || ''}`} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`${styles.cardContent} ${className || ''}`} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`${styles.cardFooter} ${className || ''}`} {...props} />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };