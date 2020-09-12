import React, { CSSProperties } from 'react';
import styles from './Button.module.css';

const Button: React.FC<{ style?: CSSProperties }> = ({ children, style, ...props }) => {
  return (
    <button 
      className={styles.button_default_styles}
      style={{...style}}
      {...props}
    >
      {children}
    </button>
  )
};

export default Button;