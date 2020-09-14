import React, { CSSProperties } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: CSSProperties;
  [key: string]: any;
};

const Button: React.FC<ButtonProps> = ({ onClick, style, children, ...props }) => {
  return (
    <button 
      className={styles.button_default_styles}
      style={{...style}}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
};

export default Button;