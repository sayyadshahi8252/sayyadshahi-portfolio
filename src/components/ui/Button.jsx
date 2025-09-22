import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css';

const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const sizeMap = {
      default: styles.sizeDefault,
      sm: styles.sizeSm,
      lg: styles.sizeLg,
      icon: styles.sizeIcon,
    };
    const combinedClassName = [
      styles.button,
      styles[variant], 
      sizeMap[size],   
      className
    ].filter(Boolean).join(' '); 

    return <Comp className={combinedClassName} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button };