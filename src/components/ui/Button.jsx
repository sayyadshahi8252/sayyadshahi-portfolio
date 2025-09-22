import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css';

const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    // Map size prop to the correct CSS module class name
    const sizeMap = {
      default: styles.sizeDefault,
      sm: styles.sizeSm,
      lg: styles.sizeLg,
      icon: styles.sizeIcon,
    };

    // Combine classes: base style, variant style, size style, and any custom className passed in
    const combinedClassName = [
      styles.button,
      styles[variant], // e.g., styles.default, styles.outline
      sizeMap[size],   // e.g., styles.sizeDefault
      className
    ].filter(Boolean).join(' '); // filter(Boolean) removes any undefined/null values

    return <Comp className={combinedClassName} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button };